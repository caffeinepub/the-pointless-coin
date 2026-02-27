export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-dark relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, oklch(0.82 0.18 85 / 0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Coin Visual */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle, oklch(0.82 0.18 85 / 0.2) 0%, transparent 70%)',
                  transform: 'scale(1.4)',
                }}
              />
              <img
                src="/assets/generated/pointless-coin.dim_512x512.png"
                alt="The Pointless Coin"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover"
                style={{
                  boxShadow: '0 0 60px oklch(0.82 0.18 85 / 0.3), 0 0 120px oklch(0.82 0.18 85 / 0.15)',
                }}
              />
              {/* Orbiting badge */}
              <div
                className="absolute -top-4 -right-4 bg-dark-card border border-gold/40 rounded-full px-4 py-2"
                style={{ boxShadow: '0 0 15px oklch(0.82 0.18 85 / 0.3)' }}
              >
                <span className="font-heading text-gold text-sm">100% Pointless</span>
              </div>
              <div
                className="absolute -bottom-4 -left-4 bg-dark-card border border-gold/40 rounded-full px-4 py-2"
                style={{ boxShadow: '0 0 15px oklch(0.82 0.18 85 / 0.3)' }}
              >
                <span className="font-heading text-gold text-sm">0% Utility</span>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-block bg-gold/10 border border-gold/30 rounded-sm px-4 py-1.5 mb-6">
              <span className="font-heading text-gold text-sm tracking-widest uppercase">About</span>
            </div>

            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight">
              What is{' '}
              <span className="shimmer-text">The Pointless Coin?</span>
            </h2>

            <div className="space-y-5 text-foreground/70 text-lg leading-relaxed">
              <p>
                Great question. We're glad you asked. The Pointless Coin is exactly what it sounds like —{' '}
                <span className="text-gold font-semibold">a coin with absolutely no point.</span>
              </p>
              <p>
                No whitepaper. No roadmap promises we'll break. No "revolutionary blockchain technology."
                No team of PhDs pretending to solve problems that don't exist.
                Just a coin. A beautiful, shiny, completely{' '}
                <span className="text-gold font-semibold">pointless coin.</span>
              </p>
              <p>
                In a world full of coins claiming to change finance, healthcare, supply chains, and the
                entire internet — we're here to tell you the truth:{' '}
                <span className="text-gold font-semibold">we're not doing any of that.</span>
              </p>
              <p>
                And somehow, that makes us the most honest project in crypto. 🏆
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {['No Utility', 'No Promises', 'No BS', '100% Vibes'].map((tag) => (
                <span
                  key={tag}
                  className="font-heading text-sm text-gold border border-gold/30 bg-gold/5 px-4 py-2 rounded-sm tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* The Birth of Pointless */}
        <div className="mt-24 max-w-3xl mx-auto text-center">
          <div className="inline-block bg-gold/10 border border-gold/30 rounded-sm px-4 py-1.5 mb-6">
            <span className="font-heading text-gold text-sm tracking-widest uppercase">Origin Story</span>
          </div>
          <h3 className="font-display text-4xl md:text-5xl text-foreground mb-6 leading-tight">
            The Birth of{' '}
            <span className="shimmer-text">Pointless</span>
          </h3>
          <div
            className="rounded-sm p-8 border border-gold/20 text-left space-y-5 text-foreground/70 text-lg leading-relaxed"
            style={{ background: 'oklch(0.12 0.005 0)' }}
          >
            <p>
              Every legend has an origin. Ours? A single tweet that broke the internet — and accidentally
              created a movement.
            </p>
            <p>
              On February 26, 2026, <span className="text-gold font-semibold">First Squawk</span> posted
              a headline straight from the New York Post that read:{' '}
              <span className="text-gold font-semibold italic">
                "CRYPTO IS POINTLESS. NOT EVEN THE WHITE HOUSE CAN FIX THAT."
              </span>
            </p>
            <p>
              The suits meant it as a diss. We took it as a{' '}
              <span className="text-gold font-semibold">business plan.</span>
            </p>
            <p>
              If the New York Post says crypto is pointless, who are we to argue? We leaned in, embraced
              the chaos, and launched the only coin brave enough to wear "pointless" as a badge of honor.
              No utility. No promises. Just pure, unapologetic{' '}
              <span className="text-gold font-semibold">$POINTLESS energy.</span> 🗞️🔥
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
