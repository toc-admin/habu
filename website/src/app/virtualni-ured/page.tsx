import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Virtualni Ured | Habu Premium Uredi Split',
  description: 'Virtualni ured u Splitu - prestižna poslovna adresa, primanje pošte i paketa, te pristup meeting sobama. Idealno za remote tvrtke.',
  openGraph: {
    title: 'Virtualni Ured | Habu Premium Uredi Split',
    description: 'Prestižna poslovna adresa u Splitu bez troškova fizičkog ureda.',
    url: 'https://habu.hr/virtualni-ured',
    siteName: 'Habu',
    locale: 'hr_HR',
    type: 'website',
  },
};

const packages = [
  {
    name: 'Basic',
    price: '99',
    features: [
      'Poslovna adresa za registraciju',
      'Primanje pošte',
      'Digitalna obavijest o pošti',
      'Proslijeđivanje pošte (dodatno)',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    price: '199',
    features: [
      'Sve iz Basic paketa',
      'Primanje paketa',
      '2 sata meeting sobe mjesečno',
      'Pristup lounge zoni',
      'Personalizirani pozdravi',
    ],
    popular: true,
  },
  {
    name: 'Premium',
    price: '349',
    features: [
      'Sve iz Professional paketa',
      '5 sati meeting sobe mjesečno',
      'Hot desk pristup (5 dana)',
      'Telefonska sekretarica',
      'Premium podrška',
    ],
    popular: false,
  },
];

const benefits = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: 'Prestižna Adresa',
    description: 'Impresivna poslovna adresa u centru Splita za registraciju tvrtke i poslovnu korespondenciju.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    title: 'Upravljanje Poštom',
    description: 'Primamo i čuvamo vašu poštu i pakete. Skeniranje i proslijeđivanje na zahtjev.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: 'Profesionalni Doček',
    description: 'Recepcija dočekuje vaše goste i partnere u profesionalnom okruženju.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
      </svg>
    ),
    title: 'Meeting Sobe',
    description: 'Pristup profesionalnim sobama za sastanke kad trebate fizički prostor.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Ušteda Troškova',
    description: 'Sve prednosti poslovne adrese bez troškova najma fizičkog prostora.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
      </svg>
    ),
    title: 'Fleksibilnost',
    description: 'Skalabilno rješenje koje raste s vašim poslovanjem. Bez dugoročnih obveza.',
  },
];

export default function VirtualOfficePage() {
  return (
    <>
      <PageHero
        title="Virtualni Ured"
        subtitle="Prestižna adresa bez troškova fizičkog prostora"
        backgroundImage="/images/IMG_7505.JPG"
      />

      {/* Intro Section */}
      <section className="section-light py-12 sm:py-16 lg:py-24">
        <div
          className="px-4 sm:px-6 lg:px-12" style={{ maxWidth: '1400px', marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className="max-w-3xl mx-auto text-center" data-animate="reveal-up">
            <span
              className="inline-block text-xs font-semibold uppercase text-coral mb-4"
              style={{ letterSpacing: '0.2em' }}
            >
              Virtual Office
            </span>
            <h2
              className="font-black leading-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#0a0a0a' }}
            >
              Radite od bilo kuda, <span className="text-coral">poslujte iz Splita</span>
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: '#525252' }}>
              Idealno rješenje za remote tvrtke, freelancere i poduzetnike koji žele
              profesionalnu poslovnu adresu bez troškova fizičkog ureda. Registrirajte
              tvrtku na prestižnoj lokaciji i ostavite dojam na klijente.
            </p>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="section-gray py-12 sm:py-16 lg:py-24">
        <div
          className="px-4 sm:px-6 lg:px-12" style={{ maxWidth: '1400px', marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className="text-center mb-16" data-animate="reveal-up">
            <span
              className="inline-block text-xs font-semibold uppercase text-coral mb-4"
              style={{ letterSpacing: '0.2em' }}
            >
              Paketi
            </span>
            <h2
              className="font-black leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#0a0a0a' }}
            >
              Odaberite <span className="text-coral">svoj paket</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8" data-animate-stagger>
            {packages.map((pkg, index) => (
              <div
                key={index}
                data-animate-item
                className="relative bg-white p-8"
                style={{
                  boxShadow: pkg.popular ? '0 8px 40px rgba(242, 89, 75, 0.15)' : '0 4px 20px rgba(0,0,0,0.05)',
                  border: pkg.popular ? '2px solid #F2594B' : 'none',
                }}
              >
                {pkg.popular && (
                  <div
                    className="absolute -top-3 left-1/2 px-4 py-1 bg-coral text-white text-xs font-semibold uppercase"
                    style={{ transform: 'translateX(-50%)', letterSpacing: '0.1em' }}
                  >
                    Najpopularniji
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2" style={{ color: '#0a0a0a' }}>
                  {pkg.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-black text-coral">€{pkg.price}</span>
                  <span style={{ color: '#737373' }}>/mjesečno</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center bg-coral/10 rounded-full mt-0.5">
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
                  style={{
                    backgroundColor: pkg.popular ? '#F2594B' : 'transparent',
                    color: pkg.popular ? '#ffffff' : '#0a0a0a',
                    border: pkg.popular ? 'none' : '2px solid #0a0a0a',
                  }}
                >
                  Odaberi Paket
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-light py-12 sm:py-16 lg:py-24">
        <div
          className="px-4 sm:px-6 lg:px-12" style={{ maxWidth: '1400px', marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className="text-center mb-16" data-animate="reveal-up">
            <span
              className="inline-block text-xs font-semibold uppercase text-coral mb-4"
              style={{ letterSpacing: '0.2em' }}
            >
              Prednosti
            </span>
            <h2
              className="font-black leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#0a0a0a' }}
            >
              Zašto <span className="text-coral">virtualni ured?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-animate-stagger>
            {benefits.map((benefit, index) => (
              <div
                key={index}
                data-animate-item
                className="p-8"
                style={{ backgroundColor: '#fafafa' }}
              >
                <div className="text-coral mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#0a0a0a' }}>{benefit.title}</h3>
                <p className="text-sm" style={{ color: '#525252' }}>{benefit.description}</p>
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
              Spremni za <span className="text-coral">virtualnu prisutnost?</span>
            </h2>
            <p className="text-lg leading-relaxed mb-10" style={{ color: '#a3a3a3' }}>
              Kontaktirajte nas i aktivirajte svoj virtualni ured već danas.
              Bez dugoročnih obveza, maksimalna fleksibilnost.
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
