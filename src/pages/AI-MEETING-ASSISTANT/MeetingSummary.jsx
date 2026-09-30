import React, { useState } from "react";
import { Link } from "react-router-dom";
import { siteLogos } from "../../utils/constants";

/**
 * Meeting Summary Page Component.
 * High-fidelity replica of https://krisp.ai/ai-meeting-summary/
 * Features hero with G2 ratings, global BPO customer logos, 4-stat metrics, one-app cards,
 * 5-tab scroll feature section, why-choose section with AI chat and searchable archives graphic,
 * CRM integrations grid, 3-step setup, testimonials, enterprise security, knowledge base articles,
 * accordion FAQs, and final CTA toggle banner.
 */
export default function MeetingSummary() {
  const [activeTab, setActiveTab] = useState(0);
  const [isCleanerAudioOn, setIsCleanerAudioOn] = useState(true);
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
    { num: "5 hours", label: "Saved weekly on summary formatting" },
    { num: "17+ languages", label: "Summarized with contextual nuance" },
    { num: "130M+", label: "Summaries created for global teams" },
    { num: "7M+", label: "Professionals trusting Silgate" }
  ];

  const oneAppCards = [
    {
      title: "AI Note Taker",
      desc: "Turn conversations into meeting notes, action items, and summaries with zero typing.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_note_taker_card.png",
      href: "/ai-meeting-assistant/ai-note-taker"
    },
    {
      title: "Accent Conversion - Listener side",
      desc: "Convert difficult accents live on your speakers so everyone understands the takeaways.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_au_card.png",
      href: "/ai-meeting-assistant/accent-conversion"
    },
    {
      title: "Noise Cancellation",
      desc: "Clean audio streams ensure your AI summaries never include background hallucinations.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_nc_card.png",
      href: "/ai-meeting-assistant/noise-cancellation"
    }
  ];

  const scrollTabs = [
    {
      title: "AI summaries from online and in-person meetings",
      desc: "Silgate’s AI Meeting Summarizer automatically extracts discussion topics, executive decisions, and task assignments in seconds.",
      checks: [
        "Concise executive bullet points and tl;dr overviews",
        "Templates tailored for 1:1s, board reviews, and sales syncs",
        "Capture in-person discussions with the mobile app"
      ],
      mediaType: "image",
      imgSrc: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_ai_summary.png"
    },
    {
      title: "Real-time meeting transcription",
      desc: "Live, word-for-word transcript generation with automatic speaker labels so summaries precisely cite who committed to what.",
      checks: [
        "96%+ word-level accuracy across 17+ languages",
        "Click any action item to jump to the exact transcript timestamp",
        "Custom vocabulary captures product names and internal jargon"
      ],
      mediaType: "image",
      imgSrc: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_live_meeting_transcripts.png"
    },
    {
      title: "Bot-free recording and easy access",
      desc: "Capture meetings across Zoom, Microsoft Teams, and Google Meet without third-party bots intruding on your private conversations.",
      checks: [
        "100% on-device capture via virtual audio driver",
        "No host permission needed to record and summarize",
        "Stores summaries in a searchable, organized team workspace"
      ],
      mediaType: "image",
      imgSrc: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_meeting_notes_intro.png"
    },
    {
      title: "One Meeting Summarizer for every platform",
      desc: "Whether you use Zoom in the morning, Meet for clients, and Slack Huddles in the afternoon, all summaries live in one unified dashboard.",
      checks: [
        "Single workspace repository for all cross-app conversations",
        "Organize by project tag, client name, or attendee",
        "Push directly to Slack, Notion, and HubSpot"
      ],
      mediaType: "image",
      imgSrc: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_ai_note_taker.png"
    },
    {
      title: "Cleaner audio for accurate AI meeting summaries",
      desc: "Noise-free audio directly leads to higher-quality summaries. When barking dogs or street traffic are eliminated, the AI captures every word correctly.",
      checks: [
        "World #1 noise cancellation removes background distractions",
        "Reduces AI hallucinations on misunderstood audio",
        "Crystal-clear recordings for quick human verification"
      ],
      mediaType: "demo"
    }
  ];

  const whyChoose = [
    {
      title: "AI chat and searchable archives",
      desc: "Turn your meeting history into a conversational knowledge base. Ask questions like 'What did Sarah propose for the Q3 roadmap?' and get instant answers with verbatim quotes.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_ai_chat_archives.png"
    },
    {
      title: "Easy sharing and collaboration",
      desc: "Share summaries via email, private links, or Slack with one click. Team members can skim 50-minute calls in 60 seconds.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_easy_sharing.png"
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
      title: "Set up Silgate",
      desc: "Download and set up the desktop app on Mac or Windows.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_note_taker_step_1.png"
    },
    {
      num: "02",
      title: "Hold your meeting",
      desc: "Talk normally in your calling app. Silgate transcribes silently.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_meeting_summary_step_2.png"
    },
    {
      num: "03",
      title: "Get instant summary",
      desc: "Receive bulleted takeaways and action items the second the call ends.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_meeting_summary_step_3.png"
    }
  ];

  const testimonials = [
    {
      name: "Patrick L.",
      role: "Operations Lead",
      avatar: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_patrick.png",
      quote: "Silgate's summaries are the most concise and actionable I've seen. Other AI tools produce walls of text; Silgate gives you the 5 key decisions and tasks immediately."
    },
    {
      name: "Michael L.",
      role: "Product VP",
      avatar: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_michael.png",
      quote: "Being able to upload an audio file and get the exact same structured summary is a game-changer for podcast interviews and customer calls."
    },
    {
      name: "Charles C.",
      role: "Founder",
      avatar: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_charles.png",
      quote: "Having clear and accurate summaries and notes from calls makes a big difference when switching between customer conversations and looping in teammates."
    }
  ];

  const articles = [
    {
      title: "Best AI Note-Taking Apps for Better Meeting Notes",
      desc: "Top tools compared for summary quality and action item tracking.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_case_study_note_1.png",
      href: "/blog"
    },
    {
      title: "AI Note Taker for Lectures",
      desc: "How academic researchers use AI summaries to retain core points.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_case_study_note_2.png",
      href: "/blog"
    },
    {
      title: "AI Meeting Minutes",
      desc: "How to draft professional meeting minutes in under 2 minutes.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_case_study_note_3.png",
      href: "/meeting-minutes"
    }
  ];

  const faqs = [
    {
      q: "How do you summarize a meeting using AI?",
      a: "Silgate’s AI Meeting Summarizer automatically analyzes your meeting transcript to identify key discussion points, decisions, and action items. It uses advanced language models to structure the content into a clear summary that’s easy to review and share. Once your meeting ends, the summary is instantly generated in your Silgate account."
    },
    {
      q: "Who has access to the meeting summaries?",
      a: "Meeting summaries are only accessible to the meeting participants and anyone they choose to share them with. You can download, edit, and distribute the summaries as needed, ensuring that only authorized colleagues have access to the information."
    },
    {
      q: "What's the best AI meeting summary tool?",
      a: "The best AI meeting summary tool is one that provides accuracy, integrations, privacy, and collaboration. Silgate meeting summarizer combines it all in one app. Unlike standalone AI meeting summarizers, Silgate also improves call quality with noise cancellation and accent conversion."
    },
    {
      q: "Can I use Silgate to summarize a meeting transcript?",
      a: "Yes. Silgate transcribes your meeting in real time and generates an AI meeting summary directly from that transcript — so both outputs always match."
    },
    {
      q: "Can Silgate summarize in-person meetings?",
      a: "Yes. The Silgate mobile app for iOS and Android lets you capture and summarize in-person discussions, workshops, and interviews — giving you the same structured AI meeting summary output as an online call. Silgate also takes notes from uploaded audio and video files."
    },
    {
      q: "Does meeting summary AI save time?",
      a: "With Silgate AI Meeting Summary, meetings are automatically transcribed and summarized, helping teams reduce note-taking time, speed up follow-ups, and stay aligned without extra recap calls."
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
                  Top AI Meeting Summaries
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f4f4f5] text-[12px] font-semibold text-[#525069]">
                  <img
                    src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_g2_badge_1.svg"
                    alt=""
                    className="w-4 h-4 object-contain"
                  />
                  G2 Momentum Leader
                </span>
              </div>

              <h1 className="text-[38px] sm:text-[48px] lg:text-[54px] font-bold leading-[1.15] text-[#1a1a22] tracking-tight mb-6">
                AI Meeting Summaries That <br />
                <span className="gradient-purple">Actually Capture What Matters</span>
              </h1>

              <p className="text-[17px] md:text-[19px] leading-[30px] text-[#525069] mb-8 font-normal">
                Silgate’s AI Meeting Summarizer turns raw conversations into structured summaries, key decisions, and action items in real time. Accurate, concise, and bot-free.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/signup"
                  className="h-[48px] px-8 rounded-[12px] bg-[#614efa] hover:bg-[#4a3bbe] text-white font-bold text-[15px] inline-flex items-center justify-center transition-colors shadow-sm"
                >
                  Generate summaries free
                </Link>
                <Link
                  to="/contact-sales"
                  className="h-[48px] px-8 rounded-[12px] border border-[#23232e] text-[#1a1a22] hover:bg-[#1a1a22] hover:text-white font-bold text-[15px] inline-flex items-center justify-center transition-colors"
                >
                  Book a demo
                </Link>
              </div>
            </div>

            <div className="flex-1 w-full max-w-[620px] rounded-[24px] overflow-hidden border border-[#e7e7ea] shadow-xl bg-[#f7f7f8] p-4 flex items-center justify-center">
              <img
                src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_ai_summary.png"
                alt="AI Meeting Summary Interface"
                className="w-full h-auto object-contain max-h-[440px]"
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
              Comprehensive summarization, transcription, and noise removal inside one unified client.
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

      {/* 5. SCROLL TABS */}
      <section className="py-20 md:py-28 bg-[#ffffff]">
        <div className="w-[calc(100%-48px)] max-w-[1366px] mx-auto">
          <div className="text-center max-w-[760px] mx-auto mb-14">
            <h2 className="text-[32px] md:text-[44px] font-bold text-[#1a1a22]">
              Productive meetings with an <br />
              <span className="gradient-purple">AI meeting summarizer</span>
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
                  Summary Capability 0{activeTab + 1}
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
                {scrollTabs[activeTab].mediaType === "image" && (
                  <div className="rounded-[20px] overflow-hidden border border-[#e7e7ea] shadow-md bg-white p-4 flex items-center justify-center">
                    <img src={scrollTabs[activeTab].imgSrc} alt="" className="w-full h-auto object-contain max-h-[420px]" />
                  </div>
                )}
                {scrollTabs[activeTab].mediaType === "demo" && (
                  <div className="rounded-[24px] bg-[#1a1a22] text-white p-8">
                    <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-6">
                      <div>
                        <div className="text-[18px] font-bold">Cleaner Audio = Better Summaries</div>
                        <div className="text-[13px] text-white/60">Noise cancellation feeds clear audio into LLM</div>
                      </div>
                      <button
                        onClick={() => setIsCleanerAudioOn(!isCleanerAudioOn)}
                        className={`w-14 h-8 rounded-full p-1 transition-colors cursor-pointer ${
                          isCleanerAudioOn ? "bg-[#614efa]" : "bg-gray-600"
                        }`}
                      >
                        <div className={`w-6 h-6 rounded-full bg-white transition-transform ${isCleanerAudioOn ? "translate-x-6" : "translate-x-0"}`} />
                      </button>
                    </div>
                    <div className="p-4 rounded-[12px] bg-white/5 border border-white/10 text-sm">
                      {isCleanerAudioOn ? "✓ Noise Removed: High-fidelity executive bullet points generated" : "⚠ Audio artifacts may degrade summary accuracy"}
                    </div>
                  </div>
                )}
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
              Why choose Silgate for your meeting summary
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
            Your AI meeting summarizer, connected to your workflow
          </h2>
          <p className="text-[15px] text-[#525069] mb-12">
            Push formatted bullet points and action tasks directly into your productivity hubs.
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

      {/* 8. 3-STEP SETUP */}
      <section className="py-20 bg-[#f9f9fb] border-y border-[#e7e7ea]">
        <div className="w-[calc(100%-48px)] max-w-[1366px] mx-auto">
          <div className="text-center max-w-[600px] mx-auto mb-16">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1a1a22]">
              How Silgate's AI meeting summarizer works
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
              Explore more on summaries and notes
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
              FAQs about Meeting Summary AI
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
            Get accurate meeting summaries instantly with Silgate
          </h2>
          <p className="text-[17px] text-white/80 max-w-[600px] mx-auto mb-10">
            Automate post-meeting recaps and keep all teammates on the same page.
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
