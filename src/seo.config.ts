import { DefaultSeoProps } from 'next-seo';
import { SITE_NAME, SITE_URL } from './env';

export const defaultSEO: DefaultSeoProps = {
  titleTemplate: `%s | ${SITE_NAME}`,
  defaultTitle: SITE_NAME,
  description: '赤身肉とチーズの美味しさで、心も体も元気になるダイニング',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: SITE_URL,
    site_name: SITE_NAME,
  },
};
