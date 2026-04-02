import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://denizsinanoglu.com';
  
  const staticPages = ['', '/hakkimizda', '/hizmetler', '/online-terapi', '/blog'];
  
  const serviceSlugs = [
    'cocuk-psikologu-canakkale',
    'ergen-psikologu-canakkale',
    'yetiskin-psikologu-canakkale',
    'aile-danismanligi-canakkale'
  ];

  const blogSlugs = [
    'kaygi-ile-basa-cikma-yollari',
    'daha-iyi-bir-uyku-icin-oneriler'
  ];

  const physicianSlugs = ['deniz-sinanoglu'];

  const sitemapData: MetadataRoute.Sitemap = [];

  routing.locales.forEach((locale) => {
    // Static Pages
    staticPages.forEach((page) => {
      sitemapData.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: page === '' ? 1 : 0.8,
      });
    });

    // Service Pages
    serviceSlugs.forEach((slug) => {
      sitemapData.push({
        url: `${baseUrl}/${locale}/hizmetler/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    });

    // Blog Pages
    blogSlugs.forEach((slug) => {
      sitemapData.push({
        url: `${baseUrl}/${locale}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.6,
      });
    });

    // Physician Pages
    physicianSlugs.forEach((slug) => {
      sitemapData.push({
        url: `${baseUrl}/${locale}/uzman/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    });
  });

  return sitemapData;
}
