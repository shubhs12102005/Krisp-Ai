import React from "react";
import { testimonialData } from "../../utils/constants";

export default function TestimonialSection() {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-[#f4f4f5]">
      <div className="krisp-container">
        <div className="max-w-[850px] mx-auto text-center flex flex-col items-center">
          <div className="mb-8">
            <img
              src={testimonialData.quoteIcon}
              alt="Quote"
              className="w-12 h-12"
            />
          </div>

          <p className="text-[22px] md:text-[28px] lg:text-[32px] font-normal leading-[1.4] text-[#131032] mb-10">
            {testimonialData.quote}
          </p>

          <div className="flex items-center gap-4">
            <img
              src={testimonialData.author.avatar}
              alt={testimonialData.author.name}
              className="w-14 h-14 rounded-full object-cover shadow-sm"
            />
            <div className="text-left">
              <div className="text-[17px] font-bold text-[#131032]">
                {testimonialData.author.name}
              </div>
              <div className="text-[14px] text-[#757585]">
                {testimonialData.author.role}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
