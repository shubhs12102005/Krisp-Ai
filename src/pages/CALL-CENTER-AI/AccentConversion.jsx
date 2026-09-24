import React from "react";
import Button from "../../components/common/Button";
import AudioDemoPlayer from "../../components/sections/AudioDemoPlayer";
import { audioDemos } from "../../utils/constants";
import PrivacySection from "../../components/sections/PrivacySection";

/**
 * Call Center AI - Accent Conversion Independent Page.
 * Real-time accent neutralization tailored for BPO frontline agents and customer service operations.
 */
export default function AccentConversion() {
  const bpoAccentBenefits = [
    {
      title: "Eliminate Repeat Explanations",
      desc: "Callers immediately understand agents on the first sentence, cutting down on conversational drag and lowering Average Handle Time.",
      metric: "-18% AHT Reduction"
    },
    {
      title: "Boost Customer CSAT & Net Promoter Scores",
      desc: "Remove cognitive strain and accent bias, resulting in warmer customer interactions and higher post-call survey ratings.",
      metric: "+24% CSAT Lift"
    },
    {
      title: "Lower Agent Burnout & Churn",
      desc: "Protect offshore agents from frustrated callers, aggressive misunderstandings, and unnecessary escalation transfers.",
      metric: "+30% Agent Retention"
    },
    {
      title: "Preserves Authentic Voice Identity",
      desc: "Transforms regional pronunciation while preserving the agent's natural timbre, rhythm, and warmth—no robotic voice cloning.",
      metric: "Natural Speech"
    }
  ];

  return (
    <div className="py-20 md:py-28 bg-[#fafafb]">
      <div className="krisp-container">
        {/* Hero Section */}
        <div className="max-w-[800px] mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#e8faf6] text-[#008065] text-[13px] font-bold mb-6">
            🗣️ Frontline Accent Conversion
          </div>
          <h1 className="text-[38px] md:text-[54px] font-bold leading-[1.15] text-[#131032] mb-6">
            Real-Time Accent Conversion <br />
            <span className="gradient-purple">for Call Center Operations</span>
          </h1>
          <p className="text-[18px] md:text-[20px] text-[#525069] leading-[32px] mb-8">
            Krisp instantly converts offshore agent accents to clear, familiar pronunciation during live calls, empowering agents and delighting customers.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" href="/contact-sales" className="h-[48px] px-8 text-[15px]">
              Request BPO Pilot Program
            </Button>
            <Button variant="outline" href="/contact-sales" className="h-[48px] px-8 text-[15px]">
              Speak to a Solutions Engineer
            </Button>
          </div>
        </div>

        {/* Live Audio Accent Player */}
        <div className="my-16">
          <h2 className="text-[28px] md:text-[36px] font-bold text-center text-[#131032] mb-8">
            Listen to Real-Time Voice Conversion
          </h2>
          <AudioDemoPlayer
            demoConfig={audioDemos.accent}
            defaultTrack="manoj"
            isAccent={true}
          />
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto my-24">
          {bpoAccentBenefits.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[20px] p-8 border border-[#e7e7ea] shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-[13px] font-bold text-[#614efa] bg-[#f4f2ff] border border-[#dcd7fe] px-3 py-1 rounded-full inline-block mb-4">
                {item.metric}
              </div>
              <h3 className="text-[20px] font-bold text-[#131032] mb-3">
                {item.title}
              </h3>
              <p className="text-[15px] leading-[26px] text-[#525069]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <PrivacySection />
      </div>
    </div>
  );
}
