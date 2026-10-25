const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const client = url.startsWith('https') ? https : http;
    client.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadImage(res.headers.location, dest).then(resolve).catch(reject);
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve(dest));
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

const pages = [
  { url: 'https://www.wzsmarine.com/marine-turbocharger', prefix: 'turbo' },
  { url: 'https://www.wzsmarine.com/engine-spare-parts', prefix: 'engine' },
  { url: 'https://www.wzsmarine.com/marine-pumps', prefix: 'pump' },
  { url: 'https://www.wzsmarine.com/marine-valves', prefix: 'valve' },
  { url: 'https://www.wzsmarine.com/marine-motors', prefix: 'motor' },
  { url: 'https://www.wzsmarine.com/marine-instruments', prefix: 'nav' },
  { url: 'https://www.wzsmarine.com/marine-lights', prefix: 'elec' },
  { url: 'https://www.wzsmarine.com/other-ships-spare-parts', prefix: 'deck' }
];

async function run() {
  const downloadedMap = {};

  for (const page of pages) {
    console.log(`Scraping images from ${page.url}...`);
    try {
      const html = await fetchPage(page.url);
      const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
      let match;
      let count = 0;
      while ((match = imgRegex.exec(html)) !== null) {
        let src = match[1];
        if (src.includes('logo') || src.includes('icon') || src.includes('favicon') || src.includes('banner')) continue;
        if (!src.startsWith('http')) {
          src = 'https://www.wzsmarine.com' + src;
        }

        const ext = path.extname(src.split('?')[0]) || '.webp';
        const cleanName = path.basename(src.split('?')[0]);
        const filename = `${page.prefix}_${cleanName}`;
        const dest = path.join(targetDir, filename);

        try {
          console.log(`Downloading: ${src} -> ${filename}`);
          await downloadImage(src, dest);
          if (!downloadedMap[page.prefix]) downloadedMap[page.prefix] = [];
          downloadedMap[page.prefix].push({
            filename: `/images/${filename}`,
            originalSrc: src,
            cleanName
          });
          count++;
          if (count >= 8) break; // 8 real images per category is plenty!
        } catch (e) {
          console.error(`Failed to download ${src}:`, e.message);
        }
      }
    } catch (err) {
      console.error(`Error scraping ${page.url}:`, err.message);
    }
  }

  fs.writeFileSync(path.join(__dirname, 'downloaded_images.json'), JSON.stringify(downloadedMap, null, 2));
  console.log('Finished downloading images! Saved manifest to downloaded_images.json');
}

run().catch(console.error);
