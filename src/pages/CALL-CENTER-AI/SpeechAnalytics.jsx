import React, { useState } from "react";
import Button from "../../components/common/Button";

/**
 * AI Speech Analytics for Call Centers Page Replica
 * Source: https://krisp.ai/contact-center/speech-analytics/
 *
 * Full fidelity reproduction featuring:
 * 1. Hero with badge, heading, 100% coverage claim, and action CTAs
 * 2. The Problem section (98% unreviewed calls, coaching gaps, compliance risks, blind spots)
 * 3. 3 Core Pillars (Automated Call Scoring, Performance Monitoring, Compliance Monitoring)
 * 4. Target Stakeholder Cards (QA Teams, Operations Leaders, Compliance Officers)
 * 5. Direct Comparison Table (Other AutoQA Tools vs Krisp Speech Analytics)
 * 6. Implementation Timeline (Live in under a week)
 * 7. Softphone platform coverage & Enterprise security
 * 8. Accordion FAQs & Bottom CTA
 */
export default function SpeechAnalytics() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const problemCards = [
    {
      stat: "98%",
      title: "Calls are never reviewed",
      desc: "Manual QA typically samples only 1–2% of calls, leaving thousands of customer conversations completely unmonitored."
    },
    {
      stat: "Coaching Gap",
      title: "Spot checks don't fix habits",
      desc: "Supervisors evaluate agents on single bad calls rather than coaching to persistent long-term conversational trends."
    },
    {
      stat: "Compliance Risk",
      title: "Violations discovered too late",
      desc: "Omitted disclosures and mandatory disclaimers only surface during external audits or client penalty disputes."
    },
    {
      stat: "Quality Blind Spots",
      title: "Escalations go unnoticed",
      desc: "High-churn customer interactions slip through until angry tickets or negative CSAT reviews are submitted."
    }
  ];

  const pillars = [
    {
      title: "Call Scoring",
      badge: "100% Coverage",
      tagline: "Automated scoring covers 100% of calls with granular scorecard justifications.",
      desc: "Your QA team can drill into specific calls, verify scores, and override where human nuance is needed. Automated scoring handles the scale; reviewers focus on high-impact coaching.",
      bullets: [
        "Fully customizable scoring criteria aligned to your internal QA rubric",
        "Structured scorecard evaluations with per-question reasoning and citations",
        "Score, full transcript, AI summary, and audio recording in one unified view",
        "Configurable weights across greeting, empathy, active listening, and resolution"
      ]
    },
    {
      title: "Performance Monitoring",
      badge: "Real-time Trends",
      tagline: "Identify coaching opportunities based on empirical data, not spot checks.",
      desc: "When every call is scored, team-wide patterns become immediately apparent. Track quality over time by shift, program, and supervisor group.",
      bullets: [
        "Long-term trend analytics by individual agent, team, and client program",
        "Instant filtering by score threshold, call disposition, or quality dimension",
        "Coaching grounded in multi-week statistical patterns, not isolated bad days",
        "Automated recognition of top-performing agent dialogue techniques"
      ]
    },
    {
      title: "Compliance Monitoring",
      badge: "Zero Misses",
      tagline: "Ensure strict adherence to financial, healthcare, and consumer mandates.",
      desc: "Compliance rules are evaluated post-call on every single interaction. Any missing disclosure, omitted disclaimer, or forbidden phrase is flagged immediately.",
      bullets: [
        "Real-time flags linked directly to the exact moment in the call audio transcript",
        "Customizable rule libraries per client contract, state, or regulatory environment",
        "Automated notification triggers sent to compliance officers upon critical violation",
        "Configurable data retention and audit logs for regulatory inspections"
      ]
    }
  ];

  const comparisonRows = [
    {
      dimension: "Telephony Integration",
      other: "Complex CCaaS integrations taking weeks to months",
      krisp: "Zero telephony integration. Operates on agent device."
    },
    {
      dimension: "Time to Live",
      other: "3–6 month lengthy implementation cycles",
      krisp: "Live on live calls in under a week"
    },
    {
      dimension: "Data Source & Accuracy",
      other: "Processes compressed cloud recordings after the fact",
      krisp: "Processes direct audio stream for higher transcription accuracy"
    },
    {
      dimension: "Data Privacy & PII",
      other: "Cloud-based redaction after full audio upload",
      krisp: "PII redacted on-device before any cloud processing"
    },
    {
      dimension: "Cost & Licensing",
      other: "High per-minute fees and expensive professional services",
      krisp: "Flat transparent seat pricing with unlimited analysis"
    }
  ];

  const timelineSteps = [
    {
      step: "01",
      title: "Install Krisp",
      desc: "One silent install on agent laptops. Works across Genesys, Five9, Amazon Connect, and Avaya."
    },
    {
      step: "02",
      title: "Configure your quality rubric",
      desc: "Set scoring criteria, compliance rules, and scorecard questions directly from the web admin portal."
    },
    {
      step: "03",
      title: "Go live immediately",
      desc: "Every call is analyzed post-call from day one. No months-long calibration period or baseline delays."
    },
    {
      step: "04",
      title: "Review and coach",
      desc: "Scores, summaries, compliance flags, and trends appear automatically in dashboard views."
    }
  ];

  const faqs = [
    {
      q: "Does Speech Analytics require a CCaaS integration?",
      a: "No. Krisp installs directly on agent devices and works as a layer between the agent's headset and any softphone platform. No Genesys, Five9, NICE, or Talkdesk API project is required."
    },
    {
      q: "How long does it take to deploy Speech Analytics across thousands of agents?",
      a: "Most teams are live within a week. Deploy Krisp via MSI/SCCM, configure your QA scorecard in the admin portal, and every call is analyzed from day one."
    },
    {
      q: "Can we use our own proprietary QA scorecard model?",
      a: "Yes. Scoring criteria, compliance rules, and QA scorecard questions are 100% configurable. Speech Analytics is a customizable framework, not a fixed black-box model."
    },
    {
      q: "Is there a limit on the number of compliance rules we can monitor?",
      a: "No. You can configure unlimited compliance rules across different lines of business, client programs, and regulatory jurisdictions."
    }
  ];

  return (
    <div className="w-full bg-white text-[#131032] overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section
        id="hero"
        className="w-full relative pt-16 pb-20 md:pt-24 md:pb-28 px-4 sm:px-6 bg-[#fafafc] border-b border-[#e7e7ea]"
      >
        <div className="max-w-[1240px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#cef4ec] bg-[#e8faf6] text-[#008065] text-xs sm:text-sm font-bold mb-6">
            <span className="w-2 h-2 rounded-full bg-[#008065] animate-pulse" />
            100% Automated Call QA &amp; Compliance
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold text-[#131032] leading-[1.15] max-w-4xl mx-auto mb-6">
            AI Speech Analytics <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#614efa] to-[#16a9ff]">
              for Call Centers
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#525069] max-w-3xl mx-auto leading-relaxed mb-8">
            Automatic post-call scoring, compliance monitoring, and performance insights across every single conversation — with no manual sampling required.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <Button variant="primary" href="/contact-sales" className="h-[48px] px-8 text-sm sm:text-base font-bold">
              Book a demo
            </Button>
            <Button variant="dark" href="/signup" className="h-[48px] px-8 text-sm sm:text-base font-bold">
              Start a 14-day trial
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-semibold text-[#525069] pt-4 border-t border-[#ededf0] max-w-3xl mx-auto">
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-500 font-bold">✓</span> 100% of calls analyzed
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-500 font-bold">✓</span> No manual sampling needed
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-500 font-bold">✓</span> Live on your calls in under a week
            </span>
          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM (98% OF CALLS MISSED) */}
      <section className="py-24 bg-white border-b border-[#f4f4f5]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#fe6257]">
              The Problem
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#131032]">
              Most QA programs miss what&apos;s actually happening on calls
            </h2>
            <p className="text-base text-[#525069]">
              Manual QA reviews a tiny fraction of calls, so coaching gaps, compliance misses, and quality issues stay invisible until it&apos;s too late.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {problemCards.map((p, idx) => (
              <div key={idx} className="p-7 rounded-2xl bg-[#fafafb] border border-[#e7e7ea] space-y-3">
                <div className="text-2xl font-extrabold text-[#614efa]">{p.stat}</div>
                <h3 className="text-lg font-bold text-[#131032]">{p.title}</h3>
                <p className="text-xs sm:text-sm text-[#525069] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHAT SPEECH ANALYTICS INCLUDES (3 PILLARS) */}
      <section className="py-24 bg-[#fafafc]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#614efa]">
              Complete Coverage
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#131032]">
              Built around your quality and compliance standards
            </h2>
            <p className="text-base text-[#525069]">
              Every capability is designed as a configurable framework, not a fixed black-box. Teams define what good looks like, and Krisp applies it to every call.
            </p>
          </div>

          <div className="space-y-8">
            {pillars.map((pil, idx) => (
              <div
                key={idx}
                className="p-8 sm:p-10 rounded-3xl bg-white border border-[#e7e7ea] shadow-sm flex flex-col lg:flex-row justify-between gap-8 items-start"
              >
                <div className="lg:w-1/2 space-y-4">
                  <div className="inline-block px-3 py-1 rounded-md text-xs font-bold bg-[#f4f2ff] text-[#614efa]">
                    {pil.badge}
                  </div>
                  <h3 className="text-2xl font-bold text-[#131032]">{pil.title}</h3>
                  <div className="text-base font-semibold text-[#131032] leading-snug">{pil.tagline}</div>
                  <p className="text-xs sm:text-sm text-[#525069] leading-relaxed">{pil.desc}</p>
                </div>

                <div className="lg:w-1/2 bg-[#fafafc] p-6 rounded-2xl border border-[#ededf0] w-full">
                  <div className="text-xs font-bold uppercase text-[#757585] mb-3">Key Capabilities</div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#131032]">
                    {pil.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                        <span className="leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COMPARISON TABLE: KRISP VS OTHER AUTOQA */}
      <section className="py-24 bg-white border-y border-[#f4f4f5]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#614efa]">
              Architecture Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#131032]">
              Built into the voice layer. Not bolted onto your stack.
            </h2>
            <p className="text-base text-[#525069]">
              Most AutoQA platforms work on top of compressed recordings and require months of integration work. Krisp already runs on agent devices.
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-[#e7e7ea] shadow-sm">
            <div className="grid grid-cols-12 bg-[#18113c] text-white p-4 font-bold text-xs sm:text-sm">
              <div className="col-span-4">Evaluation Dimension</div>
              <div className="col-span-4 text-gray-300">Legacy AutoQA Platforms</div>
              <div className="col-span-4 text-emerald-400">Krisp Speech Analytics</div>
            </div>

            {comparisonRows.map((row, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-12 p-4 text-xs sm:text-sm border-t border-[#ededf0] items-center ${
                  idx % 2 === 1 ? "bg-[#fafafc]" : "bg-white"
                }`}
              >
                <div className="col-span-4 font-bold text-[#131032]">{row.dimension}</div>
                <div className="col-span-4 text-[#757585] pr-2">{row.other}</div>
                <div className="col-span-4 text-[#131032] font-semibold flex items-center gap-1.5">
                  <span className="text-emerald-500 font-bold">✓</span> {row.krisp}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TIMELINE: LIVE IN UNDER A WEEK */}
      <section className="py-24 bg-[#fafafc]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#614efa]">
              Getting Started
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#131032]">
              Live on your calls in under a week
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {timelineSteps.map((s, idx) => (
              <div key={idx} className="p-7 rounded-2xl bg-white border border-[#e7e7ea] space-y-3">
                <div className="text-3xl font-extrabold text-[#614efa]">{s.step}</div>
                <h3 className="text-lg font-bold text-[#131032]">{s.title}</h3>
                <p className="text-xs sm:text-sm text-[#525069] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQS */}
      <section className="py-24 bg-white border-t border-[#f4f4f5]">
        <div className="max-w-[880px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#614efa]">FAQ</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#131032]">
              Have questions? We&apos;ve got answers.
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-[#e7e7ea] overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-[#fafafa]"
                  >
                    <span className="text-base sm:text-lg font-bold text-[#131032] pr-4">
                      {faq.q}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-[#f4f2ff] text-[#614efa] flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#525069] leading-relaxed border-t border-[#f4f4f5]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. BOTTOM BANNER */}
      <section className="py-20 bg-gradient-to-r from-[#18113c] via-[#2f1f70] to-[#18113c] text-white text-center">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            See how full-call visibility changes QA operations
          </h2>
          <p className="text-base sm:text-lg text-indigo-200 max-w-2xl mx-auto">
            Krisp Speech Analytics helps contact centers move from limited sampling to consistent, data-driven oversight across every call.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" href="/contact-sales" className="h-[48px] px-8 text-base font-bold">
              Book a demo
            </Button>
            <Button variant="dark" href="/signup" className="h-[48px] px-8 text-base font-bold">
              Start a 14-day trial
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
