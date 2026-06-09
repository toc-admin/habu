import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'Kontakt | Habu Premium Uredi',
  description: 'Kontaktirajte Habu tim za rezervaciju obilaska ili više informacija o premium uredima u Splitu.',
  openGraph: {
    title: 'Kontakt | Habu Premium Uredi',
    description: 'Kontaktirajte Habu tim za rezervaciju obilaska premium ureda u Splitu.',
    url: 'https://habu.hr/kontakt',
    siteName: 'Habu',
    locale: 'hr_HR',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Kontaktirajte Nas"
        subtitle="Tu smo za sva vaša pitanja i rezervacije"
        backgroundImage="/images/IMG_7508.JPG"
      />
      <Contact />
    </>
  );
}
