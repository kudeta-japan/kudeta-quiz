import { SITE_ADDRESS, SITE_HOURS, GOOGLE_MAPS_EMBED } from '../../env';

export default function About() {
  return (
    <main className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">About</h1>
      <p>{SITE_ADDRESS}</p>
      <p>{SITE_HOURS}</p>
      <iframe src={GOOGLE_MAPS_EMBED} className="w-full h-64" />
    </main>
  );
}
