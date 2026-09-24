import React, { useState } from "react";
import Button from "../../components/common/Button";

/**
 * Contact Sales & Book a Demo Page.
 * Interactive demo request form for enterprise teams, contact centers, and developer trials.
 */
export default function ContactSales() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    companyName: "",
    companySize: "50-250",
    productInterest: "AI Meeting Assistant",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-20 md:py-28 bg-[#fafafb]">
      <div className="krisp-container">
        <div className="max-w-[850px] mx-auto bg-white rounded-[24px] p-8 md:p-14 shadow-lg border border-[#e7e7ea]">
          <div className="text-center max-w-[650px] mx-auto mb-10">
            <div className="flex justify-center mb-4">
              <img
                src="/silgate-logo.jpg"
                alt="Silgate Solutions"
                className="h-[52px] w-auto object-contain mix-blend-multiply"
              />
            </div>
            <h1 className="text-[34px] md:text-[44px] font-bold text-[#131032] mb-3">
              Contact <span className="gradient-purple">Silgate Solutions</span>
            </h1>
            <p className="text-[16px] md:text-[18px] text-[#525069]">
              Reach our team directly or request a demo of our Voice AI, Noise Cancellation, and Contact Center technologies.
            </p>
          </div>

          {/* Direct Contact Details Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 p-6 rounded-[20px] bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] border border-[#e2e8f0]">
            <a
              href="mailto:manoj@silgatehiring.com"
              className="flex items-start gap-3 p-3.5 rounded-[12px] bg-white border border-[#e2e8f0] hover:border-[#614efa] transition-all group shadow-xs"
            >
              <div className="w-10 h-10 rounded-[10px] bg-[#614efa]/10 flex items-center justify-center text-[#614efa] text-[18px] flex-shrink-0 group-hover:scale-105 transition-transform">
                ✉
              </div>
              <div className="min-w-0">
                <div className="text-[12px] font-bold text-[#614efa] uppercase tracking-wider mb-0.5">Email Us</div>
                <div className="text-[14px] font-semibold text-[#131032] group-hover:text-[#614efa] break-all">
                  manoj@silgatehiring.com
                </div>
              </div>
            </a>

            <a
              href="tel:+918108810916"
              className="flex items-start gap-3 p-3.5 rounded-[12px] bg-white border border-[#e2e8f0] hover:border-[#614efa] transition-all group shadow-xs"
            >
              <div className="w-10 h-10 rounded-[10px] bg-[#614efa]/10 flex items-center justify-center text-[#614efa] text-[18px] flex-shrink-0 group-hover:scale-105 transition-transform">
                📞
              </div>
              <div>
                <div className="text-[12px] font-bold text-[#614efa] uppercase tracking-wider mb-0.5">Call Us</div>
                <div className="text-[14px] font-semibold text-[#131032] group-hover:text-[#614efa]">
                  +91 81088 10916
                </div>
              </div>
            </a>

            <div className="flex items-start gap-3 p-3.5 rounded-[12px] bg-white border border-[#e2e8f0] shadow-xs">
              <div className="w-10 h-10 rounded-[10px] bg-[#614efa]/10 flex items-center justify-center text-[#614efa] text-[18px] flex-shrink-0">
                📍
              </div>
              <div>
                <div className="text-[12px] font-bold text-[#614efa] uppercase tracking-wider mb-0.5">Office Address</div>
                <p className="text-[13px] text-[#525069] leading-snug">
                  Road No 8, SG Barve RD, Wagle Estate, Padwal Nagar, Thane West, Maharashtra 400604
                </p>
              </div>
            </div>
          </div>

          {submitted ? (
            <div className="bg-[#e8faf6] border border-[#cef4ec] rounded-[16px] p-8 text-center text-[#008065]">
              <div className="text-[24px] font-bold mb-2">Thank you!</div>
              <p className="text-[16px]">
                Your message has been received. A Silgate Solutions representative will reach out within 24 business hours to assist you.
              </p>
            </div>
          ) : (

          <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[14px] font-semibold text-[#1a1a22] mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    className="w-full h-[48px] px-4 rounded-[10px] border border-[#e7e7ea] focus:border-[#614efa] outline-none text-[15px]"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label className="block text-[14px] font-semibold text-[#1a1a22] mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    className="w-full h-[48px] px-4 rounded-[10px] border border-[#e7e7ea] focus:border-[#614efa] outline-none text-[15px]"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[14px] font-semibold text-[#1a1a22] mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.workEmail}
                    onChange={(e) =>
                      setFormData({ ...formData, workEmail: e.target.value })
                    }
                    className="w-full h-[48px] px-4 rounded-[10px] border border-[#e7e7ea] focus:border-[#614efa] outline-none text-[15px]"
                    placeholder="jane@company.com"
                  />
                </div>
                <div>
                  <label className="block text-[14px] font-semibold text-[#1a1a22] mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) =>
                      setFormData({ ...formData, companyName: e.target.value })
                    }
                    className="w-full h-[48px] px-4 rounded-[10px] border border-[#e7e7ea] focus:border-[#614efa] outline-none text-[15px]"
                    placeholder="Acme Corp"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[14px] font-semibold text-[#1a1a22] mb-2">
                    Company Size
                  </label>
                  <select
                    value={formData.companySize}
                    onChange={(e) =>
                      setFormData({ ...formData, companySize: e.target.value })
                    }
                    className="w-full h-[48px] px-4 rounded-[10px] border border-[#e7e7ea] focus:border-[#614efa] outline-none text-[15px] bg-white cursor-pointer"
                  >
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="50-250">50-250 employees</option>
                    <option value="251-1000">251-1,000 employees</option>
                    <option value="1000+">1,000+ employees</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[14px] font-semibold text-[#1a1a22] mb-2">
                    Product of Interest
                  </label>
                  <select
                    value={formData.productInterest}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        productInterest: e.target.value
                      })
                    }
                    className="w-full h-[48px] px-4 rounded-[10px] border border-[#e7e7ea] focus:border-[#614efa] outline-none text-[15px] bg-white cursor-pointer"
                  >
                    <option value="AI Meeting Assistant">
                      AI Meeting Assistant
                    </option>
                    <option value="Call Center AI">Call Center AI</option>
                    <option value="Voice AI SDK">Voice AI SDK &amp; API</option>
                    <option value="All Products">All Solutions</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[14px] font-semibold text-[#1a1a22] mb-2">
                  Tell us about your team's needs
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full p-4 rounded-[10px] border border-[#e7e7ea] focus:border-[#614efa] outline-none text-[15px]"
                  placeholder="How many seats are you looking to equip? Any specific software integration needs?"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full h-[50px] bg-[#614efa] hover:bg-[#4a3bbe] text-white font-bold rounded-[10px] text-[16px] transition-colors cursor-pointer shadow-md"
                >
                  Submit Demo Request
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
