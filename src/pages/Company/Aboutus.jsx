import React, { useState } from "react";
import { Link } from "react-router-dom";

/**
 * About Us Page - High-Fidelity Replica of original Krisp.ai/about-us/
 * Includes:
 * - Horizon Hero with wash gradient & mission statement
 * - Krisp Video with scale stats ("Trillions of minutes", "Globally distributed")
 * - 5 Core Values interactive selector with illustrations
 * - Featured Openings section with department metadata
 * - Trusted customer logos grid (BPOs & tech leaders)
 * - Recognition & Awards (G2 4.7 rating, Forbes AI 50, Webby, CCW, Gartner, Palomarr)
 * - Grow with Us partner preview with collage photography
 * - Interactive Bottom CTA Toggle Banner
 */
export default function Aboutus() {
  const [activeValueTab, setActiveValueTab] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const valuesData = [
    {
      num: "01",
      title: "Focus on growth",
      desc: "Krisp is all about growth — individually, as a team, and as a company.",
      image: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_values_6.png"
    },
    {
      num: "02",
      title: "Be transparent and fair",
      desc: "Full information and decision transparency aligns everyone around our mission.",
      image: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_values_2.png"
    },
    {
      num: "03",
      title: "Ship fast and iterate",
      desc: "We don't believe in perfect plans. We believe in fast iterations.",
      image: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_values_3.png"
    },
    {
      num: "04",
      title: "Keep it simple",
      desc: "Simple systems let us move fast and stay agile.",
      image: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_values_4.png"
    },
    {
      num: "05",
      title: "Collaborate and lead",
      desc: "Decisions come from collaboration and heated debates. The best arguments win.",
      image: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_values_5.png"
    }
  ];

  const featuredOpenings = [
    {
      title: "Growth Marketing Head",
      dept: "Marketing",
      location: "Yerevan/Europe/UK, Hybrid/Remote",
      href: "/careers#open-roles"
    },
    {
      title: "Partner Marketing Manager",
      dept: "Marketing",
      location: "US, Remote",
      href: "/careers#open-roles"
    },
    {
      title: "Security Program Manager",
      dept: "Security",
      location: "Armenia, Hybrid",
      href: "/careers#open-roles"
    },
    {
      title: "Senior Brand & Communications Manager",
      dept: "Marketing",
      location: "US, Remote",
      href: "/careers#open-roles"
    },
    {
      title: "Senior Customer Engineer, Enterprise",
      dept: "Customer Engineering",
      location: "Armenia, Hybrid",
      href: "/careers#open-roles"
    },
    {
      title: "Senior Director, Business Development | Financial Services & Insurance",
      dept: "Business Development",
      location: "US, Remote",
      href: "/careers#open-roles"
    }
  ];

  const customerLogos = [
    { name: "TTEC", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_ttec.svg" },
    { name: "Concentrix", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_concentrix.svg" },
    { name: "Cognizant", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_cognizant.svg" },
    { name: "Startek", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_startek.svg" },
    { name: "Discord", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_discord.svg" },
    { name: "Twilio", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_twilio.svg" },
    { name: "RingCentral", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_ringcentral.svg" },
    { name: "Vonage", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_vonage.svg" },
    { name: "Symphony", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_symphony.svg" },
    { name: "Aircall", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_aircall.svg" },
    { name: "LiveKit", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_livekit.svg" },
    { name: "Vapi", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_vapi.svg" }
  ];

  const awardsCards = [
    {
      mark: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/recognition_mark_forbes.png",
      title: "AI 50",
      subtitle: "Forbes · most promising AI companies"
    },
    {
      mark: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/recognition_mark_webby.png",
      title: "People's voice winner",
      subtitle: "Webby · productivity & collaboration"
    },
    {
      mark: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/recognition_mark_ccw.png",
      title: "Disruptive technology of the year",
      subtitle: "CCW · 2026"
    },
    {
      mark: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/recognition_mark_gartner.png",
      title: "Cool vendor",
      subtitle: "Gartner · digital workplace"
    },
    {
      mark: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/recognition_mark_palomarr.png",
      title: "Leader in voice AI",
      subtitle: "Palomarr · noise cancellation"
    }
  ];

  return (
    <div className="bg-white overflow-hidden text-[#1a1a22]">
      {/* 1. Horizon Hero Section */}
      <section className="relative overflow-hidden bg-white text-center pt-28 pb-24 md:pt-36 md:pb-28">
        {/* Soft colorful wash gradient */}
        <div
          className="absolute inset-x-0 bottom-0 h-[270px] pointer-events-none z-0"
          style={{
            background: "linear-gradient(180deg, #fefefe 0%, #ffe9e7 45%, #c3bcfd 100%)",
            opacity: 0.85
          }}
          aria-hidden="true"
        />
        {/* Sub-rule horizon border */}
        <div
          className="absolute inset-x-0 bottom-0 h-[2px] pointer-events-none z-10"
          style={{
            background: "linear-gradient(90deg, rgba(158, 224, 204, 0) 0%, rgba(112, 176, 222, 0.85) 50%, rgba(176, 168, 237, 0) 100%)"
          }}
          aria-hidden="true"
        />

        <div className="relative z-20 max-w-[1280px] mx-auto px-6 flex flex-col items-center">
          <div className="max-w-[900px] flex flex-col items-center gap-5">
            <h1 className="text-[36px] sm:text-[46px] lg:text-[56px] leading-[44px] sm:leading-[54px] lg:leading-[64px] font-bold tracking-tight text-[#1a1a22]">
              Our mission is to maximize voice productivity at work
            </h1>
            <p className="max-w-[840px] text-[16px] sm:text-[18px] leading-[26px] sm:leading-[28px] text-[#434351] font-normal">
              That’s why we solve the hardest problems in real-time voice - noise, accents, languages, and the timing in between - so how you sound never limits what you can do.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Krisp Video & Scale Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col items-start gap-3 max-w-[720px] mb-12">
            <span className="text-[13px] md:text-[14px] font-semibold tracking-wider uppercase text-[#4a3bbe]">
              What is Krisp
            </span>
            <h2 className="text-[28px] sm:text-[32px] md:text-[36px] leading-[36px] sm:leading-[44px] font-bold text-[#1a1a22]">
              One foundation for real-time voice
            </h2>
            <p className="text-[16px] leading-[26px] text-[#434351]">
              Krisp’s real-time voice AI improves how people communicate — noise cancellation, accent conversion, voice translation, transcription, summarization and more.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-stretch gap-8">
            {/* Video Panel */}
            <div
              onClick={() => setIsVideoModalOpen(true)}
              className="relative flex-1 lg:max-w-[824px] aspect-video rounded-[24px] overflow-hidden cursor-pointer group shadow-sm bg-black"
            >
              <img
                src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_krisp_video.png"
                alt="Krisp voice foundation preview"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-[#14141a]/20 group-hover:bg-[#14141a]/30 transition-colors" />
              <button
                type="button"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-[72px] md:h-[72px] transition-transform duration-200 group-hover:scale-110"
                aria-label="Play video"
              >
                <img
                  src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_play_circle_72.svg"
                  alt="Play button"
                  className="w-full h-full"
                />
              </button>
            </div>

            {/* Proof Panel */}
            <div className="flex flex-col justify-between flex-1 border border-[#e7e7ea] rounded-[20px] p-8 md:p-10 bg-white">
              <div className="flex flex-col gap-2">
                <span className="text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] font-bold text-[#4a3bbe]">
                  Trillions of minutes
                </span>
                <span className="text-[15px] md:text-[16px] leading-[24px] text-[#434351]">
                  of voice conversations processed by our AI, across every kind of room, network and accent.
                </span>
              </div>

              <div className="w-full h-[1px] bg-[#e7e7ea] my-8" />

              <div className="flex flex-col gap-2">
                <span className="text-[20px] leading-[28px] font-semibold text-[#1a1a22]">
                  Globally distributed
                </span>
                <span className="text-[15px] md:text-[16px] leading-[24px] text-[#434351]">
                  A deep tech, product-focused and customer-centric team, working across many time zones.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Values Selector Section */}
      <section className="py-16 md:py-24 bg-[#fafafc]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col items-start gap-3 max-w-[720px] mb-12">
            <span className="text-[13px] md:text-[14px] font-semibold tracking-wider uppercase text-[#4a3bbe]">
              Values
            </span>
            <h2 className="text-[28px] sm:text-[32px] md:text-[36px] leading-[36px] sm:leading-[44px] font-bold text-[#1a1a22]">
              How we work
            </h2>
            <p className="text-[16px] leading-[26px] text-[#434351]">
              Five values shape how we build and decide.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Tabs List */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              {valuesData.map((val, idx) => (
                <button
                  key={val.num}
                  type="button"
                  onClick={() => setActiveValueTab(idx)}
                  className={`flex items-center gap-4 px-5 py-4 rounded-[14px] text-left transition-all duration-200 cursor-pointer ${
                    activeValueTab === idx
                      ? "bg-white shadow-md border-l-4 border-l-[#614efa] translate-x-1"
                      : "hover:bg-white/60 text-[#525069]"
                  }`}
                >
                  <span
                    className={`text-[15px] font-bold ${
                      activeValueTab === idx ? "text-[#614efa]" : "text-[#8a8a9a]"
                    }`}
                  >
                    {val.num}
                  </span>
                  <span
                    className={`text-[17px] font-semibold ${
                      activeValueTab === idx ? "text-[#1a1a22]" : "text-[#434351]"
                    }`}
                  >
                    {val.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Active Value Display Card */}
            <div className="lg:col-span-7 bg-white rounded-[24px] p-8 md:p-12 border border-[#f0f0f4] shadow-sm flex flex-col sm:flex-row items-center gap-8 min-h-[320px]">
              <div className="w-[180px] h-[180px] flex-shrink-0 flex items-center justify-center p-2 rounded-full bg-[#f4f2ff]">
                <img
                  src={valuesData[activeValueTab].image}
                  alt={valuesData[activeValueTab].title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-[14px] font-bold text-[#614efa]">
                  {valuesData[activeValueTab].num}
                </span>
                <h3 className="text-[24px] font-bold text-[#1a1a22]">
                  {valuesData[activeValueTab].title}
                </h3>
                <p className="text-[16px] leading-[26px] text-[#525069]">
                  {valuesData[activeValueTab].desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Open Roles Section */}
      <section className="py-16 md:py-24 bg-white" id="openings">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col items-start gap-3 max-w-[720px] mb-12">
            <span className="text-[13px] md:text-[14px] font-semibold tracking-wider uppercase text-[#4a3bbe]">
              Openings
            </span>
            <h2 className="text-[28px] sm:text-[32px] md:text-[36px] leading-[36px] sm:leading-[44px] font-bold text-[#1a1a22]">
              Come build with us
            </h2>
            <p className="text-[16px] leading-[26px] text-[#434351]">
              We’re hiring across engineering, marketing, revenue and partnerships — remote and hybrid.
            </p>
          </div>

          <div className="divide-y divide-[#e7e7ea] border-y border-[#e7e7ea] mb-10">
            {featuredOpenings.map((role, idx) => (
              <Link
                key={idx}
                to={role.href}
                className="group flex flex-col sm:flex-row sm:items-center justify-between py-6 px-3 hover:bg-[#fafafc] transition-colors rounded-[8px]"
              >
                <div className="flex flex-col gap-1">
                  <h4 className="text-[18px] font-bold text-[#1a1a22] group-hover:text-[#614efa] transition-colors">
                    {role.title}
                  </h4>
                  <span className="text-[13px] font-medium text-[#757585]">
                    {role.dept}
                  </span>
                </div>
                <div className="flex items-center gap-4 mt-2 sm:mt-0">
                  <span className="text-[14px] text-[#525069]">
                    {role.location}
                  </span>
                  <img
                    src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_arrow_right_24.svg"
                    alt="Arrow"
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  />
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center">
            <Link
              to="/careers#open-roles"
              className="inline-flex items-center justify-center h-[48px] px-8 rounded-[10px] bg-[#614efa] hover:bg-[#4a3bbe] text-white text-[15px] font-bold transition-colors"
            >
              See all openings
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Customers Worldwide Trust Us */}
      <section className="py-16 md:py-20 bg-[#fafafc] border-y border-[#f0f0f4]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col items-center text-center gap-3 max-w-[720px] mx-auto mb-12">
            <span className="text-[13px] md:text-[14px] font-semibold tracking-wider uppercase text-[#4a3bbe]">
              Customers
            </span>
            <h2 className="text-[28px] sm:text-[32px] md:text-[36px] leading-[36px] sm:leading-[44px] font-bold text-[#1a1a22]">
              Organizations worldwide trust us
            </h2>
            <p className="text-[16px] leading-[26px] text-[#434351]">
              From global BPOs to the tools you use every day.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-center">
            {customerLogos.map((logo, idx) => (
              <div
                key={idx}
                className="h-[76px] flex items-center justify-center p-4 bg-white rounded-[14px] border border-[#f0f0f4] shadow-xs hover:border-[#614efa]/30 transition-colors"
              >
                <img
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  className="max-h-[32px] max-w-[100px] object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Recognition & Awards Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col items-start gap-3 max-w-[720px] mb-12">
            <span className="text-[13px] md:text-[14px] font-semibold tracking-wider uppercase text-[#4a3bbe]">
              Recognition
            </span>
            <h2 className="text-[28px] sm:text-[32px] md:text-[36px] leading-[36px] sm:leading-[44px] font-bold text-[#1a1a22]">
              Celebrating success together
            </h2>
            <p className="text-[16px] leading-[26px] text-[#434351]">
              Ratings from the people who use Krisp, and awards from the industry.
            </p>
          </div>

          {/* G2 Top Banner */}
          <div className="bg-[#f7f7f9] border border-[#e7e7ea] rounded-[20px] p-6 md:p-10 mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-start gap-2">
              <div className="flex items-center gap-2">
                <img
                  src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_cs_g2.svg"
                  alt="G2 logo"
                  className="w-6 h-6"
                />
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_g2_star_coral.svg"
                      alt="star"
                      className="w-4 h-4"
                    />
                  ))}
                </div>
                <span className="text-[13px] font-bold text-[#1a1a22] ml-1">4.7 rating</span>
              </div>
              <div className="text-[22px] font-bold text-[#1a1a22]">4.7 rating on G2</div>
              <div className="text-[14px] text-[#525069]">Leader in voice AI, summer 2026</div>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 justify-center">
              <img
                src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/badge_g2_users_love_us.png"
                alt="G2 Users Love Us"
                className="h-[76px] w-auto object-contain"
              />
              <img
                src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/badge_g2_best_results.png"
                alt="G2 Best Results"
                className="h-[76px] w-auto object-contain"
              />
              <img
                src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/badge_g2_leader.png"
                alt="G2 Leader"
                className="h-[76px] w-auto object-contain"
              />
              <img
                src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/badge_g2_best_usability.png"
                alt="G2 Best Usability"
                className="h-[76px] w-auto object-contain"
              />
            </div>
          </div>

          {/* Award Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {awardsCards.map((award, idx) => (
              <div
                key={idx}
                className="border border-[#e7e7ea] rounded-[16px] p-5 flex flex-col items-start gap-4 bg-white hover:shadow-md transition-shadow"
              >
                <img
                  src={award.mark}
                  alt={award.title}
                  className="w-12 h-12 object-contain rounded-[8px]"
                />
                <div className="flex flex-col gap-1">
                  <span className="text-[16px] font-bold text-[#1a1a22] leading-[22px]">
                    {award.title}
                  </span>
                  <span className="text-[13px] text-[#757585] leading-[18px]">
                    {award.subtitle}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Grow with Us (Partner preview) */}
      <section className="py-16 md:py-24 bg-[#fafafc]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 flex flex-col items-start gap-5">
              <h2 className="text-[32px] sm:text-[40px] leading-[40px] sm:leading-[48px] font-bold text-[#1a1a22]">
                Like Krisp? Grow with us.
              </h2>
              <p className="text-[16px] leading-[26px] text-[#525069]">
                If you love what we’re building and have an audience who’d get value from Krisp, there’s a way to partner with us. Share it your way, as an affiliate, creator, or brand, and grow as we do.
              </p>
              <Link
                to="/partner-program"
                className="inline-flex items-center justify-center h-[48px] px-7 rounded-[10px] bg-[#614efa] hover:bg-[#4a3bbe] text-white text-[15px] font-bold transition-colors mt-2"
              >
                Become a partner
              </Link>
            </div>

            <div className="lg:col-span-7 flex flex-col sm:flex-row gap-4 items-center justify-center">
              {/* Tall photo */}
              <div className="relative rounded-[20px] overflow-hidden shadow-sm w-full sm:w-[320px] aspect-[3/4]">
                <img
                  src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_grow_affiliate.jpg"
                  alt="Krisp affiliate recording"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-xs text-[#1a1a22] text-[12px] font-bold px-3 py-1 rounded-[6px]">
                  Affiliate
                </span>
              </div>

              {/* Stacked photos */}
              <div className="flex flex-col gap-4 w-full sm:w-[220px]">
                <div className="relative rounded-[16px] overflow-hidden shadow-sm aspect-square">
                  <img
                    src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_grow_creator.jpg"
                    alt="Creator wearing headphones"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs text-[#1a1a22] text-[11px] font-bold px-2.5 py-0.5 rounded-[6px]">
                    Creator
                  </span>
                </div>
                <div className="relative rounded-[16px] overflow-hidden shadow-sm aspect-square">
                  <img
                    src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_partners_hero_desk.jpg"
                    alt="Brand coworker at desk"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs text-[#1a1a22] text-[11px] font-bold px-2.5 py-0.5 rounded-[6px]">
                    Brand
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Bottom Toggle CTA Banner */}
      <section className="py-20 md:py-28 bg-[#1a1a22] text-white text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#614efa 1px, transparent 1px)",
            backgroundSize: "28px 28px"
          }}
        />
        <div className="relative z-10 max-w-[800px] mx-auto px-6 flex flex-col items-center gap-8">
          <h2 className="text-[32px] sm:text-[44px] leading-[40px] sm:leading-[52px] font-bold">
            Come build the future of <br className="hidden sm:inline" /> Voice AI with us
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/careers#open-roles"
              className="inline-flex items-center justify-center h-[48px] px-8 rounded-[10px] bg-[#614efa] hover:bg-[#4a3bbe] text-white text-[15px] font-bold transition-colors"
            >
              View open jobs
            </Link>
            <Link
              to="/blog"
              className="inline-flex items-center justify-center h-[48px] px-8 rounded-[10px] bg-white/10 hover:bg-white/20 text-white text-[15px] font-bold border border-white/20 transition-colors"
            >
              Read the blog
            </Link>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-[900px] aspect-video bg-black rounded-[16px] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
              aria-label="Close video"
            >
              ✕
            </button>
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/jYcVfFFlABQ?autoplay=1"
              title="Krisp Overview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}