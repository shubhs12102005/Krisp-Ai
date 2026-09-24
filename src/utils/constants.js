// Global constants, site metadata, and feature data for Krisp AI replica

export const siteLogos = {
  main: "/silgate-logo.jpg",
  arrowIcon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs//home/icon_arrow.svg",
  arrowDownIcon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_arrow_down.svg",
  ctaPointer: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_cta_pointer.svg"
};

export const trustedLogos = [
  { name: "Siemens", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_siemens.svg" },
  { name: "Medium", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_medium.svg" },
  { name: "Okta", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_okta.svg" },
  { name: "Skechers", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_sketchers.svg" },
  { name: "Autodesk", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_autodesk.svg" },
  { name: "Sony", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_sony.svg" },
  { name: "Cisco", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_cisco.svg" },
  { name: "Service Titan", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_servicetitan.svg" },
  { name: "Github", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_github.svg" },
  { name: "vmware", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_vmware.svg" },
  { name: "Alorica", src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/alorica_logo.svg" }
];

export const testimonialData = {
  quote: "Krisp's noise cancellation transformed our remote meetings. The new AI assistant features impressed us by streamlining note-taking, saving time during our 5–6 weekly calls, and boosting overall efficiency.",
  author: {
    name: "Esther Trapadoux",
    role: "Director of Community, Amplitude",
    avatar: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/img_esther.png"
  },
  quoteIcon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/icon_quote.svg"
};

export const audioDemos = {
  noise: {
    title: "AI Noise Cancellation",
    subtitle: "Play and toggle Krisp on and off",
    switchLabel: "With Krisp Noise Cancellation",
    listTitle: "Try out different noise types",
    tracks: [
      { id: "remote-work", name: "Multiple noises" },
      { id: "dog", name: "Barking dog" },
      { id: "child", name: "Crying baby" },
      { id: "keyboard", name: "Keyboard clicks" },
      { id: "fan", name: "Fan noise" }
    ]
  },
  accent: {
    title: "Accent Conversion",
    subtitle: "Play and toggle Krisp on and off",
    switchLabel: "With Krisp AI Accent Conversion",
    listTitle: "Try out different output voices",
    tracks: [
      { id: "manoj", name: "Manoj", avatar: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/accent_sherwin.png" },
      { id: "ishika", name: "Ishika", avatar: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/accent_ishika.png" }
    ]
  }
};

export const meetingSections = [
  {
    id: "in-meeting",
    stepName: "During Meeting",
    title: "In-meeting superpowers.",
    gradientClass: "gradient-purple",
    subtitle: "Stay focused with noise-free calls, instant transcripts, and action items",
    items: [
      {
        id: "transcripts-recording",
        title: "Transcription & Recording",
        desc: "Krisp’s AI meeting assistant silently handles transcripts and recordings.",
        link: "/ai-meeting-assistant/meeting-transcription",
        video: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/video_transcription.mp4"
      },
      {
        id: "noise-cancellation",
        title: "Noise Cancellation",
        hasDemo: true,
        desc: "#1 AI noise cancellation for any meeting removes noise, echo, and cross-talk.",
        link: "/ai-meeting-assistant/noise-cancellation",
        isDemo: true,
        demoType: "noise"
      },
      {
        id: "accent-conversion",
        title: "Accent Conversion",
        hasDemo: true,
        desc: "AI accent conversion for clearer, more confident communication in every meeting.",
        link: "/ai-meeting-assistant/accent-conversion",
        isDemo: true,
        demoType: "accent"
      }
    ]
  },
  {
    id: "post-meetings",
    stepName: "After Meeting",
    title: "Automate post-meeting everything.",
    gradientClass: "gradient-orange",
    subtitle: "AI Note Taker handles meeting transcripts, summaries, and CRM updates. Focus on what matters.",
    items: [
      {
        id: "meeting-notes",
        title: "AI Meeting Notes",
        desc: "Accurate AI meeting notes to ensure you never miss a detail.",
        link: "/ai-meeting-assistant/ai-note-taker",
        video: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/video_notes.mp4"
      },
      {
        id: "crm-sync",
        title: "Sync to CRM",
        desc: "Push notes and action items directly to Salesforce, HubSpot, Slack, and more.",
        link: "/ai-meeting-assistant/meeting-summary",
        video: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/video_sync_crm.mp4"
      },
      {
        id: "action-items",
        title: "Centralized Action items",
        desc: "Track tasks from all meetings so nothing falls through the cracks.",
        video: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/video_action_items.mp4"
      }
    ]
  },
  {
    id: "pre-meetings",
    stepName: "Before Meeting",
    title: "Prepare before the meeting.",
    gradientClass: "gradient-blue",
    subtitle: "Get ready with the AI meeting agent. Smart agendas and insights before every call.",
    items: [
      {
        id: "agenda",
        title: "Agenda",
        desc: "Get AI suggestions based on previous conversations.",
        video: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/video_agenda.mp4"
      },
      {
        id: "recording-presets",
        title: "Recording presets",
        desc: "Choose from Transcript-only, Audio or Video modes.",
        video: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/video_recording_presets.mp4"
      },
      {
        id: "notifications",
        title: "On-time notifications",
        desc: "Never miss a meeting, even on busy days.",
        video: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/video_notifications.mp4"
      }
    ]
  }
];

export const workflowData = {
  title: "Flexibility to fit your workflow",
  items: [
    {
      id: "multilingual",
      widthDesktop: "733px",
      icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/icon_multilingual.svg",
      title: "Multilingual meeting support",
      desc: "Transcripts and summaries in 16 languages, ensuring seamless communication across global teams.",
      videoDesktop: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/video_multilingual.mp4",
      videoTablet: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/video_multilingual_tablet.mp4"
    },
    {
      id: "sharing",
      widthDesktop: "515px",
      icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/icon_sharing.svg",
      title: "1 - click sharing",
      desc: "Share notes and summaries via Slack or revisit with an easy-to-navigate timeline.",
      videoDesktop: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/video_share.mp4",
      videoTablet: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/video_share_tablet.mp4"
    },
    {
      id: "inperson",
      widthDesktop: "624px",
      icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/icon_inperson.svg",
      title: "In-person meeting support",
      desc: "Not all conversations happen online. With mobile and desktop support, easily record and transcribe walk-and-talks or sit-down meetings.",
      videoDesktop: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/video_recording.mp4",
      videoTablet: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/video_recording_tablet.mp4"
    },
    {
      id: "ask-krisp",
      widthDesktop: "624px",
      icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/icon_ai.svg",
      title: "Ask Krisp",
      desc: "You don’t need to copy and paste transcript to chatGPT if templates we have are not enough. Ask anything right here!",
      videoDesktop: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/video_ask_krisp.mp4",
      videoTablet: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/video_ask_krisp_tablet.mp4"
    }
  ]
};

export const workspacesData = {
  eyebrow: "Store. Organize. Act On.",
  title: "Workspaces",
  subtitle: "Unlock knowledge buried in team conversations.",
  content: "From pre-meeting briefs and agendas to follow-ups, everything is organized for quick reference. With integrations to productivity tools and flexible pricing, Krisp scales with teams of all sizes.",
  buttonText: "Book a demo",
  buttonHref: "/contact-sales",
  video: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/video_workspaces.mp4"
};

export const privacyData = {
  title: "Your data, always kept",
  titleHighlight: "private and secure.",
  desc: "We take security seriously, so you don’t have to worry. Our enterprise-grade protections keep your information safe, private, and in your control.",
  trustLink: "https://trust.krisp.ai",
  trustText: "Visit Trust center",
  items: [
    {
      title: "SOC 2 Certified",
      desc: "Independently audited for top-tier security and privacy.",
      icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/icon_soc.svg"
    },
    {
      title: "GDPR Compliance",
      desc: "Privacy built to meet EU regulations.",
      icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/icon_gdpr.svg"
    },
    {
      title: "HIPAA Compliant",
      desc: "Complete protection for healthcare organizations.",
      icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/icon_hipaa.svg"
    },
    {
      title: "PCI-DSS Certified",
      desc: "Certified to securely handle and process your payment information.",
      icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/icon_pci.svg"
    }
  ]
};

export const integrationsData = {
  title: "Works with any calling app & integrates to your workflow",
  subtitle: "From Google Calendar to Zoom, Slack, HubSpot, Salesforce, and Zapier - Krisp seamlessly fits into your workflow.",
  rows: [
    [{ name: "Zoom", icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/icon_zoom.svg" }],
    [
      { name: "Zapier", icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/icon_zapier.svg" },
      { name: "HubSpot", icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/icon_hubspot.svg" }
    ],
    [
      { name: "Google Meet", icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/icon_meet.svg" },
      { name: "Teams", icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/icon_teams.svg" },
      { name: "Werby", icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/icon_werby.svg" }
    ],
    [
      { name: "Discord", icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/icon_discord.svg" },
      { name: "Salesforce", icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/icon_salesforce.svg" }
    ],
    [
      { name: "Google Calendar", icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/icon_gcalendar.svg" },
      { name: "Webex", icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/icon_webex.svg" },
      { name: "Outlook", icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/icon_outlook.svg" }
    ],
    [
      { name: "Slack", icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/icon_slack.svg" },
      { name: "WeChat", icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/icon_wechat.svg" }
    ],
    [{ name: "Loom", icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/icon_loom.svg" }]
  ]
};

export const featuresBlockData = [
  {
    title: "Chrome Extension",
    desc: "If using mostly conferencing apps inside chrome - like Google Meet.",
    buttonText: "Get extension",
    buttonHref: "https://chromewebstore.google.com/detail/krisp-ai-meeting-assistan/lnmbdamplioghdakbfnbbofeipjlbgpk",
    image: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/img_extension.png"
  },
  {
    title: "Audio/Video upload",
    desc: "Upload and transcribe your meeting recordings.",
    image: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/img_audio_to_text.png"
  },
  {
    title: "Custom Vocabulary",
    desc: "750 workspace-level terms and abbreviations, with industry-specific starter kits to get started easily.",
    image: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/img_vocab.png"
  },
  {
    title: "Record with bot",
    desc: "Prefer automated participation? Enable bots to join meetings when needed",
    image: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/img_bot.png"
  }
];

export const faqsData = [
  {
    question: "What is Krisp, and how are its products connected?",
    answer: `Krisp is a Voice AI platform that makes conversations clearer and more productive. All products run on the same AI voice engine to remove background noise, convert accents, and generate real-time transcripts and notes. Products are separate and installed individually.

• AI Meeting Assistant — A bot-free AI note taker for professionals and teams who want transcription and note-taking across Zoom, Microsoft Teams, Google Meet, Slack Huddles, and more.
• Call Center AI — for contact centers that need clarity and real-time agent support, including Accent Conversion, Voice Translation, Noise Cancellation, and Agent Assist.
• AI Voice SDK — for developers embedding Krisp’s Voice AI features such as Noise Cancellation, Accent Conversion, and Voice Isolation directly into their apps.

All three share the same foundation, but installing one (for example, the AI Meeting Assistant) does not include the others.`
  },
  {
    question: "Does Krisp integrate with Zoom, Google Meet, Microsoft Teams, and Slack?",
    answer: "Yes. Because Krisp works at the audio level, it integrates with every conferencing app such as Zoom, Google Meet, Microsoft Teams, Slack Huddles, and more."
  },
  {
    question: "How accurate is Krisp transcription, and what affects quality?",
    answer: `Krisp transcription is tuned for real-world meetings. Accuracy remains high even in noisy environments thanks to our Noise Cancellation. Quality depends mostly on the speaker’s clarity and microphone, but because we filter out background distractions first, you will often see better results with Krisp than with standalone transcription tools.

To make transcripts even more relevant, Krisp supports Custom Vocabulary with up to 750 words. This allows you to tailor transcription to your company or industry-specific language, ensuring names, acronyms, and technical terms are captured correctly.`
  },
  {
    question: "Which languages Krisp supports for transcription?",
    answer: "Krisp supports on-device English transcription for maximum privacy and speed, plus server-based transcription in 15 additional languages including Spanish, French, German, Russian, Italian, Dutch, Polish, Portuguese, Hindi, Danish, Swedish, Norwegian, Czech, Ukrainian, and Korean. We continue to expand this list."
  },
  {
    question: "Is there a Krisp mobile app, and what features does it include?",
    answer: "Yes. The Krisp mobile app is built for on-the-go meetings. You can record and transcribe in-person conversations, capture hybrid sessions, or upload audio files for transcription. It works offline too. Today, mobile app does not include Noise Cancellation, but it is coming."
  },
  {
    question: "Does Krisp support in-person, hybrid, and online meetings?",
    answer: "Yes. Krisp covers all meeting types. Use the desktop app for online calls and for recording in-person meetings, the mobile app for on-the-go or offline discussions, and the same platform to handle hybrid situations. With Krisp Meeting Note Taker every conversation can be captured, transcribed, and summarized in one place."
  },
  {
    question: "Is Krisp only a noise-canceling app?",
    answer: "No—noise cancellation is still core, but it’s not the only thing Krisp does. Krisp combines #1 noise cancellation with an AI Note Taker and Accent AI for clear, productive meetings."
  }
];

export const footerData = {
  awards: {
    title: "Awards and recognition",
    rating: "4.7 rating",
    g2Logo: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_cs_g2.svg",
    starIcon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_g2_star_coral.svg",
    badges: [
      {
        src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/badge_ccw_disruptive.png",
        alt: "CCW Excellence Awards, Disruptive Technology of the Year",
        isCcw: true
      },
      {
        src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/badge_g2_leader.png",
        alt: "G2 Leader, Summer 2026"
      },
      {
        src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/badge_g2_best_results.png",
        alt: "G2 Best Results, Summer 2026"
      },
      {
        src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/badge_g2_best_usability.png",
        alt: "G2 Best Usability, Summer 2026"
      },
      {
        src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/badge_g2_users_love_us.png",
        alt: "G2 Users Love Us"
      }
    ]
  },
  logo: {
    src: "/silgate-logo.jpg",
    alt: "Silgate Solutions logo",
    href: "/"
  },
  socials: [
    { name: "Facebook", href: "https://www.facebook.com/krispHQ/", icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/logo_facebook.svg" },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/krisphq/", icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/logo_linkedin.svg" },
    { name: "YouTube", href: "https://www.youtube.com/channel/UCAMZinJdR9P33fZUNpuxXtg", icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/logo_youtube.svg" },
    { name: "X", href: "https://x.com/krispHQ", icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/logo_x.svg" }
  ],
  columns: [
    {
      title: "AI Meeting Assistant",
      href: "/ai-meeting-assistant",
      links: [
        { text: "Noise Cancellation", href: "/ai-meeting-assistant/noise-cancellation" },
        { text: "Accent Conversion", href: "/ai-meeting-assistant/accent-conversion" },
        { text: "Meeting Transcription", href: "/ai-meeting-assistant/meeting-transcription" },
        { text: "Meeting Note Taker", href: "/ai-meeting-assistant/ai-note-taker" },
        { text: "Meeting Recording", href: "/ai-meeting-assistant/meeting-recording" },
        { text: "Meeting Minutes & Summary", href: "/ai-meeting-assistant/meeting-summary" }
      ]
    },
    {
      title: "Call Center AI",
      href: "/call-center-ai",
      links: [
        { text: "Call Center AI Platform", href: "/call-center-ai" },
        { text: "Noise Cancellation", href: "/call-center-ai/noise-cancellation" },
        { text: "Accent Conversion", href: "/call-center-ai/accent-conversion" },
        { text: "Voice Translation", href: "/call-center-ai/voice-translation" },
        { text: "Agent Assist", href: "/call-center-ai/agent-assist" },
        { text: "Speech Analytics", href: "/call-center-ai/speech-analytics" },
        { text: "Voice Security", href: "/call-center-ai/voice-security" }
      ]
    },
    {
      title: "Developers",
      href: "/developers",
      links: [
        { text: "Voice Isolation (VIVA)", href: "/developers/voice-isolation" },
        { text: "Turn-Taking AI", href: "/developers/turn-taking" },
        { text: "Noise Cancellation SDK", href: "/developers/noise-cancellation" },
        { text: "Accent Conversion SDK", href: "/developers/accent-conversion" },
        { text: "Voice Translation API", href: "/developers/voice-translation-api" },
        { text: "Compare Translation APIs", href: "/developers/compare-translation-api" }
      ]
    },
    {
      title: "Company",
      links: [
        { text: "Contact Us", href: "/contact-sales" },
        { text: "Customers", href: "/customers" },
        { text: "Pricing", href: "/pricing" },
        { text: "Book a Demo", href: "/contact-sales" },
        { text: "Careers", href: "https://krisp.ai/careers/" },
        { text: "Blog", href: "https://krisp.ai/blog/" },
        { text: "Help Center", href: "https://help.krisp.ai/hc/en-us" }
      ]
    },
    {
      title: "Trust & Legal",
      links: [
        { text: "Security Center", href: "https://trust.krisp.ai" },
        { text: "Terms of Use", href: "https://krisp.ai/terms-of-use/" },
        { text: "Privacy Policy", href: "https://krisp.ai/privacy-policy/" },
        { text: "Accessibility", href: "https://krisp.ai/accessibility-commitment/" },
        { text: "Cookie Policy", href: "https://krisp.ai/cookie-policy/" }
      ]
    }
  ],
  copyright: "© 2026 Silgate Solutions. All rights reserved.",
  address: "Road No 8, SG Barve RD, Wagle Estate, Padwal Nagar, Thane West, Maharashtra 400604",
  email: "manoj@silgatehiring.com",
  phone: "+91 81088 10916",
  actions: [
    { text: "Book a demo", href: "/contact-sales", isPrimary: true },
    { text: "Get Krisp for free", href: "https://app.krisp.ai/sign-up", isDark: true }
  ]
};
