import React from "react";
import { Link } from "react-router-dom";
import { navigationData } from "../../utils/navigationData";
import { siteLogos } from "../../utils/constants";

/**
 * Call Center AI MegaMenu dropdown panel.
 * Contains direct links to all 7 independent Call Center AI pages.
 */
export default function CallCenterAIMenu({ onClose }) {
  const data = navigationData.callCenterAI;

  return (
    <div className="bg-white rounded-[20px] p-6 shadow-[0_16px_32px_2px_rgba(27,30,33,0.15)] flex items-stretch gap-6 border border-[#f4f4f5] max-w-fit">
      {/* Left Feature Card */}
      <div className="w-[320px] flex-shrink-0 bg-[#f7f7f8] rounded-[16px] p-6 flex flex-col justify-between">
        <div>
          <div className="mb-4">
            <img
              src={data.card.icon}
              alt={data.card.title}
              width="32"
              height="32"
              className="w-8 h-8"
            />
          </div>
          <div className="text-[24px] leading-[34px] font-bold text-[#1a1a22]">
            {data.card.title}
          </div>
          <div className="text-[14px] leading-[20px] font-medium text-[#757585] mt-1.5">
            {data.card.desc}
          </div>
        </div>
        <div className="mt-6">
          <Link
            to={data.card.href}
            onClick={onClose}
            className="inline-flex items-center justify-between w-full h-[44px] px-4 rounded-[10px] border border-[#23232e] text-[#1a1a22] hover:bg-[#23232e] hover:text-white transition-colors text-[14px] font-bold"
          >
            <span>{data.card.buttonText}</span>
            <img
              src={siteLogos.ctaPointer}
              alt="Explore"
              width="20"
              height="20"
            />
          </Link>
        </div>
      </div>

      {/* Right Column Groups */}
      <div className="flex gap-6">
        {data.groups.map((group, gIdx) => (
          <div key={gIdx} className="min-w-[270px] flex-1">
            <div className="pl-4 text-[#757585] text-[12px] leading-[16px] font-semibold uppercase tracking-wider mb-2">
              {group.groupTitle}
            </div>
            <div className="space-y-1">
              {group.items.map((sub, sIdx) => (
                <Link
                  key={sIdx}
                  to={sub.href}
                  onClick={onClose}
                  className="block p-3.5 rounded-[12px] hover:bg-[#f4f4f5] transition-colors group"
                >
                  <div className="flex items-start gap-4">
                    <img
                      src={sub.icon}
                      alt={sub.title}
                      width="24"
                      height="24"
                      className="w-6 h-6 mt-0.5 flex-shrink-0"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[15px] font-bold text-[#1a1a22] leading-[22px] group-hover:text-[#614efa] transition-colors">
                          {sub.title}
                        </span>
                        {sub.badge && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-[8px] border border-[#cef4ec] bg-[#e8faf6] text-[#008065] text-[10px] font-bold">
                            {sub.badge}
                          </span>
                        )}
                      </div>
                      {sub.desc && (
                        <div className="text-[12px] text-[#757585] font-normal leading-[16px] mt-0.5">
                          {sub.desc}
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
