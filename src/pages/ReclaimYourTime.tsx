import React, { useState } from "react";
import { motion } from "motion/react";

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

const MC_URL = "https://neesee.us21.list-manage.com/subscribe/post?u=388d2c1b2280a11391c12d1a2&id=588e741926&f_id=00578de6f0";
const MC_U   = "388d2c1b2280a11391c12d1a2";
const MC_ID  = "588e741926";

// taskTransitions kept — not rendered (progress bar handles momentum)
const taskTransitions = [
  "Right. Next one.",
  "Two down. Keep going.",
  "Halfway. Four more.",
  "Nearly there. Two left.",
  "Last one. Then you'll see your number.",
];
void taskTransitions;

// ─── TOKENS ──────────────────────────────────────────────────────────────────

// Text hierarchy — black-based for clean white background
const T1   = "#111111";  // headlines, strong labels
const T2   = "#333333";  // body copy
const T3   = "#555555";  // secondary / descriptions
const T4   = "#777777";  // muted (step counter, meta)
const T5   = "#999999";  // faint (footer, disclaimers, "per week")

const TEAL = "#006399";  // Ajyle teal deep — AA-safe on white
const RED  = "#E84855";  // annual cost
const GRAD = "linear-gradient(90deg, #006399 0%, #00A6FB 100%)";

const CARD_BDR  = "rgba(0,0,0,0.09)";
const CARD_SHAD = "0 1px 4px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.04)";

// ─── INJECTED CSS ─────────────────────────────────────────────────────────────

