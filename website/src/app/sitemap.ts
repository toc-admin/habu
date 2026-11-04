import type { MetadataRoute } from 'next';

const BASE_URL = 'https://habu.hr';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number }[] = [
    { path: '', priority: 1 },
    { path: '/najam-ureda', priority: 0.9 },
    { path: '/sobe-za-sastanke', priority: 0.9 },
    { path: '/virtualni-ured', priority: 0.9 },
    { path: '/business-club', priority: 0.9 },
    { path: '/o-nama', priority: 0.7 },
    { path: '/kontakt', priority: 0.8 },
    { path: '/faq', priority: 0.6 },
    { path: '/gdpr', priority: 0.3 },
    { path: '/kolacici', priority: 0.3 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority,
  }));
}
