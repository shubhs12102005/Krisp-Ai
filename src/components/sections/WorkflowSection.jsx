import React from "react";
import { workflowData } from "../../utils/constants";
import Button from "../common/Button";

export default function WorkflowSection() {
  const { title, items } = workflowData;

  return (
    <section id="workflow" className="bg-[#f2ece2] py-24 md:py-32">
      <div className="krisp-container">
        <h2 className="text-[32px] md:text-[42px] font-semibold leading-[1.25] text-center text-[#131032] mb-16 md:mb-20">
          {title}
        </h2>

        {/* 2x2 Responsive Flex Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Card 1: Multilingual (7 cols on lg) */}
          <div className="lg:col-span-7 bg-[#f7f2e7] rounded-[20px] p-8 md:p-10 relative overflow-hidden min-h-[448px] flex flex-col justify-between">
            <div className="relative z-10 max-w-[340px]">
              <div className="mb-6">
                <img
                  src={items[0].icon}
                  alt={items[0].title}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-[22px] font-bold leading-[34px] text-[#131032] mb-4">
                {items[0].title}
              </h3>
              <p className="text-[16px] leading-[28px] text-[#131032]/80">
                {items[0].desc}
              </p>
            </div>
            <div className="absolute right-0 bottom-0 w-full sm:w-[65%] h-[280px] sm:h-full overflow-hidden flex items-end justify-end pointer-events-none">
              <video
                className="h-full w-auto object-cover object-left-bottom"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={items[0].videoDesktop} type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Card 2: 1-Click Sharing (5 cols on lg) */}
          <div className="lg:col-span-5 bg-[#f7f2e7] rounded-[20px] p-8 md:p-10 relative overflow-hidden min-h-[448px] flex flex-col justify-between">
            <div className="relative z-10 max-w-[320px]">
              <div className="mb-6">
                <img
                  src={items[1].icon}
                  alt={items[1].title}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-[22px] font-bold leading-[34px] text-[#131032] mb-4">
                {items[1].title}
              </h3>
              <p className="text-[16px] leading-[28px] text-[#131032]/80">
                {items[1].desc}
              </p>
            </div>
            <div className="absolute right-0 bottom-0 w-full sm:w-[70%] h-[260px] sm:h-full overflow-hidden flex items-end justify-end pointer-events-none">
              <video
                className="h-full w-auto object-cover object-left-bottom"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={items[1].videoDesktop} type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Card 3: In-person (6 cols on lg) */}
          <div className="lg:col-span-6 bg-[#f7f2e7] rounded-[20px] p-8 md:p-10 relative overflow-hidden min-h-[448px] flex flex-col justify-between">
            <div className="relative z-10 max-w-[340px]">
              <div className="mb-6">
                <img
                  src={items[2].icon}
                  alt={items[2].title}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-[22px] font-bold leading-[34px] text-[#131032] mb-4">
                {items[2].title}
              </h3>
              <p className="text-[16px] leading-[28px] text-[#131032]/80">
                {items[2].desc}
              </p>
            </div>
            <div className="absolute right-0 bottom-0 w-full sm:w-[65%] h-[260px] sm:h-full overflow-hidden flex items-end justify-end pointer-events-none">
              <video
                className="h-full w-auto object-cover object-left-bottom"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={items[2].videoDesktop} type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Card 4: Ask Krisp (6 cols on lg) */}
          <div className="lg:col-span-6 bg-[#f7f2e7] rounded-[20px] p-8 md:p-10 relative overflow-hidden min-h-[448px] flex flex-col justify-between">
            <div className="relative z-10 max-w-[340px]">
              <div className="mb-6">
                <img
                  src={items[3].icon}
                  alt={items[3].title}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-[22px] font-bold leading-[34px] text-[#131032] mb-4">
                {items[3].title}
              </h3>
              <p className="text-[16px] leading-[28px] text-[#131032]/80">
                {items[3].desc}
              </p>
            </div>
            <div className="absolute right-0 bottom-0 w-full sm:w-[65%] h-[260px] sm:h-full overflow-hidden flex items-end justify-end pointer-events-none">
              <video
                className="h-full w-auto object-cover object-left-bottom"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={items[3].videoDesktop} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Button
            variant="dark"
            href="https://app.krisp.ai/sign-up"
            external
            className="h-[50px] px-8 rounded-[12px] text-[15px]"
          >
            Get Krisp for free
          </Button>
        </div>
      </div>
    </section>
  );
}
