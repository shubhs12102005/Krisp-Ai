import React, { useState } from "react";
import Button from "../../components/common/Button";

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      desc: "For individuals needing essential meeting notes and noise cancellation.",
      features: [
        "60 minutes/day of noise cancellation",
        "Unlimited transcription",
        "2 meeting notes summaries / day",
        "Bot-free meeting recording",
        "Standard audio quality"
      ],
      ctaText: "Get Started",
      ctaHref: "https://app.krisp.ai/sign-up",
      highlight: false
    },
    {
      name: "Pro",
      price: annual ? "$8" : "$12",
      period: "per user / month",
      desc: "For professionals who want unlimited AI superpowers for every meeting.",
      features: [
        "Unlimited noise cancellation",
        "Unlimited transcription & AI summaries",
        "Unlimited video & audio recording",
        "Custom vocabulary (up to 750 terms)",
        "Sync notes directly to Slack & CRM",
        "Action items extraction & tracking"
      ],
      ctaText: "Try Free for 7 Days",
      ctaHref: "https://app.krisp.ai/sign-up",
      highlight: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact sales",
      desc: "For organizations requiring centralized security, SSO, and compliance.",
      features: [
        "Everything in Pro",
        "Dedicated Customer Success Manager",
        "SSO (SAML, Okta, Azure AD)",
        "Enterprise-grade security (SOC 2, HIPAA)",
        "Centralized admin console & billing",
        "Custom AI model fine-tuning"
      ],
      ctaText: "Contact Sales",
      ctaHref: "/contact-sales",
      highlight: false
    }
  ];

  return (
    <div className="py-20 md:py-28 bg-[#fafafb]">
      <div className="krisp-container">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <h1 className="text-[38px] md:text-[52px] font-bold text-[#131032] mb-4">
            Simple, predictable <span className="gradient-purple">pricing</span>
          </h1>
          <p className="text-[18px] text-[#525069] mb-8">
            Experience the #1 Voice AI platform for clear calls and effortless meeting summaries.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-3 bg-[#e7e7ea] p-1.5 rounded-full">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-[14px] font-semibold transition-colors cursor-pointer ${
                !annual ? "bg-white text-[#131032] shadow-xs" : "text-[#757585]"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-[14px] font-semibold transition-colors cursor-pointer flex items-center gap-2 ${
                annual ? "bg-white text-[#131032] shadow-xs" : "text-[#757585]"
              }`}
            >
              <span>Yearly</span>
              <span className="text-[11px] font-bold bg-[#e8faf6] text-[#008065] px-2 py-0.5 rounded-full">
                Save 33%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1100px] mx-auto">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-[20px] p-8 flex flex-col justify-between transition-all duration-300 ${
                plan.highlight
                  ? "border-2 border-[#614efa] shadow-xl relative"
                  : "border border-[#e7e7ea] shadow-sm hover:shadow-md"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#614efa] text-white text-[12px] font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="text-[22px] font-bold text-[#131032] mb-2">
                  {plan.name}
                </h3>
                <p className="text-[14px] text-[#757585] mb-6 min-h-[42px]">
                  {plan.desc}
                </p>

                <div className="mb-6 pb-6 border-b border-[#f4f4f5]">
                  <span className="text-[44px] font-extrabold text-[#131032]">
                    {plan.price}
                  </span>
                  <span className="text-[14px] text-[#757585] ml-2">
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-3.5 mb-8 text-[14px] text-[#525069]">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <svg
                        className="w-4 h-4 text-[#614efa] mt-1 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Button
                  variant={plan.highlight ? "primary" : "outline"}
                  href={plan.ctaHref}
                  external={plan.ctaHref.startsWith("http")}
                  className="w-full h-[48px] text-[15px] rounded-[10px]"
                >
                  {plan.ctaText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
