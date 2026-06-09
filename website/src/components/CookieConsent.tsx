'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useCookieConsent } from '@/hooks/useCookieConsent';
import CookiePreferencesModal from './CookiePreferencesModal';

export default function CookieConsent() {
  const { showBanner, isModalOpen, acceptAll, rejectAll, openModal, closeModal, savePreferences, preferences } =
    useCookieConsent();
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showBanner && bannerRef.current) {
      gsap.fromTo(
        bannerRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', delay: 1 }
      );
    }
  }, [showBanner]);

  if (!showBanner && !isModalOpen) return null;

  return (
    <>
      {showBanner && (
        <div
          ref={bannerRef}
          className="fixed bottom-0 left-0 right-0 z-50"
          style={{
            backgroundColor: '#ffffff',
            boxShadow: '0 -4px 20px rgba(0,0,0,0.1)',
            opacity: 0,
          }}
        >
          <div
            style={{
              maxWidth: '1400px',
              marginLeft: 'auto',
              marginRight: 'auto',
              paddingLeft: '16px',
              paddingRight: '16px',
              paddingTop: '16px',
              paddingBottom: '16px',
            }}
            className="sm:px-6 sm:py-6"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-6">
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2" style={{ color: '#0a0a0a' }}>
                  Koristimo kolačiće
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#525252', maxWidth: '600px' }}>
                  Koristimo kolačiće za poboljšanje vašeg iskustva.{' '}
                  <Link href="/kolacici" className="text-coral hover:underline">
                    Saznajte više
                  </Link>
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <button
                  onClick={openModal}
                  className="px-3 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold transition-colors"
                  style={{
                    color: '#525252',
                    border: '1px solid #e5e5e5',
                    backgroundColor: 'transparent',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#0a0a0a';
                    e.currentTarget.style.color = '#0a0a0a';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e5e5e5';
                    e.currentTarget.style.color = '#525252';
                  }}
                >
                  Postavke
                </button>
                <button
                  onClick={rejectAll}
                  className="px-3 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold transition-colors"
                  style={{
                    color: '#0a0a0a',
                    border: '1px solid #0a0a0a',
                    backgroundColor: 'transparent',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#0a0a0a';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#0a0a0a';
                  }}
                >
                  Odbij
                </button>
                <button
                  onClick={acceptAll}
                  className="px-3 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-white transition-colors"
                  style={{ backgroundColor: '#F2594B' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#0a0a0a';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#F2594B';
                  }}
                >
                  Prihvati sve
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isModalOpen && (
        <CookiePreferencesModal
          preferences={preferences}
          onSave={savePreferences}
          onClose={closeModal}
        />
      )}
    </>
  );
}
