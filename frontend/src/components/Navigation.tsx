import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Tokenomics', href: '#tokenomics' },
  { label: 'How to Buy', href: '#how-to-buy' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Community', href: '#community' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark/95 backdrop-blur-md border-b border-gold/20 shadow-gold'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <div className="relative">
              <img
                src="/assets/generated/pointless-coin.dim_512x512.png"
                alt="Pointless Coin"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover animate-pulse-glow"
              />
            </div>
            <span className="font-heading text-lg md:text-xl text-gold-bright hidden sm:block">
              $POINTLESS
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="font-heading text-sm text-foreground/70 hover:text-gold transition-colors duration-200 tracking-wide uppercase"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <button className="btn-gold px-6 py-2.5 rounded-sm text-sm font-heading tracking-wider uppercase">
              Buy $POINTLESS
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gold p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-dark/98 backdrop-blur-md border-t border-gold/20">
          <div className="px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="font-heading text-base text-foreground/80 hover:text-gold transition-colors text-left uppercase tracking-wide py-2 border-b border-gold/10"
              >
                {link.label}
              </button>
            ))}
            <button className="btn-gold px-6 py-3 rounded-sm text-sm font-heading tracking-wider uppercase mt-2">
              Buy $POINTLESS
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
