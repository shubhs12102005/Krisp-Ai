import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

/**
 * Audio / Video to Text Converter Page Replica
 * Source of truth: https://krisp.ai/video-and-audio-to-text-transcription/
 * 
 * Features:
 * 1. Deep purple (#18113c) hero with interactive upload drop zone (idle, uploading circular SVG progress, processing, transcript display)
 * 2. Enterprise brands marquee / 2-row carousel
 * 3. Why choose Krisp AI transcription tool (3 alternating benefit rows with artboard illustrations + Try now CTA)
 * 4. Need to transcribe live meetings? (Cross-promo section with bullet points & live meeting illustration)
 * 5. What you get with our AI transcription service (Interactive 4-tab system with video and feature illustrations)
 * 6. The smarter way to transcribe video & audio files (4 alternating benefit cards with artboards)
 * 7. Who is AI transcription software for? (Interactive 3-tab audience persona showcase with tailored points)
 * 8. Have questions? We've got answers (Accordion FAQ with all 7 original questions & answers)
 */
export default function AudioVideoToText() {
  // Upload interactive state
  const [uploadStatus, setUploadStatus] = useState("idle"); // "idle" | "uploading" | "processing" | "ready" | "error"
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [showCancelTooltip, setShowCancelTooltip] = useState(false);
  const fileInputRef = useRef(null);
  const progressTimerRef = useRef(null);

  // Feature tabs state (What you get with our AI transcription service)
  const [activeFeatureTab, setActiveFeatureTab] = useState("action-items");

  // Persona tabs state (Who is AI transcription software for?)
  const [activePersonaTab, setActivePersonaTab] = useState("professionals");

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Upload simulation logic
  const startUpload = (file) => {
    const name = file?.name || "interview_recording_q3.mp4";
    setUploadedFileName(name);
    setUploadStatus("uploading");
    setUploadProgress(0);
    setShowCancelTooltip(false);

    let progress = 0;
    if (progressTimerRef.current) clearInterval(progressTimerRef.current);

    progressTimerRef.current = setInterval(() => {
      progress += Math.floor(Math.random() * 18) + 12;
      if (progress >= 100) {
        progress = 100;
        clearInterval(progressTimerRef.current);
        setUploadProgress(100);
        setTimeout(() => {
          setUploadStatus("processing");
          setTimeout(() => {
            setUploadStatus("ready");
          }, 1600);
        }, 400);
      } else {
        setUploadProgress(progress);
      }
    }, 200);
  };

  const handleCancelUpload = () => {
    if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    setUploadStatus("idle");
    setUploadProgress(0);
    setUploadedFileName("");
    setShowCancelTooltip(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      startUpload(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      startUpload(file);
    }
  };

  useEffect(() => {
    return () => {
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    };
  }, []);

  // Circumference for 56px SVG circle (r=26 => 2 * pi * 26 = 163.36)
  const strokeDashoffset = 163.36 - (163.36 * uploadProgress) / 100;

  const brandsRow1 = [
    { name: "Siemens", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_siemens.svg" },
    { name: "Medium", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_medium.svg" },
    { name: "Okta", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_okta.svg" },
    { name: "Skechers", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_sketchers.svg" },
    { name: "Autodesk", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_autodesk.svg" },
    { name: "Sony", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_sony.svg" }
  ];

  const brandsRow2 = [
    { name: "Cisco", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_cisco.svg" },
    { name: "ServiceTitan", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_servicetitan.svg" },
    { name: "VMware", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_vmware.svg" },
    { name: "GitHub", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_github.svg" },
    { name: "Alorica", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/alorica_logo.svg" }
  ];

  const whyChooseBenefits = [
    {
      title: "Turn long recordings into searchable text",
      desc: "With our online transcriber, you can quickly find keywords, highlight key moments, and get video and audio transcriptions to organize them without replaying entire files. From short recordings to hours of audio and video files, the AI converter handles different workloads quickly and reliably.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_artboard_ma.png",
      reverse: true
    },
    {
      title: "Save time and effort",
      desc: "Save hours of manual typing. With our AI transcription software, you can instantly transcribe audio to text or video to text in just a few clicks. The converter makes the process simple, fast, and accurate.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_artboard_ma_2.png",
      reverse: false
    },
    {
      title: "Keep your data private and secure",
      desc: "Our AI transcription app protects your data so only you decide how and when to share transcripts. Whether you’re using the transcription services for personal recordings or business meetings, your privacy comes first.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_artboard_ma_3.png",
      reverse: true
    }
  ];

  const featureTabs = [
    {
      id: "action-items",
      title: "Action items & AI summaries",
      subtitle: "Action items & AI summaries",
      lead: "Turn conversations into actionable records and save time by cutting through the noise.",
      bullets: [
        "Automatically generate summaries of your transcripts",
        "Highlight important decisions automatically",
        "Great for project teams and client conversations",
        "Works with both audio-to-text and video-to-text outputs"
      ],
      mediaType: "video",
      mediaSrc: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/video_transcription_lg.mp4"
    },
    {
      id: "no-app",
      title: "No app to download",
      subtitle: "No app to download",
      lead: "Start transcribing instantly in your browser — no software required. The video and audio to text converter transcribes anywhere, anytime with cross-platform access.",
      bullets: [
        "Works on Chrome, Safari, Edge, and Firefox",
        "Compatible with Mac, Windows, mobile devices",
        "Upload audio or video and convert to text in just a few clicks",
        "No downloads, no updates, no hassle"
      ],
      mediaType: "image",
      mediaSrc: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_artboard_ma_5.png"
    },
    {
      id: "editable-transcripts",
      title: "Editable transcripts",
      subtitle: "Editable transcripts",
      lead: "Take full control of your text with built-in editing.",
      bullets: [
        "Correct words, adjust formatting, and refine punctuation",
        "Export transcripts to share or store for future use",
        "Ideal for interviews, lectures, and business meetings"
      ],
      mediaType: "image",
      mediaSrc: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_artboard_ma_6.png"
    },
    {
      id: "speaker-id",
      title: "Speaker identification",
      subtitle: "Speaker identification",
      lead: "Keep conversations structured and easy to follow.",
      bullets: [
        "Assign speakers to separate voices clearly in transcripts",
        "Perfect for team meetings, interviews, and group discussions",
        "Works for both audio to text and video to text transcripts"
      ],
      mediaType: "image",
      mediaSrc: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_artboard_ma_7.png"
    }
  ];

  const smarterWayBenefits = [
    {
      title: "Human-level accuracy with AI efficiency",
      desc: "Our AI transcription engine is trained on diverse accents, speech patterns, and tones, delivering near human-level accuracy without the delays or costs of manual transcription services.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_artboard_ma_8.png",
      reverse: false
    },
    {
      title: "Multiple formats supported",
      desc: "Upload MP3, WAV, M4A, MP4, MOV, and more. The video to text and audio to text converter support all major file types.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_artboard_ma_9.png",
      reverse: true
    },
    {
      title: "No hidden barriers",
      desc: "Unlike many transcription software that impose length limits or watermarks, ours gives you full, unrestricted access to AI transcription.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_artboard_ma_10.png",
      reverse: false
    },
    {
      title: "Multi-language transcription",
      desc: "Turn your video and audio recording into text in English, Spanish, German, French, Hindi and other languages",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_artboard_ma_11.png",
      reverse: true
    }
  ];

  const personas = [
    {
      id: "professionals",
      tabLabel: "Professionals and teams",
      title: "Professionals and teams",
      lead: "Stay organized and aligned with accurate transcripts of meeting recordings.",
      bullets: [
        "Transcribe meeting videos and conversation audio files into clear, searchable text",
        "Track decisions and action items automatically",
        "Share transcripts across teams for better collaboration"
      ],
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_owners.png"
    },
    {
      id: "creators",
      tabLabel: "Content creators and media",
      title: "Content creators and media",
      lead: "Repurpose your work and reach more people with text-based content.",
      bullets: [
        "Transcribe podcasts, YouTube videos, and interviews",
        "Create captions, blogs, and articles faster",
        "Improve SEO visibility with searchable transcripts"
      ],
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_consultants.png"
    },
    {
      id: "students",
      tabLabel: "Students and educators",
      title: "Students and educators",
      lead: "Make learning and teaching more effective with reliable notes.",
      bullets: [
        "Convert lectures into structured transcripts",
        "Highlight key points for easier study",
        "Support accessibility for all learners"
      ],
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_hr_nt.png"
    }
  ];

  const faqs = [
    {
      q: "How do I transcribe audio or video to text?",
      a: "Simply upload your file to Krisp’s transcription tool. The AI transcription engine processes it and delivers a complete transcript within seconds. You can transcribe audio to text, convert video to text, or even turn MP3 to text."
    },
    {
      q: "What file formats are supported?",
      a: "Krisp supports a wide range of audio and video formats. For audio: MP3, WAV, M4A, AIFF, CAF, and WMA. For video: MP4, MOV, WMV, and AVI. Our transcript generator from video and audio recording files handles most commonly used formats."
    },
    {
      q: "Is there a file size or length limit when converting audio or video to text?",
      a: "Yes. You can upload files up to 1GB on the free trial. Longer or higher-resolution files may need compression before transcription."
    },
    {
      q: "Can I edit and export the transcript?",
      a: "Yes! Once the AI online transcriber generates your text from video or audio recording file, you can edit it directly, assign speakers, and highlight key points. Transcripts can be copied, downloaded, or exported for future use."
    },
    {
      q: "Is my data private and secure?",
      a: "Absolutely. All files are processed with SSL encryption, and Krisp never stores or shares your audio, video, or transcripts. Your data remains private at every step."
    },
    {
      q: "Does Krisp work as a video and audio transcriber for meetings?",
      a: "Yes. In addition to uploading files, you can use Krisp’s AI Meeting Assistant for meeting recordings, transcription and note-taking. It works with Zoom, Teams, Google Meet, and more."
    },
    {
      q: "Does the transcription app support multiple languages?",
      a: "Yes. Our AI transcription software supports 16+ languages including English, German, Spanish, French, and Hindi. You can transcribe audio to text and video to text in the language that works best for you."
    }
  ];

  return (
    <div className="w-full bg-white text-[#131032] overflow-x-hidden">
      {/* 1. HERO SECTION WITH DEEP PURPLE BACKGROUND & INTERACTIVE UPLOADER */}
      <section className="w-full bg-[#18113c] py-20 px-4 sm:px-6 relative" id="intro">
        <div className="max-w-[1240px] mx-auto">
          <h1 className="text-white text-center text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-bold leading-tight mb-4">
            AI Transcription made simple. <br className="hidden sm:inline" />
            Convert audio and video to text instantly
          </h1>
          <p className="text-[#a5a3be] text-center text-base sm:text-lg max-w-2xl mx-auto mb-10">
            Fast, accurate transcription in your browser. Upload your meeting recording, lecture, podcast, or interview.
          </p>

          {/* Interactive Upload Box matching original #drop_zone */}
          <div className="max-w-[620px] mx-auto bg-white rounded-2xl shadow-2xl p-8 sm:p-10 border border-[#e7e7ea] relative transition-all">
            {/* Hidden native input */}
            <input
              ref={fileInputRef}
              type="file"
              accept="audio/*,video/*"
              className="hidden"
              onChange={handleFileChange}
            />

            {/* State A: Idle Drop Zone */}
            {uploadStatus === "idle" && (
              <div
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className="cursor-pointer text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-[#f4f2ff] group-hover:scale-110 transition-transform duration-200">
                  <img
                    src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_audio_to_text.svg"
                    alt="Upload icon"
                    className="w-8 h-8"
                  />
                </div>
                <p className="text-lg font-medium text-[#131032] mb-3">
                  <strong>Drag and drop</strong> or{" "}
                  <strong className="text-[#614efa] hover:underline">Click to upload</strong>
                </p>
                <p className="text-sm text-[#757585] mb-1">
                  Supported format:{" "}
                  <strong className="text-[#525069] font-semibold">
                    AAC, MP3, M4A, WAV, WMA, MP4, WMV
                  </strong>
                </p>
                <p className="text-sm text-[#757585] mb-6">
                  Maximum file size:{" "}
                  <strong className="text-[#525069] font-semibold">1GB</strong>
                </p>

                <div className="inline-block">
                  <button
                    type="button"
                    className="px-6 py-2.5 rounded-lg bg-[#614efa] hover:bg-[#4a3bbe] text-white text-sm font-semibold shadow-md transition-all"
                  >
                    Select File
                  </button>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      startUpload({ name: "quarterly_earnings_call.mp3" });
                    }}
                    className="text-xs text-[#614efa] hover:underline"
                  >
                    Or test with a sample recording
                  </button>
                </div>
              </div>
            )}

            {/* State B: Uploading with Circular Progress Ring */}
            {uploadStatus === "uploading" && (
              <div className="text-center py-6">
                <div className="relative w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-14 h-14 -rotate-90 transform" viewBox="0 0 56 56">
                    <circle
                      stroke="#F3F0FF"
                      strokeWidth="4"
                      fill="transparent"
                      r="26"
                      cx="28"
                      cy="28"
                    />
                    <circle
                      stroke="#614EFA"
                      strokeWidth="4"
                      fill="transparent"
                      r="26"
                      cx="28"
                      cy="28"
                      strokeDasharray="163.36 163.36"
                      strokeDashoffset={strokeDashoffset}
                      className="transition-all duration-200"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-[#614efa]">
                    {uploadProgress}%
                  </div>
                </div>

                <div className="text-sm font-semibold text-[#131032] mb-1 truncate max-w-xs mx-auto">
                  {uploadedFileName}
                </div>
                <div className="text-sm text-[#757585] mb-6">Uploading file...</div>

                <div className="relative inline-block">
                  <button
                    type="button"
                    onClick={() => setShowCancelTooltip(!showCancelTooltip)}
                    className="text-xs font-semibold text-[#fe6257] hover:underline"
                  >
                    Cancel
                  </button>

                  {showCancelTooltip && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 p-4 bg-white rounded-xl shadow-xl border border-[#e7e7ea] z-20 text-left">
                      <div className="flex items-center gap-2 text-xs font-bold text-[#131032] mb-1">
                        <img
                          src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_warning.svg"
                          alt="Warning"
                          className="w-4 h-4"
                        />
                        <span>Are you sure?</span>
                      </div>
                      <p className="text-[11px] text-[#757585] mb-3">
                        Canceling will stop the upload. The file will not be saved.
                      </p>
                      <div className="flex justify-between items-center text-xs">
                        <button
                          type="button"
                          onClick={handleCancelUpload}
                          className="text-[#fe6257] font-semibold hover:underline"
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          onClick={() => setShowCancelTooltip(false)}
                          className="px-2.5 py-1 bg-[#614efa] text-white rounded font-medium text-[11px]"
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* State C: Processing State */}
            {uploadStatus === "processing" && (
              <div className="text-center py-8">
                <div className="w-10 h-10 border-3 border-[#e7e7ea] border-t-[#614efa] rounded-full animate-spin mx-auto mb-4" />
                <div className="text-base font-bold text-[#131032] mb-2">
                  Getting transcript ready...
                </div>
                <div className="flex items-center justify-center gap-2 text-xs text-[#757585]">
                  <img
                    src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_warning.svg"
                    alt="Warning"
                    className="w-4 h-4"
                  />
                  <span>Please do not refresh the page until your transcript is ready!</span>
                </div>
              </div>
            )}

            {/* State D: Transcript Ready */}
            {uploadStatus === "ready" && (
              <div className="text-left py-2">
                <div className="flex items-center justify-between pb-3 border-b border-[#f4f4f5] mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold text-[#131032] truncate max-w-[200px]">
                      {uploadedFileName}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setUploadStatus("idle");
                      setUploadedFileName("");
                    }}
                    className="text-xs text-[#614efa] hover:underline font-medium"
                  >
                    Upload another file
                  </button>
                </div>

                <div className="bg-[#f9f9fa] p-4 rounded-xl text-xs text-[#35334c] font-mono leading-relaxed space-y-2 mb-6 max-h-44 overflow-y-auto border border-[#ededf0]">
                  <p>
                    <strong className="text-[#614efa]">[00:00:02] Speaker 1:</strong> Good morning team. Let&apos;s begin our quarterly review on transcription accuracy and latency benchmarks.
                  </p>
                  <p>
                    <strong className="text-[#131032]">[00:00:14] Speaker 2:</strong> Across our test datasets with high background noise, speech-to-text accuracy exceeded 98.2%.
                  </p>
                  <p>
                    <strong className="text-[#614efa]">[00:00:26] Speaker 1:</strong> Excellent. Action item assigned to finalize model deployment across contact center lines.
                  </p>
                </div>

                <div className="text-center">
                  <Link
                    to="/signup"
                    className="inline-block w-full py-3 px-6 rounded-lg bg-[#614efa] hover:bg-[#4a3bbe] text-white text-sm font-semibold text-center shadow transition-colors"
                  >
                    Unlock full transcript &amp; AI summary
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 2. TRUSTED BY THE WORLD'S LARGEST GLOBAL BRANDS */}
      <section className="w-full pt-20 pb-16 border-b border-[#f4f4f5]" id="trusted">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <h2 className="text-center text-xl sm:text-2xl font-bold text-[#1a1a22] mb-12">
            Trusted by the world’s largest global brands
          </h2>

          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-80 grayscale hover:grayscale-0 transition-all duration-300">
              {brandsRow1.map((b, i) => (
                <img
                  key={i}
                  src={b.src}
                  alt={b.name}
                  className="h-8 sm:h-9 w-auto object-contain hover:scale-105 transition-transform"
                />
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-80 grayscale hover:grayscale-0 transition-all duration-300">
              {brandsRow2.map((b, i) => (
                <img
                  key={i}
                  src={b.src}
                  alt={b.name}
                  className="h-8 sm:h-9 w-auto object-contain hover:scale-105 transition-transform"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE KRISP AI TRANSCRIPTION TOOL */}
      <section className="w-full py-20 bg-[#f9f9fb] notes_features">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-[#131032] mb-14">
            Why choose Krisp AI transcription tool
          </h2>

          <div className="space-y-16">
            {whyChooseBenefits.map((item, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${
                  item.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center justify-between gap-10 lg:gap-16`}
              >
                <div className="lg:w-1/2 space-y-4">
                  <h4 className="text-2xl sm:text-3xl font-bold text-[#131032] leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-base text-[#525069] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="lg:w-1/2 flex justify-center">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full max-w-[440px] h-auto object-contain drop-shadow-sm rounded-xl"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              to="/signup"
              className="inline-block px-8 py-3.5 rounded-lg bg-[#614efa] hover:bg-[#4a3bbe] text-white font-semibold text-base shadow-md transition-colors"
            >
              Try now!
            </Link>
          </div>
        </div>
      </section>

      {/* 4. NEED TO TRANSCRIBE LIVE MEETINGS? (CROSS-PROMO) */}
      <section className="w-full py-16 bg-[#f4f2ff] border-y border-[#e7e3fc]" id="apps">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="lg:w-7/12 space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#131032]">
                Need to transcribe live meetings?
              </h2>
              <div className="text-base text-[#525069] leading-relaxed space-y-3">
                <p>
                  <Link to="/ai-meeting-assistant" className="text-[#614efa] font-semibold hover:underline">
                    Try Krisp AI Meeting Assistant.
                  </Link>{" "}
                  If you want more than file uploads, our AI Meeting Assistant gives you meeting transcripts right after calls in{" "}
                  <span className="text-[#614efa] font-medium">Zoom</span>,{" "}
                  <span className="text-[#614efa] font-medium">Teams</span>,{" "}
                  <span className="text-[#614efa] font-medium">Google Meet</span>, and more.
                </p>

                <ul className="space-y-2 pt-2">
                  <li className="flex items-start gap-2 text-sm sm:text-base">
                    <span className="text-[#614efa] font-bold mt-0.5">•</span>
                    <span>
                      <Link to="/ai-meeting-assistant/meeting-transcription" className="text-[#614efa] font-semibold hover:underline">
                        AI Meeting Transcription
                      </Link>{" "}
                      — Capture every word as the meeting happens.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-sm sm:text-base">
                    <span className="text-[#614efa] font-bold mt-0.5">•</span>
                    <span>Private and Secure — Keep conversations safe and under your control.</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm sm:text-base">
                    <span className="text-[#614efa] font-bold mt-0.5">•</span>
                    <span>
                      <Link to="/ai-meeting-assistant/ai-note-taker" className="text-[#614efa] font-semibold hover:underline">
                        AI Note Taker
                      </Link>{" "}
                      — Organize key points and action items automatically.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:w-5/12 flex justify-center">
              <img
                src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_artboard_ma_4.png"
                alt="Need to transcribe live meetings?"
                className="w-full max-w-[500px] h-auto object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHAT YOU GET WITH OUR AI TRANSCRIPTION SERVICE (INTERACTIVE 4 TABS) */}
      <section className="w-full py-24 bg-white" id="features_new">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-[#131032] mb-12">
            What you get with our AI transcription service
          </h2>

          {/* Tab Navigation Headers */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-12 pb-4 border-b border-[#f0f0f2]">
            {featureTabs.map((tab) => {
              const isActive = activeFeatureTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFeatureTab(tab.id)}
                  className={`text-sm sm:text-base font-semibold py-2.5 px-4 rounded-xl transition-all ${
                    isActive
                      ? "text-[#614efa] bg-[#f4f2ff] shadow-sm font-bold"
                      : "text-[#757585] hover:text-[#131032] hover:bg-[#f9f9fa]"
                  }`}
                >
                  {tab.title}
                </button>
              );
            })}
          </div>

          {/* Active Tab Content Card */}
          {(() => {
            const currentTab = featureTabs.find((t) => t.id === activeFeatureTab) || featureTabs[0];
            return (
              <div className="bg-[#fcfcff] rounded-2xl border border-[#ecebf7] p-6 sm:p-10 lg:p-12">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                  <div className="lg:w-1/2 space-y-6">
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#131032]">
                      {currentTab.subtitle}
                    </h3>
                    <p className="text-base text-[#525069] leading-relaxed">
                      {currentTab.lead}
                    </p>

                    <ul className="space-y-3 pt-2">
                      {currentTab.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <img
                            src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_checkmark_purple.svg"
                            alt="Checkmark"
                            className="w-4 h-4 flex-shrink-0 mt-1"
                          />
                          <span className="text-sm sm:text-base text-[#35334c] font-medium">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:w-1/2 flex justify-center">
                    {currentTab.mediaType === "video" ? (
                      <video
                        src={currentTab.mediaSrc}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full max-w-[560px] rounded-xl shadow-lg border border-[#e7e7ea] object-cover"
                      />
                    ) : (
                      <img
                        src={currentTab.mediaSrc}
                        alt={currentTab.title}
                        className="w-full max-w-[560px] rounded-xl shadow-md border border-[#e7e7ea] object-contain"
                      />
                    )}
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* 6. THE SMARTER WAY TO TRANSCRIBE VIDEO AND AUDIO (4 ALTERNATING CARDS) */}
      <section className="w-full py-20 bg-[#e8faf6]/50 border-y border-[#cbf2ea]" id="benefits">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-[#131032] mb-14">
            The smarter way to transcribe video <br className="hidden sm:inline" />
            and audio recording files to text
          </h2>

          <div className="space-y-14">
            {smarterWayBenefits.map((item, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${
                  item.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center justify-between gap-8 lg:gap-14 bg-white/70 backdrop-blur-sm p-6 sm:p-10 rounded-2xl border border-[#b6eedf]/50`}
              >
                <div className="lg:w-1/2 space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#131032]">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#525069] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="lg:w-1/2 flex justify-center">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full max-w-[430px] h-auto object-contain rounded-xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHO IS AI TRANSCRIPTION SOFTWARE FOR? (3 TABS) */}
      <section className="w-full py-24 bg-white notes_persona">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-[#131032] mb-12">
            Who is AI transcription software for?
          </h2>

          {/* Persona Tab Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-12 pb-4 border-b border-[#f0f0f2]">
            {personas.map((p) => {
              const isActive = activePersonaTab === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setActivePersonaTab(p.id)}
                  className={`text-sm sm:text-base font-semibold py-2 px-5 rounded-xl transition-all ${
                    isActive
                      ? "text-[#614efa] bg-[#f4f2ff] shadow-sm font-bold"
                      : "text-[#757585] hover:text-[#131032]"
                  }`}
                >
                  {p.tabLabel}
                </button>
              );
            })}
          </div>

          {/* Active Persona Showcase */}
          {(() => {
            const currentPersona = personas.find((p) => p.id === activePersonaTab) || personas[0];
            return (
              <div className="bg-[#fcfcff] rounded-2xl border border-[#ecebf7] p-6 sm:p-10 lg:p-12">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                  <div className="lg:w-1/2 space-y-6">
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#131032]">
                      {currentPersona.title}
                    </h3>
                    <p className="text-base text-[#525069] leading-relaxed">
                      {currentPersona.lead}
                    </p>

                    <ul className="space-y-3 pt-2">
                      {currentPersona.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <img
                            src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_checkmark_purple.svg"
                            alt="Checkmark"
                            className="w-4 h-4 flex-shrink-0 mt-1"
                          />
                          <span className="text-sm sm:text-base text-[#35334c] font-semibold">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:w-1/2 flex justify-center">
                    <img
                      src={currentPersona.img}
                      alt={currentPersona.title}
                      className="w-full max-w-[500px] h-auto object-contain rounded-xl"
                    />
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* 8. HAVE QUESTIONS? WE'VE GOT ANSWERS (ACCORDION FAQ) */}
      <section className="w-full py-20 bg-[#f9f9fb] border-t border-[#ededf0] faq_container">
        <div className="max-w-[880px] mx-auto px-4 sm:px-6">
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-[#131032] mb-12">
            Have questions? We’ve got answers.
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-[#e7e7ea] overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-[#fafafa] transition-colors"
                  >
                    <span className="text-base sm:text-lg font-bold text-[#131032] pr-4">
                      {faq.q}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-[#f4f2ff] text-[#614efa] flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#525069] leading-relaxed border-t border-[#f4f4f5]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. BOTTOM CALL TO ACTION BANNER */}
      <section className="w-full py-20 bg-gradient-to-r from-[#18113c] via-[#2a1e68] to-[#18113c] text-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Transcribe audio &amp; video to text in seconds
          </h2>
          <p className="text-[#c5c3e0] text-base sm:text-lg max-w-2xl mx-auto">
            Experience high-accuracy AI transcription with zero software download. Get timestamps, speaker tags, and instant AI summaries.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                fileInputRef.current?.click();
              }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#614efa] hover:bg-[#4a3bbe] text-white font-bold text-base shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Upload file now
            </button>
           
          </div>
        </div>
      </section>
    </div>
  );
}
