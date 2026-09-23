import React, { useState } from "react";
import { featureModel } from "../../models/featureModel";

export default function FAQSection() {
  const [openIndices, setOpenIndices] = useState({ 0: true }); // First FAQ open by default like original

  const toggleFaq = (index) => {
    setOpenIndices((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="krisp-container">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-[34px] md:text-[48px] font-bold leading-[1.25] text-center text-[#131032] mb-12 md:mb-16">
            Have questions? <br className="hidden sm:inline" />
            We’ve got answers.
          </h2>

          <div className="divide-y divide-[#e7e7ea] border-t border-b border-[#e7e7ea]">
            {featureModel.faqs.map((faq, idx) => {
              const isOpen = Boolean(openIndices[idx]);
              return (
                <div key={idx} className="py-5 transition-colors">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between gap-4 text-left cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[18px] md:text-[20px] font-medium leading-[28px] md:leading-[32px] text-[#131032] group-hover:text-[#614efa] transition-colors">
                      {faq.question}
                    </span>

                    {/* Rotating Plus / Cross Icon */}
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 text-[#131032] ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </div>
                  </button>

                  {/* Smooth Collapse Content */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out text-[#525069] text-[15px] md:text-[17px] leading-[28px] md:leading-[30px] font-normal ${
                      isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="whitespace-pre-line text-left">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
