import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">赤身肉とチーズで、心も体も元気に。</h1>
      <nav className="space-x-4">
        <Link href="/menu">Menu</Link>
        <Link href="/specialties">Specialties</Link>
        <Link href="/events">Events</Link>
        <Link href="/reserve">Reserve</Link>
        <Link href="/about">About</Link>
        <Link href="/recruit">Recruit</Link>
        <Link href="/news">News</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </main>
  );
}
