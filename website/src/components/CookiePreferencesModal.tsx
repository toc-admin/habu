'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { CookiePreferences } from '@/lib/cookies';

interface CookiePreferencesModalProps {
  preferences: CookiePreferences;
  onSave: (preferences: CookiePreferences) => void;
  onClose: () => void;
}

const cookieCategories = [
  {
    key: 'necessary' as const,
    label: 'Nužni kolačići',
    description: 'Ovi kolačići su neophodni za funkcioniranje web stranice i ne mogu se isključiti.',
    required: true,
  },
  {
    key: 'analytics' as const,
    label: 'Analitički kolačići',
    description: 'Pomažu nam razumjeti kako posjetitelji koriste stranicu, što nam omogućuje poboljšanje.',
    required: false,
  },
  {
    key: 'marketing' as const,
    label: 'Marketinški kolačići',
    description: 'Koriste se za prikazivanje relevantnih oglasa i mjerenje učinkovitosti kampanja.',
    required: false,
  },
  {
    key: 'functional' as const,
    label: 'Funkcionalni kolačići',
    description: 'Omogućuju napredne funkcionalnosti i personalizaciju, poput spremanja vaših postavki.',
    required: false,
  },
];

export default function CookiePreferencesModal({ preferences, onSave, onClose }: CookiePreferencesModalProps) {
  const [localPrefs, setLocalPrefs] = useState<CookiePreferences>(preferences);
  const modalRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const ctx = gsap.context(() => {
      gsap.fromTo(backdropRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 });
      gsap.fromTo(
        modalRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out', delay: 0.1 }
      );
    });

    return () => {
      document.body.style.overflow = '';
      ctx.revert();
    };
  }, []);

  const handleToggle = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return;
    setLocalPrefs((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = () => {
    onSave(localPrefs);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === backdropRef.current) {
      onClose();
    }
  };

  return (
    <div
      ref={backdropRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
    >
      <div
        ref={modalRef}
        className="w-full max-w-lg bg-white overflow-hidden"
        style={{ maxHeight: '90vh', overflowY: 'auto' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6" style={{ borderBottom: '1px solid #e5e5e5' }}>
          <h2 className="text-xl font-bold" style={{ color: '#0a0a0a' }}>
            Postavke kolačića
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center transition-colors"
            style={{ color: '#737373' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#0a0a0a')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#737373')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <p className="text-sm leading-relaxed" style={{ color: '#525252' }}>
            Ovdje možete prilagoditi svoje postavke kolačića. Nužni kolačići su uvijek aktivni jer su potrebni za
            osnovno funkcioniranje stranice.
          </p>

          {cookieCategories.map((category) => (
            <div
              key={category.key}
              className="flex items-start justify-between gap-4 p-4"
              style={{ backgroundColor: '#fafafa' }}
            >
              <div className="flex-1">
                <h3 className="font-semibold mb-1" style={{ color: '#0a0a0a' }}>
                  {category.label}
                </h3>
                <p className="text-sm" style={{ color: '#525252' }}>
                  {category.description}
                </p>
              </div>
              <button
                onClick={() => handleToggle(category.key)}
                disabled={category.required}
                className="flex-shrink-0 relative transition-colors"
                style={{
                  width: '48px',
                  height: '28px',
                  borderRadius: '14px',
                  backgroundColor: localPrefs[category.key] ? '#F2594B' : '#d4d4d4',
                  cursor: category.required ? 'not-allowed' : 'pointer',
                  opacity: category.required ? 0.7 : 1,
                }}
              >
                <span
                  className="absolute top-1 transition-transform"
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: '#ffffff',
                    left: localPrefs[category.key] ? '24px' : '4px',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                  }}
                />
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 p-6" style={{ borderTop: '1px solid #e5e5e5' }}>
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-sm font-semibold transition-colors"
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
            Odustani
          </button>
          <button
            onClick={handleSave}
            className="px-5 py-2.5 text-sm font-semibold text-white transition-colors"
            style={{ backgroundColor: '#F2594B' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#0a0a0a';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#F2594B';
            }}
          >
            Spremi postavke
          </button>
        </div>
      </div>
    </div>
  );
}
