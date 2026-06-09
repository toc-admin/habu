import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Najam Ureda | Habu Premium Uredi Split',
  description: 'Privatni uredi za timove od 1-8 osoba u Splitu. Kompletno opremljeni premium uredi s 24/7 pristupom, brzim internetom i svim sadržajima.',
  openGraph: {
    title: 'Najam Ureda | Habu Premium Uredi Split',
    description: 'Privatni uredi za timove od 1-8 osoba. Premium opremljeni prostori u srcu Splita.',
    url: 'https://habu.hr/najam-ureda',
    siteName: 'Habu',
    locale: 'hr_HR',
    type: 'website',
  },
};

const officeTypes = [
  {
    name: 'Ured za 1-2 osobe',
    price: '800',
    size: '12-15 m²',
    features: ['Radni stol za 2 osobe', 'Ergonomske stolice', 'Garderobni ormar', 'Pristup zajedničkim prostorima'],
  },
  {
    name: 'Ured za 3-4 osobe',
    price: '1.400',
    size: '20-25 m²',
    features: ['Radni stolovi za 4 osobe', 'Meeting stol', 'Whiteboard', 'Garderoba i ostava'],
  },
  {
    name: 'Ured za 5-8 osoba',
    price: '2.200',
    size: '35-45 m²',
    features: ['Open space layout', 'Privatni meeting kutak', 'Kuhinjica', 'Premium namještaj'],
  },
];

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '24/7 Pristup',
    description: 'Ulazite u svoj ured kad god vam odgovara - bez ograničenja.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
      </svg>
    ),
    title: '1 Gbps Internet',
    description: 'Ultra brza simetrična veza za nesmetano poslovanje.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: 'Recepcija',
    description: 'Profesionalna recepcija za doček vaših gostiju i partnera.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: 'Brendiranje',
    description: 'Prilagodite prostor svojem brendu - od natpisa do interijera.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
      </svg>
    ),
    title: 'Fleksibilni Najam',
    description: 'Minimalno 3 mjeseca, s mogućnošću proširenja prostora.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    title: 'Sve Uključeno',
    description: 'Komunalije, čišćenje, kava, pristup kuhinji - bez skrivenih troškova.',
  },
];

export default function OfficeRentalPage() {
  return (
    <>
      <PageHero
        title="Najam Ureda"
        subtitle="Privatni uredi za timove od 1-8 osoba"
        backgroundImage="/images/IMG_7504.JPG"
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
                Privatni Uredi
              </span>
              <h2
                className="font-black leading-tight mb-6"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#0a0a0a' }}
              >
                Vaš prostor. <span className="text-coral">Vaša pravila.</span>
              </h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#525252' }}>
                Habu privatni uredi pružaju savršenu ravnotežu između privatnosti i pristupa
                zajedničkim resursima. Svaki ured je kompletno opremljen premium namještajem
                i spreman za rad od prvog dana.
              </p>
              <p className="leading-relaxed" style={{ color: '#525252' }}>
                S 24/7 pristupom, brzim internetom i svim sadržajima uključenim u cijenu,
                možete se fokusirati na ono što je važno - razvoj vašeg poslovanja.
              </p>
            </div>
            <div data-animate="reveal-right" className="relative aspect-[4/3]">
              <Image
                src="/images/IMG_7504.JPG"
                alt="Privatni ured"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-gray py-12 sm:py-16 lg:py-24">
        <div
          className="px-4 sm:px-6 lg:px-12" style={{ maxWidth: '1400px', marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className="text-center mb-16" data-animate="reveal-up">
            <span
              className="inline-block text-xs font-semibold uppercase text-coral mb-4"
              style={{ letterSpacing: '0.2em' }}
            >
              Cjenik
            </span>
            <h2
              className="font-black leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#0a0a0a' }}
            >
              Odaberite veličinu <span className="text-coral">ureda</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8" data-animate-stagger>
            {officeTypes.map((office, index) => (
              <div
                key={index}
                data-animate-item
                className="bg-white p-8"
                style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}
              >
                <h3 className="text-xl font-bold mb-2" style={{ color: '#0a0a0a' }}>
                  {office.name}
                </h3>
                <p className="text-sm mb-4" style={{ color: '#737373' }}>{office.size}</p>
                <div className="mb-6">
                  <span className="text-3xl font-black text-coral">€{office.price}</span>
                  <span style={{ color: '#737373' }}>/mjesečno</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {office.features.map((feature, i) => (
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
                  className="block w-full py-3 text-center font-semibold transition-colors border-2 border-black text-black hover:bg-black hover:text-white"
                >
                  Rezerviraj Obilazak
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-light py-12 sm:py-16 lg:py-24">
        <div
          className="px-4 sm:px-6 lg:px-12" style={{ maxWidth: '1400px', marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className="text-center mb-16" data-animate="reveal-up">
            <span
              className="inline-block text-xs font-semibold uppercase text-coral mb-4"
              style={{ letterSpacing: '0.2em' }}
            >
              Što Je Uključeno
            </span>
            <h2
              className="font-black leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#0a0a0a' }}
            >
              Sve što trebate za <span className="text-coral">fokusiran rad</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-animate-stagger>
            {features.map((feature, index) => (
              <div
                key={index}
                data-animate-item
                className="flex gap-4 p-6"
                style={{ backgroundColor: '#fafafa' }}
              >
                <div className="text-coral flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="font-bold mb-2" style={{ color: '#0a0a0a' }}>{feature.title}</h3>
                  <p className="text-sm" style={{ color: '#525252' }}>{feature.description}</p>
                </div>
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
              Spremni za <span className="text-coral">novi ured?</span>
            </h2>
            <p className="text-lg leading-relaxed mb-10" style={{ color: '#a3a3a3' }}>
              Rezervirajte besplatni obilazak i uvjerite se zašto su Habu uredi pravi izbor
              za vaš tim. Naš tim će vam pomoći pronaći savršeni prostor.
            </p>
            <Link href="/kontakt" className="btn-primary">
              <span>Rezerviraj Obilazak</span>
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
