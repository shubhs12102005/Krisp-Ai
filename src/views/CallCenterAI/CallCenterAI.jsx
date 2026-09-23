import React from "react";
import Button from "../../components/common/Button";
import AudioDemoPlayer from "../../components/sections/AudioDemoPlayer";
import { featureModel } from "../../models/featureModel";
import PrivacySection from "../../components/sections/PrivacySection";

export default function CallCenterAI() {
  const ccFeatures = [
    {
      title: "Real-Time Accent Conversion",
      desc: "Instantly converts agent accents to neutral native speech in real-time, improving comprehension and CSAT.",
      icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_accent_conversion.svg"
    },
    {
      title: "Call Center Noise Cancellation",
      desc: "Eliminate chatter from neighboring agents, keyboard typing, and background contact center hubbub.",
      icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_noise_cancellation.svg"
    },
    {
      title: "Real-Time Voice Translation",
      desc: "Empower multilingual call center agents to speak fluently across languages with low latency.",
      icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_interpreter.svg"
    },
    {
      title: "Agent Assist & Call Analytics",
      desc: "Live guidance, automated call scoring, script compliance monitoring, and customer sentiment analytics.",
      icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_agent_assist.svg"
    }
  ];

  return (
    <div className="py-20 md:py-28 bg-[#fafafb]">
      <div className="krisp-container">
        {/* Hero */}
        <div className="max-w-[780px] mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8faf6] text-[#008065] text-[13px] font-bold mb-6">
            🎧 Contact Center Solutions
          </div>
          <h1 className="text-[38px] md:text-[54px] font-bold leading-[1.15] text-[#131032] mb-6">
            Call Center AI <br />
            <span className="gradient-purple">that boosts productivity &amp; CSAT</span>
          </h1>
          <p className="text-[18px] md:text-[20px] text-[#525069] leading-[32px] mb-8">
            Transform customer support operations with real-time accent conversion, crystal-clear bidirectional noise cancellation, and automated agent assistance.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" href="/contact-sales" className="h-[48px] px-8 text-[15px]">
              Explore Platform
            </Button>
            <Button variant="dark" href="/contact-sales" className="h-[48px] px-8 text-[15px]">
              Book a Demo
            </Button>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-[1000px] mx-auto">
          {ccFeatures.map((feat, idx) => (
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

        {/* Accent Demo Player */}
        <div className="my-20">
          <h2 className="text-[32px] font-bold text-center text-[#131032] mb-8">
            Try Out Accent Conversion Live
          </h2>
          <AudioDemoPlayer
            demoConfig={featureModel.audioDemos.accent}
            defaultTrack="manoj"
            isAccent={true}
          />
        </div>

        <PrivacySection />
      </div>
    </div>
  );
}
