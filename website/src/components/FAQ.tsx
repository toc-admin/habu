'use client';

import { useState } from 'react';
import Link from 'next/link';

const faqs = [
  {
    question: 'Koji su minimalni uvjeti najma?',
    answer: 'Za privatne urede nudimo fleksibilne uvjete od minimalno 3 mjeseca. Dnevni najam i sobe za sastanke dostupne su bez dugoročnih obveza - plaćate samo onoliko koliko koristite.',
  },
  {
    question: 'Što je sve uključeno u cijenu?',
    answer: 'Sve! Brzi internet (1 Gbps), 24/7 pristup, recepcija, premium kava i čaj, čišćenje, komunalije, korištenje zajedničkih prostora, pristup kuhinji i lounge zoni. Bez skrivenih troškova.',
  },
  {
    question: 'Mogu li prilagoditi prostor svom brendu?',
    answer: 'Apsolutno. Privatni uredi mogu se brendirati prema vašim željama - od natpisa na vratima do kompletnog uređenja interijera. Naš tim vam stoji na raspolaganju za sve prilagodbe.',
  },
  {
    question: 'Kako funkcionira registracija tvrtke na adresu?',
    answer: 'Nudimo premium virtualnu adresu i registraciju sjedišta tvrtke. Primamo vašu poštu, pakete i goste u vaše ime. Idealno za tvrtke koje žele prestižnu adresu bez fizičkog ureda.',
  },
  {
    question: 'Postoji li parking?',
    answer: 'Da, imamo podzemnu garažu s osiguranim parking mjestima za naše članove. Parking je uključen za sve korisnike privatnih ureda, a za ostale je dostupan po povoljnim cijenama.',
  },
  {
    question: 'Mogu li rezervirati obilazak?',
    answer: 'Naravno! Pozivamo vas da nas posjetite i sami vidite prostor. Kontaktirajte nas putem forme ili telefona, a naš tim će vam organizirati personalizirani obilazak u terminu koji vam odgovara.',
  },
  {
    question: 'Što ako trebam veći prostor kako moja tvrtka raste?',
    answer: 'Skalabilnost je u našem DNK-u. Lako možete nadograditi na veći ured unutar zgrade bez stresa seljakanja na drugu lokaciju. Rastite s nama.',
  },
  {
    question: 'Imate li event prostor?',
    answer: 'Da, naš modularni event prostor prima do 50 osoba i savršen je za prezentacije, radionice, team buildinge i privatne događaje. Dostupna je profesionalna AV oprema i catering opcije.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="section-gray py-12 sm:py-16 lg:py-24"
      style={{ width: '100%' }}
    >
      <div
        className="px-4 sm:px-6 lg:px-12"
        style={{
          maxWidth: '1400px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-24">
          {/* Left - Header */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32" data-animate="reveal-up">
              <span
                className="inline-block text-xs font-semibold uppercase text-coral mb-4"
                style={{ letterSpacing: '0.2em' }}
              >
                FAQ
              </span>
              <h2
                className="font-black leading-tight mb-6"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#0a0a0a' }}
              >
                Česta <span className="text-coral">pitanja</span>
              </h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: '#525252' }}>
                Sve što trebate znati o Habu premium uredima. Ne možete pronaći
                odgovor? Slobodno nas kontaktirajte.
              </p>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 font-semibold group"
                style={{ color: '#0a0a0a' }}
              >
                <span style={{ borderBottom: '2px solid #F2594B' }}>Kontaktirajte nas</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right - Accordion */}
          <div className="lg:col-span-8">
            <div className="space-y-4" data-animate-stagger>
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  data-animate-item
                  className={`faq-item ${openIndex === index ? 'open' : ''}`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="text-lg font-bold pr-8" style={{ color: '#0a0a0a' }}>
                      {faq.question}
                    </span>
                    <div
                      className="w-8 h-8 flex items-center justify-center flex-shrink-0 transition-all duration-300"
                      style={{
                        backgroundColor: openIndex === index ? '#F2594B' : '#f5f5f5',
                        transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)',
                      }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={openIndex === index ? 'white' : '#0a0a0a'}
                        strokeWidth="2"
                        className="w-4 h-4"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </div>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{ maxHeight: openIndex === index ? '500px' : '0px' }}
                  >
                    <div className="px-6 pb-6">
                      <div className="w-12 h-px bg-coral mb-4" />
                      <p className="leading-relaxed" style={{ color: '#525252' }}>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
