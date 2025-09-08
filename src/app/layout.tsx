import './globals.css';
import type { Metadata } from 'next';
import { SITE_NAME, SITE_TEL, RESERVE_URL, LINE_URL } from '../env';
import { StickyCTA } from '../components/StickyCTA';
import { DefaultSeo } from 'next-seo';
import { defaultSEO } from '../seo.config';
import { SchemaOrg } from '../components/SchemaOrg';

export const metadata: Metadata = {
  title: SITE_NAME,
  description: 'お肉と笑顔に囲まれて、楽しく成長できるKU-DETA！',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-screen flex flex-col">
        <DefaultSeo {...defaultSEO} />
        <SchemaOrg />
        {children}
        <StickyCTA phone={SITE_TEL} reserveUrl={RESERVE_URL} lineUrl={LINE_URL} />
      </body>
    </html>
  );
}
