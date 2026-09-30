import React, { useState } from "react";
import { Link } from "react-router-dom";

/**
 * Accent Conversion Page Component.
 * High-fidelity replica of https://krisp.ai/ai-accent-conversion/
 * Features hero with value-proposition checklists, dual feature breakdown, interactive
 * accent audio demo player with persona cards, brand trust logos, persona use-cases,
 * 3-step operational setup, companion features video grid, FAQs, and global CTA.
 */
export default function AccentConversion() {
  const [selectedDemo, setSelectedDemo] = useState(0);
  const [isAccentConverted, setIsAccentConverted] = useState(true);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const heroChecks = [
    "Native speaker intelligibility without losing your identity",
    "Preserves your natural voice, pitch, and emotional cadence",
    "Real-time processing with low latency for natural turn-taking",
    "No pre-recording, training, or voice cloning necessary"
  ];

  const demoSpeakers = [
    {
      id: 0,
      name: "Priya S.",
      accent: "Indian English (Female)",
      avatar: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_indian_ac_female.jpg",
      role: "Customer Success Manager"
    },
    {
      id: 1,
      name: "Rajesh K.",
      accent: "Indian English (Male)",
      avatar: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_indian_ac_male.jpg",
      role: "Solutions Architect"
    },
    {
      id: 2,
      name: "Maria G.",
      accent: "Filipino English (Female)",
      avatar: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_filipino_ac_female.jpg",
      role: "Technical Support Engineer"
    }
  ];

  const trustedLogos = [
    { name: "Siemens", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_siemens.svg" },
    { name: "Medium", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_medium.svg" },
    { name: "Okta", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_okta.svg" },
    { name: "Skechers", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_sketchers.svg" },
    { name: "Autodesk", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_autodesk.svg" },
    { name: "Sony", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_sony.svg" }
  ];

  const personas = [
    {
      title: "Business Owners & Founders",
      points: [
        "Pitch global investors and enterprise buyers with total confidence",
        "Eliminate miscommunication during crucial product demos and negotiations"
      ]
    },
    {
      title: "Technical Consultants & Engineers",
      points: [
        "Communicate complex technical architectures and jargon effortlessly",
        "Improve client trust and satisfaction on cross-border client calls"
      ]
    },
    {
      title: "Global Support & Sales Teams",
      points: [
        "Deliver fluent, easy-to-understand customer calls",
        "Significantly boost CSAT scores and first-contact resolution rates"
      ]
    }
  ];

  const steps = [
    {
      step: "01",
      title: "Set up Silgate",
      desc: "Install the Silgate desktop app and select your headset as the input microphone.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_ac_ma_set_up.png"
    },
    {
      step: "02",
      title: "Enable Accent Conversion",
      desc: "Toggle on AI Accent Conversion in the meeting widget before or during your call.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_ac_ma_enable.png"
    },
    {
      step: "03",
      title: "Manage in Real-Time",
      desc: "Fine-tune conversion intensity and listener preferences on the fly.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_ac_ma_manage.png"
    }
  ];

  const companionFeatures = [
    {
      title: "AI Note Taker",
      desc: "Transcripts, summaries, and action items generated automatically.",
      video: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/video_notes_lg.mp4",
      href: "/ai-meeting-assistant/ai-note-taker"
    },
    {
      title: "Meeting Transcription",
      desc: "Highly accurate speaker-tagged transcription across 17+ languages.",
      video: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/video_transcription_lg.mp4",
      href: "/ai-meeting-assistant/meeting-transcription"
    },
    {
      title: "Meeting Recording",
      desc: "Bot-free recording of both sides of your conversation.",
      video: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/video_recording_lg.mp4",
      href: "/ai-meeting-assistant/meeting-recording"
    }
  ];

  const faqs = [
    {
      q: "Is Accent Conversion available to all users?",
      a: "Yes, it is available for Free, Pro, and Business users starting from Silgate version 2.57.8."
    },
    {
      q: "Which accents does it support?",
      a: "Currently, Accent Conversion refines LatAm English, Indian English, and Filipino English, with more accents to be added in future updates."
    },
    {
      q: "Will my voice sound unnatural?",
      a: "No. Accent Conversion enhances clarity while preserving your natural vocal timbre, inflection, and pitch. It offers accent reduction without changing the authenticity of your voice."
    },
    {
      q: "Can I turn it off anytime?",
      a: "Yes, you can enable or disable accent reduction anytime from the Silgate app floating widget or settings."
    },
    {
      q: "Does Accent Conversion work with all conferencing apps?",
      a: "Yes, it is compatible with Zoom, Microsoft Teams, Google Meet, and other meeting platforms, providing real-time accent reduction."
    },
    {
      q: "Does it require a specific microphone?",
      a: "For the best experience, we recommend using a high-quality USB-wired headset with a boom microphone close to your mouth."
    },
    {
      q: "Will Accent Conversion support more accents in the future?",
      a: "Yes, our speech research team is continuously expanding the model and plans to introduce additional European and Asian accent models."
    },
    {
      q: "Does Accent Conversion work offline?",
      a: "Accent Conversion utilizes accelerated on-device neural inferencing alongside cloud optimization, requiring an active internet connection."
    }
  ];

  return (
    <div className="bg-white text-[#131032]">
      {/* 1. HERO SECTION */}
      <section className="pt-24 md:pt-32 pb-16 bg-[#ffffff]">
        <div className="w-[calc(100%-48px)] max-w-[1366px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 max-w-[620px]">
              <span className="hero_pill text-[13px] font-bold text-[#1a1a22] mb-6">
                ✨ World’s First Real-Time Accent AI
              </span>

              <h1 className="text-[38px] sm:text-[48px] lg:text-[54px] font-bold leading-[1.15] text-[#1a1a22] tracking-tight mb-6">
                Be Understood Clearly, <br />
                <span className="gradient-purple">No Matter Your Accent</span>
              </h1>

              <p className="text-[17px] md:text-[19px] leading-[30px] text-[#525069] mb-8 font-normal">
                Silgate AI Accent Conversion smooths and refines your speech in real time, helping you speak with clarity and confidence on every global call.
              </p>

              <div className="space-y-3 mb-8">
                {heroChecks.map((chk, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-[14px] font-semibold text-[#24232d]">
                    <img
                      src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_check_green_sm.svg"
                      alt=""
                      className="w-4 h-4 flex-shrink-0"
                    />
                    <span>{chk}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/signup"
                  className="h-[48px] px-8 rounded-[12px] bg-[#614efa] hover:bg-[#4a3bbe] text-white font-bold text-[15px] inline-flex items-center justify-center transition-colors shadow-sm"
                >
                  Get Silgate for free
                </Link>
                <Link
                  to="/contact-sales"
                  className="h-[48px] px-8 rounded-[12px] border border-[#23232e] text-[#1a1a22] hover:bg-[#1a1a22] hover:text-white font-bold text-[15px] inline-flex items-center justify-center transition-colors"
                >
                  Book a demo
                </Link>
              </div>
            </div>

            <div className="flex-1 w-full max-w-[600px] flex items-center justify-center">
              <img
                src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_ma_ac_intro.png"
                alt="AI Accent Conversion"
                className="w-full h-auto object-contain max-h-[460px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. DUAL FEATURE SPOTLIGHT CARDS */}
      <section className="py-20 bg-[#fbfbfe] border-y border-[#e7e7ea]">
        <div className="w-[calc(100%-48px)] max-w-[1366px] mx-auto">
          <div className="text-center max-w-[760px] mx-auto mb-16">
            <h2 className="text-[30px] md:text-[40px] font-bold text-[#1a1a22] leading-[1.2]">
              Accent Conversion Clarifies Speech <br />
              <span className="gradient-purple">While Keeping Your Natural Voice.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Speaker Side */}
            <div className="bg-white rounded-[28px] p-8 border border-[#e7e7ea] shadow-xs flex flex-col justify-between">
              <div>
                <span className="px-3 py-1 rounded-full bg-[#f0effe] text-[#614efa] text-[12px] font-bold uppercase tracking-wider mb-4 inline-block">
                  For Speakers
                </span>
                <h3 className="text-[22px] font-bold text-[#1a1a22] mb-3">
                  Speaker-Side Accent Conversion
                </h3>
                <p className="text-[15px] text-[#525069] leading-[24px] mb-6">
                  Transform your regional English accent into neutral American English live as you speak, ensuring international clients and colleagues understand every word.
                </p>
                <div className="space-y-2.5 mb-8">
                  <div className="flex items-center gap-2.5 text-[14px] text-[#24232d]">
                    <span className="text-[#008065] font-bold">✓</span>
                    <span>Eliminates miscommunications on technical terms</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-[14px] text-[#24232d]">
                    <span className="text-[#008065] font-bold">✓</span>
                    <span>Preserves emotional resonance and natural inflection</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-[14px] text-[#24232d]">
                    <span className="text-[#008065] font-bold">✓</span>
                    <span>Zero conversational lag during fast dialogue</span>
                  </div>
                </div>
              </div>
              <div className="rounded-[16px] overflow-hidden bg-[#fafafa] p-4 border border-[#e7e7ea]">
                <img
                  src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_ma_accent_1.png"
                  alt="Speaker Side Accent Conversion"
                  className="w-full h-auto object-contain max-h-[220px]"
                />
              </div>
            </div>

            {/* Listener Side */}
            <div className="bg-white rounded-[28px] p-8 border border-[#e7e7ea] shadow-xs flex flex-col justify-between">
              <div>
                <span className="px-3 py-1 rounded-full bg-[#e8faf6] text-[#008065] text-[12px] font-bold uppercase tracking-wider mb-4 inline-block">
                  For Listeners
                </span>
                <h3 className="text-[22px] font-bold text-[#1a1a22] mb-3">
                  Listener-Side Accent Conversion
                </h3>
                <p className="text-[15px] text-[#525069] leading-[24px] mb-6">
                  Convert other meeting participants' international accents into an easy-to-digest accent on your speakers, relieving listening fatigue on offshore team calls.
                </p>
                <div className="space-y-2.5 mb-8">
                  <div className="flex items-center gap-2.5 text-[14px] text-[#24232d]">
                    <span className="text-[#008065] font-bold">✓</span>
                    <span>Reduces mental strain during multilingual calls</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-[14px] text-[#24232d]">
                    <span className="text-[#008065] font-bold">✓</span>
                    <span>Works with any participant regardless of their software</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-[14px] text-[#24232d]">
                    <span className="text-[#008065] font-bold">✓</span>
                    <span>Private: only you hear the converted audio stream</span>
                  </div>
                </div>
              </div>
              <div className="rounded-[16px] overflow-hidden bg-[#fafafa] p-4 border border-[#e7e7ea]">
                <img
                  src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_ma_accent_2.png"
                  alt="Listener Side Accent Conversion"
                  className="w-full h-auto object-contain max-h-[220px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE AUDIO DEMO */}
      <section className="py-20 bg-[#1a1a22] text-white">
        <div className="w-[calc(100%-48px)] max-w-[1000px] mx-auto text-center">
          <span className="text-[13px] font-bold text-[#00d2c4] uppercase tracking-wider mb-2 block">
            Live Audio Sample
          </span>
          <h2 className="text-[32px] md:text-[42px] font-bold mb-4">
            Experience the magic of AI Accent Conversion
          </h2>
          <p className="text-[16px] text-white/70 max-w-[600px] mx-auto mb-10">
            Select a speaker profile and toggle Silgate Accent Conversion to hear the clarity difference.
          </p>

          <div className="bg-[#24242e] rounded-[28px] p-6 md:p-10 border border-white/10 text-left">
            {/* Persona Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {demoSpeakers.map((spk, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedDemo(idx)}
                  className={`p-4 rounded-[18px] border text-left transition-all cursor-pointer flex items-center gap-3.5 ${
                    selectedDemo === idx
                      ? "border-[#614efa] bg-[#614efa]/20 shadow-md"
                      : "border-white/10 bg-white/5 hover:bg-white/10"
                  }`}
                >
                  <img
                    src={spk.avatar}
                    alt={spk.name}
                    className="w-12 h-12 rounded-full object-cover border border-white/20 flex-shrink-0"
                  />
                  <div>
                    <div className="text-[15px] font-bold text-white">{spk.name}</div>
                    <div className="text-[12px] text-white/60">{spk.accent}</div>
                  </div>
                </button>
              ))}
            </div>

            {/* Audio Control Bar */}
            <div className="bg-[#14141a] rounded-[20px] p-6 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#614efa] flex items-center justify-center flex-shrink-0 cursor-pointer">
                  <span className="text-xl">▶</span>
                </div>
                <div>
                  <div className="font-bold text-[15px]">
                    {demoSpeakers[selectedDemo].name} ({demoSpeakers[selectedDemo].role})
                  </div>
                  <div className="text-[13px] text-white/60">
                    Mode: {isAccentConverted ? "✓ Converted to Neutral Accent" : "Original Regional Accent"}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[14px] font-bold">
                  {isAccentConverted ? "Converted" : "Original"}
                </span>
                <button
                  onClick={() => setIsAccentConverted(!isAccentConverted)}
                  className={`w-14 h-8 rounded-full p-1 transition-colors cursor-pointer ${
                    isAccentConverted ? "bg-[#614efa]" : "bg-gray-600"
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full bg-white transition-transform ${
                      isAccentConverted ? "translate-x-6" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TRUSTED LOGOS */}
      <section className="py-10 border-b border-[#f0f0f2] bg-[#fafafa]">
        <div className="w-[calc(100%-48px)] max-w-[1366px] mx-auto flex items-center justify-center flex-wrap gap-8 md:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all">
          {trustedLogos.map((logo, idx) => (
            <img key={idx} src={logo.src} alt={logo.name} className="h-6 md:h-7 w-auto object-contain" />
          ))}
        </div>
      </section>

      {/* 5. WHO IS IT FOR (PERSONAS) */}
      <section className="py-20 md:py-28 bg-[#ffffff]">
        <div className="w-[calc(100%-48px)] max-w-[1366px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 max-w-[620px]">
              <span className="text-[13px] font-bold text-[#614efa] uppercase tracking-wider mb-2 block">
                Target Audiences
              </span>
              <h2 className="text-[32px] md:text-[42px] font-bold text-[#1a1a22] leading-[1.2] mb-8">
                Who is Accent Conversion For?
              </h2>

              <div className="space-y-6">
                {personas.map((p, idx) => (
                  <div key={idx} className="bg-[#fbfbfe] rounded-[20px] p-6 border border-[#e7e7ea]">
                    <h3 className="text-[18px] font-bold text-[#1a1a22] mb-3">{p.title}</h3>
                    <div className="space-y-2">
                      {p.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2.5 text-[14px] text-[#525069]">
                          <img
                            src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_checkmark_purple.svg"
                            alt=""
                            className="w-4 h-4 mt-0.5 flex-shrink-0"
                          />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 w-full max-w-[500px] flex items-center justify-center">
              <img
                src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_owners.png"
                alt="Business owners and global teams"
                className="w-full h-auto object-contain max-h-[460px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. HOW ACCENT CONVERSION WORKS */}
      <section className="py-20 bg-[#f9f9fb] border-y border-[#e7e7ea]">
        <div className="w-[calc(100%-48px)] max-w-[1366px] mx-auto">
          <div className="text-center max-w-[650px] mx-auto mb-16">
            <h2 className="text-[32px] md:text-[42px] font-bold text-[#1a1a22]">
              How Accent Conversion Works
            </h2>
            <p className="text-[16px] text-[#525069] mt-3">
              Get clearer speech in 3 steps without complicated configurations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((st, idx) => (
              <div key={idx} className="bg-white rounded-[24px] p-6 border border-[#e7e7ea] flex flex-col justify-between shadow-xs">
                <div>
                  <span className="text-[28px] font-extrabold text-[#614efa] mb-3 block">
                    {st.step}
                  </span>
                  <h3 className="text-[18px] font-bold text-[#1a1a22] mb-2">{st.title}</h3>
                  <p className="text-[14px] text-[#525069] leading-[22px] mb-6">{st.desc}</p>
                </div>
                <div className="h-[200px] rounded-[16px] bg-[#f7f7f8] p-4 flex items-center justify-center border border-[#e7e7ea]">
                  <img src={st.img} alt={st.title} className="max-h-full max-w-full object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. COMPANION FEATURES VIDEO GRID */}
      <section className="py-20 md:py-28 bg-[#ffffff]">
        <div className="w-[calc(100%-48px)] max-w-[1366px] mx-auto">
          <div className="text-center max-w-[650px] mx-auto mb-16">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1a1a22]">
              More Powerful Meeting Features
            </h2>
            <p className="text-[16px] text-[#525069] mt-2">
              Everything in Silgate works harmoniously together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companionFeatures.map((feat, idx) => (
              <Link
                key={idx}
                to={feat.href}
                className="group bg-[#fbfbfe] rounded-[24px] overflow-hidden border border-[#e7e7ea] hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div className="h-[200px] bg-black overflow-hidden">
                  <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                    <source src={feat.video} type="video/mp4" />
                  </video>
                </div>
                <div className="p-6">
                  <h3 className="text-[18px] font-bold text-[#1a1a22] group-hover:text-[#614efa] transition-colors mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-[14px] text-[#525069] leading-[22px]">
                    {feat.desc}
                  </p>
                  <span className="text-[13px] font-bold text-[#614efa] mt-4 inline-block">
                    Explore feature →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQS */}
      <section className="py-20 bg-[#fbfbfe] border-t border-[#e7e7ea]">
        <div className="w-[calc(100%-48px)] max-w-[900px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1a1a22]">
              Frequently asked questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-[#e7e7ea] rounded-[16px] bg-white overflow-hidden">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-6 font-bold text-[16px] text-[#1a1a22] flex items-center justify-between gap-4 cursor-pointer hover:bg-[#fafafa]"
                >
                  <span>{faq.q}</span>
                  <span className="text-[22px] text-[#614efa] font-bold">{openFaq === idx ? "−" : "+"}</span>
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 pt-1 text-[15px] leading-[26px] text-[#525069] border-t border-[#f4f4f5]">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="py-20 bg-[#614efa] text-white">
        <div className="w-[calc(100%-48px)] max-w-[1000px] mx-auto text-center">
          <h2 className="text-[32px] md:text-[46px] font-bold mb-6">
            Be understood clearly on your very next call.
          </h2>
          <p className="text-[17px] text-white/80 max-w-[600px] mx-auto mb-10">
            Start speaking with complete clarity and confidence today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/signup"
              className="h-[50px] px-8 rounded-[12px] bg-white text-[#614efa] hover:bg-[#f0effe] font-bold text-[15px] inline-flex items-center justify-center transition-colors shadow-lg"
            >
              Get Silgate for free
            </Link>
            <Link
              to="/contact-sales"
              className="h-[50px] px-8 rounded-[12px] border border-white/40 hover:bg-white/10 text-white font-bold text-[15px] inline-flex items-center justify-center transition-colors"
            >
              Book a demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
