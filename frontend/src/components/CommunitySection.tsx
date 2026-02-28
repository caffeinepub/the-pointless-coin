import { SiX } from 'react-icons/si';

const socials = [
  {
    name: 'X Community',
    handle: 'x.com/i/communities',
    description: 'Follow us for memes, updates, and the occasional existential crisis about crypto. Join the Pointless Army on X.',
    icon: SiX,
    href: 'https://x.com/i/communities/2027195726711697820',
    color: 'hover:border-foreground/40',
    iconBg: 'bg-foreground/10',
  },
];

export default function CommunitySection() {
  return (
    <section id="community" className="py-24 md:py-32 bg-dark relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, oklch(0.82 0.18 85 / 0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gold/10 border border-gold/30 rounded-sm px-4 py-1.5 mb-6">
            <span className="font-heading text-gold text-sm tracking-widest uppercase">Community</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-4">
            Join the{' '}
            <span className="shimmer-text">Pointless Army</span>
          </h2>
          <p className="text-foreground/50 text-lg max-w-xl mx-auto">
            Thousands of people have already embraced the pointlessness. Come join us.
            We have memes. And that's honestly enough.
          </p>
        </div>

        {/* Social Cards */}
        <div className="flex justify-center mb-16">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`card-dark rounded-sm p-8 flex flex-col gap-5 group cursor-pointer w-full max-w-md ${social.color}`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-sm flex items-center justify-center ${social.iconBg} transition-all duration-300 group-hover:scale-110`}
                  >
                    <Icon size={28} className="text-foreground/80 group-hover:text-foreground transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-foreground">{social.name}</h3>
                    <p className="text-foreground/40 text-sm font-mono">{social.handle}</p>
                  </div>
                </div>
                <p className="text-foreground/60 text-sm leading-relaxed">{social.description}</p>
                <div className="mt-auto flex items-center gap-2 text-gold font-heading text-sm tracking-wide group-hover:gap-3 transition-all">
                  <span>Join Now</span>
                  <span>→</span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Big CTA */}
        <div
          className="rounded-sm p-10 md:p-16 text-center border border-gold/20 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, oklch(0.14 0.005 0), oklch(0.16 0.01 85 / 0.5))',
            boxShadow: '0 0 60px oklch(0.82 0.18 85 / 0.08)',
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 60% 80% at 50% 50%, oklch(0.82 0.18 85 / 0.05) 0%, transparent 70%)',
            }}
          />
          <div className="relative z-10">
            <img
              src="/assets/generated/pointless-coin-p.dim_512x512.png"
              alt="Pointless Coin"
              className="w-20 h-20 object-contain mx-auto mb-6 animate-coin-float"
              style={{
                filter: 'drop-shadow(0 0 20px oklch(0.82 0.18 85 / 0.5))',
              }}
            />
            <h3 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Ready to Be{' '}
              <span className="shimmer-text">Pointless?</span>
            </h3>
            <p className="text-foreground/50 text-lg mb-8 max-w-lg mx-auto">
              Join thousands of degens who have already embraced the void.
              Buy some $POINTLESS and do absolutely nothing with it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://x.com/i/communities/2027195726711697820"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold px-10 py-4 rounded-sm text-lg font-heading tracking-wider uppercase"
              >
                🚀 Buy $POINTLESS
              </a>
              <a
                href="https://x.com/i/communities/2027195726711697820"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold px-10 py-4 rounded-sm text-lg font-heading tracking-wider uppercase"
              >
                💬 Join Community
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
