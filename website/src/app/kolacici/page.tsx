'use client';

import { useState, useEffect } from 'react';
import PageHero from '@/components/PageHero';
import CookiePreferencesModal from '@/components/CookiePreferencesModal';
import { getCookiePreferences, CookiePreferences, defaultPreferences } from '@/lib/cookies';

const cookieTypes = [
  {
    category: 'Nužni kolačići',
    description: 'Ovi kolačići su neophodni za funkcioniranje web stranice. Omogućuju osnovne funkcije poput navigacije i pristupa sigurnim područjima. Web stranica ne može ispravno funkcionirati bez ovih kolačića.',
    cookies: [
      { name: 'habu-cookie-consent', purpose: 'Spremanje vaših postavki kolačića', duration: '1 godina' },
    ],
  },
  {
    category: 'Analitički kolačići',
    description: 'Ovi kolačići nam pomažu razumjeti kako posjetitelji koriste našu stranicu prikupljanjem anonimnih informacija. To nam omogućuje poboljšanje sadržaja i funkcionalnosti.',
    cookies: [
      { name: '_ga', purpose: 'Google Analytics - razlikovanje korisnika', duration: '2 godine' },
      { name: '_ga_*', purpose: 'Google Analytics - praćenje sesija', duration: '2 godine' },
    ],
  },
  {
    category: 'Marketinški kolačići',
    description: 'Ovi kolačići se koriste za prikazivanje relevantnih oglasa i mjerenje učinkovitosti marketinških kampanja. Mogu pratiti posjetitelje kroz više web stranica.',
    cookies: [
      { name: '_fbp', purpose: 'Facebook Pixel - praćenje konverzija', duration: '3 mjeseca' },
      { name: '_gcl_au', purpose: 'Google Ads - praćenje konverzija', duration: '90 dana' },
    ],
  },
  {
    category: 'Funkcionalni kolačići',
    description: 'Ovi kolačići omogućuju napredne funkcionalnosti i personalizaciju, poput spremanja vaših preferenci ili prijašnjih odabira.',
    cookies: [
      { name: 'preferences', purpose: 'Spremanje korisničkih preferenci', duration: '1 godina' },
    ],
  },
];

