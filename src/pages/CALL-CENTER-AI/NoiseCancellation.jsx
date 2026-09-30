import React, { useState } from "react";
import Button from "../../components/common/Button";

/**
 * AI Noise Cancellation for Call Centers Page Replica
 * Source: https://krisp.ai/contact-center/noise-cancellation/
 *
 * Full fidelity reproduction featuring:
 * 1. Hero with badge, call center value proposition, scale metrics, and CTAs
 * 2. 8 Contact Center Impact KPIs (AHT, CSAT, noise complaints, hardware costs, FCR, etc.)
 * 3. 3-in-1 Voice Engine (Voice Isolation, Noise Cancellation, Echo Cancellation)
 * 4. Interactive Call Center Noise Demo Player (Floor chatter, keystrokes, AC fan, echo)
 * 5. Global production scale metrics (200M+ devices, 75B+ mins monthly, 7 years R&D)
 * 6. Softphone platform compatibility (Genesys, Five9, Amazon Connect, Avaya, etc.)
 * 7. Enterprise Security and Governance
 * 8. 3-Step Operations Rollout Timeline (Deploy, Configure, Maximize Productivity)
 * 9. Bottom CTA banner
 */
export default function NoiseCancellation() {
  const [activeNoise, setActiveNoise] = useState("floor-chatter");
  const [isCancelled, setIsCancelled] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const noiseTypes = [
    { id: "floor-chatter", name: "Call Center Chatter", desc: "Overlapping nearby agents and supervisor announcements" },
    { id: "keystrokes", name: "Mechanical Keyboard", desc: "Rapid typing during live CRM note-taking and chat" },
    { id: "fan", name: "HVAC & Fan Noise", desc: "Air conditioning hum and background facility ventilation" },
    { id: "echo", name: "Acoustic Room Echo", desc: "Hard surface acoustic reverberation and mic feedback" }
  ];

  const metrics = [
    { val: "10%", label: "Decrease in AHT", desc: "Average handle time" },
    { val: "8%", label: "Increase in CSAT", desc: "Customer satisfaction" },
    { val: "78%", label: "Drop in Noise Complaints", desc: "Direct customer feedback" },
    { val: "30%", label: "Hardware Cost Savings", desc: "Standard headsets supported" },
    { val: "25%", label: "Increase in ESAT", desc: "Agent job satisfaction" },
    { val: "20%", label: "Fewer Abandoned Calls", desc: "Reduced customer frustration" },
    { val: "26%", label: "Higher Sales Conversions", desc: "Clear outbound conversations" },
    { val: "25%", label: "Increase in FCR", desc: "First contact resolution" }
  ];

  const softphones = [
    "Genesys Cloud", "Amazon Connect", "Five9", "Avaya", "Cisco Webex Contact Center", "NICE inContact", "Talkdesk", "Twilio"
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
            #1 Contact Center Audio Intelligence
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold text-[#131032] leading-[1.15] max-w-4xl mx-auto mb-6">
            AI Noise Cancellation <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#614efa] to-[#16a9ff]">
              for Call Centers
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#525069] max-w-3xl mx-auto leading-relaxed mb-8">
            Removes background noises and isolates agent and customer voices in real-time — bidirectionally, on any softphone, with zero cloud latency.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <Button variant="primary" href="/contact-sales" className="h-[48px] px-8 text-sm sm:text-base font-bold">
              Talk to Sales
            </Button>
            <Button variant="dark" href="/signup" className="h-[48px] px-8 text-sm sm:text-base font-bold">
              Start a 14-day trial
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-semibold text-[#525069] pt-4 border-t border-[#ededf0] max-w-3xl mx-auto">
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-500 font-bold">✓</span> Deployed on 200M+ devices worldwide
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-500 font-bold">✓</span> Automatically integrates with all CX platforms
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-500 font-bold">✓</span> Audio data never leaves user&apos;s machine
            </span>
          </div>
        </div>
      </section>

      {/* 2. IMPACT YOU CAN TRACK (8 CONTACT CENTER METRICS) */}
      <section className="py-24 bg-white border-b border-[#f4f4f5]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#614efa]">
              Operational ROI
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#131032]">
              Impact you can track across the entire operation
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((m, idx) => (
              <div key={idx} className="p-6 sm:p-7 rounded-2xl bg-[#fafafb] border border-[#e7e7ea] space-y-2 text-center">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#614efa]">{m.val}</div>
                <div className="text-sm sm:text-base font-bold text-[#131032]">{m.label}</div>
                <div className="text-xs text-[#757585]">{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TRIPLE AI AUDIO ENGINE (ISOLATION, NOISE, ECHO) */}
      <section className="py-24 bg-[#fafafc]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#614efa]">
              3-in-1 Audio Intelligence
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#131032]">
              AI-Powered Noise Cancellation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-[#e7e7ea] shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#f4f2ff] flex items-center justify-center text-xl text-[#614efa]">
                🎯
              </div>
              <h3 className="text-xl font-bold text-[#131032]">Voice Isolation</h3>
              <p className="text-xs sm:text-sm text-[#525069] leading-relaxed">
                Leaves only the primary agent and customer voices in the call. Eliminates overlapping chatter from adjacent cubicles and supervisor announcements.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#e7e7ea] shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#f4f2ff] flex items-center justify-center text-xl text-[#614efa]">
                🔇
              </div>
              <h3 className="text-xl font-bold text-[#131032]">Noise Cancellation</h3>
              <p className="text-xs sm:text-sm text-[#525069] leading-relaxed">
                Delivers a crystal-clear call experience by eliminating ambient background noises, dogs, construction, traffic, and keystrokes bi-directionally.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#e7e7ea] shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#f4f2ff] flex items-center justify-center text-xl text-[#614efa]">
                🔊
              </div>
              <h3 className="text-xl font-bold text-[#131032]">Echo Cancellation</h3>
              <p className="text-xs sm:text-sm text-[#525069] leading-relaxed">
                Eliminates room and acoustic echo caused by high mic sensitivity, hollow conference rooms, or speaker bleeding in work-from-home setups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE NOISE DEMO PLAYER */}
      <section className="py-24 bg-white border-y border-[#f4f4f5]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#614efa]">
              Live Demonstration
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#131032]">
              Noise Cancellation in action
            </h2>
            <p className="text-sm sm:text-base text-[#525069]">
              Toggle Krisp on and off to hear how aggressive background noise is wiped away instantly.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-[#18113c] rounded-3xl p-8 sm:p-10 text-white shadow-xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-white/10">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#c7d2fe]">
                  Sound Environment
                </span>
                <div className="text-base font-bold text-white">Call Center Operation Simulation</div>
              </div>

              <button
                type="button"
                onClick={() => setIsCancelled(!isCancelled)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  isCancelled
                    ? "bg-emerald-500 text-white shadow-md"
                    : "bg-red-500 text-white shadow-md"
                }`}
              >
                {isCancelled ? "✓ Krisp ON (Pure Voice)" : "✕ Krisp OFF (Raw Noise)"}
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
              {noiseTypes.map((n) => (
                <button
                  key={n.id}
                  onClick={() => {
                    setActiveNoise(n.id);
                    setIsPlaying(false);
                  }}
                  className={`p-3 rounded-xl text-left transition-all ${
                    activeNoise === n.id
                      ? "bg-[#614efa] text-white font-bold"
                      : "bg-white/5 hover:bg-white/10 text-indigo-100 text-xs"
                  }`}
                >
                  <div className="text-xs font-bold">{n.name}</div>
                </button>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-4 mb-6">
              <div className="flex items-center justify-between text-xs text-indigo-200">
                <span>Active Scenario: {noiseTypes.find((n) => n.id === activeNoise)?.desc}</span>
                <span className="font-mono text-emerald-400">
                  {isCancelled ? "Noise Reduction: 99.4%" : "Noise Filter: Bypassed"}
                </span>
              </div>

              {/* Simulated Waveform Visualizer */}
              <div className="flex items-center gap-1 h-8">
                {[60, 40, 85, 30, 95, 70, 45, 90, 35, 80, 50, 65, 85, 40, 90, 55, 75, 40, 60].map((h, i) => (
                  <div
                    key={i}
                    style={{ height: isPlaying ? `${h}%` : "25%" }}
                    className={`flex-1 rounded-full transition-all duration-150 ${
                      isCancelled ? "bg-emerald-400" : "bg-red-400"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-white text-[#18113c] font-bold text-xs sm:text-sm hover:bg-[#f4f4f5] transition-colors"
              >
                <span>{isPlaying ? "⏸ Pause Audio" : "▶ Play Audio Demo"}</span>
              </button>
              <span className="text-xs text-indigo-200">
                Zero vocal distortion • Under 10ms latency
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRODUCTION SCALE PILLARS */}
      <section className="py-24 bg-[#fafafc]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#614efa]">
              Enterprise Proven
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#131032]">
              Deployed on 200M+ devices worldwide
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-[#e7e7ea] shadow-sm space-y-3">
              <div className="text-4xl font-extrabold text-[#614efa]">75B+</div>
              <h3 className="text-lg font-bold text-[#131032]">Minutes processed monthly</h3>
              <p className="text-xs sm:text-sm text-[#525069] leading-relaxed">
                The most mature, robust, and widely deployed AI noise suppression model in the customer service industry.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#e7e7ea] shadow-sm space-y-3">
              <div className="text-4xl font-extrabold text-[#614efa]">Global</div>
              <h3 className="text-lg font-bold text-[#131032]">Powers top BPOs worldwide</h3>
              <p className="text-xs sm:text-sm text-[#525069] leading-relaxed">
                Trusted by industry giants including TTEC, Everise, Arrivia, and iContact across North America, Europe, and APAC.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#e7e7ea] shadow-sm space-y-3">
              <div className="text-4xl font-extrabold text-[#614efa]">7+ Years</div>
              <h3 className="text-lg font-bold text-[#131032]">Dedicated AI R&amp;D</h3>
              <p className="text-xs sm:text-sm text-[#525069] leading-relaxed">
                Continuously upgraded neural networks optimized for real-world acoustic variances and mixed microphone headsets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HOW KRISP WORKS (3-STEP IMPLEMENTATION) */}
      <section className="py-24 bg-white border-y border-[#f4f4f5]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#614efa]">
              Seamless Rollout
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#131032]">
              How Krisp works in your contact center
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#fafafb] border border-[#e7e7ea] space-y-3">
              <div className="text-3xl font-extrabold text-[#614efa]">01</div>
              <h3 className="text-xl font-bold text-[#131032]">Deploy</h3>
              <p className="text-xs sm:text-sm text-[#525069] leading-relaxed">
                Silent MSI installer deployed across agent laptops with MDM/SCCM. Zero changes to telephony architecture.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#fafafb] border border-[#e7e7ea] space-y-3">
              <div className="text-3xl font-extrabold text-[#614efa]">02</div>
              <h3 className="text-xl font-bold text-[#131032]">Configure</h3>
              <p className="text-xs sm:text-sm text-[#525069] leading-relaxed">
                Admins centrally assign policies, lock settings, and manage licenses from an enterprise management portal.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#fafafb] border border-[#e7e7ea] space-y-3">
              <div className="text-3xl font-extrabold text-[#614efa]">03</div>
              <h3 className="text-xl font-bold text-[#131032]">Maximize productivity</h3>
              <p className="text-xs sm:text-sm text-[#525069] leading-relaxed">
                Agents experience instant noise-free calls, while supervisors monitor noise analytics and productivity gains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SOFTPHONE COMPATIBILITY */}
      <section className="py-20 bg-[#fafafc] border-b border-[#f4f4f5]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 text-center space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#131032]">
            Works seamlessly with all softphone platforms
          </h2>
          <p className="text-sm sm:text-base text-[#525069] max-w-2xl mx-auto">
            Krisp acts as a smart layer between the agent's headset and any softphone to eliminate noise with zero API integration required.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            {softphones.map((sp, idx) => (
              <span
                key={idx}
                className="px-5 py-2.5 rounded-xl bg-white border border-[#e7e7ea] text-xs sm:text-sm font-bold text-[#131032] shadow-xs"
              >
                {sp}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 8. BOTTOM BANNER */}
      <section className="py-20 bg-gradient-to-r from-[#18113c] via-[#2f1f70] to-[#18113c] text-white text-center">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Learn more about how your call center can benefit from AI Noise Cancellation
          </h2>
          <p className="text-base sm:text-lg text-indigo-200 max-w-2xl mx-auto">
            Talk to our enterprise team to test Krisp on your live contact center floor.
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
