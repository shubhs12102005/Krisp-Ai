import React, { useEffect } from "react";

/**
 * Recreated authentic Krisp Accessibility page.
 * Faithful replica of https://krisp.ai/accessibility/
 */
export default function Accessibility() {
  useEffect(() => {
    document.title = "Our Commitment to Accessibility | Silgate Replica";
  }, []);

  return (
    <div className="w-full bg-white text-[#131032] font-sans antialiased min-h-[60vh]">
      <section className="w-[calc(100%-48px)] max-w-[1280px] mx-auto py-16 md:py-24">
        {/* Main Title */}
        <h1 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-[#131032] leading-[1.25] tracking-tight mb-8 md:mb-12">
          Our Commitment to Accessibility
        </h1>

        {/* Accessibility Statement Body */}
        <div className="max-w-4xl text-[16px] md:text-[17px] leading-[28px] md:leading-[32px] text-[#131032] font-normal space-y-6">
          <p>
            Krisp is committed to making our website’s content accessible and user-friendly to everyone. If you are having difficulty viewing or navigating the content on this website, or notice any content, feature, or functionality that you believe is not fully accessible to people with disabilities, please email our team at{" "}
            <a
              href="mailto:accessibility@krisp.ai"
              className="text-[#614efa] hover:text-[#4a3bbe] font-semibold underline transition-colors"
            >
              accessibility@krisp.ai
            </a>{" "}
            with “Disabled Access” in the subject line and describe the specific feature you feel is not fully accessible or a suggestion for improvement. We take your feedback seriously and will consider it as we evaluate ways to accommodate all of our customers and our overall accessibility policies. Additionally, while we do not control such vendors, we strongly encourage vendors of third-party digital content to provide content that is accessible and user-friendly.
          </p>
        </div>
      </section>
    </div>
  );
}
