import { NextApiRequest, NextApiResponse } from 'next';
import { siteConfig } from '@/config/site';
import { mainNavigation } from '@/config/navigation';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const baseUrl = siteConfig.url;
  const pages = mainNavigation.map(nav => nav.href);
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages.map(page => `
        <url>
          <loc>${baseUrl}${page}</loc>
          <changefreq>daily</changefreq>
          <priority>${page === '/' ? '1.0' : '0.8'}</priority>
        </url>
      `).join('')}
    </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();
}