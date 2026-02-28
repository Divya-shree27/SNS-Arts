// Page Header Component with Real Images
export const PageHeader = (title: string, subtitle: string, backgroundImage: string, breadcrumb?: string) => {
    return `
    <section class="relative h-[40vh] min-h-[400px] flex items-center justify-center text-white overflow-hidden">
        <!-- Background Image -->
        <div class="absolute inset-0 z-0">
            <img src="${backgroundImage}" alt="${title}" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>
        
        <!-- Content -->
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            ${breadcrumb ? `
            <nav class="mb-6">
                <div class="flex items-center justify-center space-x-2 text-sm text-white/80">
                    <a href="/" class="hover:text-white transition">Home</a>
                    <i class="fas fa-chevron-right text-xs"></i>
                    <span class="text-white">${breadcrumb}</span>
                </div>
            </nav>
            ` : ''}
            
            <h1 class="text-4xl lg:text-6xl font-extrabold mb-6 leading-tight">${title}</h1>
            <p class="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">${subtitle}</p>
            
            <!-- Decorative Element -->
            <div class="mt-8 flex justify-center">
                <div class="w-24 h-1 bg-orange-500 rounded-full"></div>
            </div>
        </div>
        
        <!-- Scroll Indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <i class="fas fa-chevron-down text-white/60 text-2xl"></i>
        </div>
    </section>
    `;
};