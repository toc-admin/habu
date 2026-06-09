import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import FAQ from '@/components/FAQ';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FAQ | Habu Premium Uredi Split',
  description: 'Česta pitanja o Habu premium uredima u Splitu. Saznajte više o najmu, cijenama, sadržajima i uvjetima.',
  openGraph: {
    title: 'FAQ | Habu Premium Uredi Split',
    description: 'Česta pitanja o Habu premium uredima - najam, cijene, sadržaji i uvjeti.',
    url: 'https://habu.hr/faq',
    siteName: 'Habu',
    locale: 'hr_HR',
    type: 'website',
  },
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        title="Česta Pitanja"
        subtitle="Sve što trebate znati o Habu uredima"
        backgroundImage="/images/IMG_7506.JPG"
      />

      <FAQ />

      {/* Additional CTA Section */}
      <section className="section-light py-10 sm:py-12 lg:py-16">
        <div
          className="px-4 sm:px-6 lg:px-12" style={{ maxWidth: '1400px', marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className="max-w-2xl mx-auto text-center" data-animate="reveal-up">
            <h2
              className="font-bold mb-4"
              style={{ fontSize: '1.5rem', color: '#0a0a0a' }}
            >
              Niste pronašli odgovor?
            </h2>
            <p className="mb-8" style={{ color: '#525252' }}>
              Naš tim je tu za vas. Kontaktirajte nas direktno i rado ćemo odgovoriti na sva vaša pitanja.
            </p>
            <Link href="/kontakt" className="btn-primary">
              <span>Kontaktirajte Nas</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
