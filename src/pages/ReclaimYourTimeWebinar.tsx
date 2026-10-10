import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

// Hidden Cost Audit.
// Same questions and calculations as /reclaimyourtime. No data is collected,
// stored or sent. The result is shown on screen only.

// ─── DATA (DO NOT MODIFY) ────────────────────────────────────────────────────

const TASKS = [
  { id: "research",    label: "Research and analysis",   description: "Searching online, reading reports, finding what you need" },
  { id: "content",     label: "Content creation",         description: "Writing posts, newsletters, articles, marketing copy" },
  { id: "proposals",   label: "Proposals and documents",  description: "Writing proposals, reports, anything client-facing" },
  { id: "emails",      label: "Email follow-ups",         description: "Chasing replies, writing follow-ups, keeping on top of threads" },
  { id: "admin",       label: "Admin and CRM",            description: "Updating records, scheduling emails, keeping the CRM tidy" },
  { id: "postmeeting", label: "Post-meeting work",        description: "Writing up notes, summarising calls, building action lists" },
];

const HOUR_OPTIONS = [
  { label: "0 hrs",    value: 0 },
  { label: "1–2 hrs",  value: 1.5 },
  { label: "3–5 hrs",  value: 4 },
  { label: "6–10 hrs", value: 8 },
  { label: "10+ hrs",  value: 12 },
];

const RATE_CHIPS = [50, 75, 100, 150, 200];
const WEBINAR_URL = "https://aiworkshop.ajyle.ai/";
const FONT_URL =
  "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Inter:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap";

// ─── TOKENS ──────────────────────────────────────────────────────────────────
// All text colours pass WCAG AA (4.5:1) on white and on the light panel.

const T1   = "#111111";  // headlines, strong labels
const T2   = "#2B2B2B";  // body copy
const T3   = "#444444";  // secondary / descriptions
const T4   = "#5A5A5A";  // muted (meta, small print)
const T5   = "#626262";  // faint (footer, "per week")

const TEAL     = "#006399";  // Ajyle teal deep, AA-safe on white
const RED      = "#E84855";  // annual cost figure (large text only)
const RED_TEXT = "#B3202E";  // small red labels (AA-safe)
const GRAD     = "linear-gradient(90deg, #006399 0%, #0084C4 100%)";

const CARD_BDR  = "rgba(0,0,0,0.12)";
const CARD_SHAD = "0 1px 4px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.04)";

// ─── CSS ─────────────────────────────────────────────────────────────────────

const PAGE_CSS = `
  .ryt-root *, .ryt-root *::before, .ryt-root *::after { box-sizing: border-box; }
  .ryt-root { -webkit-font-smoothing: antialiased; font-size: 16px; }
  .ryt-root h1, .ryt-root h2, .ryt-root p { margin: 0; }

  .ryt-sr {
    position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
    overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0;
  }

  input[type=number]::-webkit-outer-spin-button,
  input[type=number]::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
  input[type=number] { -moz-appearance: textfield; }

  .ryt-root :focus-visible {
    outline: 3px solid #006399 !important;
    outline-offset: 3px !important;
    border-radius: 6px;
  }
  .ryt-root h1:focus { outline: none !important; }
  .ryt-rate-input-wrap:focus-within {
    border-color: #006399 !important;
    box-shadow: 0 0 0 3px rgba(0,99,153,0.15) !important;
  }
  .ryt-rate-input-wrap input:focus-visible { outline: none !important; }

  .ryt-btn { transition: box-shadow 0.18s ease, transform 0.12s ease !important; }
  .ryt-btn:active:not(:disabled) { transform: scale(0.98) !important; }
  .ryt-btn:hover:not(:disabled)  { box-shadow: 0 12px 32px rgba(0,99,153,0.28) !important; }

  .ryt-ghost { transition: background 0.12s ease, border-color 0.12s ease; }
  .ryt-ghost:hover { background: rgba(0,99,153,0.06) !important; border-color: #006399 !important; }

  .ryt-hour-opt { transition: background 0.10s ease, border-color 0.10s ease; }
  .ryt-hour-opt:hover:not(.ryt-sel) {
    background: rgba(0,0,0,0.035) !important;
    border-color: rgba(0,0,0,0.22) !important;
  }
  .ryt-rate-chip { transition: background 0.10s ease, border-color 0.10s ease, color 0.10s ease; }
  .ryt-rate-chip:hover:not(.ryt-sel) {
    background: rgba(0,0,0,0.05) !important;
    border-color: rgba(0,0,0,0.25) !important;
  }

  @keyframes ryt-fade-up {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .ryt-hook-1 { animation: ryt-fade-up 0.45s 0.06s both ease-out; }
  .ryt-hook-2 { animation: ryt-fade-up 0.45s 0.18s both ease-out; }
  .ryt-hook-3 { animation: ryt-fade-up 0.45s 0.30s both ease-out; }
  .ryt-hook-4 { animation: ryt-fade-up 0.45s 0.42s both ease-out; }

  @media (prefers-reduced-motion: reduce) {
    .ryt-root *, .ryt-root *::before, .ryt-root *::after {
      animation: none !important;
      transition: none !important;
    }
  }
`;

