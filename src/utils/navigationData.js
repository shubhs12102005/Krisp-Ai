// Navigation configuration for Header Mega Menus, Mobile Menu, and Submenus
import { siteLogos } from "./constants";

export const navigationData = {
  logo: {
    src: siteLogos.main,
    alt: "Krisp logo",
    width: 72,
    height: 34,
    href: "/"
  },

  aiMeetingAssistant: {
    id: "ai-meeting-assistant",
    title: "AI Meeting Assistant",
    hasSubMenu: true,
    href: "/ai-meeting-assistant",
    card: {
      title: "AI Meeting Assistant",
      desc: "with #1 Noise Cancellation",
      buttonText: "Explore AI Meeting Assistant",
      href: "/ai-meeting-assistant",
      icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs//icon_nav_ma.svg"
    },
    groups: [
      {
        groupTitle: "AI Notetaker",
        items: [
          {
            title: "AI Note Taker",
            desc: "Automated, bot-free meeting notes and highlights",
            href: "/ai-meeting-assistant/ai-note-taker",
            icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_note_taker.svg"
          },
          {
            title: "Meeting Transcription",
            desc: "Accurate real-time speech-to-text transcripts",
            href: "/ai-meeting-assistant/meeting-transcription",
            icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_transcription.svg"
          },
          {
            title: "Meeting Recording",
            desc: "Bot-free audio and high-definition video capture",
            href: "/ai-meeting-assistant/meeting-recording",
            icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_meeting_recording.svg"
          },
          {
            title: "Meeting Summary",
            desc: "Instant summaries, next steps, and action items",
            href: "/ai-meeting-assistant/meeting-summary",
            icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_meeting_summary.svg"
          }
        ]
      },
      {
        groupTitle: "Real Time Voice AI",
        items: [
          {
            title: "Noise Cancellation",
            desc: "Remove background voices, dogs, typing, and room echo",
            href: "/ai-meeting-assistant/noise-cancellation",
            icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_noise_cancellation.svg"
          },
          {
            title: "Accent Conversion",
            desc: "Speaker-side & listener-side accent conversion",
            href: "/ai-meeting-assistant/accent-conversion",
            icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_accent_conversion.svg"
          }
        ]
      }
    ]
  },

  callCenterAI: {
    id: "call-center-ai",
    title: "Call Center AI",
    hasSubMenu: true,
    href: "/call-center-ai",
    card: {
      title: "Call Center AI",
      desc: "AI that boosts call center productivity and CSAT",
      buttonText: "Explore Call Center AI",
      href: "/call-center-ai",
      icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs//icon_nav_cc.svg"
    },
    groups: [
      {
        groupTitle: "Speech Assist",
        items: [
          {
            title: "Noise Cancellation",
            desc: "Remove floor noise, contact center chatter & echo",
            href: "/call-center-ai/noise-cancellation",
            icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_noise_cancellation.svg"
          },
          {
            title: "Accent Conversion",
            desc: "Real-time accent conversion for call center agents",
            href: "/call-center-ai/accent-conversion",
            icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_accent_conversion.svg"
          },
          {
            title: "Voice Translation",
            desc: "Real-time AI voice translation for call center agents",
            href: "/call-center-ai/voice-translation",
            icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_interpreter.svg"
          }
        ]
      },
      {
        groupTitle: "Agent & Supervisor Assist",
        items: [
          {
            title: "Agent Assist",
            desc: "Real-time AI guidance for contact center agents",
            href: "/call-center-ai/agent-assist",
            icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_agent_assist.svg"
          },
          {
            title: "Speech Analytics",
            desc: "Automated call scoring, compliance & sentiment",
            href: "/call-center-ai/speech-analytics",
            icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_speech_analytics.svg"
          },
          {
            title: "Voice Security",
            desc: "Real-time fraud detection and speaker authentication",
            href: "/call-center-ai/voice-security",
            icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_voice_security.svg"
          }
        ]
      }
    ]
  },

  developers: {
    id: "developers",
    title: "Developers",
    hasSubMenu: true,
    href: "/developers",
    card: {
      title: "Developers",
      desc: "with #1 Voice AI Models and SDKs",
      buttonText: "Explore Developers",
      href: "/developers",
      icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs//icon_nav_sdk.svg"
    },
    groups: [
      {
        groupTitle: "For Voice AI Agents",
        items: [
          {
            title: "Voice Isolation (VIVA)",
            badge: "New",
            desc: "Isolate the primary speaker’s voice on-device",
            href: "/developers/voice-isolation",
            icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_meeting_recording.svg"
          },
          {
            title: "Turn-Taking",
            desc: "Improve conversational turn-taking for Voice AI agents",
            href: "/developers/turn-taking",
            icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_echo_nav.svg"
          }
        ]
      },
      {
        groupTitle: "For Human-to-Human Calls",
        items: [
          {
            title: "Accent Conversion",
            desc: "Convert accents seamlessly in streaming audio",
            href: "/developers/accent-conversion",
            icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_accent_conversion.svg"
          },
          {
            title: "Noise Cancellation",
            desc: "Ultra low-latency noise and acoustic echo removal",
            href: "/developers/noise-cancellation",
            icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_noise_cancellation.svg"
          },
          {
            title: "Voice Translation API",
            badge: "New",
            desc: "Real-time voice-to-voice translation API",
            href: "/developers/voice-translation-api",
            icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_interpreter.svg"
          },
          {
            title: "Compare Translation API",
            desc: "Translation latency & quality providers compared side by side",
            href: "/developers/compare-translation-api",
            icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_chart.svg"
          }
        ]
      }
    ]
  },

  customers: {
    id: "customers",
    title: "Customers",
    hasSubMenu: false,
    href: "/customers"
  },

  pricing: {
    id: "pricing",
    title: "Pricing",
    hasSubMenu: false,
    href: "/pricing"
  },

  actions: {
    signIn: {
      text: "Sign in",
      href: "https://app.krisp.ai/login"
    },
    bookDemo: {
      text: "Book a demo",
      href: "/contact-sales"
    },
    getKrispDropdown: [
      {
        id: "ai-meeting-assistant-action",
        title: "AI Meeting Assistant",
        desc: "For individuals and teams",
        icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_transcript_purple.svg",
        href: "/ai-meeting-assistant"
      },
      {
        id: "call-center-ai-action",
        title: "Call Center AI",
        desc: "For BPOs and contact centers",
        icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_headset_purple_new.svg",
        href: "/call-center-ai"
      },
      {
        id: "developers-action",
        title: "Developers",
        desc: "Voice AI SDKs & Models",
        icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_nav_sdk.svg",
        href: "/developers"
      }
    ]
  }
};
