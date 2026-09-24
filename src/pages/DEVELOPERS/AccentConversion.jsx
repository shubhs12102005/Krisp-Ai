import React from "react";
import Button from "../../components/common/Button";

/**
 * Developers - Accent Conversion SDK Independent Page.
 * Real-time streaming voice conversion SDK for VoIP apps, telecommunication platforms, and gaming chat.
 */
export default function AccentConversion() {
  const sdkSpecs = [
    {
      title: "Streaming Low Latency (<120ms)",
      desc: "Processes 20ms audio frames continuously with zero conversational delay, making it indistinguishable from local acoustic processing.",
      metric: "<120ms Total Latency"
    },
    {
      title: "Multi-Source Accent Models",
      desc: "Pre-trained neural models converting Indian, Filipino, Latin American, and Eastern European accents into clear General American English.",
      metric: "Global Accent Coverage"
    },
    {
      title: "Preserves Intonation & Pitch",
      desc: "Our neural acoustic synthesis preserves user vocal timbre, emotion, and prosody without robotic artifacts or timbre shifts.",
      metric: "MOS Score 4.5+"
    },
    {
      title: "Lightweight Edge or Cloud Deployment",
      desc: "Ship as an on-device dynamic library (.dll / .dylib / .so) or run in high-throughput containerized cloud media pipelines.",
      metric: "Edge & Server"
    }
  ];

  return (
    <div className="py-20 md:py-28 bg-white">
      <div className="krisp-container">
        {/* Hero Section */}
        <div className="max-w-[800px] mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f4f4f5] text-[#5544dc] text-[13px] font-bold mb-6">
            🛠️ Real-Time Accent Conversion SDK
          </div>
          <h1 className="text-[38px] md:text-[54px] font-bold leading-[1.15] text-[#131032] mb-6">
            Embed Accent Conversion <br />
            <span className="gradient-purple">Directly Into Your Audio Apps</span>
          </h1>
          <p className="text-[18px] md:text-[20px] text-[#525069] leading-[32px] mb-8">
            Empower your communication platforms, VoIP softphones, and collaborative games with real-time accent neutralization models via native C++ and WebRTC bindings.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" href="https://trust.krisp.ai" external className="h-[48px] px-8 text-[15px]">
              Request SDK Evaluation Key
            </Button>
            <Button variant="outline" href="/contact-sales" className="h-[48px] px-8 text-[15px]">
              Explore Architecture Docs
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
              <span className="ml-2 text-white/80">accent_pipeline.cpp</span>
            </div>
            <span>C++ Native SDK</span>
          </div>

          <pre className="overflow-x-auto text-[#dfdcfe] leading-[26px]">
{`#include <krisp_accent.h>

// Initialize streaming accent conversion model
KrispAccentEngine* engine = krisp_create_accent_engine(
    KRISP_MODEL_ACCENT_EN_US,
    SAMPLE_RATE_16KHZ,
    FRAME_DURATION_20MS
);

// Process real-time PCM audio buffer
void OnAudioFrame(int16_t* in_pcm, int16_t* out_pcm, size_t sample_count) {
    krisp_process_accent(engine, in_pcm, out_pcm, sample_count);
}`}
          </pre>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto mb-20">
          {sdkSpecs.map((spec, idx) => (
            <div
              key={idx}
              className="bg-[#f7f7f8] rounded-[20px] p-8 border border-[#e7e7ea] hover:shadow-md transition-shadow"
            >
              <div className="text-[13px] font-bold text-[#614efa] bg-[#f4f2ff] border border-[#dcd7fe] px-3 py-1 rounded-full inline-block mb-4">
                {spec.metric}
              </div>
              <h3 className="text-[20px] font-bold text-[#131032] mb-3">
                {spec.title}
              </h3>
              <p className="text-[15px] leading-[26px] text-[#525069]">
                {spec.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
