import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button";

/**
 * Replicated Krisp Accent Conversion SDK Page (Faithful Replica of Krisp RTC Accent Conversion)
 */
export default function AccentConversion() {
  const [isConverted, setIsConverted] = useState(true);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const caseStudies = [
    {
      company: "TTEC",
      stat: "+85 NPS",
      title: "TTEC achieves 85+ NPS with Krisp Accent Conversion",
      desc: "By enabling real-time accent conversion across thousands of offshore agents, TTEC eliminated customer friction and miscommunication, driving dramatic CSAT and NPS improvements."
    },
    {
      company: "Movate",
      stat: "-15% AHT",
      title: "Movate reduces Average Handle Time and repeat inquiries",
      desc: "Offshore technical support engineers resolved billing and tech issues significantly faster because customers understood instructions on the very first try."
    },
    {
      company: "Arrivia",
      stat: "98% Clarity",
      title: "Arrivia levels up global travel booking CX",
      desc: "Travelers booking complex cruise and hotel packages experienced seamless, native-cadence conversations without any operational script changes."
    }
  ];

  const faqs = [
    {
      q: "Does Accent Conversion make the agent sound like a robot?",
      a: "No. Krisp's deep generative acoustic models are trained to preserve the speaker's natural vocal timbre, pitch variations, emotional warmth, and conversational rhythm. It only modifies phoneme articulation and dialect cadences, producing a natural, fluent voice."
    },
    {
      q: "What accents does the SDK convert from and to?",
      a: "The SDK converts non-native English dialects—including Indian, Filipino, Latin American, and Eastern European accents—into standardized neutral General American or British English, depending on deployment preference."
    },
    {
      q: "What is the processing latency?",
      a: "The algorithmic latency of the Krisp Accent Conversion model is under 30 milliseconds. It operates on real-time 20ms audio frames, making the conversation completely natural and interactive without conversational delay."
    },
    {
      q: "Does it run on client desktops or servers?",
      a: "Both. The Krisp RTC SDK is cross-platform. It can run as an on-device lightweight DSP library on Windows, macOS, or Linux agent desktops, or deploy in cloud media gateways (FreeSWITCH, Asterisk, WebRTC SFU/MCU)."
    },
    {
      q: "How does it handle background noise?",
      a: "Krisp Accent Conversion is coupled with our industry-leading Noise Cancellation and Background Voice Cancellation (BVC) engine, ensuring that ambient noise or office cross-talk is suppressed prior to accent transformation."
    }
  ];

  return (
    <div className="bg-[#fcfcfd] text-[#131032] overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 md:pt-20 pb-16 md:pb-24 border-b border-[#ececef] overflow-hidden">
        <div className="w-[calc(100%-48px)] max-w-[1240px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#5544dc]/30 bg-white/90 shadow-sm text-[13px] md:text-[14px] text-[#24232d] mb-8">
            <span className="font-bold text-[#5544dc] bg-[#5544dc]/10 px-2 py-0.5 rounded text-[11px] uppercase tracking-wider">
              RTC SDK
            </span>
            <span>Real-Time Accent Conversion SDK</span>
          </div>

          <h1 className="text-[38px] sm:text-[52px] md:text-[68px] font-extrabold tracking-tight leading-[1.08] text-[#131032] mb-6 max-w-[950px] mx-auto">
            Accent Conversion SDK. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#614efa] to-[#43c4fc] bg-clip-text text-transparent">
              Clear communication, anywhere.
            </span>
          </h1>

          <p className="text-[17px] md:text-[20px] text-[#525069] leading-[30px] md:leading-[34px] max-w-[760px] mx-auto mb-10">
            Converts call center agent accents to match customer native cadence in real-time streaming audio with zero latency overhead. Preserves speaker identity, emotion, pitch, and prosody.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              to="/contact-sales"
              className="w-full sm:w-auto h-[52px] px-8 bg-[#614efa] hover:bg-[#4a3bbe] text-white font-bold rounded-[12px] flex items-center justify-center transition-all shadow-lg shadow-[#614efa]/25 text-[15px]"
            >
              Request SDK Evaluation Key
            </Link>
            <Link
              to="/developers"
              className="w-full sm:w-auto h-[52px] px-8 bg-white border border-[#d8d8de] hover:border-[#131032] text-[#131032] font-bold rounded-[12px] flex items-center justify-center transition-all text-[15px]"
            >
              Explore All Developers SDKs
            </Link>
          </div>

          {/* Interactive Before/After Audio Comparison Console */}
          <div className="bg-[#131032] rounded-[28px] p-6 md:p-10 text-white max-w-[950px] mx-auto shadow-2xl border border-white/10 text-left mb-12">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#62c8ff] font-bold">
                  Interactive Audio Demo
                </span>
                <h3 className="text-[20px] font-bold text-white mt-1">
                  Agent Call Accent Transformation
                </h3>
              </div>

              {/* Accent Filter Toggle Switch */}
              <div className="flex items-center gap-3 bg-white/10 px-5 py-2 rounded-full border border-white/20">
                <span className="text-[13px] font-semibold text-white/80">Accent Conversion</span>
                <button
                  onClick={() => setIsConverted(!isConverted)}
                  className={`relative w-14 h-7 rounded-full transition-colors ${
                    isConverted ? "bg-[#614efa]" : "bg-white/20"
                  }`}
                >
                  <span
                    className={`absolute top-1 left-1 bg-white w-5 h-5 rounded-full transition-transform ${
                      isConverted ? "transform translate-x-7" : ""
                    }`}
                  />
                </button>
                <span className={`text-[12px] font-bold ${isConverted ? "text-[#62c8ff]" : "text-white/40"}`}>
                  {isConverted ? "ON" : "OFF"}
                </span>
              </div>
            </div>

            <div className="bg-white/5 rounded-[20px] p-6 border border-white/10 text-center">
              <div className="text-[16px] text-white font-semibold mb-2">
                {isConverted
                  ? "✓ Active: General American English Cadence (Zero Latency)"
                  : "⚠ Disabled: Original Regional Dialect"}
              </div>
              <p className="text-[13px] text-white/60 mb-6">
                "Thank you for contacting billing support, my name is Alex and I'd be glad to look into your recent transaction."
              </p>

              <div className="h-16 flex items-center justify-center gap-1.5 max-w-[600px] mx-auto">
                {Array.from({ length: 32 }).map((_, idx) => (
                  <span
                    key={idx}
                    className={`w-1.5 rounded-full transition-all duration-300 ${
                      isConverted ? "bg-[#62c8ff]" : "bg-[#f7b731]"
                    }`}
                    style={{ height: `${((idx * 19) % 70) + 25}%` }}
                  />
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between text-[12px] text-white/60">
              <span>✓ Human vocal timbre and emotion preserved 100%</span>
              <span>✓ Sub-30ms algorithmic latency</span>
              <span>✓ No robotic voice replacement</span>
            </div>
          </div>

          {/* 4 Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-[#e7e7ea] max-w-[900px] mx-auto">
            <div>
              <div className="text-[32px] md:text-[38px] font-extrabold text-[#131032]">+85 NPS</div>
              <div className="text-[11px] md:text-[12px] uppercase font-bold tracking-wider text-[#75738b] mt-1">
                Customer Satisfaction
              </div>
            </div>
            <div>
              <div className="text-[32px] md:text-[38px] font-extrabold text-[#131032]">-15% AHT</div>
              <div className="text-[11px] md:text-[12px] uppercase font-bold tracking-wider text-[#75738b] mt-1">
                Average Handle Time
              </div>
            </div>
            <div>
              <div className="text-[32px] md:text-[38px] font-extrabold text-[#131032]">&lt;30 ms</div>
              <div className="text-[11px] md:text-[12px] uppercase font-bold tracking-wider text-[#75738b] mt-1">
                Streaming Latency
              </div>
            </div>
            <div>
              <div className="text-[32px] md:text-[38px] font-extrabold text-[#131032]">98%</div>
              <div className="text-[11px] md:text-[12px] uppercase font-bold tracking-wider text-[#75738b] mt-1">
                First-Pass Clarity
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HOW CALL CENTERS BENEFIT */}
      <section className="py-20 md:py-28 bg-[#f7f7fa] border-b border-[#ececef]">
        <div className="w-[calc(100%-48px)] max-w-[1240px] mx-auto">
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <span className="text-[13px] font-bold uppercase tracking-wider text-[#614efa] bg-[#efeefa] px-3.5 py-1 rounded-full">
              Enterprise Benefits
            </span>
            <h2 className="text-[32px] md:text-[46px] font-extrabold text-[#131032] mt-4 mb-4">
              How call centers benefit from Accent Conversion
            </h2>
            <p className="text-[17px] text-[#525069]">
              Remove the friction of non-native accents without costly accent neutralization training programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-[24px] p-8 border border-[#e4e4eb] shadow-sm">
              <div className="w-12 h-12 rounded-[14px] bg-[#efeefa] text-[#614efa] flex items-center justify-center font-bold text-xl mb-6">
                01
              </div>
              <h3 className="text-[20px] font-bold text-[#131032] mb-3">Reduced cognitive load</h3>
              <p className="text-[15px] text-[#525069] leading-[26px]">
                Callers process familiar cadences effortlessly. No more straining to comprehend offshore representatives or asking for multiple repetitions.
              </p>
            </div>

            <div className="bg-white rounded-[24px] p-8 border border-[#e4e4eb] shadow-sm">
              <div className="w-12 h-12 rounded-[14px] bg-[#efeefa] text-[#614efa] flex items-center justify-center font-bold text-xl mb-6">
                02
              </div>
              <h3 className="text-[20px] font-bold text-[#131032] mb-3">Fewer clarifications</h3>
              <p className="text-[15px] text-[#525069] leading-[26px]">
                Complex alphanumeric strings, medical dosages, and financial accounts are understood immediately, driving down average handle time.
              </p>
            </div>

            <div className="bg-white rounded-[24px] p-8 border border-[#e4e4eb] shadow-sm">
              <div className="w-12 h-12 rounded-[14px] bg-[#efeefa] text-[#614efa] flex items-center justify-center font-bold text-xl mb-6">
                03
              </div>
              <h3 className="text-[20px] font-bold text-[#131032] mb-3">No operational changes</h3>
              <p className="text-[15px] text-[#525069] leading-[26px]">
                Agents speak naturally in their everyday voices. No artificial scripts, no accent training courses, and zero workflow disruption.
              </p>
            </div>
          </div>

          {/* Case Studies */}
          <div className="space-y-6">
            {caseStudies.map((cs, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[24px] p-8 border border-[#e4e4eb] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="max-w-[700px]">
                  <span className="text-[12px] font-bold uppercase tracking-wider text-[#614efa]">
                    {cs.company} Case Study
                  </span>
                  <h3 className="text-[22px] font-bold text-[#131032] mt-1 mb-2">{cs.title}</h3>
                  <p className="text-[15px] text-[#525069] leading-[24px]">{cs.desc}</p>
                </div>
                <div className="bg-[#efeefa] px-6 py-4 rounded-[16px] text-center flex-shrink-0">
                  <div className="text-[28px] font-black text-[#614efa]">{cs.stat}</div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#75738b] mt-0.5">
                    Measured Impact
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CODE INTEGRATION */}
      <section className="py-20 md:py-28 bg-white border-b border-[#ececef]">
        <div className="w-[calc(100%-48px)] max-w-[1240px] mx-auto">
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <span className="text-[13px] font-bold uppercase tracking-wider text-[#614efa] bg-[#efeefa] px-3.5 py-1 rounded-full">
              Developer Integration
            </span>
            <h2 className="text-[32px] md:text-[46px] font-extrabold text-[#131032] mt-4 mb-4">
              Embed with native C++ or WebRTC bindings
            </h2>
            <p className="text-[17px] text-[#525069]">
              Lightweight shared library with turnkey C/C++ headers and JavaScript WebAudio wrappers.
            </p>
          </div>

          <div className="bg-[#131032] rounded-[24px] p-6 md:p-8 text-white font-mono text-[13px] max-w-[900px] mx-auto shadow-2xl border border-white/10">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-white/50 text-[11px] mb-4">
              <span>krisp_accent_engine.cpp</span>
              <span>C++17 / WebRTC Core</span>
            </div>
            <pre className="overflow-x-auto text-[#dfdcfe] leading-[24px]">
{`#include <krisp_rtc_sdk.h>

// 1. Initialize the Krisp RTC accent conversion engine
KrispAccentEngineConfig config;
config.target_profile = KRISP_ACCENT_GENERAL_AMERICAN;
config.latency_mode = KRISP_LATENCY_ULTRA_LOW;

KrispAccentEngine* engine = krisp_create_accent_engine(&config);

// 2. Process real-time PCM audio in 20ms frames
void OnAudioFrame(const int16_t* in_pcm, int16_t* out_pcm, size_t num_samples) {
    krisp_process_accent_frame(engine, in_pcm, out_pcm, num_samples);
}

// 3. Release resources at call termination
krisp_destroy_accent_engine(engine);`}
            </pre>
          </div>
        </div>
      </section>

      {/* 4. FAQS ACCORDION */}
      <section className="py-20 md:py-28 bg-[#f7f7fa] border-b border-[#ececef]">
        <div className="w-[calc(100%-48px)] max-w-[850px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[44px] font-extrabold text-[#131032] mb-3">
              Frequently asked questions
            </h2>
            <p className="text-[17px] text-[#525069]">
              Technical and deployment details about Krisp Accent Conversion.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-[18px] border border-[#e2e2e8] overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-[16px] md:text-[18px] text-[#131032] hover:text-[#614efa] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className={`w-8 h-8 rounded-full bg-[#f4f4f7] flex items-center justify-center flex-shrink-0 text-xl transition-transform ${isOpen ? "rotate-45" : ""}`}>
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-[15px] text-[#525069] leading-[26px] border-t border-[#ececef] pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA BANNER */}
      <section className="py-20 bg-white">
        <div className="w-[calc(100%-48px)] max-w-[1240px] mx-auto">
          <div className="rounded-[32px] bg-gradient-to-r from-[#5544dc] via-[#614efa] to-[#43c4fc] p-8 md:p-16 text-white text-center shadow-xl">
            <div className="max-w-[700px] mx-auto">
              <h2 className="text-[32px] md:text-[48px] font-extrabold text-white mb-6 leading-[1.15]">
                Empower your agents with Accent Conversion.
              </h2>
              <p className="text-[17px] md:text-[19px] text-white/90 mb-10 leading-[30px]">
                Deliver clearer customer conversations and improve contact center NPS with Krisp RTC.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/contact-sales"
                  className="h-[52px] px-8 bg-white hover:bg-[#f0f0f4] text-[#131032] font-bold rounded-[12px] flex items-center justify-center transition-colors text-[15px] shadow-md"
                >
                  Request Accent Conversion SDK
                </Link>
                <Link
                  to="/developers"
                  className="h-[52px] px-8 bg-white/20 hover:bg-white/30 border border-white/40 text-white font-bold rounded-[12px] flex items-center justify-center transition-colors text-[15px]"
                >
                  Back to Developers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
