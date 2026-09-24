import React from "react";
import Button from "../../components/common/Button";
import PrivacySection from "../../components/sections/PrivacySection";

/**
 * Call Center AI - Agent Assist Independent Page.
 * Real-time co-pilot guidance, next-best-action prompts, and script compliance for frontline reps.
 */
export default function AgentAssist() {
  const assistCapabilities = [
    {
      title: "Live Next-Best-Action Prompts",
      desc: "Krisp listens to caller intent and dynamically suggests resolving steps, links, and troubleshooting flows in real time.",
      icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_agent_assist.svg"
    },
    {
      title: "Script & Compliance Monitoring",
      desc: "Live checklist verification ensures agents provide mandatory disclosures, verify security questions, and follow company SOPs.",
      icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_speech_analytics.svg"
    },
    {
      title: "Instant Knowledge Retrieval",
      desc: "Surfaces relevant policy docs, warranty terms, and billing articles automatically so agents spend zero seconds searching manuals.",
      icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_note_taker.svg"
    },
    {
      title: "Real-Time Sentiment Alerts",
      desc: "Notifies agents and supervisors when customer frustration begins to rise, offering de-escalation tips before calls go south.",
      icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_transcription.svg"
    }
  ];

  return (
    <div className="py-20 md:py-28 bg-[#fafafb]">
      <div className="krisp-container">
        {/* Hero Section */}
        <div className="max-w-[800px] mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f4f4f5] text-[#5544dc] text-[13px] font-bold mb-6">
            🤖 AI Agent Assist
          </div>
          <h1 className="text-[38px] md:text-[54px] font-bold leading-[1.15] text-[#131032] mb-6">
            Live AI Guidance <br />
            <span className="gradient-purple">for Frontline Support Agents</span>
          </h1>
          <p className="text-[18px] md:text-[20px] text-[#525069] leading-[32px] mb-8">
            Empower agents to resolve complex customer issues faster with instant knowledge surfacing, real-time sentiment alerts, and automated call summaries.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" href="/contact-sales" className="h-[48px] px-8 text-[15px]">
              Request Agent Assist Demo
            </Button>
            <Button variant="outline" href="/contact-sales" className="h-[48px] px-8 text-[15px]">
              View ROI Whitepaper
            </Button>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto mb-24">
          {assistCapabilities.map((feat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[20px] p-8 border border-[#e7e7ea] shadow-sm hover:shadow-md transition-shadow"
            >
              <img src={feat.icon} alt={feat.title} className="w-10 h-10 mb-4" />
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
