import { useEffect, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { BOOKING_URL } from "../constants";

export const TRUSTPILOT_URL = "https://uk.trustpilot.com/review/ajyle.ai";
// Discovery Workshop entry price. Provisional until the PACE commercial layer is set.
export const WORKSHOP_PRICE = "From £750";

export const wrap = "mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-12";
export const section = "py-14 lg:py-[72px]";

export function Page({ title, description, children }: { title: string; description: string; children: ReactNode }) {
  useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
  }, [title, description]);
  return <main className="bg-white pt-[72px] font-sans-brand text-[17px] leading-[1.7] text-navy antialiased">{children}</main>;
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`font-display text-sm font-semibold tracking-[.02em] ${light ? "text-[#C9D3E6]" : "text-slate"}`}>
      {children}
    </p>
  );
}

export function H2({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <h2 id={id} className={`mt-3 max-w-[22ch] font-display text-[clamp(30px,3.6vw,46px)] font-semibold leading-[1.12] tracking-[-0.025em] ${className}`}>
      {children}
    </h2>
  );
}

export function Lead({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`mt-4 max-w-[46ch] text-xl leading-[1.55] text-slate ${className}`}>{children}</p>;
}

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-[3px]">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export function BookButton({ children = "Let's talk" }: { children?: ReactNode }) {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded bg-green px-7 font-display text-base font-semibold text-navy no-underline transition-colors hover:bg-green-dark focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-navy"
    >
      {children}
      <Arrow />
    </a>
  );
}

export function TextLink({ to, children, external = false }: { to: string; children: ReactNode; external?: boolean }) {
  const cls =
    "inline-block border-b-2 border-teal pt-[13px] pb-1 font-display text-[15px] font-semibold leading-[1.7] text-navy no-underline transition-colors hover:border-navy focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-navy";
  if (external || to.startsWith("http")) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={cls}>
      {children}
    </Link>
  );
}

export function Tick({ size = "md" }: { size?: "sm" | "md" }) {
  const box = size === "sm" ? "h-5 w-5" : "h-[22px] w-[22px]";
  return (
    <span className={`inline-grid ${box} flex-none place-items-center rounded-full bg-navy`} aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="h-[11px] w-[11px]">
        <path d="M5 12l5 5 9-10" />
      </svg>
    </span>
  );
}

export function Stars() {
  return (
    <span className="tracking-[2px] text-[#00B67A]" aria-label="5 out of 5 stars">
      ★★★★★
    </span>
  );
}
