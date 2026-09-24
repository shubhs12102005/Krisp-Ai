import React from "react";
import Button from "../../components/common/Button";
import IntegrationsSection from "../../components/sections/IntegrationsSection";
import ReviewsSection from "../../components/sections/ReviewsSection";

/**
 * Meeting Summary Independent Page.
 * Instant AI meeting summaries, executive recaps, and action item task extraction.
 */
export default function MeetingSummary() {
  const summaryFeatures = [
    {
      title: "Executive Summaries in Seconds",
      desc: "Get concise 2-minute overviews of 60-minute calls covering key decisions, context, and outcomes.",
      icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_meeting_summary.svg"
    },
    {
      title: "Centralized Action Item Tracking",
      desc: "Automatically extracts every commitment made during the call and maps them to assignees with due dates.",
      icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_note_taker.svg"
    },
    {
      title: "Pre-Built & Custom Templates",
      desc: "Choose from industry-standard summary templates for Sales Demos, Client Onboarding, 1-on-1s, and Sprint Standups.",
      icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_transcription.svg"
    },
    {
      title: "1-Click Sync to CRM & Slack",
      desc: "Push summaries, customer pain points, and next steps directly into Salesforce, HubSpot, and Slack channels.",
      icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/icon_sync.svg"
    }
  ];

  return (
    <div className="py-20 md:py-28 bg-white">
      <div className="krisp-container">
        {/* Hero Section */}
        <div className="max-w-[800px] mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f4f4f5] text-[#5544dc] text-[13px] font-bold mb-6">
            📋 AI Meeting Summary
          </div>
          <h1 className="text-[38px] md:text-[54px] font-bold leading-[1.15] text-[#131032] mb-6">
            Automate Post-Meeting <br />
            <span className="gradient-purple">Summaries &amp; Next Steps</span>
          </h1>
          <p className="text-[18px] md:text-[20px] text-[#525069] leading-[32px] mb-8">
            Skip writing lengthy meeting recaps. Krisp turns raw transcripts into polished executive summaries and syncs action items to your favorite workspace tools.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" href="https://app.krisp.ai/sign-up" external className="h-[48px] px-8 text-[15px]">
              Generate Summaries Free
            </Button>
            <Button variant="outline" href="/contact-sales" className="h-[48px] px-8 text-[15px]">
              Book a Demo
            </Button>
          </div>
        </div>

        {/* Video Preview */}
        <div className="max-w-[900px] mx-auto rounded-[20px] overflow-hidden shadow-2xl mb-24 border border-[#e7e7ea]">
          <video className="w-full h-auto" autoPlay loop muted playsInline>
            <source
              src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/video_sync_crm.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto mb-24">
          {summaryFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="bg-[#f7f7f8] rounded-[20px] p-8 border border-[#e7e7ea] hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-[12px] bg-white flex items-center justify-center mb-5 shadow-xs">
                <img src={feat.icon} alt={feat.title} className="w-6 h-6" />
              </div>
              <h3 className="text-[20px] font-bold text-[#131032] mb-3">
                {feat.title}
              </h3>
              <p className="text-[15px] leading-[26px] text-[#525069]">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>

        <ReviewsSection />
        <IntegrationsSection />
      </div>
    </div>
  );
}
