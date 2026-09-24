import React from "react";
import Button from "../../components/common/Button";

/**
 * Developers - Voice Isolation (VIVA 2.5) Independent Page.
 * Primary voice isolation SDK for LLM Voice AI Agents, speech-to-text models, and high-noise environments.
 */
export default function VoiceIsolation() {
  const vivaFeatures = [
    {
      title: "Zero Voice Enrollment Required",
      desc: "Unlike legacy speaker verification, VIVA dynamically locks onto the primary near-field speaker within 150 milliseconds without prior audio training.",
      badge: "Instant Lock"
    },
    {
      title: "Eliminates Voice AI Hallucinations",
      desc: "Background chatter from colleagues or TVs won't accidentally trigger your LLM voice agent. Only the intentional speaker is processed.",
      badge: "Clean LLM Input"
    },
    {
      title: "Ultra-Low Algorithmic Latency",
      desc: "Engineered specifically for real-time conversational agents with latency under 15ms and sub-3% CPU usage on modern chips.",
      badge: "<15ms Latency"
    },
    {
      title: "Cross-Platform C++ & WebAssembly Core",
      desc: "Deploy on servers for cloud media processing or embed directly onto client devices for 100% offline edge privacy.",
      badge: "Edge & Cloud"
    }
  ];

  return (
    <div className="py-20 md:py-28 bg-white">
      <div className="krisp-container">
        {/* Hero Section */}
        <div className="max-w-[800px] mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f4f4f5] text-[#5544dc] text-[13px] font-bold mb-6">
            ✨ Introducing VIVA 2.5
          </div>
          <h1 className="text-[38px] md:text-[54px] font-bold leading-[1.15] text-[#131032] mb-6">
            Voice Isolation (VIVA) <br />
            <span className="gradient-purple">for Conversational Voice AI</span>
          </h1>
          <p className="text-[18px] md:text-[20px] text-[#525069] leading-[32px] mb-8">
            Isolate the primary speaker’s voice from background noise and neighboring voices in real-time. The missing audio frontend for Voice AI agents.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" href="https://trust.krisp.ai" external className="h-[48px] px-8 text-[15px]">
              Request VIVA 2.5 SDK
            </Button>
            <Button variant="outline" href="/contact-sales" className="h-[48px] px-8 text-[15px]">
              Read Benchmark Paper
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
              <span className="ml-2 text-white/80">viva_pipeline.py</span>
            </div>
            <span>Python SDK</span>
          </div>

          <pre className="overflow-x-auto text-[#dfdcfe] leading-[26px]">
{`import krisp_viva

# Initialize VIVA 2.5 Voice Isolation pipeline
pipeline = krisp_viva.create_pipeline(
    model="viva-2.5-edge",
    suppress_secondary_speakers=True,
    target_sample_rate=16000
)

# Stream live microphone buffer
def on_audio_chunk(raw_pcm_chunk):
    isolated_pcm = pipeline.process(raw_pcm_chunk)
    # Feed clean isolated speech directly into Whisper or LLM
    stt_stream.send(isolated_pcm)`}
          </pre>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto mb-20">
          {vivaFeatures.map((feat, idx) => (
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
