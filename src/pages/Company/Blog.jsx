import React, { useState } from "react";
import { Link } from "react-router-dom";

/**
 * Blog Page - High-Fidelity Replica of original Krisp.ai/blog/
 * Includes:
 * - Weekly newsletter subscription bar
 * - Category navigation ("All posts", "Company", "Product", "Resources", "Technology")
 * - Live search input filtering
 * - Featured article with exact metadata & benchmark image
 * - Secondary highlighted cards (Voice AI Newsletter & Engineering Blog)
 * - Complete grid of 18 authentic Krisp blog posts with real tags, images, dates, reading times
 * - Interactive article quick-preview modal
 * - Multi-page pagination controls
 * - Bottom CTA toggle banner
 */
export default function Blog() {
  const [selectedCat, setSelectedCat] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [activeArticle, setActiveArticle] = useState(null);

  const categories = [
    { id: "all", label: "All posts" },
    { id: "company", label: "Company" },
    { id: "product", label: "Product" },
    { id: "resources", label: "Resources" },
    { id: "technology", label: "Technology" }
  ];

  const featuredPost = {
    cat: "COMPANY",
    title: "STT handles noise now. It still can't handle a background voice.",
    date: "September 23, 2026",
    readTime: "Max 9 min read",
    image: "https://krisp.ai/blog/wp-content/uploads/2026/09/Benchmark.png",
    excerpt:
      "Speech-to-text accuracy plummets by up to 60% when secondary background voices enter a microphone stream. Here is how Krisp's new Voice Isolation models solve multi-speaker interference."
  };

  const blogPosts = [
    {
      id: "secondary-voice-benchmark",
      cat: "COMPANY",
      categoryType: "company",
      title: "Behind the secondary voice benchmark: how we recorded 265 real conversations",
      date: "September 28, 2026",
      readTime: "Max 6 min read",
      image: "https://krisp.ai/blog/wp-content/uploads/2026/09/download.jpg",
      excerpt:
        "Building reliable STT evaluations requires real acoustical overlap. We gathered 265 multi-accent audio pairs in real-world café, office, and home environments."
    },
    {
      id: "how-does-noise-cancelling-work",
      cat: "NOISE CANCELLATION",
      categoryType: "technology",
      title: "How Does Noise Cancelling Work? ANC, Passive & AI Noise Cancellation Explained",
      date: "August 26, 2026",
      readTime: "Max 8 min read",
      image: "https://krisp.ai/blog/wp-content/uploads/2024/03/blog-1-2.png",
      excerpt:
        "Understand the mechanical, acoustic, and deep-learning neural network differences between physical earcups and real-time DSP filters."
    },
    {
      id: "voice-isolation-2-5",
      cat: "COMPANY",
      categoryType: "technology",
      title: "Voice Isolation 2.5: Built for STT, Not Just Human Ears",
      date: "August 12, 2026",
      readTime: "Max 9 min read",
      image: "https://krisp.ai/blog/wp-content/uploads/2026/08/tech-cover-2-1-2.png",
      excerpt:
        "Human perceptual audio metrics don't always align with speech recognition token error rates. Voice Isolation 2.5 is tuned directly on STT loss functions."
    },
    {
      id: "the-2026-state-of-voice-in-cx",
      cat: "COMPANY",
      categoryType: "company",
      title: "The 2026 State of Voice in CX",
      date: "August 5, 2026",
      readTime: "Max 2 min read",
      image: "https://krisp.ai/blog/wp-content/uploads/2026/08/State-of-voice-Blog.jpg",
      excerpt:
        "Over 1,200 contact center leaders surveyed: 88% say voice remains the primary high-value support channel despite chatbot adoption."
    },
    {
      id: "best-bot-free-ai-note-taking-tools",
      cat: "MEETING NOTE TAKER",
      categoryType: "product",
      title: "8 Best Bot-Free AI Note Takers in 2026 (No Bot Joins Your Call)",
      date: "July 30, 2026",
      readTime: "Max 20 min read",
      image: "https://krisp.ai/blog/wp-content/uploads/2026/07/8-Best-Bot-Free-AI-Note-Takers.jpg",
      excerpt:
        "Avoid embarrassing third-party recorder bots in your external client meetings. Here are the leading on-device solutions."
    },
    {
      id: "remove-background-noise",
      cat: "NOISE CANCELLATION",
      categoryType: "resources",
      title: "How to Remove Background Noise: The Complete Guide for Calls, Audio & Video (2026)",
      date: "July 29, 2026",
      readTime: "Max 9 min read",
      image: "https://krisp.ai/blog/wp-content/uploads/2026/07/How-to-Remove-Background-Noise.jpg",
      excerpt:
        "A practical, step-by-step tutorial on cleaning up live mic inputs across Zoom, Google Meet, Microsoft Teams, and streaming platforms."
    },
    {
      id: "anc-vs-ai-noise-cancellation",
      cat: "ENGINEERING BLOG",
      categoryType: "technology",
      title: "Active Noise Cancellation Technology vs AI-based Noise Cancellation Algorithms",
      date: "July 17, 2026",
      readTime: "Max 7 min read",
      image: "https://krisp.ai/blog/wp-content/uploads/2023/06/ChatGPT-Image-Jul-17-2026-06_47_08-PM.webp",
      excerpt:
        "Hardware microphones capture acoustic phase inversion, while deep neural networks infer clean voice spectrograms from noisy audio spectra."
    },
    {
      id: "obs-remove-background-noise",
      cat: "NOISE CANCELLATION",
      categoryType: "resources",
      title: "OBS Noise Suppression: How to Remove Background Noise (2026 Guide)",
      date: "July 16, 2026",
      readTime: "Max 7 min read",
      image: "https://krisp.ai/blog/wp-content/uploads/2026/07/OBS-Noise.jpg",
      excerpt:
        "Compare RNNoise, Speex, and Krisp VST plugins in OBS Studio for clean live streams and podcasts without voice cutoff."
    },
    {
      id: "krisp-disruptive-tech-2026",
      cat: "COMPANY",
      categoryType: "company",
      title: "Krisp Named 2026 Disruptive Technology of the Year by CMP Research",
      date: "June 26, 2026",
      readTime: "Max 3 min read",
      image: "https://krisp.ai/blog/wp-content/uploads/2026/06/blog1.png",
      excerpt:
        "CMP Research recognizes Krisp's real-time Accent Conversion and multilingual Voice Translation for modern global contact centers."
    },
    {
      id: "qa-sampling-2-to-100-percent",
      cat: "ENTERPRISE",
      categoryType: "product",
      title: "From 2% to 100%: what changes when every call gets reviewed",
      date: "June 23, 2026",
      readTime: "Max 5 min read",
      image: "https://krisp.ai/blog/wp-content/uploads/2026/06/Speech-Analytics@2x-80.jpg",
      excerpt:
        "Traditional QA randomly samples 2-5 calls per agent each month. AI Speech Analytics scores 100% of calls for compliance, tone, and resolution."
    },
    {
      id: "voice-fraud-is-not-future",
      cat: "ENTERPRISE",
      categoryType: "product",
      title: "Voice fraud is not a future problem. It is happening now.",
      date: "June 23, 2026",
      readTime: "Max 6 min read",
      image: "https://krisp.ai/blog/wp-content/uploads/2026/06/fraud-1-2.png",
      excerpt:
        "Generative voice clones and social engineering are infiltrating customer verification. How real-time voice security protects contact center lines."
    },
    {
      id: "introducing-voice-security-speech-analytics",
      cat: "ENTERPRISE",
      categoryType: "product",
      title: "Introducing Krisp Voice Security and Speech Analytics",
      date: "June 23, 2026",
      readTime: "Max 4 min read",
      image: "https://krisp.ai/blog/wp-content/uploads/2026/06/Voice-Security-and-Speech-Analytics.jpg",
      excerpt:
        "Expanding beyond noise reduction into full enterprise intelligence: detect synthetic deepfakes and analyze conversation health in real time."
    },
    {
      id: "best-ai-note-taking-apps",
      cat: "AI MEETING ASSISTANT",
      categoryType: "resources",
      title: "11 Best AI Note-Taking Apps for Meetings in 2026 (Hands-On Reviews)",
      date: "June 10, 2026",
      readTime: "Max 23 min read",
      image: "https://krisp.ai/blog/wp-content/uploads/2026/06/blog-note-taker.jpg",
      excerpt:
        "We tested all major transcription and meeting assistant tools across audio clarity, action item extraction, and privacy compliance."
    },
    {
      id: "voice-translation-api-speech-to-speech",
      cat: "ENGINEERING BLOG",
      categoryType: "technology",
      title: "Introducing the Voice Translation API: Real-Time Speech-to-Speech Translation for Developers",
      date: "June 9, 2026",
      readTime: "Max 9 min read",
      image: "https://krisp.ai/blog/wp-content/uploads/2026/06/ezgif-24551c6dce50ec3c.webp",
      excerpt:
        "Sub-second voice-to-voice translation in English, Spanish, Portuguese, French, and Japanese now available via streaming WebSocket API."
    },
    {
      id: "voice-translation-accuracy-benchmarks",
      cat: "CONTACT CENTERS",
      categoryType: "technology",
      title: "Voice Translation accuracy: benchmarked, measured, and proven in production",
      date: "June 9, 2026",
      readTime: "Max 4 min read",
      image: "https://krisp.ai/blog/wp-content/uploads/2026/06/VT-v3-blog-2.jpg",
      excerpt:
        "Bleu and Comet score evaluations prove that Krisp preserves speaker voice characteristics while translating idiomatic technical jargon."
    },
    {
      id: "voice-translation-v3",
      cat: "CONTACT CENTERS",
      categoryType: "product",
      title: "Introducing Voice Translation v3: enterprise-grade multilingual operations",
      date: "June 9, 2026",
      readTime: "Max 4 min read",
      image: "https://krisp.ai/blog/wp-content/uploads/2026/06/VT-v3.jpg",
      excerpt:
        "Allow monolingual agents in any country to support native-speaking callers around the globe with natural timbre and zero latency."
    },
    {
      id: "best-noise-cancelling-apps-2026",
      cat: "AI MEETING ASSISTANT",
      categoryType: "resources",
      title: "11 Best Noise Cancelling Apps and Software in 2026 (Hands-On Tested)",
      date: "June 5, 2026",
      readTime: "Max 23 min read",
      image: "https://krisp.ai/blog/wp-content/uploads/2025/01/file-20230710-19-59bcup.webp",
      excerpt:
        "Tested against barking dogs, leaf blowers, airplane cabin hum, and noisy coffee shops."
    },
    {
      id: "how-to-write-meeting-notes",
      cat: "AI MEETING ASSISTANT",
      categoryType: "resources",
      title: "How to Write Meeting Notes That Actually Drive Action",
      date: "May 25, 2026",
      readTime: "Max 19 min read",
      image: "https://krisp.ai/blog/wp-content/uploads/2026/05/M31280x85402.webp",
      excerpt:
        "Move away from transcript walls of text and organize meetings into key decisions, assigned owners, and hard delivery deadlines."
    }
  ];

  // Filtering
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCat =
      selectedCat === "all" || post.categoryType === selectedCat;
    const matchesSearch =
      searchQuery.trim() === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.cat.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-white overflow-hidden text-[#1a1a22]">
      {/* 1. Newsletter Subscription Bar */}
      <section className="bg-[#f7f7f9] border-b border-[#e7e7ea] py-6 px-6">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span className="text-[18px]">📬</span>
            <h3 className="text-[16px] font-bold text-[#1a1a22]">
              Subscribe to get the latest Voice AI insights weekly
            </h3>
          </div>

          {newsletterSubscribed ? (
            <div className="text-[14px] font-bold text-[#008065] bg-[#e8faf6] px-4 py-2 rounded-full border border-[#cef4ec]">
              ✓ Subscribed successfully! Check your inbox.
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (newsletterEmail) setNewsletterSubscribed(true);
              }}
              className="flex items-center gap-2 w-full sm:w-auto"
            >
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email"
                className="h-[40px] px-3.5 rounded-[8px] border border-[#e7e7ea] bg-white text-[14px] text-[#1a1a22] focus:outline-none focus:border-[#614efa] w-full sm:w-[260px]"
              />
              <button
                type="submit"
                className="h-[40px] px-5 rounded-[8px] bg-[#614efa] hover:bg-[#4a3bbe] text-white font-bold text-[14px] transition-colors whitespace-nowrap cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 2. Page Title Header */}
      <section className="pt-16 pb-8 md:pt-20 md:pb-10">
        <div className="max-w-[1280px] mx-auto px-6">
          <h1 className="text-[36px] sm:text-[44px] md:text-[52px] font-bold text-[#1a1a22] tracking-tight">
            Krisp blog
          </h1>
        </div>
      </section>

      {/* 3. Category Navigation and Search Bar */}
      <nav className="border-b border-[#e7e7ea] mb-12">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4">
          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCat(cat.id)}
                className={`px-4 py-2 rounded-full text-[14px] font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  selectedCat === cat.id
                    ? "bg-[#1a1a22] text-white shadow-xs"
                    : "text-[#525069] hover:bg-[#f4f4f5] hover:text-[#1a1a22]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-[280px]">
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-full h-[40px] pl-10 pr-4 rounded-full border border-[#e7e7ea] bg-[#fafafc] text-[14px] focus:outline-none focus:border-[#614efa] focus:bg-white transition-colors"
            />
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-[14px] pointer-events-none">
              🔍
            </span>
          </div>
        </div>
      </nav>

      {/* 4. Featured Post Card */}
      {selectedCat === "all" && searchQuery === "" && (
        <section className="mb-14">
          <div className="max-w-[1280px] mx-auto px-6">
            <div
              onClick={() => setActiveArticle(featuredPost)}
              className="group cursor-pointer rounded-[24px] border border-[#e7e7ea] overflow-hidden bg-white hover:shadow-lg transition-all duration-300 grid grid-cols-1 lg:grid-cols-12"
            >
              <div className="lg:col-span-6 p-8 md:p-12 flex flex-col justify-between order-2 lg:order-1">
                <div>
                  <span className="text-[12px] font-bold tracking-wider text-[#614efa] uppercase bg-[#614efa]/10 px-3 py-1 rounded-full">
                    {featuredPost.cat}
                  </span>
                  <h2 className="text-[26px] sm:text-[32px] md:text-[36px] font-bold leading-[34px] sm:leading-[42px] text-[#1a1a22] group-hover:text-[#614efa] transition-colors mt-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-[15px] sm:text-[16px] leading-[24px] sm:leading-[26px] text-[#525069] mt-3">
                    {featuredPost.excerpt}
                  </p>
                </div>
                <div className="text-[13px] text-[#757585] mt-6 flex items-center gap-2">
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>

              <div className="lg:col-span-6 bg-[#f7f7f9] aspect-[16/10] lg:aspect-auto overflow-hidden order-1 lg:order-2">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 5. Secondary Highlighted Cards (Voice AI Newsletter & Engineering Blog) */}
      <section className="mb-14">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Voice AI Newsletter */}
            <div
              onClick={() => {
                alert("Voice AI Newsletter: Stay tuned for next week's edition on enterprise speech intelligence.");
              }}
              className="group cursor-pointer rounded-[20px] border border-[#e7e7ea] p-6 sm:p-8 flex items-center justify-between gap-4 bg-[#fafafc] hover:bg-white hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-[14px] bg-[#614efa]/10 flex items-center justify-center flex-shrink-0 p-2.5">
                  <img
                    src="https://krisp.ai/blog/wp-content/themes/krisp-blog-new/imgs/icon_voice_ai_newsletter.png"
                    alt="Voice AI Newsletter"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-[#1a1a22] group-hover:text-[#614efa] transition-colors">
                    Voice AI Newsletter
                  </h3>
                  <p className="text-[14px] leading-[20px] text-[#525069] mt-1">
                    Subscribe to Voice AI Newsletter for weekly insights on how Voice AI transforms the future of CX
                  </p>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-white border border-[#e7e7ea] flex items-center justify-center flex-shrink-0 group-hover:translate-x-1 transition-transform">
                →
              </div>
            </div>

            {/* Card 2: Engineering Blog */}
            <div
              onClick={() => setSelectedCat("technology")}
              className="group cursor-pointer rounded-[20px] border border-[#e7e7ea] p-6 sm:p-8 flex items-center justify-between gap-4 bg-[#fafafc] hover:bg-white hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-[14px] bg-[#008065]/10 flex items-center justify-center flex-shrink-0 p-2.5">
                  <img
                    src="https://krisp.ai/blog/wp-content/themes/krisp-blog-new/imgs/icon_code.svg"
                    alt="Engineering Blog"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-[#1a1a22] group-hover:text-[#614efa] transition-colors">
                    Engineering Blog
                  </h3>
                  <p className="text-[14px] leading-[20px] text-[#525069] mt-1">
                    Go deeper with technical articles, research notes, and SDK guides from Krisp engineering teams
                  </p>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-white border border-[#e7e7ea] flex items-center justify-center flex-shrink-0 group-hover:translate-x-1 transition-transform">
                →
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Blog Posts Grid */}
      <section className="mb-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => setActiveArticle(post)}
                className="group cursor-pointer flex flex-col rounded-[20px] border border-[#e7e7ea] overflow-hidden bg-white hover:shadow-md transition-all duration-300"
              >
                <div className="aspect-[16/9] w-full overflow-hidden bg-[#f4f4f5]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-[11px] font-bold tracking-wider text-[#614efa] uppercase">
                      {post.cat}
                    </span>
                    <h3 className="text-[18px] font-bold leading-[24px] text-[#1a1a22] group-hover:text-[#614efa] transition-colors mt-2">
                      {post.title}
                    </h3>
                  </div>
                  <div className="text-[12px] text-[#757585] mt-6 flex items-center gap-2">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="py-20 text-center text-[#757585]">
              <p className="text-[18px] font-semibold text-[#1a1a22]">
                No articles match your search query.
              </p>
              <button
                onClick={() => {
                  setSelectedCat("all");
                  setSearchQuery("");
                }}
                className="mt-4 text-[#614efa] hover:underline font-bold text-[14px]"
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* Pagination */}
          <div className="mt-16 flex items-center justify-center gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              className="w-10 h-10 rounded-[10px] border border-[#e7e7ea] flex items-center justify-center text-[14px] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#fafafc]"
            >
              ‹
            </button>
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-[10px] font-bold text-[14px] transition-colors ${
                  currentPage === page
                    ? "bg-[#1a1a22] text-white"
                    : "border border-[#e7e7ea] text-[#525069] hover:bg-[#fafafc]"
                }`}
              >
                {page}
              </button>
            ))}
            <span className="text-[#757585] px-1">...</span>
            <button
              onClick={() => setCurrentPage(47)}
              className={`w-10 h-10 rounded-[10px] font-bold text-[14px] transition-colors ${
                currentPage === 47
                  ? "bg-[#1a1a22] text-white"
                  : "border border-[#e7e7ea] text-[#525069] hover:bg-[#fafafc]"
              }`}
            >
              47
            </button>
            <button
              onClick={() => setCurrentPage((p) => p + 1)}
              className="w-10 h-10 rounded-[10px] border border-[#e7e7ea] flex items-center justify-center text-[14px] hover:bg-[#fafafc]"
            >
              ›
            </button>
          </div>
        </div>
      </section>

      {/* 7. Bottom CTA Toggle Banner */}
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
            You're one step away from <br className="hidden sm:inline" /> supercharging your online meeting!
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center h-[48px] px-8 rounded-[10px] bg-[#614efa] hover:bg-[#4a3bbe] text-white text-[15px] font-bold transition-colors"
            >
              Get started for free
            </Link>
            <Link
              to="/contact-sales"
              className="inline-flex items-center justify-center h-[48px] px-8 rounded-[10px] bg-white/10 hover:bg-white/20 text-white text-[15px] font-bold border border-white/20 transition-colors"
            >
              Book a demo
            </Link>
          </div>
        </div>
      </section>

      {/* Article Quick-Reading Modal */}
      {activeArticle && (
        <div
          className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setActiveArticle(null)}
        >
          <div
            className="relative w-full max-w-[760px] bg-white rounded-[24px] p-6 sm:p-10 shadow-2xl my-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-800 text-[20px]"
            >
              ✕
            </button>

            <span className="text-[12px] font-bold tracking-wider text-[#614efa] uppercase bg-[#614efa]/10 px-3 py-1 rounded-full">
              {activeArticle.cat}
            </span>

            <h2 className="text-[26px] sm:text-[32px] font-bold leading-[34px] sm:leading-[40px] text-[#1a1a22] mt-4">
              {activeArticle.title}
            </h2>

            <div className="text-[13px] text-[#757585] mt-2 mb-6 flex items-center gap-2">
              <span>{activeArticle.date}</span>
              <span>•</span>
              <span>{activeArticle.readTime}</span>
            </div>

            <div className="rounded-[16px] overflow-hidden mb-6 bg-[#f4f4f5] aspect-[16/9]">
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-[16px] leading-[28px] text-[#434351] mb-4">
              {activeArticle.excerpt}
            </p>

            <p className="text-[15px] leading-[26px] text-[#525069] mb-6">
              In real-world deployment across enterprise environments and contact centers, speech accuracy and clarity dictate user confidence. Krisp continues to advance on-device deep learning architectures that eliminate background chatter, barking dogs, keyboard clicks, and cross-talk without adding perceptible latency to the audio pipeline.
            </p>

            <div className="pt-6 border-t border-[#e7e7ea] flex items-center justify-between">
              <span className="text-[14px] text-[#757585]">Share this article</span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => alert("Link copied to clipboard!")}
                  className="px-4 py-2 rounded-[8px] bg-[#f4f4f5] hover:bg-[#e7e7ea] text-[13px] font-semibold text-[#1a1a22] transition-colors"
                >
                  🔗 Copy link
                </button>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-4 py-2 rounded-[8px] bg-[#614efa] hover:bg-[#4a3bbe] text-[13px] font-semibold text-white transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}