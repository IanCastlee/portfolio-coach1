import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { services } from '../src/data/services.js';
import { journalPosts } from '../src/data/journal.js';
import { SITE_URL } from '../src/seo/seoConfig.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const today = new Date().toISOString().split('T')[0];

const urls = [
  // Primary Static Routes
  { path: '/', priority: '1.0', changefreq: 'weekly', lastmod: today },
  { path: '/about', priority: '0.9', changefreq: 'monthly', lastmod: today },
  { path: '/services', priority: '0.9', changefreq: 'weekly', lastmod: today },
  { path: '/journal', priority: '0.8', changefreq: 'weekly', lastmod: today },
  { path: '/contact', priority: '0.8', changefreq: 'monthly', lastmod: today },

  // Dynamic Service Routes
  ...services.map((svc) => ({
    path: `/services/${svc.slug}`,
    priority: '0.85',
    changefreq: 'monthly',
    lastmod: today,
  })),

  // Dynamic Journal Articles
  ...journalPosts.map((post) => ({
    path: `/journal/${post.slug}`,
    priority: '0.75',
    changefreq: 'monthly',
    lastmod: post.dateModified ? post.dateModified.split('T')[0] : today,
  })),
];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${SITE_URL}${u.path}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

// Write to public/ and dist/
const publicDir = path.join(rootDir, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const publicSitemap = path.join(publicDir, 'sitemap.xml');
fs.writeFileSync(publicSitemap, sitemapXml, 'utf-8');
console.log(`[Sitemap] Generated public/sitemap.xml with ${urls.length} URLs`);

const robotsTxt = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /
Disallow: /404

Sitemap: ${SITE_URL}/sitemap.xml
`;

const publicRobots = path.join(publicDir, 'robots.txt');
fs.writeFileSync(publicRobots, robotsTxt, 'utf-8');
console.log('[Robots] Generated public/robots.txt');

const distDir = path.join(rootDir, 'dist');
if (fs.existsSync(distDir)) {
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf-8');
  fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsTxt, 'utf-8');
  console.log('[Postbuild] Synced sitemap.xml and robots.txt to dist/');
}
