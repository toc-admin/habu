import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Business Club | Habu Premium Uredi Split',
  description: 'Habu Business Club - ekskluzivno članstvo s pristupom svim prostorima, prioritetnim rezervacijama i networking događajima u Splitu.',
  openGraph: {
    title: 'Business Club | Habu Premium Uredi Split',
    description: 'Ekskluzivno članstvo s premium pogodnostima za ambiciozne profesionalce.',
    url: 'https://habu.hr/business-club',
    siteName: 'Habu',
    locale: 'hr_HR',
    type: 'website',
  },
};

const tiers = [
  {
    name: 'Essential',
    price: '149',
    description: 'Za povremene korisnike koji trebaju fleksibilan pristup',
    features: [
      '5 dana hot desk pristupa mjesečno',
      '3 sata meeting sobe',
      'Pristup lounge zoni',
      'Brzi WiFi',
      'Kava i osvježenja',
    ],
    cta: 'Započni',
  },
  {
    name: 'Professional',
    price: '299',
    description: 'Za aktivne profesionalce koji redovito koriste prostor',
    features: [
      '15 dana hot desk pristupa mjesečno',
      '8 sati meeting sobe',
      'Pristup svim lokacijama',
      'Prioritetne rezervacije',
      'Networking događaji',
      'Poštanski sandučić',
    ],
    cta: 'Odaberi',
    popular: true,
  },
  {
    name: 'Executive',
    price: '499',
    description: 'Neograničen pristup za maksimalnu produktivnost',
    features: [
      'Neograničen hot desk pristup',
      '15 sati meeting sobe',
      'Dedicirani radni stol',
      'VIP networking događaji',
      'Telefonska sekretarica',
      'Parking mjesto',
      'Osobni account manager',
    ],
    cta: 'Kontaktiraj nas',
  },
];

const perks = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: 'Networking Događaji',
    description: 'Mjesečni eventi, radionice i druženja s članovima zajednice.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: 'Ekskluzivne Pogodnosti',
    description: 'Posebni popusti kod partnera - fitness, restorani, servisi.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: 'Edukacija',
    description: 'Pristup predavanjima, radionicama i masterclass sessionima.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    title: 'Mentorstvo',
    description: 'Povezivanje s iskusnim poduzetnicima i stručnjacima iz zajednice.',
  },
];

export default function BusinessClubPage() {
  return (
    <>
      <PageHero
        title="Business Club"
        subtitle="Ekskluzivna zajednica ambicioznih profesionalaca"
        backgroundImage="/images/IMG_7507.JPG"
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
              Članstvo
            </span>
            <h2
              className="font-black leading-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#0a0a0a' }}
            >
              Više od radnog prostora - <span className="text-coral">vaša zajednica</span>
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: '#525252' }}>
              Habu Business Club okuplja ambiciozne profesionalce, poduzetnike i tvrtke
              koji dijele viziju izvrsnosti. Članstvo donosi pristup prostorima, ali i
              neprocjenjivu mrežu kontakata i mogućnosti za rast.
            </p>
          </div>
        </div>
      </section>

      {/* Tiers Section */}
      <section className="section-gray py-12 sm:py-16 lg:py-24">
        <div
          className="px-4 sm:px-6 lg:px-12" style={{ maxWidth: '1400px', marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className="text-center mb-16" data-animate="reveal-up">
            <span
              className="inline-block text-xs font-semibold uppercase text-coral mb-4"
              style={{ letterSpacing: '0.2em' }}
            >
              Razine Članstva
            </span>
            <h2
              className="font-black leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#0a0a0a' }}
            >
              Odaberite svoju <span className="text-coral">razinu</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8" data-animate-stagger>
            {tiers.map((tier, index) => (
              <div
                key={index}
                data-animate-item
                className="relative bg-white p-8 flex flex-col"
                style={{
                  boxShadow: tier.popular ? '0 8px 40px rgba(242, 89, 75, 0.15)' : '0 4px 20px rgba(0,0,0,0.05)',
                  border: tier.popular ? '2px solid #F2594B' : 'none',
                }}
              >
                {tier.popular && (
                  <div
                    className="absolute -top-3 left-1/2 px-4 py-1 bg-coral text-white text-xs font-semibold uppercase"
                    style={{ transform: 'translateX(-50%)', letterSpacing: '0.1em' }}
                  >
                    Preporučeno
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#0a0a0a' }}>
                    {tier.name}
                  </h3>
                  <p className="text-sm mb-4" style={{ color: '#737373' }}>{tier.description}</p>
                  <div>
                    <span className="text-4xl font-black text-coral">€{tier.price}</span>
                    <span style={{ color: '#737373' }}>/mjesečno</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {tier.features.map((feature, i) => (
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
                    backgroundColor: tier.popular ? '#F2594B' : 'transparent',
                    color: tier.popular ? '#ffffff' : '#0a0a0a',
                    border: tier.popular ? 'none' : '2px solid #0a0a0a',
                  }}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks Section */}
      <section className="section-light py-12 sm:py-16 lg:py-24">
        <div
          className="px-4 sm:px-6 lg:px-12" style={{ maxWidth: '1400px', marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className="text-center mb-16" data-animate="reveal-up">
            <span
              className="inline-block text-xs font-semibold uppercase text-coral mb-4"
              style={{ letterSpacing: '0.2em' }}
            >
              Pogodnosti
            </span>
            <h2
              className="font-black leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#0a0a0a' }}
            >
              Više od <span className="text-coral">prostora</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" data-animate-stagger>
            {perks.map((perk, index) => (
              <div
                key={index}
                data-animate-item
                className="text-center p-8"
                style={{ backgroundColor: '#fafafa' }}
              >
                <div className="text-coral mb-4 flex justify-center">{perk.icon}</div>
                <h3 className="font-bold mb-2" style={{ color: '#0a0a0a' }}>{perk.title}</h3>
                <p className="text-sm" style={{ color: '#525252' }}>{perk.description}</p>
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
              Postanite dio <span className="text-coral">zajednice</span>
            </h2>
            <p className="text-lg leading-relaxed mb-10" style={{ color: '#a3a3a3' }}>
              Prijavite se za članstvo i pridružite se zajednici ambicioznih profesionalaca
              koji zajedno grade uspjeh.
            </p>
            <Link href="/kontakt" className="btn-primary">
              <span>Prijavite Se</span>
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
