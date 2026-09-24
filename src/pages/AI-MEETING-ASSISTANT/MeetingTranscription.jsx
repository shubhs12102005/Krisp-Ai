import React from "react";
import Button from "../../components/common/Button";
import IntegrationsSection from "../../components/sections/IntegrationsSection";

/**
 * Meeting Transcription Independent Page.
 * Real-time, noise-filtered meeting transcription with speaker attribution and 16 languages.
 */
export default function MeetingTranscription() {
  const transcriptionFeatures = [
    {
      title: "Noise-Filtered Accuracy",
      desc: "Background noise, dogs, and coffee shop clatter are removed before audio reaches the transcription engine, drastically reducing transcription errors.",
      badge: "96%+ Accuracy"
    },
    {
      title: "Speaker Diarization",
      desc: "Instantly attributes every sentence to the correct speaker with timestamps and participant profiles.",
      badge: "Real-Time"
    },
    {
      title: "Custom Vocabulary (750 Words)",
      desc: "Add your specialized product names, team jargon, acronyms, and client names so transcription never misspells critical terms.",
      badge: "Customizable"
    },
    {
      title: "Multilingual Support",
      desc: "On-device private transcription in English plus cloud transcription in 15 global languages including Spanish, French, German, and Hindi.",
      badge: "16 Languages"
    }
  ];

  const languages = [
    "English", "Spanish", "French", "German", "Italian", "Portuguese",
    "Dutch", "Polish", "Russian", "Hindi", "Danish", "Swedish",
    "Norwegian", "Czech", "Ukrainian", "Korean"
  ];

  return (
    <div className="py-20 md:py-28 bg-white">
      <div className="krisp-container">
        {/* Hero Section */}
        <div className="max-w-[800px] mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8faf6] text-[#008065] text-[13px] font-bold mb-6">
            🎙️ High-Accuracy Transcription
          </div>
          <h1 className="text-[38px] md:text-[54px] font-bold leading-[1.15] text-[#131032] mb-6">
            Real-Time <br />
            <span className="gradient-purple">Meeting Transcription</span>
          </h1>
          <p className="text-[18px] md:text-[20px] text-[#525069] leading-[32px] mb-8">
            Experience the world's most accurate meeting transcripts. By canceling background distractions at the audio layer, Krisp delivers unmatched accuracy across any call.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" href="https://app.krisp.ai/sign-up" external className="h-[48px] px-8 text-[15px]">
              Transcribe Free
            </Button>
            <Button variant="outline" href="/contact-sales" className="h-[48px] px-8 text-[15px]">
              Explore Enterprise Plans
            </Button>
          </div>
        </div>

        {/* Video Preview */}
        <div className="max-w-[900px] mx-auto rounded-[20px] overflow-hidden shadow-2xl mb-24 border border-[#e7e7ea]">
          <video className="w-full h-auto" autoPlay loop muted playsInline>
            <source
              src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/video_transcription.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto mb-24">
          {transcriptionFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="bg-[#f7f7f8] rounded-[20px] p-8 border border-[#e7e7ea] hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-[#e8faf6] border border-[#cef4ec] text-[#008065] text-[12px] font-bold">
                  {feat.badge}
                </span>
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

        {/* Supported Languages Cloud */}
        <div className="bg-[#fafafb] rounded-[24px] p-8 md:p-14 border border-[#e7e7ea] max-w-[1000px] mx-auto mb-24 text-center">
          <h2 className="text-[26px] md:text-[34px] font-bold text-[#131032] mb-4">
            Global Team Ready
          </h2>
          <p className="text-[16px] text-[#525069] mb-8 max-w-[600px] mx-auto">
            Transcribe calls across global departments with native support for 16 major languages and automatic language detection.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {languages.map((lang, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-white rounded-full border border-[#e7e7ea] text-[14px] font-semibold text-[#1a1a22] shadow-xs"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>

        <IntegrationsSection />
      </div>
    </div>
  );
}
