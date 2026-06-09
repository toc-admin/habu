'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export default function PageHero({ title, subtitle, backgroundImage }: PageHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.page-hero-overlay',
        { opacity: 0 },
        { opacity: 1, duration: 0.8 },
        0
      );

      tl.fromTo(
        '.page-hero-title',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        0.3
      );

      if (subtitle) {
        tl.fromTo(
          '.page-hero-subtitle',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          0.6
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [subtitle]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden"
      style={{ height: '50vh', minHeight: '350px', width: '100%' }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage || '/images/IMG_7507.JPG'}
          alt={title}
          fill
          className="object-cover"
          priority
          quality={85}
        />
      </div>

      {/* Gradient Overlay */}
      <div
        className="page-hero-overlay absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7))',
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6"
        style={{
          maxWidth: '1400px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingTop: '80px',
        }}
      >
        <h1
          className="page-hero-title font-black text-white px-2"
          style={{
            fontSize: 'clamp(2rem, 6vw, 4.5rem)',
            lineHeight: '1.1',
            letterSpacing: '-0.02em',
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="page-hero-subtitle mt-4 sm:mt-6 px-2"
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              lineHeight: '1.6',
              color: 'rgba(255,255,255,0.8)',
              maxWidth: '600px',
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
