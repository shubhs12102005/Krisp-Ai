import React, { useState } from "react";
import { Link } from "react-router-dom";

/**
 * Meeting Minutes Page Component.
 * High-fidelity replica of https://krisp.ai/ai-meeting-minutes/
 * Features hero with G2 ratings and participant minutes showcase graphic,
 * enterprise client logos, 4-card structured minutes workflow,
 * beyond-minutes Voice AI ecosystem cards, platform integration grid,
 * 3-step setup walkthrough, enterprise security credentials,
 * productivity articles carousel, accordion FAQs, and toggle CTA banner.
 */
export default function MeetingMinutes() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const logos = [
    { name: "Everise", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs//logo_everise.svg" },
    { name: "Concentrix", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs//logo_concentrix.svg" },
    { name: "Startek", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_startek.svg" },
    { name: "TTEC", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_ttec.svg" },
    { name: "Movate", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_movate.png" },
    { name: "SupportZebra", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs//logo_supportzebra.svg" }
  ];

  const workflowCards = [
    {
      title: "Real-Time AI Transcription",
      desc: "Capture every word with high accuracy, speaker identification, and time stamps. Accurate meeting transcripts are generated in any conferencing app you use.",
      img: "https://krisp.ai/wp-content/uploads/2025/12/live-transcripts-turned-into-minutes.png",
      tag: "Live Capture"
    },
    {
      title: "Automatic Summaries and Action Items",
      desc: "Turn conversations into concise, shareable minutes that summarize the meeting's key decisions and assign tasks automatically.",
      img: "https://krisp.ai/wp-content/uploads/2025/12/meeting-summaries-and-action-items.png",
      tag: "Auto-Structuring"
    },
    {
      title: "Navigate your meetings like a pro",
      desc: "Search across your AI meeting minutes, add tags to stay organized, and filter to find the exact decision, note, or action item in seconds.",
      img: "https://krisp.ai/wp-content/uploads/2025/12/search-accross-meeting-minutes.png",
      tag: "Smart Search"
    },
    {
      title: "Copy and share AI meeting minutes instantly",
      desc: "Simply open the meeting inside Silgate and select Copy Meeting Minutes. A complete, structured summary will be copied to your clipboard.",
      img: "https://krisp.ai/wp-content/uploads/2025/12/copy-and-paste-ai-meeting-minutes.png",
      tag: "Instant Export"
    }
  ];

  const beyondCards = [
    {
      title: "All-in-one AI Note Taker",
      desc: "Silgate is more than an AI for meeting minutes. Our AI Note Taker automatically captures notes, summaries, action items, and highlights from virtual and in-person meetings, making follow-ups effortless.",
      img: "https://krisp.ai/wp-content/uploads/2025/12/AI-note-taker.png",
      linkText: "Explore AI Note Taker",
      href: "/ai-meeting-assistant/ai-note-taker"
    },
    {
      title: "Studio-quality Noise Cancellation",
      desc: "Silgate removes background sounds so every voice is crisp and distraction-free: perfect for remote teams working from cafés, coworking spaces, or home offices.",
      img: "https://krisp.ai/wp-content/uploads/2025/12/noise-cancellation-for-remote-teams.png",
      linkText: "Explore Noise Cancellation",
      href: "/ai-meeting-assistant/noise-cancellation"
    },
    {
      title: "Voice & accent capabilities",
      desc: "Use Accent Conversion to make speech easier to understand across global teams, ensuring accurate AI meeting minutes and clear communication for every participant.",
      img: "https://krisp.ai/wp-content/uploads/2025/12/accent-conversion-for-global-teams.png",
      linkText: "Explore Accent Conversion",
      href: "/ai-meeting-assistant/accent-conversion"
    }
  ];

  const integratedApps = [
    { name: "Zoom", src: "https://krisp.ai/wp-content/uploads/2025/12/Brands-Logo-4-1.png" },
    { name: "Google Meet", src: "https://krisp.ai/wp-content/uploads/2025/12/Brands-Logo-7-1.png" },
    { name: "Microsoft Teams", src: "https://krisp.ai/wp-content/uploads/2025/12/Brands-Logo-6.png" },
    { name: "Webex", src: "https://krisp.ai/wp-content/uploads/2025/12/Brands-Logo-5.png" },
    { name: "Slack", src: "https://krisp.ai/wp-content/uploads/2025/12/Brands-Logo-8.png" },
    { name: "Discord", src: "https://krisp.ai/wp-content/uploads/2025/12/Brands-Logo-9.png" },
    { name: "Skype", src: "https://krisp.ai/wp-content/uploads/2025/12/Brands-Logo-10.png" },
    { name: "WhatsApp", src: "https://krisp.ai/wp-content/uploads/2025/12/Brands-Logo-4.png" },
    { name: "Notion", src: "https://krisp.ai/wp-content/uploads/2025/12/Brands-Logo-1-2.png" },
    { name: "Google Docs", src: "https://krisp.ai/wp-content/uploads/2025/12/Brands-Logo-3.png" },
    { name: "Confluence", src: "https://krisp.ai/wp-content/uploads/2025/12/Brands-Logo-2-1.png" }
  ];

  const setupSteps = [
    {
      step: "01",
      title: "Join your meeting with Silgate",
      desc: "Join your call or in-person meeting using Silgate AI Meeting Assistant. Silgate captures the conversation automatically in real time without intrusive bots.",
      img: "https://krisp.ai/wp-content/uploads/2025/12/Krisp-download-for-Zoom-meeting-transcriptions.png"
    },
    {
      step: "02",
      title: "AI generates structured minutes",
      desc: "After the meeting, Silgate AI meeting minutes generator produces a clear summary with key points and action items. This gives you everything needed for accurate minutes.",
      img: "https://krisp.ai/wp-content/uploads/2025/12/meeting-summaries-that-turn-into-minutes.png"
    },
    {
      step: "03",
      title: "Copy, paste, and share anywhere",
      desc: "Open the meeting, click the 3 dots (⋮), and select Copy Meeting Minutes. A minutes template is copied to your clipboard, ready to paste and edit in Docs, Notion, or Email.",
      img: "https://krisp.ai/wp-content/uploads/2025/12/copying-meeting-minutes.png"
    }
  ];

  const articles = [
    {
      title: "#1 bot-free AI note taker for online and offline meetings",
      desc: "Silgate AI Note Taker transcribes on real-time, summarizes, and shares accurate notes from any meeting.",
      img: "https://krisp.ai/wp-content/uploads/2025/12/Frame-1171276106-4.png",
      tag: "Note Taker",
      link: "/ai-meeting-assistant/ai-note-taker"
    },
    {
      title: "Best AI Meeting Minutes Apps in 2025",
      desc: "We’ll explain what makes current AI minutes different, who benefits the most, and give you a clear look at the best meeting minutes software in 2025.",
      img: "https://krisp.ai/wp-content/uploads/2025/12/Zoom-meeting-with-transcription.png",
      tag: "Productivity Guide",
      link: "/blog"
    },
    {
      title: "10 Best Noise-Cancelling Apps for Windows (Nov 2025 Update)",
      desc: "Looking for a noise-cancelling app for Windows? Here are 10 tried-and-tested options that work in 2025.",
      img: "https://krisp.ai/wp-content/uploads/2025/12/Frame-1171276106-5.png",
      tag: "Noise Cancellation",
      link: "/ai-meeting-assistant/noise-cancellation"
    },
    {
      title: "AI Meeting transcription",
      desc: "Powered by AI, Silgate goes beyond recording and delivers accurate meeting transcriptions you can trust.",
      img: "https://krisp.ai/wp-content/uploads/2025/12/Frame-1171276106-3-1.png",
      tag: "Transcription",
      link: "/ai-meeting-assistant/meeting-transcription"
    },
    {
      title: "AI Meeting Summary Made Fast & Accurate",
      desc: "Meetings should be about discussions, not note-taking. Silgate’s AI meeting summarizer captures every key detail, so you can focus on the conversation.",
      img: "https://krisp.ai/wp-content/uploads/2025/12/img_recording_apps-1.png",
      tag: "Meeting Summary",
      link: "/ai-meeting-assistant/meeting-summary"
    }
  ];

  const faqs = [
    {
      q: "Can we edit or format the minutes?",
      a: "After the minutes are copied to your clipboard, you can paste them anywhere and edit or format them however you want before sharing."
    },
    {
      q: "Do Silgate meeting minutes work for multilingual or accented speech?",
      a: "Yes. Silgate supports multiple languages and is optimized for diverse accents and speech patterns across global teams."
    },
    {
      q: "What happens to our meeting data?",
      a: "Data ownership remains with you. You can configure retention settings and request deletion at any time. Silgate operates with strict zero-data-retention compliance options."
    },
    {
      q: "What industries benefit most from Silgate meeting minutes?",
      a: "Silgate is built for a wide range of sectors including corporate boards, nonprofits, construction, homeowners’ associations, government, project management, staff operations, and legal services."
    },
    {
      q: "What’s the difference between AI meeting notes and AI meeting minutes?",
      a: "AI meeting notes focus on capturing what was discussed such as summaries, highlights, and action items that help participants remember key points. AI meeting minutes, on the other hand, are structured, shareable records intended for formal or official use (like board, committee, or project documentation). Silgate helps you generate both!"
    },
    {
      q: "How does Silgate differ from other AI meeting minutes apps?",
      a: "Unlike typical transcription tools, Silgate creates more structured outputs, including summaries, action items, decisions, and follow-ups. It works across both virtual and in-person meetings, integrates with major conferencing platforms, and includes enterprise-grade noise reduction plus strong privacy and security controls."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#111827] font-sans antialiased overflow-x-hidden selection:bg-[#4338ca] selection:text-white">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-gradient-to-b from-[#fbfaff] via-white to-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              {/* G2 Badges Row */}
              <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <img
                  src="https://krisp.ai/wp-content/uploads/2025/12/VoiceRecognition_HighPerformer_HighPerformer-1.png"
                  alt="G2 High Performer"
                  className="h-12 w-auto object-contain drop-shadow-sm"
                  loading="lazy"
                />
                <img
                  src="https://krisp.ai/wp-content/uploads/2025/12/VoiceRecognition_MomentumLeader_Leader-1.png"
                  alt="G2 Momentum Leader"
                  className="h-12 w-auto object-contain drop-shadow-sm"
                  loading="lazy"
                />
                <img
                  src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_g2_ratings.svg"
                  alt="G2 4.8 Rating"
                  className="h-10 w-auto object-contain"
                  loading="lazy"
                />
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#0f172a] leading-[1.12] tracking-tight">
                AI Meeting Minutes that{" "}
                <span className="bg-gradient-to-r from-[#4338ca] via-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent">
                  write themselves
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-[#4b5563] leading-relaxed max-w-xl mx-auto lg:mx-0">
                Silgate AI turns your meetings into clean, shareable minutes automatically — structured decisions, task assignments, and verbatim quotes ready to paste into any document.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/signup"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-white bg-[#4338ca] hover:bg-[#3730a3] shadow-lg shadow-[#4338ca]/25 hover:shadow-xl hover:shadow-[#4338ca]/30 transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  Get Silgate for free
                </Link>
                <Link
                  to="/contact-sales"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-[#1f2937] bg-white border border-[#e5e7eb] hover:bg-[#f9fafb] hover:border-[#d1d5db] shadow-sm transition-all duration-200"
                >
                  Book a demo
                </Link>
              </div>

              <div className="pt-2 flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-[#6b7280]">
                <svg className="w-4 h-4 text-[#10b981]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>No credit card required. Works natively with all meeting apps.</span>
              </div>
            </div>

            {/* Right Hero Graphic */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl p-2 bg-gradient-to-tr from-[#ede9fe] to-white/70 shadow-2xl border border-[#e0e7ff]/70">
                <img
                  src="https://krisp.ai/wp-content/uploads/2025/12/meeting-minutes-for-meeting-participants.png"
                  alt="AI Meeting Minutes interface showing automated action items, decisions, and attendees"
                  className="w-full h-auto rounded-xl shadow-inner object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ENTERPRISE LOGOS ROW */}
      <section className="py-12 border-y border-[#f3f4f6] bg-[#fafafa]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <p className="text-center text-xs uppercase tracking-wider font-semibold text-[#6b7280] mb-8">
            Trusted by global leaders for accurate, confidential meeting records
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-80 grayscale hover:grayscale-0 transition-all duration-300">
            {logos.map((logo, idx) => (
              <img
                key={idx}
                src={logo.src}
                alt={logo.name}
                className="h-7 sm:h-8 w-auto object-contain transition-transform duration-200 hover:scale-105"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. STRUCTURED WORKFLOW CARDS */}
      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-[#eef2ff] text-[#4338ca]">
              From Speech to Document
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
              From live conversations to structured AI meeting minutes
            </h2>
            <p className="text-base sm:text-lg text-[#64748b]">
              Say goodbye to messy personal notes. Silgate turns spoken dialogue into standardized, objective meeting records.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {workflowCards.map((card, idx) => (
              <div
                key={idx}
                className="group flex flex-col rounded-2xl border border-[#e2e8f0] bg-white p-7 sm:p-9 shadow-sm hover:shadow-xl hover:border-[#c7d2fe] transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-md bg-[#eef2ff] text-[#4338ca]">
                    {card.tag}
                  </span>
                  <span className="text-xs font-semibold text-[#94a3b8]">0{idx + 1}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1e293b] mb-3 group-hover:text-[#4338ca] transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mb-6 flex-1">
                  {card.desc}
                </p>
                <div className="rounded-xl overflow-hidden border border-[#f1f5f9] bg-[#f8fafc] p-3 shadow-inner">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-auto rounded-lg object-cover transform group-hover:scale-[1.02] transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. YOUR AI ASSISTANT — BEYOND MEETING MINUTES */}
      <section className="py-20 bg-[#f8fafc] border-y border-[#e2e8f0]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-[#e0e7ff] text-[#4338ca]">
              Comprehensive Voice AI Ecosystem
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
              Your AI assistant — beyond Meeting Minutes
            </h2>
            <p className="text-base sm:text-lg text-[#64748b]">
              Meeting minutes are only one part of smooth teamwork. Silgate covers your entire voice workflow with world-class noise reduction and real-time accent conversion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beyondCards.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col rounded-2xl bg-white border border-[#e2e8f0] p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-[#c7d2fe] transition-all duration-300"
              >
                <div className="rounded-xl overflow-hidden mb-6 bg-[#f1f5f9] p-3">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-44 object-contain rounded-lg"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#1e293b] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[#64748b] leading-relaxed mb-6 flex-1">
                  {item.desc}
                </p>
                <Link
                  to={item.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4338ca] hover:text-[#3730a3] group"
                >
                  <span>{item.linkText}</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. EVERYWHERE YOU WORK (PLATFORM INTEGRATIONS) */}
      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-3xl mx-auto mb-14 space-y-4">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-[#eef2ff] text-[#4338ca]">
              Universal Compatibility
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
              AI Meeting Minutes, everywhere you work
            </h2>
            <p className="text-base sm:text-lg text-[#64748b]">
              Turn recordings into actionable AI meeting minutes and keep them accessible across all your favorite collaboration and document tools.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {integratedApps.map((brand, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-5 rounded-xl border border-[#f1f5f9] bg-[#fafafa] hover:bg-white hover:border-[#c7d2fe] hover:shadow-md transition-all duration-200"
              >
                <img
                  src={brand.src}
                  alt={brand.name}
                  className="h-10 w-10 object-contain mb-2"
                  loading="lazy"
                />
                <span className="text-xs font-semibold text-[#475569]">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HOW TO GENERATE MEETING MINUTES (3 STEPS) */}
      <section className="py-20 bg-[#fbfaff] border-t border-[#f0f0ff]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-[#ede9fe] text-[#5b21b6]">
              Simple 3-Step Setup
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
              How to generate meeting minutes with Silgate
            </h2>
            <p className="text-base sm:text-lg text-[#64748b]">
              No awkward bot invitations, no complicated configuration. Capture minutes instantly in three easy steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {setupSteps.map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col rounded-2xl bg-white border border-[#e2e8f0] p-6 sm:p-7 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="rounded-xl overflow-hidden mb-6 bg-[#f8fafc] border border-[#f1f5f9] p-2">
                  <img
                    src={step.img}
                    alt={step.title}
                    className="w-full h-44 object-contain rounded-lg"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-[#4338ca] text-white text-xs font-bold flex items-center justify-center">
                    {step.step}
                  </span>
                  <h3 className="text-lg font-bold text-[#1e293b]">
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm text-[#64748b] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. ENTERPRISE-GRADE SECURITY */}
      <section className="py-20 bg-white border-t border-[#f1f5f9]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-[#ecfdf5] text-[#065f46]">
                Data Protection & Privacy
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
                Enterprise-grade security for all your meeting minutes
              </h2>
              <p className="text-base text-[#64748b] leading-relaxed">
                Silgate is designed from the ground up to protect confidential boardroom discussions, intellectual property, and client conversations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="p-5 rounded-xl border border-[#e2e8f0] bg-[#f8fafc]">
                  <h3 className="text-base font-bold text-[#1e293b] mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#10b981]" />
                    Governance
                  </h3>
                  <ul className="text-xs text-[#64748b] space-y-2">
                    <li>• Role-based access control (RBAC)</li>
                    <li>• Granular retention & purge controls</li>
                    <li>• Comprehensive audit logging</li>
                  </ul>
                </div>
                <div className="p-5 rounded-xl border border-[#e2e8f0] bg-[#f8fafc]">
                  <h3 className="text-base font-bold text-[#1e293b] mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#4338ca]" />
                    Privacy & Security
                  </h3>
                  <ul className="text-xs text-[#64748b] space-y-2">
                    <li>• Zero data retention options</li>
                    <li>• TLS 1.3 & AES-256 data encryption</li>
                    <li>• SOC 2 Type II, GDPR, HIPAA ready</li>
                  </ul>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/security"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4338ca] hover:text-[#3730a3]"
                >
                  <span>Learn more about Silgate Trust & Security</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="p-8 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] shadow-sm max-w-md w-full text-center">
                <img
                  src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_security_badges.png"
                  alt="SOC2, GDPR, HIPAA, and ISO security badges"
                  className="w-full h-auto object-contain mx-auto"
                  loading="lazy"
                />
                <p className="text-xs text-[#94a3b8] mt-4 font-medium">
                  Audited annually by independent third-party cybersecurity assessors
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. ARTICLES / PRODUCTIVITY CAROUSEL */}
      <section className="py-20 bg-[#f8fafc] border-t border-[#e2e8f0]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-[#eef2ff] text-[#4338ca] mb-2">
                Resources
              </span>
              <h2 className="text-3xl font-extrabold text-[#0f172a]">
                Explore more on productivity
              </h2>
            </div>
            <Link
              to="/blog"
              className="mt-4 md:mt-0 text-sm font-semibold text-[#4338ca] hover:text-[#3730a3] inline-flex items-center gap-1"
            >
              <span>View all guides</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.slice(0, 3).map((art, idx) => (
              <Link
                key={idx}
                to={art.link}
                className="group flex flex-col rounded-xl overflow-hidden bg-white border border-[#e2e8f0] hover:shadow-lg hover:border-[#c7d2fe] transition-all duration-300"
              >
                <div className="h-44 bg-[#e2e8f0] overflow-hidden">
                  <img
                    src={art.img}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs font-semibold text-[#4338ca] uppercase tracking-wider mb-2">
                    {art.tag}
                  </span>
                  <h3 className="text-base font-bold text-[#1e293b] mb-2 group-hover:text-[#4338ca] transition-colors">
                    {art.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed line-clamp-3">
                    {art.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. ACCORDION FAQ SECTION */}
      <section className="py-20 bg-white border-t border-[#f1f5f9]">
        <div className="max-w-[880px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-3">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-[#eef2ff] text-[#4338ca]">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
              FAQs about AI meeting minutes software
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-[#e5e7eb] bg-white overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <span className="text-base sm:text-lg font-semibold text-[#111827]">
                      {faq.q}
                    </span>
                    <span className="ml-4 flex-shrink-0 w-8 h-8 rounded-full bg-[#f3f4f6] flex items-center justify-center text-[#4b5563] text-lg font-bold">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm sm:text-base text-[#4b5563] leading-relaxed border-t border-[#f3f4f6] pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. TOGGLE BANNER (FINAL CTA) */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-r from-[#312e81] via-[#3730a3] to-[#4338ca] text-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Get Your AI Minutes of Meetings Instantly
          </h2>
          <p className="text-base sm:text-lg text-indigo-100 max-w-2xl mx-auto leading-relaxed">
            Start creating clean, shareable minutes for every call — without taking a single note. Works on Zoom, Google Meet, Teams, and in-person rooms.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/signup"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-[#312e81] bg-white hover:bg-[#f8fafc] shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Get Silgate for free
            </Link>
            <Link
              to="/contact-sales"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-white border border-white/30 hover:bg-white/10 transition-all duration-200"
            >
              Talk to Sales
            </Link>
          </div>
          <p className="text-xs text-indigo-200 pt-2">
            No credit card required. Free tier available with automatic minutes export.
          </p>
        </div>

        {/* Ambient background decoration */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
      </section>
    </div>
  );
}
