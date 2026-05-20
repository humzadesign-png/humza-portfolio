import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nails by Mona — Case Study | Humza Saeed',
  description: 'End-to-end UX research, UI design, and full-stack build for a handmade press-on nail studio in Mirpur, Pakistan. Personas, journey maps, wireframes, live storefront, and a Filament admin panel.',
  openGraph: {
    title: 'Nails by Mona — Case Study | Humza Saeed',
    description: 'End-to-end UX and product build for a one-woman press-on nail studio in Pakistan — research, wireframes, design system, live storefront, and admin dashboard.',
    url: 'https://humzadesign.com/nails-by-mona',
    images: [{ url: '/nbm-hero.jpg', width: 1440, height: 1800 }],
    type: 'article',
  },
};

export default function NailsByMonaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
