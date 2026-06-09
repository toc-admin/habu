'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        imageRef.current,
        { scale: 1.2 },
        { scale: 1, duration: 1.8 },
        0
      );

      tl.fromTo(
        '.hero-overlay',
        { opacity: 0 },
        { opacity: 1, duration: 1 },
        0.3
      );

      tl.fromTo(
        '.hero-line span',
        { y: '100%' },
        { y: '0%', duration: 1.2, stagger: 0.15 },
        0.5
      );

      tl.fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        1.2
      );

      tl.fromTo(
        ctaRef.current?.children || [],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 },
        1.4
      );

      tl.fromTo(
        scrollIndicatorRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8 },
        1.8
      );

      gsap.to('.scroll-indicator-dot', {
        y: 8,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative overflow-hidden"
      style={{ height: '100vh', width: '100%' }}
    >
      {/* Background Image */}
      <div ref={imageRef} className="absolute inset-0">
        <Image
          src="/images/IMG_7507.JPG"
          alt="Habu Premium Office Space"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>

      {/* Gradient Overlay */}
      <div
        className="hero-overlay absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.4), rgba(0,0,0,0.7))',
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 h-full flex flex-col justify-center"
        style={{
          maxWidth: '1400px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '24px',
          paddingRight: '24px',
        }}
      >
        <div style={{ maxWidth: '900px' }}>
          {/* Tagline */}
          <div className="mb-6">
            <span
              className="inline-block px-4 py-2 text-xs font-semibold uppercase"
              style={{
                letterSpacing: '0.2em',
                color: 'rgba(255,255,255,0.8)',
                border: '1px solid rgba(255,255,255,0.2)',
              }}
            >
              Split, Hrvatska
            </span>
          </div>

          {/* Main Title */}
          <h1
            ref={titleRef}
            className="font-black text-white mb-8"
            style={{
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              lineHeight: '0.95',
              letterSpacing: '-0.02em',
            }}
          >
            <span className="hero-line block overflow-hidden">
              <span>Prostor koji</span>
            </span>
            <span className="hero-line block overflow-hidden">
              <span>inspirira</span>
            </span>
            <span className="hero-line block overflow-hidden">
              <span className="text-coral">uspjeh.</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="mb-10"
            style={{
              fontSize: '1.125rem',
              lineHeight: '1.7',
              color: 'rgba(255,255,255,0.8)',
              maxWidth: '540px',
            }}
          >
            Premium servisani uredi u srcu Splita. Dizajnirani za ambiciozne timove
            i vizionare koji očekuju izvrsnost u svakom detalju.
          </p>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">
              <span>Rezerviraj Obilazak</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#spaces" className="btn-outline-light">
              <span>Istraži Prostore</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute flex flex-col items-center gap-4"
        style={{
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <span
          className="text-xs font-semibold uppercase"
          style={{ letterSpacing: '0.2em', color: 'rgba(255,255,255,0.6)' }}
        >
          Scroll
        </span>
        <div
          className="flex justify-center pt-2"
          style={{
            width: '24px',
            height: '40px',
            border: '2px solid rgba(255,255,255,0.3)',
            borderRadius: '9999px',
          }}
        >
          <div
            className="scroll-indicator-dot bg-coral"
            style={{ width: '6px', height: '6px', borderRadius: '50%' }}
          />
        </div>
      </div>

      {/* Stats Bar */}
      <div
        className="absolute left-0 right-0"
        style={{
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          backdropFilter: 'blur(8px)',
          borderTop: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <div
          className="py-6"
          style={{
            maxWidth: '1400px',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: '24px',
            paddingRight: '24px',
          }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
            <div className="text-center lg:text-left">
              <div className="text-3xl lg:text-4xl font-black text-white" data-counter="2500">0</div>
              <div className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.6)' }}>m² premium prostora</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl lg:text-4xl font-black text-white" data-counter="48">0</div>
              <div className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.6)' }}>privatnih ureda</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl lg:text-4xl font-black text-coral" data-counter="6">0</div>
              <div className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.6)' }}>soba za sastanke</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl lg:text-4xl font-black text-white" data-counter="24">0</div>
              <div className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.6)' }}>/7 pristup</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
