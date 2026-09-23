import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navigationModel } from "../../models/navigationModel";

export default function HeroSection() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <section id="hero" className="pt-8 md:pt-16 pb-16 overflow-hidden">
      <div className="krisp-container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Hero Left Content */}
          <div className="w-full lg:w-[540px] xl:w-[600px] flex flex-col items-start flex-shrink-0 text-left">
            {/* Hero Pill */}
            <div className="mb-6">
              <Link to="/developers" className="hero_pill">
                <span className="text-[#4a3bbe] text-[12px] font-bold">New</span>
                <strong className="text-[#24232d] font-semibold text-[14px]">
                  Introducing VIVA 2.5
                </strong>
              </Link>
            </div>

            {/* Heading */}
            <h1 className="text-[40px] md:text-[52px] lg:text-[58px] font-semibold leading-[1.18] tracking-[-0.02em] text-[#131032] mb-6">
              <span className="gradient-purple">Voice AI </span> for meetings
            </h1>

            {/* Subtitle */}
            <p className="text-[17px] md:text-[18px] leading-[32px] md:leading-[34px] font-normal text-[#131032] mb-8">
              For teams, call centers, and developers <br className="hidden md:inline" />
              — <strong>#1 noise cancellation</strong>, <strong>accent AI</strong>,{" "}
              <strong>translation</strong>, and <strong>AI note taker</strong>.
            </p>

            {/* Hero CTA Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="inline-flex items-center gap-2 bg-[#614efa] hover:bg-[#4a3bbe] text-white text-[16px] font-bold h-[48px] px-6 rounded-[10px] transition-colors cursor-pointer shadow-md"
              >
                <span>Get Krisp</span>
                <img
                  src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_arrow_down.svg"
                  alt="Arrow"
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {dropdownOpen && (
                <div className="absolute left-0 top-[56px] w-[290px] bg-white rounded-[16px] p-2 header-dropdown-menu z-40 shadow-xl border border-[#f4f4f5]">
                  {navigationModel.actions.getKrispDropdown.map((drop) => (
                    <a
                      key={drop.id}
                      href={drop.href}
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-start gap-3 p-3 rounded-[12px] hover:bg-[#f4f4f5] transition-colors text-left"
                    >
                      <img
                        src={drop.icon}
                        alt={drop.title}
                        className="w-6 h-6 mt-0.5 flex-shrink-0"
                      />
                      <div>
                        <div className="text-[14px] font-bold text-[#1a1a22] leading-[18px]">
                          {drop.title}
                        </div>
                        <div className="text-[12px] text-[#757585] mt-0.5 leading-[16px]">
                          {drop.desc}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Hero Right Media */}
          <div className="w-full lg:w-[580px] xl:w-[650px] flex items-center justify-center flex-shrink-0">
            <video
              className="w-full h-auto hidden md:block rounded-[24px] shadow-lg"
              autoPlay
              loop
              muted
              playsInline
            >
              <source
                src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/video_hero.webm"
                type="video/webm"
              />
              <source
                src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/video_hero.mp4"
                type="video/mp4"
              />
            </video>
            {/* Mobile Hero Fallback Image */}
            <img
              src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/img_hero_mobile.png"
              alt="Krisp AI Meeting Assistant"
              className="w-full h-auto block md:hidden rounded-xl shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