export default function CookiePolicyPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    const stored = getCookiePreferences();
    if (stored) {
      setPreferences(stored);
    }
  }, []);

  const handleSavePreferences = (newPrefs: CookiePreferences) => {
    setPreferences(newPrefs);
    setIsModalOpen(false);
  };

  return (
    <>
      <PageHero title="Politika Kolačića" subtitle="Kako koristimo kolačiće na našoj stranici" />

      <section className="section-light py-12 sm:py-16 lg:py-24">
        <div
          className="px-4 sm:px-6" style={{ maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div data-animate="reveal-up">
            <p className="text-lg leading-relaxed mb-8" style={{ color: '#525252' }}>
              Ova stranica objašnjava što su kolačići, kako ih koristimo na web stranici
              habu.hr i kako možete upravljati svojim postavkama kolačića.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4" style={{ color: '#0a0a0a' }}>
              Što su kolačići?
            </h2>
            <p className="leading-relaxed mb-6" style={{ color: '#525252' }}>
              Kolačići su male tekstualne datoteke koje se spremaju na vaš uređaj kada
              posjetite web stranicu. Koriste se za pamćenje vaših preferenci, poboljšanje
              korisničkog iskustva i prikupljanje analitičkih podataka.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4" style={{ color: '#0a0a0a' }}>
              Vrste kolačića koje koristimo
            </h2>

            {cookieTypes.map((type, index) => (
              <div key={index} className="mb-10">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#0a0a0a' }}>
                  {type.category}
                </h3>
                <p className="leading-relaxed mb-4" style={{ color: '#525252' }}>
                  {type.description}
                </p>
                <div
                  className="overflow-x-auto"
                  style={{ border: '1px solid #e5e5e5' }}
                >
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ backgroundColor: '#fafafa' }}>
                        <th className="text-left p-4 font-semibold" style={{ color: '#0a0a0a' }}>
                          Naziv
                        </th>
                        <th className="text-left p-4 font-semibold" style={{ color: '#0a0a0a' }}>
                          Svrha
                        </th>
                        <th className="text-left p-4 font-semibold" style={{ color: '#0a0a0a' }}>
                          Trajanje
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {type.cookies.map((cookie, i) => (
                        <tr
                          key={i}
                          style={{ borderTop: '1px solid #e5e5e5' }}
                        >
                          <td className="p-4" style={{ color: '#525252' }}>
                            <code className="text-coral">{cookie.name}</code>
                          </td>
                          <td className="p-4" style={{ color: '#525252' }}>
                            {cookie.purpose}
                          </td>
                          <td className="p-4" style={{ color: '#525252' }}>
                            {cookie.duration}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}

            <h2 className="text-2xl font-bold mt-12 mb-4" style={{ color: '#0a0a0a' }}>
              Kako upravljati kolačićima
            </h2>
            <p className="leading-relaxed mb-6" style={{ color: '#525252' }}>
              Možete upravljati svojim postavkama kolačića na nekoliko načina:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6" style={{ color: '#525252' }}>
              <li>
                Koristite naš alat za postavke kolačića klikom na gumb ispod
              </li>
              <li>
                Postavite preglednik da blokira ili briše kolačiće
              </li>
              <li>
                Koristite način privatnog pregledavanja
              </li>
            </ul>

            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 font-semibold text-white transition-colors mb-12"
              style={{ backgroundColor: '#F2594B' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#0a0a0a';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#F2594B';
              }}
            >
              Otvori postavke kolačića
            </button>

            <h2 className="text-2xl font-bold mt-12 mb-4" style={{ color: '#0a0a0a' }}>
              Upravljanje kolačićima u pregledniku
            </h2>
            <p className="leading-relaxed mb-4" style={{ color: '#525252' }}>
              Većina web preglednika omogućuje kontrolu kolačića kroz postavke. Evo kako
              pristupiti postavkama kolačića u popularnim preglednicima:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6" style={{ color: '#525252' }}>
              <li>
                <strong>Chrome:</strong> Postavke → Privatnost i sigurnost → Kolačići
              </li>
              <li>
                <strong>Firefox:</strong> Postavke → Privatnost i sigurnost → Kolačići
              </li>
              <li>
                <strong>Safari:</strong> Postavke → Privatnost → Upravljanje podacima
              </li>
              <li>
                <strong>Edge:</strong> Postavke → Kolačići i dozvole web mjesta
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4" style={{ color: '#0a0a0a' }}>
              Što se događa ako onemogućite kolačiće?
            </h2>
            <p className="leading-relaxed mb-6" style={{ color: '#525252' }}>
              Onemogućavanje kolačića može utjecati na funkcionalnost web stranice.
              Nužni kolačići su potrebni za osnovno funkcioniranje, pa ih nije moguće
              isključiti. Bez analitičkih kolačića ne možemo pratiti korištenje stranice,
              a bez funkcionalnih kolačića neke personalizirane funkcije neće raditi.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4" style={{ color: '#0a0a0a' }}>
              Promjene politike kolačića
            </h2>
            <p className="leading-relaxed mb-6" style={{ color: '#525252' }}>
              Možemo povremeno ažurirati ovu politiku kolačića. Sve promjene bit će
              objavljene na ovoj stranici s ažuriranim datumom. Preporučujemo da
              povremeno provjerite ovu stranicu.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4" style={{ color: '#0a0a0a' }}>
              Kontakt
            </h2>
            <p className="leading-relaxed" style={{ color: '#525252' }}>
              Za pitanja o kolačićima ili našoj politici privatnosti, kontaktirajte nas:
            </p>
            <p style={{ color: '#525252' }}>
              Email:{' '}
              <a href="mailto:info@habu.hr" className="text-coral hover:underline">
                info@habu.hr
              </a>
            </p>

            <div className="mt-16 p-6" style={{ backgroundColor: '#fafafa' }}>
              <p className="text-sm" style={{ color: '#737373' }}>
                Posljednje ažuriranje: Siječanj 2024.
              </p>
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <CookiePreferencesModal
          preferences={preferences}
          onSave={handleSavePreferences}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}
