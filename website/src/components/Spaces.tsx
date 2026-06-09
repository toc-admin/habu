'use client';

import Image from 'next/image';

const spaces = [
  {
    id: 'private-office',
    title: 'Privatni Ured',
    subtitle: 'Za timove od 1-8 osoba',
    description: 'Potpuna privatnost i fleksibilnost. Vaš brend, vaš prostor, vaša pravila. Kompletno opremljeni uredi s premium namještajem.',
    price: 'od €800',
    period: '/mjesečno',
    image: '/images/IMG_7504.JPG',
    features: ['Potpuna privatnost', 'Prilagodljivi prostor', 'Premium namještaj', 'Prirodno svjetlo'],
  },
  {
    id: 'meeting-room',
    title: 'Sobe za Sastanke',
    subtitle: 'Kapacitet do 12 osoba',
    description: 'Impresionirajte klijente u prostoru dizajniranom za uspješne dogovore. Najnovija AV tehnologija i besprijekoran servis.',
    price: 'od €50',
    period: '/sat',
    image: '/images/IMG_7503.JPG',
    features: ['AV tehnologija', 'Video konferencije', 'Catering opcije', 'Recepcija'],
  },
  {
    id: 'event-space',
    title: 'Event Prostor',
    subtitle: 'Do 50 sudionika',
    description: 'Od radionica do prezentacija proizvoda. Modularan prostor koji se prilagođava vašim potrebama.',
    price: 'od €300',
    period: '/dan',
    image: '/images/c2b27a6b-1d54-4525-97ea-d439d39990e4.JPG',
    features: ['Modularni raspored', 'Profesionalno osvjetljenje', 'Sound sistem', 'Podrška organizacije'],
  },
  {
    id: 'hot-desk',
    title: 'Dnevni Najam',
    subtitle: 'Fleksibilno radno mjesto',
    description: 'Savršeno za freelancere i nomade. Pristup svim sadržajima bez dugoročnih obveza.',
    price: 'od €40',
    period: '/dan',
    image: '/images/IMG_7505.JPG',
    features: ['Bez obveza', 'Svi sadržaji', 'Networking', 'Brzi internet'],
  },
];

export default function Spaces() {
  return (
    <section
      id="spaces"
      className="section-light"
      style={{ padding: '96px 0', width: '100%' }}
    >
      <div
        style={{
          maxWidth: '1400px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '24px',
          paddingRight: '24px',
        }}
      >
        {/* Section Header */}
        <div style={{ maxWidth: '768px', marginBottom: '64px' }} data-animate="reveal-up">
          <span
            className="inline-block text-xs font-semibold uppercase text-coral mb-4"
            style={{ letterSpacing: '0.2em' }}
          >
            Naši Prostori
          </span>
          <h2
            className="font-black leading-tight mb-6"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', color: '#0a0a0a' }}
          >
            Odaberite prostor koji <br className="hidden lg:block" />
            <span className="text-coral">odgovara vama</span>
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: '#525252' }}>
            Od privatnih ureda do fleksibilnih radnih mjesta, imamo rješenje za svaki
            način rada. Svi prostori dolaze s premium sadržajima i 24/7 pristupom.
          </p>
        </div>

        {/* Spaces Grid */}
        <div
          className="grid lg:grid-cols-2 gap-8"
          data-animate-stagger
        >
          {spaces.map((space, index) => (
            <div
              key={space.id}
              data-animate-item
              className={`group card overflow-hidden ${index === 0 ? 'lg:col-span-2' : ''}`}
            >
              <div className={`flex flex-col ${index === 0 ? 'lg:flex-row' : ''}`}>
                {/* Image */}
                <div
                  className="relative overflow-hidden"
                  style={{ height: index === 0 ? '320px' : '256px' }}
                >
                  <Image
                    src={space.image}
                    alt={space.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent)' }}
                  />

                  {/* Price Badge */}
                  <div className="price-badge absolute top-6 left-6">
                    <span className="text-2xl font-black" style={{ color: '#0a0a0a' }}>{space.price}</span>
                    <span className="text-sm" style={{ color: '#737373' }}>{space.period}</span>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={index === 0 ? 'lg:flex lg:flex-col lg:justify-center' : ''}
                  style={{
                    padding: '32px',
                    backgroundColor: '#fafafa',
                    flex: index === 0 ? '0 0 40%' : undefined,
                  }}
                >
                  <span
                    className="text-xs font-semibold uppercase text-coral mb-2 block"
                    style={{ letterSpacing: '0.15em' }}
                  >
                    {space.subtitle}
                  </span>
                  <h3
                    className="font-bold mb-4"
                    style={{ fontSize: index === 0 ? '1.875rem' : '1.5rem', color: '#0a0a0a' }}
                  >
                    {space.title}
                  </h3>
                  <p className="leading-relaxed mb-6" style={{ color: '#525252' }}>
                    {space.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {space.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="feature-dot" />
                        <span className="text-sm" style={{ color: '#404040' }}>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold group/link"
                    style={{ color: '#0a0a0a' }}
                  >
                    <span className="border-b border-current transition-colors group-hover/link:border-coral group-hover/link:text-coral">
                      Saznaj Više
                    </span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="transition-transform group-hover/link:translate-x-1"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
