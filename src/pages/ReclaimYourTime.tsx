import React, { useState } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────
// DESIGN NOTE FOR CLAUDE DESIGN: Do not modify the functional logic below
// (state, calculations, Mailchimp submission, screen transitions).
// Restyle the visual layer freely. All functional code is marked with
// "DO NOT MODIFY" comments.

const TASKS = [
  { id: "research", label: "Research and analysis", description: "Searching online, reading reports, finding what you need" },
  { id: "content", label: "Content creation", description: "Writing posts, newsletters, articles, marketing copy" },
  { id: "proposals", label: "Proposals and documents", description: "Writing proposals, reports, anything client-facing" },
  { id: "emails", label: "Email follow-ups", description: "Chasing replies, writing follow-ups, keeping on top of threads" },
  { id: "admin", label: "Admin and CRM", description: "Updating records, scheduling emails, keeping the CRM tidy" },
  { id: "postmeeting", label: "Post-meeting work", description: "Writing up notes, summarising calls, building action lists" },
];

const HOUR_OPTIONS = [
  { label: "0 hrs", value: 0 },
  { label: "1–2 hrs", value: 1.5 },
  { label: "3–5 hrs", value: 4 },
  { label: "6–10 hrs", value: 8 },
  { label: "10+ hrs", value: 12 },
];

