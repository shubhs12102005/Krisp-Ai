import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button";

/**
 * Call Center AI Main Replica Page
 * Source: https://krisp.ai/contact-center/
 *
 * Full fidelity reproduction featuring:
 * 1. Hero with badge, heading, live demo triggers, CTAs, and background art
 * 2. Enterprise contact center & BPO trusted logos
 * 3. Real-time voice AI platform architecture overview (Speech Assist vs Voice Governance)
 * 4. ROI Impact metric statistics (NPS, FCR, ESAT, Cost reduction)
 * 5. Why call centers choose Krisp (4 capability pillars)
 * 6. Interactive Solutions Showcase with Audio & Language Demos
 * 7. Enterprise-grade Security & Governance breakdown
 * 8. Contact center leadership testimonials (Everise, Arrivia, iContact, TTEC)
 * 9. Case studies & featured CX content
 * 10. High-conversion bottom CTA banner
 */
export default function CallCenterAI() {
  // Solutions interactive tab state
  const [activeSolutionIdx, setActiveSolutionIdx] = useState(0);

  // Demo audio player state
  const [isPlayingNoise, setIsPlayingNoise] = useState(false);
  const [isNoiseCancelled, setIsNoiseCancelled] = useState(true);
  const [activeNoiseType, setActiveNoiseType] = useState("call-center");

  const [isPlayingAccent, setIsPlayingAccent] = useState(false);
  const [isAccentConverted, setIsAccentConverted] = useState(true);
  const [activeAccentLang, setActiveAccentLang] = useState("manoj");

  const [activeTransLang, setActiveTransLang] = useState("es");

  const bpoLogos = [
    { name: "TTEC", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_siemens.svg" },
    { name: "Everise", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/alorica_logo.svg" },
    { name: "Arrivia", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_servicetitan.svg" },
    { name: "iContact", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_okta.svg" },
    { name: "Skechers", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_sketchers.svg" },
    { name: "Autodesk", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_autodesk.svg" }
  ];

  const solutions = [
    {
      id: "noise",
      eyebrow: "01 / SPEECH ASSIST",
      title: "AI Noise Cancellation",
      tagline: "Remove overlapping floor chatter, keystrokes, and acoustic echo in real time.",
      desc: "Krisp filters bidirectional ambient noise at the hardware layer on agent laptops. With zero cloud dependency, call audio stays crystal clear on both ends.",
      link: "/call-center-ai/noise-cancellation",
      type: "noise-demo"
    },
    {
      id: "accent",
      eyebrow: "02 / SPEECH ASSIST",
      title: "AI Accent Conversion",
      tagline: "Dynamically convert agent accents into neutral American or British English.",
      desc: "Eliminates comprehension hurdles and repeat requests without robotic cadence. Agents preserve their natural emotion, intonation, and pitch.",
      link: "/call-center-ai/accent-conversion",
      type: "accent-demo"
    },
    {
      id: "translation",
      eyebrow: "03 / SPEECH ASSIST",
      title: "AI Voice Translation",
      tagline: "Enable any agent to handle live customer calls in 60+ languages.",
      desc: "Sub-second, speech-to-speech voice translation with custom enterprise glossaries, preserving the speaker's vocal characteristics.",
      link: "/call-center-ai/voice-translation",
      type: "trans-demo"
    },
    {
      id: "agent-assist",
      eyebrow: "04 / VOICE GOVERNANCE",
      title: "Agent Assist",
      tagline: "Real-time AI knowledge retrieval, live call transcription, and automated after-call work.",
      desc: "Guides agents through complex customer workflows, verifies compliance scripts in real time, and auto-generates CRM notes.",
      link: "/call-center-ai/agent-assist",
      type: "info",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_artboard_ma_5.png"
    },
    {
      id: "speech-analytics",
      eyebrow: "05 / VOICE GOVERNANCE",
      title: "Speech Analytics",
      tagline: "100% automated call QA scoring and compliance auditing across every call.",
      desc: "Move from inspecting 1-2% of calls to evaluating 100% of interactions automatically with configurable scorecards and sentiment analysis.",
      link: "/call-center-ai/speech-analytics",
      type: "info",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_artboard_ma_6.png"
    },
    {
      id: "voice-security",
      eyebrow: "06 / VOICE GOVERNANCE",
      title: "Voice Security",
      tagline: "Real-time protection against synthetic callers, audio deepfakes, and fraud.",
      desc: "Detect AI-generated synthetic speech, verify caller biometrics, and prevent account takeover attempts within the first few seconds of a call.",
      link: "/call-center-ai/voice-security",
      type: "info",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_artboard_ma_7.png"
    }
  ];

  const testimonials = [
    {
      quote: "We are proud to partner with Krisp to further our shared vision of amplifying the human touch with real-time AI.",
      author: "Sudhir Agarwal",
      role: "Founder and CEO at Everise",
      avatar: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/img_esther.png"
    },
    {
      quote: "Krisp creates wins for our customers, company, and team members. It enables higher-quality interactions, unlocks new opportunities for our agents, and drives real productivity gains.",
      author: "Travis Markel",
      role: "Chief Operating Officer at arrivia",
      avatar: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/img_esther.png"
    },
    {
      quote: "By removing background noise and reducing friction, Krisp allows our agents to focus fully on delivering empathy and high-quality service.",
      author: "David Hood",
      role: "COO at iContact",
      avatar: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/img_esther.png"
    },
    {
      quote: "Krisp's real-time Noise Cancellation and Accent Conversion strip away communication challenges so our associates can focus on what matters—resolutions with empathy.",
      author: "James Bednar",
      role: "VP, Product Management at TTEC",
      avatar: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/img_esther.png"
    }
  ];

  const caseStudies = [
    {
      tag: "Case Study",
      title: "TTEC achieves 85+ NPS with Krisp Accent Conversion",
      desc: "Accent Conversion helped TTEC cut language-barrier mentions by 54% and lift NPS from 74 to 85 — proving that clearer voices create stronger customer trust.",
      metric: "85+ NPS",
      link: "/customers"
    },
    {
      tag: "Strategic Partnership",
      title: "Krisp x Everise: Strategic Global AI Partnership",
      desc: "Everise scales Krisp's real-time voice intelligence layer across tens of thousands of global healthcare, retail, and tech support seats.",
      metric: "15,000+ Seats",
      link: "/customers"
    },
    {
      tag: "Enterprise Impact",
      title: "Arrivia levels up the CX game with Krisp",
      desc: "How travel club leader arrivia improved agent confidence, call comprehension, and customer satisfaction using real-time accent localization.",
      metric: "+18% CSAT",
      link: "/customers"
    }
  ];

  return (
    <div className="w-full bg-white text-[#131032] overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section
        id="hero"
        className="w-full relative pt-16 pb-20 md:pt-24 md:pb-28 px-4 sm:px-6 bg-cover bg-center border-b border-[#e7e7ea]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(247, 247, 248, 0.94), rgba(247, 247, 248, 0.96)), url(https://krisp.ai/wp-content/themes/krisp-v4/imgs//img_cc_bg_desktop.jpg)"
        }}
      >
        <div className="max-w-[1240px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#cef4ec] bg-[#e8faf6] text-[#008065] text-xs sm:text-sm font-bold mb-6 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#008065] animate-pulse" />
            Voice AI for Contact Centers &amp; BPOs
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold text-[#131032] leading-[1.15] max-w-4xl mx-auto mb-6">
            Voice AI for contact centers, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#614efa] to-[#16a9ff]">
              built for the real-world
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#525069] max-w-3xl mx-auto leading-relaxed mb-8">
            A real-time Voice AI layer on both sides of every call, overcoming accent and language barriers, eliminating noise, and providing 100% visibility into every interaction.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <Button variant="primary" href="/contact-sales" className="h-[48px] px-8 text-sm sm:text-base font-bold">
              Book a demo
            </Button>
            <Button variant="dark" href="/signup" className="h-[48px] px-8 text-sm sm:text-base font-bold">
              Start a 14-day trial
            </Button>
          </div>

          {/* Quick 2 min video preview link */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#525069] hover:text-[#131032] cursor-pointer transition-colors">
            <div className="w-6 h-6 rounded-full bg-[#614efa] flex items-center justify-center text-white text-[10px]">
              ▶
            </div>
            <span>Call Center AI overview (2 min watch)</span>
          </div>

          {/* Hero Softphone Architecture Graphic */}
          <div className="mt-14 max-w-4xl mx-auto bg-white/90 backdrop-blur-md rounded-2xl border border-[#e7e7ea] p-6 sm:p-8 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center">
              <div className="p-4 rounded-xl bg-[#f9f9fa] border border-[#ededf0]">
                <div className="text-xs uppercase font-bold text-[#757585] mb-1">Inbound / Outbound</div>
                <div className="text-base font-bold text-[#131032]">Customer Voice</div>
                <div className="text-xs text-[#525069] mt-1">Accent, noise &amp; language</div>
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-r from-[#614efa] to-[#4a3bbe] text-white shadow-lg relative">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#c7d2fe] mb-1">
                  Hardware Virtual Layer
                </div>
                <div className="text-lg font-extrabold">Krisp Voice AI Engine</div>
                <div className="text-xs text-indigo-100 mt-1">Bi-directional • &lt;10ms Latency • On-Device</div>
              </div>

              <div className="p-4 rounded-xl bg-[#f9f9fa] border border-[#ededf0]">
                <div className="text-xs uppercase font-bold text-[#757585] mb-1">CCaaS &amp; Softphones</div>
                <div className="text-base font-bold text-[#131032]">Agent Headset</div>
                <div className="text-xs text-[#525069] mt-1">Genesys, Five9, Avaya, Cisco, AWS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUSTED LOGOS MARQUEE */}
      <section className="py-12 border-b border-[#f4f4f5] bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <p className="text-center text-xs uppercase tracking-wider font-semibold text-[#75738b] mb-8">
            Organizations worldwide trust us
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
            {bpoLogos.map((logo, idx) => (
              <img
                key={idx}
                src={logo.src}
                alt={logo.name}
                className="h-7 sm:h-8 w-auto object-contain hover:scale-105 transition-transform"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. REAL-TIME VOICE AI PLATFORM OVERVIEW (ARCHITECTURE) */}
      <section className="py-24 bg-[#fafafc]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#614efa]">
              Platform Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#131032]">
              Real-time voice AI platform for call centers
            </h2>
            <p className="text-base sm:text-lg text-[#525069]">
              Seamlessly integrates with all CCaaS and UCaaS platforms. The real-time Voice AI core stays at the center; Voice Governance adds intelligence and security across every call.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Left Pillar: Speech Assist */}
            <div className="bg-white rounded-2xl border border-[#e7e7ea] p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#f4f2ff] flex items-center justify-center text-[#614efa]">
                  <img src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_nav_cc.svg" alt="" className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#614efa]">SPEECH ASSIST</div>
                  <h3 className="text-xl font-bold text-[#131032]">Real-time, in every conversation</h3>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-[#fcfcff] border border-[#eeedf7]">
                  <div className="font-bold text-[#131032] mb-1">Accent Conversion</div>
                  <p className="text-xs sm:text-sm text-[#525069] leading-relaxed">
                    Agent Accent Conversion &amp; Customer Accent Conversion. Convert heavy regional accents into clear American or British English without losing conversational nuances.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#fcfcff] border border-[#eeedf7]">
                  <div className="font-bold text-[#131032] mb-1">Voice Translation</div>
                  <p className="text-xs sm:text-sm text-[#525069] leading-relaxed">
                    60+ languages with any-to-any pairing. Industry terminology customization, low-latency audio delivery, and native speech synthesis.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#fcfcff] border border-[#eeedf7]">
                  <div className="font-bold text-[#131032] mb-1">Noise Cancellation</div>
                  <p className="text-xs sm:text-sm text-[#525069] leading-relaxed">
                    Eliminates background floor chatter, supervisor announcements, barking dogs, fan hum, keyboard typing, and room echo bidirectionally.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Pillar: Voice Governance & Analytics */}
            <div className="bg-white rounded-2xl border border-[#e7e7ea] p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#e8faf6] flex items-center justify-center text-[#008065]">
                  <img src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_speech_analytics.svg" alt="" className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#008065]">AGENT &amp; SUPERVISOR ASSIST</div>
                  <h3 className="text-xl font-bold text-[#131032]">Voice Governance across every call</h3>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-[#f9fdfb] border border-[#d9f5ed]">
                  <div className="font-bold text-[#131032] mb-1">Agent Assist</div>
                  <p className="text-xs sm:text-sm text-[#525069] leading-relaxed">
                    Real-time knowledge retrieval, automated after-call summaries, and compliance macros that cut average handle time by 25%.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#f9fdfb] border border-[#d9f5ed]">
                  <div className="font-bold text-[#131032] mb-1">Speech Analytics</div>
                  <p className="text-xs sm:text-sm text-[#525069] leading-relaxed">
                    Automated post-call scoring on 100% of calls. Instant compliance violation alerts, agent coaching scorecards, and customer sentiment analytics.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#f9fdfb] border border-[#d9f5ed]">
                  <div className="font-bold text-[#131032] mb-1">Voice Security</div>
                  <p className="text-xs sm:text-sm text-[#525069] leading-relaxed">
                    Real-time acoustic deepfake detection, caller voice verification, and fraud interception at the very onset of the call.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 bg-[#18113c] rounded-2xl text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-bold mb-1">A Voice AI layer on top of every softphone</h4>
              <p className="text-sm text-[#c7d2fe]">
                Krisp sits between the agent&rsquo;s headset and your CCaaS/UCaaS stack — processing every call in real time, with no telephony integration required.
              </p>
            </div>
            <Link
              to="/contact-sales"
              className="px-6 py-3 rounded-lg bg-[#614efa] hover:bg-[#4a3bbe] text-white font-bold text-sm whitespace-nowrap shadow transition-colors"
            >
              Explore softphone support
            </Link>
          </div>
        </div>
      </section>

      {/* 4. METRICS / ROI IMPACT BOX */}
      <section className="py-20 bg-gradient-to-r from-[#18113c] via-[#241a52] to-[#18113c] text-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-4xl font-bold mb-3">
              Great customer experience starts with clear communication
            </h2>
            <p className="text-sm sm:text-base text-[#c7d2fe]">
              Measurable improvements across your core contact center KPI metrics.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { val: "99%", label: "Noise Suppressed", sub: "Floor chatter and acoustic echo" },
              { val: "25%", label: "Increase in FCR", sub: "First contact resolution" },
              { val: "25%", label: "Gain in Agent ESAT", sub: "Reduced cognitive fatigue" },
              { val: "30%", label: "Cost Reduction", sub: "Across training and operations" }
            ].map((m, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center backdrop-blur-sm">
                <div className="text-3xl sm:text-5xl font-extrabold text-[#614efa] mb-2">{m.val}</div>
                <div className="text-sm sm:text-base font-bold text-white mb-1">{m.label}</div>
                <div className="text-xs text-[#a5a3be]">{m.sub}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/contact-sales"
              className="inline-block px-8 py-3.5 rounded-lg bg-[#614efa] hover:bg-[#4a3bbe] text-white font-bold text-base shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Calculate your ROI
            </Link>
          </div>
        </div>
      </section>

      {/* 5. WHY CALL CENTERS CHOOSE KRISP (4 GOVERNED CARDS) */}
      <section className="py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#614efa]">
              Why call centers choose Krisp
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#131032]">
              One platform for clearer calls and now, trusted calls
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Clearer conversations, less friction",
                desc: "Eliminates language and noise friction in contact centers authorizing transactions, account changes, and credential resets.",
                icon: "🎧"
              },
              {
                title: "Support across full call lifecycle",
                desc: "Unified voice AI for operations running across geographies, distributed BPOs, and mixed onsite and remote working models.",
                icon: "🌐"
              },
              {
                title: "Know what's happening on every call",
                badge: "New",
                desc: "Automated call QA and compliance monitoring for regulated environments where omissions trigger liability.",
                icon: "📊"
              },
              {
                title: "Know who is on every call",
                badge: "New",
                desc: "Deepfake and synthetic voice detection for teams needing agent and caller protection without telephony rewiring.",
                icon: "🛡️"
              }
            ].map((c, i) => (
              <div
                key={i}
                className="p-7 rounded-2xl bg-[#fafafb] border border-[#e7e7ea] hover:border-[#614efa] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">{c.icon}</span>
                    {c.badge && (
                      <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-[#e8faf6] text-[#008065]">
                        {c.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-[#131032] mb-3">{c.title}</h3>
                  <p className="text-xs sm:text-sm text-[#525069] leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SOLUTIONS SHOWCASE WITH INTERACTIVE DEMOS */}
      <section className="py-24 bg-[#f9f9fb] border-y border-[#ececf0]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#614efa]">Solutions</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#131032]">
              Krisp solutions for call centers
            </h2>
          </div>

          {/* Solutions Nav Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-12">
            {solutions.map((sol, idx) => {
              const isActive = activeSolutionIdx === idx;
              return (
                <button
                  key={sol.id}
                  onClick={() => setActiveSolutionIdx(idx)}
                  className={`text-xs sm:text-sm font-bold py-2.5 px-4 rounded-xl transition-all ${
                    isActive
                      ? "bg-[#614efa] text-white shadow-md"
                      : "bg-white text-[#525069] hover:bg-[#f0f0f4] border border-[#e7e7ea]"
                  }`}
                >
                  {sol.title}
                </button>
              );
            })}
          </div>

          {/* Active Solution Container */}
          {(() => {
            const current = solutions[activeSolutionIdx] || solutions[0];
            return (
              <div className="bg-white rounded-3xl border border-[#e7e7ea] p-8 sm:p-12 shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-6 space-y-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#614efa]">
                      {current.eyebrow}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#131032]">
                      {current.title}
                    </h3>
                    <p className="text-base sm:text-lg font-medium text-[#131032] leading-snug">
                      {current.tagline}
                    </p>
                    <p className="text-sm sm:text-base text-[#525069] leading-relaxed">
                      {current.desc}
                    </p>
                    <div className="pt-2">
                      <Link
                        to={current.link}
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#614efa] hover:underline"
                      >
                        <span>Learn more about {current.title}</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>

                  {/* Interactive Demo Player Right Column */}
                  <div className="lg:col-span-6">
                    {current.type === "noise-demo" && (
                      <div className="bg-[#18113c] p-6 sm:p-8 rounded-2xl text-white shadow-md">
                        <div className="flex items-center justify-between mb-6">
                          <span className="text-xs uppercase tracking-wider font-bold text-[#c7d2fe]">
                            AI Noise Demo
                          </span>
                          <button
                            type="button"
                            onClick={() => setIsNoiseCancelled(!isNoiseCancelled)}
                            className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                              isNoiseCancelled ? "bg-emerald-500 text-white" : "bg-red-500 text-white"
                            }`}
                          >
                            {isNoiseCancelled ? "Krisp ON (Noise Filtered)" : "Krisp OFF (Raw Noise)"}
                          </button>
                        </div>

                        <div className="space-y-3 mb-6">
                          <div className="text-xs text-[#a5a3be]">Select background noise scenario:</div>
                          <div className="grid grid-cols-2 gap-2">
                            {[
                              { id: "call-center", label: "Contact Center Chatter" },
                              { id: "typing", label: "Keyboard Keystrokes" },
                              { id: "fan", label: "Air Conditioner & Fan" },
                              { id: "echo", label: "Room Echo & Reverb" }
                            ].map((n) => (
                              <button
                                key={n.id}
                                onClick={() => setActiveNoiseType(n.id)}
                                className={`p-2.5 text-xs rounded-lg text-left font-medium transition-colors ${
                                  activeNoiseType === n.id
                                    ? "bg-[#614efa] text-white"
                                    : "bg-white/10 text-indigo-100 hover:bg-white/15"
                                }`}
                              >
                                {n.label}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-white/10">
                          <button
                            type="button"
                            onClick={() => setIsPlayingNoise(!isPlayingNoise)}
                            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-[#18113c] font-bold text-xs hover:bg-[#f4f4f5] transition-colors"
                          >
                            <span>{isPlayingNoise ? "⏸ Pause Audio" : "▶ Play Sample"}</span>
                          </button>
                          <span className="text-xs text-indigo-200">
                            Status: {isPlayingNoise ? "Playing..." : "Ready"}
                          </span>
                        </div>
                      </div>
                    )}

                    {current.type === "accent-demo" && (
                      <div className="bg-[#18113c] p-6 sm:p-8 rounded-2xl text-white shadow-md">
                        <div className="flex items-center justify-between mb-6">
                          <span className="text-xs uppercase tracking-wider font-bold text-[#c7d2fe]">
                            Accent Conversion Demo
                          </span>
                          <button
                            type="button"
                            onClick={() => setIsAccentConverted(!isAccentConverted)}
                            className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                              isAccentConverted ? "bg-emerald-500 text-white" : "bg-red-500 text-white"
                            }`}
                          >
                            {isAccentConverted ? "Converted to US English" : "Original Regional Voice"}
                          </button>
                        </div>

                        <div className="space-y-3 mb-6">
                          <div className="text-xs text-[#a5a3be]">Agent persona output:</div>
                          <div className="grid grid-cols-2 gap-2">
                            {[
                              { id: "manoj", label: "Manoj (BPO Specialist)" },
                              { id: "ishika", label: "Ishika (Technical Support)" }
                            ].map((a) => (
                              <button
                                key={a.id}
                                onClick={() => setActiveAccentLang(a.id)}
                                className={`p-2.5 text-xs rounded-lg text-left font-medium transition-colors ${
                                  activeAccentLang === a.id
                                    ? "bg-[#614efa] text-white"
                                    : "bg-white/10 text-indigo-100 hover:bg-white/15"
                                }`}
                              >
                                {a.label}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-white/10">
                          <button
                            type="button"
                            onClick={() => setIsPlayingAccent(!isPlayingAccent)}
                            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-[#18113c] font-bold text-xs hover:bg-[#f4f4f5] transition-colors"
                          >
                            <span>{isPlayingAccent ? "⏸ Pause Audio" : "▶ Play Sample"}</span>
                          </button>
                          <span className="text-xs text-indigo-200">
                            Mode: {isAccentConverted ? "Neutral Accent" : "Original Accent"}
                          </span>
                        </div>
                      </div>
                    )}

                    {current.type === "trans-demo" && (
                      <div className="bg-[#18113c] p-6 sm:p-8 rounded-2xl text-white shadow-md">
                        <div className="text-xs uppercase tracking-wider font-bold text-[#c7d2fe] mb-4">
                          Speech-to-Speech Translation
                        </div>
                        <div className="grid grid-cols-2 gap-2 mb-6">
                          {[
                            { id: "es", pair: "EN <> ES", label: "English - Spanish" },
                            { id: "pt", pair: "EN <> PT-BR", label: "English - Portuguese" },
                            { id: "fr", pair: "EN <> FR", label: "English - French" },
                            { id: "ru", pair: "EN <> RU", label: "English - Russian" }
                          ].map((t) => (
                            <button
                              key={t.id}
                              onClick={() => setActiveTransLang(t.id)}
                              className={`p-3 rounded-lg text-left transition-all ${
                                activeTransLang === t.id
                                  ? "bg-[#614efa] text-white font-bold"
                                  : "bg-white/10 text-indigo-100 hover:bg-white/15 text-xs"
                              }`}
                            >
                              <div className="text-xs font-bold">{t.pair}</div>
                              <div className="text-[11px] text-indigo-200">{t.label}</div>
                            </button>
                          ))}
                        </div>
                        <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-indigo-100 space-y-1">
                          <p className="font-mono text-emerald-400">Agent speaks English → Customer hears Spanish</p>
                          <p className="font-mono text-sky-400">Customer replies in Spanish → Agent hears English</p>
                          <p className="text-[11px] text-indigo-300 pt-1">Latency: ~750ms • Voice timbre preserved</p>
                        </div>
                      </div>
                    )}

                    {current.type === "info" && current.img && (
                      <div className="rounded-2xl overflow-hidden border border-[#e7e7ea] bg-[#f9f9fb] p-4 flex items-center justify-center">
                        <img
                          src={current.img}
                          alt={current.title}
                          className="w-full max-w-[480px] h-auto object-contain rounded-xl"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* 7. ENTERPRISE-GRADE SECURITY & GOVERNANCE */}
      <section className="py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#614efa]">
              Enterprise Trust
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#131032]">
              Built with powerful, enterprise-grade security in mind
            </h2>
            <p className="text-base text-[#525069]">
              Certified compliance and complete operational control for mission-critical deployments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-[#fafafb] border border-[#e7e7ea] space-y-4">
              <h3 className="text-xl font-bold text-[#131032]">Governance</h3>
              <ul className="space-y-3 text-sm text-[#525069]">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>Zero connect time — no telephony call setup delays</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>Instant support for 60+ global languages &amp; dialects</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>No integration required with CX and voice platforms</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>Centralized MSI deployment &amp; MDM package support</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-[#fafafb] border border-[#e7e7ea] space-y-4">
              <h3 className="text-xl font-bold text-[#131032]">Privacy &amp; Security</h3>
              <ul className="space-y-3 text-sm text-[#525069]">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>No voice data visible to Krisp servers (on-device processing)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>SOC 2 Type II certified &amp; GDPR compliant</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>HIPAA compliant &amp; PCI-DSS 4.0 certified</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>TLS 1.3 in-transit and AES-256 at-rest encryption</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS FROM CONTACT CENTER LEADERS */}
      <section className="py-24 bg-[#f9f9fb] border-y border-[#ececf0]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#614efa]">
              From contact center teams
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#131032]">
              Trusted by global CX leaders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white border border-[#e7e7ea] shadow-sm flex flex-col justify-between"
              >
                <p className="text-base text-[#131032] italic leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#f4f4f5]">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-11 h-11 rounded-full object-cover border border-[#e7e7ea]"
                  />
                  <div>
                    <div className="text-sm font-bold text-[#131032]">{t.author}</div>
                    <div className="text-xs text-[#525069]">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FEATURED CASE STUDIES */}
      <section className="py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#614efa]">
              Featured Content
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#131032]">
              Proven impact in high-volume operations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((cs, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-[#fafafb] border border-[#e7e7ea] flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-[#614efa]">{cs.tag}</span>
                    <span className="text-xs font-extrabold px-2.5 py-1 rounded bg-[#e8faf6] text-[#008065]">
                      {cs.metric}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#131032] mb-3 leading-snug">{cs.title}</h3>
                  <p className="text-xs sm:text-sm text-[#525069] leading-relaxed mb-6">{cs.desc}</p>
                </div>
                <div>
                  <Link
                    to={cs.link}
                    className="text-xs font-bold text-[#614efa] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Read case study</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. BOTTOM BANNER */}
      <section className="py-20 bg-gradient-to-r from-[#18113c] via-[#2d2268] to-[#18113c] text-white text-center">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Start improving the agent and customer experience today.
          </h2>
          <p className="text-base sm:text-lg text-indigo-200 max-w-2xl mx-auto">
            Deploy Krisp across your contact center in minutes with no infrastructure changes.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" href="/contact-sales" className="h-[48px] px-8 text-base font-bold">
              Book a demo
            </Button>
            <Button variant="dark" href="/contact-sales" className="h-[48px] px-8 text-base font-bold">
              Calculate ROI
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
