import React from 'react';
import { MentorScopeLogo } from './MentorScopeLogo';
import { ArrowRight } from 'lucide-react';

interface FooterProps {
  onRequestPilot: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onRequestPilot }) => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Platform', href: '#platform' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Market pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <footer className="bg-navy-900 text-white pt-16 pb-12 border-t border-navy-800">
      <div className="max-w-site mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-navy-800/80">
          {/* Brand and Short Description */}
          <div className="md:col-span-6 space-y-4">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded-md"
              aria-label="MentorScope Home"
            >
              <MentorScopeLogo isLight={true} size="md" />
            </a>
            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              Programme-wide evidence for commissioned coaching and mentoring.
            </p>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Designed as a lightweight reporting layer for commissioning organisations working alongside independent coaches and mentors.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-teal-400 mb-3.5">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded py-0.5 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Call to Action */}
          <div className="md:col-span-3 flex flex-col justify-start">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-teal-400 mb-3.5">
              Get Started
            </h3>
            <p className="text-xs text-slate-300 mb-4 leading-relaxed">
              Explore the proposed pilot framework for your upcoming mentoring cohort or coaching panel.
            </p>
            <div>
              <button
                type="button"
                onClick={onRequestPilot}
                className="inline-flex items-center gap-2 h-11 px-5 text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 transition-all duration-200 rounded-xl shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 hover:-translate-y-0.5"
              >
                <span>Request a Pilot</span>
                <ArrowRight className="w-4 h-4 text-teal-100" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Copyright Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <div>
            &copy; {currentYear} MentorScope. All rights reserved.
          </div>
          <div className="text-slate-400 text-center sm:text-right">
            Conceptual design for evaluation. Demonstrator landing page.
          </div>
        </div>
      </div>
    </footer>
  );
};
