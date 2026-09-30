import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button";

/**
 * Replicated Krisp Voice Translation API Page (Faithful Replica of krisp.ai/developers/voice-translation-api/)
 */
export default function VoiceTranslationAPI() {
  const [activeCodeTab, setActiveCodeTab] = useState(0);
  const [copiedCode, setCopiedCode] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  // Live interactive demo simulator state
  const [isDemoActive, setIsDemoActive] = useState(false);
  const [sourceLang, setSourceLang] = useState("en-US");
  const [targetLang, setTargetLang] = useState("es-ES");

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const codeSnippets = [
    {
      title: "Python SDK",
      language: "python",
      code: `import asyncio
from krisp_vt import KrispTranslationClient, VtSessionConfig, VtVoice

async def main():
    # 1. Initialize client with your API key
    client = KrispTranslationClient(api_key="your_api_key_here")

    # 2. Configure translation session
    config = VtSessionConfig(
        input_language_code  = "en-US",        # Source BCP-47
        output_language_code = "es-ES",        # Target BCP-47
        voice                = VtVoice.FEMALE, # Voice persona
        preserve_emotion     = True,
        enable_bvc           = True            # Background voice cancel
    )

    # 3. Open real-time WebSocket audio session
    async with client.create_stream_session(config) as session:
        async for translated_audio in session.stream_audio(mic_audio_stream):
            speaker_output.play(translated_audio)

asyncio.run(main())`
    },
    {
      title: "Callbacks",
      language: "python",
      code: `def on_transcript(event):
    print(f"Original [{event.language}]: {event.text}")

def on_translation(event):
    print(f"Translated [{event.language}]: {event.text}")
    print(f"TTFS: {event.metrics.time_to_first_sound}ms")

# Register real-time callbacks
session.on("transcript", on_transcript)
session.on("translation", on_translation)
session.on("error", lambda err: print(f"Error: {err}"))`
    },
    {
      title: "Session Config (JSON)",
      language: "json",
      code: `{
  "session": {
    "auth_token": "krisp_live_sec_994b7e12...",
    "input_language": "en-US",
    "output_language": "es-ES",
    "voice_profile": "female_warm",
    "audio_format": {
      "sample_rate": 16000,
      "encoding": "linear16",
      "channels": 1
    },
    "features": {
      "background_voice_cancellation": true,
      "custom_vocabulary": ["Krisp", "Chargebee", "Kubernetes"],
      "latency_mode": "ultra_low"
    }
  }
}`
    },
    {
      title: "Node.js SDK",
      language: "javascript",
      code: `import { KrispTranslationClient } from "@krisp/voice-translation";

const client = new KrispTranslationClient({ apiKey: process.env.KRISP_API_KEY });

const session = await client.createSession({
  sourceLanguage: "en-US",
  targetLanguage: "fr-FR",
  voice: "male_neutral",
  sampleRate: 16000
});

session.on("translatedChunk", (pcmChunk) => {
  audioSink.write(pcmChunk);
});

// Push raw microphone PCM chunks (16kHz mono 16-bit)
micStream.on("data", (chunk) => session.sendAudio(chunk));`
    },
    {
      title: "Node.js Callbacks",
      language: "javascript",
      code: `session.on("transcript", ({ text, isFinal }) => {
  console.log(\`Speaker said: \${text} [\${isFinal ? "FINAL" : "PARTIAL"}]\`);
});

session.on("translation", ({ translatedText, latencyMs }) => {
  console.log(\`Translated text: \${translatedText} (Turnaround: \${latencyMs}ms)\`);
});

session.on("speakerActivity", ({ isSpeaking, backgroundNoiseLevel }) => {
  updateUIActivity(isSpeaking, backgroundNoiseLevel);
});`
    }
  ];

  const faqs = [
    {
      q: "What was this engine built for?",
      a: "The Krisp engine was built inside enterprise contact centers — the most unforgiving acoustic environment for voice AI. It was designed from day one to handle heavy background chatter, noisy telephony headsets, thick accents, and critical alphanumeric data like credit card numbers and addresses."
    },
    {
      q: "Is this the same engine as the enterprise product?",
      a: "Yes. Same deep learning acoustic models, same 96% accuracy, same 61 language pairs. The API provides the exact core translation engine powering global BPO contact centers, now accessible self-serve via REST and WebSockets."
    },
    {
      q: "How many languages does the voice translation API support?",
      a: "61 production languages including locale-specific dialects: US Spanish vs. European Spanish, French Canadian vs. Parisian French, Brazilian Portuguese vs. European Portuguese, plus standard Japanese, Mandarin, German, Italian, Hindi, and more."
    },
    {
      q: "How do Custom Vocabulary and Dictionary work?",
      a: "Custom Vocabulary lets you supply domain-specific terms, pharmaceutical names, acronyms, or corporate product SKUs at session initialization. The engine prioritizes those acoustic patterns so entity names are never mistranslated."
    },
    {
      q: "Does the AI voice translation API work with noisy audio?",
      a: "Yes. Unlike typical translation APIs that break down when two people speak at once, the Krisp engine includes built-in Background Voice Cancellation. It filters out surrounding conversation before translation occurs."
    },
    {
      q: "What SDKs and languages are available?",
      a: "We provide official Python and JavaScript/TypeScript SDKs with turnkey WebSocket connections. Raw WebSockets and REST endpoints can be called from Go, Rust, Java, C++, or C#."
    },
    {
      q: "How does speech-to-speech translation work?",
      a: "Streaming raw audio enters Krisp, is isolated from background noise, transcribed by telephony-tuned acoustic models, translated with contextual grammar adaptation, and synthesized in the target language while preserving the original speaker's vocal emotion and pace."
    }
  ];

  return (
    <div className="bg-[#fcfcfd] text-[#131032] overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 md:pt-20 pb-16 md:pb-24 border-b border-[#ececef] overflow-hidden">
        <div className="w-[calc(100%-48px)] max-w-[1240px] mx-auto text-center">
          {/* Compliance & Security Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-8">
            <span className="px-3.5 py-1 rounded-full bg-[#131032] text-white text-[12px] font-bold">
              SOC 2 Type II
            </span>
            <span className="px-3.5 py-1 rounded-full bg-[#131032] text-white text-[12px] font-bold">
              HIPAA Compliant
            </span>
            <span className="px-3.5 py-1 rounded-full bg-[#131032] text-white text-[12px] font-bold">
              GDPR Verified
            </span>
            <span className="px-3.5 py-1 rounded-full bg-[#131032] text-white text-[12px] font-bold">
              PCI-DSS
            </span>
          </div>

          <h1 className="text-[38px] sm:text-[52px] md:text-[68px] font-extrabold tracking-tight leading-[1.08] text-[#131032] mb-6 max-w-[950px] mx-auto">
            Voice Translation API. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#614efa] to-[#43c4fc] bg-clip-text text-transparent">
              Built for accuracy.
            </span>
          </h1>

          <p className="text-[17px] md:text-[20px] text-[#525069] leading-[30px] md:leading-[34px] max-w-[760px] mx-auto mb-10">
            Real-time speech-to-speech translation across 61 languages, any-to-any. Built inside enterprise contact centers with 96% accuracy on live calls. Self-serve API with 60 minutes free credit.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              to="/contact-sales"
              className="w-full sm:w-auto h-[52px] px-8 bg-[#614efa] hover:bg-[#4a3bbe] text-white font-bold rounded-[12px] flex items-center justify-center transition-all shadow-lg shadow-[#614efa]/25 text-[15px]"
            >
              Get Free API Key (60 Mins)
            </Link>
            <Link
              to="/developers/compare-translation-api"
              className="w-full sm:w-auto h-[52px] px-8 bg-white border border-[#d8d8de] hover:border-[#131032] text-[#131032] font-bold rounded-[12px] flex items-center justify-center transition-all text-[15px]"
            >
              Compare Translation APIs &rarr;
            </Link>
          </div>

          {/* Interactive Live VT Demo Console */}
          <div className="bg-[#131032] rounded-[28px] p-6 md:p-10 text-white max-w-[950px] mx-auto shadow-2xl border border-white/10 text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#62c8ff] font-bold">
                  Interactive API Demonstration
                </span>
                <h3 className="text-[20px] font-bold text-white mt-1">
                  Real-Time Bi-Directional Speech Translation
                </h3>
              </div>

              {/* Language Selector Pair */}
              <div className="flex items-center gap-2">
                <select
                  value={sourceLang}
                  onChange={(e) => setSourceLang(e.target.value)}
                  className="bg-white/10 text-white border border-white/20 rounded-[10px] px-3 py-1.5 text-[13px] font-semibold focus:outline-none"
                >
                  <option value="en-US" className="bg-[#131032]">English (US)</option>
                  <option value="fr-FR" className="bg-[#131032]">French (France)</option>
                  <option value="de-DE" className="bg-[#131032]">German</option>
                  <option value="es-ES" className="bg-[#131032]">Spanish (Spain)</option>
                </select>
                <span className="text-white/60 font-bold">&rarr;</span>
                <select
                  value={targetLang}
                  onChange={(e) => setTargetLang(e.target.value)}
                  className="bg-white/10 text-white border border-white/20 rounded-[10px] px-3 py-1.5 text-[13px] font-semibold focus:outline-none"
                >
                  <option value="es-ES" className="bg-[#131032]">Spanish (Spain)</option>
                  <option value="pt-BR" className="bg-[#131032]">Portuguese (Brazil)</option>
                  <option value="ja-JP" className="bg-[#131032]">Japanese</option>
                  <option value="fr-FR" className="bg-[#131032]">French</option>
                </select>
              </div>
            </div>

            {/* Simulated Live Microphone & Transcript Box */}
            <div className="bg-white/5 rounded-[20px] p-6 border border-white/10 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsDemoActive(!isDemoActive)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-all ${
                      isDemoActive ? "bg-red-500 text-white animate-pulse" : "bg-[#614efa] text-white hover:bg-[#4a3bbe]"
                    }`}
                  >
                    {isDemoActive ? "■" : "▶"}
                  </button>
                  <div>
                    <div className="text-[14px] font-bold text-white">
                      {isDemoActive ? "Streaming Live Audio..." : "Click Play to simulate incoming speech"}
                    </div>
                    <div className="text-[12px] text-white/50">
                      WebSocket connection: <span className="text-green-400 font-mono">wss://api.krisp.ai/v1/translate</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 h-6">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <span
                      key={i}
                      className={`w-1 rounded-full transition-all duration-200 ${
                        isDemoActive ? "bg-[#43c4fc]" : "bg-white/20"
                      }`}
                      style={{ height: isDemoActive ? `${((i * 13) % 80) + 20}%` : "30%" }}
                    />
                  ))}
                </div>
              </div>

              {/* Chat bubbles */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="bg-white/5 p-4 rounded-[14px] border border-white/5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#62c8ff] mb-1">
                    Original Speaker (English):
                  </div>
                  <div className="text-[15px] font-medium text-white/90">
                    "Hello, I am calling regarding my invoice number 4819-AX and I would like to update my billing address."
                  </div>
                </div>

                <div className="bg-[#614efa]/20 p-4 rounded-[14px] border border-[#614efa]/40">
                  <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-green-300 mb-1">
                    <span>Translated Output (Spanish):</span>
                    <span className="text-[11px] font-mono text-white/70">Turnaround: 380ms · BLEU: 98.2</span>
                  </div>
                  <div className="text-[15px] font-medium text-white">
                    "Hola, llamo en relación con mi factura número 4819-AX y me gustaría actualizar mi dirección de facturación."
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between text-[12px] text-white/60">
              <span>✓ Alphanumeric entity tokens preserved exactly</span>
              <span>✓ Background voice cancellation active</span>
              <span>✓ 99.9% Production SLA</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRANSLATION TECHNOLOGY - 6 FEATURE CARDS */}
      <section className="py-20 md:py-28 bg-[#f7f7fa] border-b border-[#ececef]">
        <div className="w-[calc(100%-48px)] max-w-[1240px] mx-auto">
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <span className="text-[13px] font-bold uppercase tracking-wider text-[#614efa] bg-[#efeefa] px-3.5 py-1 rounded-full">
              Translation Technology
            </span>
            <h2 className="text-[32px] md:text-[46px] font-extrabold text-[#131032] mt-4 mb-4">
              Same translation behind Krisp CX Enterprise
            </h2>
            <p className="text-[17px] text-[#525069]">
              Engineered specifically for live calls where misheard numbers or words mean angry customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-[24px] p-8 border border-[#e4e4eb] shadow-sm hover:shadow-md transition-shadow">
              <div className="text-[32px] font-black text-[#614efa] mb-3">96%</div>
              <h3 className="text-[20px] font-bold text-[#131032] mb-2">Accuracy on Live Calls</h3>
              <p className="text-[15px] text-[#525069] leading-[24px]">
                Built inside enterprise contact centers, not sterile test labs. Handles fast speakers, interruptions, and noisy audio without losing context.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[24px] p-8 border border-[#e4e4eb] shadow-sm hover:shadow-md transition-shadow">
              <div className="text-[28px] font-black text-[#131032] mb-3">123-AX</div>
              <h3 className="text-[20px] font-bold text-[#131032] mb-2">Names, Numbers, Emails…</h3>
              <p className="text-[15px] text-[#525069] leading-[24px]">
                Preserves critical alphanumeric identifiers, dates, tracking numbers, and email handles with zero phonetic substitution errors.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[24px] p-8 border border-[#e4e4eb] shadow-sm hover:shadow-md transition-shadow">
              <div className="text-[32px] font-black text-[#008065] mb-3">61</div>
              <h3 className="text-[20px] font-bold text-[#131032] mb-2">Languages, Any-to-Any</h3>
              <p className="text-[15px] text-[#525069] leading-[24px]">
                Full bidirectional translation matrix across 61 languages with localized regional dialect models (US vs EU Spanish, Brazilian Portuguese).
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-[24px] p-8 border border-[#e4e4eb] shadow-sm hover:shadow-md transition-shadow">
              <div className="text-[28px] font-black text-[#e05638] mb-3">BVC</div>
              <h3 className="text-[20px] font-bold text-[#131032] mb-2">Background Voice Removal</h3>
              <p className="text-[15px] text-[#525069] leading-[24px]">
                Includes built-in Background Voice Cancellation. Secondary voices in the room are muted before entering the translation model.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-[24px] p-8 border border-[#e4e4eb] shadow-sm hover:shadow-md transition-shadow">
              <div className="text-[28px] font-black text-[#614efa] mb-3">Dialects</div>
              <h3 className="text-[20px] font-bold text-[#131032] mb-2">Accent Robust</h3>
              <p className="text-[15px] text-[#525069] leading-[24px]">
                Trained on diverse real-world global accents so non-native speakers are transcribed and translated with pristine fidelity.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-[24px] p-8 border border-[#e4e4eb] shadow-sm hover:shadow-md transition-shadow">
              <div className="text-[28px] font-black text-[#131032] mb-3">Custom</div>
              <h3 className="text-[20px] font-bold text-[#131032] mb-2">Custom Vocabulary & Dict</h3>
              <p className="text-[15px] text-[#525069] leading-[24px]">
                Inject your brand names, proprietary SKUs, and specialized medical/financial terms at session setup to guarantee proper pronunciation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CODE SNIPPET TABS */}
      <section className="py-20 md:py-28 bg-white border-b border-[#ececef]">
        <div className="w-[calc(100%-48px)] max-w-[1240px] mx-auto">
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <span className="text-[13px] font-bold uppercase tracking-wider text-[#614efa] bg-[#efeefa] px-3.5 py-1 rounded-full">
              Quickstart
            </span>
            <h2 className="text-[32px] md:text-[46px] font-extrabold text-[#131032] mt-4 mb-4">
              From zero to translated audio in 5 minutes
            </h2>
            <p className="text-[17px] text-[#525069]">
              A real-time translation API you can self-serve from minute one. Sign up, get an API key, and start translating. No sales call, no procurement cycle.
            </p>
          </div>

          <div className="bg-[#131032] rounded-[28px] border border-white/10 shadow-2xl overflow-hidden max-w-[1000px] mx-auto">
            {/* Tabs Header */}
            <div className="flex flex-wrap items-center justify-between border-b border-white/10 px-6 py-4 bg-[#1b1742]">
              <div className="flex flex-wrap items-center gap-2">
                {codeSnippets.map((tab, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveCodeTab(idx)}
                    className={`px-4 py-2 rounded-[10px] text-[13px] font-bold transition-all ${
                      activeCodeTab === idx
                        ? "bg-[#614efa] text-white"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>

              <button
                onClick={() => copyToClipboard(codeSnippets[activeCodeTab].code)}
                className="px-3.5 py-1.5 rounded-[8px] bg-white/10 hover:bg-white/20 text-white text-[12px] font-bold flex items-center gap-1.5 transition-colors"
              >
                <span>{copiedCode ? "✓ Copied" : "Copy Code"}</span>
              </button>
            </div>

            {/* Code Body */}
            <div className="p-6 md:p-8 font-mono text-[13px] leading-[24px] overflow-x-auto text-[#e2dffe]">
              <pre>{codeSnippets[activeCodeTab].code}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRICING TABLE */}
      <section className="py-20 md:py-28 bg-[#f7f7fa] border-b border-[#ececef]">
        <div className="w-[calc(100%-48px)] max-w-[1240px] mx-auto">
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <span className="text-[13px] font-bold uppercase tracking-wider text-[#614efa] bg-[#efeefa] px-3.5 py-1 rounded-full">
              Pricing Plans
            </span>
            <h2 className="text-[32px] md:text-[46px] font-extrabold text-[#131032] mt-4 mb-4">
              Predictable pricing that scales with you
            </h2>
            <p className="text-[17px] text-[#525069]">
              Transparent subscription tiers with 60 minutes of free translation credit on every new account.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1100px] mx-auto">
            {/* Starter */}
            <div className="bg-white rounded-[24px] p-8 border border-[#e4e4eb] flex flex-col justify-between shadow-sm">
              <div>
                <h3 className="text-[22px] font-bold text-[#131032]">Starter</h3>
                <div className="mt-4 mb-2 flex items-baseline gap-1">
                  <span className="text-[42px] font-black text-[#131032]">$249</span>
                  <span className="text-[14px] text-[#716f84]">/ month</span>
                </div>
                <div className="text-[13px] text-[#716f84] mb-6">$5.53 / hr · billed monthly</div>

                <div className="space-y-3 pt-4 border-t border-[#e7e7ed] text-[14px] text-[#525069]">
                  <div className="flex justify-between py-1">
                    <span>Hours included</span>
                    <span className="font-bold text-[#131032]">45 hrs/mo</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Concurrency</span>
                    <span className="font-bold text-[#131032]">3 streams</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Overage</span>
                    <span className="font-bold text-[#131032]">$7.00 / hr</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>BVC included</span>
                    <span className="font-bold text-[#20bf6b]">✓ Yes</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Support</span>
                    <span className="font-bold text-[#131032]">Community</span>
                  </div>
                </div>
              </div>

              <Link
                to="/contact-sales"
                className="mt-8 w-full h-[48px] bg-white border border-[#131032] hover:bg-[#131032] hover:text-white text-[#131032] font-bold rounded-[12px] flex items-center justify-center transition-colors text-[14px]"
              >
                Get API Key
              </Link>
            </div>

            {/* Advanced */}
            <div className="bg-white rounded-[24px] p-8 border-2 border-[#614efa] flex flex-col justify-between shadow-xl relative">
              <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-[#614efa] text-white rounded-full text-[11px] font-bold uppercase tracking-wider">
                Most Popular
              </span>
              <div>
                <h3 className="text-[22px] font-bold text-[#131032]">Advanced</h3>
                <div className="mt-4 mb-2 flex items-baseline gap-1">
                  <span className="text-[42px] font-black text-[#131032]">$799</span>
                  <span className="text-[14px] text-[#716f84]">/ month</span>
                </div>
                <div className="text-[13px] text-[#716f84] mb-6">$5.53 / hr · billed monthly</div>

                <div className="space-y-3 pt-4 border-t border-[#e7e7ed] text-[14px] text-[#525069]">
                  <div className="flex justify-between py-1">
                    <span>Hours included</span>
                    <span className="font-bold text-[#131032]">150 hrs/mo</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Concurrency</span>
                    <span className="font-bold text-[#131032]">10 streams</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Overage</span>
                    <span className="font-bold text-[#131032]">$6.50 / hr</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>BVC included</span>
                    <span className="font-bold text-[#20bf6b]">✓ Yes</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Support</span>
                    <span className="font-bold text-[#131032]">Email + Community</span>
                  </div>
                </div>
              </div>

              <Link
                to="/contact-sales"
                className="mt-8 w-full h-[48px] bg-[#614efa] hover:bg-[#4a3bbe] text-white font-bold rounded-[12px] flex items-center justify-center transition-colors text-[14px] shadow-md shadow-[#614efa]/25"
              >
                Get API Key
              </Link>
            </div>

            {/* Enterprise */}
            <div className="bg-white rounded-[24px] p-8 border border-[#e4e4eb] flex flex-col justify-between shadow-sm">
              <div>
                <h3 className="text-[22px] font-bold text-[#131032]">Enterprise</h3>
                <div className="mt-4 mb-2 flex items-baseline gap-1">
                  <span className="text-[42px] font-black text-[#131032]">Custom</span>
                </div>
                <div className="text-[13px] text-[#716f84] mb-6">Tailored hours and SLAs</div>

                <div className="space-y-3 pt-4 border-t border-[#e7e7ed] text-[14px] text-[#525069]">
                  <div className="flex justify-between py-1">
                    <span>Hours included</span>
                    <span className="font-bold text-[#131032]">Custom capacity</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Concurrency</span>
                    <span className="font-bold text-[#131032]">Unlimited pooled</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Overage</span>
                    <span className="font-bold text-[#131032]">Volume discounted</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>VPC / On-Prem</span>
                    <span className="font-bold text-[#20bf6b]">✓ Available</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Support</span>
                    <span className="font-bold text-[#131032]">Dedicated 99.9% SLA</span>
                  </div>
                </div>
              </div>

              <Link
                to="/contact-sales"
                className="mt-8 w-full h-[48px] bg-[#131032] hover:bg-[#232045] text-white font-bold rounded-[12px] flex items-center justify-center transition-colors text-[14px]"
              >
                Talk to Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQS ACCORDION */}
      <section className="py-20 md:py-28 bg-white border-b border-[#ececef]">
        <div className="w-[calc(100%-48px)] max-w-[850px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[44px] font-extrabold text-[#131032] mb-3">
              Frequently asked questions
            </h2>
            <p className="text-[17px] text-[#525069]">
              Everything you need to know about the Krisp Voice Translation API.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-[#f9f9fc] rounded-[18px] border border-[#e2e2e8] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-[16px] md:text-[18px] text-[#131032] hover:text-[#614efa] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className={`w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0 text-xl border border-[#e4e4e9] transition-transform ${isOpen ? "rotate-45" : ""}`}>
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-[15px] text-[#525069] leading-[26px] border-t border-[#ececef] pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA BANNER */}
      <section className="py-20 bg-[#f7f7fa]">
        <div className="w-[calc(100%-48px)] max-w-[1240px] mx-auto">
          <div className="rounded-[32px] bg-gradient-to-r from-[#5544dc] via-[#614efa] to-[#43c4fc] p-8 md:p-16 text-white text-center shadow-xl">
            <div className="max-w-[700px] mx-auto">
              <h2 className="text-[32px] md:text-[48px] font-extrabold text-white mb-6 leading-[1.15]">
                The most accurate Voice Translation API for real-world calls.
              </h2>
              <p className="text-[17px] md:text-[19px] text-white/90 mb-10 leading-[30px]">
                Start with 60 free minutes. Connect via WebSocket or Python/Node SDK in under 5 minutes.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/contact-sales"
                  className="h-[52px] px-8 bg-white hover:bg-[#f0f0f4] text-[#131032] font-bold rounded-[12px] flex items-center justify-center transition-colors text-[15px] shadow-md"
                >
                  Get API Key Now
                </Link>
                <Link
                  to="/developers/compare-translation-api"
                  className="h-[52px] px-8 bg-white/20 hover:bg-white/30 border border-white/40 text-white font-bold rounded-[12px] flex items-center justify-center transition-colors text-[15px]"
                >
                  Compare Side-by-Side
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
