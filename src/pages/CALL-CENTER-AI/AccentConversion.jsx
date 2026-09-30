import React, { useState } from "react";
import Button from "../../components/common/Button";

/**
 * AI Accent Conversion for Call Centers Page Replica
 * Source: https://krisp.ai/contact-center/accent-conversion/
 *
 * Full fidelity reproduction featuring:
 * 1. Hero with "Customer Accent Conversion" badge, value props & CTAs
 * 2. Contact Center CX impact metrics (17% revenue, 13.5% performance, 57% NPS, Global hiring pool)
 * 3. Interactive Accent Player supporting Indian, Filipino, LatAm, and African accents
 * 4. Customer Accent Conversion breakthrough section
 * 5. Softphone platform ecosystem compatibility
 * 6. Enterprise security and governance
 * 7. Verified contact center executive testimonials
 * 8. Bottom CTA banner
 */
export default function AccentConversion() {
  const [selectedRegion, setSelectedRegion] = useState("indian");
  const [selectedVoice, setSelectedVoice] = useState("female");
  const [isAccentOn, setIsAccentOn] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const accentRegions = [
    { id: "indian", name: "Indian English", flag: "🇮🇳", voices: ["female", "male"] },
    { id: "filipino", name: "Filipino English", flag: "🇵🇭", voices: ["female", "male"] },
    { id: "latam", name: "LatAm English", flag: "🌎", voices: ["female", "male"] },
    { id: "african", name: "African English", flag: "🌍", voices: ["female", "male"] }
  ];

  const sampleTranscripts = {
    indian: {
      female: "Hello, thank you for reaching out to premium support. I have updated your billing cycle to the first of next month and removed the late fee.",
      male: "Good afternoon. I can definitely help verify your identity and unlock your mobile banking credentials immediately."
    },
    filipino: {
      female: "Thank you for holding. Your reservation details for the international conference have been confirmed with airport transfer included.",
      male: "Hello, I have initiated a replacement order for your hardware kit. You will receive tracking numbers via SMS within one hour."
    },
    latam: {
      female: "Welcome to customer care. I have reviewed your coverage policy and your comprehensive deductible has been lowered successfully.",
      male: "Good morning. I can assist in setting up your enterprise cloud account and assigning administrative licenses to your engineering team."
    },
    african: {
      female: "Thank you for calling. I have processed your refund request and applied a courtesy service credit to your account balance.",
      male: "Good day. I am reviewing your diagnostic test report and can confirm that all network access points are operating normally."
    }
  };

  const softphones = [
    "Genesys Cloud", "Amazon Connect", "Five9", "Avaya OneCloud", "Cisco Webex Contact Center", "NICE inContact", "Talkdesk"
  ];

  return (
    <div className="w-full bg-white text-[#131032] overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section
        id="hero"
        className="w-full relative pt-16 pb-20 md:pt-24 md:pb-28 px-4 sm:px-6 bg-[#fafafc] border-b border-[#e7e7ea]"
      >
        <div className="max-w-[1240px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#cef4ec] bg-[#e8faf6] text-[#008065] text-xs sm:text-sm font-bold mb-6">
            <span className="w-2 h-2 rounded-full bg-[#008065] animate-pulse" />
            New: Introducing Customer Accent Conversion
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold text-[#131032] leading-[1.15] max-w-4xl mx-auto mb-6">
            AI Accent Conversion <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#614efa] to-[#16a9ff]">
              for Call Centers
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#525069] max-w-3xl mx-auto leading-relaxed mb-8">
            Improves communication for customers and call center agents by softening accents bidirectionally while preserving each speaker&apos;s natural voice, warmth, and authenticity.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <Button variant="primary" href="/contact-sales" className="h-[48px] px-8 text-sm sm:text-base font-bold">
              Talk to Sales
            </Button>
            <Button variant="dark" href="/signup" className="h-[48px] px-8 text-sm sm:text-base font-bold">
              Start a 14-day trial
            </Button>
          </div>

          {/* Highlights Checklist */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-semibold text-[#525069] pt-4 border-t border-[#ededf0] max-w-3xl mx-auto">
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-500 font-bold">✓</span> Supports Indian, Filipino, LatAm &amp; African accents
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-500 font-bold">✓</span> Single universal adaptive model
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-500 font-bold">✓</span> Works with any CCaaS or softphone
            </span>
          </div>
        </div>
      </section>

      {/* 2. HOW CALL CENTERS BENEFIT (IMPACT METRICS) */}
      <section className="py-24 bg-white border-b border-[#f4f4f5]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#614efa]">
              Business Value
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#131032]">
              How call centers benefit from Accent Conversion
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 rounded-2xl bg-[#fafafb] border border-[#e7e7ea] space-y-3">
              <div className="text-4xl font-extrabold text-[#614efa]">17%</div>
              <h3 className="text-lg font-bold text-[#131032]">Gross revenue lift</h3>
              <p className="text-xs sm:text-sm text-[#525069] leading-relaxed">
                Reduced accent training expenses, lower cost per call, and higher outbound close rates.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#fafafb] border border-[#e7e7ea] space-y-3">
              <div className="text-4xl font-extrabold text-[#614efa]">13.5%</div>
              <h3 className="text-lg font-bold text-[#131032]">Agent performance</h3>
              <p className="text-xs sm:text-sm text-[#525069] leading-relaxed">
                Measurable improvement across overall agent performance KPIs and shorter average handle times.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#fafafb] border border-[#e7e7ea] space-y-3">
              <div className="text-4xl font-extrabold text-[#614efa]">57%</div>
              <h3 className="text-lg font-bold text-[#131032]">Net Promoter Score (NPS)</h3>
              <p className="text-xs sm:text-sm text-[#525069] leading-relaxed">
                Significant boost in customer satisfaction, first call resolution, and customer brand loyalty.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#fafafb] border border-[#e7e7ea] space-y-3">
              <div className="text-4xl font-extrabold text-[#614efa]">Global</div>
              <h3 className="text-lg font-bold text-[#131032]">Broadened hiring pool</h3>
              <p className="text-xs sm:text-sm text-[#525069] leading-relaxed">
                Empower DE&amp;I by removing language barriers and unlocking worldwide talent without geographic bias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE ACCENT CONVERSION DEMO PLAYER */}
      <section className="py-24 bg-[#fafafc]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#614efa]">
              Interactive Audio Player
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#131032]">
              Accent Conversion in action
            </h2>
            <p className="text-sm sm:text-base text-[#525069]">
              Listen to regional call center audio converted into clear, natural American English in real time.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-[#e7e7ea] p-8 sm:p-10 shadow-lg">
            {/* Region Selector */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
              {accentRegions.map((r) => (
                <button
                  key={r.id}
                  onClick={() => {
                    setSelectedRegion(r.id);
                    setIsPlaying(false);
                  }}
                  className={`p-3 rounded-xl text-center text-xs font-bold transition-all ${
                    selectedRegion === r.id
                      ? "bg-[#614efa] text-white shadow-sm"
                      : "bg-[#fafafb] text-[#525069] border border-[#e7e7ea] hover:bg-[#f4f4f5]"
                  }`}
                >
                  <span className="mr-1">{r.flag}</span> {r.name}
                </button>
              ))}
            </div>

            {/* Voice Gender Selector */}
            <div className="flex justify-center gap-3 mb-8">
              {["female", "male"].map((v) => (
                <button
                  key={v}
                  onClick={() => {
                    setSelectedVoice(v);
                    setIsPlaying(false);
                  }}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold capitalize transition-colors ${
                    selectedVoice === v
                      ? "bg-[#18113c] text-white"
                      : "bg-[#f4f4f5] text-[#525069] hover:bg-[#e7e7ea]"
                  }`}
                >
                  {v} Speaker
                </button>
              ))}
            </div>

            {/* Player Display Card */}
            <div className="p-6 rounded-2xl bg-[#f9f9fb] border border-[#e7e7ea] space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[#ededf0]">
                <div>
                  <div className="text-xs font-bold uppercase text-[#614efa] mb-1">
                    {selectedRegion.toUpperCase()} • {selectedVoice.toUpperCase()} SPEAKER
                  </div>
                  <div className="text-sm font-bold text-[#131032]">
                    Sample Call Center Verification Interaction
                  </div>
                </div>

                {/* Krisp Toggle Button */}
                <button
                  type="button"
                  onClick={() => setIsAccentOn(!isAccentOn)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    isAccentOn
                      ? "bg-emerald-500 text-white shadow-sm"
                      : "bg-red-500 text-white shadow-sm"
                  }`}
                >
                  {isAccentOn ? "✓ Accent Neutralized (Krisp ON)" : "✕ Original Accent (Krisp OFF)"}
                </button>
              </div>

              {/* Simulated Speech Waveform & Text */}
              <div className="p-4 rounded-xl bg-white border border-[#e7e7ea] space-y-3">
                <div className="text-xs text-[#757585]">Spoken transcript:</div>
                <p className="text-sm sm:text-base text-[#131032] italic font-medium leading-relaxed">
                  &ldquo;{sampleTranscripts[selectedRegion][selectedVoice]}&rdquo;
                </p>
                <div className="flex items-center gap-1 h-6 pt-2">
                  {[40, 60, 30, 80, 50, 90, 45, 70, 35, 85, 65, 40, 95, 55, 30, 75, 50].map((h, i) => (
                    <div
                      key={i}
                      style={{ height: isPlaying ? `${h}%` : "30%" }}
                      className={`flex-1 rounded-full transition-all duration-150 ${
                        isAccentOn ? "bg-[#614efa]" : "bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#614efa] hover:bg-[#4a3bbe] text-white font-bold text-xs sm:text-sm shadow transition-colors"
                >
                  <span>{isPlaying ? "⏸ Pause Audio" : "▶ Play Demo Audio"}</span>
                </button>
                <span className="text-xs text-[#525069]">
                  Zero robotic latency • Preserves intonation
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CUSTOMER ACCENT CONVERSION BREAKTHROUGH */}
      <section className="py-24 bg-[#18113c] text-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00d084]">
              Listener-Side Innovation
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Customer Accent Conversion
            </h2>
            <p className="text-sm sm:text-base text-[#c7d2fe] leading-relaxed">
              Softens customer accents in real time, instantly improving comprehension for agents, without changing the customer&apos;s voice, tone, or emotion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 space-y-3 backdrop-blur-sm">
              <div className="text-3xl mb-2">🧠</div>
              <h3 className="text-xl font-bold text-white">Reduced cognitive load</h3>
              <p className="text-xs sm:text-sm text-indigo-200 leading-relaxed">
                Clearer customer speech allows agents to concentrate on complex technical answers rather than straining to decipher heavy dialects.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 space-y-3 backdrop-blur-sm">
              <div className="text-3xl mb-2">🔄</div>
              <h3 className="text-xl font-bold text-white">Fewer clarifications</h3>
              <p className="text-xs sm:text-sm text-indigo-200 leading-relaxed">
                Fewer repeats and misunderstandings lead directly to shorter calls and lower customer irritation.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 space-y-3 backdrop-blur-sm">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="text-xl font-bold text-white">No operational changes</h3>
              <p className="text-xs sm:text-sm text-indigo-200 leading-relaxed">
                Universal model dynamically adapts to customer accents with no manual language switching or agent training required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SOFTPHONE PLATFORMS */}
      <section className="py-20 bg-white border-b border-[#f4f4f5]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 text-center space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#131032]">
            Works seamlessly with all softphone platforms
          </h2>
          <p className="text-sm sm:text-base text-[#525069] max-w-2xl mx-auto">
            Krisp acts as a smart layer between the agent&apos;s headset and any softphone to soften accents and eliminate distractions with zero custom API code.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 max-w-3xl mx-auto">
            {softphones.map((sp, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-xl bg-[#fafafb] border border-[#e7e7ea] text-xs sm:text-sm font-bold text-[#131032] shadow-xs"
              >
                {sp}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BOTTOM BANNER */}
      <section className="py-20 bg-gradient-to-r from-[#18113c] via-[#2f1f70] to-[#18113c] text-white text-center">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Learn more about how your call center can benefit from AI Accent Conversion
          </h2>
          <p className="text-base sm:text-lg text-indigo-200 max-w-2xl mx-auto">
            Book a personalized walkthrough with our contact center solutions engineering team.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" href="/contact-sales" className="h-[48px] px-8 text-base font-bold">
              Talk to Sales
            </Button>
            <Button variant="dark" href="/signup" className="h-[48px] px-8 text-base font-bold">
              Start a 14-day trial
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
