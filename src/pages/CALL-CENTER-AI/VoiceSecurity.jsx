import React from "react";
import Button from "../../components/common/Button";
import PrivacySection from "../../components/sections/PrivacySection";

/**
 * Call Center AI - Voice Security Independent Page.
 * Real-time voice biometric authentication, synthetic voice spoof detection, and anti-fraud shield.
 */
export default function VoiceSecurity() {
  const securityFeatures = [
    {
      title: "Real-Time Deepfake Voice Detection",
      desc: "Detects synthetic AI voices, cloning software, and text-to-speech injections within the first 3 seconds of a call.",
      badge: "Deepfake Shield"
    },
    {
      title: "Passive Voice Biometrics",
      desc: "Authenticates legitimate repeat customers seamlessly using their unique acoustic vocal tract characteristics.",
      badge: "Seamless Auth"
    },
    {
      title: "Fraud Ring Cross-Call Correlation",
      desc: "Flags repeated social engineering attempts by known fraud voices attempting account takeovers across different phone numbers.",
      badge: "Cross-Call Defense"
    },
    {
      title: "Zero PII Voice Hash Storage",
      desc: "Voiceprints are encrypted using irreversible mathematical embeddings, satisfying strict GDPR, CCPA, and banking regulations.",
      badge: "Zero Raw Audio Kept"
    }
  ];

  return (
    <div className="py-20 md:py-28 bg-[#fafafb]">
      <div className="krisp-container">
        {/* Hero Section */}
        <div className="max-w-[800px] mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f4f4f5] text-[#5544dc] text-[13px] font-bold mb-6">
            🛡️ Enterprise Voice Defense
          </div>
          <h1 className="text-[38px] md:text-[54px] font-bold leading-[1.15] text-[#131032] mb-6">
            Real-Time Voice Security <br />
            <span className="gradient-purple">&amp; Synthetic Audio Fraud Detection</span>
          </h1>
          <p className="text-[18px] md:text-[20px] text-[#525069] leading-[32px] mb-8">
            Protect your contact center from AI deepfake impersonation, social engineering, and account takeovers with real-time acoustic analysis.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" href="/contact-sales" className="h-[48px] px-8 text-[15px]">
              Deploy Voice Security
            </Button>
            <Button variant="outline" href="/contact-sales" className="h-[48px] px-8 text-[15px]">
              Download Threat Report
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto mb-24">
          {securityFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[20px] p-8 border border-[#e7e7ea] shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">
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

        <PrivacySection />
      </div>
    </div>
  );
}
