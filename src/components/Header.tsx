import { useEffect, useState } from 'react';
import { ChevronDown, Mail, Menu, X, ArrowUpRight } from 'lucide-react';
import { nav, site, contactHref } from '../data/site';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden bg-navy-950 text-[13px] text-slate-300 md:block">
        <div className="container-x flex h-10 items-center justify-between">
          <div className="flex items-center gap-6">
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 transition hover:text-white">
              <Mail className="size-3.5 text-brand-500" /> {site.email}
            </a>
            <span className="hidden lg:inline">Bengaluru · Gurugram · Delaware</span>
          </div>
          <a
            href="#services"
            className="flex items-center gap-2 font-semibold text-white transition hover:text-brand-500"
          >
            <span className="rounded-full bg-accent-500 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide">New</span>
            Aagati × Actian — real-time enterprise data, unified
            <ArrowUpRight className="size-3.5" />
          </a>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 w-full border-b border-slate-100 bg-white/90 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? 'shadow-[0_8px_24px_-12px_rgba(11,19,42,0.18)]' : ''
        }`}
      >
        <nav className="container-x flex h-[72px] items-center justify-between gap-4" aria-label="Main">
          <a href="/" className="shrink-0" aria-label="Aagati home">
            <img src={site.logo} alt="AagatiServe Pvt Ltd logo" className="h-9 w-auto sm:h-10" width="150" height="40" />
          </a>

          <ul className="hidden items-center gap-1 xl:flex">
            {nav.map((item) =>
              item.children ? (
                <li key={item.label} className="group relative">
                  <a
                    href={item.href}
                    className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold text-slate-800 transition hover:text-brand-600"
                  >
                    {item.label}
                    <ChevronDown className="size-4 transition group-hover:rotate-180" />
                  </a>
                  <div className="invisible absolute left-0 top-full w-[620px] translate-y-2 pt-3 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="grid grid-cols-2 gap-1 rounded-2xl border border-slate-100 bg-white p-3 shadow-[0_24px_48px_-16px_rgba(11,19,42,0.25)]">
                      {item.children.map((c) => (
                        <a key={c.label} href={c.href} className="rounded-xl px-3 py-2.5 transition hover:bg-brand-50">
                          <span className="block text-sm font-bold text-navy-950">{c.label}</span>
                          {c.desc && <span className="block text-xs text-slate-500">{c.desc}</span>}
                        </a>
                      ))}
                    </div>
                  </div>
                </li>
              ) : (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="rounded-full px-3 py-2 text-sm font-semibold text-slate-800 transition hover:text-brand-600"
                  >
                    {item.label}
                  </a>
                </li>
              ),
            )}
          </ul>

          <div className="flex items-center gap-2">
            <a href={contactHref} className="btn-primary hidden sm:inline-flex">
              Contact Us
            </a>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-full text-navy-950 transition hover:bg-slate-100 xl:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          className={`fixed inset-x-0 bottom-0 top-[72px] overflow-y-auto bg-white transition-all duration-300 xl:hidden ${
            open ? 'visible opacity-100' : 'invisible opacity-0'
          }`}
        >
          <ul className="container-x flex flex-col gap-1 py-6">
            {nav.map((item) =>
              item.children ? (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() => setMobileSub((s) => !s)}
                    className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-base font-bold text-navy-950"
                    aria-expanded={mobileSub}
                  >
                    {item.label}
                    <ChevronDown className={`size-5 transition ${mobileSub ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileSub && (
                    <ul className="ml-3 border-l border-slate-100 pl-3">
                      {item.children.map((c) => (
                        <li key={c.label}>
                          <a href={c.href} className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:text-brand-600">
                            {c.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 text-base font-bold text-navy-950 hover:bg-brand-50"
                  >
                    {item.label}
                  </a>
                </li>
              ),
            )}
            <li className="mt-4">
              <a href={contactHref} className="btn-primary w-full">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
