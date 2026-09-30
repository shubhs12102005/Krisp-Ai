import React, { useState } from "react";
import { Link } from "react-router-dom";

/**
 * Meeting Recording Page Component.
 * High-fidelity replica of https://krisp.ai/meeting-recording/
 * Features hero with platform badges, trusted enterprise logos, video feature cards,
 * benefit analysis, 3-step setup, persona breakdown with imagery, platform-specific guides
 * (Zoom, Meet, Teams), prestigious industry awards, FAQs, and global CTA banner.
 */
export default function MeetingRecording() {
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
    { name: "Sony", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_sony.svg" }
  ];

  const videoFeatures = [
    {
      title: "Audio & Video Recording",
      desc: "Record crisp audio and high-definition video of both sides of your conversation without any bots.",
      video: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/video_recording_lg.mp4"
    },
    {
      title: "Automated Meeting Notes",
      desc: "Generates structured summaries and action items linked directly to recorded moments.",
      video: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/video_notes_lg.mp4"
    },
    {
      title: "Live Synchronised Transcripts",
      desc: "Follow along with word-for-word live transcription while the call is being recorded.",
      video: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/video_transcription_lg.mp4"
    },
    {
      title: "Instant Team Collaboration",
      desc: "Share recordings with timestamps or clip crucial discussion highlights with a single link.",
      video: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/video_collaboration_lg.mp4"
    }
  ];

  const benefits = [
    {
      title: "Stay present, we'll record",
      desc: "Never look down to scribble notes again. Silgate handles audio, video, and notes in the background so you can look your client in the eye.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_benefit_gist.png"
    },
    {
      title: "Get recordings with summaries",
      desc: "Recordings are paired with executive bullet points, key takeaways, and assigned owners, transforming hour-long files into 2-minute skims.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_benefit_decisions.png"
    },
    {
      title: "Integrate with any workflow",
      desc: "Sync recordings and notes directly to your cloud storage, CRM, and project boards like Salesforce, HubSpot, and Notion.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_recording_integrations.png"
    }
  ];

  const steps = [
    {
      step: "01",
      title: "Download Silgate",
      desc: "Get the lightweight Silgate desktop app for Mac or Windows.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_configure.png"
    },
    {
      step: "02",
      title: "Choose Recording Mode",
      desc: "Pick from Audio & Video, Audio Only, or Transcript Only based on your privacy needs.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_unleash.png"
    },
    {
      step: "03",
      title: "One-Click Record",
      desc: "Click Record in the floating widget when your call starts. Everything is stored securely.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_benefit_gist.png"
    }
  ];

  const platforms = [
    {
      name: "Zoom Meeting Recording",
      desc: "Record any Zoom meeting without requiring host permission or admitting a third-party bot.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs//img_recording_zoom.png"
    },
    {
      name: "Google Meet Recording",
      desc: "Capture Google Meet sessions directly in Google Chrome or desktop without Workspace Enterprise plans.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs//img_recording_meet.png"
    },
    {
      name: "Teams Meeting Recording",
      desc: "Full HD recording and AI notes for Microsoft Teams internal standups and external client syncs.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs//img_recording_teams.png"
    }
  ];

  const awards = [
    { name: "Gartner Cool Vendor", icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_gartner_new.svg" },
    { name: "Forbes AI 50", icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_forbesai_new.svg" },
    { name: "Webby Award Winner", icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_webby_new.svg" },
    { name: "G2 Leader", icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_g2_new.svg" }
  ];

  const faqs = [
    {
      q: "How can I use AI to record a meeting?",
      a: "With Silgate, recording is fully automated. Once you install the app, the AI Meeting Recorder will capture conversations across any conferencing platform without requiring bots to join the call."
    },
    {
      q: "What is the best tool to record a meeting?",
      a: "The best tool is one that goes beyond basic recording. Silgate not only records meetings across any app but also provides AI-powered transcripts, summaries, and action items. This ensures you capture every detail and turn conversations into clear outcomes."
    },
    {
      q: "Is Silgate Meeting Recorder free?",
      a: "Yes. Silgate Meeting Recorder is available with a free tier. It includes core features like recording, transcription, and meeting summaries. Teams can upgrade afterward for advanced options and collaboration tools."
    },
    {
      q: "Why should meetings be recorded?",
      a: "Recording meetings ensures you never miss important details, decisions, or action items. Using a meeting recording app also helps teams stay aligned, provides a reference for those who couldn’t attend, and makes follow-ups faster and more accurate."
    },
    {
      q: "Is it allowed to record a meeting?",
      a: "Recording policies vary by company, region, and platform. Always check local regulations and let participants know if you’re recording."
    },
    {
      q: "Is my data secure when using meeting recording software?",
      a: "Yes. Silgate records and transcribes meetings securely. All data is handled with strict privacy standards, and meeting recordings are stored safely so only you can access them."
    },
    {
      q: "Where does the recorder app store my meetings, and how can I access them?",
      a: "Your meeting recordings and transcripts are stored in your Silgate account. You can access, review, and share them anytime directly from the app or web dashboard."
    },
    {
      q: "Can I record a meeting from the Silgate mobile app?",
      a: "Yes. Silgate’s mobile app lets you record in-person conversations and online meetings, capture transcripts, and generate summaries from your phone."
    }
  ];

  return (
    <div className="bg-white text-[#131032]">
      {/* 1. HERO SECTION */}
      <section className="pt-24 md:pt-32 pb-16 bg-[#ffffff]">
        <div className="w-[calc(100%-48px)] max-w-[1366px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 max-w-[640px]">
              <span className="hero_pill text-[13px] font-bold text-[#1a1a22] mb-6">
                🎙️ Bot-Free Meeting Recorder
              </span>

              <h1 className="text-[38px] sm:text-[48px] lg:text-[54px] font-bold leading-[1.15] text-[#1a1a22] tracking-tight mb-6">
                Automatic AI meeting recording <br />
                <span className="gradient-purple">software for any app</span>
              </h1>

              <p className="text-[17px] md:text-[19px] leading-[30px] text-[#525069] mb-8 font-normal">
                Record calls in Zoom, Teams, Meet, and beyond without a bot. High-definition video and audio recordings with synchronised transcripts and AI summaries.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/signup"
                  className="h-[48px] px-8 rounded-[12px] bg-[#614efa] hover:bg-[#4a3bbe] text-white font-bold text-[15px] inline-flex items-center justify-center transition-colors shadow-sm"
                >
                  Start recording for free
                </Link>
                <Link
                  to="/contact-sales"
                  className="h-[48px] px-8 rounded-[12px] border border-[#23232e] text-[#1a1a22] hover:bg-[#1a1a22] hover:text-white font-bold text-[15px] inline-flex items-center justify-center transition-colors"
                >
                  Book a demo
                </Link>
              </div>

              <div className="flex items-center gap-3 mt-8 text-[13px] text-[#75738b]">
                <span>No bots required on:</span>
                <div className="flex items-center gap-2">
                  <img src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_zoom_sm.svg" alt="" className="w-5 h-5" />
                  <img src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_teams_sm.svg" alt="" className="w-5 h-5" />
                  <img src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_meet_sm.svg" alt="" className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div className="flex-1 w-full max-w-[620px] rounded-[24px] overflow-hidden border border-[#e7e7ea] shadow-xl bg-black">
              <video className="w-full h-auto block" autoPlay loop muted playsInline>
                <source src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/video_recording_lg.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUSTED LOGOS */}
      <section className="py-10 border-y border-[#f0f0f2] bg-[#fafafa]">
        <div className="w-[calc(100%-48px)] max-w-[1366px] mx-auto flex items-center justify-center flex-wrap gap-8 md:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all">
          {trustedLogos.map((lg, idx) => (
            <img key={idx} src={lg.src} alt={lg.name} className="h-6 md:h-7 w-auto object-contain" />
          ))}
        </div>
      </section>

      {/* 3. 4 VIDEO FEATURE BLOCKS */}
      <section className="py-20 md:py-28 bg-[#fbfbfe]">
        <div className="w-[calc(100%-48px)] max-w-[1366px] mx-auto">
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <h2 className="text-[32px] md:text-[42px] font-bold text-[#1a1a22] leading-[1.2]">
              Never miss a detail with <br />
              <span className="gradient-purple">Silgate's AI Meeting Recorder</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videoFeatures.map((feat, idx) => (
              <div key={idx} className="bg-white rounded-[24px] overflow-hidden border border-[#e7e7ea] shadow-xs flex flex-col justify-between">
                <div className="h-[240px] bg-black overflow-hidden">
                  <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                    <source src={feat.video} type="video/mp4" />
                  </video>
                </div>
                <div className="p-6">
                  <h3 className="text-[20px] font-bold text-[#1a1a22] mb-2">{feat.title}</h3>
                  <p className="text-[14px] text-[#525069] leading-[22px]">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BENEFITS ANALYSIS */}
      <section className="py-20 bg-[#ffffff] border-y border-[#e7e7ea]">
        <div className="w-[calc(100%-48px)] max-w-[1366px] mx-auto">
          <div className="text-center max-w-[650px] mx-auto mb-16">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1a1a22]">
              Why teams choose Silgate for meeting recording
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((b, idx) => (
              <div key={idx} className="bg-[#fbfbfe] rounded-[24px] p-6 border border-[#e7e7ea] flex flex-col justify-between">
                <div>
                  <h3 className="text-[18px] font-bold text-[#1a1a22] mb-2">{b.title}</h3>
                  <p className="text-[14px] text-[#525069] leading-[22px] mb-6">{b.desc}</p>
                </div>
                <div className="h-[200px] rounded-[16px] bg-white p-4 flex items-center justify-center border border-[#e7e7ea]">
                  <img src={b.img} alt={b.title} className="max-h-full max-w-full object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 3-STEP SETUP */}
      <section className="py-20 bg-[#fafafa]">
        <div className="w-[calc(100%-48px)] max-w-[1366px] mx-auto">
          <div className="text-center max-w-[600px] mx-auto mb-16">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1a1a22]">
              Record meetings in 3 steps
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((st, idx) => (
              <div key={idx} className="bg-white rounded-[24px] p-6 border border-[#e7e7ea] flex flex-col justify-between">
                <div>
                  <span className="text-[28px] font-extrabold text-[#614efa] mb-3 block">{st.step}</span>
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

      {/* 6. PLATFORM COVERAGE */}
      <section className="py-20 md:py-28 bg-[#ffffff] border-y border-[#e7e7ea]">
        <div className="w-[calc(100%-48px)] max-w-[1366px] mx-auto">
          <div className="text-center max-w-[650px] mx-auto mb-16">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1a1a22]">
              Silgate Records on Any Meeting Platform
            </h2>
            <p className="text-[16px] text-[#525069] mt-2">
              No need to switch between recording setups for each conferencing provider.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platforms.map((p, idx) => (
              <div key={idx} className="bg-[#fbfbfe] rounded-[24px] p-6 border border-[#e7e7ea] flex flex-col justify-between">
                <div>
                  <h3 className="text-[18px] font-bold text-[#1a1a22] mb-2">{p.name}</h3>
                  <p className="text-[14px] text-[#525069] leading-[22px] mb-6">{p.desc}</p>
                </div>
                <div className="h-[200px] rounded-[16px] bg-white p-4 flex items-center justify-center border border-[#e7e7ea]">
                  <img src={p.img} alt={p.name} className="max-h-full max-w-full object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. INDUSTRY AWARDS */}
      <section className="py-16 bg-[#fafafa]">
        <div className="w-[calc(100%-48px)] max-w-[1100px] mx-auto text-center">
          <h2 className="text-[26px] md:text-[32px] font-bold text-[#1a1a22] mb-10">
            World-class recognition and awards
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {awards.map((aw, idx) => (
              <div key={idx} className="bg-white rounded-[16px] p-6 border border-[#e7e7ea] flex flex-col items-center justify-center gap-3">
                <img src={aw.icon} alt={aw.name} className="h-10 w-auto object-contain" />
                <span className="text-[13px] font-bold text-[#1a1a22]">{aw.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQS */}
      <section className="py-20 bg-[#ffffff] border-t border-[#e7e7ea]">
        <div className="w-[calc(100%-48px)] max-w-[900px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1a1a22]">
              Have questions? Let’s find answers.
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

      {/* 9. FINAL CTA */}
      <section className="py-20 bg-[#614efa] text-white">
        <div className="w-[calc(100%-48px)] max-w-[1000px] mx-auto text-center">
          <h2 className="text-[32px] md:text-[46px] font-bold mb-6">
            Get the best meeting recording app for online meetings and offline conversations
          </h2>
          <p className="text-[17px] text-white/80 max-w-[600px] mx-auto mb-10">
            Start capturing calls with bot-free reliability on Silgate today.
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