const PAGE_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Inter:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap');

  .ryt-root *, .ryt-root *::before, .ryt-root *::after { box-sizing: border-box; }
  .ryt-root { -webkit-font-smoothing: antialiased; }

  input[type=number]::-webkit-outer-spin-button,
  input[type=number]::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
  input[type=number] { -moz-appearance: textfield; }
  .ryt-root input::placeholder { color: #AAAAAA; }

  .ryt-input:focus {
    border-color: #006399 !important;
    box-shadow: 0 0 0 3px rgba(0,99,153,0.09) !important;
    outline: none;
  }
  .ryt-input:hover:not(:focus) { border-color: #BBBBBB !important; }

  .ryt-btn { transition: box-shadow 0.18s ease, transform 0.12s ease !important; }
  .ryt-btn:active:not(:disabled) { transform: scale(0.97) !important; }
  .ryt-btn:hover:not(:disabled)  { box-shadow: 0 12px 32px rgba(0,99,153,0.28) !important; }

  .ryt-hour-opt { transition: background 0.10s ease, border-color 0.10s ease; }
  .ryt-hour-opt:hover:not(.ryt-sel) {
    background: rgba(0,0,0,0.025) !important;
    border-color: rgba(0,0,0,0.14) !important;
  }
  .ryt-rate-chip { transition: background 0.10s ease, border-color 0.10s ease, color 0.10s ease; }
  .ryt-rate-chip:hover:not(.ryt-sel) {
    background: rgba(0,0,0,0.04) !important;
    border-color: rgba(0,0,0,0.18) !important;
  }

  @keyframes ryt-check-bounce {
    0%   { opacity: 0; transform: scale(0.4); }
    70%  { transform: scale(1.12); }
    100% { opacity: 1; transform: scale(1); }
  }
  .ryt-check-anim { animation: ryt-check-bounce 0.46s 0.18s both cubic-bezier(0.34, 1.56, 0.64, 1); }

  @keyframes ryt-fade-up {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .ryt-hook-1 { animation: ryt-fade-up 0.45s 0.06s both ease-out; }
  .ryt-hook-2 { animation: ryt-fade-up 0.45s 0.18s both ease-out; }
  .ryt-hook-3 { animation: ryt-fade-up 0.45s 0.30s both ease-out; }
  .ryt-hook-4 { animation: ryt-fade-up 0.45s 0.42s both ease-out; }
`;

// ─── SUB-COMPONENTS ───────────────────────────────────────────────────────────

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
    <button className="ryt-btn" onClick={onClick} disabled={disabled} style={{
      background: GRAD, color: "#fff", border: "none",
      padding: wide ? "16px 48px" : "15px 32px",
      borderRadius: 10, fontSize: 16, fontWeight: 700,
      fontFamily: "'Manrope', sans-serif",
      boxShadow: "0 4px 20px rgba(0,99,153,0.22)",
      cursor: disabled ? "default" : "pointer",
      width: wide ? "auto" : "100%",
      maxWidth: wide ? "none" : 360,
      letterSpacing: "0.2px", lineHeight: 1,
      display: "block", textAlign: "center",
      opacity: disabled ? 0.32 : 1, ...s,
    }}>{children}</button>
  );
}

function StepLabel({ num, total }: { num: number; total: number }) {
  const pct = Math.round(((num - 1) / (total - 1)) * 100);
  return (
    <div style={{ fontSize: 10, fontFamily: "'Space Mono', monospace", textTransform: "uppercase", letterSpacing: "0.16em", color: T4, marginBottom: 22, display: "flex", alignItems: "center", gap: 10 }}>
      <span>{num} / {total}</span>
      <div style={{ flex: 1, height: 2, background: "rgba(0,0,0,0.08)", borderRadius: 1 }}>
        <div style={{ height: "100%", width: `${pct}%`, background: GRAD, borderRadius: 1, transition: "width 0.3s ease" }} />
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
    1: { bg: "#fff",                 bdr: CARD_BDR,               lbl: T4,                        val: TEAL, sz: "clamp(24px,5vw,32px)",    pad: "20px 22px", glow: CARD_SHAD                          },
    2: { bg: "#fff",                 bdr: CARD_BDR,               lbl: T4,                        val: TEAL, sz: "clamp(26px,5.5vw,36px)",  pad: "22px 22px", glow: CARD_SHAD                          },
    3: { bg: "rgba(232,72,85,0.05)", bdr: "rgba(232,72,85,0.20)", lbl: "rgba(232,72,85,0.60)",    val: RED,  sz: "clamp(44px,10.5vw,64px)", pad: "30px 24px", glow: "0 12px 48px rgba(232,72,85,0.14)" },
  } as const;
  const c = cfg[tier];

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.36, delay: tier * 0.13, ease: [0.25, 0, 0, 1] }}
      style={{ background: c.bg, border: `1px solid ${c.bdr}`, borderRadius: 14, padding: c.pad, boxShadow: c.glow, height: "100%" }}
    >
      <div style={{ fontSize: 10, fontFamily: "'Space Mono', monospace", textTransform: "uppercase", letterSpacing: "0.18em", color: c.lbl, marginBottom: tier === 3 ? 14 : 8 }}>
        {label}
      </div>
      <div style={{ fontSize: c.sz, fontWeight: 700, fontFamily: "'Space Mono', monospace", color: c.val, letterSpacing: tier === 3 ? "-0.025em" : "0", lineHeight: 1 }}>
        {value}
        {suffix && <span style={{ fontSize: 14, color: T4, marginLeft: 8, fontWeight: 400, letterSpacing: 0 }}>{suffix}</span>}
      </div>
    </motion.div>
  );
}

function BenefitLine({ text }: { text: string }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
      <div style={{ width: 18, height: 18, borderRadius: "50%", background: "rgba(0,99,153,0.08)", border: "1px solid rgba(0,99,153,0.20)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
        <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
          <path d="M2 6l3 3 5-5" stroke="#006399" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <p style={{ fontSize: 14, fontFamily: "'Inter', sans-serif", color: T2, margin: 0, lineHeight: 1.65 }}>{text}</p>
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function ReclaimYourTime() {

  // ── State (DO NOT MODIFY) ──────────────────────────────────────────────────
  const [screen, setScreen]                 = useState(0);
  const [hourlyRate, setHourlyRate]         = useState(75);
  const [rateInput, setRateInput]           = useState("75");
  const [showCustomRate, setShowCustomRate] = useState(false);
  const [taskHours, setTaskHours]           = useState<Record<string, number>>({});
  const [email, setEmail]                   = useState("");
  const [firstName, setFirstName]           = useState("");
  const [submitted, setSubmitted]           = useState(false);
  const [submitting, setSubmitting]         = useState(false);
  const [fade, setFade]                     = useState(true);

  // ── Calculations ───────────────────────────────────────────────────────────
  // Single source of truth: weekly hours × 52 weeks × hourly rate
  const totalWeekly:  number = (Object.values(taskHours) as number[]).reduce((s, v) => s + v, 0);
  const annualCost:   number = totalWeekly * 52 * hourlyRate;
  const totalMonthly: number = annualCost / 12 / hourlyRate;  // hours/month for display

  const transition = (next: number) => {
    setFade(false);
    setTimeout(() => { setScreen(next); setFade(true); }, 200);
  };

  const progress    = screen === 0 ? 0 : Math.round((screen / 9) * 100);
  const taskIdx     = screen - 2;
  const currentTask = TASKS[taskIdx];
  const canProceed  = currentTask ? taskHours[currentTask.id] !== undefined : true;

  // ── Mailchimp submission ───────────────────────────────────────────────────
  const handleSubmit = () => {
    if (!email || submitting) return;
    setSubmitting(true);

    const iframeName = "mc_iframe_" + Date.now();
    const iframe = document.createElement("iframe");
    iframe.name = iframeName;
    iframe.style.display = "none";
    document.body.appendChild(iframe);

    const form = document.createElement("form");
    form.method = "POST";
    form.action = MC_URL;
    form.target = iframeName;
    form.style.display = "none";

    const fields: Record<string, string> = {
      EMAIL: email,
      tags: "audit-lead-magnet",
      FNAME: firstName,
      [`b_${MC_U}_${MC_ID}`]: "",
    };

    Object.entries(fields).forEach(([name, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value;
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();

    setTimeout(() => {
      try { document.body.removeChild(form); } catch (_) {}
      try { document.body.removeChild(iframe); } catch (_) {}
      setSubmitted(true);
      setSubmitting(false);
    }, 1500);
  };

  const inputStyle: React.CSSProperties = {
    background: "#fff",
    border: "1px solid rgba(0,0,0,0.14)",
    borderRadius: 10, padding: "14px 18px",
    fontSize: 16, color: T1,
    fontFamily: "'Inter', sans-serif",
    width: "100%",
  };

  // ── RENDER ─────────────────────────────────────────────────────────────────
  return (
    <div className="ryt-root" style={{ minHeight: "100vh", background: "#fff", color: T1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "56px 20px 44px", position: "relative", fontFamily: "'Inter', sans-serif" }}>
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />

      {/* Progress bar */}
      {screen > 0 && screen < 9 && (
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: 3, background: "rgba(0,0,0,0.07)", zIndex: 200 }}>
          <div style={{ height: "100%", width: `${progress}%`, background: GRAD, transition: "width 0.4s ease" }} />
        </div>
      )}

      {/* Back */}
      {screen > 0 && screen < 9 && (
        <button
          onClick={() => transition(screen - 1)}
          style={{ position: "fixed", top: 16, left: 18, background: "none", border: "none", color: T4, fontSize: 13, cursor: "pointer", zIndex: 200, fontFamily: "'Inter', sans-serif", padding: "4px 0", display: "flex", alignItems: "center", gap: 4, transition: "color 0.15s" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = T2; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = T4; }}
        >← Back</button>
      )}

      {/* Content */}
      <div style={{ maxWidth: 468, width: "100%", position: "relative", zIndex: 1, opacity: fade ? 1 : 0, transform: fade ? "translateY(0)" : "translateY(10px)", transition: "opacity 0.2s ease, transform 0.2s ease" }}>

        {/* ── HOOK ──────────────────────────────────────────────────────── */}
        {screen === 0 && (
          <div style={{ textAlign: "center" }}>
            <div className="ryt-hook-1" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 36 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9.5" stroke="url(#ryt-rg0)" strokeWidth="2.5"/>
                <circle cx="12" cy="12" r="3" fill="url(#ryt-rg0)"/>
                <defs>
                  <linearGradient id="ryt-rg0" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#00A6FB"/>
                    <stop offset="100%" stopColor="#00C853"/>
                  </linearGradient>
                </defs>
              </svg>
              <span style={{ fontSize: 10, fontFamily: "'Space Mono', monospace", textTransform: "uppercase", letterSpacing: "0.22em", color: TEAL }}>Ajyle AI</span>
            </div>

            <h1 className="ryt-hook-2" style={{ fontSize: "clamp(28px, 7vw, 44px)", fontFamily: "'Manrope', sans-serif", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-0.025em", color: T1, margin: "0 0 20px", textWrap: "balance" as React.CSSProperties["textWrap"] }}>
              How much is manual work costing your business?
            </h1>

            <p className="ryt-hook-3" style={{ fontSize: 17, lineHeight: 1.65, color: T3, margin: "0 0 48px", maxWidth: 320, marginLeft: "auto", marginRight: "auto" }}>
              Six questions. Ninety seconds. One number.
            </p>

            <div className="ryt-hook-4" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
              <Btn onClick={() => transition(1)} wide>Calculate my number</Btn>
              <p style={{ fontSize: 12, color: T5, fontFamily: "'Inter', sans-serif" }}>No signup required to see your result</p>
            </div>
          </div>
        )}

        {/* ── RATE ──────────────────────────────────────────────────────── */}
        {screen === 1 && (
          <div>
            <StepLabel num={1} total={7} />
            <h2 style={{ fontSize: 24, fontFamily: "'Manrope', sans-serif", fontWeight: 700, color: T1, margin: "0 0 8px", letterSpacing: "-0.016em" }}>
              What's your time worth?
            </h2>
            <p style={{ fontSize: 14, color: T3, margin: "0 0 28px", lineHeight: 1.6 }}>
              Pick your hourly rate below, or type your own.
            </p>

            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {[50, 75, 100, 150, 200].map((v) => {
                const sel = hourlyRate === v && !showCustomRate;
                return (
                  <button key={v} className={`ryt-rate-chip${sel ? " ryt-sel" : ""}`}
                    onClick={() => { setHourlyRate(v); setRateInput(String(v)); setShowCustomRate(false); }}
                    style={{ background: sel ? "rgba(0,99,153,0.07)" : "rgba(0,0,0,0.03)", border: `1px solid ${sel ? TEAL : "rgba(0,0,0,0.10)"}`, color: sel ? TEAL : T3, borderRadius: 8, padding: "11px 18px", fontSize: 14, fontFamily: "'Manrope', sans-serif", fontWeight: sel ? 600 : 400, cursor: "pointer" }}
                  >£{v}/hr</button>
                );
              })}
              <button className={`ryt-rate-chip${showCustomRate ? " ryt-sel" : ""}`}
                onClick={() => { setShowCustomRate(true); setRateInput(""); }}
                style={{ background: showCustomRate ? "rgba(0,99,153,0.07)" : "rgba(0,0,0,0.03)", border: `1px solid ${showCustomRate ? TEAL : "rgba(0,0,0,0.10)"}`, color: showCustomRate ? TEAL : T3, borderRadius: 8, padding: "11px 18px", fontSize: 14, fontFamily: "'Manrope', sans-serif", fontWeight: showCustomRate ? 600 : 400, cursor: "pointer" }}
              >Custom</button>
            </div>

            {showCustomRate && (
              <div style={{ display: "flex", alignItems: "center", gap: 10, background: "rgba(0,99,153,0.04)", border: "1px solid rgba(0,99,153,0.20)", borderRadius: 12, padding: "15px 20px", marginBottom: 8 }}>
                <span style={{ fontSize: 26, fontWeight: 700, color: TEAL, fontFamily: "'Space Mono', monospace" }}>£</span>
                <input type="number" value={rateInput} placeholder="0" autoFocus className="ryt-input"
                  onChange={(e) => { setRateInput(e.target.value); const v = parseInt(e.target.value); if (!isNaN(v) && v > 0) setHourlyRate(v); }}
                  style={{ background: "none", border: "none", outline: "none", fontSize: 26, fontWeight: 700, color: T1, fontFamily: "'Space Mono', monospace", flex: 1, minWidth: 0 }}
                />
                <span style={{ fontSize: 13, color: T4, whiteSpace: "nowrap" }}>/hour</span>
              </div>
            )}

            <p style={{ fontSize: 13, color: T4, margin: "16px 0 34px", lineHeight: 1.55 }}>Don't overthink this. A rough number works.</p>
            <Btn onClick={() => transition(2)}>Next →</Btn>
          </div>
        )}

        {/* ── TASKS ─────────────────────────────────────────────────────── */}
        {screen >= 2 && screen <= 7 && currentTask && (
          <div>
            <StepLabel num={screen} total={7} />
            <h2 style={{ fontSize: 23, fontFamily: "'Manrope', sans-serif", fontWeight: 700, color: T1, margin: "0 0 6px", letterSpacing: "-0.012em" }}>
              {currentTask.label}
            </h2>
            <p style={{ fontSize: 14, color: T3, margin: "0 0 28px", lineHeight: 1.6 }}>
              {currentTask.description}
            </p>
            <p style={{ fontSize: 11, fontFamily: "'Space Mono', monospace", textTransform: "uppercase", letterSpacing: "0.14em", color: T4, margin: "0 0 12px" }}>
              Hours per week
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 7, marginBottom: 36 }}>
              {HOUR_OPTIONS.map((opt) => {
                const sel = taskHours[currentTask.id] === opt.value;
                return (
                  <button key={opt.value} className={`ryt-hour-opt${sel ? " ryt-sel" : ""}`}
                    onClick={() => setTaskHours((p) => ({ ...p, [currentTask.id]: opt.value }))}
                    style={{
                      background:   sel ? "rgba(0,99,153,0.06)" : "rgba(0,0,0,0.018)",
                      borderTop:    `1px solid ${sel ? "rgba(0,99,153,0.22)" : "rgba(0,0,0,0.08)"}`,
                      borderRight:  `1px solid ${sel ? "rgba(0,99,153,0.22)" : "rgba(0,0,0,0.08)"}`,
                      borderBottom: `1px solid ${sel ? "rgba(0,99,153,0.22)" : "rgba(0,0,0,0.08)"}`,
                      borderLeft:   `3px solid ${sel ? TEAL : "transparent"}`,
                      color:        sel ? T1 : T2,
                      borderRadius: 10, padding: "17px 22px",
                      fontSize: 15, fontFamily: "'Inter', sans-serif",
                      fontWeight: sel ? 500 : 400,
                      textAlign: "left" as const,
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    <span style={{ whiteSpace: "nowrap" }}>{opt.label}</span>
                    <span style={{ fontSize: 10, fontFamily: "'Space Mono', monospace", letterSpacing: "0.08em", color: T5, whiteSpace: "nowrap" }}>per week</span>
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
            <div style={{ display: "inline-flex", alignItems: "center", background: "rgba(232,72,85,0.07)", border: "1px solid rgba(232,72,85,0.18)", borderRadius: 999, padding: "6px 16px", marginBottom: 24 }}>
              <span style={{ fontSize: 10, fontFamily: "'Space Mono', monospace", textTransform: "uppercase", letterSpacing: "0.18em", color: RED }}>Your number</span>
            </div>

            <p style={{ fontSize: 15, color: T2, margin: "0 0 6px", lineHeight: 1.65 }}>You already knew some of this. Now you can see it.</p>
            <p style={{ fontSize: 15, color: T3, margin: "0 0 32px", lineHeight: 1.65 }}>This is what manual work costs your business every year.</p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 10 }}>
              <ResultCard label="Hours / week"  value={totalWeekly.toFixed(1)}  suffix="hrs" tier={1} />
              <ResultCard label="Hours / month" value={totalMonthly.toFixed(0)} suffix="hrs" tier={2} />
            </div>
            <ResultCard label="Annual cost to your business" value={`£${annualCost.toLocaleString("en-GB", { maximumFractionDigits: 0 })}`} tier={3} />

            <p style={{ fontSize: 14, color: T3, margin: "22px 0 40px", lineHeight: 1.65, fontStyle: "italic" }}>Most of this can be recovered in a weekend.</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Btn onClick={() => transition(9)} wide>Show me how →</Btn>
            </div>
          </div>
        )}

        {/* ── CAPTURE ───────────────────────────────────────────────────── */}
        {screen === 9 && !submitted && (
          <div>
            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <h2 style={{ fontSize: 28, fontFamily: "'Manrope', sans-serif", fontWeight: 800, color: T1, margin: "0 0 8px", lineHeight: 1.2, letterSpacing: "-0.022em" }}>
                Reclaim Your Time
              </h2>
              <p style={{ fontSize: 14, color: TEAL, fontWeight: 500, fontFamily: "'Inter', sans-serif" }}>
                Free live session. Tuesday 27 May, 7:30pm BST.
              </p>
            </div>

            <div style={{ background: "#F4F6FA", border: "1px solid rgba(0,0,0,0.07)", borderRadius: 14, padding: "22px 22px 24px", marginBottom: 24 }}>
              <p style={{ fontSize: 15, color: T1, margin: "0 0 14px", lineHeight: 1.65 }}>
                You've seen your number. {totalMonthly.toFixed(0)} hours a month on work that doesn't need you.
              </p>
              <p style={{ fontSize: 14, color: T2, margin: "0 0 14px", lineHeight: 1.65 }}>
                On the 27th, I'm running a live demo of a real business workflow. Finding a prospect, turning research into content, closing a proposal. Every step handled by AI while the business owner focuses on the work that actually matters.
              </p>
              <p style={{ fontSize: 14, color: T2, margin: "0 0 20px", lineHeight: 1.65 }}>
                60 minutes. No slides about "the future of AI." Just a working system you can rebuild for your own business.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <BenefitLine text="A live demo showing 10+ hours of manual work done in under 5 minutes" />
                <BenefitLine text="The exact tools and setup behind the workflow" />
                <BenefitLine text="What it takes to set this up in your business" />
              </div>
            </div>

            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: 14, color: T3, margin: "0 0 18px", lineHeight: 1.6 }}>
                Enter your details below. You'll get the session link and your personalised results by email.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 16, maxWidth: 360, marginLeft: "auto", marginRight: "auto" }}>
                <input type="text" placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="ryt-input" style={inputStyle} />
                <input type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} className="ryt-input" style={inputStyle} />
              </div>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 12 }}>
                <Btn onClick={handleSubmit} disabled={!email || submitting}>
                  {submitting ? "Saving your spot..." : "Save my spot"}
                </Btn>
              </div>
              <p style={{ fontSize: 12, color: T5 }}>No spam. Just the session link and your results.</p>
            </div>
          </div>
        )}

        {/* ── CONFIRMATION ──────────────────────────────────────────────── */}
        {screen === 9 && submitted && (
          <div style={{ textAlign: "center" }}>
            <div className="ryt-check-anim" style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(0,99,153,0.08)", border: "1px solid rgba(0,99,153,0.18)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#006399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
            </div>

            <h2 style={{ fontSize: 34, fontFamily: "'Manrope', sans-serif", fontWeight: 800, color: T1, margin: "0 0 14px", letterSpacing: "-0.026em" }}>You're in.</h2>

            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(0,99,153,0.06)", border: "1px solid rgba(0,99,153,0.14)", borderRadius: 999, padding: "8px 18px", marginBottom: 28 }}>
              <span style={{ fontSize: 12, fontFamily: "'Space Mono', monospace", color: TEAL, letterSpacing: "0.04em" }}>Tuesday 27 May</span>
              <span style={{ color: T5, fontSize: 10 }}>·</span>
              <span style={{ fontSize: 12, fontFamily: "'Space Mono', monospace", color: T3, letterSpacing: "0.04em" }}>7:30pm BST</span>
            </div>

            <div style={{ background: "rgba(232,72,85,0.05)", border: "1px solid rgba(232,72,85,0.20)", borderRadius: 14, padding: "28px 24px 24px", marginBottom: 24, boxShadow: "0 8px 36px rgba(232,72,85,0.10)" }}>
              <div style={{ fontSize: 10, fontFamily: "'Space Mono', monospace", textTransform: "uppercase", letterSpacing: "0.18em", color: "rgba(232,72,85,0.60)", marginBottom: 14 }}>
                Annual cost to your business
              </div>
              <div style={{ fontSize: "clamp(44px, 11vw, 60px)", fontWeight: 700, fontFamily: "'Space Mono', monospace", color: RED, letterSpacing: "-0.025em", lineHeight: 1, marginBottom: 12 }}>
                £{annualCost.toLocaleString("en-GB", { maximumFractionDigits: 0 })}
              </div>
              <div style={{ fontSize: 12, color: T4, fontFamily: "'Inter', sans-serif" }}>in time spent on manual work</div>
            </div>

            <p style={{ fontSize: 14, color: T3, margin: "0 0 12px", lineHeight: 1.7, maxWidth: 340, marginLeft: "auto", marginRight: "auto" }}>
              Hold that number. On the 27th, you'll see exactly how to take those hours back.
            </p>
            <p style={{ fontSize: 11, fontFamily: "'Space Mono', monospace", color: T5, letterSpacing: "0.06em" }}>
              Check your inbox for the session link.
            </p>
          </div>
        )}

      </div>

      {/* Footer */}
      <div style={{ position: "fixed", bottom: 14, left: 0, right: 0, textAlign: "center", fontSize: 11, color: T5, fontFamily: "'Space Mono', monospace", letterSpacing: "0.06em", zIndex: 1 }}>
        ajyle.ai/reclaimyourtime
      </div>
    </div>
  );
}
