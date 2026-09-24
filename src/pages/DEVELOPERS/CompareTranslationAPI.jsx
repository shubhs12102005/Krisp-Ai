import React from "react";
import Button from "../../components/common/Button";

/**
 * Developers - Compare Translation API Independent Page.
 * Side-by-side technical benchmark comparing latency, BLEU accuracy, and voice naturalness against industry providers.
 */
export default function CompareTranslationAPI() {
  const benchmarks = [
    {
      metric: "End-to-End Latency",
      krisp: "850 ms",
      providerA: "2,400 ms",
      providerB: "3,100 ms",
      advantage: "65% Faster Response"
    },
    {
      metric: "Voice Naturalness (MOS 1-5)",
      krisp: "4.6 / 5.0",
      providerA: "3.8 / 5.0",
      providerB: "3.9 / 5.0",
      advantage: "Highest Acoustic Realism"
    },
    {
      metric: "Voice Timbre Preservation",
      krisp: "Yes (Zero-Shot)",
      providerA: "Generic AI Voice",
      providerB: "Limited Pre-Sets",
      advantage: "Preserves Speaker Identity"
    },
    {
      metric: "Acoustic Echo & Noise Resilience",
      krisp: "Built-In #1 Noise Cancellation",
      providerA: "Requires Pre-Cleaned Audio",
      providerB: "Fails on Background Chatter",
      advantage: "Handles Real-World Calls"
    },
    {
      metric: "Self-Serve Developer Portal",
      krisp: "Instant Signup & Keys",
      providerA: "Sales Gate Only",
      providerB: "Enterprise Contract",
      advantage: "Start in 60 Seconds"
    }
  ];

  return (
    <div className="py-20 md:py-28 bg-white">
      <div className="krisp-container">
        {/* Hero Section */}
        <div className="max-w-[800px] mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f4f4f5] text-[#5544dc] text-[13px] font-bold mb-6">
            📊 Objective Technical Benchmarks
          </div>
          <h1 className="text-[38px] md:text-[54px] font-bold leading-[1.15] text-[#131032] mb-6">
            Compare Real-Time Voice <br />
            <span className="gradient-purple">Translation Providers</span>
          </h1>
          <p className="text-[18px] md:text-[20px] text-[#525069] leading-[32px] mb-8">
            See how Krisp's sub-second streaming voice translation API compares against major cloud hyperscalers and legacy speech-to-speech providers.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" href="https://trust.krisp.ai" external className="h-[48px] px-8 text-[15px]">
              Run Live Benchmark
            </Button>
            <Button variant="outline" href="/contact-sales" className="h-[48px] px-8 text-[15px]">
              Download Evaluation Dataset
            </Button>
          </div>
        </div>

        {/* Benchmark Table */}
        <div className="max-w-[1000px] mx-auto bg-[#fafafb] border border-[#e7e7ea] rounded-[24px] overflow-hidden shadow-sm mb-20">
          <div className="grid grid-cols-5 bg-[#f0f0f3] p-5 text-[14px] font-bold text-[#131032] border-b border-[#e7e7ea]">
            <div className="col-span-2">Evaluation Metric</div>
            <div className="text-center text-[#614efa]">Krisp AI</div>
            <div className="text-center text-[#757585]">Provider A</div>
            <div className="text-center text-[#757585]">Provider B</div>
          </div>

          <div className="divide-y divide-[#e7e7ea]">
            {benchmarks.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-5 p-5 text-[14px] items-center hover:bg-white transition-colors"
              >
                <div className="col-span-2">
                  <div className="font-bold text-[#131032]">{row.metric}</div>
                  <div className="text-[12px] text-[#008065] font-semibold mt-0.5">
                    ★ {row.advantage}
                  </div>
                </div>
                <div className="text-center font-bold text-[#614efa] bg-[#f4f2ff] py-2 px-3 rounded-[10px]">
                  {row.krisp}
                </div>
                <div className="text-center text-[#757585] py-2">
                  {row.providerA}
                </div>
                <div className="text-center text-[#757585] py-2">
                  {row.providerB}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
