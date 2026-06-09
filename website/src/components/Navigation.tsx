'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

const serviceLinks = [
  { label: 'Najam Ureda', href: '/najam-ureda' },
  { label: 'Sobe za Sastanke', href: '/sobe-za-sastanke' },
  { label: 'Virtualni Ured', href: '/virtualni-ured' },
  { label: 'Business Club', href: '/business-club' },
];

const mainNavLinks = [
  { label: 'Početna', href: '/' },
  { label: 'Usluge', href: '#', hasDropdown: true },
  { label: 'O Nama', href: '/o-nama' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Kontakt', href: '/kontakt' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const isHomepage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    // Check initial scroll position
    handleScroll();
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
      setIsMobileServicesOpen(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  }, [pathname]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Handle hash links on homepage
    if (href.startsWith('/#')) {
      if (isHomepage) {
        e.preventDefault();
        const target = document.querySelector(href.substring(1));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
      setIsOpen(false);
      return;
    }
    setIsOpen(false);
  };

  const isActiveLink = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href.startsWith('/#')) return false;
    return pathname.startsWith(href);
  };

  const isServicesActive = serviceLinks.some((link) => pathname.startsWith(link.href));

  // Determine nav colors based on scroll and page
  const showDarkNav = isScrolled || !isHomepage;

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: showDarkNav ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
          backdropFilter: showDarkNav ? 'blur(12px)' : 'none',
          boxShadow: showDarkNav ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
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
                className={`transition-all duration-300 ${showDarkNav || isOpen ? '' : 'brightness-0 invert'}`}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {mainNavLinks.map((link) => (
                link.hasDropdown ? (
                  <div key={link.label} ref={dropdownRef} className="relative">
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="nav-link flex items-center gap-1 transition-colors duration-300 hover:text-coral"
                      style={{
                        color: isServicesActive ? '#F2594B' : showDarkNav ? '#0a0a0a' : '#ffffff',
                      }}
                    >
                      {link.label}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                    {/* Dropdown Menu */}
                    <div
                      className="absolute top-full left-1/2 pt-4 transition-all duration-300"
                      style={{
                        transform: 'translateX(-50%)',
                        opacity: isDropdownOpen ? 1 : 0,
                        visibility: isDropdownOpen ? 'visible' : 'hidden',
                        pointerEvents: isDropdownOpen ? 'auto' : 'none',
                      }}
                    >
                      <div
                        className="bg-white py-3"
                        style={{
                          minWidth: '200px',
                          boxShadow: '0 10px 40px rgba(0,0,0,0.12)',
                        }}
                      >
                        {serviceLinks.map((serviceLink) => (
                          <Link
                            key={serviceLink.href}
                            href={serviceLink.href}
                            className="block px-6 py-3 text-sm font-medium transition-colors"
                            style={{
                              color: pathname === serviceLink.href ? '#F2594B' : '#525252',
                            }}
                            onMouseEnter={(e) => {
                              if (pathname !== serviceLink.href) {
                                e.currentTarget.style.color = '#0a0a0a';
                                e.currentTarget.style.backgroundColor = '#fafafa';
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (pathname !== serviceLink.href) {
                                e.currentTarget.style.color = '#525252';
                                e.currentTarget.style.backgroundColor = 'transparent';
                              }
                            }}
                          >
                            {serviceLink.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="nav-link transition-colors duration-300 hover:text-coral"
                    style={{
                      color: isActiveLink(link.href) ? '#F2594B' : showDarkNav ? '#0a0a0a' : '#ffffff',
                    }}
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="/kontakt"
              className="hidden lg:flex items-center gap-2 px-6 py-3 text-sm font-semibold uppercase transition-all duration-300"
              style={{
                letterSpacing: '0.05em',
                backgroundColor: showDarkNav ? '#F2594B' : '#ffffff',
                color: showDarkNav ? '#ffffff' : '#0a0a0a',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = showDarkNav ? '#0a0a0a' : '#F2594B';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = showDarkNav ? '#F2594B' : '#ffffff';
                e.currentTarget.style.color = showDarkNav ? '#ffffff' : '#0a0a0a';
              }}
            >
              <span>Rezerviraj Obilazak</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative z-10 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              style={{ color: isOpen ? '#ffffff' : showDarkNav ? '#0a0a0a' : '#ffffff' }}
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
        className="fixed inset-0 z-40 transition-all duration-500 ease-out lg:hidden"
        style={{
          backgroundColor: '#0a0a0a',
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? 'visible' : 'hidden',
        }}
      >
        {/* Decorative coral accent */}
        <div
          className="absolute top-0 right-0 w-32 h-32 opacity-20"
          style={{
            background: 'radial-gradient(circle at top right, #F2594B 0%, transparent 70%)',
          }}
        />

        <div className="flex flex-col h-full">
          {/* Top spacer for header */}
          <div style={{ height: '80px' }} />

          {/* Navigation Links */}
          <div className="flex-1 flex flex-col justify-center px-8 py-8">
            <nav className="space-y-1">
              {/* Početna */}
              <Link
                href="/"
                onClick={(e) => handleLinkClick(e, '/')}
                className="mobile-nav-link group flex items-center py-4 border-b border-white/10"
              >
                <span
                  className="text-3xl font-black text-white group-hover:text-coral transition-colors"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  Početna
                </span>
                <svg
                  className="ml-auto w-5 h-5 text-white/30 group-hover:text-coral group-hover:translate-x-1 transition-all"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              {/* Usluge with submenu */}
              <div className="mobile-nav-link border-b border-white/10">
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="group flex items-center w-full py-4"
                >
                  <span
                    className="text-3xl font-black text-white group-hover:text-coral transition-colors"
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    Usluge
                  </span>
                  <svg
                    className={`ml-auto w-5 h-5 text-white/30 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180 text-coral' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: isMobileServicesOpen ? '280px' : '0',
                    opacity: isMobileServicesOpen ? 1 : 0,
                  }}
                >
                  <div className="pl-4 pb-4 space-y-3">
                    {serviceLinks.map((serviceLink) => (
                      <Link
                        key={serviceLink.href}
                        href={serviceLink.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 py-2 text-lg text-white/60 hover:text-coral transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-coral/50" />
                        {serviceLink.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* O Nama */}
              <Link
                href="/o-nama"
                onClick={(e) => handleLinkClick(e, '/o-nama')}
                className="mobile-nav-link group flex items-center py-4 border-b border-white/10"
              >
                <span
                  className="text-3xl font-black text-white group-hover:text-coral transition-colors"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  O Nama
                </span>
                <svg
                  className="ml-auto w-5 h-5 text-white/30 group-hover:text-coral group-hover:translate-x-1 transition-all"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              {/* FAQ */}
              <Link
                href="/faq"
                onClick={(e) => handleLinkClick(e, '/faq')}
                className="mobile-nav-link group flex items-center py-4 border-b border-white/10"
              >
                <span
                  className="text-3xl font-black text-white group-hover:text-coral transition-colors"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  FAQ
                </span>
                <svg
                  className="ml-auto w-5 h-5 text-white/30 group-hover:text-coral group-hover:translate-x-1 transition-all"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              {/* Kontakt */}
              <Link
                href="/kontakt"
                onClick={(e) => handleLinkClick(e, '/kontakt')}
                className="mobile-nav-link group flex items-center py-4 border-b border-white/10"
              >
                <span
                  className="text-3xl font-black text-white group-hover:text-coral transition-colors"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  Kontakt
                </span>
                <svg
                  className="ml-auto w-5 h-5 text-white/30 group-hover:text-coral group-hover:translate-x-1 transition-all"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </nav>

            {/* CTA Button */}
            <Link
              href="/kontakt"
              onClick={() => setIsOpen(false)}
              className="mobile-nav-link mt-8 flex items-center justify-center gap-3 py-4 bg-coral text-white text-lg font-bold uppercase hover:bg-white hover:text-black transition-colors"
              style={{ letterSpacing: '0.05em' }}
            >
              <span>Rezerviraj Obilazak</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Bottom Contact Info */}
          <div className="px-8 py-6 border-t border-white/10">
            <div className="flex items-center justify-between text-sm">
              <div className="space-y-1">
                <a href="tel:+38521123456" className="block text-white/60 hover:text-coral transition-colors">
                  +385 21 123 456
                </a>
                <a href="mailto:info@habu.hr" className="block text-white/60 hover:text-coral transition-colors">
                  info@habu.hr
                </a>
              </div>
              <div className="flex gap-4">
                {['linkedin', 'instagram'].map((social) => (
                  <a
                    key={social}
                    href={`https://${social}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center border border-white/20 text-white/60 hover:border-coral hover:text-coral transition-colors"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      {social === 'linkedin' && (
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      )}
                      {social === 'instagram' && (
                        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                      )}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
