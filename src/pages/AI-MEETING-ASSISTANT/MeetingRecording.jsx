import React from "react";
import Button from "../../components/common/Button";
import MobileAppBanner from "../../components/sections/MobileAppBanner";

/**
 * Meeting Recording Independent Page.
 * Bot-free high-definition video and crystal-clear audio recording for meetings.
 */
export default function MeetingRecording() {
  const recordingPresets = [
    {
      title: "Transcript-Only Mode",
      desc: "Capture text without saving audio or video files. Perfect for privacy-strict compliance environments.",
      icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_transcription.svg"
    },
    {
      title: "High-Fidelity Audio Mode",
      desc: "Record noise-free, crystal-clear lossless voice audio ready for immediate playback, review, or export.",
      icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_meeting_recording.svg"
    },
    {
      title: "HD Video & Screen Capture",
      desc: "Record presentation slides, shared windows, and speaker video in sharp high resolution without CPU stutter.",
      icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_note_taker.svg"
    }
  ];

  return (
    <div className="py-20 md:py-28 bg-white">
      <div className="krisp-container">
        {/* Hero Section */}
        <div className="max-w-[800px] mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f4f4f5] text-[#5544dc] text-[13px] font-bold mb-6">
            📹 Bot-Free Meeting Recording
          </div>
          <h1 className="text-[38px] md:text-[54px] font-bold leading-[1.15] text-[#131032] mb-6">
            Record Every Meeting <br />
            <span className="gradient-purple">Without Awkward Bots</span>
          </h1>
          <p className="text-[18px] md:text-[20px] text-[#525069] leading-[32px] mb-8">
            Crisp audio and HD video recorded locally or uploaded to your workspace. Never miss a critical client presentation or board conversation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" href="https://app.krisp.ai/sign-up" external className="h-[48px] px-8 text-[15px]">
              Start Recording Free
            </Button>
            <Button variant="outline" href="/contact-sales" className="h-[48px] px-8 text-[15px]">
              Request Workspace Demo
            </Button>
          </div>
        </div>

        {/* Video Preview */}
        <div className="max-w-[900px] mx-auto rounded-[20px] overflow-hidden shadow-2xl mb-24 border border-[#e7e7ea]">
          <video className="w-full h-auto" autoPlay loop muted playsInline>
            <source
              src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/video_recording_presets.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Presets Grid */}
        <div className="mb-24">
          <div className="text-center max-w-[650px] mx-auto mb-14">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#131032] mb-4">
              Flexible Recording Presets
            </h2>
            <p className="text-[17px] text-[#525069]">
              Choose how much or how little media you store based on your compliance policy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1100px] mx-auto">
            {recordingPresets.map((preset, idx) => (
              <div
                key={idx}
                className="bg-[#f7f7f8] rounded-[20px] p-8 border border-[#e7e7ea] hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <img src={preset.icon} alt={preset.title} className="w-8 h-8 mb-5" />
                  <h3 className="text-[20px] font-bold text-[#131032] mb-3">
                    {preset.title}
                  </h3>
                  <p className="text-[15px] leading-[26px] text-[#525069]">
                    {preset.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <MobileAppBanner />
      </div>
    </div>
  );
}
