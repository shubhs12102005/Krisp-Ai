import React from "react";
import Button from "../../components/common/Button";
import PrivacySection from "../../components/sections/PrivacySection";

/**
 * Call Center AI - Speech Analytics Independent Page.
 * Automated call scoring, 100% QA coverage, compliance checks, and agent performance analytics.
 */
export default function SpeechAnalytics() {
  const analyticsFeatures = [
    {
      title: "100% Automated QA Call Scoring",
      desc: "Replace manual sampling of 1-2% of calls with automated grading across 100% of recorded customer interactions.",
      metric: "100% Call Coverage"
    },
    {
      title: "Regulatory Compliance Monitoring",
      desc: "Instantly flags missing disclosures, unauthorized promises, or PCI-DSS/HIPAA violations to protect your organization.",
      metric: "Zero Risk"
    },
    {
      title: "Customer Sentiment & Churn Drivers",
      desc: "Aggregates emotional signals, voice acoustic stress, and keyword trends to identify product defects or churn triggers early.",
      metric: "Real-Time Trends"
    },
    {
      title: "Targeted Coaching Insights",
      desc: "Generates individualized agent scorecards identifying top performers' talk patterns and coaching opportunities for struggling reps.",
      metric: "+22% Quality Score"
    }
  ];

  return (
    <div className="py-20 md:py-28 bg-[#fafafb]">
      <div className="krisp-container">
        {/* Hero Section */}
        <div className="max-w-[800px] mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#e8faf6] text-[#008065] text-[13px] font-bold mb-6">
            📊 Omnichannel Speech Analytics
          </div>
          <h1 className="text-[38px] md:text-[54px] font-bold leading-[1.15] text-[#131032] mb-6">
            100% QA Call Scoring <br />
            <span className="gradient-purple">&amp; Automated Speech Analytics</span>
          </h1>
          <p className="text-[18px] md:text-[20px] text-[#525069] leading-[32px] mb-8">
            Analyze every spoken word across millions of contact center calls. Uncover actionable insights, ensure strict script compliance, and coach agents effectively.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" href="/contact-sales" className="h-[48px] px-8 text-[15px]">
              Explore Speech Analytics
            </Button>
            <Button variant="outline" href="/contact-sales" className="h-[48px] px-8 text-[15px]">
              Book QA Walkthrough
            </Button>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto mb-24">
          {analyticsFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[20px] p-8 border border-[#e7e7ea] shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-[13px] font-bold text-[#614efa] bg-[#f4f2ff] border border-[#dcd7fe] px-3 py-1 rounded-full inline-block mb-4">
                {feat.metric}
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
