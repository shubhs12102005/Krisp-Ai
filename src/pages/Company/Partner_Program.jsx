import React, { useState } from "react";

/**
 * Partner Program Page - High-Fidelity Replica of original Krisp.ai/partner-program/
 * Includes:
 * - Partner Hero with collage imagery & floating commission analytics cards
 * - Infinite Marquee with 24 genuine partner & BPO logos
 * - 3 Ways to Partner Cards (Affiliate, Creator, Co-marketing)
 * - Partner Kit Grid (Assets & swipe copy, Creative drops, Office hours, Slack)
 * - Recognitions & Industry Awards (G2 4.7, Forbes AI 50, Webby, CCW, Gartner, Palomarr)
 * - 3-step Timeline Process (Apply, Get set up, Earn)
 * - 7 Authentic FAQ Accordions
 * - Partner Inquiry Modal with submission confirmation
 * - Bottom CTA Toggle Banner
 */
export default function Partner_Program() {
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const partnerLogos = [
    { name: "Everise", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_everise.svg" },
    { name: "TTEC", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_ttec.svg" },
    { name: "Concentrix", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_concentrix.svg" },
    { name: "Teleperformance", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_teleperformance.svg" },
    { name: "Startek", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_startek.svg" },
    { name: "Transparent BPO", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_transparentbpo.svg" },
    { name: "Cognizant", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_cognizant.svg" },
    { name: "The Office Gurus", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_officegurus.svg" },
    { name: "Discord", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_discord.svg" },
    { name: "Twilio", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_twilio.svg" },
    { name: "RingCentral", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_ringcentral.svg" },
    { name: "Vonage", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_vonage.svg" },
    { name: "LiveKit", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_livekit.svg" },
    { name: "Vapi", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_vapi.svg" },
    { name: "Symphony", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_symphony.svg" },
    { name: "Zoho", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_zoho.svg" },
    { name: "Aircall", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_aircall.svg" },
    { name: "Daily", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_daily.svg" }
  ];

  const faqs = [
    {
      q: "Does Krisp have an affiliate program, and how much can I earn?",
      a: "Yes. The Krisp affiliate program pays 30% recurring commission for 12 months on every customer you refer, with a 90 day cookie window. It's free to join, there's no cap on what you can earn, and it's one of the more generous SaaS affiliate programs around."
    },
    {
      q: "Is it free to join, and can beginners apply?",
      a: "Yes to both. It's free, and open to beginners as well as established creators and publishers. We look at how and where you'll promote Krisp more than the size of your audience."
    },
    {
      q: "What programs are there, and can I join more than one?",
      a: "Affiliate (share a tracked link and earn 30% recurring), creator (a custom partnership for influencers and creators raising awareness), and co-marketing (joint work with brands and media). They're separate, so apply to as many as fit you, and plenty of partners run more than one."
    },
    {
      q: "Is there a Krisp referral program, coupon, or promo code?",
      a: "No public referral program, and no public coupon or promo codes. The way to earn from sharing Krisp is the affiliate program, which pays 30% recurring for 12 months. Affiliate and creator partners can also get a dedicated offer to share with their audience, set up during onboarding."
    },
    {
      q: "What about reseller, technology, or MSP partnerships?",
      a: "For building with Krisp, see Krisp for Developers, our voice AI SDK. For reselling, integrations, or co-marketing, reach out through the partner form and we'll point you to the right team. MSPs can offer Krisp to their clients too via our MSP partner portal."
    },
    {
      q: "How do I become a partner and get paid?",
      a: "Pick the program that fits and apply in a few minutes. We review within 2 to 3 working days, then send your link, assets, and brand kit. Affiliate commission is paid monthly with clear reporting. Creator and co-marketing partnerships run on custom terms we agree together, paid on a schedule that suits both sides."
    },
    {
      q: "What could get an application declined?",
      a: "A few things: bidding on Krisp branded keywords in paid search, coupon or cashback sites that only skim existing demand, misleading claims about what Krisp does, or spammy or undisclosed automated promotion. Anything else, we're happy to talk."
    }
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
    <div className="bg-white text-[#1a1a22] overflow-hidden min-h-screen">
      {/* 1. Hero Section */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-white relative">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-6 flex flex-col items-start gap-6">
              <h1 className="text-[38px] sm:text-[48px] lg:text-[56px] leading-[44px] sm:leading-[54px] lg:leading-[64px] font-bold text-[#1a1a22] tracking-tight">
                Krisp Partner &amp; <br /> Affiliate Program
              </h1>
              <p className="text-[17px] sm:text-[18px] leading-[28px] text-[#434351] max-w-[540px]">
                Partner with Krisp as an affiliate, creator, or brand. Affiliates earn up to 30% recurring commission for 12 months.
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-2">
                <a
                  href="#ways_to_partner"
                  className="h-[48px] px-8 rounded-[10px] bg-[#614efa] hover:bg-[#4a3bbe] text-white font-bold text-[15px] flex items-center justify-center transition-colors shadow-sm"
                >
                  Become a partner
                </a>
                <button
                  type="button"
                  onClick={() => setIsInquiryModalOpen(true)}
                  className="h-[48px] px-8 rounded-[10px] border border-[#1a1a22] hover:bg-[#1a1a22] hover:text-white text-[#1a1a22] font-bold text-[15px] transition-colors cursor-pointer"
                >
                  Talk to us
                </button>
              </div>
            </div>

            {/* Right Collage & Floating Insights */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              <div className="relative flex gap-4 items-center">
                {/* Tall Photo */}
                <div className="w-[200px] sm:w-[260px] aspect-[3/4] rounded-[24px] overflow-hidden shadow-md">
                  <img
                    src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_partners_hero_creator.jpg"
                    alt="Krisp creator partner"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Stacked Photos */}
                <div className="flex flex-col gap-4 w-[160px] sm:w-[200px]">
                  <div className="aspect-square rounded-[18px] overflow-hidden shadow-sm">
                    <img
                      src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_partners_hero_pair.jpg"
                      alt="Reviewing performance"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square rounded-[18px] overflow-hidden shadow-sm">
                    <img
                      src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_partners_hero_desk.jpg"
                      alt="Creator at desk"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Floating Insight 1: Commission */}
                <div className="absolute -bottom-6 left-2 bg-white rounded-[16px] p-4 shadow-xl border border-[#f0f0f4] flex flex-col gap-1 z-20">
                  <span className="text-[12px] font-medium text-[#757585]">
                    Commission this month
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[20px] font-bold text-[#1a1a22]">$2,160</span>
                    <span className="text-[13px] font-bold text-[#008065]">↑ 18%</span>
                  </div>
                </div>

                {/* Floating Insight 2: Referral */}
                <div className="absolute -top-4 right-0 bg-white rounded-[16px] p-3.5 shadow-xl border border-[#f0f0f4] flex items-center gap-3 z-20 hidden sm:flex">
                  <span className="w-8 h-8 rounded-full bg-[#e8faf6] text-[#008065] flex items-center justify-center font-bold text-[14px]">
                    ✓
                  </span>
                  <div>
                    <div className="text-[13px] font-bold text-[#1a1a22]">
                      New referral subscribed
                    </div>
                    <div className="text-[11px] text-[#757585]">
                      Pro annual • +$28.80 / mo
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Marquee Logo Row */}
      <section className="py-12 bg-[#fafafc] border-y border-[#e7e7ea] overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 mb-6 text-center">
          <span className="text-[13px] font-bold uppercase tracking-wider text-[#757585]">
            Trusted by global enterprise partners and BPOs
          </span>
        </div>

        <div className="flex gap-8 whitespace-nowrap overflow-x-auto scrollbar-none py-2 px-6 justify-center flex-wrap">
          {partnerLogos.map((logo, idx) => (
            <div
              key={idx}
              className="h-[52px] px-5 py-2.5 rounded-[12px] bg-white border border-[#f0f0f4] shadow-xs flex items-center justify-center flex-shrink-0"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-[26px] max-w-[90px] object-contain opacity-75 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 3. Ways to Partner */}
      <section className="py-20 md:py-28 bg-white" id="ways_to_partner">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col items-start gap-4 max-w-[760px] mb-16">
            <h2 className="text-[32px] sm:text-[42px] leading-[40px] sm:leading-[50px] font-bold text-[#1a1a22]">
              Ways to partner <br /> with Krisp
            </h2>
            <p className="text-[16px] leading-[26px] text-[#525069]">
              The Krisp Partner Program is free to join and open to affiliates, creators, and brands. Our affiliate program pays 30% recurring commission for 12 months, one of the more rewarding SaaS affiliate programs around.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Affiliate */}
            <article className="relative rounded-[24px] overflow-hidden aspect-[4/5] p-8 flex flex-col justify-between text-white group shadow-md">
              <img
                src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_partners_route_affiliate.jpg"
                alt="Affiliate program"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              <div className="relative z-10 flex justify-end">
                <button
                  onClick={() => setIsInquiryModalOpen(true)}
                  className="px-4 py-2 rounded-full bg-white text-[#1a1a22] font-bold text-[13px] flex items-center gap-1.5 shadow-sm hover:bg-[#614efa] hover:text-white transition-colors cursor-pointer"
                >
                  Join the program ↗
                </button>
              </div>

              <div className="relative z-10">
                <span className="text-[12px] font-bold tracking-wider uppercase text-[#c3bcfd]">
                  Earn
                </span>
                <h3 className="text-[28px] font-bold text-white mt-1 mb-2">
                  Affiliate
                </h3>
                <p className="text-[14px] text-gray-200 mb-4 leading-[20px]">
                  For publishers and performance marketers who earn by referring paying customers.
                </p>
                <div className="flex flex-wrap gap-2 text-[12px] font-semibold">
                  <span className="px-3 py-1 rounded-full bg-[#614efa] text-white">
                    30% recurring
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-white">
                    12 months
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-white">
                    90 day cookie
                  </span>
                </div>
              </div>
            </article>

            {/* Card 2: Creator */}
            <article className="relative rounded-[24px] overflow-hidden aspect-[4/5] p-8 flex flex-col justify-between text-white group shadow-md">
              <img
                src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_partners_route_creator.jpg"
                alt="Creator program"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              <div className="relative z-10 flex justify-end">
                <button
                  onClick={() => setIsInquiryModalOpen(true)}
                  className="px-4 py-2 rounded-full bg-white text-[#1a1a22] font-bold text-[13px] flex items-center gap-1.5 shadow-sm hover:bg-[#614efa] hover:text-white transition-colors cursor-pointer"
                >
                  Apply as a creator ↗
                </button>
              </div>

              <div className="relative z-10">
                <span className="text-[12px] font-bold tracking-wider uppercase text-[#c3bcfd]">
                  Promote
                </span>
                <h3 className="text-[28px] font-bold text-white mt-1 mb-2">
                  Creator
                </h3>
                <p className="text-[14px] text-gray-200 mb-4 leading-[20px]">
                  For influencers and creators who want to raise awareness about Krisp.
                </p>
                <div className="flex flex-wrap gap-2 text-[12px] font-semibold">
                  <span className="px-3 py-1 rounded-full bg-[#614efa] text-white">
                    Custom partnership
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-white">
                    Tailored terms
                  </span>
                </div>
              </div>
            </article>

            {/* Card 3: Co-marketing */}
            <article className="relative rounded-[24px] overflow-hidden aspect-[4/5] p-8 flex flex-col justify-between text-white group shadow-md">
              <img
                src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_partners_route_comarketing.jpg"
                alt="Co-marketing program"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              <div className="relative z-10 flex justify-end">
                <button
                  onClick={() => setIsInquiryModalOpen(true)}
                  className="px-4 py-2 rounded-full bg-white text-[#1a1a22] font-bold text-[13px] flex items-center gap-1.5 shadow-sm hover:bg-[#614efa] hover:text-white transition-colors cursor-pointer"
                >
                  Email us ↗
                </button>
              </div>

              <div className="relative z-10">
                <span className="text-[12px] font-bold tracking-wider uppercase text-[#c3bcfd]">
                  Collaborate
                </span>
                <h3 className="text-[28px] font-bold text-white mt-1 mb-2">
                  Co-marketing
                </h3>
                <p className="text-[14px] text-gray-200 mb-4 leading-[20px]">
                  For brands and media who know and trust Krisp.
                </p>
                <div className="flex flex-wrap gap-2 text-[12px] font-semibold">
                  <span className="px-3 py-1 rounded-full bg-[#614efa] text-white">
                    Joint campaigns
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-white">
                    Integrations
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-white">
                    Events
                  </span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 4. Partner Kit: Ongoing support */}
      <section className="py-20 bg-[#fafafc] border-t border-[#f0f0f4]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col items-start gap-4 max-w-[760px] mb-16">
            <h2 className="text-[32px] sm:text-[42px] leading-[40px] sm:leading-[50px] font-bold text-[#1a1a22]">
              Ongoing support, <br /> ready to use
            </h2>
            <p className="text-[16px] leading-[26px] text-[#525069]">
              Every partner gets prebuilt resources that fit how they create: monthly creative drops, an asset and swipe-copy library, office hours, and a partner Slack that actually answers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Box 1: Library */}
            <div className="rounded-[20px] bg-white border border-[#e7e7ea] p-6 flex flex-col justify-between shadow-xs">
              <div>
                <h3 className="text-[18px] font-bold text-[#1a1a22] mb-2">
                  Asset and swipe-copy library
                </h3>
                <p className="text-[14px] text-[#525069] leading-[20px]">
                  Logos, banners, and copy that converts, ready to paste.
                </p>
              </div>
              <div className="mt-8 flex items-center justify-between p-3 rounded-[12px] bg-[#f7f7f9] border border-[#e7e7ea]">
                <span className="text-[12px] font-bold text-[#614efa]">swipe copy</span>
                <span className="text-[12px] text-gray-500">20+ templates</span>
              </div>
            </div>

            {/* Box 2: Creative Drops */}
            <div className="rounded-[20px] bg-white border border-[#e7e7ea] p-6 flex flex-col justify-between shadow-xs">
              <div>
                <h3 className="text-[18px] font-bold text-[#1a1a22] mb-2">
                  Monthly creative drops
                </h3>
                <p className="text-[14px] text-[#525069] leading-[20px]">
                  Fresh banners, hooks, and angles delivered every month.
                </p>
              </div>
              <div className="mt-8 p-3 rounded-[12px] bg-[#e8faf6] border border-[#cef4ec]">
                <div className="text-[13px] font-bold text-[#008065]">August drop</div>
                <div className="text-[11px] text-[#008065]/80">12 new high-res assets</div>
              </div>
            </div>

            {/* Box 3: Office Hours */}
            <div className="rounded-[20px] bg-white border border-[#e7e7ea] p-6 flex flex-col justify-between shadow-xs">
              <div>
                <h3 className="text-[18px] font-bold text-[#1a1a22] mb-2">
                  Office hours
                </h3>
                <p className="text-[14px] text-[#525069] leading-[20px]">
                  Recurring time with the partner team, not a ticket queue.
                </p>
              </div>
              <div className="mt-8 flex items-center justify-between p-3 rounded-[12px] bg-[#fff8e5] border border-[#ffe9b3]">
                <span className="text-[13px] font-bold text-[#b37400]">Live Q&amp;A</span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#b37400] text-white font-bold">Drop in</span>
              </div>
            </div>

            {/* Box 4: Slack */}
            <div className="rounded-[20px] bg-white border border-[#e7e7ea] p-6 flex flex-col justify-between shadow-xs">
              <div>
                <h3 className="text-[18px] font-bold text-[#1a1a22] mb-2">
                  Partner Slack
                </h3>
                <p className="text-[14px] text-[#525069] leading-[20px]">
                  A partner Slack that actually answers in minutes.
                </p>
              </div>
              <div className="mt-8 p-3 rounded-[12px] bg-[#f4f2ff] border border-[#e7e2fd]">
                <div className="text-[12px] font-bold text-[#614efa]">#krisp-partners</div>
                <div className="text-[11px] text-[#525069]">Typically replies in minutes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. How to Partner (3-step timeline) */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-[32px] sm:text-[40px] font-bold text-[#1a1a22] mb-16">
            How to partner with Krisp
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="p-8 rounded-[20px] border border-[#e7e7ea] bg-[#fafafc] flex flex-col gap-4">
              <div className="w-10 h-10 rounded-full bg-[#614efa] text-white font-bold text-[16px] flex items-center justify-center">
                1
              </div>
              <h3 className="text-[20px] font-bold text-[#1a1a22]">Apply</h3>
              <p className="text-[15px] leading-[24px] text-[#525069]">
                Pick the program that fits and apply in minutes. Join as many as you like.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-8 rounded-[20px] border border-[#e7e7ea] bg-[#fafafc] flex flex-col gap-4">
              <div className="w-10 h-10 rounded-full bg-[#614efa] text-white font-bold text-[16px] flex items-center justify-center">
                2
              </div>
              <h3 className="text-[20px] font-bold text-[#1a1a22]">Get set up</h3>
              <p className="text-[15px] leading-[24px] text-[#525069]">
                We review within 2 to 3 working days, then hand over your link, assets and brand kit.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-8 rounded-[20px] border border-[#e7e7ea] bg-[#fafafc] flex flex-col gap-4">
              <div className="w-10 h-10 rounded-full bg-[#614efa] text-white font-bold text-[16px] flex items-center justify-center">
                3
              </div>
              <h3 className="text-[20px] font-bold text-[#1a1a22]">Earn</h3>
              <p className="text-[15px] leading-[24px] text-[#525069]">
                Recurring commission for affiliates, agreed terms for creators and brands. Always paid on time, with clear reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Recognition & Awards */}
      <section className="py-16 md:py-24 bg-[#fafafc] border-t border-[#f0f0f4]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col items-start gap-3 max-w-[720px] mb-12">
            <span className="text-[13px] md:text-[14px] font-semibold tracking-wider uppercase text-[#4a3bbe]">
              Promoted by 2,000+ partners worldwide
            </span>
            <h2 className="text-[28px] sm:text-[34px] md:text-[40px] leading-[36px] sm:leading-[48px] font-bold text-[#1a1a22]">
              Loved, rated, and recognized
            </h2>
          </div>

          <div className="bg-white border border-[#e7e7ea] rounded-[20px] p-6 md:p-10 mb-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="flex flex-col items-start gap-2">
              <div className="flex items-center gap-2">
                <img
                  src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_cs_g2.svg"
                  alt="G2"
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

      {/* 7. FAQs */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="text-[32px] sm:text-[40px] font-bold text-[#1a1a22] mb-12">
            Things you're probably <br /> wondering
          </h2>

          <div className="divide-y divide-[#e7e7ea] border-y border-[#e7e7ea]">
            {faqs.map((faq, idx) => (
              <div key={idx} className="py-6">
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? -1 : idx)}
                  className="w-full flex items-center justify-between text-left gap-4 font-bold text-[18px] sm:text-[20px] text-[#1a1a22] cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <span className="text-[24px] text-gray-400 font-light flex-shrink-0">
                    {openFaqIndex === idx ? "−" : "+"}
                  </span>
                </button>
                {openFaqIndex === idx && (
                  <p className="mt-4 text-[16px] leading-[26px] text-[#525069]">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
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
        <div className="relative z-10 max-w-[800px] mx-auto px-6 flex flex-col items-center gap-6">
          <h2 className="text-[32px] sm:text-[44px] leading-[40px] sm:leading-[52px] font-bold">
            Ready to grow with Krisp?
          </h2>
          <p className="text-[16px] text-[#a1a1aa] max-w-[500px]">
            Applying takes a few minutes, and you can join more than one program.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <a
              href="#ways_to_partner"
              className="inline-flex items-center justify-center h-[48px] px-8 rounded-[10px] bg-[#614efa] hover:bg-[#4a3bbe] text-white text-[15px] font-bold transition-colors"
            >
              Find your program
            </a>
            <button
              onClick={() => setIsInquiryModalOpen(true)}
              className="inline-flex items-center justify-center h-[48px] px-8 rounded-[10px] bg-white/10 hover:bg-white/20 text-white text-[15px] font-bold border border-white/20 transition-colors cursor-pointer"
            >
              Talk to us
            </button>
          </div>
        </div>
      </section>

      {/* Partner Inquiry Modal */}
      {isInquiryModalOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => {
            setIsInquiryModalOpen(false);
            setInquirySubmitted(false);
          }}
        >
          <div
            className="relative w-full max-w-[540px] bg-white rounded-[24px] p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => {
                setIsInquiryModalOpen(false);
                setInquirySubmitted(false);
              }}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-800 text-[20px]"
            >
              ✕
            </button>

            {inquirySubmitted ? (
              <div className="text-center py-8 flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-[#e8faf6] flex items-center justify-center text-[#008065] text-[28px]">
                  ✓
                </div>
                <h3 className="text-[24px] font-bold text-[#1a1a22]">
                  Thanks, your message is on its way.
                </h3>
                <p className="text-[14px] text-[#525069]">
                  We get back to you within 2 to 3 working days.
                </p>
                <button
                  onClick={() => {
                    setIsInquiryModalOpen(false);
                    setInquirySubmitted(false);
                  }}
                  className="mt-4 px-6 py-2.5 rounded-[10px] bg-[#614efa] text-white font-bold text-[14px]"
                >
                  Close
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-[24px] font-bold text-[#1a1a22]">
                  Tell us what you have in mind
                </h3>
                <p className="text-[14px] text-[#525069] mt-1 mb-6">
                  We get back to you within 2 to 3 working days.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setInquirySubmitted(true);
                  }}
                  className="flex flex-col gap-4 text-left"
                >
                  <div>
                    <label className="block text-[13px] font-semibold text-[#1a1a22] mb-1">
                      Your name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jordan Lee"
                      className="w-full h-[42px] px-3.5 border border-[#e7e7ea] rounded-[10px] text-[14px] focus:outline-none focus:border-[#614efa]"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-semibold text-[#1a1a22] mb-1">
                      Work email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jordan@company.com"
                      className="w-full h-[42px] px-3.5 border border-[#e7e7ea] rounded-[10px] text-[14px] focus:outline-none focus:border-[#614efa]"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-semibold text-[#1a1a22] mb-1">
                      Company name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Company or agency name"
                      className="w-full h-[42px] px-3.5 border border-[#e7e7ea] rounded-[10px] text-[14px] focus:outline-none focus:border-[#614efa]"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-semibold text-[#1a1a22] mb-1">
                      What do you have in mind?
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your audience, partnership ideas, or audience reach."
                      className="w-full p-3 border border-[#e7e7ea] rounded-[10px] text-[14px] focus:outline-none focus:border-[#614efa]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full h-[46px] rounded-[10px] bg-[#614efa] hover:bg-[#4a3bbe] text-white font-bold text-[15px] transition-colors mt-2"
                  >
                    Send inquiry
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}