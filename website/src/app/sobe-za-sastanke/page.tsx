import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Sobe za Sastanke | Habu Premium Uredi Split',
  description: 'Profesionalne sobe za sastanke u Splitu s kapacitetom do 12 osoba. AV tehnologija, video konferencije i catering opcije.',
  openGraph: {
    title: 'Sobe za Sastanke | Habu Premium Uredi Split',
    description: 'Profesionalne sobe za sastanke s vrhunskom opremom za uspješne poslovne susrete.',
    url: 'https://habu.hr/sobe-za-sastanke',
    siteName: 'Habu',
    locale: 'hr_HR',
    type: 'website',
  },
};

const roomTypes = [
  {
    name: 'Mala Soba',
    capacity: '2-4 osobe',
    price: '50',
    image: '/images/IMG_7503.JPG',
    features: ['55" Smart TV', 'Video konferencije', 'Whiteboard', 'Kava i voda'],
  },
  {
    name: 'Srednja Soba',
    capacity: '5-8 osoba',
    price: '80',
    image: '/images/IMG_7508.JPG',
    features: ['65" Smart TV', 'Profesionalna kamera', 'Konferencijski mikrofon', 'Catering opcije'],
  },
  {
    name: 'Velika Soba',
    capacity: '9-12 osoba',
    price: '120',
    image: '/images/c2b27a6b-1d54-4525-97ea-d439d39990e4.JPG',
    features: ['75" Smart TV', 'Dual screen setup', 'Premium AV sustav', 'Privatni lounge'],
  },
];

const equipment = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.125c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    title: 'Smart TV',
    description: 'Bežično dijeljenje ekrana s bilo kojeg uređaja',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: 'Video Konferencije',
    description: 'HD kamera i profesionalni mikrofoni',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
      </svg>
    ),
    title: 'Brzi Internet',
    description: '1 Gbps simetrična veza',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" />
      </svg>
    ),
    title: 'Catering',
    description: 'Kava, osvježenja i obroci na zahtjev',
  },
];

export default function MeetingRoomsPage() {
  return (
    <>
      <PageHero
        title="Sobe za Sastanke"
        subtitle="Impresivni prostori za uspješne dogovore"
        backgroundImage="/images/IMG_7503.JPG"
      />

      {/* Intro Section */}
      <section className="section-light py-12 sm:py-16 lg:py-24">
        <div
          className="px-4 sm:px-6 lg:px-12" style={{ maxWidth: '1400px', marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-animate="reveal-left">
              <span
                className="inline-block text-xs font-semibold uppercase text-coral mb-4"
                style={{ letterSpacing: '0.2em' }}
              >
                Meeting Rooms
              </span>
              <h2
                className="font-black leading-tight mb-6"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#0a0a0a' }}
              >
                Gdje se sklapaju <span className="text-coral">veliki poslovi</span>
              </h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#525252' }}>
                Naše sobe za sastanke dizajnirane su da impresioniraju. Profesionalna
                atmosfera, vrhunska tehnologija i besprijekoran servis osiguravaju
                da se svaki sastanak odvija bez problema.
              </p>
              <p className="leading-relaxed" style={{ color: '#525252' }}>
                Bilo da organizirate prezentaciju za klijente, video konferenciju s
                partnerima ili interni brainstorming, imamo savršen prostor za vas.
              </p>
            </div>
            <div data-animate="reveal-right" className="relative aspect-[4/3]">
              <Image
                src="/images/IMG_7503.JPG"
                alt="Soba za sastanke"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Room Types Section */}
      <section className="section-gray py-12 sm:py-16 lg:py-24">
        <div
          className="px-4 sm:px-6 lg:px-12" style={{ maxWidth: '1400px', marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className="text-center mb-16" data-animate="reveal-up">
            <span
              className="inline-block text-xs font-semibold uppercase text-coral mb-4"
              style={{ letterSpacing: '0.2em' }}
            >
              Naše Sobe
            </span>
            <h2
              className="font-black leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#0a0a0a' }}
            >
              Odaberite <span className="text-coral">pravu veličinu</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8" data-animate-stagger>
            {roomTypes.map((room, index) => (
              <div
                key={index}
                data-animate-item
                className="bg-white overflow-hidden"
                style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}
              >
                <div className="relative h-48">
                  <Image src={room.image} alt={room.name} fill className="object-cover" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-1" style={{ color: '#0a0a0a' }}>
                    {room.name}
                  </h3>
                  <p className="text-sm mb-4" style={{ color: '#737373' }}>{room.capacity}</p>
                  <div className="mb-6">
                    <span className="text-3xl font-black text-coral">€{room.price}</span>
                    <span style={{ color: '#737373' }}>/sat</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {room.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 flex items-center justify-center bg-coral/10 rounded-full">
                          <svg viewBox="0 0 24 24" fill="none" stroke="#F2594B" strokeWidth="2" className="w-3 h-3">
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm" style={{ color: '#525252' }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/kontakt"
                    className="block w-full py-3 text-center font-semibold transition-colors"
                    style={{ border: '2px solid #0a0a0a', color: '#0a0a0a' }}
                  >
                    Rezerviraj
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="section-light py-12 sm:py-16 lg:py-24">
        <div
          className="px-4 sm:px-6 lg:px-12" style={{ maxWidth: '1400px', marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className="text-center mb-16" data-animate="reveal-up">
            <span
              className="inline-block text-xs font-semibold uppercase text-coral mb-4"
              style={{ letterSpacing: '0.2em' }}
            >
              Oprema
            </span>
            <h2
              className="font-black leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#0a0a0a' }}
            >
              Vrhunska <span className="text-coral">tehnologija</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" data-animate-stagger>
            {equipment.map((item, index) => (
              <div
                key={index}
                data-animate-item
                className="text-center p-8"
                style={{ backgroundColor: '#fafafa' }}
              >
                <div className="text-coral mb-4 flex justify-center">{item.icon}</div>
                <h3 className="font-bold mb-2" style={{ color: '#0a0a0a' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: '#525252' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-dark py-12 sm:py-16 lg:py-24">
        <div
          className="px-4 sm:px-6 lg:px-12" style={{ maxWidth: '1400px', marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className="max-w-3xl mx-auto text-center" data-animate="reveal-up">
            <h2
              className="font-black text-white leading-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Rezervirajte <span className="text-coral">sobu</span>
            </h2>
            <p className="text-lg leading-relaxed mb-10" style={{ color: '#a3a3a3' }}>
              Jednostavna rezervacija, fleksibilni termini. Kontaktirajte nas za
              dostupnost i posebne zahtjeve.
            </p>
            <Link href="/kontakt" className="btn-primary">
              <span>Rezerviraj Sada</span>
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
