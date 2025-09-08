import { RESERVE_URL, SITE_TEL, LINE_URL } from '../../env';
import Link from 'next/link';

export default function Reserve() {
  return (
    <main className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Reserve</h1>
      <p><a href={`tel:${SITE_TEL}`}>電話予約</a></p>
      <p><Link href={RESERVE_URL}>Web予約</Link></p>
      <p><Link href={LINE_URL}>LINEで予約</Link></p>
    </main>
  );
}
