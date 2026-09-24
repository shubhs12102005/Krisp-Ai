import React from "react";
import Button from "../../components/common/Button";
import PrivacySection from "../../components/sections/PrivacySection";

/**
 * Call Center AI - Voice Translation Independent Page.
 * Real-time voice-to-voice translation allowing single-language agents to support multilingual global callers.
 */
export default function VoiceTranslation() {
  const translationPillars = [
    {
      title: "Real-Time Speech-to-Speech",
      desc: "Instantaneous translation streams bidirectionally between agent and customer with sub-second delay.",
      badge: "<1.2s Latency"
    },
    {
      title: "Tone & Emotion Preservation",
      desc: "Transfers the agent's empathy, warmth, and respectful cadence into the translated speech audio.",
      badge: "Natural Cadence"
    },
    {
      title: "Overcome Global Hiring Bottlenecks",
      desc: "Stop struggling to recruit scarce bilingual agents in expensive markets. Enable your existing talent to serve any language.",
      badge: "5x Talent Pool"
    },
    {
      title: "Enterprise Dialect & Domain Glossaries",
      desc: "Integrate specialized technical, medical, or financial terminology to ensure accurate compliance translations.",
      badge: "Custom Lexicons"
    }
  ];

  return (
    <div className="py-20 md:py-28 bg-[#fafafb]">
      <div className="krisp-container">
        {/* Hero Section */}
        <div className="max-w-[800px] mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f4f4f5] text-[#5544dc] text-[13px] font-bold mb-6">
            🌐 Live AI Voice Translation
          </div>
          <h1 className="text-[38px] md:text-[54px] font-bold leading-[1.15] text-[#131032] mb-6">
            Real-Time Voice Translation <br />
            <span className="gradient-purple">for Contact Center Agents</span>
          </h1>
          <p className="text-[18px] md:text-[20px] text-[#525069] leading-[32px] mb-8">
            Empower every agent to speak directly with customers in their native language with natural tone, zero robotic artifacts, and minimal conversational latency.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" href="/contact-sales" className="h-[48px] px-8 text-[15px]">
              Explore Voice Translation
            </Button>
            <Button variant="outline" href="/contact-sales" className="h-[48px] px-8 text-[15px]">
              Request Live Demo
            </Button>
          </div>
        </div>

        {/* Translation Flow Architecture Graphic */}
        <div className="max-w-[900px] mx-auto bg-white rounded-[24px] p-8 md:p-12 border border-[#e7e7ea] shadow-md mb-24 text-center">
          <div className="text-[20px] font-bold text-[#131032] mb-8">
            How Krisp Real-Time Voice Translation Works
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="p-6 rounded-[16px] bg-[#f7f7f8] border border-[#e7e7ea]">
              <div className="text-[16px] font-bold text-[#131032] mb-2">Caller Speaks</div>
              <div className="text-[13px] text-[#757585]">French, Spanish, German, Japanese, or Portuguese</div>
            </div>
            <div className="text-[#614efa] font-extrabold text-[24px]">
              ⇄ Krisp Voice AI ⇄
            </div>
            <div className="p-6 rounded-[16px] bg-[#f7f7f8] border border-[#e7e7ea]">
              <div className="text-[16px] font-bold text-[#131032]">Agent Hears &amp; Speaks</div>
              <div className="text-[13px] text-[#757585]">English with instant bidirectional translation</div>
            </div>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto mb-24">
          {translationPillars.map((feat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[20px] p-8 border border-[#e7e7ea] shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">
                <span className="px-3 py-1 rounded-full bg-[#e8faf6] border border-[#cef4ec] text-[#008065] text-[12px] font-bold">
                  {feat.badge}
                </span>
              </div>
              <h3 className="text-[20px] font-bold text-[#131032] mb-3">
                {feat.title}
              </h3>
              <p className="text-[15px] leading-[26px] text-[#525069]">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>

        <PrivacySection />
      </div>
    </div>
  );
}
