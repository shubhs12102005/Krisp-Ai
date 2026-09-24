import React from "react";
import Button from "../../components/common/Button";
import AudioDemoPlayer from "../../components/sections/AudioDemoPlayer";
import { audioDemos } from "../../utils/constants";
import IntegrationsSection from "../../components/sections/IntegrationsSection";
import FAQSection from "../../components/sections/FAQSection";

/**
 * AI Meeting Assistant Overview Page.
 * Main product page for Krisp's bot-free AI Meeting Assistant.
 */
export default function AIMeetingAssistant() {
  const capabilities = [
    {
      title: "Bot-Free Meeting Notes",
      desc: "Krisp runs 100% locally on your machine. No strange third-party recording bots invading your private meetings.",
      icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_note_taker.svg"
    },
    {
      title: "Real-Time Transcription",
      desc: "Get fast, speaker-attributed transcripts with 96%+ accuracy filtered from all background noise.",
      icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_transcription.svg"
    },
    {
      title: "Action Items & Summaries",
      desc: "Automatically extract key discussion points, next steps, and assignee action items into your CRM.",
      icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_meeting_summary.svg"
    },
    {
      title: "Audio & Video Recording",
      desc: "Record meeting audio and high-definition video with 1-click cloud or local saving without lagging your CPU.",
      icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_meeting_recording.svg"
    }
  ];

  return (
    <div className="py-20 md:py-28 bg-white">
      <div className="krisp-container">
        {/* Page Hero */}
        <div className="max-w-[780px] mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f4f4f5] text-[#5544dc] text-[13px] font-bold mb-6">
            ✨ #1 AI Meeting Assistant
          </div>
          <h1 className="text-[38px] md:text-[54px] font-bold leading-[1.15] text-[#131032] mb-6">
            AI Meeting Assistant <br />
            <span className="gradient-purple">with #1 Noise Cancellation</span>
          </h1>
          <p className="text-[18px] md:text-[20px] text-[#525069] leading-[32px] mb-8">
            Effortlessly capture transcripts, concise summaries, and follow-up action items across all conferencing tools without any bots.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" href="https://app.krisp.ai/sign-up" external className="h-[48px] px-8 text-[15px]">
              Get Started for Free
            </Button>
            <Button variant="outline" href="/contact-sales" className="h-[48px] px-8 text-[15px]">
              Book a Demo
            </Button>
          </div>
        </div>

        {/* Video Preview */}
        <div className="max-w-[900px] mx-auto rounded-[20px] overflow-hidden shadow-2xl mb-20 border border-[#e7e7ea]">
          <video className="w-full h-auto" autoPlay loop muted playsInline>
            <source
              src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/video_transcription.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="bg-[#f7f7f8] rounded-[20px] p-6 hover:shadow-md transition-shadow"
            >
              <img src={cap.icon} alt={cap.title} className="w-8 h-8 mb-4" />
              <h3 className="text-[18px] font-bold text-[#131032] mb-2">
                {cap.title}
              </h3>
              <p className="text-[14px] leading-[22px] text-[#757585]">
                {cap.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Live Audio Demo Section */}
        <div className="my-20">
          <h2 className="text-[32px] font-bold text-center text-[#131032] mb-8">
            Experience Voice AI in Real Time
          </h2>
          <AudioDemoPlayer
            demoConfig={audioDemos.noise}
            defaultTrack="remote-work"
          />
        </div>

        <IntegrationsSection />
        <FAQSection />
      </div>
    </div>
  );
}
