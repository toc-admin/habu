'use client';

const words = [
  'Premium Uredi',
  '•',
  'Split',
  '•',
  'Fleksibilnost',
  '•',
  '24/7 Pristup',
  '•',
  'Premium Uredi',
  '•',
  'Split',
  '•',
  'Fleksibilnost',
  '•',
  '24/7 Pristup',
  '•',
];

export default function Marquee() {
  return (
    <div className="bg-coral py-4 overflow-hidden">
      <div className="marquee flex whitespace-nowrap">
        {[...words, ...words].map((word, index) => (
          <span
            key={index}
            className="text-white text-sm font-bold tracking-[0.2em] uppercase mx-8"
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