const MC_URL = "https://neesee.us21.list-manage.com/subscribe/post?u=388d2c1b2280a11391c12d1a2&id=588e741926&f_id=00578de6f0";
const MC_U = "388d2c1b2280a11391c12d1a2";
const MC_ID = "588e741926";

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function ReclaimYourTime() {
  // ── State (DO NOT MODIFY) ──────────────────────────────────────────────────
  const [screen, setScreen] = useState(0);
  const [hourlyRate, setHourlyRate] = useState(75);
  const [rateInput, setRateInput] = useState("75");
  const [showCustomRate, setShowCustomRate] = useState(false);
  const [taskHours, setTaskHours] = useState<Record<string, number>>({});
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [fade, setFade] = useState(true);

  // ── Calculations (DO NOT MODIFY) ───────────────────────────────────────────
  const totalWeekly: number = (Object.values(taskHours) as number[]).reduce((s, v) => s + v, 0);
  const totalMonthly: number = totalWeekly * 4.3;
  const annualCost: number = totalMonthly * hourlyRate * 12;

  const transition = (next: number) => {
    setFade(false);
    setTimeout(() => { setScreen(next); setFade(true); }, 200);
  };

  const progress = screen === 0 ? 0 : Math.round((screen / 9) * 100);
  const taskIdx = screen - 2;
  const currentTask = TASKS[taskIdx];
  const canProceed = currentTask ? taskHours[currentTask.id] !== undefined : true;

  // Connecting copy between task screens. Conversational, no motivational fluff.
  const taskTransitions = [
    "Right. Next one.",
    "Two down. Keep going.",
    "Halfway. Four more.",
    "Nearly there. Two left.",
    "Last one. Then you'll see your number.",
  ];

  // ── Mailchimp submission (DO NOT MODIFY) ───────────────────────────────────
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

  // ── RENDER ─────────────────────────────────────────────────────────────────
  return (
    <div
      className="font-sans"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(165deg, #0D1527 0%, #1C2D5C 45%, #111D3A 100%)",
        color: "#F0F2F5",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px 16px",
        position: "relative",
        fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Space+Mono:wght@400;700&display=swap"
        rel="stylesheet"
      />

      <div style={{ position: "fixed", top: "-25%", right: "-15%", width: 500, height: 500, background: "radial-gradient(circle, rgba(46,196,182,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "fixed", bottom: "-20%", left: "-10%", width: 400, height: 400, background: "radial-gradient(circle, rgba(28,45,92,0.3) 0%, transparent 70%)", pointerEvents: "none" }} />

      {screen > 0 && screen < 9 && (
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: 3, background: "rgba(255,255,255,0.06)", zIndex: 100 }}>
          <div style={{ height: "100%", width: `${progress}%`, background: "linear-gradient(90deg, #2EC4B6, #24A89C)", transition: "width 0.4s ease" }} />
        </div>
      )}

      {screen > 0 && screen < 9 && (
        <button onClick={() => transition(screen - 1)} style={{ position: "fixed", top: 16, left: 16, background: "none", border: "none", color: "rgba(255,255,255,0.4)", fontSize: 14, cursor: "pointer", zIndex: 100, fontFamily: "'DM Sans', sans-serif" }}>
          ← Back
        </button>
      )}

      <div style={{ maxWidth: 520, width: "100%", opacity: fade ? 1 : 0, transform: fade ? "translateY(0)" : "translateY(8px)", transition: "opacity 0.2s ease, transform 0.2s ease" }}>

        {/* ===== SCREEN 0: HOOK ===== */}
        {screen === 0 && (
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 11, fontFamily: "'Space Mono', monospace", textTransform: "uppercase", letterSpacing: 3, color: "#2EC4B6", marginBottom: 32 }}>Ajyle AI</div>
            <h1 style={{ fontSize: "clamp(28px, 6vw, 42px)", fontWeight: 700, lineHeight: 1.15, margin: "0 0 20px", color: "#FFFFFF" }}>
              How much is manual work costing your business?
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(255,255,255,0.55)", margin: "0 0 48px", maxWidth: 420, marginLeft: "auto", marginRight: "auto" }}>
              Six questions. Ninety seconds. One number.
            </p>
            <button onClick={() => transition(1)} style={{ ...btnPrimary, width: "auto", padding: "16px 40px" }}>Calculate my number</button>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.25)", marginTop: 20 }}>No signup required to see your result</p>
          </div>
        )}

        {/* ===== SCREEN 1: RATE ===== */}
        {screen === 1 && (
          <div>
            <StepLabel num={1} total={7} />
            <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 8px" }}>What's your time worth?</h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", margin: "0 0 28px" }}>
              Pick your hourly rate below, or type your own.
            </p>

            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
              {[50, 75, 100, 150, 200].map((v) => (
                <button
                  key={v}
                  onClick={() => { setHourlyRate(v); setRateInput(String(v)); setShowCustomRate(false); }}
                  style={{
                    background: hourlyRate === v && !showCustomRate ? "rgba(46,196,182,0.15)" : "rgba(255,255,255,0.04)",
                    border: `1px solid ${hourlyRate === v && !showCustomRate ? "#2EC4B6" : "rgba(255,255,255,0.08)"}`,
                    color: hourlyRate === v && !showCustomRate ? "#2EC4B6" : "rgba(255,255,255,0.5)",
                    borderRadius: 6, padding: "10px 18px", fontSize: 15, cursor: "pointer",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  £{v}/hr
                </button>
              ))}
              <button
                onClick={() => { setShowCustomRate(true); setRateInput(""); }}
                style={{
                  background: showCustomRate ? "rgba(46,196,182,0.15)" : "rgba(255,255,255,0.04)",
                  border: `1px solid ${showCustomRate ? "#2EC4B6" : "rgba(255,255,255,0.08)"}`,
                  color: showCustomRate ? "#2EC4B6" : "rgba(255,255,255,0.5)",
                  borderRadius: 6, padding: "10px 18px", fontSize: 15, cursor: "pointer",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Custom
              </button>
            </div>

            {showCustomRate && (
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <span style={{ fontSize: 28, fontWeight: 700, color: "#2EC4B6" }}>£</span>
                <input
                  type="number"
                  value={rateInput}
                  placeholder="Your rate"
                  autoFocus
                  onChange={(e) => {
                    setRateInput(e.target.value);
                    const v = parseInt(e.target.value);
                    if (!isNaN(v) && v > 0) setHourlyRate(v);
                  }}
                  style={{ ...inputBase, fontSize: 28, fontWeight: 700, width: 160, fontFamily: "'Space Mono', monospace" }}
                />
                <span style={{ fontSize: 14, color: "rgba(255,255,255,0.35)" }}>/hour</span>
              </div>
            )}

            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", margin: "16px 0 28px", lineHeight: 1.5 }}>
              Don't overthink this. A rough number works.
            </p>

            <button onClick={() => transition(2)} style={btnPrimary}>Next →</button>
          </div>
        )}

        {/* ===== SCREENS 2–7: TASKS ===== */}
        {screen >= 2 && screen <= 7 && currentTask && (
          <div>
            <StepLabel num={screen} total={7} />
            {taskIdx > 0 && (
              <p style={{ fontSize: 13, color: "#2EC4B6", margin: "0 0 20px", fontWeight: 500 }}>{taskTransitions[taskIdx - 1]}</p>
            )}
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 6px" }}>{currentTask.label}</h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", margin: "0 0 28px" }}>{currentTask.description}</p>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", margin: "0 0 16px", fontWeight: 500 }}>
              Roughly how many hours a week do you spend on this?
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 40 }}>
              {HOUR_OPTIONS.map((opt) => {
                const sel = taskHours[currentTask.id] === opt.value;
                return (
                  <button key={opt.value} onClick={() => setTaskHours((p) => ({ ...p, [currentTask.id]: opt.value }))} style={{ background: sel ? "rgba(46,196,182,0.12)" : "rgba(255,255,255,0.03)", border: `1px solid ${sel ? "#2EC4B6" : "rgba(255,255,255,0.08)"}`, color: sel ? "#2EC4B6" : "rgba(255,255,255,0.6)", borderRadius: 8, padding: "14px 20px", fontSize: 16, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", textAlign: "left" as const, fontWeight: sel ? 600 : 400, transition: "all 0.15s ease" }}>
                    {opt.label}
                    <span style={{ float: "right", fontSize: 13, color: "rgba(255,255,255,0.25)" }}>per week</span>
                  </button>
                );
              })}
            </div>
            <button onClick={() => transition(screen + 1)} disabled={!canProceed} style={{ ...btnPrimary, opacity: canProceed ? 1 : 0.35, cursor: canProceed ? "pointer" : "default" }}>
              {screen === 7 ? "Show me the number" : "Next →"}
            </button>
          </div>
        )}

        {/* ===== SCREEN 8: RESULTS ===== */}
        {screen === 8 && (
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 11, fontFamily: "'Space Mono', monospace", textTransform: "uppercase", letterSpacing: 3, color: "#E84855", marginBottom: 24, fontWeight: 700 }}>Your number</div>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", margin: "0 0 12px", lineHeight: 1.6 }}>You already knew some of this. Now you can see it.</p>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", margin: "0 0 32px", lineHeight: 1.6 }}>This is what manual work costs your business every year.</p>
            <ResultCard label="Hours per week" value={`${totalWeekly.toFixed(1)}`} suffix="hrs" color="#2EC4B6" />
            <ResultCard label="Hours per month" value={`${totalMonthly.toFixed(0)}`} suffix="hrs" color="#253A6E" textColor="#2EC4B6" />
            <ResultCard label="Annual cost to your business" value={`£${annualCost.toLocaleString("en-GB", { maximumFractionDigits: 0 })}`} color="#E84855" large />
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", margin: "24px 0 40px", lineHeight: 1.6, fontStyle: "italic" }}>Most of this can be recovered in a weekend.</p>
            <button onClick={() => transition(9)} style={btnPrimary}>Show me how →</button>
          </div>
        )}

        {/* ===== SCREEN 9: CAPTURE ===== */}
        {screen === 9 && !submitted && (
          <div>
            <div style={{ textAlign: "center", marginBottom: 28 }}>
              <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 6px", lineHeight: 1.25, color: "#FFFFFF" }}>Reclaim Your Time</h2>
              <p style={{ fontSize: 15, color: "#2EC4B6", margin: "0 0 4px", fontWeight: 500 }}>Free live session. Tuesday 27 May, 7:30pm BST.</p>
            </div>
            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "24px 20px", marginBottom: 28 }}>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.75)", margin: "0 0 16px", lineHeight: 1.65 }}>
                You've seen your number. {totalMonthly.toFixed(0)} hours a month on work that doesn't need you.
              </p>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.75)", margin: "0 0 16px", lineHeight: 1.65 }}>
                On the 27th, I'm running a live demo of a real business workflow. Finding a prospect, turning research into content, closing a proposal. Every step handled by AI while the business owner focuses on the work that actually matters.
              </p>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.75)", margin: "0 0 20px", lineHeight: 1.65 }}>
                60 minutes. No slides about "the future of AI." Just a working system you can rebuild for your own business.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <BenefitLine text="A live demo showing 10+ hours of manual work done in under 5 minutes" />
                <BenefitLine text="The exact tools and setup behind the workflow" />
                <BenefitLine text="What it takes to set this up in your business" />
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", margin: "0 0 20px", lineHeight: 1.55 }}>Enter your details below. You'll get the session link and your personalised results by email.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20, maxWidth: 360, marginLeft: "auto", marginRight: "auto" }}>
                <input type="text" placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} style={inputBase} />
                <input type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} style={inputBase} />
              </div>
              <button onClick={handleSubmit} disabled={!email || submitting} style={{ ...btnPrimary, opacity: (!email || submitting) ? 0.5 : 1, maxWidth: 360 }}>{submitting ? "Saving your spot..." : "Save my spot"}</button>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.2)", marginTop: 14 }}>No spam. Just the session link and your results.</p>
            </div>
          </div>
        )}

        {/* ===== CONFIRMATION ===== */}
        {screen === 9 && submitted && (
          <div style={{ textAlign: "center" }}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(46,196,182,0.15)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: 28, color: "#2EC4B6" }}>✓</div>
            <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px", color: "#FFFFFF" }}>You're in.</h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.55)", margin: "0 0 8px", lineHeight: 1.6 }}>27 May, 7:30pm BST. Check your inbox.</p>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.4)", margin: "0 0 32px", lineHeight: 1.6 }}>Your number:{" "}<span style={{ color: "#E84855", fontWeight: 700, fontFamily: "'Space Mono', monospace" }}>£{annualCost.toLocaleString("en-GB", { maximumFractionDigits: 0 })}</span>{" "}per year in manual work.</p>
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(46,196,182,0.15)", borderRadius: 12, padding: 24, maxWidth: 380, marginLeft: "auto", marginRight: "auto" }}>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", margin: 0, lineHeight: 1.6 }}>Hold that number. On the 27th, you'll see exactly how to take those hours back.</p>
            </div>
          </div>
        )}
      </div>

      <div style={{ position: "fixed", bottom: 12, left: 0, right: 0, textAlign: "center", fontSize: 11, color: "rgba(255,255,255,0.12)", fontFamily: "'Space Mono', monospace" }}>ajyle.ai/reclaimyourtime</div>
    </div>
  );
}

