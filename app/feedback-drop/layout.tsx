import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FeedbackDrop — Case Study | Humza Saeed',
  description: 'Product design case study for FeedbackDrop — a SaaS customer feedback management platform with public voting board, admin dashboard, and embeddable widget.',
  openGraph: {
    title: 'FeedbackDrop — Case Study | Humza Saeed',
    description: 'Product design case study for FeedbackDrop — a SaaS customer feedback management platform.',
    url: 'https://humzadesign.com/feedback-drop',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'website',
  },
};

export default function FeedbackDropLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
