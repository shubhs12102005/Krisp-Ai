import React from "react";
import Button from "../../components/common/Button";
import AudioDemoPlayer from "../../components/sections/AudioDemoPlayer";
import { audioDemos } from "../../utils/constants";
import IntegrationsSection from "../../components/sections/IntegrationsSection";

/**
 * AI Meeting Assistant - Accent Conversion Independent Page.
 * Specialized for cross-border team collaboration, speaker-side & listener-side meeting clarity.
 */
export default function AccentConversion() {
  const accentMeetingFeatures = [
    {
      title: "Speaker-Side Conversion",
      desc: "Speak naturally in your native cadence. Krisp adapts your pronunciation to neutral international English in real-time.",
      badge: "Real-Time AI"
    },
    {
      title: "Listener-Side Conversion",
      desc: "Struggling to follow an accented teammate? Enable listener-side conversion to clarify incoming speech for your ears only.",
      badge: "Private to You"
    },
    {
      title: "Preserves Your Unique Voice & Tone",
      desc: "Krisp converts accents without making you sound robotic. Your pitch, emotion, laughter, and personal voice identity stay intact.",
      badge: "Natural Voice"
    },
    {
      title: "Sub-150ms Processing",
      desc: "No lag or awkward conversation pauses. Speech streams seamlessly with instantaneous acoustic conversion.",
      badge: "Low Latency"
    }
  ];

  return (
    <div className="py-20 md:py-28 bg-white">
      <div className="krisp-container">
        {/* Hero Section */}
        <div className="max-w-[800px] mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f4f4f5] text-[#5544dc] text-[13px] font-bold mb-6">
            🌐 AI Accent Conversion
          </div>
          <h1 className="text-[38px] md:text-[54px] font-bold leading-[1.15] text-[#131032] mb-6">
            Clear Communication <br />
            <span className="gradient-purple">Across Global Teams</span>
          </h1>
          <p className="text-[18px] md:text-[20px] text-[#525069] leading-[32px] mb-8">
            Krisp's breakthrough on-device AI transforms accents in real-time, helping international colleagues understand and be understood effortlessly.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" href="https://app.krisp.ai/sign-up" external className="h-[48px] px-8 text-[15px]">
              Try Accent AI Free
            </Button>
            <Button variant="outline" href="/contact-sales" className="h-[48px] px-8 text-[15px]">
              Request Team Access
            </Button>
          </div>
        </div>

        {/* Live Audio Demo Section */}
        <div className="my-16">
          <h2 className="text-[28px] md:text-[36px] font-bold text-center text-[#131032] mb-8">
            Experience Accent Conversion Live
          </h2>
          <AudioDemoPlayer
            demoConfig={audioDemos.accent}
            defaultTrack="manoj"
            isAccent={true}
          />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto my-24">
          {accentMeetingFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="bg-[#f7f7f8] rounded-[20px] p-8 border border-[#e7e7ea] hover:shadow-md transition-shadow"
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

        <IntegrationsSection />
      </div>
    </div>
  );
}
