import React, { useState, useEffect } from 'react';
import { MentorScopeLogo } from './MentorScopeLogo';
import { Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onRequestPilot: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onRequestPilot }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      // Simple active link highlight based on scroll position
      const sections = ['home', 'about', 'platform', 'how-it-works', 'pricing', 'faq'];
      const scrollPos = window.scrollY + 100;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Platform', href: '#platform', id: 'platform' },
    { label: 'How it works', href: '#how-it-works', id: 'how-it-works' },
    { label: 'Market pricing', href: '#pricing', id: 'pricing' },
    { label: 'FAQ', href: '#faq', id: 'faq' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-subtle border-b border-slate-200'
          : 'bg-warm-100/95 backdrop-blur-sm border-b border-slate-200/60'
      }`}
    >
      <div className="max-w-site mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px] sm:h-20">
          {/* MentorScope Clean Wordmark */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="group inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 rounded-md py-1"
            aria-label="MentorScope Home"
          >
            <MentorScopeLogo size="md" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 ${
                    isActive
                      ? 'text-teal-700 font-semibold bg-teal-50/60'
                      : 'text-slate-muted hover:text-navy-900 hover:bg-slate-100/70'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA Button: Teal background, 48px height */}
          <div className="hidden lg:flex items-center">
            <button
              type="button"
              onClick={onRequestPilot}
              className="inline-flex items-center justify-center gap-2 h-11 px-5 text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 active:bg-teal-900 transition-all duration-200 rounded-xl shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 hover:-translate-y-0.5"
            >
              <span>Request a Pilot</span>
              <ArrowRight className="w-4 h-4 text-teal-100" aria-hidden="true" />
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-muted hover:text-navy-900 hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="lg:hidden border-b border-slate-200 bg-white px-5 pt-3 pb-6 shadow-card animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <nav className="flex flex-col space-y-1.5" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3.5 py-2.5 text-base font-medium text-slate-body hover:bg-warm-100 hover:text-teal-700 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100 mt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestPilot();
                }}
                className="w-full flex items-center justify-center gap-2 h-12 px-5 text-base font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-xl shadow-sm transition-colors"
              >
                <span>Request a Pilot</span>
                <ArrowRight className="w-4 h-4 text-teal-100" aria-hidden="true" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
