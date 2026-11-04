'use client';

import Image from 'next/image';
import Link from 'next/link';

const footerLinks = {
  prostori: [
    { label: 'Najam Ureda', href: '/najam-ureda' },
    { label: 'Sobe za Sastanke', href: '/sobe-za-sastanke' },
    { label: 'Virtualni Ured', href: '/virtualni-ured' },
    { label: 'Business Club', href: '/business-club' },
  ],
  tvrtka: [
    { label: 'O Nama', href: '/o-nama' },
    { label: 'Kontakt', href: '/kontakt' },
  ],
  podrska: [
    { label: 'FAQ', href: '/faq' },
    { label: 'GDPR', href: '/gdpr' },
    { label: 'Politika Kolačića', href: '/kolacici' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-dark" style={{ width: '100%' }}>
      {/* Main Footer */}
      <div
        className="px-4 sm:px-6 lg:px-12 py-10 sm:py-12 lg:py-16"
        style={{
          maxWidth: '1400px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8">
          {/* Logo & Info */}
          <div className="col-span-2 lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/habu-logo.svg"
                alt="Habu"
                width={140}
                height={40}
                className="brightness-0 invert"
              />
            </Link>
            <p className="leading-relaxed mb-6" style={{ maxWidth: '280px', color: '#a3a3a3' }}>
              Premium servisani uredi u srcu Splita. Dizajnirani za uspjeh.
            </p>
            <div className="space-y-2">
              <p className="text-sm" style={{ color: '#737373' }}>Matice Hrvatske 15</p>
              <p className="text-sm" style={{ color: '#737373' }}>21000 Split, Hrvatska</p>
              <a href="tel:+38517730093" className="block text-white font-semibold hover:text-coral transition-colors">
                +385 1 7730 093
              </a>
              <a href="mailto:info@habu.hr" className="block text-white font-semibold hover:text-coral transition-colors">
                info@habu.hr
              </a>
            </div>
            <div className="mt-8">
              <p className="text-xs uppercase mb-3" style={{ color: '#737373', letterSpacing: '0.05em' }}>
                Vlasnik prostora
              </p>
              <Image
                src="/the-office-company-logo.png"
                alt="The Office Company"
                width={135}
                height={37}
                className="brightness-0 invert opacity-70"
              />
            </div>
          </div>

          {/* Links - Prostori */}
          <div className="lg:col-span-2 lg:col-start-7">
            <h4 className="text-white font-bold mb-4 text-sm uppercase" style={{ letterSpacing: '0.05em' }}>
              Usluge
            </h4>
            <ul className="space-y-3">
              {footerLinks.prostori.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-coral transition-colors" style={{ color: '#a3a3a3' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links - Tvrtka */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-4 text-sm uppercase" style={{ letterSpacing: '0.05em' }}>
              Tvrtka
            </h4>
            <ul className="space-y-3">
              {footerLinks.tvrtka.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-coral transition-colors" style={{ color: '#a3a3a3' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links - Podrška */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-4 text-sm uppercase" style={{ letterSpacing: '0.05em' }}>
              Podrška
            </h4>
            <ul className="space-y-3">
              {footerLinks.podrska.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-coral transition-colors" style={{ color: '#a3a3a3' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid #262626' }}>
        <div
          className="py-4 sm:py-6 px-4 sm:px-6 lg:px-12"
          style={{
            maxWidth: '1400px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <p className="text-sm" style={{ color: '#737373' }}>
              © {currentYear} Habu. Sva prava pridržana.
            </p>

            <p className="text-sm" style={{ color: '#737373' }}>
              Made by{' '}
              <a
                href="https://www.ninefold.eu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-semibold hover:text-coral transition-colors"
              >
                Ninefold
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
