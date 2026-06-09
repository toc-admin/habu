'use client';

export default function Location() {
  return (
    <section
      id="location"
      className="section-light py-12 sm:py-16 lg:py-24 overflow-hidden w-full max-w-full"
    >
      <div
        className="px-4 sm:px-6 lg:px-12 w-full"
        style={{
          maxWidth: '1400px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-24 w-full max-w-full">
          {/* Left - Content */}
          <div className="flex flex-col justify-center">
            <div data-animate="reveal-up">
              <span
                className="inline-block text-xs font-semibold uppercase text-coral mb-4"
                style={{ letterSpacing: '0.2em' }}
              >
                Lokacija
              </span>
              <h2
                className="font-black leading-tight mb-6"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#0a0a0a' }}
              >
                U srcu <span className="text-coral">Splita</span>
              </h2>
              <p className="text-lg leading-relaxed mb-10" style={{ color: '#525252' }}>
                Strateška lokacija koja kombinira pristupačnost s prestižom.
                Samo nekoliko koraka od centra grada, s izvrsnim prometnim
                vezama i svim sadržajima na dohvat ruke.
              </p>
            </div>

            {/* Location Features */}
            <div className="space-y-6" data-animate-stagger>
              <div className="location-feature" data-animate-item>
                <div className="location-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#F2594B" strokeWidth="1.5" className="w-6 h-6">
                    <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1" style={{ color: '#0a0a0a' }}>Adresa</h3>
                  <p style={{ color: '#525252' }}>
                    Ulica Domovinskog rata 61<br />
                    21000 Split, Hrvatska
                  </p>
                </div>
              </div>

              <div className="location-feature" data-animate-item>
                <div className="location-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#F2594B" strokeWidth="1.5" className="w-6 h-6">
                    <path d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1" style={{ color: '#0a0a0a' }}>Povezanost</h3>
                  <p style={{ color: '#525252' }}>
                    5 min do autobusnog kolodvora<br />
                    15 min do zračne luke Split<br />
                    Besplatan parking u garaži
                  </p>
                </div>
              </div>

              <div className="location-feature" data-animate-item>
                <div className="location-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#F2594B" strokeWidth="1.5" className="w-6 h-6">
                    <path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1" style={{ color: '#0a0a0a' }}>Radno Vrijeme</h3>
                  <p style={{ color: '#525252' }}>
                    Recepcija: Pon-Pet 8:00 - 20:00<br />
                    Pristup uredu: 24/7
                  </p>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4" data-animate="reveal-up">
              <a href="tel:+38521123456" className="btn-primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span>+385 21 123 456</span>
              </a>
              <a href="mailto:info@habu.hr" className="btn-outline-dark">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span>info@habu.hr</span>
              </a>
            </div>
          </div>

          {/* Right - Map */}
          <div className="relative w-full max-w-full overflow-hidden box-border" data-animate="reveal-right">
            <div
              className="relative overflow-hidden w-full max-w-full"
              style={{ aspectRatio: '4/3', minHeight: '280px', backgroundColor: '#f5f5f5' }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2893.4!2d16.4402!3d43.5147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDMwJzUzLjAiTiAxNsKwMjYnMjQuNyJF!5e0!3m2!1sen!2shr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) contrast(1.1)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Habu Location"
              />

              {/* Overlay card */}
              <div
                className="absolute p-4 sm:p-6 left-3 right-3 bottom-3 sm:left-6 sm:right-6 sm:bottom-6"
                style={{
                  backgroundColor: '#ffffff',
                  boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
                }}
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-coral flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 552.28 158.08" className="w-6 h-6 sm:w-8 sm:h-8 fill-white">
                      <path d="M139.71,0h-50.51v128.01H8.39V0H0v158.08h8.39v-21.68h80.81v21.68h8.39v-2.31h42.12v2.31h8.39V0h-8.39ZM139.71,147.39h-42.12v-10.99h42.12v10.99ZM139.71,128.01h-42.12V8.39h42.12v119.62Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base" style={{ color: '#0a0a0a' }}>Habu</h4>
                    <p className="text-xs sm:text-sm" style={{ color: '#737373' }}>Premium Offices</p>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=Split,Croatia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2 sm:py-3 text-white text-xs sm:text-sm font-semibold transition-colors"
                  style={{ backgroundColor: '#0a0a0a' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F2594B'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0a0a0a'}
                >
                  <span>Otvori u Google Maps</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3 sm:w-4 sm:h-4">
                    <path d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </div>
            </div>

            <div
              className="absolute -z-10 hidden lg:block"
              style={{
                top: '-24px',
                right: '-24px',
                width: '96px',
                height: '96px',
                backgroundColor: 'rgba(242, 89, 75, 0.1)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
