import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button";

/**
 * Replicated Krisp Developers Overview Page (Faithful Replica of krisp.ai/developers/)
 */
export default function Developers() {
  // Playground interactive state
  const [activePlaygroundTab, setActivePlaygroundTab] = useState(0);
  const [noiseCancelled, setNoiseCancelled] = useState(true);
  const [accentConverted, setAccentConverted] = useState(true);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // Video modal state
  const [activeVideoModal, setActiveVideoModal] = useState(null);

  // Accordion FAQ state
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const partnerLogos = [
    { name: "Discord", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_discord.svg" },
    { name: "Twilio", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_twilio.svg" },
    { name: "RingCentral", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_ringcentral.svg" },
    { name: "oVice", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_ovice.svg" },
    { name: "Daily", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_daily.svg" },
    { name: "Dyte", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_dyte.svg" },
    { name: "Aircall", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_aircall.svg" },
    { name: "PhoneBurner", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_phoneburner.svg" },
    { name: "Vonage", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_vonage.svg" },
    { name: "Symphony", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_symphony.svg" },
    { name: "CarrierX", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_carrierx.svg" },
    { name: "Zoho", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_zoho.svg" },
    { name: "LiveKit", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_livekit_sm.png" },
    { name: "Vapi", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_vapi.svg" },
    { name: "Telnyx", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_telnyx.svg" },
    { name: "Tavus", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_tavus.svg" }
  ];

  const testimonials = [
    {
      name: "Guarav Agarwal",
      title: "VP of product at Twilio",
      quote: "We are thrilled to partner with Krisp, a leader in Voice AI, to provide exceptional audio quality to the billions of conversations on the Twilio Video platform, allowing customers to build engaging virtual experiences across telehealth, education, remote work, and more.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_tp_guarav.jpg",
      logo: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_twilio_lg.svg"
    },
    {
      name: "Stanislav Vishnevskiy",
      title: "CTO & Co-Founder at Discord",
      quote: "Our users expect world-class quality from all of their communication channels. Krisp has delivered incredible audio clarity for over 150 million monthly active Discord users without requiring manual microphone tuning.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_tp_stanislav.jpg",
      logo: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_discord_lg.svg"
    },
    {
      name: "Kumar Saurav",
      title: "Co-founder & CTO at Vodex",
      quote: "Krisp VIVA solved our biggest headache in real-world Voice AI agent deployment: competing background voices causing hallucinations. Transcripts are crisp and accurate even from noisy call centers.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_tp_kumar.jpg",
      logo: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_vodex.svg"
    },
    {
      name: "Kwindla Kramer",
      title: "Co-Founder at Daily",
      quote: "Developers building on Daily want instant, broadcast-quality audio without fiddling with complex DSP pipelines. Krisp delivers state-of-the-art voice isolation with virtually non-existent CPU and latency penalties.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_tp_kwindla.jpg",
      logo: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_daily.svg"
    },
    {
      name: "Dr. Navdeep Dhaliwal",
      title: "Director of Clinical Informatics at Aarista",
      quote: "In clinical healthcare environments, doctor-patient conversations happen amidst hospital machinery and chatter. Krisp ensures our medical voice models capture only the speaker's true voice.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_tp_navdeep.jpg",
      logo: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_aarista.svg"
    },
    {
      name: "Zach Koch",
      title: "Founder and CEO at Ultravox",
      quote: "Real-time speech-to-speech agents require turn-taking precision down to 100 milliseconds. Krisp Turn Prediction is the only technology that prevents accidental interruptions without frustrating delays.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_tp_zach.jpg",
      logo: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_ultravox.svg"
    },
    {
      name: "Yukari Minai",
      title: "PR at oVice",
      quote: "Our virtual spatial office platform brings remote teams together. Krisp eliminates all kitchen, cafe, and family noise so our users can leave their microphones open without distraction.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_tp_yukari.jpg",
      logo: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_ovice.svg"
    },
    {
      name: "Howard Lerman",
      title: "Founder and CEO at Roam",
      quote: "Krisp represents the gold standard in audio processing. Integrating Krisp into Roam was effortless, and the audio clarity upgrade was immediately noticeable by every one of our enterprise customers.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_tp_howard.jpg",
      logo: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_roam.svg"
    },
    {
      name: "David Casem",
      title: "CEO of Telnyx",
      quote: "Krisp provides our global telecom customers with crystal-clear voice clarity right at the carrier edge. Low algorithmic latency makes it ideal for real-time SIP and PSTN pipelines.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_tp_david.jpg",
      logo: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_telnyx.svg"
    },
    {
      name: "Quinn Favret",
      title: "COO & Co-Founder at Tavus",
      quote: "Voice fidelity is foundational to believable conversational video replicas. Krisp separates clean speech from unpredictable background interference with remarkable precision.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_tp_quinn.jpg",
      logo: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_tavus.svg"
    }
  ];

  const faqs = [
    {
      q: "How does Voice Isolation differ from noise cancellation?",
      a: "Noise cancellation removes non-speech background sounds like fans, keyboard clicks, and traffic. Voice Isolation goes much further: it removes both background noise AND secondary human voices speaking around the primary user. It isolates only the near-field speaker, delivering a pure stream to STT or LLMs and preventing hallucinations caused by unintended voices."
    },
    {
      q: "What's the difference between Turn Prediction and Interruption Prediction?",
      a: "Turn Prediction identifies when a speaker is naturally about to finish talking, so your AI agent can respond at the right moment without unnatural pauses. Interruption Prediction distinguishes between meaningful interruptions (barge-ins) and passive backchannels like 'mhm' or 'yeah', keeping your agent speaking when it shouldn't stop."
    },
    {
      q: "Do VIVA models require transcription or language-specific configuration?",
      a: "No. All VIVA models operate directly on the audio signal — no transcription step is needed. They are language agnostic and work across all languages and accents out of the box."
    },
    {
      q: "Can VIVA models be used together or independently?",
      a: "Each model in the VIVA family — Voice Isolation, Turn Prediction, Interruption Prediction, and VAD — works as a standalone module. You can deploy any combination that fits your pipeline architecture."
    },
    {
      q: "What are the deployment requirements?",
      a: "VIVA models are lightweight and optimized for on-server CPU deployment. They integrate directly into your existing voice pipeline with sub-15ms algorithmic latency and low CPU footprint, without requiring GPU infrastructure."
    },
    {
      q: "Can I use RTC and VIVA models together?",
      a: "They serve different use cases. VIVA is built for human-to-AI communication — voice AI agents and bots. RTC is built for human-to-human communication — conferencing, telephony, and contact centers. Both can run within the same overall platform if your product serves both scenarios."
    },
    {
      q: "How many languages does Voice Translation support?",
      a: "Voice Translation supports 61 production languages for real-time bidirectional translation. It handles speech-to-speech translation with accent preservation and background voice removal built in."
    }
  ];

  return (
    <div className="bg-[#fcfcfd] text-[#131032] overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 md:pt-20 pb-16 md:pb-24 overflow-hidden border-b border-[#ececef]">
        {/* Background Subtle Grid Pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(#d5d3f8_1px,transparent_1px)] [background-size:24px_24px] z-0" />
        <div className="w-[calc(100%-48px)] max-w-[1240px] mx-auto relative z-10 text-center">
          {/* Pill Announcement */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#5544dc]/30 bg-white/90 shadow-sm text-[13px] md:text-[14px] text-[#24232d] mb-8 hover:scale-[1.01] transition-transform">
            <span className="font-bold text-[#5544dc] bg-[#5544dc]/10 px-2 py-0.5 rounded text-[11px] uppercase tracking-wider">
              New
            </span>
            <span>Voice Isolation 2.5: 46% fewer errors</span>
            <Link to="/developers/voice-isolation" className="text-[#5544dc] font-semibold hover:underline ml-1">
              Deep dive &rarr;
            </Link>
          </div>

          {/* Heading */}
          <h1 className="text-[36px] sm:text-[50px] md:text-[66px] font-extrabold tracking-tight leading-[1.08] text-[#131032] mb-6 max-w-[980px] mx-auto">
            #1 Real-time voice AI models. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#614efa] to-[#43c4fc] bg-clip-text text-transparent">
              Production ready.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-[17px] md:text-[20px] text-[#525069] leading-[30px] md:leading-[34px] max-w-[760px] mx-auto mb-10">
            Krisp gives voice AI agents and communication apps the audio intelligence they need — voice isolation, turn-taking, noise removal, and translation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <Link
              to="/contact-sales"
              className="w-full sm:w-auto h-[52px] px-8 bg-[#614efa] hover:bg-[#4a3bbe] text-white font-bold rounded-[12px] flex items-center justify-center transition-all shadow-lg shadow-[#614efa]/25 text-[15px]"
            >
              Request SDK Access
            </Link>
            <Link
              to="/developers/voice-translation-api"
              className="w-full sm:w-auto h-[52px] px-8 bg-white border border-[#d8d8de] hover:border-[#131032] text-[#131032] font-bold rounded-[12px] flex items-center justify-center transition-all text-[15px]"
            >
              Get Free Translation API Key
            </Link>
          </div>

          <p className="text-[14px] text-[#75738b] mb-12">
            Want to test live audio?{" "}
            <a href="#playground" className="text-[#614efa] font-semibold hover:underline">
              Explore Voice AI Playground &darr;
            </a>
          </p>

          {/* 4 Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-[#e7e7ea] max-w-[900px] mx-auto">
            <div className="text-center">
              <div className="text-[30px] md:text-[36px] font-extrabold text-[#131032]">1T+</div>
              <div className="text-[11px] md:text-[12px] uppercase font-bold tracking-wider text-[#75738b] mt-1">
                Minutes Processed
              </div>
            </div>
            <div className="text-center">
              <div className="text-[30px] md:text-[36px] font-extrabold text-[#131032]">8 yrs</div>
              <div className="text-[11px] md:text-[12px] uppercase font-bold tracking-wider text-[#75738b] mt-1">
                Production Audio
              </div>
            </div>
            <div className="text-center">
              <div className="text-[30px] md:text-[36px] font-extrabold text-[#131032]">200M+</div>
              <div className="text-[11px] md:text-[12px] uppercase font-bold tracking-wider text-[#75738b] mt-1">
                SDK Sessions / Mo
              </div>
            </div>
            <div className="text-center">
              <div className="text-[30px] md:text-[36px] font-extrabold text-[#131032]">2× Webby</div>
              <div className="text-[11px] md:text-[12px] uppercase font-bold tracking-wider text-[#75738b] mt-1">
                Winner
              </div>
            </div>
          </div>
        </div>

        {/* Partner Logos Carousel / Grid */}
        <div className="w-[calc(100%-48px)] max-w-[1240px] mx-auto mt-16 pt-10 border-t border-[#f0f0f4]">
          <p className="text-center text-[13px] font-semibold uppercase tracking-wider text-[#8b89a0] mb-8">
            Trusted by the engineering teams powering billions of real-time minutes
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
            {partnerLogos.map((logo, idx) => (
              <img
                key={idx}
                src={logo.src}
                alt={logo.name}
                className="h-[28px] md:h-[34px] w-auto max-w-[120px] object-contain hover:scale-105 transition-transform"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 2. WHERE KRISP SITS IN YOUR STACK */}
      <section className="py-20 md:py-28 bg-[#f7f7fa] border-b border-[#ececef]">
        <div className="w-[calc(100%-48px)] max-w-[1240px] mx-auto">
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <h2 className="text-[32px] md:text-[46px] font-extrabold text-[#131032] mb-4">
              Where Krisp sits in your stack
            </h2>
            <p className="text-[17px] md:text-[19px] text-[#525069]">
              Two SDK families and a self-serve Translation API built for sub-15ms real-time audio.
            </p>
          </div>

          {/* Stack Flow Visual Table */}
          <div className="space-y-6 mb-20">
            {/* Row 1: Voice AI Agents */}
            <div className="bg-white rounded-[24px] p-6 md:p-8 border border-[#e4e4e9] shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="lg:w-[260px] flex-shrink-0">
                  <span className="inline-block px-3 py-1 bg-[#efeefa] text-[#614efa] rounded-full text-[12px] font-bold uppercase tracking-wider mb-2">
                    Human-to-AI
                  </span>
                  <h3 className="text-[22px] font-bold text-[#131032]">Voice AI Agents</h3>
                  <p className="text-[14px] text-[#6b6982] mt-1 font-medium">Krisp VIVA SDK</p>
                  <Link
                    to="/developers/voice-isolation"
                    className="inline-flex items-center gap-1 text-[14px] text-[#614efa] font-bold mt-3 hover:underline"
                  >
                    Explore VIVA &rarr;
                  </Link>
                </div>

                {/* Pipeline Flow Diagram */}
                <div className="flex-1 overflow-x-auto pb-2">
                  <div className="flex items-center min-w-[620px] gap-2">
                    <div className="flex-1 bg-[#f4f4f7] rounded-[14px] p-4 text-center border border-[#e8e8ed]">
                      <div className="text-[11px] uppercase tracking-wider text-[#858399] font-bold">Input</div>
                      <div className="text-[15px] font-bold text-[#131032] mt-1">Messy Audio</div>
                      <div className="text-[12px] text-[#716f84]">Background noise & voices</div>
                    </div>
                    <span className="text-[#a4a2b8] font-bold text-lg">&rarr;</span>

                    <div className="flex-1 bg-[#614efa] text-white rounded-[14px] p-4 text-center shadow-md">
                      <div className="text-[11px] uppercase tracking-wider text-white/80 font-bold">Enhance</div>
                      <div className="text-[15px] font-bold text-white mt-1">VIVA SDK (15ms)</div>
                      <div className="text-[12px] text-white/80">Voice Isolation & Turn Taking</div>
                    </div>
                    <span className="text-[#a4a2b8] font-bold text-lg">&rarr;</span>

                    <div className="flex-1 bg-[#f4f4f7] rounded-[14px] p-4 text-center border border-[#e8e8ed]">
                      <div className="text-[11px] uppercase tracking-wider text-[#858399] font-bold">Transcribe</div>
                      <div className="text-[15px] font-bold text-[#131032] mt-1">STT Engine</div>
                      <div className="text-[12px] text-[#716f84]">Clean isolated voice</div>
                    </div>
                    <span className="text-[#a4a2b8] font-bold text-lg">&rarr;</span>

                    <div className="flex-1 bg-[#f4f4f7] rounded-[14px] p-4 text-center border border-[#e8e8ed]">
                      <div className="text-[11px] uppercase tracking-wider text-[#858399] font-bold">Reason</div>
                      <div className="text-[15px] font-bold text-[#131032] mt-1">LLM Core</div>
                      <div className="text-[12px] text-[#716f84]">Zero hallucination</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: Human Calls */}
            <div className="bg-white rounded-[24px] p-6 md:p-8 border border-[#e4e4e9] shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="lg:w-[260px] flex-shrink-0">
                  <span className="inline-block px-3 py-1 bg-[#fcf0ed] text-[#e05638] rounded-full text-[12px] font-bold uppercase tracking-wider mb-2">
                    Human-to-Human
                  </span>
                  <h3 className="text-[22px] font-bold text-[#131032]">Conferencing & CC</h3>
                  <p className="text-[14px] text-[#6b6982] mt-1 font-medium">Krisp RTC SDK</p>
                  <Link
                    to="/developers/noise-cancellation"
                    className="inline-flex items-center gap-1 text-[14px] text-[#614efa] font-bold mt-3 hover:underline"
                  >
                    Explore RTC SDK &rarr;
                  </Link>
                </div>

                <div className="flex-1 overflow-x-auto pb-2">
                  <div className="flex items-center min-w-[620px] gap-2">
                    <div className="flex-1 bg-[#f4f4f7] rounded-[14px] p-4 text-center border border-[#e8e8ed]">
                      <div className="text-[11px] uppercase tracking-wider text-[#858399] font-bold">Input</div>
                      <div className="text-[15px] font-bold text-[#131032] mt-1">Call Audio</div>
                      <div className="text-[12px] text-[#716f84]">Room echo & noise</div>
                    </div>
                    <span className="text-[#a4a2b8] font-bold text-lg">&rarr;</span>

                    <div className="flex-1 bg-[#131032] text-white rounded-[14px] p-4 text-center shadow-md">
                      <div className="text-[11px] uppercase tracking-wider text-white/70 font-bold">Process</div>
                      <div className="text-[15px] font-bold text-white mt-1">RTC SDK</div>
                      <div className="text-[12px] text-white/70">Bi-directional noise & BVC</div>
                    </div>
                    <span className="text-[#a4a2b8] font-bold text-lg">&rarr;</span>

                    <div className="flex-1 bg-[#f4f4f7] rounded-[14px] p-4 text-center border border-[#e8e8ed]">
                      <div className="text-[11px] uppercase tracking-wider text-[#858399] font-bold">Accent (Opt)</div>
                      <div className="text-[15px] font-bold text-[#131032] mt-1">Accent Conversion</div>
                      <div className="text-[12px] text-[#716f84]">Neutral native accent</div>
                    </div>
                    <span className="text-[#a4a2b8] font-bold text-lg">&rarr;</span>

                    <div className="flex-1 bg-[#f4f4f7] rounded-[14px] p-4 text-center border border-[#e8e8ed]">
                      <div className="text-[11px] uppercase tracking-wider text-[#858399] font-bold">Output</div>
                      <div className="text-[15px] font-bold text-[#131032] mt-1">Clean Stream</div>
                      <div className="text-[12px] text-[#716f84]">Crystal clear VoIP/SIP</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3: Multilingual Voice Translation */}
            <div className="bg-white rounded-[24px] p-6 md:p-8 border border-[#e4e4e9] shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="lg:w-[260px] flex-shrink-0">
                  <span className="inline-block px-3 py-1 bg-[#e6f8f5] text-[#008065] rounded-full text-[12px] font-bold uppercase tracking-wider mb-2">
                    Multilingual Calls
                  </span>
                  <h3 className="text-[22px] font-bold text-[#131032]">Voice Translation API</h3>
                  <p className="text-[14px] text-[#6b6982] mt-1 font-medium">Self-Serve REST / WebSocket</p>
                  <Link
                    to="/developers/voice-translation-api"
                    className="inline-flex items-center gap-1 text-[14px] text-[#614efa] font-bold mt-3 hover:underline"
                  >
                    API Docs & Pricing &rarr;
                  </Link>
                </div>

                <div className="flex-1 overflow-x-auto pb-2">
                  <div className="flex items-center min-w-[620px] gap-2">
                    <div className="flex-1 bg-[#f4f4f7] rounded-[14px] p-4 text-center border border-[#e8e8ed]">
                      <div className="text-[11px] uppercase tracking-wider text-[#858399] font-bold">Input</div>
                      <div className="text-[15px] font-bold text-[#131032] mt-1">Spoken Language</div>
                      <div className="text-[12px] text-[#716f84]">Any of 61 languages</div>
                    </div>
                    <span className="text-[#a4a2b8] font-bold text-lg">&rarr;</span>

                    <div className="flex-1 bg-[#008065] text-white rounded-[14px] p-4 text-center shadow-md">
                      <div className="text-[11px] uppercase tracking-wider text-white/80 font-bold">Translate</div>
                      <div className="text-[15px] font-bold text-white mt-1">Krisp VT Engine</div>
                      <div className="text-[12px] text-white/80">96% CX accuracy with BVC</div>
                    </div>
                    <span className="text-[#a4a2b8] font-bold text-lg">&rarr;</span>

                    <div className="flex-1 bg-[#f4f4f7] rounded-[14px] p-4 text-center border border-[#e8e8ed]">
                      <div className="text-[11px] uppercase tracking-wider text-[#858399] font-bold">Output</div>
                      <div className="text-[15px] font-bold text-[#131032] mt-1">Native Speech</div>
                      <div className="text-[12px] text-[#716f84]">Target speaker voice</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Built for Every Platform */}
          <div className="bg-white rounded-[24px] p-8 md:p-12 border border-[#e4e4e9] text-center">
            <h3 className="text-[26px] md:text-[32px] font-bold text-[#131032] mb-3">
              Built for every platform
            </h3>
            <p className="text-[16px] text-[#525069] max-w-[650px] mx-auto mb-8">
              Krisp's AI Voice SDK library is available for Windows, macOS, Linux, Web (JS/WASM), iOS, Android, and on-server CPU container fleets.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                "LiveKit",
                "WebRTC",
                "Pipecat",
                "C++ Core",
                "Node.js",
                "Python",
                "Go SDK",
                "Rust FFI",
                "WebAssembly",
                "iOS / Swift",
                "Android NDK"
              ].map((plat, pIdx) => (
                <span
                  key={pIdx}
                  className="px-4 py-2 bg-[#f4f4f7] text-[#2c2a3e] rounded-[12px] text-[14px] font-semibold border border-[#e7e7eb] hover:border-[#614efa] transition-colors"
                >
                  {plat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. TWO SDK FAMILIES SECTION */}
      <section className="py-20 md:py-28 bg-white border-b border-[#ececef]">
        <div className="w-[calc(100%-48px)] max-w-[1240px] mx-auto">
          <div className="text-center max-w-[760px] mx-auto mb-16">
            <span className="text-[13px] font-bold uppercase tracking-wider text-[#614efa] bg-[#efeefa] px-3.5 py-1 rounded-full">
              Production Voice DSP
            </span>
            <h2 className="text-[32px] md:text-[48px] font-extrabold text-[#131032] mt-4 mb-4">
              Two SDK families. One audio expertise.
            </h2>
            <p className="text-[17px] md:text-[19px] text-[#525069]">
              Both powered by 8 years of production audio research and a trillion+ minutes processed.
            </p>
          </div>

          {/* Side-by-Side SDK Families Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Family 1: Krisp VIVA SDK */}
            <div className="bg-[#f9f9fc] rounded-[28px] p-6 md:p-8 border border-[#e4e4eb] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3.5 py-1 bg-[#efeefa] text-[#614efa] rounded-full text-[12px] font-bold uppercase tracking-wider">
                    For Voice AI Agents
                  </span>
                  <span className="text-[12px] font-semibold text-[#75738b]">
                    1B+ mins / mo
                  </span>
                </div>
                <h3 className="text-[28px] font-bold text-[#131032] mb-2">Krisp VIVA SDK</h3>
                <p className="text-[15px] text-[#525069] mb-8 leading-[24px]">
                  Voice infrastructure for voice AI agents. Each model is lightweight, CPU-deployed, and operates on raw audio alone.
                </p>

                {/* Sub-models with video previews */}
                <div className="space-y-6">
                  {/* Card 1: Voice Isolation */}
                  <div className="bg-white rounded-[20px] p-5 border border-[#e7e7ed] shadow-sm">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h4 className="text-[18px] font-bold text-[#131032]">Voice Isolation</h4>
                        <span className="inline-block text-[11px] font-bold text-[#614efa] uppercase tracking-wide">
                          46% WER reduction · 15ms latency
                        </span>
                      </div>
                      <Link
                        to="/developers/voice-isolation"
                        className="text-[13px] font-bold text-[#614efa] hover:underline"
                      >
                        Deep dive &rarr;
                      </Link>
                    </div>
                    <p className="text-[14px] text-[#5c5b70] leading-[22px] mb-4">
                      Server-side voice isolation that sits in front of your VAD or STT. Removes background noise, cross-talk, and non-primary speakers before they reach your agent.
                    </p>
                    <div className="rounded-[12px] overflow-hidden bg-black/5 aspect-video max-h-[180px]">
                      <video
                        src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/video_sdk_viva.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Card 2: Turn Prediction */}
                  <div className="bg-white rounded-[20px] p-5 border border-[#e7e7ed] shadow-sm">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h4 className="text-[18px] font-bold text-[#131032]">Turn Prediction</h4>
                        <span className="inline-block text-[11px] font-bold text-[#614efa] uppercase tracking-wide">
                          Audio-only · Sub-200ms turn detection
                        </span>
                      </div>
                      <Link
                        to="/developers/turn-taking"
                        className="text-[13px] font-bold text-[#614efa] hover:underline"
                      >
                        View &rarr;
                      </Link>
                    </div>
                    <p className="text-[14px] text-[#5c5b70] leading-[22px] mb-4">
                      VIVA model that predicts when a speaker is done — directly from raw audio, no transcription needed. Eliminates awkward silence and talk-over.
                    </p>
                    <div className="rounded-[12px] overflow-hidden bg-black/5 aspect-video max-h-[180px]">
                      <video
                        src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/video_sdk_turn.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Card 3: Interruption Prediction & VAD */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white rounded-[16px] p-4 border border-[#e7e7ed]">
                      <h4 className="text-[15px] font-bold text-[#131032] mb-1">Interruption Prediction</h4>
                      <p className="text-[12px] text-[#615f75] leading-[18px]">
                        Distinguishes real barge-ins from backchannels ("mhm"). Keeps agent speaking when intended.
                      </p>
                    </div>
                    <div className="bg-white rounded-[16px] p-4 border border-[#e7e7ed]">
                      <h4 className="text-[15px] font-bold text-[#131032] mb-1">Voice Activity Detection</h4>
                      <p className="text-[12px] text-[#615f75] leading-[18px]">
                        Zero false triggers. High accuracy audio-only VAD resilient to office chatter and noise.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#e7e7ed]">
                <Link
                  to="/developers/voice-isolation"
                  className="w-full h-[48px] bg-[#614efa] hover:bg-[#4a3bbe] text-white font-bold rounded-[12px] flex items-center justify-center transition-colors text-[14px]"
                >
                  Explore VIVA Voice Isolation
                </Link>
              </div>
            </div>

            {/* Family 2: Krisp RTC SDK */}
            <div className="bg-[#f9f9fc] rounded-[28px] p-6 md:p-8 border border-[#e4e4eb] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3.5 py-1 bg-[#fcf0ed] text-[#e05638] rounded-full text-[12px] font-bold uppercase tracking-wider">
                    For Human-to-Human Calls
                  </span>
                  <span className="text-[12px] font-semibold text-[#75738b]">
                    80B+ mins / mo
                  </span>
                </div>
                <h3 className="text-[28px] font-bold text-[#131032] mb-2">Krisp RTC SDK</h3>
                <p className="text-[15px] text-[#525069] mb-8 leading-[24px]">
                  Enhances the quality of communication in calls and meetings. Real-time processing for contact centers and platforms.
                </p>

                <div className="space-y-6">
                  {/* Card 1: Accent Conversion */}
                  <div className="bg-white rounded-[20px] p-5 border border-[#e7e7ed] shadow-sm">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h4 className="text-[18px] font-bold text-[#131032]">Accent Conversion</h4>
                        <span className="inline-block text-[11px] font-bold text-[#e05638] uppercase tracking-wide">
                          Bidirectional · Emotion Preserved
                        </span>
                      </div>
                      <Link
                        to="/developers/accent-conversion"
                        className="text-[13px] font-bold text-[#614efa] hover:underline"
                      >
                        Deep dive &rarr;
                      </Link>
                    </div>
                    <p className="text-[14px] text-[#5c5b70] leading-[22px] mb-4">
                      Converts call center agent accents to match the customer's native speech in real time. Improves CSAT with strong proven ROI.
                    </p>
                    <div className="rounded-[12px] overflow-hidden bg-black/5 aspect-video max-h-[180px]">
                      <video
                        src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/video_sdk_ac.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Card 2: Noise Cancellation & BVC */}
                  <div className="bg-white rounded-[20px] p-5 border border-[#e7e7ed] shadow-sm">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h4 className="text-[18px] font-bold text-[#131032]">Noise Cancellation & BVC</h4>
                        <span className="inline-block text-[11px] font-bold text-[#e05638] uppercase tracking-wide">
                          Outbound & Inbound · De-reverberation
                        </span>
                      </div>
                      <Link
                        to="/developers/noise-cancellation"
                        className="text-[13px] font-bold text-[#614efa] hover:underline"
                      >
                        View &rarr;
                      </Link>
                    </div>
                    <p className="text-[14px] text-[#5c5b70] leading-[22px] mb-4">
                      Strips background noise and acoustic echo from mic and speaker streams. Removes other voices near the agent without voice enrollment.
                    </p>
                    <div className="rounded-[12px] overflow-hidden bg-black/5 aspect-video max-h-[180px]">
                      <video
                        src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/video_sdk_nc.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Self-serve Voice Translation Callout */}
                  <div className="bg-[#efeefa] rounded-[16px] p-4 border border-[#614efa]/20 flex items-center justify-between gap-4">
                    <div>
                      <h4 className="text-[15px] font-bold text-[#131032]">Voice Translation API</h4>
                      <p className="text-[12px] text-[#525069]">
                        61 languages any-to-any with 96% accuracy and built-in noise removal.
                      </p>
                    </div>
                    <Link
                      to="/developers/voice-translation-api"
                      className="px-3.5 py-1.5 bg-[#614efa] text-white text-[12px] font-bold rounded-[8px] flex-shrink-0 hover:bg-[#4a3bbe]"
                    >
                      Get Key
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#e7e7ed]">
                <Link
                  to="/developers/noise-cancellation"
                  className="w-full h-[48px] bg-white border border-[#d8d8de] hover:border-[#131032] text-[#131032] font-bold rounded-[12px] flex items-center justify-center transition-colors text-[14px]"
                >
                  Explore RTC Noise Cancellation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE VOICE AI PLAYGROUND SECTION */}
      <section id="playground" className="py-20 md:py-28 bg-[#131032] text-white relative overflow-hidden">
        <div className="w-[calc(100%-48px)] max-w-[1240px] mx-auto relative z-10">
          <div className="text-center max-w-[760px] mx-auto mb-16">
            <span className="text-[12px] font-bold uppercase tracking-wider text-[#62c8ff] bg-white/10 px-3.5 py-1 rounded-full">
              Live Audio Lab
            </span>
            <h2 className="text-[34px] md:text-[50px] font-extrabold text-white mt-4 mb-4">
              Hear it for yourself.
            </h2>
            <p className="text-[17px] md:text-[19px] text-[#b6b4d0]">
              Run real-world audio through every model in the Krisp stack. No signup. No SDK. Just sound.
            </p>
          </div>

          {/* Interactive Player Console */}
          <div className="bg-[#1b1742] rounded-[28px] border border-white/10 p-6 md:p-10 shadow-2xl max-w-[1000px] mx-auto">
            {/* Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-3 border-b border-white/10 pb-6 mb-8">
              {[
                { label: "01 Voice Isolation", badge: "VIVA 2.5" },
                { label: "02 Noise Cancellation", badge: "RTC SDK" },
                { label: "03 Accent Conversion", badge: "CX Engine" }
              ].map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePlaygroundTab(idx)}
                  className={`px-5 py-2.5 rounded-full text-[14px] font-bold transition-all flex items-center gap-2 ${
                    activePlaygroundTab === idx
                      ? "bg-[#614efa] text-white shadow-lg shadow-[#614efa]/30"
                      : "bg-white/5 text-white/70 hover:bg-white/10"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className="text-[10px] opacity-75 uppercase">{tab.badge}</span>
                </button>
              ))}
            </div>

            {/* Tab 0: Voice Isolation */}
            {activePlaygroundTab === 0 && (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-[20px] font-bold text-white">Office Multi-Speaker Interference</h3>
                    <p className="text-[14px] text-white/60 mt-1">
                      Secondary speaker talking loudly in the background while primary user reads a prompt.
                    </p>
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                    <span className="text-[13px] text-white/80 font-medium">Model:</span>
                    <span className="text-[13px] font-bold text-[#43c4fc]">VIVA 2.5 Voice Isolation</span>
                  </div>
                </div>

                {/* Waveform Comparison Box */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Raw Stream */}
                  <div className="bg-[#131032] p-5 rounded-[16px] border border-red-500/30">
                    <div className="flex items-center justify-between mb-3 text-[12px] font-bold text-red-400">
                      <span>RAW MICROPHONE AUDIO</span>
                      <span>STT WER: 35.9%</span>
                    </div>
                    <div className="h-16 flex items-center justify-center gap-1">
                      {[18, 42, 65, 80, 55, 30, 75, 90, 85, 40, 25, 70, 95, 60, 45, 80, 50, 35].map((h, i) => (
                        <span
                          key={i}
                          className="w-1.5 bg-red-400/70 rounded-full animate-pulse"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                    <div className="mt-3 text-[12px] text-white/50 font-mono">
                      "Kumquat... [interfering colleague voice: juxtapose] ... zucchini"
                    </div>
                  </div>

                  {/* Clean Stream */}
                  <div className="bg-[#131032] p-5 rounded-[16px] border border-green-500/30">
                    <div className="flex items-center justify-between mb-3 text-[12px] font-bold text-green-400">
                      <span>KRISP ISOLATED STREAM</span>
                      <span>STT WER: 8.2% (-77%)</span>
                    </div>
                    <div className="h-16 flex items-center justify-center gap-1">
                      {[18, 30, 45, 60, 40, 20, 50, 65, 60, 25, 15, 45, 60, 35, 25, 55, 30, 20].map((h, i) => (
                        <span
                          key={i}
                          className="w-1.5 bg-green-400 rounded-full"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                    <div className="mt-3 text-[12px] text-green-300 font-mono">
                      "Kumquat... [clean silence] ... zucchini"
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 1: Noise Cancellation */}
            {activePlaygroundTab === 1 && (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-[20px] font-bold text-white">Aggressive Cafeteria & Keyboard Clatter</h3>
                    <p className="text-[14px] text-white/60 mt-1">
                      Toggle the Krisp filter switch to hear real-time suppression of 85dB ambient racket.
                    </p>
                  </div>

                  {/* Filter Toggle Switch */}
                  <div className="flex items-center gap-3 bg-white/10 px-5 py-2.5 rounded-full border border-white/20">
                    <span className="text-[13px] font-semibold text-white/80">Krisp Noise Cancellation</span>
                    <button
                      onClick={() => setNoiseCancelled(!noiseCancelled)}
                      className={`relative w-14 h-7 rounded-full transition-colors ${
                        noiseCancelled ? "bg-[#20bf6b]" : "bg-white/20"
                      }`}
                    >
                      <span
                        className={`absolute top-1 left-1 bg-white w-5 h-5 rounded-full transition-transform ${
                          noiseCancelled ? "transform translate-x-7" : ""
                        }`}
                      />
                    </button>
                    <span className={`text-[12px] font-bold ${noiseCancelled ? "text-[#20bf6b]" : "text-white/40"}`}>
                      {noiseCancelled ? "ON" : "OFF"}
                    </span>
                  </div>
                </div>

                <div className="bg-[#131032] p-6 rounded-[20px] border border-white/10 text-center">
                  <div className="h-20 flex items-center justify-center gap-1.5">
                    {Array.from({ length: 32 }).map((_, idx) => {
                      const baseH = noiseCancelled ? (idx % 3 === 0 ? 45 : 15) : 85;
                      return (
                        <span
                          key={idx}
                          className={`w-1.5 rounded-full transition-all duration-300 ${
                            noiseCancelled ? "bg-[#614efa]" : "bg-red-400"
                          }`}
                          style={{ height: `${baseH}%` }}
                        />
                      );
                    })}
                  </div>
                  <p className="text-[13px] text-white/60 mt-4">
                    {noiseCancelled
                      ? "✓ Background chatter, mechanical keyboard clatter, and dog barks eliminated."
                      : "⚠ Raw microphone passing coffee shop murmur and mechanical clicks directly."}
                  </p>
                </div>
              </div>
            )}

            {/* Tab 2: Accent Conversion */}
            {activePlaygroundTab === 2 && (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-[20px] font-bold text-white">Call Center Agent Accent Neutralization</h3>
                    <p className="text-[14px] text-white/60 mt-1">
                      Converts heavy regional accents into fluent, clear neutral pronunciation in streaming audio.
                    </p>
                  </div>

                  <div className="flex items-center gap-3 bg-white/10 px-5 py-2.5 rounded-full border border-white/20">
                    <span className="text-[13px] font-semibold text-white/80">Accent Conversion</span>
                    <button
                      onClick={() => setAccentConverted(!accentConverted)}
                      className={`relative w-14 h-7 rounded-full transition-colors ${
                        accentConverted ? "bg-[#614efa]" : "bg-white/20"
                      }`}
                    >
                      <span
                        className={`absolute top-1 left-1 bg-white w-5 h-5 rounded-full transition-transform ${
                          accentConverted ? "transform translate-x-7" : ""
                        }`}
                      />
                    </button>
                    <span className={`text-[12px] font-bold ${accentConverted ? "text-[#62c8ff]" : "text-white/40"}`}>
                      {accentConverted ? "ON" : "OFF"}
                    </span>
                  </div>
                </div>

                <div className="bg-[#131032] p-6 rounded-[20px] border border-white/10 text-center">
                  <div className="text-[16px] text-white font-medium mb-3">
                    {accentConverted ? "Converted: Standard US English Cadence" : "Original: Heavy Regional Dialect"}
                  </div>
                  <div className="h-16 flex items-center justify-center gap-1.5">
                    {Array.from({ length: 28 }).map((_, idx) => (
                      <span
                        key={idx}
                        className={`w-1.5 rounded-full transition-all duration-300 ${
                          accentConverted ? "bg-[#62c8ff]" : "bg-[#f7b731]"
                        }`}
                        style={{ height: `${((idx * 17) % 60) + 30}%` }}
                      />
                    ))}
                  </div>
                  <p className="text-[13px] text-white/60 mt-4">
                    Preserves speaker identity, gender, emotion, and prosody with zero robotic artifacts.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Customer Video Showcase Cards */}
          <div className="mt-16 pt-16 border-t border-white/10">
            <h3 className="text-center text-[22px] font-bold text-white mb-10">
              Hear it directly from engineering leaders
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Video Card 1: Phonely */}
              <div
                onClick={() => setActiveVideoModal("9Lw_e9xMHLA")}
                className="bg-white/5 hover:bg-white/10 rounded-[20px] p-6 border border-white/10 cursor-pointer transition-all hover:scale-[1.02] group"
              >
                <div className="relative aspect-video rounded-[12px] overflow-hidden bg-black/40 mb-4 flex items-center justify-center">
                  <img
                    src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_play_cct.svg"
                    alt="Play"
                    className="w-12 h-12 group-hover:scale-110 transition-transform"
                  />
                </div>
                <h4 className="text-[17px] font-bold text-white group-hover:text-[#62c8ff] transition-colors">
                  Phonely solving Voice AI's biggest challenges with Krisp
                </h4>
                <p className="text-[13px] text-white/60 mt-2">
                  Watch how Phonely eliminated background hallucination across 100,000+ AI phone calls.
                </p>
              </div>

              {/* Video Card 2: Natterbox */}
              <div
                onClick={() => setActiveVideoModal("9Lw_e9xMHLA")}
                className="bg-white/5 hover:bg-white/10 rounded-[20px] p-6 border border-white/10 cursor-pointer transition-all hover:scale-[1.02] group"
              >
                <div className="relative aspect-video rounded-[12px] overflow-hidden bg-black/40 mb-4 flex items-center justify-center">
                  <img
                    src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_play_cct.svg"
                    alt="Play"
                    className="w-12 h-12 group-hover:scale-110 transition-transform"
                  />
                </div>
                <h4 className="text-[17px] font-bold text-white group-hover:text-[#62c8ff] transition-colors">
                  Natterbox powers real-world AI conversations with Krisp
                </h4>
                <p className="text-[13px] text-white/60 mt-2">
                  Enterprise contact center telephony integrated with Krisp RTC audio models.
                </p>
              </div>

              {/* Video Card 3: Newo */}
              <div
                onClick={() => setActiveVideoModal("9Lw_e9xMHLA")}
                className="bg-white/5 hover:bg-white/10 rounded-[20px] p-6 border border-white/10 cursor-pointer transition-all hover:scale-[1.02] group"
              >
                <div className="relative aspect-video rounded-[12px] overflow-hidden bg-black/40 mb-4 flex items-center justify-center">
                  <img
                    src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_play_cct.svg"
                    alt="Play"
                    className="w-12 h-12 group-hover:scale-110 transition-transform"
                  />
                </div>
                <h4 className="text-[17px] font-bold text-white group-hover:text-[#62c8ff] transition-colors">
                  Newo transforms AI voice agents' performance with Krisp
                </h4>
                <p className="text-[13px] text-white/60 mt-2">
                  How Newo achieves sub-second turn-around time using Krisp turn prediction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS PORTRAIT GRID */}
      <section className="py-20 md:py-28 bg-white border-b border-[#ececef]">
        <div className="w-[calc(100%-48px)] max-w-[1240px] mx-auto">
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <span className="text-[13px] font-bold uppercase tracking-wider text-[#614efa] bg-[#efeefa] px-3.5 py-1 rounded-full">
              Customers
            </span>
            <h2 className="text-[32px] md:text-[46px] font-extrabold text-[#131032] mt-4 mb-4">
              From voice AI teams
            </h2>
            <p className="text-[17px] text-[#525069]">
              How the fastest-moving teams integrate Krisp into production products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((tp, idx) => (
              <div
                key={idx}
                className="bg-[#f9f9fc] rounded-[24px] p-6 border border-[#e4e4eb] flex flex-col justify-between hover:shadow-lg transition-shadow"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={tp.img}
                      alt={tp.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm flex-shrink-0"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="text-[16px] font-bold text-[#131032]">{tp.name}</h4>
                      <p className="text-[12px] text-[#6e6c82] font-medium">{tp.title}</p>
                    </div>
                  </div>
                  <p className="text-[14px] text-[#4b4960] leading-[22px] italic">
                    {tp.quote}
                  </p>
                </div>
                {tp.logo && (
                  <div className="mt-6 pt-4 border-t border-[#e8e8ef] flex items-center justify-between">
                    <img
                      src={tp.logo}
                      alt="Logo"
                      className="h-6 w-auto max-w-[90px] object-contain opacity-60"
                      loading="lazy"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQS ACCORDION */}
      <section className="py-20 md:py-28 bg-[#f7f7fa] border-b border-[#ececef]">
        <div className="w-[calc(100%-48px)] max-w-[850px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[44px] font-extrabold text-[#131032] mb-3">
              Frequently asked questions
            </h2>
            <p className="text-[17px] text-[#525069]">
              Everything you need to know about integrating Krisp developer SDKs and APIs.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-[18px] border border-[#e2e2e8] overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-[16px] md:text-[18px] text-[#131032] hover:text-[#614efa] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className={`w-8 h-8 rounded-full bg-[#f4f4f7] flex items-center justify-center flex-shrink-0 text-xl transition-transform ${isOpen ? "rotate-45" : ""}`}>
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-[15px] text-[#525069] leading-[26px] border-t border-[#f0f0f4] pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. BOTTOM TOGGLE BANNER */}
      <section className="py-20 bg-white">
        <div className="w-[calc(100%-48px)] max-w-[1240px] mx-auto">
          <div className="rounded-[32px] bg-gradient-to-r from-[#5544dc] via-[#614efa] to-[#43c4fc] p-8 md:p-16 text-white text-center shadow-xl relative overflow-hidden">
            <div className="max-w-[700px] mx-auto relative z-10">
              <h2 className="text-[32px] md:text-[48px] font-extrabold text-white mb-6 leading-[1.15]">
                Tell us your solution, we'll show how Krisp can help.
              </h2>
              <p className="text-[17px] md:text-[19px] text-white/90 mb-10 leading-[30px]">
                Whether you're building next-generation Voice AI agents or powering high-scale human conferencing, Krisp provides the production DSP you need.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/contact-sales"
                  className="h-[52px] px-8 bg-white hover:bg-[#f0f0f4] text-[#131032] font-bold rounded-[12px] flex items-center justify-center transition-colors text-[15px] shadow-md"
                >
                  Request SDK Access
                </Link>
                <Link
                  to="/developers/voice-translation-api"
                  className="h-[52px] px-8 bg-white/20 hover:bg-white/30 border border-white/40 text-white font-bold rounded-[12px] flex items-center justify-center transition-colors text-[15px]"
                >
                  Voice Translation API
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YOUTUBE MODAL */}
      {activeVideoModal && (
        <div
          onClick={() => setActiveVideoModal(null)}
          className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-black rounded-[24px] overflow-hidden max-w-[800px] w-full aspect-video shadow-2xl relative"
          >
            <button
              onClick={() => setActiveVideoModal(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center font-bold text-xl"
            >
              &times;
            </button>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${activeVideoModal}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}
