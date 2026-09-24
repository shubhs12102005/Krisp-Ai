import React from "react";
import Button from "../../components/common/Button";
import AudioDemoPlayer from "../../components/sections/AudioDemoPlayer";
import { audioDemos } from "../../utils/constants";
import IntegrationsSection from "../../components/sections/IntegrationsSection";
import ReviewsSection from "../../components/sections/ReviewsSection";

/**
 * AI Meeting Assistant - Noise Cancellation Independent Page.
 * Specialized for remote professionals, personal meetings, home office distractions, and bidirectional suppression.
 */
export default function NoiseCancellation() {
  const meetingNoiseFeatures = [
    {
      title: "Bidirectional Noise Cancellation",
      desc: "Krisp filters out background sounds from both your microphone AND the incoming audio coming from other meeting participants.",
      icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_noise_cancellation.svg"
    },
    {
      title: "Zero Headset Dependencies",
      desc: "Works with any built-in laptop mic, AirPods, wired earbuds, or professional studio microphones.",
      icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_nav_ma.svg"
    },
    {
      title: "Room Echo & Reverb Removal",
      desc: "Eliminates room reverberation in empty conference rooms or minimalist home offices for a professional broadcast voice.",
      icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_echo_nav.svg"
    },
    {
      title: "Ultra-Low Latency & CPU",
      desc: "Our neural network operates locally on your machine with near-zero latency and minimal battery consumption.",
      icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_agent_assist.svg"
    }
  ];

  return (
    <div className="py-20 md:py-28 bg-white">
      <div className="krisp-container">
        {/* Hero Section */}
        <div className="max-w-[800px] mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f4f4f5] text-[#5544dc] text-[13px] font-bold mb-6">
            🔇 #1 Noise Cancellation for Meetings
          </div>
          <h1 className="text-[38px] md:text-[54px] font-bold leading-[1.15] text-[#131032] mb-6">
            Speak with Confidence <br />
            <span className="gradient-purple">in Any Meeting Environment</span>
          </h1>
          <p className="text-[18px] md:text-[20px] text-[#525069] leading-[32px] mb-8">
            Krisp removes background chatter, barking dogs, loud typing, and room echo from your meetings on Zoom, Google Meet, Teams, and Slack.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" href="https://app.krisp.ai/sign-up" external className="h-[48px] px-8 text-[15px]">
              Try Free Noise Cancellation
            </Button>
            <Button variant="outline" href="/pricing" className="h-[48px] px-8 text-[15px]">
              View Pricing
            </Button>
          </div>
        </div>

        {/* Live Interactive Dual Audio Demo */}
        <div className="my-16">
          <h2 className="text-[28px] md:text-[36px] font-bold text-center text-[#131032] mb-8">
            Listen to the Difference
          </h2>
          <AudioDemoPlayer
            demoConfig={audioDemos.noise}
            defaultTrack="remote-work"
          />
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto my-24">
          {meetingNoiseFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="bg-[#f7f7f8] rounded-[20px] p-8 border border-[#e7e7ea] hover:shadow-md transition-shadow"
            >
              <img src={feat.icon} alt={feat.title} className="w-10 h-10 mb-4" />
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
