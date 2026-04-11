import type { Metadata } from 'next';
import './globals.css';

export const runtime = 'edge';

export const metadata: Metadata = {
  title: 'Humza Saeed — UX & UI Designer',
  description: 'Portfolio of Humza Saeed — UX & UI Designer based in Magdeburg, Germany.',
  metadataBase: new URL('https://humzadesign.com'),
  openGraph: {
    title: 'Humza Saeed — UX & UI Designer',
    description: 'Portfolio of Humza Saeed — UX & UI Designer based in Magdeburg, Germany.',
    url: 'https://humzadesign.com',
    siteName: 'humzadesign',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Humza Saeed — UX & UI Designer' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Humza Saeed — UX & UI Designer',
    description: 'Portfolio of Humza Saeed — UX & UI Designer based in Magdeburg, Germany.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&family=Noto+Nastaliq+Urdu&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
