import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Smokin Grill — Case Study | Humza Saeed',
  description: 'End-to-end UX & UI case study for a food ordering mobile app — research, personas, wireframes, and final design.',
  openGraph: {
    title: 'Smokin Grill — Case Study | Humza Saeed',
    description: 'End-to-end UX & UI case study for a food ordering mobile app — research, personas, wireframes, and final design.',
    url: 'https://humzadesign.com/smokin-grill',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Smokin Grill case study' }],
    type: 'website',
  },
};

export default function SmokinGrillLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
