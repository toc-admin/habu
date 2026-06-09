'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';

const navLinks = [
  { label: 'Početna', href: '#hero' },
  { label: 'Prostori', href: '#spaces' },
  { label: 'Sadržaji', href: '#amenities' },
  { label: 'Galerija', href: '#gallery' },
  { label: 'Lokacija', href: '#location' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      gsap.fromTo(
        '.mobile-nav-link',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: 'power3.out', delay: 0.3 }
      );
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          boxShadow: isScrolled ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
        }}
      >
        <nav
          style={{
            maxWidth: '1400px',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: '24px',
            paddingRight: '24px',
          }}
        >
          <div
            className="flex items-center justify-between"
            style={{ height: '80px' }}
          >
            {/* Logo */}
            <Link href="/" className="relative z-10">
              <Image
                src="/habu-logo.svg"
                alt="Habu"
                width={120}
                height={34}
                className={`transition-all duration-300 ${isScrolled || isOpen ? '' : 'brightness-0 invert'}`}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="nav-link transition-colors duration-300 hover:text-coral"
                  style={{
                    color: isScrolled ? '#0a0a0a' : '#ffffff',
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="hidden lg:flex items-center gap-2 px-6 py-3 text-sm font-semibold uppercase transition-all duration-300"
              style={{
                letterSpacing: '0.05em',
                backgroundColor: isScrolled ? '#F2594B' : '#ffffff',
                color: isScrolled ? '#ffffff' : '#0a0a0a',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = isScrolled ? '#0a0a0a' : '#F2594B';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = isScrolled ? '#F2594B' : '#ffffff';
                e.currentTarget.style.color = isScrolled ? '#ffffff' : '#0a0a0a';
              }}
            >
              <span>Rezerviraj Obilazak</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative z-10 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              style={{ color: isOpen ? '#ffffff' : isScrolled ? '#0a0a0a' : '#ffffff' }}
              aria-label="Toggle menu"
            >
              <span
                className="w-6 h-0.5 bg-current transition-all duration-300"
                style={{
                  transform: isOpen ? 'rotate(45deg) translateY(8px)' : 'none',
                }}
              />
              <span
                className="w-6 h-0.5 bg-current transition-all duration-300"
                style={{ opacity: isOpen ? 0 : 1 }}
              />
              <span
                className="w-6 h-0.5 bg-current transition-all duration-300"
                style={{
                  transform: isOpen ? 'rotate(-45deg) translateY(-8px)' : 'none',
                }}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className="fixed inset-0 z-40 transition-transform duration-500 ease-out"
        style={{
          backgroundColor: '#0a0a0a',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
        }}
      >
        <div className="flex flex-col justify-center items-center h-full px-6">
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="mobile-nav-link text-3xl font-bold text-white uppercase hover:text-coral transition-colors"
                style={{ letterSpacing: '0.05em' }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="mobile-nav-link mt-8 px-8 py-4 bg-coral text-white text-lg font-semibold uppercase"
              style={{ letterSpacing: '0.05em' }}
            >
              Rezerviraj Obilazak
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
