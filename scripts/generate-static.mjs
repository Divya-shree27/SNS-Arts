import fs from 'node:fs/promises';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const createJiti = require('jiti');
const jiti = createJiti(import.meta.url);

const root = process.cwd();
const out = root;

const { Layout } = jiti(path.join(root, 'src/components/layout.tsx'));
const { PageHeader } = jiti(path.join(root, 'src/components/page-header.tsx'));

const { HomePage } = jiti(path.join(root, 'src/pages/home.tsx'));
const { PrePrimaryPage, PrimaryPage, MiddleSchoolPage } = jiti(path.join(root, 'src/pages/academics.tsx'));
const { FacilitiesPage } = jiti(path.join(root, 'src/pages/facilities.tsx'));
const { InnovationPage, AboutPage, ContactPage, AdmissionsPage } = jiti(path.join(root, 'src/pages/remaining.tsx'));
const { MandatoryDisclosurePage } = jiti(path.join(root, 'src/pages/mandatory-disclosure.tsx'));
const { GalleryPage, SportsClubsPage, BrochurePage } = jiti(path.join(root, 'src/pages/gallery-sports.tsx'));
const { TransportPage } = jiti(path.join(root, 'src/pages/transport.tsx'));
const { EventsPage } = jiti(path.join(root, 'src/pages/events.tsx'));
const { SuccessStoriesPage } = jiti(path.join(root, 'src/pages/success-stories.tsx'));
const { StanfordPathwayPage } = jiti(path.join(root, 'src/pages/stanford-pathway.tsx'));

const srcIndex = await fs.readFile(path.join(root, 'src/index.tsx'), 'utf8');
const secondaryMatch = srcIndex.match(/const content = `([\s\S]*?)`;\s*return c\.html\(Layout\(content, 'Secondary & Senior Secondary Education', 'academics-secondary'\)\)/);
if (!secondaryMatch) {
  throw new Error('Could not extract secondary page template from src/index.tsx');
}
const secondaryTemplate = secondaryMatch[1];
const secondaryContent = new Function('PageHeader', `return \`${secondaryTemplate}\`;`)(PageHeader);

const pages = [
  { file: 'index.html', html: Layout(HomePage(), 'Home', 'home') },
  { file: 'academics/pre-primary/index.html', html: Layout(PrePrimaryPage(), 'Pre-Primary Education', 'academics-pre-primary') },
  { file: 'academics/primary/index.html', html: Layout(PrimaryPage(), 'Primary Education', 'academics-primary') },
  { file: 'academics/middle/index.html', html: Layout(MiddleSchoolPage(), 'Middle School Education', 'academics-middle') },
  { file: 'academics/secondary/index.html', html: Layout(secondaryContent, 'Secondary & Senior Secondary Education', 'academics-secondary') },
  { file: 'academics/senior-secondary/index.html', html: Layout(secondaryContent, 'Secondary & Senior Secondary Education', 'academics-secondary') },
  { file: 'facilities/index.html', html: Layout(FacilitiesPage(), 'Facilities', 'facilities') },
  { file: 'innovation/index.html', html: Layout(InnovationPage(), 'Innovation Hub', 'innovation') },
  { file: 'about/index.html', html: Layout(AboutPage(), 'About Us', 'about') },
  { file: 'contact/index.html', html: Layout(ContactPage(), 'Contact Us', 'contact') },
  { file: 'mandatory-disclosure/index.html', html: Layout(MandatoryDisclosurePage(), 'Mandatory Disclosure', 'mandatory-disclosure') },
  { file: 'admissions/index.html', html: Layout(AdmissionsPage(), 'Admissions', 'admissions') },
  { file: 'gallery/index.html', html: Layout(GalleryPage(), 'Campus Gallery', 'gallery') },
  { file: 'sports-clubs/index.html', html: Layout(SportsClubsPage(), 'Sports & Clubs', 'sports-clubs') },
  { file: 'brochure/index.html', html: Layout(BrochurePage(), 'Digital Brochure', 'brochure') },
  { file: 'transport/index.html', html: Layout(TransportPage(), 'Transport Services', 'transport') },
  { file: 'events/index.html', html: Layout(EventsPage(), 'Events & Celebrations', 'events') },
  { file: 'success-stories/index.html', html: Layout(SuccessStoriesPage(), 'Success Stories', 'success-stories') },
  { file: 'stanford-pathway/index.html', html: Layout(StanfordPathwayPage(), 'Pathway to Stanford', 'stanford-pathway') },
];

for (const page of pages) {
  const target = path.join(out, page.file);
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.writeFile(target, page.html, 'utf8');
}

await fs.rm(path.join(out, 'static'), { recursive: true, force: true });
const copyDir = async (from, to) => {
  await fs.mkdir(to, { recursive: true });
  const entries = await fs.readdir(from, { withFileTypes: true });
  for (const entry of entries) {
    const src = path.join(from, entry.name);
    const dst = path.join(to, entry.name);
    if (entry.isDirectory()) {
      await copyDir(src, dst);
    } else {
      await fs.copyFile(src, dst);
    }
  }
};
await copyDir(path.join(root, 'public/static'), path.join(out, 'static'));

console.log(`Generated ${pages.length} static pages and copied /public/static -> /static`);
