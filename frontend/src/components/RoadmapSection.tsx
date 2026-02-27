import { CheckCircle, Circle, Rocket } from 'lucide-react';

const phases = [
  {
    phase: 'Phase 1',
    title: 'The Birth of Pointlessness',
    status: 'complete',
    items: [
      '✅ Have an idea for a coin',
      '✅ Name it something honest',
      '✅ Deploy the contract',
      '✅ Launch website',
      '✅ Tell everyone about it',
    ],
    note: 'We did it. We actually launched. Incredible.',
  },
  {
    phase: 'Phase 2',
    title: 'Go Up (Preferably)',
    status: 'active',
    items: [
      '🔥 Get listed on CoinGecko',
      '🔥 Get listed on CoinMarketCap',
      '🔥 Trending on Twitter/X',
      '🔥 Influencers say our name',
      '🔥 Number go up',
    ],
    note: 'This is the part where we need your help. Tell your friends.',
  },
  {
    phase: 'Phase 3',
    title: 'We Figure It Out',
    status: 'upcoming',
    items: [
      '🌙 CEX listings (maybe)',
      '🌙 Partnerships (with who? no idea)',
      '🌙 Merch (pointless merch)',
      '🌙 Something cool we haven\'t thought of',
      '🌙 Surprise everyone',
    ],
    note: 'We\'ll figure it out when we get there. That\'s the plan.',
  },
  {
    phase: 'Phase 4',
    title: 'Moon?',
    status: 'upcoming',
    items: [
      '🚀 Top 100 on CoinMarketCap',
      '🚀 $1B market cap',
      '🚀 Everyone regrets not buying earlier',
      '🚀 You retire (maybe)',
      '🚀 We all laugh about it',
    ],
    note: 'No promises. But also... why not?',
  },
];

const statusConfig = {
  complete: { label: 'Complete', color: 'text-gold', bg: 'bg-gold/10 border-gold/40' },
  active: { label: 'In Progress', color: 'text-gold-bright', bg: 'bg-gold/20 border-gold/60' },
  upcoming: { label: 'Soon™', color: 'text-foreground/50', bg: 'bg-dark-elevated border-gold/20' },
};

export default function RoadmapSection() {
  return (
    <section
      id="roadmap"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: 'oklch(0.12 0.005 0)' }}
    >
      {/* Background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 100% at 50% 0%, oklch(0.82 0.18 85 / 0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gold/10 border border-gold/30 rounded-sm px-4 py-1.5 mb-6">
            <span className="font-heading text-gold text-sm tracking-widest uppercase">Roadmap</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-4">
            Our{' '}
            <span className="shimmer-text">Pointless Plan</span>
          </h2>
          <p className="text-foreground/50 text-lg max-w-xl mx-auto">
            A roadmap so honest it hurts. We're not promising anything we can't deliver.
            Except vibes. We can definitely deliver vibes.
          </p>
        </div>

        {/* Phases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {phases.map((phase) => {
            const config = statusConfig[phase.status as keyof typeof statusConfig];
            const isActive = phase.status === 'active';

            return (
              <div
                key={phase.phase}
                className={`rounded-sm p-6 border transition-all duration-300 ${
                  isActive
                    ? 'border-gold/50 bg-dark-card'
                    : 'border-gold/20 bg-dark-card'
                }`}
                style={
                  isActive
                    ? { boxShadow: '0 0 30px oklch(0.82 0.18 85 / 0.1), inset 0 0 30px oklch(0.82 0.18 85 / 0.03)' }
                    : {}
                }
              >
                {/* Phase header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      {phase.status === 'complete' ? (
                        <CheckCircle size={16} className="text-gold" />
                      ) : phase.status === 'active' ? (
                        <Rocket size={16} className="text-gold animate-bounce" />
                      ) : (
                        <Circle size={16} className="text-foreground/30" />
                      )}
                      <span className="font-heading text-foreground/50 text-xs tracking-widest uppercase">
                        {phase.phase}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl md:text-2xl text-foreground">{phase.title}</h3>
                  </div>
                  <span
                    className={`font-heading text-xs px-3 py-1 rounded-sm border ${config.bg} ${config.color} tracking-wide`}
                  >
                    {config.label}
                  </span>
                </div>

                {/* Items */}
                <ul className="space-y-2 mb-4">
                  {phase.items.map((item, i) => (
                    <li key={i} className="text-foreground/60 text-sm">
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Note */}
                <div className="border-t border-gold/10 pt-4">
                  <p className="text-gold/60 text-xs font-heading italic">"{phase.note}"</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <div className="text-center mt-12">
          <p className="text-foreground/30 text-sm font-heading">
            * This roadmap is subject to change, vibes, market conditions, and whether we feel like it.
          </p>
        </div>
      </div>
    </section>
  );
}
