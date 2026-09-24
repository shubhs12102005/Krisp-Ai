import React from "react";
import Button from "../../components/common/Button";

/**
 * Developers - Noise Cancellation SDK Independent Page.
 * Industry-standard noise cancellation SDK trusted by Discord and millions of devices worldwide.
 */
export default function NoiseCancellation() {
  const dspFeatures = [
    {
      title: "Gold Standard Deep Neural Audio DSP",
      desc: "Trained on over 20,000 hours of diverse audio noise profiles to separate human speech from virtually any background disturbance.",
      spec: "#1 Industry Benchmark"
    },
    {
      title: "Extremely Low Resource Consumption",
      desc: "Consumes less than 1.5% CPU on a standard modern core and operates effortlessly on low-power ARM mobile and embedded chipsets.",
      spec: "<1.5% CPU Utilization"
    },
    {
      title: "Integrated Acoustic Echo Cancellation (AEC)",
      desc: "Full-duplex acoustic echo removal prevents feedback loops when users operate without headphones or headsets.",
      spec: "Full Duplex AEC"
    },
    {
      title: "Seamless WebRTC & Audio Pipeline Drop-In",
      desc: "Integrates directly into WebRTC audio processing pipelines, GStreamer, CoreAudio, and Windows WASAPI in under 50 lines of code.",
      spec: "50-Line Integration"
    }
  ];

  return (
    <div className="py-20 md:py-28 bg-white">
      <div className="krisp-container">
        {/* Hero Section */}
        <div className="max-w-[800px] mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f4f4f5] text-[#5544dc] text-[13px] font-bold mb-6">
            🎧 Industry-Leading Noise Cancellation SDK
          </div>
          <h1 className="text-[38px] md:text-[54px] font-bold leading-[1.15] text-[#131032] mb-6">
            Embed #1 Noise Cancellation <br />
            <span className="gradient-purple">Into Your Product</span>
          </h1>
          <p className="text-[18px] md:text-[20px] text-[#525069] leading-[32px] mb-8">
            The same award-winning noise suppression technology trusted by Discord, HP, and leading global telecommunication providers, available as a lightweight SDK.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" href="https://trust.krisp.ai" external className="h-[48px] px-8 text-[15px]">
              Start Free SDK Trial
            </Button>
            <Button variant="outline" href="/contact-sales" className="h-[48px] px-8 text-[15px]">
              Request Technical Datasheet
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
              <span className="ml-2 text-white/80">krisp_nc_webrtc.cpp</span>
            </div>
            <span>WebRTC Audio Track</span>
          </div>

          <pre className="overflow-x-auto text-[#dfdcfe] leading-[26px]">
{`#include <krisp_nc.h>

// Hook Krisp Noise Cancellation into WebRTC AudioProcessingModule
class KrispAudioCustomProcessor : public webrtc::CustomAudioProcessor {
public:
    void Process(webrtc::AudioBuffer* audio) override {
        float* const* channels = audio->channels_f();
        size_t num_frames = audio->num_frames();
        // Suppress room noise and keyboard clatter in 1 line
        krisp_nc_process(nc_instance_, channels[0], channels[0], num_frames);
    }
};`}
          </pre>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto mb-20">
          {dspFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="bg-[#f7f7f8] rounded-[20px] p-8 border border-[#e7e7ea] hover:shadow-md transition-shadow"
            >
              <div className="text-[13px] font-bold text-[#008065] bg-[#e8faf6] border border-[#cef4ec] px-3 py-1 rounded-full inline-block mb-4">
                {feat.spec}
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
