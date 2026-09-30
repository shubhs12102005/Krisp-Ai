import React, { useState } from "react";
import { Link } from "react-router-dom";

/**
 * Help Center Page - High-Fidelity Replica of Krisp Help Center (help.krisp.ai)
 * Includes:
 * - Search Hero: "How can we help?" with instant live article search
 * - Quick suggestion tags ("Getting Started", "Audio Setup", "Billing", "SSO / SCIM")
 * - 6 Comprehensive Knowledge Base Category Cards
 * - Popular & Frequently Read Support Guides
 * - Interactive In-Page Article Reader modal / expansion
 * - "Submit a Request" Ticket Modal with realistic submission flow
 * - Live Status Indicator (All Systems Operational)
 */
export default function Help_Center() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeArticle, setActiveArticle] = useState(null);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [ticketSubmitted, setTicketSubmitted] = useState(false);
  const [ticketRef, setTicketRef] = useState("KSP-829143");

  const categories = [
    {
      id: "ai-meeting-assistant",
      title: "AI Meeting Assistant",
      icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_transcript_purple.svg",
      description: "Transcripts, bot-free notes, summaries, and CRM sync",
      articlesCount: 28,
      articles: [
        {
          id: "bot-free-note-taking",
          title: "How bot-free AI Note Taker records and transcribes meetings",
          desc: "Krisp captures system audio directly on your device without an external bot joining the call.",
          content:
            "Unlike traditional note-taking bots that request guest entry into your meeting rooms, Krisp hooks into the OS virtual audio driver (CoreAudio on macOS, WASAPI on Windows). This ensures complete client privacy, prevents awkward bot notifications, and works universally across Zoom, Teams, Meet, and proprietary VoIP softphones."
        },
        {
          id: "edit-regenerate-transcripts",
          title: "Accessing, editing, and regenerating meeting transcripts",
          desc: "Step-by-step guide to reviewing speaker diarization and updating AI meeting notes.",
          content:
            "After your meeting concludes, navigate to your Krisp Web Portal under 'My Meetings'. Click the transcript section to edit speaker names, highlight key sentences, or click 'Regenerate Summary' with custom prompt instructions such as 'Executive Brief' or 'Sales Action Items'."
        },
        {
          id: "calendar-integration",
          title: "Connecting Google Calendar and Microsoft Outlook",
          desc: "Automatically sync upcoming calls for zero-click transcription triggers.",
          content:
            "Open the Krisp Desktop App preferences, select 'Integrations', and connect your Google or Microsoft 365 work account. Krisp will automatically detect upcoming meeting links and notify you 1 minute before the start time."
        }
      ]
    },
    {
      id: "call-center-ai",
      title: "Call Center AI",
      icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_headset_purple_new.svg",
      description: "Noise removal, accent conversion, and speech analytics for BPOs",
      articlesCount: 34,
      articles: [
        {
          id: "cc-noise-cancellation-setup",
          title: "Configuring Noise Cancellation for agent workstations",
          desc: "Deploying Krisp across Citrix, Amazon WorkSpaces, and VDI thin clients.",
          content:
            "Krisp provides enterprise MSI installers and IGEL OS packages designed for virtualized call center desktops. Ensure bi-directional audio redirection is enabled and CPU throttling is turned off for background worker threads."
        },
        {
          id: "accent-conversion-best-practices",
          title: "Accent Conversion: Voice clarity and model latency guidelines",
          desc: "Tuning agent headsets and microphones for optimal real-time phoneme translation.",
          content:
            "For optimal Accent Conversion results, agents should use directional USB headsets with at least 16 kHz sampling. Krisp's real-time engine operates with sub-150ms round-trip latency, maintaining natural conversational pauses."
        },
        {
          id: "speech-analytics-scoring",
          title: "Setting up 100% Call QA scoring & compliance rules",
          desc: "Customizing automated scorecard thresholds and banned phrase alerts.",
          content:
            "Supervisors can define compliance keywords (e.g. required disclosure statements), customer sentiment triggers, and agent talk-to-listen ratios in the Krisp Admin Dashboard."
        }
      ]
    },
    {
      id: "security-trust",
      title: "About Krisp & Security",
      icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/glyph_shield.svg",
      description: "Architecture, SOC 2, HIPAA, zero voice recording storage",
      articlesCount: 19,
      articles: [
        {
          id: "on-device-processing",
          title: "On-device AI voice processing architecture",
          desc: "How noise cancellation and voice models run locally without sending audio to the cloud.",
          content:
            "All real-time noise cancellation and voice isolation models run locally on your device using optimized CPU and GPU neural inference runtimes. Your raw voice audio never leaves your machine during noise cancellation."
        },
        {
          id: "soc2-compliance",
          title: "SOC 2 Type II, HIPAA, and GDPR compliance certifications",
          desc: "Download security whitepapers and compliance auditor reports.",
          content:
            "Krisp undergoes regular independent third-party audits for SOC 2 Type II compliance and meets strict HIPAA security criteria for healthcare organizations. Enterprise customers can request a signed Business Associate Agreement (BAA)."
        }
      ]
    },
    {
      id: "admin-portal",
      title: "Admin Portal & Teams",
      icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_nav_sdk.svg",
      description: "SSO/SCIM, Okta, Google Workspace, seat licenses, device policies",
      articlesCount: 22,
      articles: [
        {
          id: "sso-saml-setup",
          title: "Setting up SAML 2.0 Single Sign-On (SSO) with Okta and Azure AD",
          desc: "Configure identity provider endpoints, entity IDs, and X.509 certificates.",
          content:
            "Navigate to Admin Dashboard > Settings > Security > SAML SSO. Copy the ACS URL and Audience URI to your identity provider (Okta, Microsoft Entra ID, JumpCloud, or Google Workspace), then paste back your Metadata XML."
        },
        {
          id: "scim-user-provisioning",
          title: "Automated user lifecycle provisioning via SCIM 2.0",
          desc: "Automatically allocate and deprovision team licenses based on IdP group membership.",
          content:
            "Generate a SCIM Bearer token in the Krisp Admin Portal. Connect it to your IdP's provisioning tab to sync user firstName, lastName, email, and auto-assign users to appropriate billing workspaces."
        }
      ]
    },
    {
      id: "troubleshooting",
      title: "Troubleshooting & Network",
      icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_echo_nav.svg",
      description: "Firewall ports, audio driver selection, echo issues, and HAR logs",
      articlesCount: 31,
      articles: [
        {
          id: "firewall-proxy-configuration",
          title: "Firewall and proxy configuration for enterprise networks",
          desc: "Allowlisted domain endpoints and WebSocket ports for real-time services.",
          content:
            "Enterprise firewalls must allow outbound HTTPS and WSS traffic to *.krisp.ai over port 443. If your company uses SSL inspection/interception proxies, ensure krisp.ai certificate pinning exceptions are configured."
        },
        {
          id: "audio-echo-troubleshooting",
          title: "Resolving audio echo or robotic voice issues",
          desc: "Diagnosing hardware loops, duplicate virtual mics, and sample rate mismatches.",
          content:
            "Ensure you do not select 'Krisp Speaker' and external speakers simultaneously if physical microphones are picking up external monitor speakers. Always match microphone sample rates to 48,000 Hz in Windows Sound Control Panel."
        }
      ]
    },
    {
      id: "getting-started",
      title: "Getting Started & Install",
      icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_note_taker.svg",
      description: "macOS & Windows silent install, Zoom, Teams, and Meet configuration",
      articlesCount: 17,
      articles: [
        {
          id: "install-windows-mac",
          title: "Installing Krisp on Windows 10/11 and macOS",
          desc: "Download packages, silent command line install flags, and permissions.",
          content:
            "For macOS, allow Microphone and Accessibility permissions in System Settings > Privacy & Security. For enterprise Windows deployment, execute: msiexec /i Krisp.msi /qn ALLUSERS=1."
        },
        {
          id: "setup-with-zoom-teams",
          title: "Configuring Krisp with Zoom, MS Teams, and Google Meet",
          desc: "Select Krisp Microphone and Krisp Speaker inside your calling apps.",
          content:
            "Open your meeting application audio settings. Set the Microphone to 'Krisp Microphone' and Speaker to 'Krisp Speaker'. Inside the Krisp app, select your physical headset."
        }
      ]
    }
  ];

  // Flat list of all articles for searching
  const allArticles = categories.flatMap((cat) =>
    cat.articles.map((a) => ({ ...a, categoryTitle: cat.title, catId: cat.id }))
  );

  const filteredArticles = allArticles.filter((art) => {
    const matchesCat =
      selectedCategory === "all" || art.catId === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-white text-[#1a1a22] overflow-hidden min-h-screen">
      {/* 1. Help Center Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-[#fafafc] border-b border-[#f0f0f4] text-center">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e8f2ff] text-[#0066cc] text-[13px] font-bold mb-4">
            <span className="w-2 h-2 rounded-full bg-[#0066cc] animate-pulse"></span>
            Krisp Knowledge Base &amp; Support
          </div>

          <h1 className="text-[36px] sm:text-[46px] md:text-[54px] font-bold text-[#1a1a22] tracking-tight">
            How can we help?
          </h1>
          <p className="text-[16px] sm:text-[18px] text-[#525069] max-w-[620px] mx-auto mt-3">
            Search our setup guides, technical troubleshooting, and enterprise documentation.
          </p>

          {/* Search Box */}
          <div className="max-w-[720px] mx-auto mt-8 relative">
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles, guides, and troubleshooting..."
              className="w-full h-[56px] pl-14 pr-6 rounded-[16px] border-2 border-[#e7e7ea] bg-white text-[16px] text-[#1a1a22] shadow-sm focus:outline-none focus:border-[#614efa] transition-colors"
            />
            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-[20px] pointer-events-none">
              🔍
            </span>
          </div>

          {/* Quick Filter Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-[13px]">
            <span className="text-[#757585] font-semibold mr-1">Popular:</span>
            {[
              "Getting Started",
              "Noise Cancellation",
              "AI Note Taker",
              "Billing & Subscriptions",
              "Mac / Windows",
              "Network Setup"
            ].map((tag) => (
              <button
                key={tag}
                onClick={() => setSearchQuery(tag)}
                className="px-3 py-1 rounded-full bg-white border border-[#e7e7ea] hover:border-[#614efa] hover:text-[#614efa] text-[#525069] transition-colors cursor-pointer"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. System Status Bar */}
      <section className="bg-white border-b border-[#e7e7ea] py-3.5 px-6">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between text-[13px]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#008065]"></span>
            <span className="font-semibold text-[#1a1a22]">
              All Systems Operational
            </span>
            <span className="hidden sm:inline text-[#757585]">• 99.99% Uptime</span>
          </div>
          <button
            onClick={() => setIsSubmitModalOpen(true)}
            className="text-[#614efa] font-bold hover:underline"
          >
            Submit a support ticket →
          </button>
        </div>
      </section>

      {/* 3. Main Categories Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-[26px] sm:text-[30px] font-bold text-[#1a1a22]">
              Browse by category
            </h2>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-3 py-1.5 rounded-[8px] text-[13px] font-semibold cursor-pointer ${
                  selectedCategory === "all"
                    ? "bg-[#1a1a22] text-white"
                    : "bg-[#f4f4f5] text-[#525069]"
                }`}
              >
                All Categories
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`rounded-[20px] border p-7 transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  selectedCategory === cat.id
                    ? "border-[#614efa] shadow-md bg-[#fafafc]"
                    : "border-[#e7e7ea] hover:border-[#614efa]/50 hover:shadow-sm bg-white"
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-[14px] bg-[#f4f2ff] flex items-center justify-center p-2.5 mb-5">
                    <img
                      src={cat.icon}
                      alt={cat.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-[20px] font-bold text-[#1a1a22] mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-[14px] leading-[22px] text-[#525069]">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#f4f4f5] flex items-center justify-between text-[13px]">
                  <span className="font-semibold text-[#614efa]">
                    {cat.articlesCount} articles
                  </span>
                  <span className="text-gray-400 group-hover:translate-x-1">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Filtered Support Articles List */}
      <section className="py-12 md:py-16 bg-[#fafafc] border-t border-[#f0f0f4]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-[24px] sm:text-[28px] font-bold text-[#1a1a22]">
                {searchQuery
                  ? `Search results for "${searchQuery}"`
                  : selectedCategory === "all"
                  ? "Popular support guides"
                  : categories.find((c) => c.id === selectedCategory)?.title}
              </h2>
              <p className="text-[14px] text-[#757585] mt-1">
                Showing {filteredArticles.length} guides
              </p>
            </div>

            {(selectedCategory !== "all" || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="text-[14px] text-[#614efa] font-bold hover:underline"
              >
                Reset filters
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredArticles.map((art) => (
              <div
                key={art.id}
                onClick={() => setActiveArticle(art)}
                className="p-6 rounded-[16px] border border-[#e7e7ea] bg-white hover:border-[#614efa] hover:shadow-sm transition-all cursor-pointer flex flex-col justify-between gap-3"
              >
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#614efa]">
                    {art.categoryTitle}
                  </span>
                  <h3 className="text-[17px] font-bold text-[#1a1a22] mt-1 hover:text-[#614efa] transition-colors">
                    {art.title}
                  </h3>
                  <p className="text-[14px] leading-[20px] text-[#525069] mt-2">
                    {art.desc}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[13px] font-bold text-[#614efa]">
                  <span>Read full guide</span>
                  <span>→</span>
                </div>
              </div>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="py-16 text-center text-[#757585]">
              <p className="text-[18px] font-bold text-[#1a1a22]">
                No matching articles found.
              </p>
              <p className="text-[14px] mt-2">
                Need immediate help? Reach out directly to our dedicated engineering support team.
              </p>
              <button
                onClick={() => setIsSubmitModalOpen(true)}
                className="mt-6 px-6 py-2.5 rounded-[10px] bg-[#614efa] hover:bg-[#4a3bbe] text-white font-bold text-[14px] transition-colors"
              >
                Open a Support Ticket
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 5. Contact Support Banner */}
      <section className="py-16 bg-white border-t border-[#e7e7ea]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="rounded-[24px] bg-[#1a1a22] text-white p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex flex-col gap-2 max-w-[640px] text-center lg:text-left">
              <h3 className="text-[26px] sm:text-[32px] font-bold">
                Can't find what you're looking for?
              </h3>
              <p className="text-[15px] text-[#a1a1aa] leading-[24px]">
                Our dedicated 24/7 technical customer support engineers are here to assist with audio configurations, enterprise licenses, and custom deployments.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setIsSubmitModalOpen(true)}
                className="h-[48px] px-8 rounded-[10px] bg-[#614efa] hover:bg-[#4a3bbe] text-white font-bold text-[15px] transition-colors cursor-pointer"
              >
                Submit a request
              </button>
              <Link
                to="/contact-sales"
                className="h-[48px] px-8 rounded-[10px] bg-white/10 hover:bg-white/20 text-white font-bold text-[15px] border border-white/20 transition-colors flex items-center justify-center"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Article Detail Reading Modal */}
      {activeArticle && (
        <div
          className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setActiveArticle(null)}
        >
          <div
            className="relative w-full max-w-[720px] bg-white rounded-[24px] p-6 sm:p-10 shadow-2xl my-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-800 text-[20px]"
            >
              ✕
            </button>

            <span className="text-[12px] font-bold uppercase tracking-wider text-[#614efa] bg-[#614efa]/10 px-3 py-1 rounded-full">
              {activeArticle.categoryTitle}
            </span>

            <h2 className="text-[26px] sm:text-[30px] font-bold text-[#1a1a22] mt-4 mb-2">
              {activeArticle.title}
            </h2>
            <p className="text-[15px] text-[#525069] mb-6">
              {activeArticle.desc}
            </p>

            <div className="prose max-w-none text-[15px] leading-[28px] text-[#1a1a22] border-t border-b border-[#e7e7ea] py-6 my-6">
              <p>{activeArticle.content}</p>
              <div className="p-4 rounded-[12px] bg-[#f7f7f9] border border-[#e7e7ea] mt-4">
                <span className="font-bold text-[#1a1a22] block mb-1">
                  💡 Pro-Tip:
                </span>
                <span>
                  Make sure your audio input device is selected properly in both your operating system settings and inside your video conferencing app.
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[13px] text-[#757585]">
              <span>Was this article helpful?</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => alert("Thank you for your feedback!")}
                  className="px-4 py-1.5 rounded-[8px] border border-[#e7e7ea] hover:bg-gray-100 font-semibold"
                >
                  👍 Yes
                </button>
                <button
                  onClick={() => alert("Thank you for your feedback!")}
                  className="px-4 py-1.5 rounded-[8px] border border-[#e7e7ea] hover:bg-gray-100 font-semibold"
                >
                  👎 No
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Submit Ticket Modal */}
      {isSubmitModalOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => {
            setIsSubmitModalOpen(false);
            setTicketSubmitted(false);
          }}
        >
          <div
            className="relative w-full max-w-[560px] bg-white rounded-[24px] p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => {
                setIsSubmitModalOpen(false);
                setTicketSubmitted(false);
              }}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-800 text-[20px]"
            >
              ✕
            </button>

            {ticketSubmitted ? (
              <div className="text-center py-8 flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-[#e8faf6] flex items-center justify-center text-[#008065] text-[28px]">
                  ✓
                </div>
                <h3 className="text-[24px] font-bold text-[#1a1a22]">
                  Ticket Submitted Successfully
                </h3>
                <p className="text-[14px] text-[#525069] max-w-[400px]">
                  Your request has been routed to our technical support team. Ticket reference #{ticketRef}.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitModalOpen(false);
                    setTicketSubmitted(false);
                  }}
                  className="mt-4 px-6 py-2.5 rounded-[10px] bg-[#614efa] text-white font-bold text-[14px]"
                >
                  Close
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-[24px] font-bold text-[#1a1a22]">
                  Submit a Support Request
                </h3>
                <p className="text-[14px] text-[#525069] mt-1 mb-6">
                  Please provide details so we can assist you promptly.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setTicketRef("KSP-" + Math.floor(100000 + Math.random() * 900000));
                    setTicketSubmitted(true);
                  }}
                  className="flex flex-col gap-4 text-left"
                >
                  <div>
                    <label className="block text-[13px] font-semibold text-[#1a1a22] mb-1">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="w-full h-[42px] px-3.5 border border-[#e7e7ea] rounded-[10px] text-[14px] focus:outline-none focus:border-[#614efa]"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-semibold text-[#1a1a22] mb-1">
                      Category *
                    </label>
                    <select className="w-full h-[42px] px-3.5 border border-[#e7e7ea] rounded-[10px] text-[14px] bg-white focus:outline-none focus:border-[#614efa]">
                      <option>AI Meeting Assistant</option>
                      <option>Call Center AI</option>
                      <option>Audio & Noise Troubleshooting</option>
                      <option>Billing & Invoices</option>
                      <option>Enterprise SSO / SCIM</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[13px] font-semibold text-[#1a1a22] mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Brief summary of the issue"
                      className="w-full h-[42px] px-3.5 border border-[#e7e7ea] rounded-[10px] text-[14px] focus:outline-none focus:border-[#614efa]"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-semibold text-[#1a1a22] mb-1">
                      Description *
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Please include OS version, microphone model, or error logs if available."
                      className="w-full p-3 border border-[#e7e7ea] rounded-[10px] text-[14px] focus:outline-none focus:border-[#614efa]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full h-[46px] rounded-[10px] bg-[#614efa] hover:bg-[#4a3bbe] text-white font-bold text-[15px] transition-colors mt-2"
                  >
                    Submit Ticket
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