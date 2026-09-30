import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button";

/**
 * Replicated Krisp Noise Cancellation SDK Page (Faithful Replica of Krisp RTC Noise Cancellation)
 */
export default function NoiseCancellation() {
  const [isFiltered, setIsFiltered] = useState(true);
  const [selectedNoise, setSelectedNoise] = useState("keyboard");
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const noiseScenarios = {
    keyboard: {
      name: "Mechanical Keyboard",
      desc: "Loud clicky tactile keystrokes at 80 words per minute right next to the mic."
    },
    cafe: {
      name: "Busy Coffee Shop",
      desc: "Espresso machine steam, background chatter, and clattering cups and cutlery."
    },
    dog: {
      name: "Dog Barking",
      desc: "Sudden high-energy acoustic barking in home office environments."
    },
    traffic: {
      name: "Street & Traffic Noise",
      desc: "Vehicle engines, sirens, and wind rush on mobile cellular calls."
    }
  };

  const capabilities = [
    {
      title: "Outbound Noise Cancellation",
      subtitle: "Uplink / Microphone Stream",
      desc: "Strips background noise from the user's microphone before transmission. Removes dog barking, lawn mowers, kitchen clatter, and typing clicks without speech distortion."
    },
    {
      title: "Inbound Noise Cancellation",
      subtitle: "Downlink / Speaker Stream",
      desc: "Cleans noisy incoming calls received from mobile phones, PSTN landlines, or airports. Intelligently allows telephone ringtones and dial tones to pass through."
    },
    {
      title: "Background Voice Cancellation (BVC)",
      subtitle: "Secondary Speaker Muting",
      desc: "Eliminates other human voices talking near the primary speaker. Perfect for contact center floors, trading desks, and bustling open-plan offices. No enrollment needed."
    },
    {
      title: "Room Echo De-Reverberation",
      subtitle: "Acoustic Reflection Removal",
      desc: "Eliminates hollow acoustic room bounce and hollow reverb when speaking in glass conference rooms, tiled offices, or unfurnished spaces."
    }
  ];

  const faqs = [
    {
      q: "How does Krisp achieve sub-15ms latency?",
      a: "The Krisp deep neural network operates on lightweight temporal convolutional layers optimized for streaming SIMD instructions (AVX2, NEON, SSE). It processes 10ms–20ms audio frames continuously with zero future lookahead buffer."
    },
    {
      q: "Does Krisp require speaker voice enrollment?",
      a: "No. Unlike legacy biometric voice prints that require a 30-second reading sample, Krisp Background Voice Cancellation dynamically tracks and locks onto the near-field primary speaker automatically within the first 150 milliseconds of speech."
    },
    {
      q: "What platforms and audio sample rates are supported?",
      a: "The SDK supports 8 kHz (narrowband), 16 kHz (wideband), 32 kHz (super-wideband), and 48 kHz (fullband) audio sampling rates. Platforms include Windows, macOS, Linux, iOS, Android, and WebAssembly (WASM)."
    },
    {
      q: "How does Discord utilize Krisp at scale?",
      a: "Discord embeds the Krisp C++ SDK directly into its client desktop and mobile voice engine, serving over 150 million monthly active voice chatters worldwide with negligible battery and CPU impact."
    },
    {
      q: "Can this run entirely on-device without internet access?",
      a: "Yes. The Krisp SDK is 100% self-contained. The AI inference runs purely on local CPU hardware without sending any audio packets or telemetry outside your device boundary."
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
            <span>#1 Noise Cancellation SDK</span>
          </div>

          <h1 className="text-[38px] sm:text-[52px] md:text-[68px] font-extrabold tracking-tight leading-[1.08] text-[#131032] mb-6 max-w-[950px] mx-auto">
            Noise Cancellation SDK. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#614efa] to-[#43c4fc] bg-clip-text text-transparent">
              Flawless audio on any device.
            </span>
          </h1>

          <p className="text-[17px] md:text-[20px] text-[#525069] leading-[30px] md:leading-[34px] max-w-[760px] mx-auto mb-10">
            The award-winning deep neural network audio DSP trusted by Discord, Twilio, RingCentral, and 200M+ monthly users worldwide. Removes 100% of background noise with sub-15ms latency.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              to="/contact-sales"
              className="w-full sm:w-auto h-[52px] px-8 bg-[#614efa] hover:bg-[#4a3bbe] text-white font-bold rounded-[12px] flex items-center justify-center transition-all shadow-lg shadow-[#614efa]/25 text-[15px]"
            >
              Start Free SDK Trial
            </Link>
            <Link
              to="/developers"
              className="w-full sm:w-auto h-[52px] px-8 bg-white border border-[#d8d8de] hover:border-[#131032] text-[#131032] font-bold rounded-[12px] flex items-center justify-center transition-all text-[15px]"
            >
              Explore All Developers SDKs
            </Link>
          </div>

          {/* Interactive Sound Demo Console */}
          <div className="bg-[#131032] rounded-[28px] p-6 md:p-10 text-white max-w-[950px] mx-auto shadow-2xl border border-white/10 text-left mb-12">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#62c8ff] font-bold">
                  Interactive Audio DSP Demo
                </span>
                <h3 className="text-[20px] font-bold text-white mt-1">
                  Ambient Noise Suppression Filter
                </h3>
              </div>

              {/* Noise Switch Toggle */}
              <div className="flex items-center gap-3 bg-white/10 px-5 py-2 rounded-full border border-white/20">
                <span className="text-[13px] font-semibold text-white/80">Krisp Noise Cancellation</span>
                <button
                  onClick={() => setIsFiltered(!isFiltered)}
                  className={`relative w-14 h-7 rounded-full transition-colors ${
                    isFiltered ? "bg-[#20bf6b]" : "bg-white/20"
                  }`}
                >
                  <span
                    className={`absolute top-1 left-1 bg-white w-5 h-5 rounded-full transition-transform ${
                      isFiltered ? "transform translate-x-7" : ""
                    }`}
                  />
                </button>
                <span className={`text-[12px] font-bold ${isFiltered ? "text-[#20bf6b]" : "text-white/40"}`}>
                  {isFiltered ? "ON" : "OFF"}
                </span>
              </div>
            </div>

            {/* Presets */}
            <div className="flex flex-wrap gap-2 mb-6">
              {Object.keys(noiseScenarios).map((key) => (
                <button
                  key={key}
                  onClick={() => setSelectedNoise(key)}
                  className={`px-4 py-2 rounded-[10px] text-[13px] font-bold transition-all ${
                    selectedNoise === key
                      ? "bg-white text-[#131032]"
                      : "bg-white/10 text-white/70 hover:bg-white/15"
                  }`}
                >
                  {noiseScenarios[key].name}
                </button>
              ))}
            </div>

            <div className="bg-white/5 rounded-[20px] p-6 border border-white/10 text-center">
              <div className="text-[16px] text-white font-semibold mb-2">
                {isFiltered
                  ? "✓ Krisp Filtered: Pure Voice with 100% Background Noise Removal"
                  : `⚠ Raw Microphone: Passing 85dB ${noiseScenarios[selectedNoise].name}`}
              </div>
              <p className="text-[13px] text-white/60 mb-6">
                {noiseScenarios[selectedNoise].desc}
              </p>

              <div className="h-16 flex items-center justify-center gap-1.5 max-w-[600px] mx-auto">
                {Array.from({ length: 32 }).map((_, idx) => {
                  const baseH = isFiltered ? (idx % 4 === 0 ? 55 : 18) : 90;
                  return (
                    <span
                      key={idx}
                      className={`w-1.5 rounded-full transition-all duration-300 ${
                        isFiltered ? "bg-[#20bf6b]" : "bg-red-400"
                      }`}
                      style={{ height: `${baseH}%` }}
                    />
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between text-[12px] text-white/60">
              <span>✓ Sub-15ms algorithmic latency</span>
              <span>✓ Zero voice distortion or robotic artifacts</span>
              <span>✓ Runs 100% locally on CPU without network calls</span>
            </div>
          </div>

          {/* 4 Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-[#e7e7ea] max-w-[900px] mx-auto">
            <div>
              <div className="text-[32px] md:text-[38px] font-extrabold text-[#131032]">1T+</div>
              <div className="text-[11px] md:text-[12px] uppercase font-bold tracking-wider text-[#75738b] mt-1">
                Minutes Processed
              </div>
            </div>
            <div>
              <div className="text-[32px] md:text-[38px] font-extrabold text-[#131032]">15 ms</div>
              <div className="text-[11px] md:text-[12px] uppercase font-bold tracking-wider text-[#75738b] mt-1">
                Streaming Latency
              </div>
            </div>
            <div>
              <div className="text-[32px] md:text-[38px] font-extrabold text-[#131032]">&lt;1.5%</div>
              <div className="text-[11px] md:text-[12px] uppercase font-bold tracking-wider text-[#75738b] mt-1">
                CPU Utilization
              </div>
            </div>
            <div>
              <div className="text-[32px] md:text-[38px] font-extrabold text-[#131032]">200M+</div>
              <div className="text-[11px] md:text-[12px] uppercase font-bold tracking-wider text-[#75738b] mt-1">
                Monthly Active Users
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FOUR AUDIO PROCESSING CAPABILITIES */}
      <section className="py-20 md:py-28 bg-[#f7f7fa] border-b border-[#ececef]">
        <div className="w-[calc(100%-48px)] max-w-[1240px] mx-auto">
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <span className="text-[13px] font-bold uppercase tracking-wider text-[#614efa] bg-[#efeefa] px-3.5 py-1 rounded-full">
              Full DSP Suite
            </span>
            <h2 className="text-[32px] md:text-[46px] font-extrabold text-[#131032] mt-4 mb-4">
              Comprehensive noise suppression in one SDK
            </h2>
            <p className="text-[17px] text-[#525069]">
              Every layer of call audio perfected — uplink, downlink, competing speakers, and room reverb.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1050px] mx-auto">
            {capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[24px] p-8 border border-[#e4e4eb] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-[14px] bg-[#efeefa] text-[#614efa] flex items-center justify-center font-bold text-xl mb-4">
                  0{idx + 1}
                </div>
                <div className="text-[12px] font-bold uppercase tracking-wider text-[#614efa] mb-1">
                  {cap.subtitle}
                </div>
                <h3 className="text-[22px] font-bold text-[#131032] mb-3">{cap.title}</h3>
                <p className="text-[15px] text-[#525069] leading-[26px]">{cap.desc}</p>
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
              Integrate in under 50 lines of code
            </h2>
            <p className="text-[17px] text-[#525069]">
              Direct WebRTC, CoreAudio, WASAPI, and ALSA drop-in bindings.
            </p>
          </div>

          <div className="bg-[#131032] rounded-[24px] p-6 md:p-8 text-white font-mono text-[13px] max-w-[900px] mx-auto shadow-2xl border border-white/10">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-white/50 text-[11px] mb-4">
              <span>krisp_noise_cancellation.cpp</span>
              <span>C++17 / WebRTC</span>
            </div>
            <pre className="overflow-x-auto text-[#dfdcfe] leading-[24px]">
{`#include <krisp_audio_sdk.h>

// 1. Initialize Krisp Noise Suppression processor
KrispProcessorConfig config;
config.sample_rate = 16000;
config.enable_bvc = true;             // Background voice cancellation
config.enable_dereverb = true;        // Room echo removal

KrispProcessor* processor = krisp_create_processor(&config);

// 2. Process real-time PCM microphone frames (10ms frames)
void OnIncomingMicBuffer(int16_t* pcm_data, size_t num_samples) {
    krisp_process_frame(processor, pcm_data, pcm_data, num_samples);
}

// 3. Destroy processor on disconnect
krisp_destroy_processor(processor);`}
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
              Everything you need to know about the Krisp RTC Noise Cancellation SDK.
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
                Embed the world's #1 Noise Cancellation SDK.
              </h2>
              <p className="text-[17px] md:text-[19px] text-white/90 mb-10 leading-[30px]">
                Deliver studio-grade audio clarity to your users on desktop, web, or mobile.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/contact-sales"
                  className="h-[52px] px-8 bg-white hover:bg-[#f0f0f4] text-[#131032] font-bold rounded-[12px] flex items-center justify-center transition-colors text-[15px] shadow-md"
                >
                  Request SDK Evaluation Key
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
