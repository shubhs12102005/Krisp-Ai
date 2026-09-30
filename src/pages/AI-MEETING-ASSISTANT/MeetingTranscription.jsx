import React, { useState } from "react";
import { Link } from "react-router-dom";
import { siteLogos } from "../../utils/constants";

/**
 * Meeting Transcription Page Component.
 * High-fidelity replica of https://krisp.ai/meeting-transcription/
 * Recreates hero with G2 ratings, global BPO client logos, 4-stat metrics row,
 * one-app cards, 5-feature showcase with live screenshots, why-choose section with
 * sharing graphics, CRM integrations, 3-step setup, customer testimonials, enterprise
 * security, related articles, accordion FAQs, and toggle CTA.
 */
export default function MeetingTranscription() {
  const [activeTab, setActiveTab] = useState(0);
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

  const stats = [
    { num: "5 hours", label: "Saved weekly per meeting host" },
    { num: "17+ languages", label: "Supported globally with high accuracy" },
    { num: "130M+", label: "Call transcripts successfully generated" },
    { num: "7M+", label: "Active professionals worldwide" }
  ];

  const oneAppCards = [
    {
      title: "AI Note Taker",
      desc: "Instant automated notes, summaries, and action item extraction without intrusive bots.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_note_taker_card.png",
      href: "/ai-meeting-assistant/ai-note-taker"
    },
    {
      title: "Accent Conversion",
      desc: "Neutralize accents in real time so global team members communicate with total clarity.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_au_card.png",
      href: "/ai-meeting-assistant/accent-conversion"
    },
    {
      title: "Noise Cancellation",
      desc: "Remove all background chatter, typing, and room echo before it enters your transcripts.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_nc_card.png",
      href: "/ai-meeting-assistant/noise-cancellation"
    }
  ];

  const scrollTabs = [
    {
      title: "Live meeting transcripts",
      desc: "Silgate produces live, word-for-word transcripts as you talk in Zoom, Teams, Google Meet, or Webex. Stay engaged in the conversation while Silgate handles every detail.",
      checks: [
        "Real-time speech-to-text with 96%+ accuracy",
        "Cleaned by noise cancellation before transcription",
        "Search through live transcript during the call"
      ],
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_live_meeting_transcripts.png"
    },
    {
      title: "3 Transcription modes",
      desc: "Select the recording profile that fits your company's privacy rules: Audio & Video, Audio Only, or Transcript Only (zero recorded media saved).",
      checks: [
        "Transcript Only mode for strict compliance environments",
        "Audio Only mode for lightweight documentation",
        "Full AV capture with synchronised playback scrubber"
      ],
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_transcription_modes.png"
    },
    {
      title: "AI meeting transcription with speaker identification",
      desc: "Automatically differentiate each speaker in the room. Silgate recognizes voice signatures and labels each statement accurately.",
      checks: [
        "Automated speaker attribution and timestamps",
        "Custom vocabulary for company acronyms and names",
        "Quickly reassign or edit speaker tags after the call"
      ],
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_speaker_identification.png"
    },
    {
      title: "Transcribe pre-recorded meetings",
      desc: "Already have audio or video files? Upload MP3, WAV, MP4, or MOV recordings and generate comprehensive transcripts in minutes.",
      checks: [
        "Batch file upload up to 1GB per file",
        "Handles phone calls, voice memos, and Zoom cloud archives",
        "Generates the same structured AI notes and summaries"
      ],
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_transcribe_recordings.png"
    },
    {
      title: "Notes and summaries from every transcript",
      desc: "Transcripts are automatically transformed into structured meeting minutes with key takeaways, decisions made, and assigned action items.",
      checks: [
        "Auto-generate bulleted summaries and executive briefs",
        "One-click sync to Slack, Notion, and CRM",
        "Ask AI questions directly against the meeting transcript"
      ],
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_ai_notes_summaries.png"
    }
  ];

  const whyChoose = [
    {
      title: "Easy sharing and collaboration",
      desc: "Share meeting transcripts with team members or clients via secure links or direct export. Keep everyone aligned without requiring them to sit through 60-minute recordings.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_easy_sharing.png"
    },
    {
      title: "AI chat and searchable archives",
      desc: "Never lose valuable meeting knowledge. Search across past conversations, ask questions about what was decided, and surface key quotes instantly.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_ai_chat_archives.png"
    }
  ];

  const crmLogos = [
    { name: "Salesforce", icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_salesforce.svg" },
    { name: "HubSpot", icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_hubspot.svg" },
    { name: "Pipedrive", icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_pipedrive.svg" },
    { name: "Affinity", icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_affinity.svg" },
    { name: "Asana", icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_asana.svg" },
    { name: "Jira", icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_jira.svg" }
  ];

  const steps = [
    {
      num: "01",
      title: "Set up Silgate app",
      desc: "Install the app and select your standard microphone and speaker.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_transcription_step_1.png"
    },
    {
      num: "02",
      title: "Start meeting & transcribe",
      desc: "Turn on transcription from the meeting widget. Transcripts stream live.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_transcription_step_2.png"
    },
    {
      num: "03",
      title: "Review notes & share",
      desc: "Access instant summaries, edit text, and export to your team tools.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_note_taker_step_3.png"
    }
  ];

  const testimonials = [
    {
      name: "Patrick L.",
      role: "Operations Director",
      avatar: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_patrick.png",
      quote: "Silgate's transcription is unmatched in accuracy because it removes the noise BEFORE transcribing. Even when colleagues speak over each other, the AI cleanly identifies both speakers."
    },
    {
      name: "Michael L.",
      role: "Engineering Manager",
      avatar: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_michael.png",
      quote: "No bots joining our internal Slack Huddles or customer Zoom calls. It captures directly from my audio drivers, making it the most private transcription tool we've tested."
    },
    {
      name: "Carlos P.",
      role: "Consultant",
      avatar: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_carlos.png",
      quote: "We run interviews in Spanish and English. Silgate handles both flawlessly and provides timestamped transcripts with speaker names right as the call ends."
    }
  ];

  const articles = [
    {
      title: "Zoom Transcription: Complete Guide & Best Practices",
      desc: "How to capture and automate Zoom transcripts without bots.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_case_study_note_4.png",
      href: "/blog"
    },
    {
      title: "Best Transcription Software for Remote Teams in 2026",
      desc: "Evaluating accuracy, pricing, security, and multi-language support.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_case_study_note_3.png",
      href: "/blog"
    },
    {
      title: "Best AI Note-Taking Apps for Fast Follow-ups",
      desc: "Compare how top transcription engines turn raw audio into action.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_case_study_note_1.png",
      href: "/blog"
    }
  ];

  const faqs = [
    {
      q: "Can AI transcribe a meeting?",
      a: "Yes. AI can capture conversations in real time and convert them into accurate text. Silgate uses advanced speech recognition to deliver up to 96% accurate transcriptions in 17+ languages."
    },
    {
      q: "Which AI meeting tool offers the best transcription features?",
      a: "Many tools offer transcription, but Silgate stands out by combining 96% accuracy, multi-language support, speaker identification, action items, summaries, and built-in noise cancellation."
    },
    {
      q: "Is there an AI tool that can transcribe for free?",
      a: "Yes. You can try Silgate's AI meeting transcription on our free tier. Get speaker identification, summaries, and action items, then upgrade anytime for continued high-volume access."
    },
    {
      q: "What are the benefits of meeting transcription?",
      a: "Meeting transcription saves time, reduces manual note-taking, and makes every discussion easy to search and share. It keeps projects on track, helps absent team members catch up quickly, and creates a reliable record of key decisions."
    },
    {
      q: "How do I transcribe a meeting on my phone?",
      a: "Install the Silgate mobile app, join or start a meeting, and tap to record. The app delivers live transcription and stores the transcript securely in your account."
    },
    {
      q: "Can AI transcribe interviews?",
      a: "Yes. Silgate can transcribe interviews with high accuracy, identify speakers, and create summaries. Ideal for journalists, researchers, and recruiters."
    },
    {
      q: "Where are my meeting transcripts stored?",
      a: "All transcripts are securely stored in your Silgate account. Data is encrypted in transit and at rest, and you can download or share transcripts anytime."
    }
  ];

  return (
    <div className="bg-white text-[#131032]">
      {/* 1. HERO SECTION */}
      <section className="pt-24 md:pt-32 pb-16 bg-[#ffffff]">
        <div className="w-[calc(100%-48px)] max-w-[1366px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 max-w-[640px]">
              <div className="flex items-center gap-2 mb-6 flex-wrap">
                <span className="hero_pill text-[13px] font-bold text-[#1a1a22]">
                  <span className="text-[#614efa] font-extrabold mr-1">★ 4.8 / 5</span>
                  Top Rated Transcription
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f4f4f5] text-[12px] font-semibold text-[#525069]">
                  <img
                    src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_g2_badge_1.svg"
                    alt=""
                    className="w-4 h-4 object-contain"
                  />
                  G2 High Performer
                </span>
              </div>

              <h1 className="text-[38px] sm:text-[48px] lg:text-[54px] font-bold leading-[1.15] text-[#1a1a22] tracking-tight mb-6">
                AI Meeting Transcription — <br />
                <span className="gradient-purple">Accurate & Bot-Free</span>
              </h1>

              <p className="text-[17px] md:text-[19px] leading-[30px] text-[#525069] mb-8 font-normal">
                Effortlessly capture live meetings, pre-recorded audio, and video files with speaker labels, timestamps, and smart AI summaries across all your communication apps.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/signup"
                  className="h-[48px] px-8 rounded-[12px] bg-[#614efa] hover:bg-[#4a3bbe] text-white font-bold text-[15px] inline-flex items-center justify-center transition-colors shadow-sm"
                >
                  Start transcribing for free
                </Link>
                <Link
                  to="/contact-sales"
                  className="h-[48px] px-8 rounded-[12px] border border-[#23232e] text-[#1a1a22] hover:bg-[#1a1a22] hover:text-white font-bold text-[15px] inline-flex items-center justify-center transition-colors"
                >
                  Book a demo
                </Link>
              </div>
            </div>

            <div className="flex-1 w-full max-w-[620px] rounded-[24px] overflow-hidden border border-[#e7e7ea] shadow-xl bg-[#f7f7f8]">
              <img
                src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_live_meeting_transcripts.png"
                alt="AI Meeting Transcription"
                className="w-full h-auto block object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. LOGOS */}
      <section className="py-10 border-y border-[#f0f0f2] bg-[#fafafa]">
        <div className="w-[calc(100%-48px)] max-w-[1366px] mx-auto flex items-center justify-center flex-wrap gap-8 md:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all">
          {logos.map((lg, idx) => (
            <img key={idx} src={lg.src} alt={lg.name} className="h-6 md:h-7 w-auto object-contain" />
          ))}
        </div>
      </section>

      {/* 3. STATS */}
      <section className="py-16 bg-[#ffffff]">
        <div className="w-[calc(100%-48px)] max-w-[1366px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, idx) => (
              <div key={idx} className="bg-[#fbfbfe] rounded-[20px] p-6 text-center border border-[#e7e7ea]">
                <div className="text-[32px] md:text-[42px] font-extrabold text-[#614efa] mb-2">{s.num}</div>
                <div className="text-[14px] text-[#525069] font-medium">{s.label}</div>
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
              Silgate combines transcription with world-class noise cancellation and real-time accent conversion.
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

      {/* 5. SCROLL TABS FOR TRANSCRIPTION */}
      <section className="py-20 md:py-28 bg-[#ffffff]">
        <div className="w-[calc(100%-48px)] max-w-[1366px] mx-auto">
          <div className="text-center max-w-[760px] mx-auto mb-14">
            <h2 className="text-[32px] md:text-[44px] font-bold text-[#1a1a22]">
              Capture every conversation with <br />
              <span className="gradient-purple">Silgate AI Meeting Transcription</span>
            </h2>
          </div>

          <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
            {scrollTabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-5 py-3 rounded-full text-[14px] font-bold transition-all cursor-pointer ${
                  activeTab === idx
                    ? "bg-[#614efa] text-white shadow-md"
                    : "bg-[#f4f4f5] text-[#525069] hover:bg-[#e7e7ea]"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <div className="bg-[#fbfbfe] rounded-[28px] border border-[#e7e7ea] p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5 space-y-5">
                <span className="text-[12px] font-bold text-[#614efa] uppercase tracking-wider">
                  Transcription Feature 0{activeTab + 1}
                </span>
                <h3 className="text-[26px] md:text-[32px] font-bold text-[#1a1a22]">
                  {scrollTabs[activeTab].title}
                </h3>
                <p className="text-[16px] leading-[26px] text-[#525069]">
                  {scrollTabs[activeTab].desc}
                </p>
                <div className="space-y-3">
                  {scrollTabs[activeTab].checks.map((chk, cIdx) => (
                    <div key={cIdx} className="flex items-center gap-3 text-[14px] font-medium text-[#24232d]">
                      <span className="w-5 h-5 rounded-full bg-[#cef4ec] text-[#008065] flex items-center justify-center flex-shrink-0 text-xs font-bold">
                        ✓
                      </span>
                      <span>{chk}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7 rounded-[20px] overflow-hidden border border-[#e7e7ea] shadow-md bg-white p-4 flex items-center justify-center">
                <img
                  src={scrollTabs[activeTab].img}
                  alt={scrollTabs[activeTab].title}
                  className="w-full h-auto object-contain max-h-[420px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE */}
      <section className="py-20 bg-[#fafafa] border-y border-[#e7e7ea]">
        <div className="w-[calc(100%-48px)] max-w-[1366px] mx-auto">
          <div className="text-center max-w-[650px] mx-auto mb-16">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1a1a22]">
              Why choose Silgate for meeting transcription
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChoose.map((wc, idx) => (
              <div key={idx} className="bg-white rounded-[24px] p-8 border border-[#e7e7ea] shadow-xs flex flex-col justify-between">
                <div>
                  <h3 className="text-[22px] font-bold text-[#1a1a22] mb-3">{wc.title}</h3>
                  <p className="text-[15px] text-[#525069] leading-[24px] mb-6">{wc.desc}</p>
                </div>
                <div className="rounded-[16px] overflow-hidden bg-[#f7f7f8] p-4 flex items-center justify-center border border-[#e7e7ea]">
                  <img src={wc.img} alt={wc.title} className="max-h-[220px] w-auto object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. INTEGRATIONS */}
      <section className="py-20 bg-[#ffffff]">
        <div className="w-[calc(100%-48px)] max-w-[1366px] mx-auto text-center">
          <h2 className="text-[30px] md:text-[38px] font-bold text-[#1a1a22] mb-3">
            Your meeting transcription app, seamlessly integrated
          </h2>
          <p className="text-[15px] text-[#525069] mb-12">
            Push transcripts and summaries into your daily toolchain automatically.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {crmLogos.map((crm, idx) => (
              <div key={idx} className="bg-[#fbfbfe] rounded-[16px] p-5 border border-[#e7e7ea] flex flex-col items-center justify-center gap-3">
                <img src={crm.icon} alt={crm.name} className="w-10 h-10 object-contain" />
                <span className="text-[13px] font-bold text-[#1a1a22]">{crm.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. HOW IT WORKS */}
      <section className="py-20 bg-[#f9f9fb] border-y border-[#e7e7ea]">
        <div className="w-[calc(100%-48px)] max-w-[1366px] mx-auto">
          <div className="text-center max-w-[600px] mx-auto mb-16">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1a1a22]">
              How meeting transcription AI works
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((st, idx) => (
              <div key={idx} className="bg-white rounded-[24px] p-6 border border-[#e7e7ea] flex flex-col justify-between">
                <div>
                  <span className="text-[28px] font-extrabold text-[#614efa] mb-3 block">{st.num}</span>
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

      {/* 9. TESTIMONIALS */}
      <section className="py-20 bg-[#ffffff]">
        <div className="w-[calc(100%-48px)] max-w-[1366px] mx-auto">
          <div className="text-center max-w-[600px] mx-auto mb-14">
            <h2 className="text-[30px] md:text-[38px] font-bold text-[#1a1a22]">
              Hear it from our customers
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-[#fbfbfe] rounded-[20px] p-6 border border-[#e7e7ea] flex flex-col justify-between">
                <p className="text-[14px] leading-[24px] text-[#525069] mb-6 italic">"{t.quote}"</p>
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

      {/* 10. ARTICLES */}
      <section className="py-20 bg-[#fafafa] border-t border-[#e7e7ea]">
        <div className="w-[calc(100%-48px)] max-w-[1366px] mx-auto">
          <div className="text-center max-w-[650px] mx-auto mb-14">
            <h2 className="text-[30px] md:text-[38px] font-bold text-[#1a1a22]">
              Explore more on transcripts and notes
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((art, idx) => (
              <Link key={idx} to={art.href} className="group bg-white rounded-[20px] overflow-hidden border border-[#e7e7ea] hover:shadow-lg transition-all flex flex-col">
                <div className="h-[180px] bg-gray-100 overflow-hidden">
                  <img src={art.img} alt={art.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-[16px] font-bold text-[#1a1a22] group-hover:text-[#614efa] transition-colors mb-2">{art.title}</h3>
                    <p className="text-[13px] text-[#525069] leading-[19px]">{art.desc}</p>
                  </div>
                  <span className="text-[13px] font-bold text-[#614efa] mt-4 inline-block">Read article →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FAQS */}
      <section className="py-20 bg-[#ffffff] border-t border-[#e7e7ea]">
        <div className="w-[calc(100%-48px)] max-w-[900px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1a1a22]">
              Meeting Transcription FAQs
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-[#e7e7ea] rounded-[16px] bg-[#fbfbfe] overflow-hidden">
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

      {/* 12. FINAL CTA */}
      <section className="py-20 bg-[#614efa] text-white">
        <div className="w-[calc(100%-48px)] max-w-[1000px] mx-auto text-center">
          <h2 className="text-[32px] md:text-[46px] font-bold mb-6">
            You're one click away from accurately transcribing your meetings.
          </h2>
          <p className="text-[17px] text-white/80 max-w-[600px] mx-auto mb-10">
            Join millions of professionals who turn speech into organized action with Silgate.
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
