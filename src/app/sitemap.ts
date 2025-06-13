import { MetadataRoute } from 'next';
import { generateSitemapUrls } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const urls = generateSitemapUrls();
  
  return urls.map(({ url, priority, changefreq }) => ({
    url,
    lastModified: new Date(),
    changeFrequency: changefreq as 'daily' | 'weekly' | 'monthly',
    priority,
  }));
} 