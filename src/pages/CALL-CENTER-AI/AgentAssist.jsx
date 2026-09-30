import React, { useState } from "react";
import Button from "../../components/common/Button";

/**
 * AI Agent Assist for Call Centers Page Replica
 * Source: https://krisp.ai/contact-center/ai-agent-assist/
 *
 * Full fidelity reproduction featuring:
 * 1. Hero with badge, heading, value points, CTAs, and softphone layer preview
 * 2. Trusted by global BPOs and enterprise contact centers
 * 3. 4 Key Feature deep-dives:
 *    - AI Knowledge Chat (real-time citations, knowledge hub sync)
 *    - After-call Summary (PII/PCI redaction, one-click CRM sync, action items)
 *    - Voice Macros (verbatim compliance playback, one-click triggering)
 *    - Live Captions (real-time customer speech display in noisy lines)
 * 4. Call Center Benefits (Increased FCR, Lower AHT, Higher CSAT/ESAT, Efficient ACW)
 * 5. Auto-integration with Softphone platforms
 * 6. Enterprise-grade security and PII compliance
 * 7. Bottom CTA banner
 */
export default function AgentAssist() {
  const [activeFeature, setActiveFeature] = useState("knowledge-chat");

  const features = [
    {
      id: "knowledge-chat",
      title: "AI Knowledge Chat",
      tagline: "Contextual troubleshooting guidance delivered in seconds during live calls.",
      icon: "💬",
      bullets: [
        "Real-time delivery of contextually relevant knowledge directly to agents",
        "Interactive chat availability during and after the customer call",
        "Direct source citation so agents speak with absolute confidence",
        "Admin-controlled centralized Knowledge Hub with role-based permissions",
        "Seamless integration with existing Zendesk, Salesforce, Notion & Confluence wikis"
      ],
      previewImg: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_artboard_ma_5.png"
    },
    {
      id: "summary",
      title: "After-call Summary",
      tagline: "Eliminate manual After-Call Work (ACW) with structured, accurate summaries.",
      icon: "📝",
      bullets: [
        "Instantly AI-generated call summaries organized by problem, resolution, and next steps",
        "Automated extraction of follow-up tasks and action items for the agent",
        "Automatic PII & PCI redaction before any notes reach cloud systems",
        "One-click transfer directly into Salesforce, HubSpot, Zendesk, or custom CRMs",
        "Call statistics on talk-to-listen ratio, pacing, and interruption rates"
      ],
      previewImg: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_artboard_ma_6.png"
    },
    {
      id: "macros",
      title: "Voice Macros",
      tagline: "Standardize complex compliance disclosures with flawless audio playback.",
      icon: "🎙️",
      bullets: [
        "Verbatim, pre-recorded voice macros in the agent's natural converted accent",
        "Admin-controlled team-wide configuration for regulatory scripts",
        "One-click playback during live calls that frees agents from reading repetitive paragraphs",
        "Guaranteed 100% compliance delivery for financial and healthcare mandates",
        "Instantly applied across thousands of seats with zero extra telephony configuration"
      ],
      previewImg: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_artboard_ma_7.png"
    },
    {
      id: "captions",
      title: "Live Captions",
      tagline: "Never miss a customer detail even over distorted or low-bandwidth lines.",
      icon: "📺",
      bullets: [
        "Real-time stream of incoming customer speech rendered on the agent's desktop",
        "Ultra-robust transcription that filters out customer background noise",
        "High accuracy on difficult alphanumeric codes, serial numbers, and postal addresses",
        "One-click scrollback so agents can verify customer details without asking them to repeat",
        "Zero lag synchronization alongside the live audio stream"
      ],
      previewImg: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_artboard_ma_8.png"
    }
  ];

  const benefits = [
    {
      title: "Increased FCR",
      desc: "Helps agents resolve complex inquiries on the first attempt with instant knowledge answers.",
      metric: "+25% First Call Resolution"
    },
    {
      title: "Lower AHT",
      desc: "Empowers faster answers and cuts wrap-up time in half with automated AI Call Summaries.",
      metric: "-35% After-Call Work"
    },
    {
      title: "Higher CSAT & ESAT",
      desc: "Stress-free, well-guided interactions create happier customers and reduce agent burnout.",
      metric: "+18% CSAT Lift"
    },
    {
      title: "More Efficient Workflows",
      desc: "Eliminates repetitive manual typing by auto-populating CRM fields and action item lists.",
      metric: "100% CRM Record Hygiene"
    },
    {
      title: "Continuous Agent Growth",
      desc: "Objective coaching feedback delivered after every call to support consistent team performance.",
      metric: "Personalized Coaching"
    }
  ];

  const softphones = [
    "Genesys Cloud", "Amazon Connect", "Five9", "Avaya", "Cisco Webex", "NICE inContact", "Talkdesk", "Zendesk Talk"
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
            Live In-Call Guidance &amp; ACW Automation
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold text-[#131032] leading-[1.15] max-w-4xl mx-auto mb-6">
            AI Agent Assist <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#614efa] to-[#16a9ff]">
              for Call Centers
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#525069] max-w-3xl mx-auto leading-relaxed mb-8">
            Krisp AI Agent Assist supports agents across the call lifecycle with real-time answers, smart summaries, and coaching feedback—driving faster resolution and better experiences.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <Button variant="primary" href="/contact-sales" className="h-[48px] px-8 text-sm sm:text-base font-bold">
              Book a demo
            </Button>
            <Button variant="dark" href="/signup" className="h-[48px] px-8 text-sm sm:text-base font-bold">
              Start 14-day trial
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-semibold text-[#525069] pt-4 border-t border-[#ededf0] max-w-3xl mx-auto">
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-500 font-bold">✓</span> Zero telephony integration required
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-500 font-bold">✓</span> Real-time contextual knowledge retrieval
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-500 font-bold">✓</span> Automatic after-call summaries &amp; PII redaction
            </span>
          </div>
        </div>
      </section>

      {/* 2. KEY FEATURES INTERACTIVE DEEP DIVE */}
      <section className="py-24 bg-white border-b border-[#f4f4f5]" id="works">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#614efa]">
              Core Functionality
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#131032]">
              Key Features
            </h2>
            <p className="text-sm sm:text-base text-[#525069]">
              Engineered to sit discreetly on the agent desktop, providing help exactly when needed.
            </p>
          </div>

          {/* Feature Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto mb-12">
            {features.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFeature(f.id)}
                className={`p-3.5 rounded-xl text-center transition-all ${
                  activeFeature === f.id
                    ? "bg-[#614efa] text-white shadow-md font-bold"
                    : "bg-[#fafafb] text-[#525069] border border-[#e7e7ea] hover:bg-[#f0f0f4] text-xs font-semibold"
                }`}
              >
                <div className="text-lg mb-1">{f.icon}</div>
                <div className="text-xs sm:text-sm">{f.title}</div>
              </button>
            ))}
          </div>

          {/* Active Feature Display Card */}
          {(() => {
            const feat = features.find((f) => f.id === activeFeature) || features[0];
            return (
              <div className="bg-[#fafafc] rounded-3xl border border-[#e7e7ea] p-8 sm:p-12 shadow-sm max-w-5xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-7 space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#f4f2ff] text-[#614efa] text-xs font-bold">
                      <span>{feat.icon}</span>
                      <span>{feat.title}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#131032]">
                      {feat.tagline}
                    </h3>
                    <ul className="space-y-3 pt-2 text-xs sm:text-sm text-[#525069]">
                      {feat.bullets.map((b, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <img
                            src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_checkmark_purple.svg"
                            alt="Checkmark"
                            className="w-4 h-4 flex-shrink-0 mt-0.5"
                          />
                          <span className="leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-5 flex justify-center">
                    <div className="rounded-2xl overflow-hidden border border-[#e7e7ea] bg-white p-3 shadow-md max-w-sm w-full">
                      <img
                        src={feat.previewImg}
                        alt={feat.title}
                        className="w-full h-auto object-contain rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* 3. HOW CALL CENTERS BENEFIT */}
      <section className="py-24 bg-[#e8faf6]/40 border-b border-[#c8f2e7]" id="benefits">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#008065]">
              Measurable Outcomes
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#131032]">
              How call centers benefit from AI Agent Assist
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {benefits.slice(0, 3).map((b, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-white border border-[#b8eee0] shadow-sm space-y-3">
                <div className="text-xs font-extrabold px-2.5 py-1 rounded bg-[#e8faf6] text-[#008065] w-fit">
                  {b.metric}
                </div>
                <h3 className="text-xl font-bold text-[#131032]">{b.title}</h3>
                <p className="text-xs sm:text-sm text-[#525069] leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {benefits.slice(3).map((b, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-white border border-[#b8eee0] shadow-sm space-y-3">
                <div className="text-xs font-extrabold px-2.5 py-1 rounded bg-[#e8faf6] text-[#008065] w-fit">
                  {b.metric}
                </div>
                <h3 className="text-xl font-bold text-[#131032]">{b.title}</h3>
                <p className="text-xs sm:text-sm text-[#525069] leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. AUTO-INTEGRATION WITH ALL SOFTPHONES */}
      <section className="py-20 bg-white border-b border-[#f4f4f5]" id="apps">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 text-center space-y-8">
          <div className="max-w-3xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#131032]">
              Auto-integration with all Softphone platforms
            </h2>
            <p className="text-base text-[#525069] leading-relaxed">
              Krisp acts as a “smart” layer between the agent’s headset and any softphone to eliminate all background noise, convert accent, speech-translate, and transcribe calls with a single click.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            {softphones.map((sp, idx) => (
              <span
                key={idx}
                className="px-5 py-2.5 rounded-xl bg-[#fafafb] border border-[#e7e7ea] text-xs sm:text-sm font-bold text-[#131032] shadow-xs"
              >
                {sp}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ENTERPRISE SECURITY & PII MASKING */}
      <section className="py-24 bg-[#fafafc]" id="security">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#614efa]">Security &amp; Governance</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#131032]">
              Built with powerful, enterprise-grade security in mind
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 rounded-2xl bg-white border border-[#e7e7ea] space-y-4">
              <h3 className="text-xl font-bold text-[#131032]">Governance</h3>
              <ul className="space-y-3 text-xs sm:text-sm text-[#525069]">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>Quick, easy silent deployment to all computers at once via MSI</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>Centralized user access, provisioning, and license management</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>Consolidated billing and usage analytics dashboards</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>Email, OAuth 2.0, Okta, and SAML SSO verification</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#e7e7ea] space-y-4">
              <h3 className="text-xl font-bold text-[#131032]">Privacy &amp; Security</h3>
              <ul className="space-y-3 text-xs sm:text-sm text-[#525069]">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>No raw audio stored or exposed to external servers</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>GDPR compliant &amp; SOC 2 Type II certified</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>HIPAA compliant &amp; PCI-DSS 4.0 accredited</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>Automated PII/PCI masking before note generation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM BANNER */}
      <section className="py-20 bg-gradient-to-r from-[#18113c] via-[#2f1f70] to-[#18113c] text-white text-center" id="last">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Learn more about how your company can benefit from AI Agent Assist
          </h2>
          <p className="text-base sm:text-lg text-indigo-200 max-w-2xl mx-auto">
            Equip every frontline specialist with AI co-pilot superpowers on their very next call.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" href="/contact-sales" className="h-[48px] px-8 text-base font-bold">
              Book a demo
            </Button>
            <Button variant="dark" href="/signup" className="h-[48px] px-8 text-base font-bold">
              Start 14-day trial
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
