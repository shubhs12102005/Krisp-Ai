import React, { useState } from "react";

/**
 * Live Demo Page - High-Fidelity Replica of original Krisp.ai/krisp-demo-all-products/
 * Includes:
 * - Header: "Krisp Call Center AI in action"
 * - 6 Product Interactive Cards:
 *    1. Voice Translation (Interactive Video Demo modal with 4 multilingual language pairs)
 *    2. Accent Conversion (Agent AC & Customer AC tabs, Accents: Indian, Filipino, LatAm, African, targets: US/British English)
 *    3. Noise Cancellation (Dual action: Audio Demo with Krisp ON/OFF live toggle & Video Demo)
 *    4. Agent Assist & Speech Analytics (Real-time agent guidance video)
 *    5. Voice Security (Tagged scenarios: Caught Social Engineering, Verified Customer, Flagged Deepfake)
 *    6. Live Demo Session Card (Weekly live Zoom / meeting registration)
 * - Awards & Recognition Footer strip
 */
export default function Livedemo() {
  // Modal state
  const [activeModal, setActiveModal] = useState(null); // 'vt', 'ac', 'nc-audio', 'nc-video', 'agent-assist', 'vs', 'live-session'

  // Voice Translation state
  const vtLanguages = [
    { id: "KaV7JqEGRJ4", name: "English <> Portuguese (BR)" },
    { id: "7UaV7iNtwe0", name: "English <> Spanish" },
    { id: "yW_uyMlZuFw", name: "English <> Russian" },
    { id: "srPq5UgGwwo", name: "English <> French" }
  ];
  const [activeVtVideo, setActiveVtVideo] = useState(vtLanguages[0].id);

  // Accent Conversion state
  const [acTab, setAcTab] = useState("agent"); // 'agent' or 'customer'
  const [selectedAccent, setSelectedAccent] = useState("indian");
  const [selectedTarget, setSelectedTarget] = useState("us");
  const [acVideoId, setAcVideoId] = useState("MFSCOp9kOhk");

  const acThumbs = [
    {
      id: "MFSCOp9kOhk",
      accent: "indian",
      target: "us",
      label: "Indian accent female (US)",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_indian_ac_female.jpg"
    },
    {
      id: "RHUyUQSAxCQ",
      accent: "indian",
      target: "us",
      label: "Indian accent male (US)",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_indian_ac_male.jpg"
    },
    {
      id: "IEdvNG_C61A",
      accent: "indian",
      target: "british",
      label: "Indian accent female (British)",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_british_indian_female.jpg"
    },
    {
      id: "2PqZuAgo4Bo",
      accent: "filipino",
      target: "us",
      label: "Filipino accent female (US)",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_filipino_ac_female.jpg"
    },
    {
      id: "3ym8DandFc4",
      accent: "filipino",
      target: "us",
      label: "Filipino accent male (US)",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_filipino_ac_male.jpg"
    },
    {
      id: "rbnOIu4mbA0",
      accent: "filipino",
      target: "british",
      label: "Filipino accent female (British)",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_british_filipino_female.jpg"
    },
    {
      id: "x9mruVGGIMI",
      accent: "latam",
      target: "us",
      label: "LatAm accent sample",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_accent_latam.jpg"
    },
    {
      id: "7dIL9ppV4DE",
      accent: "african",
      target: "us",
      label: "African accent female",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_african_female.jpg"
    },
    {
      id: "jlE_VdF4mfs",
      accent: "african",
      target: "us",
      label: "African accent male",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_african_male.jpg"
    },
    {
      id: "GOAuolalp7M",
      accent: "african",
      target: "british",
      label: "African accent female (British)",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_british_african_female.jpg"
    }
  ];

  // Noise Cancellation Audio Demo State
  const [isKrispOn, setIsKrispOn] = useState(true);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [selectedNoiseTrack, setSelectedNoiseTrack] = useState("multiple");

  const noiseTracks = [
    { id: "multiple", name: "Multiple noises" },
    { id: "dog", name: "Barking dog" },
    { id: "baby", name: "Crying baby" },
    { id: "keyboard", name: "Keyboard clicks" },
    { id: "fan", name: "Fan noise" }
  ];

  // Voice Security state
  const vsScenarios = [
    {
      id: "VDTEQr9-Wyk",
      tag: "Caught",
      tagColor: "bg-[#e8faf6] text-[#008065] border-[#cef4ec]",
      name: "Social engineering"
    },
    {
      id: "lIPeXIlUIFc",
      tag: "Verified",
      tagColor: "bg-[#e8f2ff] text-[#0066cc] border-[#cce4ff]",
      name: "Real customer"
    },
    {
      id: "ORrZr2SqwQE",
      tag: "Flagged",
      tagColor: "bg-[#ffe9e7] text-[#fe6257] border-[#ffd5d1]",
      name: "Deepfake voice"
    }
  ];
  const [activeVsVideo, setActiveVsVideo] = useState(vsScenarios[0].id);

  return (
    <div className="bg-white text-[#1a1a22] overflow-hidden min-h-screen">
      {/* 1. Header Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 text-center bg-[#fafafc] border-b border-[#f0f0f4]">
        <div className="max-w-[1280px] mx-auto px-6">
          <span className="text-[13px] md:text-[14px] font-semibold tracking-wider uppercase text-[#4a3bbe]">
            Live interactive demos
          </span>
          <h1 className="text-[36px] sm:text-[44px] md:text-[52px] leading-[44px] sm:leading-[52px] md:leading-[60px] font-bold text-[#1a1a22] mt-3">
            Krisp Call Center AI in action
          </h1>
          <p className="text-[16px] sm:text-[18px] text-[#525069] max-w-[680px] mx-auto mt-4">
            Experience our real-time voice translation, accent conversion, noise removal, and security models directly in your browser.
          </p>
        </div>
      </section>

      {/* 2. Demos Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Voice Translation */}
            <article className="border border-[#e7e7ea] rounded-[24px] p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300 bg-white">
              <div>
                <div className="w-14 h-14 rounded-[16px] bg-[#e8f2ff] flex items-center justify-center p-3 mb-6">
                  <img
                    src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_interpreter_new.svg"
                    alt="Voice Translation"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-[22px] font-bold text-[#1a1a22] mb-3">
                  Voice Translation
                </h3>
                <p className="text-[14px] leading-[22px] text-[#525069]">
                  Real-time AI voice translation for call center agents. Talk naturally in your language, hear the caller in yours.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#f4f4f5]">
                <button
                  type="button"
                  onClick={() => setActiveModal("vt")}
                  className="w-full h-[44px] rounded-[10px] bg-[#f4f4f5] hover:bg-[#614efa] hover:text-white text-[#1a1a22] font-semibold text-[14px] flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <img
                    src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_video_demo_new.svg"
                    alt=""
                    className="w-4 h-4"
                  />
                  <span>Video demo</span>
                </button>
              </div>
            </article>

            {/* Card 2: Accent Conversion */}
            <article className="border border-[#e7e7ea] rounded-[24px] p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300 bg-white">
              <div>
                <div className="w-14 h-14 rounded-[16px] bg-[#fff8e5] flex items-center justify-center p-3 mb-6">
                  <img
                    src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_accent_blk.svg"
                    alt="Accent Conversion"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-[22px] font-bold text-[#1a1a22] mb-3">
                  Accent Conversion
                </h3>
                <p className="text-[14px] leading-[22px] text-[#525069]">
                  Real-time accent conversion for agents and customers. Convert accented speech into native US or British accents in milliseconds.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#f4f4f5]">
                <button
                  type="button"
                  onClick={() => setActiveModal("ac")}
                  className="w-full h-[44px] rounded-[10px] bg-[#f4f4f5] hover:bg-[#614efa] hover:text-white text-[#1a1a22] font-semibold text-[14px] flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <img
                    src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_video_demo_new.svg"
                    alt=""
                    className="w-4 h-4"
                  />
                  <span>Video demo</span>
                </button>
              </div>
            </article>

            {/* Card 3: Noise Cancellation (Audio Demo + Video Demo) */}
            <article className="border border-[#e7e7ea] rounded-[24px] p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300 bg-white">
              <div>
                <div className="w-14 h-14 rounded-[16px] bg-[#f4f2ff] flex items-center justify-center p-3 mb-6">
                  <img
                    src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_noise_cancellation.svg"
                    alt="Noise Cancellation"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-[22px] font-bold text-[#1a1a22] mb-3">
                  Noise Cancellation
                </h3>
                <p className="text-[14px] leading-[22px] text-[#525069]">
                  Remove background noises, secondary chatter, echoes, and keyboard clicks on outbound and inbound audio channels.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#f4f4f5] flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setActiveModal("nc-audio")}
                  className="flex-1 h-[44px] rounded-[10px] bg-[#614efa] hover:bg-[#4a3bbe] text-white font-semibold text-[13px] flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <img
                    src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_audio_demo_new.svg"
                    alt=""
                    className="w-4 h-4 invert"
                  />
                  <span>Audio demo</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveModal("nc-video")}
                  className="flex-1 h-[44px] rounded-[10px] bg-[#f4f4f5] hover:bg-[#e7e7ea] text-[#1a1a22] font-semibold text-[13px] flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <img
                    src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_video_demo_new.svg"
                    alt=""
                    className="w-4 h-4"
                  />
                  <span>Video demo</span>
                </button>
              </div>
            </article>

            {/* Card 4: Agent Assist & Speech Analytics */}
            <article className="border border-[#e7e7ea] rounded-[24px] p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300 bg-white">
              <div>
                <div className="w-14 h-14 rounded-[16px] bg-[#fff0e6] flex items-center justify-center p-3 mb-6">
                  <img
                    src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_agent_assist.svg"
                    alt="Agent Assist"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-[22px] font-bold text-[#1a1a22] mb-3">
                  Agent Assist &amp; Speech Analytics
                </h3>
                <p className="text-[14px] leading-[22px] text-[#525069]">
                  Real-time agent guidance, objection handling, automatic script compliance, and 100% call scoring for supervisors.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#f4f4f5]">
                <button
                  type="button"
                  onClick={() => setActiveModal("agent-assist")}
                  className="w-full h-[44px] rounded-[10px] bg-[#f4f4f5] hover:bg-[#614efa] hover:text-white text-[#1a1a22] font-semibold text-[14px] flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <img
                    src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_video_demo_new.svg"
                    alt=""
                    className="w-4 h-4"
                  />
                  <span>Video demo</span>
                </button>
              </div>
            </article>

            {/* Card 5: Voice Security */}
            <article className="border border-[#e7e7ea] rounded-[24px] p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300 bg-white">
              <div>
                <div className="w-14 h-14 rounded-[16px] bg-[#e8faf6] flex items-center justify-center p-3 mb-6">
                  <img
                    src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/glyph_shield.svg"
                    alt="Voice Security"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-[22px] font-bold text-[#1a1a22] mb-3">
                  Voice Security
                </h3>
                <p className="text-[14px] leading-[22px] text-[#525069]">
                  Real-time fraud detection, synthetic deepfake voice alerts, and social engineering mitigation directly on inbound calls.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#f4f4f5]">
                <button
                  type="button"
                  onClick={() => setActiveModal("vs")}
                  className="w-full h-[44px] rounded-[10px] bg-[#f4f4f5] hover:bg-[#614efa] hover:text-white text-[#1a1a22] font-semibold text-[14px] flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <img
                    src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_video_demo_new.svg"
                    alt=""
                    className="w-4 h-4"
                  />
                  <span>Video demo</span>
                </button>
              </div>
            </article>

            {/* Card 6: Live Demo Session Card */}
            <article className="border border-[#e7e7ea] rounded-[24px] p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300 bg-[#f7f7f9]">
              <div>
                <div className="w-14 h-14 rounded-[16px] bg-white border border-[#e7e7ea] flex items-center justify-center p-3 mb-6">
                  <img
                    src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_calendar.svg"
                    alt="Live demo session"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-[22px] font-bold text-[#1a1a22] mb-3">
                  Live demo
                </h3>
                <p className="text-[14px] leading-[22px] text-[#525069]">
                  Join a weekly live demo session with our product engineers to see Krisp in action and ask custom questions.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#e7e7ea]">
                <button
                  type="button"
                  onClick={() => setActiveModal("live-session")}
                  className="w-full h-[44px] rounded-[10px] bg-[#1a1a22] hover:bg-[#333342] text-white font-semibold text-[14px] flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Join weekly session</span>
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 3. Awards & Recognition Banner */}
      <section className="py-16 bg-[#fafafc] border-t border-[#f0f0f4]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-start gap-2">
              <div className="text-[20px] font-bold text-[#1a1a22]">
                Awards and recognition
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_cs_g2.svg"
                  alt="G2"
                  className="w-5 h-5"
                />
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_g2_star_coral.svg"
                      alt="star"
                      className="w-3.5 h-3.5"
                    />
                  ))}
                </div>
                <span className="text-[13px] font-bold text-[#1a1a22] ml-1">4.7 rating</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 justify-center">
              <img
                src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/badge_ccw_disruptive.png"
                alt="CCW Disruptive"
                className="h-[60px] w-auto object-contain"
              />
              <img
                src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/badge_g2_leader.png"
                alt="G2 Leader"
                className="h-[60px] w-auto object-contain"
              />
              <img
                src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/badge_g2_best_results.png"
                alt="G2 Best Results"
                className="h-[60px] w-auto object-contain"
              />
              <img
                src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/badge_g2_best_usability.png"
                alt="G2 Best Usability"
                className="h-[60px] w-auto object-contain"
              />
              <img
                src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/badge_g2_users_love_us.png"
                alt="G2 Users Love Us"
                className="h-[60px] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MODAL 1: Voice Translation */}
      {activeModal === "vt" && (
        <div
          className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="relative w-full max-w-[960px] bg-white rounded-[24px] p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#e7e7ea] mb-6">
              <h4 className="text-[22px] font-bold text-[#1a1a22]">
                Voice Translation Demo
              </h4>
              <button
                onClick={() => setActiveModal(null)}
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 text-gray-700"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              {/* Language Selector */}
              <div className="md:col-span-4 flex flex-col gap-2">
                <span className="text-[12px] font-bold uppercase tracking-wider text-[#757585] mb-1">
                  Select Language Pair
                </span>
                {vtLanguages.map((pair) => (
                  <button
                    key={pair.id}
                    onClick={() => setActiveVtVideo(pair.id)}
                    className={`px-4 py-3 rounded-[12px] text-left text-[14px] font-semibold transition-all cursor-pointer ${
                      activeVtVideo === pair.id
                        ? "bg-[#614efa] text-white shadow-xs"
                        : "bg-[#f4f4f5] text-[#1a1a22] hover:bg-[#e7e7ea]"
                    }`}
                  >
                    {pair.name}
                  </button>
                ))}
              </div>

              {/* Video Player */}
              <div className="md:col-span-8 aspect-video rounded-[16px] overflow-hidden bg-black shadow-md">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${activeVtVideo}?autoplay=1`}
                  title="Voice Translation Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: Accent Conversion */}
      {activeModal === "ac" && (
        <div
          className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="relative w-full max-w-[980px] bg-white rounded-[24px] p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#e7e7ea] mb-6">
              <h4 className="text-[22px] font-bold text-[#1a1a22]">
                Accent Conversion (AC)
              </h4>
              <button
                onClick={() => setActiveModal(null)}
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 text-gray-700"
              >
                ✕
              </button>
            </div>

            {/* Tabs: Agent AC vs Customer AC */}
            <div className="flex items-center gap-3 mb-6">
              <button
                onClick={() => setAcTab("agent")}
                className={`px-5 py-2.5 rounded-[10px] text-[14px] font-bold transition-all cursor-pointer ${
                  acTab === "agent"
                    ? "bg-[#614efa] text-white"
                    : "bg-[#f4f4f5] text-[#525069] hover:bg-[#e7e7ea]"
                }`}
              >
                Agent AC
              </button>
              <button
                onClick={() => setAcTab("customer")}
                className={`px-5 py-2.5 rounded-[10px] text-[14px] font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  acTab === "customer"
                    ? "bg-[#614efa] text-white"
                    : "bg-[#f4f4f5] text-[#525069] hover:bg-[#e7e7ea]"
                }`}
              >
                <span>Customer AC</span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-[4px] bg-[#008065] text-white">
                  New
                </span>
              </button>
            </div>

            {acTab === "agent" ? (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Controls */}
                <div className="md:col-span-5 flex flex-col gap-6">
                  <div>
                    <label className="block text-[12px] font-bold uppercase tracking-wider text-[#757585] mb-2">
                      Agent's Accent
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {["indian", "filipino", "latam", "african"].map((acc) => (
                        <button
                          key={acc}
                          onClick={() => {
                            setSelectedAccent(acc);
                            const match = acThumbs.find(
                              (t) => t.accent === acc && t.target === selectedTarget
                            );
                            if (match) setAcVideoId(match.id);
                          }}
                          className={`py-2 px-3 rounded-[8px] text-[13px] font-bold capitalize transition-all cursor-pointer ${
                            selectedAccent === acc
                              ? "bg-[#1a1a22] text-white"
                              : "bg-[#f4f4f5] text-[#525069] hover:bg-[#e7e7ea]"
                          }`}
                        >
                          {acc}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[12px] font-bold uppercase tracking-wider text-[#757585] mb-2">
                      Convert to
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: "us", label: "US English" },
                        { id: "british", label: "British English" }
                      ].map((tgt) => (
                        <button
                          key={tgt.id}
                          onClick={() => {
                            setSelectedTarget(tgt.id);
                            const match = acThumbs.find(
                              (t) => t.accent === selectedAccent && t.target === tgt.id
                            );
                            if (match) setAcVideoId(match.id);
                          }}
                          className={`py-2 px-3 rounded-[8px] text-[13px] font-bold transition-all cursor-pointer ${
                            selectedTarget === tgt.id
                              ? "bg-[#614efa] text-white"
                              : "bg-[#f4f4f5] text-[#525069] hover:bg-[#e7e7ea]"
                          }`}
                        >
                          {tgt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Sample Avatars */}
                  <div>
                    <span className="block text-[12px] font-bold uppercase tracking-wider text-[#757585] mb-2">
                      Speaker Samples
                    </span>
                    <div className="grid grid-cols-3 gap-2">
                      {acThumbs
                        .filter(
                          (t) =>
                            t.accent === selectedAccent && t.target === selectedTarget
                        )
                        .map((thumb) => (
                          <button
                            key={thumb.id}
                            onClick={() => setAcVideoId(thumb.id)}
                            className={`rounded-[10px] overflow-hidden border-2 transition-all aspect-square ${
                              acVideoId === thumb.id
                                ? "border-[#614efa] scale-105"
                                : "border-transparent opacity-75 hover:opacity-100"
                            }`}
                          >
                            <img
                              src={thumb.img}
                              alt={thumb.label}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                    </div>
                  </div>
                </div>

                {/* Video Preview */}
                <div className="md:col-span-7 aspect-video rounded-[16px] overflow-hidden bg-black shadow-md">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${acVideoId}?autoplay=1`}
                    title="Accent Conversion Preview"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <div className="w-full max-w-[640px] aspect-video rounded-[16px] overflow-hidden bg-black shadow-md">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/dzdNnWr_1Vo?autoplay=1"
                    title="Customer Accent Conversion"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <p className="text-[14px] text-[#525069] mt-3">
                  Customer speech conversion demo (Eastern European / Russian accent to clear standard English).
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* MODAL 3A: Noise Cancellation Interactive Audio Demo */}
      {activeModal === "nc-audio" && (
        <div
          className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="relative w-full max-w-[640px] bg-white rounded-[24px] p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#e7e7ea] mb-6">
              <h4 className="text-[22px] font-bold text-[#1a1a22]">
                AI Noise Cancellation Interactive Audio Demo
              </h4>
              <button
                onClick={() => setActiveModal(null)}
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 text-gray-700"
              >
                ✕
              </button>
            </div>

            {/* Noise Tracks Selector */}
            <div className="mb-6">
              <label className="block text-[12px] font-bold uppercase tracking-wider text-[#757585] mb-2">
                Try out different noise types
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {noiseTracks.map((track) => (
                  <button
                    key={track.id}
                    onClick={() => setSelectedNoiseTrack(track.id)}
                    className={`py-2.5 px-3 rounded-[10px] text-[13px] font-bold transition-all cursor-pointer ${
                      selectedNoiseTrack === track.id
                        ? "bg-[#614efa] text-white shadow-xs"
                        : "bg-[#f4f4f5] text-[#1a1a22] hover:bg-[#e7e7ea]"
                    }`}
                  >
                    {track.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Live Krisp ON / OFF Switch */}
            <div className="bg-[#f7f7f9] rounded-[20px] p-6 border border-[#e7e7ea] flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[16px] font-bold text-[#1a1a22]">
                    Krisp Noise Cancellation
                  </div>
                  <div className="text-[13px] text-[#525069]">
                    Toggle live during playback
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span
                    className={`text-[14px] font-bold ${
                      isKrispOn ? "text-[#614efa]" : "text-[#757585]"
                    }`}
                  >
                    {isKrispOn ? "Krisp ON" : "Krisp OFF"}
                  </span>
                  <button
                    onClick={() => setIsKrispOn((prev) => !prev)}
                    className={`krisp-switch ${!isKrispOn ? "off" : ""}`}
                    aria-label="Toggle Krisp"
                  >
                    <span className="switch-handle"></span>
                  </button>
                </div>
              </div>

              {/* Waveform / Visualizer Simulation */}
              <div className="h-[60px] bg-white rounded-[12px] border border-[#e7e7ea] p-3 flex items-center justify-center gap-1.5 overflow-hidden">
                {[...Array(32)].map((_, i) => (
                  <span
                    key={i}
                    className={`w-1.5 rounded-full transition-all duration-150 ${
                      isKrispOn
                        ? "bg-[#614efa]"
                        : "bg-[#fe6257]"
                    }`}
                    style={{
                      height: isPlayingAudio
                        ? isKrispOn
                          ? `${Math.max(12, Math.sin(i * 0.4) * 28 + 24)}px`
                          : `${Math.max(20, Math.sin(i * 0.8) * 44 + 40)}px`
                        : "6px"
                    }}
                  />
                ))}
              </div>

              {/* Play Button */}
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setIsPlayingAudio((prev) => !prev)}
                  className="px-6 py-2.5 rounded-[10px] bg-[#614efa] hover:bg-[#4a3bbe] text-white font-bold text-[14px] flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <span>{isPlayingAudio ? "⏸ Pause" : "▶ Play demo"}</span>
                </button>
                <span className="text-[12px] text-[#757585]">
                  Status: {isPlayingAudio ? (isKrispOn ? "Clean Voice AI active" : "Background noise raw audio") : "Ready"}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 3B: Noise Cancellation Video */}
      {activeModal === "nc-video" && (
        <div
          className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="relative w-full max-w-[860px] aspect-video bg-black rounded-[20px] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
            >
              ✕
            </button>
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/1ywu8buUvJw?autoplay=1"
              title="Noise Cancellation Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* MODAL 4: Agent Assist & Speech Analytics Video */}
      {activeModal === "agent-assist" && (
        <div
          className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="relative w-full max-w-[860px] aspect-video bg-black rounded-[20px] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
            >
              ✕
            </button>
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/SbaptfK1yng?autoplay=1"
              title="Agent Assist Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* MODAL 5: Voice Security */}
      {activeModal === "vs" && (
        <div
          className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="relative w-full max-w-[960px] bg-white rounded-[24px] p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#e7e7ea] mb-6">
              <h4 className="text-[22px] font-bold text-[#1a1a22]">
                Voice Security Fraud &amp; Deepfake Detection
              </h4>
              <button
                onClick={() => setActiveModal(null)}
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 text-gray-700"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              {/* Scenarios List */}
              <div className="md:col-span-4 flex flex-col gap-2">
                <span className="text-[12px] font-bold uppercase tracking-wider text-[#757585] mb-1">
                  Threat Scenarios
                </span>
                {vsScenarios.map((sc) => (
                  <button
                    key={sc.id}
                    onClick={() => setActiveVsVideo(sc.id)}
                    className={`px-4 py-3 rounded-[12px] text-left text-[14px] font-semibold transition-all flex items-center justify-between cursor-pointer ${
                      activeVsVideo === sc.id
                        ? "bg-[#1a1a22] text-white shadow-xs"
                        : "bg-[#f4f4f5] text-[#1a1a22] hover:bg-[#e7e7ea]"
                    }`}
                  >
                    <span>{sc.name}</span>
                    <span
                      className={`text-[11px] font-bold px-2 py-0.5 rounded-[4px] border ${sc.tagColor}`}
                    >
                      {sc.tag}
                    </span>
                  </button>
                ))}
              </div>

              {/* Video Player */}
              <div className="md:col-span-8 aspect-video rounded-[16px] overflow-hidden bg-black shadow-md">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${activeVsVideo}?autoplay=1`}
                  title="Voice Security Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 6: Weekly Live Session Registration */}
      {activeModal === "live-session" && (
        <div
          className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="relative w-full max-w-[520px] bg-white rounded-[24px] p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-800 text-[20px]"
            >
              ✕
            </button>
            <h3 className="text-[24px] font-bold text-[#1a1a22]">
              Join Weekly Live Demo
            </h3>
            <p className="text-[14px] text-[#525069] mt-2 leading-[22px]">
              Every Wednesday at 10:00 AM PST. Live Q&amp;A and custom architectural deep-dives with our lead speech engineers.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Calendar invite sent to your email.");
                setActiveModal(null);
              }}
              className="mt-6 flex flex-col gap-4"
            >
              <div>
                <label className="block text-[13px] font-semibold text-[#1a1a22] mb-1">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="w-full h-[44px] px-3.5 border border-[#e7e7ea] rounded-[10px] text-[14px] focus:outline-none focus:border-[#614efa]"
                />
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-[#1a1a22] mb-1">
                  Company Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Acme Corp"
                  className="w-full h-[44px] px-3.5 border border-[#e7e7ea] rounded-[10px] text-[14px] focus:outline-none focus:border-[#614efa]"
                />
              </div>
              <button
                type="submit"
                className="w-full h-[48px] rounded-[10px] bg-[#614efa] hover:bg-[#4a3bbe] text-white font-bold text-[15px] transition-colors mt-2"
              >
                Register for Next Session
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}