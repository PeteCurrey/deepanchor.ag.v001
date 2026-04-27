import { MetadataRoute } from 'next';
import { MOCK_MARINAS, MOCK_ARTICLES } from '@/lib/mock-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://deepanchor.io';

  const marinas = MOCK_MARINAS.map((m) => ({
    url: `${baseUrl}/marinas/${m.country}/${m.coast}/${m.slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }));

  const articles = MOCK_ARTICLES.map((a) => ({
    url: `${baseUrl}/the-wake/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const staticPages = [
    '',
    '/marinas',
    '/passage-planner',
    '/the-wake',
    '/maintenance',
    '/community',
    '/pricing',
    '/glossary',
    '/oracle',
    '/uk-marina-guide',
    '/for-marinas',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.9,
  }));

  return [...staticPages, ...marinas, ...articles];
}
