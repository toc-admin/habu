import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'GDPR i Zaštita Podataka | Habu',
  description: 'Informacije o zaštiti osobnih podataka i GDPR usklađenosti tvrtke Habu d.o.o.',
  openGraph: {
    title: 'GDPR i Zaštita Podataka | Habu',
    description: 'Informacije o zaštiti osobnih podataka i GDPR usklađenosti.',
    url: 'https://habu.hr/gdpr',
    siteName: 'Habu',
    locale: 'hr_HR',
    type: 'website',
  },
};

export default function GDPRPage() {
  return (
    <>
      <PageHero title="Zaštita Podataka" subtitle="GDPR i vaša privatnost" />

      <section className="section-light py-12 sm:py-16 lg:py-24">
        <div
          className="px-4 sm:px-6" style={{ maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className="prose prose-lg" data-animate="reveal-up">
            <p className="text-lg leading-relaxed mb-8" style={{ color: '#525252' }}>
              U Habu d.o.o. ozbiljno shvaćamo zaštitu vaših osobnih podataka. Ova stranica
              objašnjava kako prikupljamo, koristimo i štitimo vaše podatke u skladu s
              Općom uredbom o zaštiti podataka (GDPR).
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4" style={{ color: '#0a0a0a' }}>
              1. Voditelj obrade podataka
            </h2>
            <p style={{ color: '#525252' }}>
              Habu d.o.o.<br />
              Ulica Domovinskog rata 61<br />
              21000 Split, Hrvatska<br />
              Email: <a href="mailto:gdpr@habu.hr" className="text-coral hover:underline">gdpr@habu.hr</a><br />
              Telefon: +385 21 123 456
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4" style={{ color: '#0a0a0a' }}>
              2. Koje podatke prikupljamo
            </h2>
            <p style={{ color: '#525252' }}>Prikupljamo sljedeće kategorije osobnih podataka:</p>
            <ul className="list-disc pl-6 space-y-2" style={{ color: '#525252' }}>
              <li><strong>Identifikacijski podaci:</strong> ime, prezime, naziv tvrtke</li>
              <li><strong>Kontaktni podaci:</strong> email adresa, broj telefona, adresa</li>
              <li><strong>Podaci o upitima:</strong> sadržaj poruka koje nam šaljete</li>
              <li><strong>Tehnički podaci:</strong> IP adresa, podaci o pregledniku (putem kolačića)</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4" style={{ color: '#0a0a0a' }}>
              3. Svrha obrade podataka
            </h2>
            <p style={{ color: '#525252' }}>Vaše podatke koristimo za:</p>
            <ul className="list-disc pl-6 space-y-2" style={{ color: '#525252' }}>
              <li>Odgovaranje na vaše upite i zahtjeve</li>
              <li>Rezervaciju obilazaka i pružanje usluga</li>
              <li>Slanje informacija o našim uslugama (uz vašu privolu)</li>
              <li>Poboljšanje naše web stranice i korisničkog iskustva</li>
              <li>Ispunjavanje zakonskih obveza</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4" style={{ color: '#0a0a0a' }}>
              4. Pravna osnova obrade
            </h2>
            <p style={{ color: '#525252' }}>Osobne podatke obrađujemo na temelju:</p>
            <ul className="list-disc pl-6 space-y-2" style={{ color: '#525252' }}>
              <li><strong>Privole:</strong> za slanje newslettera i marketinških materijala</li>
              <li><strong>Ugovornog odnosa:</strong> za pružanje naših usluga</li>
              <li><strong>Legitimnog interesa:</strong> za poboljšanje naših usluga</li>
              <li><strong>Zakonske obveze:</strong> za ispunjavanje pravnih zahtjeva</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4" style={{ color: '#0a0a0a' }}>
              5. Razdoblje čuvanja podataka
            </h2>
            <p style={{ color: '#525252' }}>
              Vaše podatke čuvamo onoliko dugo koliko je potrebno za svrhe za koje su
              prikupljeni. Upiti se čuvaju 2 godine, podaci o klijentima dok traje
              poslovni odnos plus zakonski rok čuvanja, a podaci s privolom dok
              privolu ne povučete.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4" style={{ color: '#0a0a0a' }}>
              6. Vaša prava
            </h2>
            <p style={{ color: '#525252' }}>Prema GDPR-u imate sljedeća prava:</p>
            <ul className="list-disc pl-6 space-y-2" style={{ color: '#525252' }}>
              <li><strong>Pravo na pristup:</strong> možete zatražiti kopiju svojih podataka</li>
              <li><strong>Pravo na ispravak:</strong> možete ispraviti netočne podatke</li>
              <li><strong>Pravo na brisanje:</strong> možete zatražiti brisanje podataka</li>
              <li><strong>Pravo na ograničenje obrade:</strong> možete ograničiti kako koristimo podatke</li>
              <li><strong>Pravo na prenosivost:</strong> možete dobiti podatke u strukturiranom formatu</li>
              <li><strong>Pravo na prigovor:</strong> možete prigovoriti obradi u određenim slučajevima</li>
              <li><strong>Pravo na povlačenje privole:</strong> možete povući privolu u bilo kojem trenutku</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4" style={{ color: '#0a0a0a' }}>
              7. Sigurnost podataka
            </h2>
            <p style={{ color: '#525252' }}>
              Implementirali smo odgovarajuće tehničke i organizacijske mjere za zaštitu
              vaših podataka od neovlaštenog pristupa, gubitka ili uništenja. To uključuje
              enkripciju, sigurne servere i ograničen pristup podacima.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4" style={{ color: '#0a0a0a' }}>
              8. Dijeljenje podataka
            </h2>
            <p style={{ color: '#525252' }}>
              Vaše podatke ne prodajemo trećim stranama. Možemo dijeliti podatke s
              pružateljima usluga koji nam pomažu u poslovanju (npr. hosting, email
              servis), ali samo u mjeri potrebnoj za pružanje usluge i uz ugovorne
              garancije o zaštiti podataka.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4" style={{ color: '#0a0a0a' }}>
              9. Kolačići
            </h2>
            <p style={{ color: '#525252' }}>
              Naša web stranica koristi kolačiće. Za detaljne informacije o kolačićima
              koje koristimo i kako njima upravljati, pogledajte našu{' '}
              <Link href="/kolacici" className="text-coral hover:underline">
                politiku kolačića
              </Link>.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4" style={{ color: '#0a0a0a' }}>
              10. Kontakt za pitanja o zaštiti podataka
            </h2>
            <p style={{ color: '#525252' }}>
              Za sva pitanja vezana uz zaštitu vaših osobnih podataka ili za ostvarivanje
              svojih prava, možete nas kontaktirati na:
            </p>
            <p style={{ color: '#525252' }}>
              Email: <a href="mailto:gdpr@habu.hr" className="text-coral hover:underline">gdpr@habu.hr</a><br />
              Telefon: +385 21 123 456<br />
              Adresa: Habu d.o.o., Ulica Domovinskog rata 61, 21000 Split
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4" style={{ color: '#0a0a0a' }}>
              11. Pravo na pritužbu
            </h2>
            <p style={{ color: '#525252' }}>
              Ako smatrate da smo prekršili vaša prava na zaštitu podataka, imate pravo
              podnijeti pritužbu Agenciji za zaštitu osobnih podataka (AZOP):
            </p>
            <p style={{ color: '#525252' }}>
              Agencija za zaštitu osobnih podataka<br />
              Selska cesta 136, 10000 Zagreb<br />
              Web: <a href="https://azop.hr" target="_blank" rel="noopener noreferrer" className="text-coral hover:underline">azop.hr</a>
            </p>

            <div className="mt-16 p-6" style={{ backgroundColor: '#fafafa' }}>
              <p className="text-sm" style={{ color: '#737373' }}>
                Posljednje ažuriranje: Siječanj 2024.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
