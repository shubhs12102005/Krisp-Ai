import React from "react";
import Button from "../../components/common/Button";
import AudioDemoPlayer from "../../components/sections/AudioDemoPlayer";
import { audioDemos } from "../../utils/constants";
import PrivacySection from "../../components/sections/PrivacySection";

/**
 * Call Center AI - Noise Cancellation Independent Page.
 * Engineered for call center operations: agent floor noise, cross-talk suppression, VDI compatibility.
 */
export default function NoiseCancellation() {
  const ccNoiseFeatures = [
    {
      title: "Neighboring Agent Cross-Talk Suppression",
      desc: "Our acoustic deep neural network isolates the primary agent's voice, removing colleagues talking in adjacent cubes.",
      metric: "99.2% Voice Separation"
    },
    {
      title: "Optimized for Thin Clients & VDI",
      desc: "Runs with minimal RAM and CPU footprints inside virtual desktop environments including Citrix, VMware, and AWS WorkSpaces.",
      metric: "<1% Host CPU"
    },
    {
      title: "Inbound Customer Audio Enhancement",
      desc: "Cleans up callers calling from noisy streets, airport terminals, or speakerphones so agents never have to ask 'Could you repeat that?'.",
      metric: "-15% Repeat Contacts"
    },
    {
      title: "Instant Audio Hardware Agnostic",
      desc: "Deploy across existing USB headsets without purchasing costly noise-canceling hardware or upgrading physical desks.",
      metric: "$0 Hardware Upgrades"
    }
  ];

  return (
    <div className="py-20 md:py-28 bg-[#fafafb]">
      <div className="krisp-container">
        {/* Hero Section */}
        <div className="max-w-[800px] mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f4f4f5] text-[#5544dc] text-[13px] font-bold mb-6">
            🔇 Call Center Acoustic Isolation
          </div>
          <h1 className="text-[38px] md:text-[54px] font-bold leading-[1.15] text-[#131032] mb-6">
            Eliminate Call Center Floor Noise <br />
            <span className="gradient-purple">&amp; Neighboring Chatter</span>
          </h1>
          <p className="text-[18px] md:text-[20px] text-[#525069] leading-[32px] mb-8">
            Krisp filters out background chatter, keyboard clicks, and caller disturbances from every contact center seat, improving AHT and first-contact resolution.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" href="/contact-sales" className="h-[48px] px-8 text-[15px]">
              Deploy to Contact Center
            </Button>
            <Button variant="outline" href="/contact-sales" className="h-[48px] px-8 text-[15px]">
              Request VDI Benchmark
            </Button>
          </div>
        </div>

        {/* Live Audio Comparison Player */}
        <div className="my-16">
          <h2 className="text-[28px] md:text-[36px] font-bold text-center text-[#131032] mb-8">
            Experience Call Center Noise Removal
          </h2>
          <AudioDemoPlayer
            demoConfig={audioDemos.noise}
            defaultTrack="remote-work"
          />
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto my-24">
          {ccNoiseFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[20px] p-8 border border-[#e7e7ea] shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-[13px] font-bold text-[#008065] bg-[#e8faf6] border border-[#cef4ec] px-3 py-1 rounded-full inline-block mb-4">
                {feat.metric}
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
