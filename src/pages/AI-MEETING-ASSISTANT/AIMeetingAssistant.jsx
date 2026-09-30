import React, { useState } from "react";
import { Link } from "react-router-dom";
import { siteLogos } from "../../utils/constants";

/**
 * AI Meeting Assistant Page Component.
 * High-fidelity replica of https://krisp.ai/ai-meeting-assistant/
 * Complete with Hero, Trusted Logos, One-App Feature Cards, Scroll Feature Tabs with Demos,
 * Why Teams Choose section, CRM Integrations Grid, How-To Steps, Testimonials,
 * Enterprise Security Badges, Knowledge Articles, Accordion FAQs, and Final CTA Banner.
 */
export default function AIMeetingAssistant() {
  const [activeTab, setActiveTab] = useState(0);
  const [noiseDemoOn, setNoiseDemoOn] = useState(true);
  const [accentDemoOn, setAccentDemoOn] = useState(true);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const trustedLogos = [
    { name: "Siemens", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_siemens.svg" },
    { name: "Medium", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_medium.svg" },
    { name: "Okta", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_okta.svg" },
    { name: "Skechers", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_sketchers.svg" },
    { name: "Autodesk", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_autodesk.svg" },
    { name: "Sony", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_sony.svg" },
    { name: "Cisco", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_cisco.svg" },
    { name: "Service Titan", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_servicetitan.svg" },
    { name: "Github", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_github.svg" },
    { name: "vmware", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_vmware.svg" },
    { name: "Alorica", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/alorica_logo.svg" }
  ];

  const oneAppCards = [
    {
      title: "AI Note Taker",
      desc: "AI-powered notes, noise-free audio, and clear speech across accents — all inside the same Silgate app.",
      tag: "Note Taker",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_note_taker_card.png",
      href: "/ai-meeting-assistant/ai-note-taker"
    },
    {
      title: "Accent Conversion - Listener side",
      desc: "Break through language barriers with real-time accent conversion tailored to your listening preference.",
      tag: "Accent AI",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_au_card.png",
      href: "/ai-meeting-assistant/accent-conversion"
    },
    {
      title: "Noise Cancellation",
      desc: "World's #1 noise cancellation eliminates background chatter, barking dogs, typing, and room echo.",
      tag: "Voice AI",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_nc_card.png",
      href: "/ai-meeting-assistant/noise-cancellation"
    }
  ];

  const scrollTabs = [
    {
      id: 0,
      title: "Multilingual transcripts with timestamps",
      desc: "Silgate turns every conversation into a searchable, speaker-aware transcript you can revisit at any time.",
      checks: [
        "17+ languages supported for global calls",
        "Speaker identification with precise timestamps",
        "Download in TXT, PDF, DOCX, or SRT formats"
      ],
      linkText: "Learn more about Meeting Transcription",
      linkHref: "/ai-meeting-assistant/meeting-transcription",
      mediaType: "video",
      videoSrc: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/video_ma_transcripts.mp4"
    },
    {
      id: 1,
      title: "Meeting notes and summaries",
      desc: "Silgate AI Assistant helps teams stay aligned and consistent after every meeting by automatically generating action items, key decisions, and concise summaries.",
      checks: [
        "Pre-built summary templates for 1-on-1s, Standups, and Sales calls",
        "Action items automatically assigned to attendees",
        "Sync summaries directly to Notion, Slack, and your CRM"
      ],
      linkText: "Explore AI Note Taker",
      linkHref: "/ai-meeting-assistant/ai-note-taker",
      mediaType: "video",
      videoSrc: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/video_ma_notes.mp4"
    },
    {
      id: 2,
      title: "One Meeting Assistant for every platform",
      desc: "Silgate AI Meeting Assistant captures your conversations in any conferencing tool and turns them into organized notes without ever requiring a third-party bot to join.",
      checks: [
        "100% Bot-free architecture running locally on your audio device",
        "Seamless compatibility with Zoom, Microsoft Teams, Google Meet, and Webex",
        "One-click recording for in-person meetings with the mobile app"
      ],
      linkText: "Learn about Bot-free recording",
      linkHref: "/ai-meeting-assistant/meeting-recording",
      mediaType: "image",
      imgSrc: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_ma_platforms.png"
    },
    {
      id: 3,
      title: "Noise Cancellation for clear meetings",
      desc: "Ensure maximum clarity by eliminating background noises, voices, and echo from both inbound and outbound meetings and calls.",
      checks: [
        "Removes barking dogs, lawnmowers, café noise, and loud typing",
        "Voice Isolation isolates only the primary speaker",
        "Bi-directional: cancels noise from both you and other participants"
      ],
      linkText: "Discover AI Noise Cancellation",
      linkHref: "/ai-meeting-assistant/noise-cancellation",
      mediaType: "noiseDemo"
    },
    {
      id: 4,
      title: "Accent Conversion for better meetings",
      desc: "Silgate refines speech in real time, ensuring your message is conveyed with clarity and every meeting note is captured accurately.",
      checks: [
        "Understands diverse international accents in real time",
        "Listener-side conversion smooths speech without losing identity",
        "Improves transcription accuracy on technical terms and accents"
      ],
      linkText: "Experience AI Accent Conversion",
      linkHref: "/ai-meeting-assistant/accent-conversion",
      mediaType: "accentDemo"
    }
  ];

  const whyItems = [
    {
      title: "Enhanced team collaboration",
      desc: "Silgate virtual meeting assistant boosts productivity and teamwork by sharing clear action items and assigning tasks to team members.",
      checks: [
        "Easily share meeting outputs with your team members",
        "Automatically assign next steps and follow-ups",
        "Connect AI Meeting Assistant with your calendar to automate note-taking"
      ],
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_why_ma_1.png"
    },
    {
      title: "Streamlined recordings and playback",
      desc: "Join your meetings flexibly with or without a bot, record meetings with any app, and store them all in one place.",
      checks: [
        "Access your meeting history and full transcripts anytime",
        "Quickly find critical points in recordings with audio scrubber",
        "Highlight decisions and action items directly in your notes"
      ],
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_why_ma_2.png"
    },
    {
      title: "Works wherever and however you need it",
      desc: "AI Meeting Assistant adapts the way you work, whether you're at your desk or on the go.",
      checks: [
        "Capture in-person discussions and interviews with the mobile app",
        "Upload audio and video files to generate transcripts on demand",
        "Works across desktop and web for flexible access"
      ],
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_why_ma_3.png"
    }
  ];

  const crmIntegrations = [
    { name: "Salesforce", icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_salesforce.svg" },
    { name: "HubSpot", icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_hubspot.svg" },
    { name: "Pipedrive", icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_pipedrive.svg" },
    { name: "Affinity", icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_affinity.svg" },
    { name: "Asana", icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_asana.svg" },
    { name: "Jira", icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_jira.svg" },
    { name: "Monday.com", icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_monday.svg" },
    { name: "Zapier", icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_zapier.svg" }
  ];

  const steps = [
    {
      num: "01",
      title: "Install & Setup",
      desc: "Download and install the latest version of Silgate to access the AI Meeting Assistant.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_note_taker_step_1.png"
    },
    {
      num: "02",
      title: "Configure Audio",
      desc: "Select both Silgate Speaker and Silgate Microphone in your communication app. Toggle Note Taker ON in the Silgate app.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_note_taker_step_2.png"
    },
    {
      num: "03",
      title: "Connect Calendar",
      desc: "Connect your calendar to Silgate for automated 1-click meeting note taking, agenda reminders, and CRM sync.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_note_taker_step_3.png"
    }
  ];

  const testimonials = [
    {
      name: "Patrick L.",
      source: "G2 Review",
      avatar: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_patrick.png",
      quote: "I love how Silgate is noninvasive, seamlessly fitting into my workflow without the awkwardness of having a chatbot participate in my meetings. This makes it unique compared to other AI tools that often feel intrusive. I appreciate the seamless experience it provides, especially with note-taking, as Silgate helps me stay focused during meetings and eliminates the need for manual note-taking."
    },
    {
      name: "Michael L.",
      source: "G2 Review",
      avatar: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_michael.png",
      quote: "I use Silgate for all my online meetings, including Google Meet, Microsoft Teams, Zoom, and Webex, which shows its versatility and compatibility with various platforms. I particularly appreciate how Silgate allows me to focus entirely on the meeting without the distraction of taking notes. With Silgate recording the call and providing a full transcript, summary, and action items, I can give the meeting my full attention."
    },
    {
      name: "Charles C.",
      source: "LinkedIn Review",
      avatar: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_charles.png",
      quote: "I almost never post about tools, but I've been working to improve how I follow up after customer conversations. Having clear and accurate summaries and notes from calls makes a big difference, especially when switching between conversations or looping in teammates. Silgate has helped me stay aligned on key next steps."
    },
    {
      name: "Victor R.",
      source: "G2 Verified User",
      avatar: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_victor.png",
      quote: "Silgate is agent-less, and its AI identifies and transcribes audio with impressive accuracy. I have been using Silgate on my Mac every day for over a year. The integration process is simple, making it easy to record meetings on Teams, Zoom, Meet, and just about any other platform."
    },
    {
      name: "Carlos P.",
      source: "G2 Review",
      avatar: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_carlos.png",
      quote: "I really appreciate that Silgate works exceptionally well for transcription, providing almost 100% accuracy. Its ability to notate everything word by word with minimal mistakes is incredibly useful for my daily online activities, such as phone calls and Zoom meetings."
    },
    {
      name: "Merced G.",
      source: "G2 Review",
      avatar: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_merced.png",
      quote: "I love how Silgate allows me to record all the calls with my work team to be able to remember important data and generate minutes with certainty. Additionally, I appreciate that it allows me to play back the audio with all the details that existed during the call, offering exact fidelity of what happened."
    }
  ];

  const caseStudies = [
    {
      title: "Best AI Note-Taking Apps for Better Meeting Notes",
      desc: "Explore top AI note-taking apps and compare features for transcripts, summaries, and action items to find the best fit for your workflow.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_case_study_note_1.png",
      href: "/blog"
    },
    {
      title: "AI Note Taker for Lectures",
      desc: "Capture lectures automatically with AI notes, transcripts, and summaries so you can stay focused on learning instead of typing.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_case_study_note_2.png",
      href: "/blog"
    },
    {
      title: "AI Meeting Minutes",
      desc: "Generate clear meeting minutes with decisions, action items, and follow-ups so your team stays aligned after every conversation.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_case_study_note_3.png",
      href: "/meeting-minutes"
    },
    {
      title: "Best AI Meeting Assistants",
      desc: "This guide gives you verified benchmarks and a practical framework to select the best AI meeting assistant in 2026.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_case_study_note_7.jpg",
      href: "/blog"
    },
    {
      title: "Best Bot-Free AI Note Takers",
      desc: "Compare the AI note takers that capture your meetings without a bot joining the call, and see how they handle privacy and consent.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_case_study_ma_1.jpg",
      href: "/blog"
    },
    {
      title: "Best AI Note Taking Devices",
      desc: "Smart recorders, wearables, and pens compared, so you can pick the right device for capturing in-person conversations.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_case_study_ma_2.jpg",
      href: "/blog"
    }
  ];

  const faqs = [
    {
      q: "How is Silgate different than other meeting assistants?",
      a: "Most assistants show up as bots in your calls. Silgate does not need to. We capture directly at the audio level, so you get clean transcripts and summaries without a visible bot. On top of that, only Silgate adds real-time Accent Conversion and industry-leading Noise Cancellation, making us more than a note taker. We are a complete Voice AI layer for your meetings."
    },
    {
      q: "What is the best AI assistant for meetings?",
      a: "Modern AI meeting assistants are expected to automatically transcribe conversations, highlight key decisions, and generate summaries that teams can quickly review and share. From Silgate's perspective, the ideal meeting AI assistant should also combine AI notes with real-time audio clarity and clear communications without accent barriers — and that's where Silgate stands out."
    },
    {
      q: "Will a bot join my call when I use Silgate?",
      a: "No. One of the biggest differences with Silgate is that you don't need a bot in your meeting. Silgate works directly at the audio level on your device, so you can capture, transcribe, and summarize conversations without an extra participant showing up. If you prefer, Silgate also offers a Bot option for platforms like Zoom where it will appear as a participant to make recording and consent handling more transparent. The choice is always yours."
    },
    {
      q: "Which integrations does Silgate support?",
      a: "Silgate works with all major conferencing apps at the audio level, so you can use it seamlessly with Zoom, Microsoft Teams, Google Meet, Slack Huddles, and many more. Beyond conferencing, Silgate also connects into your daily workflows with integrations such as Zapier, HubSpot, Salesforce, Pipedrive, Slack and more."
    },
    {
      q: "Does Silgate support in-person, hybrid, and online meetings?",
      a: "Yes. Silgate covers all meeting types. Use the desktop app for online calls, the mobile app for in-person discussions, and the same platform to handle hybrid situations. Every conversation can be captured and summarized in one place."
    },
    {
      q: "Does Silgate provide Noise Cancellation and note-taking in the same app?",
      a: "Yes. Silgate combines real-time Noise Cancellation and AI Note-taking in one place. That means your transcripts are already cleaned from background noise, which directly improves note quality."
    },
    {
      q: "Does Silgate integrate with Zoom, Google Meet, Microsoft Teams, and Slack?",
      a: "Yes. Because Silgate works at the audio level, it integrates with every conferencing app. You can use Silgate in Zoom today, Teams tomorrow, and Slack Huddles in between. Wherever your team talks, Silgate fits in."
    },
    {
      q: "How accurate is Silgate transcription, and what affects quality?",
      a: "Silgate transcription is tuned for real-world meetings. Accuracy remains high even in noisy environments thanks to our Noise Cancellation. Quality depends mostly on the speaker's clarity and microphone, but because we filter out background distractions first, you will often see better results with Silgate than with standalone transcription tools. To make transcripts even more relevant, Silgate supports Custom Vocabulary with up to 750 words."
    },
    {
      q: "Which languages does Silgate support for transcription?",
      a: "Silgate supports on-device English transcription for maximum privacy and speed, plus server-based transcription in 15 additional languages including Spanish, French, German, Russian, Italian, Dutch, Polish, Portuguese, Hindi, Danish, Swedish, Norwegian, Czech, Ukrainian, and Korean."
    },
    {
      q: "How can I capture only a transcript without recording audio or video?",
      a: "Silgate offers a Transcript Only mode that lets you generate live transcripts and meeting summaries. You can enable it directly in the app from the meeting controls, adjust it during the call through the same controls, or from the Silgate widget."
    }
  ];

  return (
    <div className="bg-white text-[#131032]">
      {/* 1. HERO SECTION */}
      <section className="pt-24 md:pt-32 pb-16 bg-[#ffffff]">
        <div className="w-[calc(100%-48px)] max-w-[1366px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Column */}
            <div className="flex-1 max-w-[640px]">
              {/* Badges Pill */}
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
                  Voice Recognition Leader
                </span>
              </div>

              <h1 className="text-[40px] sm:text-[50px] lg:text-[56px] font-bold leading-[1.15] text-[#1a1a22] tracking-tight mb-6">
                The World’s #1 <br />
                <span className="gradient-purple">AI Meeting Assistant</span>
              </h1>

              <p className="text-[17px] md:text-[19px] leading-[30px] text-[#525069] mb-8 font-normal">
                Silgate’s AI Meeting Assistant records, transcribes, and summarizes your meetings, so you can focus on the conversation. Make meetings more effective with crystal-clear audio and zero unwanted bots.
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

              {/* Supported Apps mini-row */}
              <div className="flex items-center gap-3 mt-8 text-[13px] text-[#75738b]">
                <span>Works natively with:</span>
                <div className="flex items-center gap-2.5">
                  <img src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/icon_zoom.svg" alt="Zoom" className="w-5 h-5" />
                  <img src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/icon_meet.svg" alt="Google Meet" className="w-5 h-5" />
                  <img src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/icon_teams.svg" alt="Microsoft Teams" className="w-5 h-5" />
                  <img src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/icon_slack.svg" alt="Slack" className="w-5 h-5" />
                  <img src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/icon_webex.svg" alt="Webex" className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Right Video Mockup */}
            <div className="flex-1 w-full max-w-[620px] rounded-[24px] overflow-hidden border border-[#e7e7ea] shadow-[0_20px_50px_rgba(35,35,46,0.1)] bg-[#f7f7f8]">
              <video
                className="w-full h-auto block"
                autoPlay
                loop
                muted
                playsInline
                poster="https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_ma_platforms.png"
              >
                <source src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/video_ma_hero.mp4" type="video/mp4" />
                <source src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/video_transcription.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUSTED LOGOS SECTION */}
      <section className="py-12 border-y border-[#f0f0f2] bg-[#fafafa]">
        <div className="w-[calc(100%-48px)] max-w-[1366px] mx-auto">
          <p className="text-center text-[13px] font-semibold text-[#75738b] uppercase tracking-wider mb-8">
            Trusted by leaders across 10,000+ forward-thinking organizations
          </p>
          <div className="flex items-center justify-center flex-wrap gap-8 md:gap-12 opacity-75 grayscale hover:grayscale-0 transition-all">
            {trustedLogos.map((logo, idx) => (
              <img
                key={idx}
                src={logo.src}
                alt={logo.name}
                className="h-6 md:h-7 w-auto object-contain"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. ONE APP CARDS SECTION */}
      <section className="py-20 md:py-28 bg-[#ffffff]">
        <div className="w-[calc(100%-48px)] max-w-[1366px] mx-auto">
          <div className="max-w-[700px] mb-16">
            <span className="text-[13px] font-bold text-[#614efa] uppercase tracking-wider mb-2 block">
              Complete Voice AI Architecture
            </span>
            <h2 className="text-[32px] md:text-[42px] font-bold text-[#1a1a22] leading-[1.2]">
              One app. Every Voice AI feature for meetings.
            </h2>
            <p className="text-[16px] text-[#525069] mt-3">
              AI-powered notes, noise-free audio, and clear speech across accents — all inside the same Silgate application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {oneAppCards.map((card, idx) => (
              <Link
                key={idx}
                to={card.href}
                className="group block bg-[#f7f7f8] rounded-[24px] overflow-hidden border border-[#e7e7ea] hover:border-[#614efa] hover:shadow-[0_16px_36px_rgba(97,78,250,0.12)] transition-all p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="h-[200px] rounded-[16px] overflow-hidden bg-white mb-6 flex items-center justify-center p-4">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full bg-[#f0effe] text-[#614efa] text-[12px] font-bold mb-3">
                    {card.tag}
                  </span>
                  <h3 className="text-[20px] font-bold text-[#1a1a22] mb-2 group-hover:text-[#614efa] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-[14px] leading-[22px] text-[#525069]">
                    {card.desc}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-[14px] font-bold text-[#614efa] group-hover:translate-x-1 transition-transform">
                  <span>Learn more</span>
                  <img src={siteLogos.ctaPointer} alt="Arrow" className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SCROLL / TAB FEATURE RAIL (INTERACTIVE REPLICA) */}
      <section className="py-20 md:py-28 bg-[#fbfbfe] border-y border-[#e7e7ea]">
        <div className="w-[calc(100%-48px)] max-w-[1366px] mx-auto">
          <div className="text-center max-w-[760px] mx-auto mb-16">
            <h2 className="text-[32px] md:text-[44px] font-bold text-[#1a1a22] leading-[1.2]">
              Smarter meetings, powered by <br />
              <span className="gradient-purple">Silgate AI Meeting Assistant</span>
            </h2>
            <p className="text-[17px] text-[#525069] mt-4">
              Explore the core superpowers that transform mundane video calls into high-impact collaborative action.
            </p>
          </div>

          {/* Tab Selector Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {scrollTabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-5 py-3 rounded-full text-[14px] font-bold transition-all cursor-pointer ${
                  activeTab === idx
                    ? "bg-[#614efa] text-white shadow-md shadow-[#614efa]/20"
                    : "bg-white text-[#525069] hover:bg-[#f0effe] hover:text-[#614efa] border border-[#e7e7ea]"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Active Tab Content Panel */}
          <div className="bg-white rounded-[28px] border border-[#e7e7ea] shadow-xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Text Info */}
              <div className="lg:col-span-5 space-y-6">
                <span className="px-3 py-1 rounded-full bg-[#e8faf6] text-[#008065] text-[12px] font-bold uppercase tracking-wider">
                  Feature 0{activeTab + 1}
                </span>
                <h3 className="text-[26px] md:text-[32px] font-bold text-[#1a1a22] leading-[1.25]">
                  {scrollTabs[activeTab].title}
                </h3>
                <p className="text-[16px] leading-[26px] text-[#525069]">
                  {scrollTabs[activeTab].desc}
                </p>

                <div className="space-y-3 pt-2">
                  {scrollTabs[activeTab].checks.map((item, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-3 text-[14px] text-[#24232d] font-medium">
                      <span className="w-5 h-5 rounded-full bg-[#cef4ec] text-[#008065] flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                        ✓
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    to={scrollTabs[activeTab].linkHref}
                    className="inline-flex items-center gap-2 text-[#614efa] font-bold hover:underline text-[15px]"
                  >
                    <span>{scrollTabs[activeTab].linkText}</span>
                    <img src={siteLogos.ctaPointer} alt="Arrow" className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Media / Interactive Preview */}
              <div className="lg:col-span-7">
                {scrollTabs[activeTab].mediaType === "video" && (
                  <div className="rounded-[20px] overflow-hidden border border-[#e7e7ea] shadow-inner bg-black">
                    <video
                      key={scrollTabs[activeTab].videoSrc}
                      className="w-full h-auto block"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src={scrollTabs[activeTab].videoSrc} type="video/mp4" />
                    </video>
                  </div>
                )}

                {scrollTabs[activeTab].mediaType === "image" && (
                  <div className="rounded-[20px] overflow-hidden border border-[#e7e7ea] bg-[#f7f7f8] p-6 flex items-center justify-center">
                    <img
                      src={scrollTabs[activeTab].imgSrc}
                      alt={scrollTabs[activeTab].title}
                      className="max-h-[420px] w-auto object-contain"
                    />
                  </div>
                )}

                {scrollTabs[activeTab].mediaType === "noiseDemo" && (
                  <div className="rounded-[24px] bg-[#1a1a22] text-white p-8">
                    <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-6">
                      <div>
                        <div className="text-[18px] font-bold">Interactive Noise Removal</div>
                        <div className="text-[13px] text-white/60">Toggle to hear the Silgate difference</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[13px] font-bold">
                          {noiseDemoOn ? "Silgate ON" : "Silgate OFF"}
                        </span>
                        <button
                          onClick={() => setNoiseDemoOn(!noiseDemoOn)}
                          className={`w-14 h-8 rounded-full p-1 transition-colors cursor-pointer ${
                            noiseDemoOn ? "bg-[#614efa]" : "bg-gray-600"
                          }`}
                        >
                          <div
                            className={`w-6 h-6 rounded-full bg-white transition-transform ${
                              noiseDemoOn ? "translate-x-6" : "translate-x-0"
                            }`}
                          />
                        </button>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="p-4 rounded-[12px] bg-white/5 border border-white/10 flex items-center justify-between">
                        <div>
                          <div className="text-[14px] font-bold">Barking Dog & Coffee Shop Noise</div>
                          <div className="text-[12px] text-white/60">
                            Status: {noiseDemoOn ? "✓ Noise 100% Cancelled" : "⚠ Distractions Audible"}
                          </div>
                        </div>
                        <span className="text-xs px-2.5 py-1 rounded bg-white/10 text-white font-mono">
                          {noiseDemoOn ? "Clean Voice Isolated" : "Raw Input Stream"}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {scrollTabs[activeTab].mediaType === "accentDemo" && (
                  <div className="rounded-[24px] bg-[#1a1a22] text-white p-8">
                    <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-6">
                      <div>
                        <div className="text-[18px] font-bold">AI Accent Conversion Demo</div>
                        <div className="text-[13px] text-white/60">Real-time accent smoothing for global calls</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[13px] font-bold">
                          {accentDemoOn ? "Converted Voice" : "Original Accent"}
                        </span>
                        <button
                          onClick={() => setAccentDemoOn(!accentDemoOn)}
                          className={`w-14 h-8 rounded-full p-1 transition-colors cursor-pointer ${
                            accentDemoOn ? "bg-[#614efa]" : "bg-gray-600"
                          }`}
                        >
                          <div
                            className={`w-6 h-6 rounded-full bg-white transition-transform ${
                              accentDemoOn ? "translate-x-6" : "translate-x-0"
                            }`}
                          />
                        </button>
                      </div>
                    </div>

                    <div className="p-4 rounded-[12px] bg-white/5 border border-white/10 flex items-center justify-between">
                      <div>
                        <div className="text-[14px] font-bold">Manoj (Technical Architecture Lead)</div>
                        <div className="text-[12px] text-white/60">
                          {accentDemoOn ? "✓ Clarified Global English Delivery" : "Native Regional Accent"}
                        </div>
                      </div>
                      <span className="text-xs px-2.5 py-1 rounded bg-[#614efa]/40 text-[#c7beff] font-bold">
                        Neutral Accent
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY TEAMS CHOOSE SILGATE */}
      <section className="py-20 md:py-28 bg-[#ffffff]">
        <div className="w-[calc(100%-48px)] max-w-[1366px] mx-auto">
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <span className="text-[13px] font-bold text-[#614efa] uppercase tracking-wider mb-2 block">
              Proven Performance
            </span>
            <h2 className="text-[32px] md:text-[44px] font-bold text-[#1a1a22] leading-[1.2]">
              Why teams choose Silgate AI Assistant for Meetings
            </h2>
          </div>

          <div className="space-y-16">
            {whyItems.map((item, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center justify-between gap-12 bg-[#fbfbfe] rounded-[32px] p-8 md:p-12 border border-[#e7e7ea]`}
              >
                <div className="flex-1 max-w-[540px]">
                  <h3 className="text-[24px] md:text-[30px] font-bold text-[#1a1a22] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-[16px] text-[#525069] leading-[26px] mb-6">
                    {item.desc}
                  </p>
                  <div className="space-y-3">
                    {item.checks.map((chk, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-3 text-[14px] font-medium text-[#24232d]">
                        <span className="w-5 h-5 rounded-full bg-[#cef4ec] text-[#008065] flex items-center justify-center flex-shrink-0 text-xs font-bold">
                          ✓
                        </span>
                        <span>{chk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex-1 max-w-[500px] flex items-center justify-center">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="max-h-[360px] w-auto object-contain rounded-[16px]"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CRM INTEGRATIONS SECTION */}
      <section className="py-20 bg-[#fafaff] border-y border-[#e7e7ea]">
        <div className="w-[calc(100%-48px)] max-w-[1366px] mx-auto text-center">
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#1a1a22] mb-4">
            Your AI meeting manager, seamlessly Integrated
          </h2>
          <p className="text-[16px] text-[#525069] max-w-[680px] mx-auto mb-12">
            Silgate’s meeting assistant connects directly with leading CRMs, conferencing, and productivity tools to keep your post-call work on autopilot.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {crmIntegrations.map((tool, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[16px] p-4 border border-[#e7e7ea] flex flex-col items-center justify-center gap-3 shadow-xs hover:border-[#614efa] transition-colors"
              >
                <img src={tool.icon} alt={tool.name} className="w-10 h-10 object-contain" />
                <span className="text-[12px] font-bold text-[#1a1a22]">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. HOW IT WORKS 3 STEPS */}
      <section className="py-20 md:py-28 bg-[#ffffff]">
        <div className="w-[calc(100%-48px)] max-w-[1366px] mx-auto">
          <div className="text-center max-w-[650px] mx-auto mb-16">
            <h2 className="text-[32px] md:text-[42px] font-bold text-[#1a1a22]">
              Start using AI Meeting Assistant
            </h2>
            <p className="text-[16px] text-[#525069] mt-3">
              Up and running in under 2 minutes across Windows and macOS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#f7f7f8] rounded-[24px] p-6 border border-[#e7e7ea] flex flex-col justify-between"
              >
                <div>
                  <span className="text-[32px] font-extrabold text-[#614efa] mb-3 block">
                    {step.num}
                  </span>
                  <h3 className="text-[18px] font-bold text-[#1a1a22] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[14px] leading-[22px] text-[#525069] mb-6">
                    {step.desc}
                  </p>
                </div>
                <div className="h-[200px] rounded-[16px] overflow-hidden bg-white p-4 flex items-center justify-center border border-[#e7e7ea]">
                  <img src={step.img} alt={step.title} className="max-h-full max-w-full object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS SECTION */}
      <section className="py-20 bg-[#f9f9fb] border-y border-[#e7e7ea]">
        <div className="w-[calc(100%-48px)] max-w-[1366px] mx-auto">
          <div className="text-center max-w-[600px] mx-auto mb-16">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1a1a22]">
              Hear it from our customers
            </h2>
            <p className="text-[16px] text-[#525069] mt-2">
              Discover why professionals rely on Silgate every single day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[20px] p-6 border border-[#e7e7ea] shadow-xs flex flex-col justify-between"
              >
                <p className="text-[14px] leading-[24px] text-[#525069] mb-6 italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#f0f0f2]">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border border-[#e7e7ea]"
                  />
                  <div>
                    <div className="text-[14px] font-bold text-[#1a1a22]">{t.name}</div>
                    <div className="text-[12px] text-[#75738b]">{t.source}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. ENTERPRISE SECURITY SECTION */}
      <section className="py-20 bg-[#ffffff]">
        <div className="w-[calc(100%-48px)] max-w-[1366px] mx-auto">
          <div className="bg-[#1a1a22] text-white rounded-[32px] p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-[560px]">
              <span className="px-3 py-1 rounded-full bg-white/10 text-white text-[12px] font-bold uppercase tracking-wider mb-4 inline-block">
                Security by Design
              </span>
              <h2 className="text-[32px] md:text-[42px] font-bold leading-[1.2] mb-6">
                Built with powerful, enterprise-grade security in mind
              </h2>
              <p className="text-[16px] text-white/70 leading-[26px] mb-8">
                Your voice conversations belong to you. Silgate processes real-time audio on-device and provides robust compliance controls for multinational compliance teams.
              </p>

              <div className="grid grid-cols-2 gap-4 text-[14px]">
                <div className="flex items-center gap-2">
                  <span className="text-[#00d2c4] font-bold">✓</span>
                  <span>SOC 2 Type II Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#00d2c4] font-bold">✓</span>
                  <span>GDPR Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#00d2c4] font-bold">✓</span>
                  <span>HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#00d2c4] font-bold">✓</span>
                  <span>Zero Model Retraining</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <img
                src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_security_badges.png"
                alt="Security Badges"
                className="max-h-[280px] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 10. CASE STUDIES & KNOWLEDGE ARTICLES */}
      <section className="py-20 bg-[#fbfbfe] border-t border-[#e7e7ea]">
        <div className="w-[calc(100%-48px)] max-w-[1366px] mx-auto">
          <div className="text-center max-w-[650px] mx-auto mb-16">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1a1a22]">
              Explore more on meeting insights
            </h2>
            <p className="text-[16px] text-[#525069] mt-2">
              Expert guides, benchmark analyses, and best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((art, idx) => (
              <Link
                key={idx}
                to={art.href}
                className="group bg-white rounded-[20px] overflow-hidden border border-[#e7e7ea] hover:shadow-lg transition-all flex flex-col"
              >
                <div className="h-[200px] overflow-hidden bg-gray-100">
                  <img
                    src={art.img}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-[17px] font-bold text-[#1a1a22] group-hover:text-[#614efa] transition-colors mb-2">
                      {art.title}
                    </h3>
                    <p className="text-[13px] leading-[20px] text-[#525069]">
                      {art.desc}
                    </p>
                  </div>
                  <div className="mt-4 text-[13px] font-bold text-[#614efa] flex items-center gap-1.5">
                    <span>Read article</span>
                    <img src={siteLogos.ctaPointer} alt="" className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FAQ ACCORDION SECTION */}
      <section className="py-20 md:py-28 bg-[#ffffff]">
        <div className="w-[calc(100%-48px)] max-w-[900px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[42px] font-bold text-[#1a1a22]">
              Have questions? We’ve got answers.
            </h2>
            <p className="text-[16px] text-[#525069] mt-3">
              Everything you need to know about the Silgate AI Meeting Assistant.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-[#e7e7ea] rounded-[16px] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-6 font-bold text-[16px] md:text-[18px] text-[#1a1a22] flex items-center justify-between gap-4 cursor-pointer hover:bg-[#fafafa]"
                >
                  <span>{faq.q}</span>
                  <span className="text-[22px] text-[#614efa] font-bold">
                    {openFaq === idx ? "−" : "+"}
                  </span>
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

      {/* 12. FINAL CTA TOGGLE BANNER */}
      <section className="py-20 bg-[#614efa] text-white">
        <div className="w-[calc(100%-48px)] max-w-[1100px] mx-auto text-center">
          <h2 className="text-[32px] sm:text-[44px] md:text-[50px] font-bold leading-[1.2] mb-6">
            Make every meeting count with <br />
            Silgate AI Meeting Assistant
          </h2>
          <p className="text-[17px] md:text-[19px] text-white/80 max-w-[620px] mx-auto mb-10">
            Enjoy bot-free automated notes, accurate transcripts, and pristine voice clarity today.
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
              className="h-[50px] px-8 rounded-[12px] border border-white/40 text-white hover:bg-white/10 font-bold text-[15px] inline-flex items-center justify-center transition-colors"
            >
              Book a demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
