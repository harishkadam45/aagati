import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, HeartPulse, Rocket, TrendingUp, UserCheck, type LucideIcon } from 'lucide-react';

type Stat = { value: string; label: string; tag: string };

const icons: LucideIcon[] = [UserCheck, HeartPulse, TrendingUp, Rocket];

const reduceMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Counts from 0 up to `target` each time `run` changes. */
function useCountUp(target: number, run: number, duration = 1400) {
  const [n, setN] = useState(target);
  useEffect(() => {
    if (!run || !target || reduceMotion()) return setN(target);
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      setN(Math.round(target * (1 - Math.pow(1 - p, 3)))); // ease-out cubic
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, target, duration]);
  return n;
}

function StatCard({ stat, index, visible }: { stat: Stat; index: number; visible: boolean }) {
  const Icon = icons[index % icons.length];
  const isPct = stat.value.endsWith('%');
  const target = isPct ? parseInt(stat.value, 10) : 0;
  const [run, setRun] = useState(0);
  const n = useCountUp(target, run);

  // first count-up when the row scrolls into view
  useEffect(() => {
    if (visible) setRun((r) => r || 1);
  }, [visible]);

  return (
    <div
      onMouseEnter={() => isPct && setRun((r) => r + 1)}
      style={{ animationDelay: `${index * 100}ms` }}
      className={`group relative isolate overflow-hidden rounded-2xl border border-brand-100 bg-brand-50 p-5 text-left transition-[translate,box-shadow,border-color] duration-500 ease-out hover:-translate-y-1.5 hover:border-transparent hover:shadow-[0_24px_40px_-18px_rgba(0,113,204,0.65)] sm:p-6 ${
        visible ? 'animate-[word-in_0.6s_ease-out_both]' : 'opacity-0'
      }`}
    >
      {/* hover fill: sweeps up from the bottom */}
      <span className="absolute inset-0 -z-10 translate-y-full bg-gradient-to-br from-brand-500 via-brand-600 to-navy-950 transition-transform duration-500 ease-out group-hover:translate-y-0" />
      {/* soft glow orb */}
      <span className="absolute -right-10 -top-10 -z-10 size-32 rounded-full bg-brand-500/15 blur-2xl transition-all duration-700 group-hover:scale-150 group-hover:bg-white/20" />
      {/* watermark icon */}
      <Icon
        aria-hidden
        className="absolute -bottom-4 -right-4 -z-10 size-28 rotate-12 text-brand-600/[0.06] transition-all duration-700 group-hover:-rotate-6 group-hover:scale-110 group-hover:text-white/10"
        strokeWidth={1.5}
      />

      <div className="mb-5 flex items-start justify-between">
        <span className="flex size-11 items-center justify-center rounded-xl bg-white text-brand-600 shadow-[0_6px_16px_-8px_rgba(0,113,204,0.6)] transition-all duration-500 group-hover:rotate-[-8deg] group-hover:scale-110 group-hover:bg-white/15 group-hover:text-white group-hover:shadow-none">
          <Icon className={`size-5 ${index === 3 ? 'transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5' : ''}`} />
        </span>
        <ArrowUpRight className="size-5 -translate-x-2 translate-y-2 text-white opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
      </div>

      <p className="mb-2 text-3xl font-extrabold tabular-nums tracking-tight text-navy-950 transition-colors duration-500 group-hover:text-white sm:text-4xl">
        {isPct ? (
          <>
            {n}
            <span className="text-brand-600 transition-colors duration-500 group-hover:text-brand-100">%</span>
          </>
        ) : (
          stat.value
        )}
      </p>
      <p className="text-sm leading-snug text-slate-600 transition-colors duration-500 group-hover:text-white/85">{stat.label}</p>

      <div className="mt-4 flex items-center gap-3">
        <span className="text-[11px] font-bold uppercase tracking-wider text-brand-600 transition-colors duration-500 group-hover:text-white">
          {stat.tag}
        </span>
        {/* progress line that draws in on hover */}
        <span className="relative h-0.5 flex-1 overflow-hidden rounded-full bg-brand-600/15 group-hover:bg-white/20">
          <span className="absolute inset-y-0 left-0 w-0 rounded-full bg-brand-600 transition-all duration-700 ease-out group-hover:w-full group-hover:bg-white" />
        </span>
      </div>
    </div>
  );
}

export default function StatCards({ stats }: { stats: Stat[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4">
      {stats.map((s, i) => (
        <StatCard key={s.label} stat={s} index={i} visible={visible} />
      ))}
    </div>
  );
}
