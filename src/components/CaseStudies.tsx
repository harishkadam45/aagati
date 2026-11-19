import { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, ArrowUpRight } from 'lucide-react';
import type { CaseStudy } from '../data/site';

const pad = (n: number) => String(n).padStart(2, '0');

export default function CaseStudies({ items }: { items: CaseStudy[] }) {
  const [active, setActive] = useState(0);
  const c = items[active];
  const go = (d: number) => setActive((a) => (a + d + items.length) % items.length);

  return (
    <div className="grid gap-6 lg:grid-cols-[320px_1fr] lg:gap-8">
      {/* Client list */}
      <div
        role="tablist"
        aria-label="Case studies"
        className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0"
      >
        {items.map((it, i) => (
          <button
            key={it.client}
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={`group flex shrink-0 items-center gap-4 rounded-2xl border px-4 py-3 text-left transition-all lg:w-full ${
              i === active
                ? 'border-brand-600 bg-brand-600 text-white shadow-[0_14px_30px_-14px_rgba(0,113,204,0.7)]'
                : 'border-slate-200 bg-white hover:border-brand-600/40 hover:bg-brand-50'
            }`}
          >
            <span className={`text-xs font-bold ${i === active ? 'text-white/70' : 'text-slate-400'}`}>{pad(i + 1)}</span>
            <span className="min-w-0">
              <span className={`block whitespace-nowrap text-sm font-extrabold uppercase tracking-wide ${i === active ? 'text-white' : 'text-navy-950'}`}>
                {it.client}
              </span>
              <span className={`hidden truncate text-xs lg:block ${i === active ? 'text-white/75' : 'text-slate-500'}`}>{it.sector}</span>
            </span>
          </button>
        ))}
      </div>

      {/* Detail */}
      <article
        key={c.client}
        role="tabpanel"
        className="relative overflow-hidden rounded-3xl bg-navy-950 p-6 text-slate-300 animate-word sm:p-10"
      >
        <div className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-brand-600/30 blur-3xl" />
        <div className="relative grid gap-10 xl:grid-cols-[1fr_300px]">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-brand-500">
              {pad(active + 1)} · {c.sector}
            </p>
            <h3 className="mt-3 text-sm font-extrabold uppercase tracking-[0.15em] text-white/70">{c.client}</h3>
            <h4 className="mt-2 text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl">{c.title}</h4>
            <p className="mt-4 leading-relaxed">{c.summary}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {c.tags.map((t) => (
                <li key={t} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white">
                  {t}
                </li>
              ))}
            </ul>
            <a href="#case-studies" className="btn-white mt-8">
              View Case Study <ArrowUpRight className="size-4" />
            </a>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            {c.metric && (
              <div className="mb-6 border-b border-white/10 pb-6">
                <p className="text-5xl font-extrabold tracking-tight text-white">
                  {c.metric.value.replace('%', '')}
                  <span className="text-brand-500">%</span>
                </p>
                <p className="mt-1 text-sm">{c.metric.label}</p>
              </div>
            )}
            <p className="mb-4 text-xs font-bold uppercase tracking-wider text-white/60">Outcomes delivered</p>
            <ul className="space-y-3">
              {c.outcomes.map((o) => (
                <li key={o} className="flex gap-3 text-sm leading-snug text-white">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-500" />
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative mt-10 flex items-center justify-between border-t border-white/10 pt-6">
          <p className="text-sm font-bold text-white">
            {pad(active + 1)} <span className="text-white/40">/ {pad(items.length)}</span>
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => go(-1)}
              aria-label="Previous case study"
              className="flex size-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-brand-500 hover:bg-brand-600"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next case study"
              className="flex size-11 items-center justify-center rounded-full bg-brand-600 text-white transition hover:bg-brand-700"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}
