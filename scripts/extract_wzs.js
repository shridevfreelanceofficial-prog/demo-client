const https = require('https');
const fs = require('fs');
const path = require('path');

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function run() {
  console.log('Fetching WZS Marine Turbocharger page...');
  const html = await fetchPage('https://www.wzsmarine.com/marine-turbocharger');
  console.log('HTML length:', html.length);
  
  // Find all images
  const regex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
  let match;
  const images = [];
  while ((match = regex.exec(html)) !== null) {
    images.push(match[1]);
  }
  console.log('Found images:', images);

  // Find all links to products or categories
  const hrefRegex = /href=["']([^"']+)["']/gi;
  const hrefs = [];
  while ((match = hrefRegex.exec(html)) !== null) {
    if (match[1].includes('turbo') || match[1].includes('product')) {
      hrefs.push(match[1]);
    }
  }
  console.log('Product links:', Array.from(new Set(hrefs)));
}

run().catch(console.error);
