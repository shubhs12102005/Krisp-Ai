import React from "react";
import { featureModel } from "../../models/featureModel";

export default function IntegrationsSection() {
  const { title, subtitle, rows } = featureModel.integrations;

  return (
    <section id="integrations" className="py-24 md:py-32 bg-[#fafafb] overflow-hidden">
      <div className="krisp-container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Text */}
          <div className="w-full lg:w-[480px] text-left">
            <h2 className="text-[34px] md:text-[44px] font-semibold leading-[1.25] text-[#131032] mb-6">
              <span className="gradient-purple">{title}</span>
            </h2>
            <p className="text-[17px] md:text-[18px] leading-[30px] text-[#525069]">
              {subtitle}
            </p>
          </div>

          {/* Right Icon Cloud Grid */}
          <div className="w-full flex-1 flex flex-col items-center justify-center gap-3">
            {rows.map((row, rIdx) => (
              <div key={rIdx} className="flex items-center justify-center gap-3">
                {row.map((app, aIdx) => (
                  <div
                    key={aIdx}
                    className="w-[62px] h-[62px] bg-white rounded-[16px] shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-[#f0f0f3] flex items-center justify-center hover:scale-110 transition-transform duration-200"
                    title={app.name}
                  >
                    <img
                      src={app.icon}
                      alt={app.name}
                      className="w-9 h-9 object-contain"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
