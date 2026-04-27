import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Deep Anchor',
    short_name: 'DeepAnchor',
    description: 'Maritime Intelligence & Planning Platform',
    start_url: '/',
    display: 'standalone',
    background_color: '#0B2A3D',
    theme_color: '#D4920A',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
  };
}
