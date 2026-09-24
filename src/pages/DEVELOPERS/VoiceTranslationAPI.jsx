import React from "react";
import Button from "../../components/common/Button";

/**
 * Developers - Voice Translation API Independent Page.
 * Self-serve streaming WebSocket & REST API for bidirectional voice-to-voice translation.
 */
export default function VoiceTranslationAPI() {
  const apiFeatures = [
    {
      title: "Streaming WebSocket Protocol",
      desc: "Stream raw PCM audio chunks via duplex WebSockets and receive synthesized, translated voice audio with low latency.",
      badge: "Real-Time WSS"
    },
    {
      title: "Voice Timbre & Emotion Preservation",
      desc: "Our neural zero-shot voice cloning engine preserves speaker identity and warmth across linguistic boundaries.",
      badge: "Zero-Shot Cloning"
    },
    {
      title: "Self-Serve Developer Portal",
      desc: "Generate API keys instantly, view live request logs, and monitor token and concurrency usage from a unified dashboard.",
      badge: "Instant API Key"
    },
    {
      title: "Built-In Domain Terminology Glossaries",
      desc: "Pass custom phrase dictionaries with every session to guarantee accurate translation of brand names and industry terms.",
      badge: "Custom Glossaries"
    }
  ];

  return (
    <div className="py-20 md:py-28 bg-white">
      <div className="krisp-container">
        {/* Hero Section */}
        <div className="max-w-[800px] mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f4f4f5] text-[#5544dc] text-[13px] font-bold mb-6">
            ✨ Voice Translation API
          </div>
          <h1 className="text-[38px] md:text-[54px] font-bold leading-[1.15] text-[#131032] mb-6">
            Real-Time Voice-to-Voice <br />
            <span className="gradient-purple">Translation API</span>
          </h1>
          <p className="text-[18px] md:text-[20px] text-[#525069] leading-[32px] mb-8">
            Build multilingual voice experiences. Stream live speech into our API and receive natural, speaker-attributed translated voice audio in real time.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" href="https://trust.krisp.ai" external className="h-[48px] px-8 text-[15px]">
              Get Free API Key
            </Button>
            <Button variant="outline" href="/contact-sales" className="h-[48px] px-8 text-[15px]">
              View API Documentation
            </Button>
          </div>
        </div>

        {/* Code Snippet Box */}
        <div className="max-w-[850px] mx-auto bg-[#131032] rounded-[24px] p-6 md:p-8 text-white shadow-2xl mb-24 font-mono text-[14px] border border-white/10">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 text-white/50 text-[12px]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#fe6257]"></span>
              <span className="w-3 h-3 rounded-full bg-[#f7b731]"></span>
              <span className="w-3 h-3 rounded-full bg-[#20bf6b]"></span>
              <span className="ml-2 text-white/80">streaming_translation.js</span>
            </div>
            <span>WebSocket Client</span>
          </div>

          <pre className="overflow-x-auto text-[#dfdcfe] leading-[26px]">
{`const ws = new WebSocket("wss://api.krisp.ai/v1/voice-translation");

ws.onopen = () => {
  ws.send(JSON.stringify({
    action: "start_session",
    sourceLanguage: "es-ES",
    targetLanguage: "en-US",
    preserveVoiceTimbre: true
  }));
};

// Stream microphone PCM chunks
micStream.on("data", (chunk) => ws.send(chunk));

// Play back incoming translated voice audio
ws.onmessage = (event) => audioPlayer.play(event.data);`}
          </pre>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto mb-20">
          {apiFeatures.map((feat, idx) => (
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
      </div>
    </div>
  );
}
