import React from "react";
import LogoCloud from "../../components/sections/LogoCloud";
import TestimonialSection from "../../components/sections/TestimonialSection";
import ReviewsSection from "../../components/sections/ReviewsSection";
import Button from "../../components/common/Button";

/**
 * Customers Page.
 * Showcases global enterprise case studies, verified ROI metrics, and executive testimonials.
 */
export default function Customers() {
  const caseStudies = [
    {
      company: "Siemens",
      quote: "Krisp has completely removed background disturbances for our global engineering and project teams.",
      author: "Senior IT Director, Siemens",
      metric: "99.4% Noise Reduction"
    },
    {
      company: "Okta",
      quote: "Our customer success managers can focus on the client conversation without worrying about barking dogs or sirens.",
      author: "VP of Customer Success, Okta",
      metric: "3.5 hrs saved per week"
    },
    {
      company: "Alorica",
      quote: "Accent conversion and noise cancellation have significantly raised our customer satisfaction ratings across international teams.",
      author: "Chief Operations Officer, Alorica",
      metric: "+18% CSAT Improvement"
    },
    {
      company: "Medium",
      quote: "Krisp's bot-free note taking has streamlined our editorial standups and cross-team brainstorms without awkward recording bots.",
      author: "Head of Editorial Operations, Medium",
      metric: "100% Bot-Free Adoption"
    },
    {
      company: "Skechers",
      quote: "Even in bustling global offices and retail logistics centers, voice communication remains crystal clear with Krisp.",
      author: "Global Supply Chain Director, Skechers",
      metric: "Zero Background Disruptions"
    },
    {
      company: "ServiceTitan",
      quote: "Our customer calls are cleaner, notes are synchronized into our systems automatically, and our reps love the simplicity.",
      author: "VP of Technical Operations, ServiceTitan",
      metric: "8% AHT Reduction"
    }
  ];

  return (
    <div className="py-20 md:py-28 bg-white">
      <div className="krisp-container">
        {/* Hero Section */}
        <div className="text-center max-w-[760px] mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f4f4f5] text-[#5544dc] text-[13px] font-bold mb-6">
            🏆 Customer Success Stories
          </div>
          <h1 className="text-[38px] md:text-[54px] font-bold text-[#131032] mb-4">
            Trusted by World-Class <span className="gradient-purple">Teams</span>
          </h1>
          <p className="text-[18px] text-[#525069]">
            Discover how leading organizations worldwide use Krisp Voice AI to communicate with clarity and automate post-meeting workflows.
          </p>
        </div>

        <LogoCloud />

        <div className="my-20">
          <h2 className="text-[28px] md:text-[36px] font-bold text-center text-[#131032] mb-12">
            Featured Enterprise Case Studies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, idx) => (
              <div
                key={idx}
                className="bg-[#f7f7f8] rounded-[20px] p-8 flex flex-col justify-between hover:shadow-md transition-shadow border border-[#e7e7ea]"
              >
                <div>
                  <div className="text-[20px] font-bold text-[#614efa] mb-4">
                    {study.company}
                  </div>
                  <p className="text-[16px] leading-[26px] text-[#131032] mb-6 italic">
                    "{study.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-[#e7e7ea]">
                  <div className="text-[14px] font-bold text-[#131032]">
                    {study.author}
                  </div>
                  <div className="text-[13px] text-[#008065] font-semibold mt-1">
                    {study.metric}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <TestimonialSection />
        <ReviewsSection />

        <div className="text-center mt-16">
          <Button variant="primary" href="https://app.krisp.ai/sign-up" external className="h-[48px] px-8 text-[15px]">
            Join over 200,000+ teams on Krisp
          </Button>
        </div>
      </div>
    </div>
  );
}
