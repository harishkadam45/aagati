import { useEffect, useState } from 'react';

export default function RotatingWord({ words, interval = 2200 }: { words: string[]; interval?: number }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => setI((n) => (n + 1) % words.length), interval);
    return () => clearInterval(t);
  }, [words.length, interval]);

  return (
    <span className="relative inline-block whitespace-nowrap text-brand-500" aria-live="polite">
      <span key={words[i]} className="inline-block animate-word">
        {words[i]}
      </span>
      <svg
        className="absolute -bottom-2 left-0 h-3 w-full text-brand-500/30"
        viewBox="0 0 200 12"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M2 9 C 50 2, 150 2, 198 8" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
      </svg>
    </span>
  );
}
