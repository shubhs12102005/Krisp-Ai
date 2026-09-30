import React, { useState } from "react";
import { Link } from "react-router-dom";
import { siteLogos } from "../../utils/constants";

/**
 * Noise Cancellation Page Component.
 * High-fidelity replica of https://krisp.ai/noise-cancellation/
 * Features hero with G2 badges, stats boxes, 3-card Voice AI suite, interactive feature tabs
 * with high-res screenshots, live audio demo toggle player with track selector, 3-step setup,
 * conferencing platform integrations, full comparison matrix table, customer testimonials,
 * enterprise security, articles, FAQs, and toggle banner CTA.
 */
export default function NoiseCancellation() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedTrack, setSelectedTrack] = useState("remote-work");
  const [isNoiseCancelled, setIsNoiseCancelled] = useState(true);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const tracks = [
    { id: "remote-work", label: "Multiple noises" },
    { id: "dog", label: "Barking dog" },
    { id: "child", label: "Crying baby" },
    { id: "keyboard", label: "Keyboard clicks" },
    { id: "fan", label: "Fan noise" }
  ];

  const trustedLogos = [
    { name: "Siemens", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_siemens.svg" },
    { name: "Medium", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_medium.svg" },
    { name: "Okta", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_okta.svg" },
    { name: "Skechers", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_sketchers.svg" },
    { name: "Autodesk", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_autodesk.svg" },
    { name: "Sony", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_sony.svg" },
    { name: "Cisco", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_cisco.svg" }
  ];

  const stats = [
    { number: "450M+", label: "Hours of background noise removed" },
    { number: "80M+", label: "Hours of room echo eliminated" },
    { number: "3B+", label: "Conversations improved globally" },
    { number: "9M+", label: "Professionals trusting Silgate" }
  ];

  const oneAppCards = [
    {
      title: "Noise Cancellation",
      desc: "Remove background voices, barking pets, clacking keyboards, and room echo in real time on any mic.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_nc_card.png",
      href: "/ai-meeting-assistant/noise-cancellation"
    },
    {
      title: "Bidirectional Accent Conversion",
      desc: "Speak with clarity and understand international accents effortlessly during live calls.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_au_card.png",
      href: "/ai-meeting-assistant/accent-conversion"
    },
    {
      title: "AI Note Taker",
      desc: "Generate speaker-aware meeting transcripts, action items, and summaries without bots joining.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_note_taker_card.png",
      href: "/ai-meeting-assistant/ai-note-taker"
    }
  ];

  const ncTabs = [
    {
      id: 0,
      title: "Voice Isolation",
      subtitle: "Never worry about colleagues or family talking near your desk",
      desc: "Voice Isolation learns your unique vocal characteristics and passes ONLY your voice into the call. Background colleagues, coffee shop patrons, or TV sounds are completely eliminated.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_nc_voice_isolation.jpg"
    },
    {
      id: 1,
      title: "Background noise cancellation",
      subtitle: "Filter out dogs, loud fans, leaf blowers, and keyboard clicks",
      desc: "Trained on hundreds of thousands of diverse real-world noise samples, Silgate's deep neural networks eliminate dynamic noise in under 15ms latency.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_nc_background.jpg"
    },
    {
      id: 2,
      title: "Echo Cancellation",
      subtitle: "Eliminate cavernous room reverberation and audio feedback",
      desc: "Whether you're in an empty apartment, tiled conference room, or glass-walled office, room echo and acoustic feedback loops are removed before they reach your audience.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_nc_echo.jpg"
    }
  ];

  const steps = [
    {
      num: "01",
      title: "Install Silgate",
      desc: "Download and set up Silgate in seconds on your Mac or Windows computer.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_nc_step_1.png"
    },
    {
      num: "02",
      title: "Select Audio Devices",
      desc: "Choose Silgate Microphone and Silgate Speaker in your conferencing application settings.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_nc_step_2.png"
    },
    {
      num: "03",
      title: "Turn ON Noise Cancellation",
      desc: "Toggle Remove Noise in the Silgate widget. Experience instant silence around your voice.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_nc_step_3.png"
    }
  ];

  const platforms = [
    { name: "Zoom", logo: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_zoom_full.svg" },
    { name: "Microsoft Teams", logo: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_teams_full.svg" },
    { name: "Google Meet", logo: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_meet_full.svg" },
    { name: "Cisco Webex", logo: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_webex_full.svg" },
    { name: "Slack Huddles", logo: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_slack_full.svg" }
  ];

  const comparisonFeatures = [
    { name: "Real-time background noise removal", silgate: true, hardware: true, builtIn: "Partial" },
    { name: "Speaker-side noise cancellation (Outbound)", silgate: true, hardware: true, builtIn: true },
    { name: "Listener-side noise cancellation (Inbound)", silgate: true, hardware: false, builtIn: false },
    { name: "Voice isolation (cuts secondary voices)", silgate: true, hardware: false, builtIn: false },
    { name: "Room acoustic echo cancellation", silgate: true, hardware: "Partial", builtIn: "Partial" },
    { name: "Works with any headset & built-in mic", silgate: true, hardware: false, builtIn: true },
    { name: "Works universally across all meeting apps", silgate: true, hardware: true, builtIn: false },
    { name: "Zero heavy background CPU consumption", silgate: true, hardware: true, builtIn: false },
    { name: "Built-in AI Accent Conversion", silgate: true, hardware: false, builtIn: false },
    { name: "Built-in Bot-free AI Note Taker & Transcripts", silgate: true, hardware: false, builtIn: false }
  ];

  const testimonials = [
    {
      name: "Patrick L.",
      role: "Operations Lead",
      avatar: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_patrick.png",
      quote: "Silgate's noise cancellation transformed our remote calls. My dog barks directly next to my desk, and not a single client has ever heard him. Incredible piece of technology."
    },
    {
      name: "Michael L.",
      role: "VP of Product",
      avatar: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_michael.png",
      quote: "Being able to cancel inbound noise from other participants is a hidden superpower. When other people join with loud coffee shop noises or traffic, I just turn on Silgate Speaker and it's crystal clear."
    },
    {
      name: "Charles C.",
      role: "Founder & CEO",
      avatar: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_charles.png",
      quote: "I travel constantly and take meetings in airports, trains, and crowded hotel lobbies. Silgate makes me sound like I'm sitting inside a treated recording studio."
    }
  ];

  const blogPosts = [
    {
      title: "11 Best Noise Cancelling Apps & Software in 2026",
      desc: "A comprehensive benchmark comparison of top noise-cancelling tools for desktop and laptops.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_nc_blog_1.jpg",
      href: "/blog"
    },
    {
      title: "How Does Noise Cancelling Work?",
      desc: "Deep dive into spectral subtraction, neural beamforming, and machine learning voice isolation.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_nc_blog_2.jpg",
      href: "/blog"
    },
    {
      title: "How to Remove Background Noise: A One-Click Solution",
      desc: "Practical steps to optimize your home and hybrid office audio for maximum professional presence.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_nc_blog_3.jpg",
      href: "/blog"
    },
    {
      title: "Noise Cancellation Quality Evaluation",
      desc: "Objective PESQ and MOS benchmarks comparing software-based AI audio engines against hardware headsets.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_nc_blog_4.jpg",
      href: "/blog"
    }
  ];

  const faqs = [
    {
      q: "What does noise cancelling actually do?",
      a: "Noise cancelling software uses AI noise reduction to remove distracting sounds in real time while keeping speech clear. Silgate noise suppression filters out background noise like typing, street traffic, or chatter, so only your voice comes through naturally. This makes every call easier to follow and more professional."
    },
    {
      q: "Is 100% noise cancelling possible?",
      a: "In real life, no tool can guarantee perfect silence in every situation. But a strong noise canceling app can remove most day-to-day distractions and make your voice consistently clear. Silgate is built specifically for live calls, so its noise reduction is optimized for speech clarity, not just sound suppression."
    },
    {
      q: "How to noise cancel on PC?",
      a: "To noise cancel on PC, download and install Silgate, then open the conferencing app you use (like Zoom, Google Meet, or Teams) and set your microphone to Silgate Microphone and your speaker to Silgate Speaker. After that, open the Silgate app and choose whether you want to cancel your background noise, cancel others' noise, or both."
    },
    {
      q: "What is the best noise cancelling software?",
      a: "The best noise suppression software is the one that works in real time on your calls, across any app, without extra hardware setup. Silgate is designed as universal noise-cancelling software for meetings, so it delivers dependable noise reduction live whether you are in a home office, cafe, or open workspace."
    },
    {
      q: "Can I remove background noise from my microphone in real time?",
      a: "Yes. Silgate runs an ultra-low-latency neural network (under 15 milliseconds) directly on your device, filtering your microphone audio stream live before sending it out to your conferencing app."
    },
    {
      q: "What is the difference between noise-cancelling headphones and Silgate?",
      a: "Noise-cancelling headphones primarily reduce background noise that YOU hear through the earcups. Silgate is bidirectional: it removes background noise from YOUR microphone so others hear you clearly, and it cleans up inbound audio so you hear others without their background distractions."
    }
  ];

  return (
    <div className="bg-white text-[#131032]">
      {/* 1. HERO SECTION */}
      <section className="pt-24 md:pt-32 pb-16 bg-[#ffffff]">
        <div className="w-[calc(100%-48px)] max-w-[1366px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 max-w-[620px]">
              <div className="flex items-center gap-2 mb-6 flex-wrap">
                <span className="hero_pill text-[13px] font-bold text-[#1a1a22]">
                  <span className="text-[#614efa] font-extrabold mr-1">★ 4.8 / 5</span>
                  on G2 Crowd
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f4f4f5] text-[12px] font-semibold text-[#525069]">
                  <img
                    src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_g2_badge_1.svg"
                    alt="G2 Badge"
                    className="w-4 h-4 object-contain"
                  />
                  G2 Leader 2026
                </span>
              </div>

              <h1 className="text-[40px] sm:text-[50px] lg:text-[56px] font-bold leading-[1.15] text-[#1a1a22] tracking-tight mb-6">
                AI Noise Cancellation <br />
                <span className="gradient-purple">for clear meetings & calls</span>
              </h1>

              <p className="text-[17px] md:text-[19px] leading-[30px] text-[#525069] mb-8 font-normal">
                Eliminate background noise, barking dogs, loud typing, and room echo on any headset, microphone, or communication application. Powered by on-device Voice AI.
              </p>

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

              <div className="flex items-center gap-3 mt-8 text-[13px] text-[#75738b]">
                <span>Compatible with:</span>
                <span className="font-semibold text-[#1a1a22]">Windows 10/11, macOS (Intel & Apple Silicon)</span>
              </div>
            </div>

            <div className="flex-1 w-full max-w-[620px] rounded-[24px] overflow-hidden border border-[#e7e7ea] shadow-xl bg-[#f7f7f8]">
              <img
                src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_nc_hero.jpg"
                alt="AI Noise Cancellation in Action"
                className="w-full h-auto block object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUSTED LOGOS */}
      <section className="py-10 border-y border-[#f0f0f2] bg-[#fafafa]">
        <div className="w-[calc(100%-48px)] max-w-[1366px] mx-auto flex items-center justify-center flex-wrap gap-8 md:gap-12 opacity-75 grayscale hover:grayscale-0 transition-all">
          {trustedLogos.map((logo, idx) => (
            <img key={idx} src={logo.src} alt={logo.name} className="h-6 md:h-7 w-auto object-contain" />
          ))}
        </div>
      </section>

      {/* 3. SIMPLE STATS BOXES */}
      <section className="py-16 bg-[#ffffff]">
        <div className="w-[calc(100%-48px)] max-w-[1366px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, idx) => (
              <div
                key={idx}
                className="bg-[#fbfbfe] rounded-[20px] p-6 text-center border border-[#e7e7ea]"
              >
                <div className="text-[34px] md:text-[44px] font-extrabold text-[#614efa] mb-2">
                  {s.number}
                </div>
                <div className="text-[14px] text-[#525069] font-medium leading-[20px]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ONE APP CARDS */}
      <section className="py-16 md:py-24 bg-[#fbfbfe] border-y border-[#e7e7ea]">
        <div className="w-[calc(100%-48px)] max-w-[1366px] mx-auto">
          <div className="max-w-[700px] mb-12">
            <h2 className="text-[30px] md:text-[40px] font-bold text-[#1a1a22] leading-[1.2]">
              One app. Every Voice AI feature for meetings.
            </h2>
            <p className="text-[16px] text-[#525069] mt-3">
              Silgate combines noise removal with real-time accent conversion and automatic meeting notes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {oneAppCards.map((card, idx) => (
              <Link
                key={idx}
                to={card.href}
                className="group bg-white rounded-[24px] p-6 border border-[#e7e7ea] hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="h-[180px] rounded-[16px] overflow-hidden bg-[#f7f7f8] mb-6 flex items-center justify-center p-4">
                    <img src={card.img} alt={card.title} className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform" />
                  </div>
                  <h3 className="text-[20px] font-bold text-[#1a1a22] mb-2 group-hover:text-[#614efa] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-[14px] text-[#525069] leading-[22px]">
                    {card.desc}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-[14px] font-bold text-[#614efa]">
                  <span>Explore feature</span>
                  <img src={siteLogos.ctaPointer} alt="" className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TABS CONTENT (VOICE ISOLATION / BACKGROUND / ECHO) */}
      <section className="py-20 md:py-28 bg-[#ffffff]">
        <div className="w-[calc(100%-48px)] max-w-[1366px] mx-auto">
          <div className="text-center max-w-[760px] mx-auto mb-14">
            <h2 className="text-[32px] md:text-[44px] font-bold text-[#1a1a22]">
              Noise-free meetings with <br />
              <span className="gradient-purple">AI-powered Noise Cancellation</span>
            </h2>
          </div>

          {/* Tab buttons */}
          <div className="flex items-center justify-center gap-3 mb-10 flex-wrap">
            {ncTabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-3 rounded-full text-[14px] font-bold transition-all cursor-pointer ${
                  activeTab === idx
                    ? "bg-[#1a1a22] text-white shadow-md"
                    : "bg-[#f4f4f5] text-[#525069] hover:bg-[#e7e7ea]"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Active Tab Showcase */}
          <div className="bg-[#fbfbfe] rounded-[28px] border border-[#e7e7ea] p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-[12px] font-bold text-[#614efa] uppercase tracking-wider">
                  Technology 0{activeTab + 1}
                </span>
                <h3 className="text-[26px] md:text-[32px] font-bold text-[#1a1a22]">
                  {ncTabs[activeTab].title}
                </h3>
                <div className="text-[15px] font-semibold text-[#614efa]">
                  {ncTabs[activeTab].subtitle}
                </div>
                <p className="text-[16px] leading-[26px] text-[#525069]">
                  {ncTabs[activeTab].desc}
                </p>
                <div className="pt-4">
                  <Link
                    to="/signup"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-[10px] bg-[#614efa] text-white font-bold text-[14px] hover:bg-[#4a3bbe] transition-colors"
                  >
                    <span>Try it free</span>
                    <img src={siteLogos.ctaPointer} alt="" className="w-4 h-4 brightness-0 invert" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7 rounded-[20px] overflow-hidden border border-[#e7e7ea] shadow-md">
                <img
                  src={ncTabs[activeTab].img}
                  alt={ncTabs[activeTab].title}
                  className="w-full h-auto object-cover block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE AUDIO DEMO FRAME */}
      <section className="py-20 bg-[#14141a] text-white">
        <div className="w-[calc(100%-48px)] max-w-[1000px] mx-auto text-center">
          <span className="text-[13px] font-bold text-[#00d2c4] uppercase tracking-wider mb-2 block">
            Listen & Test Live
          </span>
          <h2 className="text-[32px] md:text-[44px] font-bold mb-4">
            Noise Cancellation in action
          </h2>
          <p className="text-[16px] text-white/70 max-w-[600px] mx-auto mb-10">
            Switch Silgate ON and OFF while listening to everyday high-decibel disturbance scenarios.
          </p>

          <div className="bg-[#1e1e26] rounded-[24px] p-6 md:p-10 border border-white/10 text-left">
            {/* Track Selector Pills */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              {tracks.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setSelectedTrack(t.id)}
                  className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-all cursor-pointer ${
                    selectedTrack === t.id
                      ? "bg-[#614efa] text-white"
                      : "bg-white/10 text-white/70 hover:bg-white/20"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Controls Bar */}
            <div className="bg-[#14141a] rounded-[16px] p-6 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#614efa] flex items-center justify-center flex-shrink-0 cursor-pointer">
                  <span className="text-xl">▶</span>
                </div>
                <div>
                  <div className="font-bold text-[15px]">Simulated Meeting Stream: {tracks.find(t => t.id === selectedTrack)?.label}</div>
                  <div className="text-[13px] text-white/60">
                    {isNoiseCancelled ? "Silgate Active: Voice Isolated" : "Raw Audio: Noise Present"}
                  </div>
                </div>
              </div>

              {/* Toggle Switch */}
              <div className="flex items-center gap-3">
                <span className="text-[14px] font-bold">
                  {isNoiseCancelled ? "With Silgate" : "Without Silgate"}
                </span>
                <button
                  onClick={() => setIsNoiseCancelled(!isNoiseCancelled)}
                  className={`w-14 h-8 rounded-full p-1 transition-colors cursor-pointer ${
                    isNoiseCancelled ? "bg-[#614efa]" : "bg-gray-600"
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full bg-white transition-transform ${
                      isNoiseCancelled ? "translate-x-6" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. HOW IT WORKS 3 STEPS */}
      <section className="py-20 md:py-28 bg-[#ffffff]">
        <div className="w-[calc(100%-48px)] max-w-[1366px] mx-auto">
          <div className="text-center max-w-[650px] mx-auto mb-16">
            <h2 className="text-[32px] md:text-[42px] font-bold text-[#1a1a22]">
              How Silgate Noise Cancelling software works
            </h2>
            <p className="text-[16px] text-[#525069] mt-3">
              Zero complicated configurations. Ready to silence noise in 3 simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((st, idx) => (
              <div
                key={idx}
                className="bg-[#f7f7f8] rounded-[24px] p-6 border border-[#e7e7ea] flex flex-col justify-between"
              >
                <div>
                  <span className="text-[32px] font-extrabold text-[#614efa] mb-3 block">
                    {st.num}
                  </span>
                  <h3 className="text-[18px] font-bold text-[#1a1a22] mb-2">
                    {st.title}
                  </h3>
                  <p className="text-[14px] text-[#525069] leading-[22px] mb-6">
                    {st.desc}
                  </p>
                </div>
                <div className="h-[200px] rounded-[16px] overflow-hidden bg-white p-4 flex items-center justify-center border border-[#e7e7ea]">
                  <img src={st.img} alt={st.title} className="max-h-full max-w-full object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CONFERENCING PLATFORMS */}
      <section className="py-16 bg-[#fafafa] border-y border-[#e7e7ea]">
        <div className="w-[calc(100%-48px)] max-w-[1366px] mx-auto text-center">
          <h2 className="text-[26px] md:text-[34px] font-bold text-[#1a1a22] mb-3">
            Works seamlessly with all conferencing platforms
          </h2>
          <p className="text-[15px] text-[#525069] mb-10">
            Because Silgate operates as a virtual audio device, it integrates natively with any app you already use.
          </p>
          <div className="flex items-center justify-center flex-wrap gap-8 md:gap-14">
            {platforms.map((p, idx) => (
              <img key={idx} src={p.logo} alt={p.name} className="h-8 md:h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
            ))}
          </div>
        </div>
      </section>

      {/* 9. COMPREHENSIVE COMPARISON TABLE */}
      <section className="py-20 md:py-28 bg-[#ffffff]">
        <div className="w-[calc(100%-48px)] max-w-[1100px] mx-auto">
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <h2 className="text-[32px] md:text-[42px] font-bold text-[#1a1a22] leading-[1.2]">
              Most comprehensive and <br />
              affordable noise cancellation
            </h2>
            <p className="text-[16px] text-[#525069] mt-3">
              See how Silgate software-level AI compares to expensive hardware headsets and default in-app filters.
            </p>
          </div>

          <div className="border border-[#e7e7ea] rounded-[24px] overflow-hidden shadow-sm">
            <div className="grid grid-cols-12 bg-[#f4f4f5] p-5 font-bold text-[14px] text-[#1a1a22] border-b border-[#e7e7ea]">
              <div className="col-span-6 sm:col-span-5">Feature Capability</div>
              <div className="col-span-3 sm:col-span-3 text-center text-[#614efa] font-extrabold text-[15px]">
                Silgate AI
              </div>
              <div className="col-span-3 sm:col-span-2 text-center text-[#75738b] hidden sm:block">
                Noise Mics
              </div>
              <div className="col-span-3 sm:col-span-2 text-center text-[#75738b]">
                In-App Filters
              </div>
            </div>

            <div className="divide-y divide-[#f0f0f2]">
              {comparisonFeatures.map((row, idx) => (
                <div key={idx} className="grid grid-cols-12 p-4 text-[14px] items-center hover:bg-[#fafafa]">
                  <div className="col-span-6 sm:col-span-5 font-medium text-[#1a1a22]">
                    {row.name}
                  </div>
                  <div className="col-span-3 sm:col-span-3 text-center font-bold text-[#614efa]">
                    {row.silgate === true ? "✓ Yes" : row.silgate}
                  </div>
                  <div className="col-span-3 sm:col-span-2 text-center text-[#75738b] hidden sm:block">
                    {row.hardware === true ? "✓ Yes" : row.hardware === false ? "✕ No" : row.hardware}
                  </div>
                  <div className="col-span-3 sm:col-span-2 text-center text-[#75738b]">
                    {row.builtIn === true ? "✓ Yes" : row.builtIn === false ? "✕ No" : row.builtIn}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. TESTIMONIALS */}
      <section className="py-20 bg-[#f9f9fb] border-y border-[#e7e7ea]">
        <div className="w-[calc(100%-48px)] max-w-[1366px] mx-auto">
          <div className="text-center max-w-[600px] mx-auto mb-14">
            <h2 className="text-[30px] md:text-[38px] font-bold text-[#1a1a22]">
              Hear it from our customers
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white rounded-[20px] p-6 border border-[#e7e7ea] shadow-xs flex flex-col justify-between">
                <p className="text-[14px] leading-[24px] text-[#525069] mb-6 italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#f0f0f2]">
                  <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover" />
                  <div>
                    <div className="text-[14px] font-bold text-[#1a1a22]">{t.name}</div>
                    <div className="text-[12px] text-[#75738b]">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. ARTICLES / CASE STUDIES */}
      <section className="py-20 bg-[#ffffff]">
        <div className="w-[calc(100%-48px)] max-w-[1366px] mx-auto">
          <div className="text-center max-w-[650px] mx-auto mb-14">
            <h2 className="text-[30px] md:text-[38px] font-bold text-[#1a1a22]">
              Explore more on noise cancellation
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogPosts.map((post, idx) => (
              <Link key={idx} to={post.href} className="group bg-[#fbfbfe] rounded-[20px] overflow-hidden border border-[#e7e7ea] flex flex-col">
                <div className="h-[180px] bg-gray-100 overflow-hidden">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-[16px] font-bold text-[#1a1a22] group-hover:text-[#614efa] transition-colors mb-2">
                      {post.title}
                    </h3>
                    <p className="text-[13px] text-[#525069] leading-[19px]">
                      {post.desc}
                    </p>
                  </div>
                  <span className="text-[13px] font-bold text-[#614efa] mt-4 inline-block">Read article →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FAQS */}
      <section className="py-20 bg-[#fbfbfe] border-t border-[#e7e7ea]">
        <div className="w-[calc(100%-48px)] max-w-[900px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1a1a22]">
              Have Questions? We’ve got answers
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

      {/* 13. FINAL CTA */}
      <section className="py-20 bg-[#1a1a22] text-white">
        <div className="w-[calc(100%-48px)] max-w-[1000px] mx-auto text-center">
          <h2 className="text-[32px] md:text-[46px] font-bold mb-6">
            Upgrade your calls with the leading noise cancelling software.
          </h2>
          <p className="text-[17px] text-white/70 max-w-[600px] mx-auto mb-10">
            Download Silgate free and enjoy studio-quality audio on your very next call.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/signup"
              className="h-[50px] px-8 rounded-[12px] bg-[#614efa] hover:bg-[#4a3bbe] text-white font-bold text-[15px] inline-flex items-center justify-center transition-colors"
            >
              Get Silgate for free
            </Link>
            <Link
              to="/contact-sales"
              className="h-[50px] px-8 rounded-[12px] border border-white/30 hover:bg-white/10 text-white font-bold text-[15px] inline-flex items-center justify-center transition-colors"
            >
              Book a demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
