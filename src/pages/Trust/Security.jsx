import React, { useEffect } from "react";
import { Link } from "react-router-dom";

/**
 * Recreated authentic Krisp Security page.
 * Faithful replica of https://krisp.ai/security/
 */
export default function Security() {
  useEffect(() => {
    document.title = "Security at Krisp | Silgate Replica";
  }, []);

  return (
    <div className="w-full bg-white text-[#131032] font-sans antialiased">
      {/* Hero Section */}
      <section className="w-full bg-[#dfdcfe] py-16 md:py-24 border-b border-[#d0ccfc]">
        <div className="w-[calc(100%-48px)] max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Hero Content */}
          <div className="w-full lg:max-w-[540px]">
            <h1 className="text-[36px] sm:text-[44px] lg:text-[52px] font-bold text-[#131032] leading-[1.18] mb-6 tracking-tight">
              Security at Krisp
            </h1>
            <p className="text-[16px] sm:text-[17px] text-[#131032] leading-[28px] mb-6">
              At Krisp, we prioritize security and confidentiality in the digital landscape. Whether you need an AI tool to take meeting notes, cancel noise, localize accents, or translate speech, we offer reliable and well-tested solutions tailored to your needs.
            </p>
            <p className="text-[16px] sm:text-[17px] text-[#131032] leading-[28px]">
              <a
                href="https://trust.krisp.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#614efa] hover:text-[#4a3bbe] font-semibold underline transition-colors"
              >
                Our Trust Center
              </a>{" "}
              provides detailed insights into our security practices, including compliance standards, policies, and comprehensive controls. You can access security documentation and gain a clear view of how we protect your data.
            </p>
          </div>

          {/* Hero Graphic */}
          <div className="w-full lg:max-w-[570px] flex justify-center lg:justify-end">
            <img
              src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_intro_security.png"
              width="570"
              height="484"
              alt="Security at Krisp"
              className="w-full h-auto max-w-[520px] lg:max-w-[570px] object-contain drop-shadow-sm"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Security Feature Rows */}
      <section className="w-full py-16 md:py-28">
        <div className="w-[calc(100%-48px)] max-w-[1280px] mx-auto space-y-20 md:space-y-32">
          {/* Row 1: Call Center AI */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 max-w-[1096px] mx-auto">
            <div className="w-full lg:max-w-[465px]">
              <h2 className="text-[28px] sm:text-[34px] font-bold text-[#131032] mb-4 leading-[1.25]">
                Call Center AI
              </h2>
              <p className="text-[16px] text-[#525069] leading-[28px] mb-6">
                Krisp for Call Centers is designed with enterprise security in mind. It stores minimal data in Krisp cloud and gives full control to enterprise admin teams.
              </p>
              <Link
                to="/call-center-ai/voice-security"
                className="inline-flex items-center gap-1.5 text-[#614efa] hover:text-[#4a3bbe] font-semibold text-[15px] sm:text-[16px] transition-colors group"
              >
                <span>Discover the Security Measures of Krisp for Call Centers</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
            <div className="w-full lg:max-w-[522px] flex justify-center">
              <img
                src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_enterprise_security.png"
                width="522"
                height="395"
                alt="Security for Enterprises"
                className="w-full h-auto max-w-[480px] lg:max-w-[522px] object-contain"
                loading="lazy"
              />
            </div>
          </div>

          {/* Row 2: AI Meeting Assistant */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 max-w-[1096px] mx-auto">
            <div className="w-full lg:max-w-[487px] order-2 lg:order-1 flex justify-center">
              <img
                src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_notes_security.png"
                width="487"
                height="362"
                alt="Security for Meeting Notes"
                className="w-full h-auto max-w-[450px] lg:max-w-[487px] object-contain"
                loading="lazy"
              />
            </div>
            <div className="w-full lg:max-w-[465px] order-1 lg:order-2">
              <h2 className="text-[28px] sm:text-[34px] font-bold text-[#131032] mb-4 leading-[1.25]">
                AI Meeting Assistant
              </h2>
              <p className="text-[16px] text-[#525069] leading-[28px] mb-6">
                Krisp AI Meeting Assistant stores more data in Krisp Cloud (e.g. meeting transcripts, recordings, etc) and is designed for Teams. It provides flexible controls on data management, control and transparency.
              </p>
              <Link
                to="/ai-meeting-assistant"
                className="inline-flex items-center gap-1.5 text-[#614efa] hover:text-[#4a3bbe] font-semibold text-[15px] sm:text-[16px] transition-colors group"
              >
                <span>Discover the Security Measures of Krisp AI Meeting Assistant</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
