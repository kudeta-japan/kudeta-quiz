import { SITE_NAME, SITE_URL, SITE_ADDRESS, SITE_TEL, SITE_HOURS, RESERVE_URL } from '../env';

export function SchemaOrg() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: SITE_NAME,
    url: SITE_URL,
    telephone: SITE_TEL,
    address: SITE_ADDRESS,
    openingHours: SITE_HOURS,
    acceptsReservations: RESERVE_URL,
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
