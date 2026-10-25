const https = require('https');
const fs = require('fs');
const path = require('path');

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

async function scrapeCategories() {
  const homeHtml = await fetchPage('https://www.wzsmarine.com/');
  const hrefMatches = [...homeHtml.matchAll(/href=["'](https:\/\/www\.wzsmarine\.com\/[^"']+)["']/gi)];
  const urls = Array.from(new Set(hrefMatches.map(m => m[1])));
  console.log('Categories / URLs on WZS Marine:', urls.filter(u => !u.endsWith('.css') && !u.endsWith('.js')));
}

scrapeCategories().catch(console.error);
