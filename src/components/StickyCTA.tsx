'use client';
import Link from 'next/link';

type Props = {
  phone: string;
  reserveUrl: string;
  lineUrl: string;
};

export function StickyCTA({ phone, reserveUrl, lineUrl }: Props) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2 text-sm">
      <a href={`tel:${phone}`} className="text-red-600 font-bold">電話する</a>
      <Link href={reserveUrl} className="text-red-600 font-bold">予約する</Link>
      <Link href={lineUrl} className="text-red-600 font-bold">LINE</Link>
    </div>
  );
}
