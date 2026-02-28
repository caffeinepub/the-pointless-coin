import { SiX } from 'react-icons/si';
import { Heart } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'pointless-coin');

  return (
    <footer
      className="border-t border-gold/20 py-12 relative overflow-hidden"
      style={{ background: 'oklch(0.1 0 0)' }}
    >
      {/* Top divider glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/generated/pointless-coin.dim_512x512.png"
                alt="Pointless Coin"
                className="w-10 h-10 rounded-full object-cover"
                style={{ boxShadow: '0 0 15px oklch(0.82 0.18 85 / 0.4)' }}
              />
              <span className="font-heading text-gold text-lg">$POINTLESS</span>
            </div>
            <p className="text-foreground/40 text-sm leading-relaxed max-w-xs">
              The most honest meme coin in crypto. No utility, no promises, no BS.
              Just vibes and the occasional moon.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-foreground/60 text-xs tracking-widest uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['About', 'Tokenomics', 'How to Buy', 'Roadmap', 'Community'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const el = document.querySelector(`#${link.toLowerCase().replace(/ /g, '-')}`);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-foreground/40 hover:text-gold text-sm font-heading transition-colors tracking-wide"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading text-foreground/60 text-xs tracking-widest uppercase mb-4">
              Community
            </h4>
            <div className="flex gap-3">
              <a
                href="https://x.com/i/communities/2027195726711697820"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X Community"
                className="w-10 h-10 rounded-sm border border-gold/20 flex items-center justify-center text-foreground/50 hover:text-gold hover:border-gold/50 transition-all duration-200"
              >
                <SiX size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gold/10 pt-8 mb-6">
          <div
            className="rounded-sm p-4 border border-gold/10 text-center"
            style={{ background: 'oklch(0.14 0.005 0)' }}
          >
            <p className="text-foreground/30 text-xs leading-relaxed max-w-3xl mx-auto">
              ⚠️ <strong className="text-foreground/50">DISCLAIMER:</strong> This is a meme coin with no intrinsic value or financial utility.
              $POINTLESS is created purely for entertainment purposes. This is not financial advice.
              Cryptocurrency investments are highly speculative and volatile. Never invest more than you can afford to lose.
              Do your own research. We are not responsible for your financial decisions.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-foreground/30 text-xs">
          <p className="font-heading tracking-wide">
            © {year} The Pointless Coin. All rights reserved (pointlessly).
          </p>
          <p className="flex items-center gap-1.5">
            Built with{' '}
            <Heart size={12} className="text-gold fill-gold" />{' '}
            using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-bright transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
