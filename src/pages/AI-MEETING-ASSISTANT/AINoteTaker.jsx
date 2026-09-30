import React, { useState } from "react";
import { Link } from "react-router-dom";
import { siteLogos } from "../../utils/constants";

/**
 * AI Note Taker Page Component.
 * High-fidelity replica of https://krisp.ai/ai-note-taker/
 * Complete with Hero, Client Logos, Stats Grid, One-App Suite, Interactive Feature Rail
 * with dual videos and audio demos, Why Teams Choose section, CRM Ecosystem, 3-Step Setup,
 * Competitor Comparison Matrix, Testimonials, Enterprise Compliance, Knowledge Base,
 * Accordion FAQs, and Global Conversion Banner.
 */
export default function AINoteTaker() {
  const [activeTab, setActiveTab] = useState(0);
  const [noiseDemoOn, setNoiseDemoOn] = useState(true);
  const [accentDemoOn, setAccentDemoOn] = useState(true);
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
    { num: "5 hours", label: "Saved weekly on manual note-taking" },
    { num: "17+ languages", label: "Transcribed and summarized live" },
    { num: "130M+", label: "Productive meetings captured" },
    { num: "7M+", label: "Users worldwide trust Silgate Note Taker" }
  ];

  const oneAppCards = [
    {
      title: "AI Note Taker",
      desc: "Turn conversations into organized notes, action lists, and summaries with zero typing.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_note_taker_card.png",
      href: "/ai-meeting-assistant/ai-note-taker"
    },
    {
      title: "Accent Conversion - Listener side",
      desc: "Neutralize accents on your speakers during calls for effortless cross-cultural collaboration.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_au_card.png",
      href: "/ai-meeting-assistant/accent-conversion"
    },
    {
      title: "Noise Cancellation",
      desc: "Ensure clear audio before note generation by stripping out room echo and ambient distractions.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_nc_card.png",
      href: "/ai-meeting-assistant/noise-cancellation"
    }
  ];

  const scrollTabs = [
    {
      title: "AI notes from online & in-person meetings",
      desc: "Silgate captures your conversations silently from your desktop or mobile app. No awkward bots showing up in the attendee list.",
      checks: [
        "100% Bot-free architecture for maximum meeting etiquette",
        "Records both sides of conversation in full fidelity",
        "Supports online calls and in-person walk-and-talks"
      ],
      mediaType: "video",
      videoSrc: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/video_ai_note_transcript.mp4"
    },
    {
      title: "Automated meeting transcription",
      desc: "Accurate real-time speech-to-text with automated speaker identification and clickable timestamps.",
      checks: [
        "96%+ Word Error Rate accuracy across 17+ languages",
        "Click any sentence in the transcript to hear audio replay",
        "Search through months of meetings in milliseconds"
      ],
      mediaType: "video",
      videoSrc: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/video_ai_note_notes.mp4"
    },
    {
      title: "One AI Note Taker for every meeting platform",
      desc: "Because Silgate operates at the system audio driver layer, it works universally in Zoom, Microsoft Teams, Google Meet, Slack, Webex, and WhatsApp.",
      checks: [
        "Never worry about third-party bot permissions or room restrictions",
        "Works even if you are not the meeting host",
        "Unified dashboard organizes meetings across all platforms"
      ],
      mediaType: "image",
      imgSrc: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_ai_note_taker.png"
    },
    {
      title: "Noise Cancellation for clear meetings",
      desc: "Clean transcripts require clean audio. Silgate filters out background barking, construction, and keyboard clicks before passing audio to the transcription model.",
      checks: [
        "Bidirectional: cancels noise on both microphone and speakers",
        "Voice Isolation locks onto the primary speaker",
        "Drastically boosts transcription accuracy on technical terms"
      ],
      mediaType: "noiseDemo"
    },
    {
      title: "Real-Time Accent Conversion for better meetings",
      desc: "Eliminate accent barriers during international stakeholder syncs. Silgate converts accents live for crystal-clear team alignment.",
      checks: [
        "Smooths accents without altering vocal identity",
        "Reduces mental fatigue during offshore client calls",
        "Compatible with all conferencing software"
      ],
      mediaType: "accentDemo"
    }
  ];

  const whyItems = [
    {
      title: "AI-powered search across meeting notes",
      desc: "Never lose a key detail again. Ask Silgate questions like 'What budget was agreed upon in yesterday's call?' and get instant answers with citations.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_why_note_taker_1.png"
    },
    {
      title: "Captures conversations beyond meetings",
      desc: "Not all work happens in scheduled calendar events. Use the Silgate mobile and desktop app to capture ad-hoc huddles, whiteboard brainstorms, and audio uploads.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_why_ma_2.png"
    }
  ];

  const comparisonRows = [
    { feature: "Live transcript & recording", silgate: true, others: true },
    { feature: "100% Bot-free (No bot joins call)", silgate: true, others: false },
    { feature: "Works even if you're NOT the host", silgate: true, others: "Partial" },
    { feature: "Online & In-person meeting support (Mobile & PC)", silgate: true, others: "Partial" },
    { feature: "World #1 AI Noise Cancellation built-in", silgate: true, others: false },
    { feature: "Real-time AI Accent Conversion built-in", silgate: true, others: false },
    { feature: "On-device processing & strict enterprise privacy", silgate: true, others: false }
  ];

  const steps = [
    {
      num: "01",
      title: "Install Silgate",
      desc: "Download Silgate on Mac or Windows. No browser extensions or meeting bots required.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_note_taker_step_1.png"
    },
    {
      num: "02",
      title: "Turn Note Taker ON",
      desc: "Toggle Note Taker ON in the Silgate app widget when joining your meeting.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_note_taker_step_2.png"
    },
    {
      num: "03",
      title: "Review & Share",
      desc: "Access structured notes, action items, and full searchable transcripts immediately.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_note_taker_step_3.png"
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

  const testimonials = [
    {
      name: "Patrick L.",
      role: "Operations Director",
      avatar: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_patrick.png",
      quote: "I love how Silgate is noninvasive, seamlessly fitting into my workflow without the awkwardness of having a chatbot participate in my meetings. This makes it unique compared to other AI tools that often feel intrusive."
    },
    {
      name: "Michael L.",
      role: "Product Manager",
      avatar: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_michael.png",
      quote: "I use Silgate for all my meetings on Google Meet, Teams, and Zoom. It allows me to focus entirely on the conversation without the distraction of taking notes, giving me an exact summary of decisions."
    },
    {
      name: "Merced G.",
      role: "Strategy Lead",
      avatar: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_merced.png",
      quote: "Silgate allows me to record all calls with my team to remember important data and generate minutes with certainty. I can even hear audio scrubbed to the exact moment an action item was assigned."
    }
  ];

  const articles = [
    {
      title: "Best AI Note-Taking Apps for Better Meeting Notes",
      desc: "Compare features for transcripts, summaries, and action items across top market tools.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_case_study_note_1.png",
      href: "/blog"
    },
    {
      title: "AI Note Taker for Lectures & Academic Discussions",
      desc: "Capture university lectures and study group meetings without missing a detail.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_case_study_note_2.png",
      href: "/blog"
    },
    {
      title: "AI Meeting Minutes: Structuring Post-Call Action",
      desc: "How executive teams save 10+ hours a week formatting agendas and minutes.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_case_study_note_3.png",
      href: "/meeting-minutes"
    }
  ];

  const faqs = [
    {
      q: "What is the best AI meeting note taker?",
      a: "Silgate is the best cross-platform AI meeting note taker that delivers accurate transcripts, summaries, and key points without bots or cloud recordings. Its unique noise cancellation and accent conversion ensure clear, distraction-free notes from any meeting."
    },
    {
      q: "Is Silgate AI meeting note taker free?",
      a: "Yes, Silgate’s AI meeting note taker is available with a free tier. You’ll get access to transcripts, summaries, and action items during your free usage."
    },
    {
      q: "Can I use AI note taker for offline recordings?",
      a: "Absolutely. Silgate AI Note Taker is designed to handle both online and offline meetings and pre-existing files. You can upload any audio or video recording from your computer, whether it's an in-person meeting, a lecture, or a voice memo, and get full structured notes."
    },
    {
      q: "Is the note taker AI private?",
      a: "Privacy is our top priority. All of your conversations and transcripts are processed securely, and you are in complete control of your data. Silgate is trusted by leading global brands and is committed to SOC 2 and GDPR compliance."
    },
    {
      q: "Are AI note takers legal and safe?",
      a: "Yes. AI note takers like Silgate are legal and safe to use when meetings are recorded with consent, which is standard practice in professional settings. Silgate is built with privacy in mind: no bots join your calls, no audio is sent to third parties for model training, and you remain in full control."
    },
    {
      q: "What are the risks of AI note takers?",
      a: "Silgate AI note taker is designed to eliminate risk. Your recordings, transcripts, and notes are processed securely, never shared with third parties, and stored under your control. We don’t access your data, and your privacy is protected at every step."
    },
    {
      q: "Can I use Silgate just for meeting notes without noise cancellation?",
      a: "Yes, Silgate’s AI note-taking features can be used independently from its noise cancellation. You can choose to enable only the features you need for your specific meeting."
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
                  #1 Bot-Free Notetaker
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f4f4f5] text-[12px] font-semibold text-[#525069]">
                  <img
                    src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_g2_badge_1.svg"
                    alt=""
                    className="w-4 h-4 object-contain"
                  />
                  G2 Best Results 2026
                </span>
              </div>

              <h1 className="text-[38px] sm:text-[48px] lg:text-[54px] font-bold leading-[1.15] text-[#1a1a22] tracking-tight mb-6">
                #1 AI note taker built for <br />
                <span className="gradient-purple">productive meetings</span>
              </h1>

              <p className="text-[17px] md:text-[19px] leading-[30px] text-[#525069] mb-8 font-normal">
                Silgate's bot-free AI Note Taker captures your conversations, generates meeting notes, summaries, and action items, and connects seamlessly to your workflow.
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
                <span>Compatible across:</span>
                <div className="flex items-center gap-2">
                  <img src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/icon_zoom.svg" alt="" className="w-5 h-5" />
                  <img src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/icon_meet.svg" alt="" className="w-5 h-5" />
                  <img src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/icon_teams.svg" alt="" className="w-5 h-5" />
                  <img src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/icon_slack.svg" alt="" className="w-5 h-5" />
                  <span className="font-semibold text-[#1a1a22] ml-1">+ In-Person Meetings</span>
                </div>
              </div>
            </div>

            <div className="flex-1 w-full max-w-[620px] rounded-[24px] overflow-hidden border border-[#e7e7ea] shadow-xl bg-[#f7f7f8]">
              <video className="w-full h-auto block" autoPlay loop muted playsInline>
                <source src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/video_notes.mp4" type="video/mp4" />
                <source src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/video_ma_hero.mp4" type="video/mp4" />
              </video>
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
              Silgate combines automated note taking with noise cancellation and accent conversion.
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

      {/* 5. SCROLL TABS FOR NOTE TAKER */}
      <section className="py-20 md:py-28 bg-[#ffffff]">
        <div className="w-[calc(100%-48px)] max-w-[1366px] mx-auto">
          <div className="text-center max-w-[760px] mx-auto mb-14">
            <h2 className="text-[32px] md:text-[44px] font-bold text-[#1a1a22]">
              Capture every conversation with <br />
              <span className="gradient-purple">bot-free AI Note Taker</span>
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
                  Feature 0{activeTab + 1}
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

              <div className="lg:col-span-7">
                {scrollTabs[activeTab].mediaType === "video" && (
                  <div className="rounded-[20px] overflow-hidden border border-[#e7e7ea] shadow-inner bg-black">
                    <video key={scrollTabs[activeTab].videoSrc} className="w-full h-auto block" autoPlay loop muted playsInline>
                      <source src={scrollTabs[activeTab].videoSrc} type="video/mp4" />
                    </video>
                  </div>
                )}

                {scrollTabs[activeTab].mediaType === "image" && (
                  <div className="rounded-[20px] overflow-hidden border border-[#e7e7ea] bg-white p-4 flex items-center justify-center">
                    <img src={scrollTabs[activeTab].imgSrc} alt="" className="max-h-[400px] w-auto object-contain" />
                  </div>
                )}

                {scrollTabs[activeTab].mediaType === "noiseDemo" && (
                  <div className="rounded-[24px] bg-[#1a1a22] text-white p-8">
                    <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-6">
                      <div>
                        <div className="text-[18px] font-bold">On-Device Noise Cancellation</div>
                        <div className="text-[13px] text-white/60">Ensures clean input for AI note generation</div>
                      </div>
                      <button
                        onClick={() => setNoiseDemoOn(!noiseDemoOn)}
                        className={`w-14 h-8 rounded-full p-1 transition-colors cursor-pointer ${
                          noiseDemoOn ? "bg-[#614efa]" : "bg-gray-600"
                        }`}
                      >
                        <div className={`w-6 h-6 rounded-full bg-white transition-transform ${noiseDemoOn ? "translate-x-6" : "translate-x-0"}`} />
                      </button>
                    </div>
                    <div className="p-4 rounded-[12px] bg-white/5 border border-white/10 text-sm">
                      {noiseDemoOn ? "✓ Noise Filter Active: Zero keyboard chatter in notes" : "⚠ Raw Audio Stream with Background Noise"}
                    </div>
                  </div>
                )}

                {scrollTabs[activeTab].mediaType === "accentDemo" && (
                  <div className="rounded-[24px] bg-[#1a1a22] text-white p-8">
                    <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-6">
                      <div>
                        <div className="text-[18px] font-bold">AI Accent Conversion</div>
                        <div className="text-[13px] text-white/60">Improves transcription of technical speech</div>
                      </div>
                      <button
                        onClick={() => setAccentDemoOn(!accentDemoOn)}
                        className={`w-14 h-8 rounded-full p-1 transition-colors cursor-pointer ${
                          accentDemoOn ? "bg-[#614efa]" : "bg-gray-600"
                        }`}
                      >
                        <div className={`w-6 h-6 rounded-full bg-white transition-transform ${accentDemoOn ? "translate-x-6" : "translate-x-0"}`} />
                      </button>
                    </div>
                    <div className="p-4 rounded-[12px] bg-white/5 border border-white/10 text-sm">
                      {accentDemoOn ? "✓ Accent Smoothing ON: Neutralized vocal delivery" : "Native International Accent Delivery"}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY TEAMS CHOOSE */}
      <section className="py-20 bg-[#fafafa] border-y border-[#e7e7ea]">
        <div className="w-[calc(100%-48px)] max-w-[1366px] mx-auto">
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1a1a22]">
              Why teams and individuals choose Silgate AI Meeting Note Taker
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyItems.map((wi, idx) => (
              <div key={idx} className="bg-white rounded-[24px] p-8 border border-[#e7e7ea] shadow-xs flex flex-col justify-between">
                <div>
                  <h3 className="text-[22px] font-bold text-[#1a1a22] mb-3">{wi.title}</h3>
                  <p className="text-[15px] text-[#525069] leading-[24px] mb-6">{wi.desc}</p>
                </div>
                <div className="rounded-[16px] overflow-hidden bg-[#f7f7f8] p-4 flex items-center justify-center border border-[#e7e7ea]">
                  <img src={wi.img} alt={wi.title} className="max-h-[220px] w-auto object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. COMPETITOR COMPARISON TABLE */}
      <section className="py-20 md:py-28 bg-[#ffffff]">
        <div className="w-[calc(100%-48px)] max-w-[1000px] mx-auto">
          <div className="text-center max-w-[650px] mx-auto mb-16">
            <h2 className="text-[32px] md:text-[42px] font-bold text-[#1a1a22] leading-[1.2]">
              Most comprehensive and <br />
              affordable notetaker
            </h2>
            <p className="text-[16px] text-[#525069] mt-3">
              See why Silgate is preferred over traditional bot-based note taking services.
            </p>
          </div>

          <div className="border border-[#e7e7ea] rounded-[24px] overflow-hidden shadow-sm">
            <div className="grid grid-cols-12 bg-[#f4f4f5] p-5 font-bold text-[14px] text-[#1a1a22] border-b border-[#e7e7ea]">
              <div className="col-span-6 sm:col-span-7">Capability</div>
              <div className="col-span-3 sm:col-span-3 text-center text-[#614efa] font-extrabold text-[15px]">
                Silgate AI
              </div>
              <div className="col-span-3 sm:col-span-2 text-center text-[#75738b]">
                Other Notetakers
              </div>
            </div>

            <div className="divide-y divide-[#f0f0f2]">
              {comparisonRows.map((r, idx) => (
                <div key={idx} className="grid grid-cols-12 p-4 text-[14px] items-center hover:bg-[#fafafa]">
                  <div className="col-span-6 sm:col-span-7 font-medium text-[#1a1a22]">
                    {r.feature}
                  </div>
                  <div className="col-span-3 sm:col-span-3 text-center font-bold text-[#614efa]">
                    ✓ Yes
                  </div>
                  <div className="col-span-3 sm:col-span-2 text-center text-[#75738b]">
                    {r.others === true ? "✓ Yes" : r.others === false ? "✕ No" : r.others}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. 3-STEP SETUP */}
      <section className="py-20 bg-[#f9f9fb] border-y border-[#e7e7ea]">
        <div className="w-[calc(100%-48px)] max-w-[1366px] mx-auto">
          <div className="text-center max-w-[600px] mx-auto mb-16">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1a1a22]">
              How Silgate AI Note Taker works
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

      {/* 9. INTEGRATIONS */}
      <section className="py-20 bg-[#ffffff]">
        <div className="w-[calc(100%-48px)] max-w-[1366px] mx-auto text-center">
          <h2 className="text-[30px] md:text-[38px] font-bold text-[#1a1a22] mb-3">
            Your AI meeting note taker, seamlessly Integrated
          </h2>
          <p className="text-[15px] text-[#525069] mb-12">
            Auto-sync meeting action items and takeaways into your project tools.
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

      {/* 10. TESTIMONIALS */}
      <section className="py-20 bg-[#fafafa] border-y border-[#e7e7ea]">
        <div className="w-[calc(100%-48px)] max-w-[1366px] mx-auto">
          <div className="text-center max-w-[600px] mx-auto mb-14">
            <h2 className="text-[30px] md:text-[38px] font-bold text-[#1a1a22]">
              Hear it from our customers
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white rounded-[20px] p-6 border border-[#e7e7ea] shadow-xs flex flex-col justify-between">
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

      {/* 11. ARTICLES */}
      <section className="py-20 bg-[#ffffff]">
        <div className="w-[calc(100%-48px)] max-w-[1366px] mx-auto">
          <div className="text-center max-w-[650px] mx-auto mb-14">
            <h2 className="text-[30px] md:text-[38px] font-bold text-[#1a1a22]">
              Explore more on meeting notes
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((art, idx) => (
              <Link key={idx} to={art.href} className="group bg-[#fbfbfe] rounded-[20px] overflow-hidden border border-[#e7e7ea] hover:shadow-lg transition-all flex flex-col">
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

      {/* 12. FAQS */}
      <section className="py-20 bg-[#fbfbfe] border-t border-[#e7e7ea]">
        <div className="w-[calc(100%-48px)] max-w-[900px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1a1a22]">
              AI Note Taker FAQs
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
      <section className="py-20 bg-[#614efa] text-white">
        <div className="w-[calc(100%-48px)] max-w-[1000px] mx-auto text-center">
          <h2 className="text-[32px] md:text-[46px] font-bold mb-6">
            Get accurate meeting notes instantly with Silgate AI Note Taker
          </h2>
          <p className="text-[17px] text-white/80 max-w-[600px] mx-auto mb-10">
            Never scramble to jot down notes while speaking again.
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
