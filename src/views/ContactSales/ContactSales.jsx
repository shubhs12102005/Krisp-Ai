import React, { useState } from "react";
import Button from "../../components/common/Button";

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
          <div className="text-center max-w-[600px] mx-auto mb-10">
            <h1 className="text-[34px] md:text-[44px] font-bold text-[#131032] mb-3">
              Book a <span className="gradient-purple">Demo</span>
            </h1>
            <p className="text-[16px] md:text-[18px] text-[#525069]">
              See how Krisp Voice AI can transform meeting productivity, eliminate background noise, and automate summaries across your team.
            </p>
          </div>

          {submitted ? (
            <div className="bg-[#e8faf6] border border-[#cef4ec] rounded-[16px] p-8 text-center text-[#008065]">
              <div className="text-[24px] font-bold mb-2">Thank you!</div>
              <p className="text-[16px]">
                Your request has been received. A Krisp product specialist will reach out within 24 business hours to schedule your live walkthrough.
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