// ─── HEAD (client side, mirrors the static tags written at build time) ───────

const PAGE_TITLE = "Hidden Cost Audit | What Is Manual Work Costing You?";

// ─── SUB-COMPONENTS ──────────────────────────────────────────────────────────

function Btn({
  onClick, children, disabled = false, wide = false, style: s = {},
}: {
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  wide?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <button type="button" className="ryt-btn" onClick={onClick} disabled={disabled} style={{
      background: GRAD, color: "#fff", border: "none",
      padding: wide ? "18px 48px" : "17px 32px",
      minHeight: 56,
      borderRadius: 10, fontSize: 19, fontWeight: 700,
      fontFamily: "'Manrope', sans-serif",
      boxShadow: "0 4px 20px rgba(0,99,153,0.22)",
      cursor: disabled ? "default" : "pointer",
      width: wide ? "auto" : "100%",
      maxWidth: wide ? "none" : 360,
      letterSpacing: "0.2px", lineHeight: 1.2,
      display: "block", textAlign: "center",
      opacity: disabled ? 0.45 : 1, ...s,
    }}>{children}</button>
  );
}

function BackBtn({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Back to the previous question"
      className="ryt-ghost"
      style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "none", border: "1px solid rgba(0,0,0,0.25)", borderRadius: 8, color: T2, fontSize: 16, fontFamily: "'Inter', sans-serif", fontWeight: 500, cursor: "pointer", padding: "10px 16px", minHeight: 44, marginBottom: 24 }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
        <path d="M19 12H5M12 5l-7 7 7 7"/>
      </svg>
      Back
    </button>
  );
}

function StepLabel({ num, total }: { num: number; total: number }) {
  const pct = Math.round(((num - 1) / (total - 1)) * 100);
  return (
    <div style={{ fontSize: 13, fontFamily: "'Space Mono', monospace", textTransform: "uppercase", letterSpacing: "0.12em", color: T4, marginBottom: 20, display: "flex", alignItems: "center", gap: 12 }}>
      <span aria-label={`Question ${num} of ${total}`}>{num} / {total}</span>
      <div aria-hidden="true" style={{ flex: 1, height: 3, background: "rgba(0,0,0,0.10)", borderRadius: 2 }}>
        <div style={{ height: "100%", width: `${pct}%`, background: GRAD, borderRadius: 2, transition: "width 0.3s ease" }} />
      </div>
    </div>
  );
}

