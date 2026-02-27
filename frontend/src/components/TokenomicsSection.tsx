import { Coins, Flame } from 'lucide-react';

const stats = [
  {
    icon: Coins,
    label: 'Total Supply',
    value: '1,000,000,000',
    unit: '$POINTLESS',
    description: 'Because 1 billion sounds impressive and we like big numbers.',
    color: 'from-gold/20 to-gold/5',
  },
  {
    icon: Flame,
    label: 'Team Tokens',
    value: '0%',
    unit: 'Reserved',
    description: 'No team allocation. We bought in like everyone else. Crazy, right?',
    color: 'from-gold/20 to-gold/5',
  },
];

const contractAddress = 'D9amokaerETTwVavdrd3nvWcwMAs3dj5HGPwAK47bonk';

export default function TokenomicsSection() {
  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
  };

  return (
    <section id="tokenomics" className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: 'oklch(0.12 0.005 0)' }}
    >
      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 100% at 50% 100%, oklch(0.82 0.18 85 / 0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gold/10 border border-gold/30 rounded-sm px-4 py-1.5 mb-6">
            <span className="font-heading text-gold text-sm tracking-widest uppercase">Tokenomics</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-4">
            The Numbers Are{' '}
            <span className="shimmer-text">Pointlessly Good</span>
          </h2>
          <p className="text-foreground/50 text-lg max-w-xl mx-auto">
            Simple tokenomics for a simple coin. No tricks, no traps, no complicated vesting schedules.
          </p>
        </div>

        {/* Stats Grid — 2 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="card-dark rounded-sm p-6 flex flex-col gap-4 group"
              >
                <div
                  className="w-12 h-12 rounded-sm flex items-center justify-center"
                  style={{ background: 'oklch(0.82 0.18 85 / 0.1)' }}
                >
                  <Icon className="text-gold" size={24} />
                </div>
                <div>
                  <p className="font-heading text-foreground/50 text-xs tracking-widest uppercase mb-1">
                    {stat.label}
                  </p>
                  <p className="font-display text-4xl md:text-5xl text-gold leading-none">
                    {stat.value}
                  </p>
                  <p className="font-heading text-foreground/60 text-sm mt-1">{stat.unit}</p>
                </div>
                <p className="text-foreground/50 text-sm leading-relaxed border-t border-gold/10 pt-4">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Contract Address */}
        <div
          className="max-w-2xl mx-auto rounded-sm p-6 border border-gold/20 text-center"
          style={{ background: 'oklch(0.14 0.005 0)' }}
        >
          <p className="font-heading text-foreground/50 text-xs tracking-widest uppercase mb-3">
            Contract Address
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <code className="font-mono text-gold text-sm md:text-base break-all">
              {contractAddress}
            </code>
            <button
              onClick={handleCopy}
              className="btn-gold px-3 py-1.5 rounded-sm text-xs font-heading tracking-wider uppercase shrink-0"
            >
              Copy
            </button>
          </div>
          <p className="text-foreground/30 text-xs mt-3">
            Always verify the contract address before buying. Don't get rugged by fakes.
          </p>
        </div>
      </div>
    </section>
  );
}
