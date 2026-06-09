'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const images = [
  { src: '/images/IMG_7507.JPG', alt: 'Lounge Area', caption: 'Lounge' },
  { src: '/images/IMG_7504.JPG', alt: 'Private Office', caption: 'Privatni Ured' },
  { src: '/images/IMG_7503.JPG', alt: 'Meeting Room', caption: 'Soba za Sastanke' },
  { src: '/images/IMG_7505.JPG', alt: 'Glass Offices', caption: 'Open Space' },
  { src: '/images/c2b27a6b-1d54-4525-97ea-d439d39990e4.JPG', alt: 'Event Space', caption: 'Event Prostor' },
  { src: '/images/IMG_7508.JPG', alt: 'Conference Room', caption: 'Konferencijska Soba' },
  { src: '/images/IMG_7506.JPG', alt: 'Corridor', caption: 'Premium Interijer' },
];

export default function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const horizontal = horizontalRef.current;

    if (!container || !horizontal) return;

    const scrollWidth = horizontal.scrollWidth - container.offsetWidth;

    const ctx = gsap.context(() => {
      gsap.to(horizontal, {
        x: -scrollWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: () => `+=${scrollWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section id="gallery" className="section-dark" style={{ width: '100%' }}>
      {/* Header */}
      <div
        style={{
          maxWidth: '1400px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '24px',
          paddingRight: '24px',
          paddingTop: '96px',
          paddingBottom: '96px',
        }}
      >
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div data-animate="reveal-up">
            <span
              className="inline-block text-xs font-semibold uppercase text-coral mb-4"
              style={{ letterSpacing: '0.2em' }}
            >
              Galerija
            </span>
            <h2
              className="font-black text-white leading-tight"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)' }}
            >
              Prostor koji <br />
              <span className="text-coral">govori sam za sebe</span>
            </h2>
          </div>
          <p
            className="text-lg leading-relaxed"
            style={{ maxWidth: '28rem', color: '#a3a3a3' }}
            data-animate="reveal-up"
          >
            Svaki kutak je pažljivo dizajniran da inspirira produktivnost i
            profesionalnost. Uvjerite se sami.
          </p>
        </div>
      </div>

      {/* Horizontal Scroll Gallery */}
      <div ref={containerRef} className="overflow-hidden" style={{ height: '100vh' }}>
        <div
          ref={horizontalRef}
          className="flex items-center gap-8"
          style={{ height: '100%', width: 'max-content', paddingLeft: '24px', paddingRight: '24px' }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 group"
              style={{ height: '70vh', width: '80vw', maxWidth: '900px' }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  backgroundColor: 'rgba(0,0,0,0.2)',
                }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-8"
                style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                }}
              >
                <span
                  className="text-xs font-semibold uppercase text-coral"
                  style={{ letterSpacing: '0.15em' }}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mt-2">
                  {image.caption}
                </h3>
              </div>
              <div
                className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ width: '64px', height: '64px', border: '1px solid rgba(255,255,255,0.3)' }}
              />
            </div>
          ))}

          {/* Final CTA slide */}
          <div
            className="flex-shrink-0 bg-coral flex items-center justify-center p-12"
            style={{ height: '70vh', width: '80vw', maxWidth: '600px' }}
          >
            <div className="text-center">
              <h3 className="text-3xl lg:text-4xl font-black text-white mb-6">
                Želite vidjeti uživo?
              </h3>
              <p className="mb-8" style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '24rem', margin: '0 auto 32px' }}>
                Rezervirajte besplatni obilazak i uvjerite se zašto je Habu
                pravi izbor za vaš tim.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 text-white font-semibold text-sm uppercase transition-colors"
                style={{ backgroundColor: '#0a0a0a', letterSpacing: '0.05em' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffffff';
                  e.currentTarget.style.color = '#0a0a0a';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#0a0a0a';
                  e.currentTarget.style.color = '#ffffff';
                }}
              >
                <span>Zakažite Obilazak</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
