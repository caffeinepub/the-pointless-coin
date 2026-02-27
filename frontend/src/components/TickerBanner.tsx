const tickerItems = [
  '🚀 $POINTLESS TO THE MOON',
  '💎 DIAMOND HANDS ONLY',
  '🔥 NO UTILITY = PURE FREEDOM',
  '🌕 MOON OR BUST',
  '💰 1 BILLION SUPPLY',
  '🤝 0% TAX',
  '🔒 LIQUIDITY LOCKED',
  '😂 COMPLETELY POINTLESS',
  '🚀 $POINTLESS TO THE MOON',
  '💎 DIAMOND HANDS ONLY',
  '🔥 NO UTILITY = PURE FREEDOM',
  '🌕 MOON OR BUST',
  '💰 1 BILLION SUPPLY',
  '🤝 0% TAX',
  '🔒 LIQUIDITY LOCKED',
  '😂 COMPLETELY POINTLESS',
];

export default function TickerBanner() {
  return (
    <div
      className="relative overflow-hidden py-3 border-y border-gold/30"
      style={{
        background: 'linear-gradient(90deg, oklch(0.14 0.005 0), oklch(0.18 0.02 85 / 0.3), oklch(0.14 0.005 0))',
      }}
    >
      <div className="flex animate-ticker whitespace-nowrap">
        {tickerItems.map((item, i) => (
          <span
            key={i}
            className="font-heading text-gold text-sm tracking-widest uppercase mx-8 flex-shrink-0"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
