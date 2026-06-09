import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'O Nama | Habu Premium Uredi',
  description: 'Upoznajte Habu - vašeg partnera za premium poslovne prostore u Splitu. Naša priča, vrijednosti i misija.',
  openGraph: {
    title: 'O Nama | Habu Premium Uredi',
    description: 'Upoznajte Habu - vašeg partnera za premium poslovne prostore u Splitu.',
    url: 'https://habu.hr/o-nama',
    siteName: 'Habu',
    locale: 'hr_HR',
    type: 'website',
  },
};

const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: 'Izvrsnost',
    description: 'U svakom detalju težimo savršenstvu - od dizajna prostora do korisničkog iskustva.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: 'Zajednica',
    description: 'Vjerujemo u snagu povezivanja - naši članovi nisu samo najmoprimci, već dio obitelji.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Inovacija',
    description: 'Kontinuirano unaprjeđujemo naše prostore i usluge kako bismo ostali korak ispred.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Pouzdanost',
    description: 'Naši članovi mogu računati na nas 24/7 - njihov uspjeh je naš prioritet.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="O Nama"
        subtitle="Više od ureda - vaš partner u rastu"
        backgroundImage="/images/IMG_7506.JPG"
      />

      {/* Story Section */}
      <section className="section-light py-12 sm:py-16 lg:py-24">
        <div
          className="px-4 sm:px-6 lg:px-12" style={{ maxWidth: '1400px', marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div data-animate="reveal-left">
              <span
                className="inline-block text-xs font-semibold uppercase text-coral mb-4"
                style={{ letterSpacing: '0.2em' }}
              >
                Naša Priča
              </span>
              <h2
                className="font-black leading-tight mb-6"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#0a0a0a' }}
              >
                Stvoreno iz strasti za <span className="text-coral">izvrsnim prostorima</span>
              </h2>
              <div className="space-y-4" style={{ color: '#525252' }}>
                <p className="text-lg leading-relaxed">
                  Habu je nastao iz uvjerenja da radni prostor može biti više od četiri zida.
                  Vjerujemo da pravo okruženje može potaknuti kreativnost, produktivnost i uspjeh.
                </p>
                <p className="leading-relaxed">
                  Naš prostor u srcu Splita dizajniran je da pruži sve što ambicioznim tvrtkama
                  i pojedincima treba za rast - od vrhunske infrastrukture do inspirativne
                  zajednice istomišljenika.
                </p>
                <p className="leading-relaxed">
                  S preko 2500 kvadratnih metara premium prostora, 48 privatnih ureda i 6 soba
                  za sastanke, Habu je dom za tvrtke svih veličina - od startupa do etabliranih
                  korporacija.
                </p>
              </div>
            </div>
            <div data-animate="reveal-right" className="relative">
              <div
                className="aspect-[4/3] bg-cover bg-center"
                style={{ backgroundImage: 'url(/images/IMG_7507.JPG)' }}
              />
              <div
                className="absolute -bottom-6 -left-6 w-48 h-48 bg-coral flex items-center justify-center"
                style={{ zIndex: 10 }}
              >
                <div className="text-center text-white">
                  <div className="text-4xl font-black">2500</div>
                  <div className="text-sm">m² prostora</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-gray py-12 sm:py-16 lg:py-24">
        <div
          className="px-4 sm:px-6 lg:px-12" style={{ maxWidth: '1400px', marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className="text-center mb-16" data-animate="reveal-up">
            <span
              className="inline-block text-xs font-semibold uppercase text-coral mb-4"
              style={{ letterSpacing: '0.2em' }}
            >
              Naše Vrijednosti
            </span>
            <h2
              className="font-black leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#0a0a0a' }}
            >
              Principi koji nas <span className="text-coral">vode</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" data-animate-stagger>
            {values.map((value, index) => (
              <div
                key={index}
                data-animate-item
                className="p-8 bg-white"
                style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}
              >
                <div className="text-coral mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#0a0a0a' }}>
                  {value.title}
                </h3>
                <p style={{ color: '#525252' }}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-dark py-12 sm:py-16 lg:py-24">
        <div
          className="px-4 sm:px-6 lg:px-12" style={{ maxWidth: '1400px', marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className="max-w-3xl mx-auto text-center" data-animate="reveal-up">
            <span
              className="inline-block text-xs font-semibold uppercase text-coral mb-4"
              style={{ letterSpacing: '0.2em' }}
            >
              Naša Misija
            </span>
            <h2
              className="font-black text-white leading-tight mb-8"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Stvaramo prostore koji <span className="text-coral">pokreću uspjeh</span>
            </h2>
            <p className="text-lg leading-relaxed mb-10" style={{ color: '#a3a3a3' }}>
              Naša misija je pružiti ambicioznim profesionalcima i tvrtkama sve što im treba
              za fokusiran rad i rast - vrhunske prostore, besprijekornu uslugu i inspirativnu
              zajednicu. Želimo da svaki naš član osjeti da ima sve uvjete za postizanje
              svojih ciljeva.
            </p>
            <Link href="/kontakt" className="btn-primary">
              <span>Postanite Dio Habu Zajednice</span>
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
