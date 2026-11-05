import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { BOOKING_URL } from "../constants";
import { TRUSTPILOT_URL, wrap } from "./ui";

const LOGO_URL = "/logo.svg";

const links = [
  { name: "How PACE Works", to: "/pace" },
  { name: "AI Training for Teams", to: "/training" },
  { name: "About", to: "/about" },
  { name: "Contact Us", to: "/lets-talk" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);

  const linkCls = ({ isActive }: { isActive: boolean }) =>
    `inline-flex min-h-[44px] items-center font-display text-[15px] font-medium no-underline transition-colors ${
      isActive ? "text-navy underline decoration-teal decoration-2 underline-offset-[6px]" : "text-navy hover:text-slate"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-white/95 backdrop-blur font-sans-brand">
      <div className={`${wrap} flex h-[72px] items-center justify-between`}>
        <Link to="/" className="flex h-full min-h-[44px] items-center overflow-hidden" aria-label="Ajyle AI home">
          <img src={LOGO_URL} alt="Ajyle AI Logo" className="h-10 w-auto object-contain" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex xl:gap-8" aria-label="Main">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"} className={linkCls}>
              {l.name}
            </NavLink>
          ))}
          <a
            href={TRUSTPILOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-[44px] items-center gap-2 font-sans-brand text-sm font-semibold text-slate no-underline hover:text-navy xl:inline-flex"
          >
            <span aria-hidden="true" className="inline-grid h-4 w-4 place-items-center bg-[#00B67A] text-[11px] text-white">★</span>
            Reviews on Trustpilot
          </a>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center rounded bg-green px-5 font-display text-[15px] font-semibold text-navy no-underline transition-colors hover:bg-green-dark"
          >
            Book a free call
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center text-navy lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-6 w-6" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-white lg:hidden">
          <div className={`${wrap} flex flex-col py-4`}>
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === "/"} className={linkCls}>
                {l.name}
              </NavLink>
            ))}
            <a href={TRUSTPILOT_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center font-display text-[15px] font-medium text-navy no-underline">
              Reviews on Trustpilot
            </a>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex min-h-[48px] items-center justify-center rounded bg-green font-display text-base font-semibold text-navy no-underline"
            >
              Book a free call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  const a = "inline-block py-1 text-navy no-underline hover:underline";
  return (
    <footer className="border-t border-line bg-white py-14 font-sans-brand text-[15px] text-slate">
      <div className={`${wrap} grid gap-10 md:grid-cols-[2fr_1fr_1fr]`}>
        <div>
          <Link to="/" aria-label="Ajyle AI home" className="inline-flex min-h-[44px] items-center">
            <img src={LOGO_URL} alt="Ajyle AI Logo" className="h-10 w-auto object-contain" />
          </Link>
          <p className="mt-4 max-w-[34ch]">Responsible AI for founder-led businesses. Based in the UK.</p>
        </div>
        <div>
          <h2 className="mb-2 font-display text-sm font-semibold text-navy">Explore</h2>
          <ul className="space-y-0.5">
            <li><Link className={a} to="/pace">How PACE Works</Link></li>
            <li><Link className={a} to="/about">About</Link></li>
            <li><Link className={a} to="/training">AI Training for Teams</Link></li>
            <li><Link className={a} to="/lets-talk">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="mb-2 font-display text-sm font-semibold text-navy">More</h2>
          <ul className="space-y-0.5">
            <li><Link className={a} to="/reclaimyourtime">See What Manual Work Costs You</Link></li>
            <li><a className={a} href="/academy/">Solopreneurs AI Academy</a></li>
            <li><a className={a} href={TRUSTPILOT_URL} target="_blank" rel="noopener noreferrer">Reviews on Trustpilot</a></li>
            <li><a className={a} href="https://www.linkedin.com/in/ade-shokoya/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a className={a} href="https://www.ajyle.ai/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy policy</a></li>
          </ul>
        </div>
      </div>
      <div className={`${wrap} mt-10`}>
        <p className="border-t border-line pt-5 text-sm">© 2026 Ajyle AI. All rights reserved.</p>
      </div>
    </footer>
  );
}

export { BOOKING_URL };
