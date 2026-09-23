import React from "react";
import { featureModel } from "../../models/featureModel";
import Button from "../common/Button";

export default function WorkspacesSection() {
  const { eyebrow, title, subtitle, content, buttonText, buttonHref, video } =
    featureModel.workspaces;

  return (
    <section id="workspaces" className="bg-[#131032] py-24 md:py-32 text-white overflow-hidden">
      <div className="krisp-container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Content Left */}
          <div className="w-full lg:w-[480px] flex-shrink-0 text-left">
            <div className="inline-block px-3 py-1 rounded-[20px] bg-[#32304d] text-[#c8c7d0] text-[14px] font-normal mb-6">
              {eyebrow}
            </div>

            <h3 className="text-[38px] md:text-[48px] font-semibold leading-[1.2] mb-6">
              <span className="gradient-purple">{title}</span>
            </h3>

            <p className="text-[18px] md:text-[20px] font-medium text-white mb-4 leading-[32px]">
              {subtitle}
            </p>

            <p className="text-[16px] leading-[28px] text-white/80 font-normal mb-8">
              {content}
            </p>

            <div>
              <Button variant="primary" href={buttonHref} className="h-[48px] px-7 rounded-[10px]">
                {buttonText}
              </Button>
            </div>
          </div>

          {/* Video Right */}
          <div className="w-full flex-1 flex justify-center">
            <div className="rounded-[20px] overflow-hidden shadow-2xl bg-black/30 max-w-[700px] w-full">
              <video
                className="w-full h-auto rounded-[20px]"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={video} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
