import { Wallet, ArrowRightLeft, TrendingUp, Sofa } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Wallet,
    title: 'Create a Wallet',
    description:
      'Download MetaMask or any Web3 wallet. Write down your seed phrase. Hide it somewhere your cat can\'t find it.',
    tip: 'MetaMask, Trust Wallet, or Phantom all work great.',
  },
  {
    number: '02',
    icon: TrendingUp,
    title: 'Get Some ETH',
    description:
      'Buy ETH from any exchange (Coinbase, Binance, Kraken). Transfer it to your wallet. Try not to panic at the gas fees.',
    tip: 'You\'ll need a little extra ETH for gas. Ethereum is expensive. We know.',
  },
  {
    number: '03',
    icon: ArrowRightLeft,
    title: 'Swap for $POINTLESS',
    description:
      'Head to Uniswap, paste the $POINTLESS contract address, set slippage to 1-2%, and swap. Congratulations, you now own something pointless.',
    tip: 'Set slippage to 1-2% for a smooth swap.',
  },
  {
    number: '04',
    icon: Sofa,
    title: 'Hold & Do Nothing',
    description:
      'This is the most important step. Do absolutely nothing. Don\'t panic sell. Don\'t check the price every 5 minutes. Just... hold.',
    tip: 'Seriously. Just hold. That\'s it. That\'s the whole strategy.',
  },
];

export default function HowToBuySection() {
  return (
    <section id="how-to-buy" className="py-24 md:py-32 bg-dark relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-1/2 left-0 w-96 h-96 -translate-y-1/2 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, oklch(0.82 0.18 85 / 0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gold/10 border border-gold/30 rounded-sm px-4 py-1.5 mb-6">
            <span className="font-heading text-gold text-sm tracking-widest uppercase">How to Buy</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-4">
            It's{' '}
            <span className="shimmer-text">Pointlessly Easy</span>
          </h2>
          <p className="text-foreground/50 text-lg max-w-xl mx-auto">
            Four simple steps to owning the most pointless coin in crypto. Even your grandma could do it.
            (Please don't tell your grandma.)
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-gold/30 to-transparent z-10 -translate-y-1/2" />
                )}

                <div className="card-dark rounded-sm p-6 h-full flex flex-col gap-4">
                  {/* Step number + icon */}
                  <div className="flex items-start justify-between">
                    <div
                      className="w-14 h-14 rounded-sm flex items-center justify-center"
                      style={{ background: 'oklch(0.82 0.18 85 / 0.1)' }}
                    >
                      <Icon className="text-gold" size={28} />
                    </div>
                    <span className="font-display text-5xl text-gold/20 leading-none">{step.number}</span>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl text-foreground mb-2">{step.title}</h3>
                    <p className="text-foreground/60 text-sm leading-relaxed">{step.description}</p>
                  </div>

                  <div className="mt-auto pt-4 border-t border-gold/10">
                    <p className="text-gold/70 text-xs font-heading">
                      💡 {step.tip}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="btn-gold px-12 py-4 rounded-sm text-lg font-heading tracking-wider uppercase">
            🚀 Buy $POINTLESS Now
          </button>
        </div>
      </div>
    </section>
  );
}
