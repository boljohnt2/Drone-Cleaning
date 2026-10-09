import type { Metadata, Viewport } from 'next';
import RevealOnScroll from '@/components/RevealOnScroll';
// Heebo is self-hosted (no Google Fonts request at build or runtime).
import '@fontsource-variable/heebo';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tdrone.co.il'),
  title: 'TDrone — הדור החדש של ניקיון בגבהים',
  description:
    'ניקוי מקצועי ובטוח באמצעות רחפנים מתקדמים. פתרון חדשני לניקוי מבנים, חזיתות ומערכות סולאריות בגובה.',
  icons: { icon: '/tdrone-logo.png' },
  openGraph: {
    title: 'TDrone — הדור החדש של ניקיון בגבהים',
    description:
      'ניקוי מקצועי ובטוח באמצעות רחפנים מתקדמים. פתרון חדשני לניקוי מבנים, חזיתות ומערכות סולאריות בגובה.',
    locale: 'he_IL',
    type: 'website',
    images: ['/service-buildings.avif'],
  },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body>
        {children}
        <RevealOnScroll />
      </body>
    </html>
  );
}
