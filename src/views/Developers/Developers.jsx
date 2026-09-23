import React from "react";
import Button from "../../components/common/Button";

export default function Developers() {
  const sdkFeatures = [
    {
      title: "Voice Isolation (VIVA 2.5)",
      badge: "New",
      desc: "Isolate the primary speaker's voice in noisy environments with high precision on-device AI models."
    },
    {
      title: "Turn-Taking Optimization",
      desc: "Solve speech overlap and interruptions for seamless human-to-AI voice assistant conversations."
    },
    {
      title: "Real-Time Voice Translation API",
      badge: "New",
      desc: "Self-serve ultra-low latency voice-to-voice translation API with preservation of natural tone."
    },
    {
      title: "Bidirectional Noise Cancellation SDK",
      desc: "Embed industry-leading noise and acoustic echo removal directly into desktop, mobile, or web applications."
    }
  ];

  return (
    <div className="py-20 md:py-28 bg-white">
      <div className="krisp-container">
        {/* Hero */}
        <div className="max-w-[780px] mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f4f4f5] text-[#5544dc] text-[13px] font-bold mb-6">
            ⚡ Developer Voice AI SDKs &amp; APIs
          </div>
          <h1 className="text-[38px] md:text-[54px] font-bold leading-[1.15] text-[#131032] mb-6">
            Build with the world’s <br />
            <span className="gradient-purple">#1 Voice AI Engine</span>
          </h1>
          <p className="text-[18px] md:text-[20px] text-[#525069] leading-[32px] mb-8">
            Empower your applications and AI voice agents with voice isolation, background suppression, accent conversion, and turn-taking models.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" href="https://trust.krisp.ai" external className="h-[48px] px-8 text-[15px]">
              Request SDK Access
            </Button>
            <Button variant="outline" href="/contact-sales" className="h-[48px] px-8 text-[15px]">
              Contact Developer Sales
            </Button>
          </div>
        </div>

        {/* Code Snippet Box */}
        <div className="max-w-[850px] mx-auto bg-[#131032] rounded-[20px] p-6 md:p-8 text-white shadow-2xl mb-20 font-mono text-[14px]">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 text-white/50 text-[12px]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#fe6257]"></span>
              <span className="w-3 h-3 rounded-full bg-[#f7b731]"></span>
              <span className="w-3 h-3 rounded-full bg-[#20bf6b]"></span>
              <span className="ml-2 text-white/70">krisp-voice-sdk.js</span>
            </div>
            <span>v2.5.0</span>
          </div>

          <pre className="overflow-x-auto text-[#dfdcfe] leading-[24px]">
{`import { KrispVoiceEngine } from "@krisp/voice-sdk";

// Initialize the Krisp Voice AI engine
const engine = await KrispVoiceEngine.create({
  model: "viva-2.5-voice-isolation",
  noiseCancellation: true,
  echoSuppression: true,
  turnTakingAssist: true
});

// Process incoming audio stream in real-time
const processedStream = await engine.processStream(userAudioStream);
console.log("Krisp Voice AI active: crystal-clear audio stream ready.");`}
          </pre>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto mb-20">
          {sdkFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="bg-[#f7f7f8] rounded-[20px] p-8 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-[20px] font-bold text-[#131032]">
                  {feat.title}
                </h3>
                {feat.badge && (
                  <span className="px-2 py-0.5 rounded-[8px] bg-[#e8faf6] border border-[#cef4ec] text-[#008065] text-[11px] font-bold">
                    {feat.badge}
                  </span>
                )}
              </div>
              <p className="text-[15px] leading-[26px] text-[#525069]">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
