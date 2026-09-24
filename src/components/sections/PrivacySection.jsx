import React from "react";
import { privacyData } from "../../utils/constants";

export default function PrivacySection() {
  const { title, titleHighlight, desc, trustLink, trustText, items } =
    privacyData;

  return (
    <section id="privacy" className="py-24 md:py-32 bg-white border-b border-[#f4f4f5]">
      <div className="krisp-container text-center">
        <div className="max-w-[780px] mx-auto mb-16">
          <h2 className="text-[32px] md:text-[44px] font-semibold leading-[1.25] text-[#131032] mb-4">
            {title} <span className="gradient-purple">{titleHighlight}</span>
          </h2>
          <p className="text-[16px] md:text-[18px] leading-[30px] text-[#525069] mb-6">
            {desc}
          </p>
          <a
            href={trustLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#614efa] hover:underline font-semibold text-[15px]"
          >
            {trustText} →
          </a>
        </div>

        {/* 4 Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#f7f7f8] rounded-[16px] p-8 text-left hover:shadow-sm transition-shadow flex flex-col justify-start"
            >
              <div className="mb-6">
                <img src={item.icon} alt={item.title} className="w-10 h-10" />
              </div>
              <h3 className="text-[18px] font-bold text-[#131032] mb-2">
                {item.title}
              </h3>
              <p className="text-[14px] leading-[22px] text-[#757585]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
