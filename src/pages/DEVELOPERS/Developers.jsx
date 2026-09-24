import React from "react";
import Button from "../../components/common/Button";

/**
 * Developers Overview Page.
 * Central hub for Voice AI SDKs and APIs including VIVA Voice Isolation, Turn-Taking, and Audio DSP models.
 */
export default function Developers() {
  const sdkOfferings = [
    {
      title: "Voice Isolation (VIVA 2.5)",
      badge: "New",
      desc: "Isolates the target speaker's voice in noisy environments without training or enrollment. Ideal for Voice AI agents and speech-to-text frontends.",
      link: "/developers/voice-isolation"
    },
    {
      title: "Turn-Taking Optimization",
      desc: "Solves human-to-AI interruptions, speech overlap, and acoustic echo for conversational Voice AI bots and voice agents.",
      link: "/developers/turn-taking"
    },
    {
      title: "Noise Cancellation SDK",
      desc: "Embed industry-standard noise suppression directly into desktop, mobile, embedded, or WebRTC streaming apps.",
      link: "/developers/noise-cancellation"
    },
    {
      title: "Accent Conversion SDK",
      desc: "Ultra-low latency streaming audio accent conversion for human-to-human communications.",
      link: "/developers/accent-conversion"
    },
    {
      title: "Voice Translation API",
      badge: "New",
      desc: "Developer-friendly REST and WebSocket streaming voice-to-voice translation API with sub-second turnaround.",
      link: "/developers/voice-translation-api"
    },
    {
      title: "Compare Translation APIs",
      desc: "Benchmark latency, BLEU translation scores, and acoustic naturalness side-by-side against major providers.",
      link: "/developers/compare-translation-api"
    }
  ];

  const platforms = [
    { name: "WebRTC & WebAudio", icon: "🌐" },
    { name: "Windows (C++ / C#)", icon: "🪟" },
    { name: "macOS & iOS (Swift / Obj-C)", icon: "🍎" },
    { name: "Android (NDK / Java)", icon: "🤖" },
    { name: "Linux & Docker", icon: "🐧" },
    { name: "Python & Node.js", icon: "⚡" }
  ];

  return (
    <div className="py-20 md:py-28 bg-white">
      <div className="krisp-container">
        {/* Hero Section */}
        <div className="max-w-[800px] mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f4f4f5] text-[#5544dc] text-[13px] font-bold mb-6">
            ⚡ Developer Voice AI Models
          </div>
          <h1 className="text-[38px] md:text-[54px] font-bold leading-[1.15] text-[#131032] mb-6">
            Build with the World’s <br />
            <span className="gradient-purple">#1 Voice AI Engine</span>
          </h1>
          <p className="text-[18px] md:text-[20px] text-[#525069] leading-[32px] mb-8">
            Integrate world-class voice isolation, turn-taking, and noise suppression directly into your apps and AI voice agents with sub-15ms latency.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" href="https://trust.krisp.ai" external className="h-[48px] px-8 text-[15px]">
              Request SDK Trial
            </Button>
            <Button variant="outline" href="/contact-sales" className="h-[48px] px-8 text-[15px]">
              Talk to Developer Sales
            </Button>
          </div>
        </div>

        {/* Code Snippet Demonstration */}
        <div className="max-w-[850px] mx-auto bg-[#131032] rounded-[24px] p-6 md:p-8 text-white shadow-2xl mb-24 font-mono text-[14px] border border-white/10">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 text-white/50 text-[12px]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#fe6257]"></span>
              <span className="w-3 h-3 rounded-full bg-[#f7b731]"></span>
              <span className="w-3 h-3 rounded-full bg-[#20bf6b]"></span>
              <span className="ml-2 text-white/80">quickstart.js</span>
            </div>
            <span>v2.5.0 • WebRTC</span>
          </div>

          <pre className="overflow-x-auto text-[#dfdcfe] leading-[26px]">
{`import { KrispVoiceEngine } from "@krisp/voice-sdk";

// Initialize the Krisp Voice AI engine
const engine = await KrispVoiceEngine.create({
  model: "viva-2.5-voice-isolation",
  noiseCancellation: true,
  echoSuppression: true,
  turnTakingAssist: true
});

// Process incoming mic audio stream in real-time
const processedStream = await engine.processStream(userAudioStream);
console.log("Krisp Voice AI active: crystal-clear audio stream ready.");`}
          </pre>
        </div>

        {/* SDK Offerings Grid */}
        <div className="mb-24">
          <div className="text-center max-w-[650px] mx-auto mb-14">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#131032] mb-4">
              Voice AI Models &amp; APIs
            </h2>
            <p className="text-[17px] text-[#525069]">
              Engineered for both human-to-human communications and next-generation conversational Voice AI agents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
            {sdkOfferings.map((sdk, idx) => (
              <div
                key={idx}
                className="bg-[#f7f7f8] rounded-[20px] p-8 border border-[#e7e7ea] hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-[20px] font-bold text-[#131032]">
                      {sdk.title}
                    </h3>
                    {sdk.badge && (
                      <span className="px-2.5 py-0.5 rounded-[8px] bg-[#e8faf6] border border-[#cef4ec] text-[#008065] text-[11px] font-bold">
                        {sdk.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-[15px] leading-[26px] text-[#525069] mb-6">
                    {sdk.desc}
                  </p>
                </div>
                <div>
                  <a
                    href={sdk.link}
                    className="inline-flex items-center text-[#614efa] hover:underline font-bold text-[14px]"
                  >
                    View model docs →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Supported Platforms */}
        <div className="bg-[#fafafb] rounded-[24px] p-8 md:p-14 border border-[#e7e7ea] max-w-[1100px] mx-auto mb-20 text-center">
          <h2 className="text-[26px] md:text-[34px] font-bold text-[#131032] mb-4">
            Runs Anywhere Audio Flows
          </h2>
          <p className="text-[16px] text-[#525069] mb-8 max-w-[600px] mx-auto">
            Native C++ libraries with lightweight bindings for every major runtime environment.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {platforms.map((p, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[16px] p-4 border border-[#e7e7ea] shadow-xs flex flex-col items-center justify-center text-center gap-2"
              >
                <span className="text-[24px]">{p.icon}</span>
                <span className="text-[13px] font-bold text-[#131032]">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
