import React from "react";
import Button from "../../components/common/Button";
import AudioDemoPlayer from "../../components/sections/AudioDemoPlayer";
import { audioDemos } from "../../utils/constants";
import PrivacySection from "../../components/sections/PrivacySection";

/**
 * Call Center AI Overview Page.
 * Comprehensive Voice AI suite designed specifically for BPOs and enterprise customer service centers.
 */
export default function CallCenterAI() {
  const ccPillars = [
    {
      title: "Real-Time Accent Conversion",
      desc: "Neutralizes regional accents on live customer calls, eliminating comprehension hurdles, repeat inquiries, and customer frustration.",
      icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_accent_conversion.svg",
      link: "/call-center-ai/accent-conversion"
    },
    {
      title: "Call Center Noise Cancellation",
      desc: "Eliminates overlapping agent chatter, supervisor announcements, keyboard clatter, and headset breathing on both ends.",
      icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_noise_cancellation.svg",
      link: "/call-center-ai/noise-cancellation"
    },
    {
      title: "Real-Time Voice Translation",
      desc: "Empowers contact center agents to converse fluidly in any customer's preferred native language with natural tone and sub-second delay.",
      icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_interpreter.svg",
      link: "/call-center-ai/voice-translation"
    },
    {
      title: "AI Agent Assist & Guidance",
      desc: "Live step-by-step troubleshooting recommendations, compliance checklist verification, and instant knowledge base retrieval.",
      icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_agent_assist.svg",
      link: "/call-center-ai/agent-assist"
    },
    {
      title: "Automated Speech Analytics",
      desc: "100% automated call QA scoring, compliance monitoring, and customer sentiment analytics across all recorded interactions.",
      icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_speech_analytics.svg",
      link: "/call-center-ai/speech-analytics"
    },
    {
      title: "Voice Security & Fraud Detection",
      desc: "Real-time acoustic biometric verification and deepfake / synthetic voice spoof detection during inbound calls.",
      icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_voice_security.svg",
      link: "/call-center-ai/voice-security"
    }
  ];

  const metrics = [
    { value: "+18%", label: "CSAT Score Improvement" },
    { value: "-12%", label: "Average Handle Time (AHT)" },
    { value: "99.4%", label: "Call Center Noise Suppressed" },
    { value: "100%", label: "Automated QA Call Coverage" }
  ];

  return (
    <div className="py-20 md:py-28 bg-[#fafafb]">
      <div className="krisp-container">
        {/* Hero Section */}
        <div className="max-w-[800px] mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#e8faf6] text-[#008065] text-[13px] font-bold mb-6">
            🎧 Enterprise Contact Center AI
          </div>
          <h1 className="text-[38px] md:text-[54px] font-bold leading-[1.15] text-[#131032] mb-6">
            Call Center AI <br />
            <span className="gradient-purple">that Boosts CSAT &amp; Agent Productivity</span>
          </h1>
          <p className="text-[18px] md:text-[20px] text-[#525069] leading-[32px] mb-8">
            Empower hundreds of thousands of customer service agents with real-time accent conversion, bidirectional noise cancellation, and automated agent assist.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" href="/contact-sales" className="h-[48px] px-8 text-[15px]">
              Schedule BPO Walkthrough
            </Button>
            <Button variant="dark" href="/contact-sales" className="h-[48px] px-8 text-[15px]">
              Calculate ROI
            </Button>
          </div>
        </div>

        {/* Impact Metrics Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[1100px] mx-auto mb-24">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[20px] p-6 text-center border border-[#e7e7ea] shadow-xs"
            >
              <div className="text-[36px] md:text-[44px] font-extrabold text-[#614efa] mb-1">
                {m.value}
              </div>
              <div className="text-[14px] font-semibold text-[#525069]">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Core Capabilities Grid */}
        <div className="mb-24">
          <div className="text-center max-w-[650px] mx-auto mb-14">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#131032] mb-4">
              Comprehensive Voice AI for Operations
            </h2>
            <p className="text-[17px] text-[#525069]">
              Built to operate seamlessly inside VDI, Citrix, Amazon Connect, Genesys, and Cisco environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
            {ccPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[20px] p-8 border border-[#e7e7ea] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <img src={pillar.icon} alt={pillar.title} className="w-10 h-10 mb-4" />
                  <h3 className="text-[20px] font-bold text-[#131032] mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-[15px] leading-[26px] text-[#525069] mb-6">
                    {pillar.desc}
                  </p>
                </div>
                <div>
                  <a
                    href={pillar.link}
                    className="inline-flex items-center text-[#614efa] hover:underline font-bold text-[14px]"
                  >
                    Learn more →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Accent Demo Player */}
        <div className="my-20">
          <h2 className="text-[30px] md:text-[38px] font-bold text-center text-[#131032] mb-8">
            Try Out Call Center Accent Conversion
          </h2>
          <AudioDemoPlayer
            demoConfig={audioDemos.accent}
            defaultTrack="manoj"
            isAccent={true}
          />
        </div>

        <PrivacySection />
      </div>
    </div>
  );
}
