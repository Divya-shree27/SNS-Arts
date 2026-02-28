import urllib.request
import json
import re

url = "https://html.duckduckgo.com/html/?q=Dr.+SNS+Rajalakshmi+College+of+Arts+and+Science+building"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
html = urllib.request.urlopen(req).read().decode('utf-8')
urls = re.findall(r'vqd=([\d-]+)', html)
if urls:
    vqd = urls[0]
    search_url = f"https://duckduckgo.com/i.js?q=Dr.+SNS+Rajalakshmi+College+of+Arts+and+Science+building&vqd={vqd}"
    req_img = urllib.request.Request(search_url, headers={'User-Agent': 'Mozilla/5.0'})
    print(urllib.request.urlopen(req_img).read().decode('utf-8')[:500])