// ─── SUB-COMPONENTS ──────────────────────────────────────────────────────────

function StepLabel({ num, total }: { num: number; total: number }) {
  return (<div style={{ fontSize: 12, fontFamily: "'Space Mono', monospace", color: "rgba(255,255,255,0.3)", marginBottom: 12, textTransform: "uppercase", letterSpacing: 2 }}>Step {num} of {total}</div>);
}

function ResultCard({ label, value, suffix, color, large, textColor }: { label: string; value: string; suffix?: string; color: string; large?: boolean; textColor?: string; }) {
  return (
    <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: large ? "28px 24px" : "20px 24px", marginBottom: 12 }}>
      <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: 1.5, color: "rgba(255,255,255,0.35)", marginBottom: 8, fontFamily: "'Space Mono', monospace" }}>{label}</div>
      <div style={{ fontSize: large ? "clamp(32px, 7vw, 48px)" : 28, fontWeight: 700, color: textColor || color, fontFamily: "'Space Mono', monospace" }}>
        {value}{suffix && (<span style={{ fontSize: 16, color: "rgba(255,255,255,0.3)", marginLeft: 6 }}>{suffix}</span>)}
      </div>
    </div>
  );
}

function BenefitLine({ text }: { text: string }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 10, paddingLeft: 4 }}>
      <span style={{ color: "#2EC4B6", fontSize: 14, lineHeight: "22px", flexShrink: 0 }}>—</span>
      <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", margin: 0, lineHeight: 1.55 }}>{text}</p>
    </div>
  );
}

// ─── STYLES ──────────────────────────────────────────────────────────────────

const btnPrimary: React.CSSProperties = {
  background: "#2EC4B6", color: "#1C2D5C", border: "none", padding: "16px 32px",
  borderRadius: "8px", fontSize: "16px", fontWeight: 700, cursor: "pointer",
  fontFamily: "'DM Sans', sans-serif", boxShadow: "0 4px 24px rgba(46,196,182,0.25)",
  width: "100%", maxWidth: "360px", transition: "all 0.15s ease", letterSpacing: "0.3px",
};

const inputBase: React.CSSProperties = {
  background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: "8px", padding: "14px 18px", fontSize: "16px", color: "#fff",
  fontFamily: "'DM Sans', sans-serif", outline: "none", width: "100%", boxSizing: "border-box",
};
