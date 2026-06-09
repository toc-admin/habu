import type { Metadata } from 'next';
import './globals.css';
import LenisProvider from '@/components/LenisProvider';
import AnimationProvider from '@/components/AnimationProvider';

export const metadata: Metadata = {
  title: 'Habu | Premium Servisani Uredi u Splitu',
  description:
    'Premium servisani uredi u srcu Splita. Privatni uredi, sobe za sastanke i fleksibilni radni prostori dizajnirani za uspjeh. Rezervirajte obilazak danas.',
  keywords: [
    'servisani uredi',
    'coworking Split',
    'poslovni prostor Split',
    'uredi za najam',
    'sobe za sastanke',
    'premium uredi',
    'Habu',
  ],
  authors: [{ name: 'Habu' }],
  openGraph: {
    title: 'Habu | Premium Servisani Uredi u Splitu',
    description:
      'Premium servisani uredi u srcu Splita. Dizajnirani za timove koji očekuju izvrsnost.',
    url: 'https://habu.hr',
    siteName: 'Habu',
    locale: 'hr_HR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Habu | Premium Servisani Uredi u Splitu',
    description: 'Premium servisani uredi u srcu Splita.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr">
      <body>
        <LenisProvider>
          <AnimationProvider>
            {children}
          </AnimationProvider>
        </LenisProvider>
        <div className="noise-overlay" />
      </body>
    </html>
  );
}
