export default function HeroSection() {
  const handleScrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dark">
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, oklch(0.82 0.18 85 / 0.07) 0%, transparent 70%)',
        }}
      />

      {/* Stars/particles background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 60 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gold/30"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random() * 0.6 + 0.2,
              animationDelay: Math.random() * 3 + 's',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto">
        {/* Coin Image */}
        <div className="relative mb-8 md:mb-10">
          <div
            className="absolute inset-0 rounded-full animate-pulse-glow"
            style={{
              background: 'radial-gradient(circle, oklch(0.82 0.18 85 / 0.3) 0%, transparent 70%)',
              transform: 'scale(1.5)',
            }}
          />
          <img
            src="/assets/generated/pointless-coin.dim_512x512.png"
            alt="The Pointless Coin"
            className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full object-cover animate-coin-float"
            style={{
              boxShadow:
                '0 0 40px oklch(0.82 0.18 85 / 0.5), 0 0 80px oklch(0.82 0.18 85 / 0.3), 0 0 120px oklch(0.82 0.18 85 / 0.15)',
            }}
          />
        </div>

        {/* Headline */}
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none mb-4 shimmer-text">
          THE POINTLESS COIN
        </h1>

        {/* Ticker */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-12 bg-gold/40" />
          <span className="font-heading text-gold text-xl md:text-2xl tracking-widest">$POINTLESS</span>
          <div className="h-px w-12 bg-gold/40" />
        </div>

        {/* Tagline */}
        <p className="font-heading text-xl md:text-2xl lg:text-3xl text-foreground/80 mb-4 max-w-2xl leading-relaxed">
          Absolutely no utility. Completely pointless.{' '}
          <span className="text-gold">100% yours.</span>
        </p>

        <p className="text-foreground/50 text-base md:text-lg mb-10 max-w-xl">
          The most honest coin in crypto. We're not pretending to change the world.
          We're just here to have fun and go to the moon. 🚀
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <button
            className="btn-gold px-10 py-4 rounded-sm text-lg font-heading tracking-wider uppercase w-full sm:w-auto"
            onClick={() => handleScrollTo('#how-to-buy')}
          >
            🚀 Buy Now
          </button>
          <button
            className="btn-outline-gold px-10 py-4 rounded-sm text-lg font-heading tracking-wider uppercase w-full sm:w-auto"
            onClick={() => handleScrollTo('#community')}
          >
            💬 Join Community
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-foreground/30 text-xs font-heading tracking-widest uppercase">Scroll Down</span>
          <div className="w-px h-8 bg-gradient-to-b from-gold/50 to-transparent" />
        </div>
      </div>
    </section>
  );
}