function ResultCard({
  label, value, suffix, tier,
}: {
  label: string; value: string; suffix?: string; tier: 1 | 2 | 3;
}) {
  const cfg = {
    1: { bg: "#fff",                 bdr: CARD_BDR,               lbl: T4,       val: TEAL, sz: "clamp(22px,6.2vw,32px)",  pad: "20px 14px", glow: CARD_SHAD                          },
    2: { bg: "#fff",                 bdr: CARD_BDR,               lbl: T4,       val: TEAL, sz: "clamp(22px,6.2vw,34px)",  pad: "20px 14px", glow: CARD_SHAD                          },
    3: { bg: "rgba(232,72,85,0.05)", bdr: "rgba(232,72,85,0.30)", lbl: RED_TEXT, val: RED,  sz: "clamp(44px,12vw,64px)",   pad: "28px 20px", glow: "0 12px 48px rgba(232,72,85,0.14)" },
  } as const;
  const c = cfg[tier];
  // Long figures (very high rates) step down so the number never breaks mid-digit.
  const bigSize = value.length <= 8 ? "clamp(44px,12vw,64px)" : value.length <= 10 ? "clamp(32px,9vw,52px)" : "clamp(24px,6.5vw,40px)";
  const size = tier === 3 ? bigSize : c.sz;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.36, delay: tier * 0.13, ease: [0.25, 0, 0, 1] }}
      style={{ background: c.bg, border: `1px solid ${c.bdr}`, borderRadius: 14, padding: c.pad, boxShadow: c.glow, height: "100%" }}
    >
      <div style={{ fontSize: 12, fontFamily: "'Space Mono', monospace", textTransform: "uppercase", letterSpacing: "0.12em", color: c.lbl, marginBottom: tier === 3 ? 14 : 10, lineHeight: 1.4 }}>
        {label}
      </div>
      <div style={{ fontSize: size, fontWeight: 700, fontFamily: "'Space Mono', monospace", color: c.val, letterSpacing: tier === 3 ? "-0.025em" : "0", lineHeight: 1.1, overflowWrap: "anywhere" }}>
        {value}
        {suffix && <span style={{ fontSize: 15, color: T4, marginLeft: 8, fontWeight: 400, letterSpacing: 0 }}>{suffix}</span>}
      </div>
    </motion.div>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export default function ReclaimYourTimeWebinar() {

  // ── State ──────────────────────────────────────────────────────────────────
  const [screen, setScreen]                 = useState(0);
  const [hourlyRate, setHourlyRate]         = useState(75);
  const [rateInput, setRateInput]           = useState("75");
  const [showCustomRate, setShowCustomRate] = useState(false);
  const [taskHours, setTaskHours]           = useState<Record<string, number>>({});
  const [fade, setFade]                     = useState(true);
  // Registered view can be opened straight from the email: ?registered=yes
  const [registered, setRegistered] = useState<boolean>(() => {
    try { return new URLSearchParams(window.location.search).get("registered") === "yes"; }
    catch { return false; }
  });

  const contentRef = useRef<HTMLDivElement>(null);

  // ── Calculations (unchanged) ───────────────────────────────────────────────
  // Single source of truth: weekly hours x 52 weeks x hourly rate
  const totalWeekly:  number = (Object.values(taskHours) as number[]).reduce((s, v) => s + v, 0);
  const annualCost:   number = totalWeekly * 52 * hourlyRate;
  const totalMonthly: number = annualCost / 12 / hourlyRate;  // hours/month for display

  const reducedMotion = () => {
    try { return window.matchMedia("(prefers-reduced-motion: reduce)").matches; }
    catch { return false; }
  };

  const transition = (next: number) => {
    if (reducedMotion()) { setScreen(next); return; }
    setFade(false);
    setTimeout(() => { setScreen(next); setFade(true); }, 200);
  };

  const progress    = screen === 0 ? 0 : Math.round((screen / 8) * 100);
  const taskIdx     = screen - 2;
  const currentTask = TASKS[taskIdx];
  const canProceed  = currentTask ? taskHours[currentTask.id] !== undefined : true;

  // Page title and fonts (static tags are also written at build time)
  useEffect(() => {
    document.title = PAGE_TITLE;
    if (!document.querySelector('link[data-ryt-font]')) {
      const l = document.createElement("link");
      l.rel = "stylesheet"; l.href = FONT_URL; l.setAttribute("data-ryt-font", "1");
      document.head.appendChild(l);
    }
  }, []);

  // Move focus to the new screen heading so screen reader and keyboard users
  // land at the top of each step.
  useEffect(() => {
    if (screen === 0) return;
    window.scrollTo(0, 0);
    const h = contentRef.current?.querySelector("h1");
    if (h instanceof HTMLElement) h.focus({ preventScroll: true });
  }, [screen]);

  const h1Base: React.CSSProperties = { fontFamily: "'Manrope', sans-serif", color: T1 };

  // ── RENDER ─────────────────────────────────────────────────────────────────
  return (
    <main className="ryt-root" style={{ minHeight: "100vh", background: "#fff", color: T1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "48px 20px 40px", position: "relative", fontFamily: "'Inter', sans-serif" }}>
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />

      {/* Progress bar */}
      {screen > 0 && screen < 8 && (
        <div
          role="progressbar"
          aria-label="Audit progress"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
          style={{ position: "fixed", top: 0, left: 0, right: 0, height: 4, background: "rgba(0,0,0,0.08)", zIndex: 200 }}
        >
          <div style={{ height: "100%", width: `${progress}%`, background: GRAD, transition: "width 0.4s ease" }} />
        </div>
      )}

      {/* Content */}
      <div ref={contentRef} style={{ maxWidth: 480, width: "100%", position: "relative", zIndex: 1, opacity: fade ? 1 : 0, transform: fade ? "translateY(0)" : "translateY(10px)", transition: "opacity 0.2s ease, transform 0.2s ease" }}>

        {screen > 0 && screen < 8 && <BackBtn onClick={() => transition(screen - 1)} />}

        {/* ── HOOK ──────────────────────────────────────────────────────── */}
        {screen === 0 && (
          <div style={{ textAlign: "center" }}>
            <div className="ryt-hook-1" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 32 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
                <circle cx="12" cy="12" r="9.5" stroke="url(#ryt-rg0)" strokeWidth="2.5"/>
                <circle cx="12" cy="12" r="3" fill="url(#ryt-rg0)"/>
                <defs>
                  <linearGradient id="ryt-rg0" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#00A6FB"/>
                    <stop offset="100%" stopColor="#00C853"/>
                  </linearGradient>
                </defs>
              </svg>
              <span style={{ fontSize: 13, fontFamily: "'Space Mono', monospace", textTransform: "uppercase", letterSpacing: "0.14em", color: TEAL, fontWeight: 700 }}>Ajyle AI · Hidden Cost Audit</span>
            </div>

            <h1 tabIndex={-1} className="ryt-hook-2" style={{ ...h1Base, fontSize: "clamp(32px, 8.5vw, 46px)", fontWeight: 800, lineHeight: 1.14, letterSpacing: "-0.025em", margin: "0 0 20px", textWrap: "balance" as React.CSSProperties["textWrap"] }}>
              How much is manual work costing your business?
            </h1>

            <p className="ryt-hook-3" style={{ fontSize: 20, lineHeight: 1.55, color: T3, margin: "0 auto 40px", maxWidth: 420, textWrap: "balance" as React.CSSProperties["textWrap"] }}>
              Six questions. Ninety seconds. One number.
            </p>

            <div className="ryt-hook-4" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
              <Btn onClick={() => transition(1)} wide>Calculate my number</Btn>
              <p style={{ fontSize: 14, color: T4, lineHeight: 1.5 }}>Your answers stay on this page. Nothing is saved.</p>
            </div>
          </div>
        )}

        {/* ── RATE ──────────────────────────────────────────────────────── */}
        {screen === 1 && (
          <div>
            <StepLabel num={1} total={7} />
            <h1 tabIndex={-1} style={{ ...h1Base, fontSize: 28, fontWeight: 700, margin: "0 0 10px", letterSpacing: "-0.016em", lineHeight: 1.2 }}>
              What's your time worth?
            </h1>
            <p style={{ fontSize: 17, color: T3, margin: "0 0 24px", lineHeight: 1.55 }}>
              Pick your hourly rate below, or type your own.
            </p>

            <div role="group" aria-label="Hourly rate" style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 20 }}>
              {RATE_CHIPS.map((v) => {
                const sel = hourlyRate === v && !showCustomRate;
                return (
                  <button type="button" key={v} aria-pressed={sel} className={`ryt-rate-chip${sel ? " ryt-sel" : ""}`}
                    onClick={() => { setHourlyRate(v); setRateInput(String(v)); setShowCustomRate(false); }}
                    style={{ background: sel ? "rgba(0,99,153,0.09)" : "rgba(0,0,0,0.03)", border: `${sel ? 2 : 1}px solid ${sel ? TEAL : "rgba(0,0,0,0.22)"}`, color: sel ? TEAL : T2, borderRadius: 10, padding: "12px 18px", minHeight: 48, minWidth: 48, fontSize: 17, fontFamily: "'Manrope', sans-serif", fontWeight: sel ? 700 : 500, cursor: "pointer" }}
                  >£{v}/hr</button>
                );
              })}
              <button type="button" aria-pressed={showCustomRate} className={`ryt-rate-chip${showCustomRate ? " ryt-sel" : ""}`}
                onClick={() => { setShowCustomRate(true); setRateInput(""); }}
                style={{ background: showCustomRate ? "rgba(0,99,153,0.09)" : "rgba(0,0,0,0.03)", border: `${showCustomRate ? 2 : 1}px solid ${showCustomRate ? TEAL : "rgba(0,0,0,0.22)"}`, color: showCustomRate ? TEAL : T2, borderRadius: 10, padding: "12px 18px", minHeight: 48, fontSize: 17, fontFamily: "'Manrope', sans-serif", fontWeight: showCustomRate ? 700 : 500, cursor: "pointer" }}
              >Custom</button>
            </div>

            {showCustomRate && (
              <div className="ryt-rate-input-wrap" style={{ display: "flex", alignItems: "center", gap: 10, background: "rgba(0,99,153,0.04)", border: "1px solid rgba(0,99,153,0.35)", borderRadius: 12, padding: "12px 18px", marginBottom: 8 }}>
                <span aria-hidden="true" style={{ fontSize: 28, fontWeight: 700, color: TEAL, fontFamily: "'Space Mono', monospace" }}>£</span>
                <input type="number" inputMode="numeric" min={1} value={rateInput} placeholder="0" autoFocus
                  aria-label="Your hourly rate in pounds"
                  onChange={(e) => { setRateInput(e.target.value); const v = parseInt(e.target.value); if (!isNaN(v) && v > 0) setHourlyRate(v); }}
                  style={{ background: "none", border: "none", outline: "none", fontSize: 28, fontWeight: 700, color: T1, fontFamily: "'Space Mono', monospace", flex: 1, minWidth: 0, minHeight: 44 }}
                />
                <span aria-hidden="true" style={{ fontSize: 16, color: T4, whiteSpace: "nowrap" }}>/hour</span>
              </div>
            )}

            <p style={{ fontSize: 16, color: T4, margin: "16px 0 32px", lineHeight: 1.55 }}>Don't overthink this. A rough number works.</p>
            <Btn onClick={() => transition(2)}>Next →</Btn>
          </div>
        )}

        {/* ── TASKS ─────────────────────────────────────────────────────── */}
        {screen >= 2 && screen <= 7 && currentTask && (
          <div>
            <StepLabel num={screen} total={7} />
            <h1 tabIndex={-1} style={{ ...h1Base, fontSize: 28, fontWeight: 700, margin: "0 0 8px", letterSpacing: "-0.014em", lineHeight: 1.2 }}>
              {currentTask.label}
            </h1>
            <p style={{ fontSize: 17, color: T3, margin: "0 0 24px", lineHeight: 1.55 }}>
              {currentTask.description}
            </p>
            <p id="ryt-hours-label" style={{ fontSize: 13, fontFamily: "'Space Mono', monospace", textTransform: "uppercase", letterSpacing: "0.12em", color: T4, margin: "0 0 12px", fontWeight: 700 }}>
              Hours per week
            </p>

            <div role="group" aria-labelledby="ryt-hours-label" style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 32 }}>
              {HOUR_OPTIONS.map((opt) => {
                const sel = taskHours[currentTask.id] === opt.value;
                return (
                  <button type="button" key={opt.value} aria-pressed={sel} className={`ryt-hour-opt${sel ? " ryt-sel" : ""}`}
                    onClick={() => setTaskHours((p) => ({ ...p, [currentTask.id]: opt.value }))}
                    style={{
                      background:   sel ? "rgba(0,99,153,0.09)" : "rgba(0,0,0,0.02)",
                      borderTop:    `1px solid ${sel ? "rgba(0,99,153,0.45)" : "rgba(0,0,0,0.18)"}`,
                      borderRight:  `1px solid ${sel ? "rgba(0,99,153,0.45)" : "rgba(0,0,0,0.18)"}`,
                      borderBottom: `1px solid ${sel ? "rgba(0,99,153,0.45)" : "rgba(0,0,0,0.18)"}`,
                      borderLeft:   `4px solid ${sel ? TEAL : "transparent"}`,
                      color:        T1,
                      borderRadius: 10, padding: "16px 20px", minHeight: 58,
                      fontSize: 18, fontFamily: "'Inter', sans-serif",
                      fontWeight: sel ? 600 : 400,
                      textAlign: "left" as const,
                      display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12,
                      cursor: "pointer",
                    }}
                  >
                    <span style={{ whiteSpace: "nowrap" }}>{opt.label}</span>
                    <span style={{ fontSize: 12, fontFamily: "'Space Mono', monospace", letterSpacing: "0.06em", color: T5, whiteSpace: "nowrap" }}>per week</span>
                  </button>
                );
              })}
            </div>
            <Btn onClick={() => transition(screen + 1)} disabled={!canProceed}>
              {screen === 7 ? "Show me the number" : "Next →"}
            </Btn>
          </div>
        )}

        {/* ── RESULTS ───────────────────────────────────────────────────── */}
        {screen === 8 && (
          <div style={{ textAlign: "center" }}>
            <div style={{ display: "inline-flex", alignItems: "center", background: "rgba(232,72,85,0.07)", border: "1px solid rgba(232,72,85,0.30)", borderRadius: 999, padding: "8px 18px", marginBottom: 22 }}>
              <span style={{ fontSize: 13, fontFamily: "'Space Mono', monospace", textTransform: "uppercase", letterSpacing: "0.14em", color: RED_TEXT, fontWeight: 700 }}>Your number</span>
            </div>

            <h1 tabIndex={-1} style={{ ...h1Base, fontSize: 20, fontWeight: 600, lineHeight: 1.5, color: T2, margin: "0 0 6px", fontFamily: "'Inter', sans-serif" }}>
              You already knew some of this. Now you can see it.
            </h1>
            <p style={{ fontSize: 18, color: T3, margin: "0 0 28px", lineHeight: 1.55 }}>This is what manual work costs your business every year.</p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 10, marginBottom: 8 }}>
              <ResultCard label="Hours / week"  value={totalWeekly.toFixed(1)}  suffix="hrs" tier={1} />
              <ResultCard label="Hours / month" value={totalMonthly.toFixed(1)} suffix="hrs" tier={2} />
            </div>
            <p style={{ fontSize: 13, fontFamily: "'Space Mono', monospace", color: T4, textAlign: "right", margin: "0 0 12px", letterSpacing: "0.02em" }}>
              {totalWeekly.toFixed(1)} hrs/week × 52 ÷ 12
            </p>
            <ResultCard label="Annual cost to your business" value={`£${annualCost.toLocaleString("en-GB", { maximumFractionDigits: 0 })}`} tier={3} />

            <section aria-labelledby="ryt-webinar-h" style={{ background: "#F4F6FA", border: "1px solid rgba(0,0,0,0.10)", borderRadius: 14, padding: "24px 20px 24px", margin: "28px 0 0", textAlign: "left" }}>
              <p style={{ fontSize: 13, fontFamily: "'Space Mono', monospace", textTransform: "uppercase", letterSpacing: "0.1em", color: TEAL, marginBottom: 12, fontWeight: 700, lineHeight: 1.4 }}>
                Wednesday 21 October, 7.30pm BST
              </p>

              {!registered ? (
                <>
                  <h2 id="ryt-webinar-h" style={{ fontSize: 26, fontFamily: "'Manrope', sans-serif", fontWeight: 800, color: T1, margin: "0 0 14px", lineHeight: 1.2, letterSpacing: "-0.02em" }}>
                    Let's start getting that back.
                  </h2>
                  <p style={{ fontSize: 17, color: T2, margin: "0 0 12px", lineHeight: 1.6 }}>
                    Claude for Business Owners. One hour, live, free.
                  </p>
                  <p style={{ fontSize: 17, color: T2, margin: "0 0 12px", lineHeight: 1.6 }}>
                    I'll show an AI agent clearing an inbox. And a call turned into a proposal in about five minutes.
                  </p>
                  <p style={{ fontSize: 17, color: T2, margin: "0 0 22px", lineHeight: 1.6 }}>
                    Join live and you'll get a free AI Workflow Map. It shows the first three jobs to hand to AI in your business.
                  </p>
                  <a
                    href={WEBINAR_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ryt-btn"
                    style={{ background: GRAD, color: "#fff", padding: "17px 24px", minHeight: 56, borderRadius: 10, fontSize: 19, fontWeight: 700, fontFamily: "'Manrope', sans-serif", boxShadow: "0 4px 20px rgba(0,99,153,0.22)", letterSpacing: "0.2px", lineHeight: 1.2, display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", textDecoration: "none" }}
                  >
                    Reserve my free spot<span className="ryt-sr"> (opens in a new tab)</span>
                  </a>
                  <p style={{ fontSize: 15, color: T4, margin: "12px 0 0", textAlign: "center", lineHeight: 1.55 }}>
                    Free to attend. No card needed. Opens in a new tab, so your number stays here.
                  </p>
                  <button
                    type="button"
                    onClick={() => setRegistered(true)}
                    className="ryt-ghost"
                    style={{ display: "block", width: "100%", marginTop: 20, background: "none", border: "1px solid rgba(0,99,153,0.55)", borderRadius: 10, padding: "12px 16px", minHeight: 48, color: TEAL, fontWeight: 600, fontSize: 16, fontFamily: "'Inter', sans-serif", cursor: "pointer" }}
                  >
                    I'm already registered
                  </button>
                </>
              ) : (
                <>
                  <h2 id="ryt-webinar-h" style={{ fontSize: 26, fontFamily: "'Manrope', sans-serif", fontWeight: 800, color: T1, margin: "0 0 14px", lineHeight: 1.2, letterSpacing: "-0.02em" }}>
                    See you on Wednesday 21 October.
                  </h2>
                  <p style={{ fontSize: 17, color: T2, margin: "0 0 12px", lineHeight: 1.6 }}>
                    Bring this number with you. Write it down or screenshot it.
                  </p>
                  <p style={{ fontSize: 17, color: T2, margin: "0 0 12px", lineHeight: 1.6 }}>
                    Join live and you'll get a free AI Workflow Map. It shows the first three jobs to hand to AI in your business.
                  </p>
                  <p style={{ fontSize: 15, color: T4, margin: 0, lineHeight: 1.55 }}>
                    Live online, 7.30pm to 8.30pm BST.
                  </p>
                  <button
                    type="button"
                    onClick={() => setRegistered(false)}
                    className="ryt-ghost"
                    style={{ display: "block", width: "100%", marginTop: 20, background: "none", border: "1px solid rgba(0,99,153,0.55)", borderRadius: 10, padding: "12px 16px", minHeight: 48, color: TEAL, fontWeight: 600, fontSize: 16, fontFamily: "'Inter', sans-serif", cursor: "pointer" }}
                  >
                    I haven't registered yet
                  </button>
                </>
              )}
            </section>
            <p style={{ fontSize: 14, color: T4, margin: "16px 0 0", lineHeight: 1.6 }}>
              Your number is an estimate, built from the ranges you picked. This page doesn't save your answers.
            </p>
          </div>
        )}

      </div>

      {/* Footer */}
      <p style={{ marginTop: 36, textAlign: "center", fontSize: 13, color: T5, fontFamily: "'Space Mono', monospace", letterSpacing: "0.04em" }}>
        ajyle.ai/hidden-cost
      </p>
    </main>
  );
}
