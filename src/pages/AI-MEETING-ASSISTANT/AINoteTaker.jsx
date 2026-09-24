import React from "react";
import Button from "../../components/common/Button";
import IntegrationsSection from "../../components/sections/IntegrationsSection";
import ReviewsSection from "../../components/sections/ReviewsSection";

/**
 * AI Note Taker Independent Page.
 * Dedicated to bot-free automated meeting note taking, meeting minutes, and CRM syncing.
 */
export default function AINoteTaker() {
  const features = [
    {
      title: "100% Bot-Free Attendance",
      desc: "Never suffer the awkwardness of an external bot joining your customer calls. Krisp records and takes notes directly on your audio device.",
      icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_note_taker.svg"
    },
    {
      title: "Automatic Meeting Minutes",
      desc: "Instant executive summaries structured with key talking points, decisions made, and discussion highlights.",
      icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_transcription.svg"
    },
    {
      title: "Action Item Assignee Tracking",
      desc: "Krisp extracts next steps and automatically maps tasks to specific speakers and team members.",
      icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_meeting_summary.svg"
    },
    {
      title: "Push Notes Directly to CRM",
      desc: "Sync meeting notes and action items seamlessly to Salesforce, HubSpot, Notion, and Slack with 1 click.",
      icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/icon_sync.svg"
    }
  ];

  const comparison = [
    { feature: "No bot in call", krisp: true, others: false },
    { feature: "Built-in #1 Noise Cancellation", krisp: true, others: false },
    { feature: "On-device processing & privacy", krisp: true, others: false },
    { feature: "Works with in-person & walk-and-talks", krisp: true, others: false },
    { feature: "Automatic speaker diarization", krisp: true, others: true },
    { feature: "Custom prompt templates", krisp: true, others: true }
  ];

  return (
    <div className="py-20 md:py-28 bg-white">
      <div className="krisp-container">
        {/* Hero Section */}
        <div className="max-w-[800px] mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f4f4f5] text-[#5544dc] text-[13px] font-bold mb-6">
            📝 AI Note Taker
          </div>
          <h1 className="text-[38px] md:text-[54px] font-bold leading-[1.15] text-[#131032] mb-6">
            The bot-free <br />
            <span className="gradient-purple">AI Note Taker for Teams</span>
          </h1>
          <p className="text-[18px] md:text-[20px] text-[#525069] leading-[32px] mb-8">
            Focus entirely on the conversation. Krisp silently takes perfect meeting notes, highlights decisions, and assigns follow-ups without any awkward bots joining.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" href="https://app.krisp.ai/sign-up" external className="h-[48px] px-8 text-[15px]">
              Start Taking Notes Free
            </Button>
            <Button variant="outline" href="/contact-sales" className="h-[48px] px-8 text-[15px]">
              Book a Team Walkthrough
            </Button>
          </div>
        </div>

        {/* Video Preview */}
        <div className="max-w-[900px] mx-auto rounded-[20px] overflow-hidden shadow-2xl mb-24 border border-[#e7e7ea]">
          <video className="w-full h-auto" autoPlay loop muted playsInline>
            <source
              src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/video_notes.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Feature Cards Grid */}
        <div className="mb-24">
          <div className="text-center max-w-[650px] mx-auto mb-14">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#131032] mb-4">
              Everything you need from your meetings
            </h2>
            <p className="text-[17px] text-[#525069]">
              Turn hours of unstructured discussions into clear, actionable bullet points.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
            {features.map((feat, idx) => (
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
        </div>

        {/* Krisp vs Traditional Bot Note Takers */}
        <div className="my-24 max-w-[850px] mx-auto">
          <h2 className="text-[30px] md:text-[38px] font-bold text-center text-[#131032] mb-12">
            Why teams choose Krisp over bot notetakers
          </h2>
          <div className="bg-[#fafafb] border border-[#e7e7ea] rounded-[20px] overflow-hidden shadow-sm">
            <div className="grid grid-cols-3 bg-[#f0f0f3] p-4 text-[14px] font-bold text-[#131032]">
              <div>Feature</div>
              <div className="text-center text-[#614efa]">Krisp AI</div>
              <div className="text-center text-[#757585]">Other Note Takers</div>
            </div>
            {comparison.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-3 p-4 border-t border-[#e7e7ea] text-[14px] items-center"
              >
                <div className="font-semibold text-[#131032]">{row.feature}</div>
                <div className="text-center">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#e8faf6] text-[#008065] font-bold">
                    ✓
                  </span>
                </div>
                <div className="text-center">
                  {row.others ? (
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#f4f4f5] text-[#757585]">
                      ✓
                    </span>
                  ) : (
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#fee8e7] text-[#fe6257] font-bold">
                      ✕
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <ReviewsSection />
        <IntegrationsSection />
      </div>
    </div>
  );
}
