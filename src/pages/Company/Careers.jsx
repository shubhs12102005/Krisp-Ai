import React, { useState } from "react";
import { Link } from "react-router-dom";

/**
 * Careers Page - High-Fidelity Replica of original Krisp.ai/careers/
 * Includes:
 * - Horizon Hero with constellation field & team cluster
 * - Krisp Video with expandable modal player
 * - Values Selector (5 authentic values with illustrations)
 * - Benefits Section with pills and photo
 * - Flexibility (Work from anywhere - Remote/Hybrid/In-office)
 * - Hiring Process (3-step dark timeline)
 * - Open Roles Section with 15 real Krisp jobs & dynamic department filtering
 * - Referral Program Banner
 * - Recognition & Awards Showcase
 */
export default function Careers() {
  const [activeValueTab, setActiveValueTab] = useState(0);
  const [selectedDept, setSelectedDept] = useState("all");
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [isReferralModalOpen, setIsReferralModalOpen] = useState(false);

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

  const benefitsList = [
    "Health, dental, and vision insurance",
    "Stock options (based on seniority level)",
    "Paid time off",
    "Paid parental leave",
    "Wellness coverage",
    "Learning and development",
    "Referral bonus program"
  ];

  const hiringSteps = [
    {
      num: "01",
      title: "Apply",
      desc: "Review our detailed job descriptions to find the openings that fit, then apply via our website."
    },
    {
      num: "02",
      title: "Interview",
      desc: "A short intro call with the hiring team, then three to five rounds of interviews."
    },
    {
      num: "03",
      title: "Offer",
      desc: "We evaluate everyone who came through the process and send an offer to the best fit."
    }
  ];

  const departments = [
    { id: "all", label: "All" },
    { id: "business-development", label: "Business Development" },
    { id: "customer-engineering", label: "Customer Engineering" },
    { id: "engineering-research", label: "Engineering & Research" },
    { id: "marketing", label: "Marketing" },
    { id: "product-management", label: "Product Management" },
    { id: "security", label: "Security" }
  ];

  const rolesData = [
    {
      id: "growth-marketing-head",
      title: "Growth Marketing Head",
      deptId: "marketing",
      deptName: "Marketing",
      location: "Yerevan/Europe/UK, Hybrid/Remote"
    },
    {
      id: "partner-marketing-manager",
      title: "Partner Marketing Manager",
      deptId: "marketing",
      deptName: "Marketing",
      location: "US, Remote"
    },
    {
      id: "security-program-manager",
      title: "Security Program Manager",
      deptId: "security",
      deptName: "Security",
      location: "Armenia, Hybrid"
    },
    {
      id: "senior-brand-communications-manager",
      title: "Senior Brand & Communications Manager",
      deptId: "marketing",
      deptName: "Marketing",
      location: "US, Remote"
    },
    {
      id: "senior-customer-engineer-enterprise",
      title: "Senior Customer Engineer, Enterprise",
      deptId: "customer-engineering",
      deptName: "Customer Engineering",
      location: "Armenia, Hybrid"
    },
    {
      id: "senior-director-business-development-financial",
      title: "Senior Director, Business Development | Financial Services & Insurance",
      deptId: "business-development",
      deptName: "Business Development",
      location: "US, Remote"
    },
    {
      id: "senior-director-business-development-healthcare",
      title: "Senior Director, Business Development | Healthcare & Life Sciences",
      deptId: "business-development",
      deptName: "Business Development",
      location: "US, Remote"
    },
    {
      id: "senior-director-business-development-retail",
      title: "Senior Director, Business Development | Retail, E-Commerce, Travel & Hospitality",
      deptId: "business-development",
      deptName: "Business Development",
      location: "US, Remote"
    },
    {
      id: "sr-director-gaming-interactive",
      title: "Senior Director, Gaming & Interactive Platforms Partnerships",
      deptId: "business-development",
      deptName: "Business Development",
      location: "US, Remote"
    },
    {
      id: "senior-director-sdk-india",
      title: "Senior Director, SDK Business Development – India",
      deptId: "business-development",
      deptName: "Business Development",
      location: "India, Remote"
    },
    {
      id: "senior-director-telco",
      title: "Senior Director, Telco & Carrier Partnerships",
      deptId: "business-development",
      deptName: "Business Development",
      location: "US, Remote"
    },
    {
      id: "senior-video-motion-designer",
      title: "Senior Motion Designer",
      deptId: "marketing",
      deptName: "Marketing",
      location: "Armenia, Hybrid"
    },
    {
      id: "senior-product-manager-website",
      title: "Senior Product Manager, Website",
      deptId: "product-management",
      deptName: "Product Management",
      location: "Armenia, Hybrid"
    },
    {
      id: "senior-voice-ai-solutions-engineer",
      title: "Senior Voice AI Solutions Engineer",
      deptId: "engineering-research",
      deptName: "Engineering & Research",
      location: "US, Remote"
    },
    {
      id: "technical-product-marketer",
      title: "Technical Product Marketer, Developer Products",
      deptId: "marketing",
      deptName: "Marketing",
      location: "Armenia, Hybrid"
    }
  ];

  const filteredRoles =
    selectedDept === "all"
      ? rolesData
      : rolesData.filter((r) => r.deptId === selectedDept);

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
      <section className="relative overflow-hidden bg-white text-center pt-28 pb-12 md:pt-36 md:pb-16">
        {/* Colorful gradient wash */}
        <div
          className="absolute inset-x-0 bottom-0 h-[400px] pointer-events-none z-0"
          style={{
            background: "linear-gradient(180deg, #fefefe 0%, #ffe9e7 45%, #c3bcfd 100%)",
            opacity: 0.85
          }}
          aria-hidden="true"
        />
        {/* Constellation field illustration */}
        <div
          className="absolute inset-x-0 bottom-0 h-[370px] pointer-events-none z-1 flex items-end justify-center"
          aria-hidden="true"
        >
          <img
            src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_careers_hero_constellation.svg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        {/* Bottom edge rule */}
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
              Build your career at Krisp
            </h1>
            <p className="max-w-[840px] text-[16px] sm:text-[18px] leading-[26px] sm:leading-[28px] text-[#434351]">
              Join our team to help shape the future of online communication.
            </p>
          </div>

          <div className="mt-8">
            <a
              href="#open-roles"
              className="inline-flex items-center justify-center h-[48px] px-8 rounded-[10px] bg-[#614efa] hover:bg-[#4a3bbe] text-white text-[16px] font-bold transition-colors shadow-sm"
            >
              View open jobs
            </a>
          </div>

          {/* Krispions around the world cluster media */}
          <div className="mt-8 max-w-[508px] w-full">
            <img
              src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_careers_hero_cluster.png"
              alt="Krispions around the world"
              className="w-full h-auto drop-shadow-md"
            />
          </div>
        </div>
      </section>

      {/* 2. What is Krisp Video Section (Wide) */}
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

          <div
            onClick={() => setIsVideoModalOpen(true)}
            className="relative w-full aspect-video rounded-[24px] overflow-hidden cursor-pointer group shadow-sm bg-black"
          >
            <img
              src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_krisp_video.png"
              alt="Krisp video presentation"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
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
        </div>
      </section>

      {/* 3. Our Values Section */}
      <section className="py-16 md:py-24 bg-[#fafafc]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col items-start gap-3 max-w-[720px] mb-12">
            <span className="text-[13px] md:text-[14px] font-semibold tracking-wider uppercase text-[#4a3bbe]">
              Our values
            </span>
            <h2 className="text-[28px] sm:text-[32px] md:text-[36px] leading-[36px] sm:leading-[44px] font-bold text-[#1a1a22]">
              Our values
            </h2>
            <p className="text-[16px] leading-[26px] text-[#434351]">
              This system of beliefs guides us in our strategies and everyday decision making.
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

            {/* Active Value Display */}
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

      {/* 4. Benefits Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col items-start gap-6">
              <div className="flex flex-col items-start gap-3">
                <span className="text-[13px] md:text-[14px] font-semibold tracking-wider uppercase text-[#4a3bbe]">
                  Benefits
                </span>
                <h2 className="text-[28px] sm:text-[34px] md:text-[40px] leading-[36px] sm:leading-[44px] md:leading-[48px] font-bold text-[#1a1a22]">
                  No matter where you are in life, <br className="hidden sm:inline" />
                  Krisp has you covered
                </h2>
                <p className="text-[16px] leading-[26px] text-[#434351]">
                  A positive work environment matters. That’s why we offer competitive benefits.
                </p>
              </div>

              <ul className="flex flex-wrap gap-2.5 mt-2">
                {benefitsList.map((benefit, i) => (
                  <li
                    key={i}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-[#f4f4f5] text-[14px] font-medium text-[#1a1a22]"
                  >
                    ✓ {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="rounded-[24px] overflow-hidden shadow-sm border border-[#f0f0f4] max-w-[400px]">
                <img
                  src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_careers_benefits_team.png"
                  alt="Krispions together at the office"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Flexibility: Work from anywhere */}
      <section className="py-16 md:py-24 bg-[#fafafc]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <div className="rounded-[24px] overflow-hidden shadow-sm border border-[#f0f0f4] max-w-[360px]">
                <img
                  src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_careers_remote_work.png"
                  alt="Krisp team meeting"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col items-start gap-5 order-1 lg:order-2">
              <span className="text-[13px] md:text-[14px] font-semibold tracking-wider uppercase text-[#4a3bbe]">
                Flexibility
              </span>
              <h2 className="text-[28px] sm:text-[34px] md:text-[40px] leading-[36px] sm:leading-[44px] md:leading-[48px] font-bold text-[#1a1a22]">
                Work from anywhere
              </h2>
              <p className="text-[16px] leading-[26px] text-[#525069]">
                We believe in the power of flexibility. We offer a blend of remote, hybrid and in-office opportunities, tailored to your preferences — and we’re a diverse team spread across many cultures and time zones.
              </p>
              <ul className="flex items-center gap-3 mt-2">
                {["Remote", "Hybrid", "In-office"].map((mode) => (
                  <li
                    key={mode}
                    className="px-5 py-2 rounded-full border border-[#614efa] text-[#614efa] text-[14px] font-bold bg-[#614efa]/5"
                  >
                    {mode}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Hiring Process: 3-step Dark Timeline */}
      <section className="py-20 md:py-28 bg-[#1a1a22] text-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col items-start gap-3 max-w-[720px] mb-16">
            <span className="text-[13px] md:text-[14px] font-semibold tracking-wider uppercase text-[#b4abfd]">
              Hiring process
            </span>
            <h2 className="text-[28px] sm:text-[34px] md:text-[40px] leading-[36px] sm:leading-[48px] font-bold text-white">
              Become a Krispion
            </h2>
            <p className="text-[16px] leading-[26px] text-[#a1a1aa]">
              Our goal is to make the hiring process a positive, rewarding and transparent experience for every candidate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {hiringSteps.map((step) => (
              <div
                key={step.num}
                className="relative bg-white/5 border border-white/10 rounded-[20px] p-8 flex flex-col gap-4 hover:border-[#614efa]/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-[#614efa] text-white font-bold text-[18px] flex items-center justify-center">
                  {step.num}
                </div>
                <h3 className="text-[22px] font-bold text-white mt-2">
                  {step.title}
                </h3>
                <p className="text-[15px] leading-[24px] text-[#a1a1aa]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-start">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-[#b4abfd] hover:text-white font-semibold text-[15px] transition-colors underline underline-offset-4"
            >
              Learn more about hiring process →
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Open Roles Section with department filters */}
      <section className="py-20 md:py-28 bg-white" id="open-roles">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col items-start gap-3 max-w-[720px] mb-10">
            <span className="text-[13px] md:text-[14px] font-semibold tracking-wider uppercase text-[#4a3bbe]">
              Open roles
            </span>
            <h2 className="text-[28px] sm:text-[34px] md:text-[40px] leading-[36px] sm:leading-[48px] font-bold text-[#1a1a22]">
              Open roles
            </h2>
            <p className="text-[16px] leading-[26px] text-[#434351]">
              We’re growing and looking for talented people to help us improve the world of online communication.
            </p>
          </div>

          {/* Department Chips and Count */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#e7e7ea] mb-8">
            <div className="flex flex-wrap gap-2">
              {departments.map((dept) => (
                <button
                  key={dept.id}
                  onClick={() => setSelectedDept(dept.id)}
                  className={`px-4 py-2 rounded-full text-[14px] font-semibold transition-all cursor-pointer ${
                    selectedDept === dept.id
                      ? "bg-[#614efa] text-white shadow-xs"
                      : "bg-[#f4f4f5] text-[#525069] hover:bg-[#e7e7ea] hover:text-[#1a1a22]"
                  }`}
                >
                  {dept.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 font-bold flex-shrink-0">
              <span className="text-[24px] gradient-purple">
                {filteredRoles.length}
              </span>
              <span className="text-[14px] text-[#525069]">open roles</span>
            </div>
          </div>

          {/* Roles List */}
          <div className="divide-y divide-[#e7e7ea]">
            {filteredRoles.map((role) => (
              <div
                key={role.id}
                onClick={() => setSelectedRole(role)}
                className="group flex flex-col sm:flex-row sm:items-center justify-between py-6 px-3 hover:bg-[#fafafc] transition-colors rounded-[8px] cursor-pointer"
              >
                <div className="flex flex-col gap-1">
                  <h3 className="text-[18px] font-bold text-[#1a1a22] group-hover:text-[#614efa] transition-colors">
                    {role.title}
                  </h3>
                  <span className="text-[13px] font-medium text-[#757585]">
                    {role.deptName}
                  </span>
                </div>
                <div className="flex items-center gap-4 mt-2 sm:mt-0">
                  <span className="text-[14px] text-[#525069]">
                    {role.location}
                  </span>
                  <img
                    src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_arrow_right_24.svg"
                    alt="Apply"
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  />
                </div>
              </div>
            ))}

            {filteredRoles.length === 0 && (
              <div className="py-12 text-center text-[#757585] text-[16px]">
                No roles in this department right now. Check back soon!
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 8. Referral Banner */}
      <section className="py-12 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="bg-[#f7f7f9] border border-[#e7e7ea] rounded-[24px] p-8 md:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex flex-col gap-2 max-w-[700px]">
              <h3 className="text-[24px] md:text-[28px] font-bold text-[#1a1a22]">
                Know someone great? Refer them to Krisp.
              </h3>
              <p className="text-[16px] leading-[26px] text-[#525069]">
                If your referral turns into a hire, you’ll earn a cash reward — and the satisfaction of helping shape the future of AI-powered communication.
              </p>
            </div>
            <button
              onClick={() => setIsReferralModalOpen(true)}
              className="inline-flex items-center justify-center h-[48px] px-8 rounded-[10px] bg-[#1a1a22] hover:bg-[#333342] text-white text-[15px] font-bold transition-colors whitespace-nowrap cursor-pointer"
            >
              See referral program
            </button>
          </div>
        </div>
      </section>

      {/* 9. Recognition & Awards Section */}
      <section className="py-16 md:py-24 bg-[#fafafc]">
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
              title="Krisp Presentation"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* Role Application Modal */}
      {selectedRole && (
        <div
          className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedRole(null)}
        >
          <div
            className="relative w-full max-w-[560px] bg-white rounded-[20px] p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedRole(null)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 text-[20px]"
            >
              ✕
            </button>
            <span className="text-[12px] font-bold uppercase tracking-wider text-[#614efa] bg-[#614efa]/10 px-3 py-1 rounded-full">
              {selectedRole.deptName}
            </span>
            <h3 className="text-[24px] font-bold text-[#1a1a22] mt-3">
              {selectedRole.title}
            </h3>
            <p className="text-[14px] text-[#525069] mt-1">
              📍 {selectedRole.location}
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(`Thank you! Your application for "${selectedRole.title}" has been submitted.`);
                setSelectedRole(null);
              }}
              className="mt-6 flex flex-col gap-4"
            >
              <div>
                <label className="block text-[13px] font-semibold text-[#1a1a22] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Smith"
                  className="w-full h-[44px] px-3.5 border border-[#e7e7ea] rounded-[10px] text-[14px] focus:outline-none focus:border-[#614efa]"
                />
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-[#1a1a22] mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@domain.com"
                  className="w-full h-[44px] px-3.5 border border-[#e7e7ea] rounded-[10px] text-[14px] focus:outline-none focus:border-[#614efa]"
                />
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-[#1a1a22] mb-1">
                  LinkedIn URL / Portfolio *
                </label>
                <input
                  type="url"
                  required
                  placeholder="https://linkedin.com/in/..."
                  className="w-full h-[44px] px-3.5 border border-[#e7e7ea] rounded-[10px] text-[14px] focus:outline-none focus:border-[#614efa]"
                />
              </div>

              <button
                type="submit"
                className="w-full h-[48px] rounded-[10px] bg-[#614efa] hover:bg-[#4a3bbe] text-white font-bold text-[15px] transition-colors mt-2"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Referral Program Info Modal */}
      {isReferralModalOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setIsReferralModalOpen(false)}
        >
          <div
            className="relative w-full max-w-[500px] bg-white rounded-[20px] p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsReferralModalOpen(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 text-[20px]"
            >
              ✕
            </button>
            <h3 className="text-[22px] font-bold text-[#1a1a22]">
              Krisp Referral Program
            </h3>
            <p className="text-[14px] leading-[22px] text-[#525069] mt-2">
              Help us connect with top-tier engineers, product managers, and growth leaders. If your referral joins Krisp full-time, you'll receive a reward up to $2,500 based on the seniority and role category.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter candidate email or LinkedIn URL"
                className="w-full h-[44px] px-3.5 border border-[#e7e7ea] rounded-[10px] text-[14px] focus:outline-none focus:border-[#614efa]"
              />
              <button
                onClick={() => {
                  alert("Thank you! Referral recorded. Our talent team will reach out.");
                  setIsReferralModalOpen(false);
                }}
                className="w-full h-[48px] rounded-[10px] bg-[#614efa] hover:bg-[#4a3bbe] text-white font-bold text-[15px] transition-colors"
              >
                Submit Candidate Referral
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}