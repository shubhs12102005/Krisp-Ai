export const navigationModel = {
  logo: {
    src: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_logo_main.svg",
    alt: "Krisp logo",
    width: 72,
    height: 34,
    href: "/"
  },
  menuItems: [
    {
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
              href: "/ai-meeting-assistant",
              icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_note_taker.svg"
            },
            {
              title: "Meeting Transcription",
              href: "/ai-meeting-assistant",
              icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_transcription.svg"
            },
            {
              title: "Meeting Recording",
              href: "/ai-meeting-assistant",
              icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_meeting_recording.svg"
            },
            {
              title: "Meeting Summary",
              href: "/ai-meeting-assistant",
              icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_meeting_summary.svg"
            }
          ]
        },
        {
          groupTitle: "Real Time Voice AI",
          items: [
            {
              title: "Noise Cancellation",
              href: "/ai-meeting-assistant",
              icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_noise_cancellation.svg"
            },
            {
              title: "Accent Conversion - Speaker side",
              href: "/ai-meeting-assistant",
              icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_accent_conversion.svg"
            },
            {
              title: "Accent Conversion - Listener side",
              href: "/ai-meeting-assistant",
              icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_accent_conversion_listen.svg"
            }
          ]
        }
      ]
    },
    {
      id: "call-center-ai",
      title: "Call Center AI",
      hasSubMenu: true,
      href: "/contact-center",
      card: {
        title: "Call Center AI",
        desc: "AI that boosts call center productivity",
        buttonText: "Explore platform",
        href: "/contact-center",
        icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs//icon_nav_cc.svg"
      },
      groups: [
        {
          groupTitle: "Speech Assist",
          items: [
            {
              title: "Noise Cancellation",
              desc: "Remove background noises, voices & echoes.",
              href: "/contact-center",
              icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_noise_cancellation.svg"
            },
            {
              title: "Accent Conversion",
              desc: "Real-time accent conversion for call center agents.",
              href: "/contact-center",
              icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_accent_conversion.svg"
            },
            {
              title: "Voice Translation",
              desc: "Real-time AI voice translation for call center agents.",
              href: "/contact-center",
              icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_interpreter.svg"
            }
          ]
        },
        {
          groupTitle: "Agent & Supervisor Assist",
          items: [
            {
              title: "Agent Assist",
              desc: "Real-time AI assistant for call center agents.",
              href: "/contact-center",
              icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_agent_assist.svg"
            },
            {
              title: "Speech Analytics",
              desc: "Call scoring, Compliance monitoring and more.",
              href: "/contact-center",
              icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_speech_analytics.svg"
            },
            {
              title: "Voice security",
              desc: "Real-time fraud detection and more",
              href: "/contact-center",
              icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_voice_security.svg"
            }
          ]
        }
      ]
    },
    {
      id: "developers",
      title: "Developers",
      hasSubMenu: true,
      href: "/developers",
      card: {
        title: "Developers",
        desc: "with #1 AI Voice Models",
        buttonText: "Explore developers",
        href: "/developers",
        icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs//icon_nav_sdk.svg"
      },
      groups: [
        {
          groupTitle: "For Voice AI Agents",
          items: [
            {
              title: "Voice Isolation",
              badge: "New",
              desc: "Isolate the primary speaker’s voice",
              href: "/developers",
              icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_meeting_recording.svg"
            },
            {
              title: "Turn-Taking",
              desc: "Improving turn-taking for AI",
              href: "/developers",
              icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_echo_nav.svg"
            }
          ]
        },
        {
          groupTitle: "For Human-to-human Calls",
          items: [
            {
              title: "Accent Conversion",
              desc: "Convert accents in calls",
              href: "/developers",
              icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_accent_conversion.svg"
            },
            {
              title: "Noise Cancellation",
              desc: "Noise removal in calls",
              href: "/developers",
              icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_noise_cancellation.svg"
            },
            {
              title: "Voice Translation API",
              badge: "New",
              desc: "Real-time translation, self-serve",
              href: "/developers",
              icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_interpreter.svg"
            },
            {
              title: "Compare Translation API",
              desc: "Translation providers side by side",
              href: "/developers",
              icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_chart.svg"
            }
          ]
        }
      ]
    },
    {
      id: "customers",
      title: "Customers",
      hasSubMenu: false,
      href: "/customers"
    },
    {
      id: "pricing",
      title: "Pricing",
      hasSubMenu: false,
      href: "/pricing"
    }
  ],
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
        id: "ai-meeting-assistant",
        title: "AI Meeting Assistant",
        desc: "For individuals and teams",
        icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_transcript_purple.svg",
        href: "https://app.krisp.ai/sign-up"
      },
      {
        id: "call-center-ai",
        title: "Call Center AI",
        desc: "For BPOs and call centers",
        icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_headset_purple_new.svg",
        href: "/contact-center"
      },
      {
        id: "ai-voice-sdk",
        title: "Developers",
        desc: "For Voice AI developers",
        icon: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_nav_sdk.svg",
        href: "/developers"
      }
    ]
  }
};
