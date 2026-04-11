import type { Metadata } from 'next';
import { DM_Serif_Display, DM_Sans, Noto_Nastaliq_Urdu } from 'next/font/google';
import './globals.css';

export const runtime = 'edge';

const dmSerif = DM_Serif_Display({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const dmSans = DM_Sans({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const notoNastaliq = Noto_Nastaliq_Urdu({
  weight: ['400'],
  subsets: ['arabic'],
  variable: '--font-urdu',
  display: 'swap',
});

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
    <html lang="en" className={`${dmSerif.variable} ${dmSans.variable} ${notoNastaliq.variable}`}>
      <body>{children}</body>
    </html>
  );
}
