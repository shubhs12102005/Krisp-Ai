import React from "react";
import { footerData } from "../../utils/constants";

export default function AwardsSection() {
  const { awards } = footerData;

  return (
    <div className="pb-10 mb-10 border-b border-[#c6c6cd]">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
        {/* Rating Column */}
        <div className="flex flex-col gap-2">
          <div className="text-[18px] md:text-[20px] font-semibold text-[#1a1a22]">
            {awards.title}
          </div>
          <div className="flex items-center gap-2">
            <img
              src={awards.g2Logo}
              alt="G2"
              className="w-6 h-6 object-contain"
            />
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src={awards.starIcon}
                  alt="Star"
                  className="w-4 h-4"
                />
              ))}
            </div>
            <span className="text-[12px] font-semibold text-[#1a1a22] ml-1">
              {awards.rating}
            </span>
          </div>
        </div>

        {/* Badges List */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8">
          {awards.badges.map((badge, idx) => (
            <img
              key={idx}
              src={badge.src}
              alt={badge.alt}
              className={`object-contain ${
                badge.isCcw ? "h-[54px] md:h-[63px]" : "h-[55px] md:h-[64px]"
              }`}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
