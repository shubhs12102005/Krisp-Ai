import React, { useState } from "react";
import Button from "../../components/common/Button";

/**
 * Voice Security for Contact Centers Page Replica
 * Source: https://krisp.ai/contact-center/voice-security/
 *
 * Full fidelity reproduction featuring:
 * 1. Hero with badge, heading, threat overview, and early access CTAs
 * 2. 4 Empirical Threat Statistics (40%+ undetected, 22x surge, $30M+ FBI losses, $40B projected)
 * 3. 3 Core Products & Threat Vectors (Deepfake Detection, Fraud Detection, Agent Voice Verification)
 * 4. Interactive In-Call Security Alert Simulation
 * 5. Why Krisp (CCaaS-Agnostic, Zero Infrastructure, Single Deployment)
 * 6. High-Risk Industries & Target Stakeholder Cards
 * 7. Bottom CTA banner
 */
export default function VoiceSecurity() {
  const [activeVector, setActiveVector] = useState("deepfake");
  const [isAlertTriggered, setIsAlertTriggered] = useState(false);

  const threatStats = [
    {
      stat: "40%+",
      title: "Cloned Voices Undetected",
      source: "UC Berkeley / Nature Scientific Reports, 2025",
      desc: "Contact center agents fail to differentiate AI-cloned voices from legitimate customer voices under typical call center conditions."
    },
    {
      stat: "22x",
      title: "Deepfake Surge in 3 Years",
      source: "Signicat Identity Platform, 2024",
      desc: "Exponential growth in consumer voice cloning tools has lowered the technical and financial barrier for organized crime rings."
    },
    {
      stat: "$30M+",
      title: "Lost to Voice Cloning in 2025",
      source: "FBI Internet Crime Complaint Center (IC3)",
      desc: "Reported direct losses from generative voice scams targeting banking authorizations, corporate wire transfers, and urgent family imposter scams."
    },
    {
      stat: "$40B",
      title: "Projected Gen-AI Losses by 2027",
      source: "Deloitte Center for Financial Services",
      desc: "Global financial fraud driven by generative synthetic audio and voice impersonation against commercial contact center operations."
    }
  ];

  const products = [
    {
      id: "deepfake",
      title: "Deepfake Detection",
      target: "Inbound Caller Audio",
      lead: "Real-time acoustic analysis of inbound audio to intercept synthetic and cloned voices.",
      desc: "Inbound caller audio is evaluated within the first 3 seconds of connection. Spectral micro-artifacts, unnatural breath cadences, and vocoder signatures trigger immediate desktop warning banners before account credentials or funds are released.",
      icon: "🤖",
      alertTitle: "SYNTHETIC VOICE DETECTED",
      alertDesc: "Acoustic fingerprint indicates 96.8% probability of Gen-AI voice clone. High-risk authentication verification required."
    },
    {
      id: "fraud",
      title: "Fraud Detection",
      target: "Conversation Semantics",
      lead: "Real-time linguistic and behavioral monitoring for social engineering tactics.",
      desc: "Monitors the live call transcript for high-pressure psychological manipulation, rapid SIM swap attempts, urgent bypass demands, and known fraudster phrasing playbooks. Notifies agents with recommended defensive verification steps.",
      icon: "🕵️",
      alertTitle: "SOCIAL ENGINEERING PATTERN DETECTED",
      alertDesc: "Caller exhibiting urgent bypass behavior and contradictory security answer attempts. Escalation protocol triggered."
    },
    {
      id: "verification",
      title: "Agent Voice Verification",
      target: "Agent Identity & Substitution",
      lead: "Continuous biometric voice authentication for remote and distributed contact center agents.",
      desc: "Continuously verifies that the speaking agent matches the enrolled biometric voice profile of the authorized employee. Eliminates illegal seat sharing, unvetted offshore contractor substitution, and ghost agent credential compromises.",
      icon: "👤",
      alertTitle: "AGENT IDENTITY VERIFIED",
      alertDesc: "Continuous biometric voice match: 99.2% confidence. Active session assigned to enrolled associate."
    }
  ];

  const targetAudiences = [
    {
      sector: "Financial Services",
      icon: "🏦",
      desc: "Contact centers authorizing wire transfers, account password resets, and high-value loan transactions where voice fraud leads to immediate capital losses."
    },
    {
      sector: "BPOs & Global Operations",
      icon: "🌐",
      desc: "Operations running across distributed work-from-home environments requiring absolute assurance that only authorized, background-checked staff take calls."
    },
    {
      sector: "Healthcare & Insurance",
      icon: "🏥",
      desc: "Regulated environments where caller impersonation for patient prescription access or policyholder benefits triggers severe HIPAA non-compliance penalties."
    },
    {
      sector: "Security & Fraud Teams",
      icon: "🛡️",
      desc: "CISO and enterprise risk teams that need agent-level voice security across heterogeneous telephony platforms without requiring a 6-month CCaaS overhaul."
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-200 bg-red-50 text-red-700 text-xs sm:text-sm font-bold mb-6">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
            Voice Security Deep Dive
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold text-[#131032] leading-[1.15] max-w-4xl mx-auto mb-6">
            Voice Security <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-[#614efa] to-[#16a9ff]">
              for contact centers
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#525069] max-w-3xl mx-auto leading-relaxed mb-8">
            Real-time protection against synthetic callers, social engineering, and agent identity fraud — with AI-powered voice security inside the Krisp platform your agents already use.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <Button variant="primary" href="/contact-sales" className="h-[48px] px-8 text-sm sm:text-base font-bold bg-red-600 hover:bg-red-700 border-none">
              Request early access
            </Button>
            <Button variant="dark" href="/contact-sales" className="h-[48px] px-8 text-sm sm:text-base font-bold">
              See it in action
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-semibold text-[#525069] pt-4 border-t border-[#ededf0] max-w-3xl mx-auto">
            <span className="flex items-center gap-1.5">
              <span className="text-red-500 font-bold">●</span> Inbound Deepfake Audio Detection
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-amber-500 font-bold">●</span> Social Engineering Interception
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-500 font-bold">●</span> Continuous Agent Biometric Verification
            </span>
          </div>
        </div>
      </section>

      {/* 2. THE THREAT (4 EMPIRICAL STATS) */}
      <section className="py-24 bg-white border-b border-[#f4f4f5]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600">
              The Threat
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#131032]">
              Voice fraud is a critical threat today
            </h2>
            <p className="text-base text-[#525069]">
              Voice cloning software costs $5 a month, and your contact center agents cannot reliably detect it with the naked ear.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {threatStats.map((s, idx) => (
              <div key={idx} className="p-7 rounded-2xl bg-[#fdfafb] border border-red-100 space-y-3">
                <div className="text-3xl sm:text-4xl font-extrabold text-red-600">{s.stat}</div>
                <h3 className="text-base font-bold text-[#131032]">{s.title}</h3>
                <p className="text-xs text-[#525069] leading-relaxed">{s.desc}</p>
                <div className="text-[11px] font-semibold text-[#8b7280] pt-2 border-t border-red-50">
                  {s.source}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THREE PRODUCTS. THREE THREAT VECTORS. */}
      <section className="py-24 bg-[#fafafc]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#614efa]">
              Comprehensive Defense
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#131032]">
              Three products. Three threat vectors.
            </h2>
            <p className="text-base text-[#525069]">
              Voice Security addresses the distinct attacks your voice channel faces: the caller&apos;s identity, the conversation content, and the agent&apos;s identity.
            </p>
          </div>

          {/* Product Nav Tabs */}
          <div className="flex justify-center gap-3 mb-12">
            {products.map((p) => (
              <button
                key={p.id}
                onClick={() => {
                  setActiveVector(p.id);
                  setIsAlertTriggered(false);
                }}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                  activeVector === p.id
                    ? "bg-[#18113c] text-white shadow-md"
                    : "bg-white text-[#525069] border border-[#e7e7ea] hover:bg-[#f0f0f4]"
                }`}
              >
                <span className="mr-1.5">{p.icon}</span> {p.title}
              </button>
            ))}
          </div>

          {/* Active Vector Deep Dive Card */}
          {(() => {
            const current = products.find((p) => p.id === activeVector) || products[0];
            return (
              <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-[#e7e7ea] p-8 sm:p-12 shadow-md">
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-[#f4f4f5]">
                    <div>
                      <div className="text-xs font-bold uppercase text-[#614efa] mb-1">
                        Vector: {current.target}
                      </div>
                      <h3 className="text-2xl font-bold text-[#131032]">{current.title}</h3>
                    </div>
                    <span className="text-3xl">{current.icon}</span>
                  </div>

                  <p className="text-base font-semibold text-[#131032] leading-snug">
                    {current.lead}
                  </p>
                  <p className="text-sm text-[#525069] leading-relaxed">
                    {current.desc}
                  </p>

                  {/* Interactive Alert Simulation */}
                  <div className="p-6 rounded-2xl bg-[#fafafc] border border-[#e7e7ea] space-y-4">
                    <div className="flex items-center justify-between text-xs font-bold text-[#757585]">
                      <span>Agent Desktop Alert Simulation</span>
                      <button
                        type="button"
                        onClick={() => setIsAlertTriggered(!isAlertTriggered)}
                        className="px-3 py-1 rounded-md bg-[#614efa] text-white hover:bg-[#4a3bbe] text-xs transition-colors"
                      >
                        {isAlertTriggered ? "Reset Simulation" : "Simulate Incoming Live Call Attack"}
                      </button>
                    </div>

                    {isAlertTriggered ? (
                      <div className="p-4 rounded-xl bg-red-50 border-2 border-red-500 animate-pulse space-y-1">
                        <div className="text-xs font-extrabold text-red-700 flex items-center gap-1.5">
                          <span>🚨</span> {current.alertTitle}
                        </div>
                        <div className="text-xs text-red-900 font-medium">
                          {current.alertDesc}
                        </div>
                      </div>
                    ) : (
                      <div className="p-4 rounded-xl bg-white border border-[#ededf0] text-xs text-[#757585] font-mono">
                        Call Connected • Inbound Audio Sampled • Latency: 42ms • Running continuous acoustic biometric verification...
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* 4. WHY KRISP (DAY ONE DEPLOYMENT) */}
      <section className="py-24 bg-white border-y border-[#f4f4f5]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#614efa]">
              Architecture Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#131032]">
              In your existing deployment, on day one
            </h2>
            <p className="text-base text-[#525069]">
              Voice Security runs inside the Krisp platform already deployed across your operation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#fafafb] border border-[#e7e7ea] space-y-3">
              <h3 className="text-xl font-bold text-[#131032]">CCaaS-Agnostic</h3>
              <p className="text-xs sm:text-sm text-[#525069] leading-relaxed">
                No complex telephony integration, carrier trunks, or SIP routing re-configurations. Works wherever Krisp runs, across all CCaaS environments.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#fafafb] border border-[#e7e7ea] space-y-3">
              <h3 className="text-xl font-bold text-[#131032]">Zero New Infrastructure</h3>
              <p className="text-xs sm:text-sm text-[#525069] leading-relaxed">
                Enabled by simple policy configuration on the Krisp agent desktop client. No hardware appliances or multi-month engineering projects.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#fafafb] border border-[#e7e7ea] space-y-3">
              <h3 className="text-xl font-bold text-[#131032]">Three Threats, One Platform</h3>
              <p className="text-xs sm:text-sm text-[#525069] leading-relaxed">
                Deepfake callers, conversational social engineering, and unauthorized agent substitution — covered completely from a single unified pane.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHO IT IS FOR (HIGH-RISK VERTICALS) */}
      <section className="py-24 bg-[#fafafc]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#614efa]">
              Risk Focus
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#131032]">
              Built for where voice fraud carries the most risk
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetAudiences.map((aud, idx) => (
              <div key={idx} className="p-7 rounded-2xl bg-white border border-[#e7e7ea] space-y-3 shadow-xs">
                <div className="text-3xl">{aud.icon}</div>
                <h3 className="text-lg font-bold text-[#131032]">{aud.sector}</h3>
                <p className="text-xs sm:text-sm text-[#525069] leading-relaxed">{aud.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BOTTOM BANNER */}
      <section className="py-20 bg-gradient-to-r from-[#18113c] via-[#2f1f70] to-[#18113c] text-white text-center">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Protect every call with Krisp Voice Security
          </h2>
          <p className="text-base sm:text-lg text-indigo-200 max-w-2xl mx-auto">
            Schedule a briefing with our security researchers and reserve your organization&apos;s early access evaluation.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" href="/contact-sales" className="h-[48px] px-8 text-base font-bold bg-red-600 hover:bg-red-700 border-none">
              Request early access
            </Button>
            <Button variant="dark" href="/contact-sales" className="h-[48px] px-8 text-base font-bold">
              Schedule Security Briefing
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
