import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button";

/**
 * Replicated Krisp Voice Isolation Page (Faithful Replica of krisp.ai/developers/voice-isolation/)
 */
export default function VoiceIsolation() {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [isPlayingDemo, setIsPlayingDemo] = useState(false);
  const [activeLane, setActiveLane] = useState("clean"); // 'raw' or 'clean'

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const models = [
    {
      id: "voice-isolation",
      title: "Voice Isolation 2.5",
      badge: "Flagship",
      subtitle: "Separates the person speaking from everything around them.",
      desc: "Removes competing voices, background chatter, and room echo before your STT sees the stream. Your STT engine gets one clean voice, shaped so the acoustic model reads it exactly the way it was trained to.",
      tags: ["46% lower WER", "Runs on CPU", "Lite: 3.5x less compute", "15 ms latency", "16 kHz mono"],
      code: `# Initialize VIVA 2.5 Voice Isolation\nsession = krisp.viva.connect(model="voice-isolation-2.5")\n\n# Process streaming audio in 15ms frames\nclean_frame = session.process(raw_mic_frame)\nstt_engine.push(clean_frame)`
    },
    {
      id: "turn-prediction",
      title: "Turn Prediction",
      badge: "Real-time",
      subtitle: "Predicts when a speaker is done, straight from raw audio.",
      desc: "Operates directly on acoustic pitch and cadence without requiring slow transcription. Kills the awkward 1-second pause and prevents talk-over. Multilingual out of the box.",
      tags: ["Audio-only", "Multilingual", "CPU deployed", "<200ms detection"],
      code: `# Turn prediction directly on raw audio\nis_turn_complete = session.predict_turn_end(audio_stream)\nif is_turn_complete:\n    agent.speak()`
    },
    {
      id: "interruption-prediction",
      title: "Interruption Prediction",
      badge: "New",
      subtitle: "Classifies speech that lands mid-response.",
      desc: "Distinguishes between a genuine barge-in question and a passive backchannel like 'mhm' or 'yeah'. Tells your agent exactly when to stop speaking and when to keep talking.",
      tags: ["Barge-in vs Backchannel", "Real-time", "Zero transcript delay"],
      code: `# Classify mid-speech barge-in\nevent = session.classify_interruption(incoming_audio)\nif event == InterruptionType.BARGE_IN:\n    agent.interrupt()\nelif event == InterruptionType.BACKCHANNEL:\n    agent.continue_speaking()`
    },
    {
      id: "vad",
      title: "Voice Activity Detection",
      badge: "Noise Robust",
      subtitle: "Speech or silence, accurately, even in noisy cafes.",
      desc: "Robust against background noise and secondary voices, giving your pipeline far fewer false triggers than standard energy or WebRTC VADs.",
      tags: ["Noise robust", "Low CPU", "Zero false triggers"],
      code: `# Robust VAD\nis_speaking = session.detect_vad(audio_frame)`
    },
    {
      id: "signal-detectors",
      title: "Signal Detectors",
      badge: "Intelligence",
      subtitle: "Accent, gender, and synthetic-speech detection in real time.",
      desc: "Gives your agent the intuitive read on a caller that humans take for granted. Extract actionable acoustic telemetry to dynamically route calls or tailor persona tone.",
      tags: ["Accent telemetry", "Gender detection", "TTS / Deepfake detection"],
      code: `# Telemetry detectors\nmetadata = session.analyze_signals(audio_frame)\n# returns: { accent: 'en-US-southern', synthetic_score: 0.02 }`
    }
  ];

  const testimonials = [
    {
      name: "Guarav Agarwal",
      title: "VP of product at Twilio",
      quote: "We are thrilled to partner with Krisp, a leader in Voice AI, to provide exceptional audio quality to the billions of conversations on the Twilio Video platform.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_tp_guarav.jpg",
      logo: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_twilio_lg.svg"
    },
    {
      name: "Stanislav Vishnevskiy",
      title: "CTO & Co-Founder at Discord",
      quote: "Our users expect world-class quality from all of their communication channels. Krisp delivers incredible audio clarity for over 150M Discord users.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_tp_stanislav.jpg",
      logo: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_discord_lg.svg"
    },
    {
      name: "Kumar Saurav",
      title: "Co-founder & CTO at Vodex",
      quote: "Krisp VIVA solved our biggest headache: competing background voices causing LLM hallucinations. Transcripts are crisp and accurate.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_tp_kumar.jpg",
      logo: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_vodex.svg"
    },
    {
      name: "Zach Koch",
      title: "Founder & CEO at Ultravox",
      quote: "Real-time speech-to-speech agents require turn-taking precision down to 100 milliseconds. Krisp Turn Prediction is the gold standard.",
      img: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_tp_zach.jpg",
      logo: "https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_ultravox.svg"
    }
  ];

  const faqs = [
    {
      q: "What's in VIVA 2.5?",
      a: "Voice isolation, turn-taking, and signal detectors in one unified SDK. 2.5 represents a major leap in isolation quality: 46% fewer errors on average across our evaluation set, and 70% fewer errors on background speech conditions."
    },
    {
      q: "Doesn't voice isolation make transcripts worse?",
      a: "Legacy DSP often distorted vowel formats, degrading STT accuracy. We measured exactly where this occurred: on the examples that were most problematic for Voice Isolation 2.0, errors in 2.5 dropped 77%. Across the full evaluation set, Krisp Voice Isolation 2.5 improves speech-to-text accuracy by an average of 46%."
    },
    {
      q: "Which STT engines does it work with?",
      a: "Any of them. Krisp sits in front of your STT engine and cleans the raw PCM audio stream before it enters the transcription model. We've benchmarked across ten streaming and non-streaming STT engines including Deepgram, Whisper, AssemblyAI, Google Speech-to-Text, and Amazon Transcribe."
    },
    {
      q: "Do the models need transcription or per-language setup?",
      a: "No. All VIVA models operate directly on the raw audio signal. They are completely language agnostic and need zero per-language tuning, dictionaries, or speaker enrollment."
    },
    {
      q: "How do we know the numbers are real?",
      a: "Run it on your own audio. We provide sandbox credentials and sample pipelines so your engineering team can test Krisp directly against your own call recordings. That is the only benchmark that matters."
    },
    {
      q: "We can't spare the server CPU footprint.",
      a: "That's why we built Voice Isolation 2.5 Lite. It requires 70% less compute (3.5x faster execution) and runs on commodity CPU instances without requiring GPUs. On typical phone calls, Lite matches the full model's accuracy."
    }
  ];

  return (
    <div className="bg-[#fcfcfd] text-[#131032] overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 md:pt-20 pb-16 md:pb-24 border-b border-[#ececef] overflow-hidden">
        <div className="w-[calc(100%-48px)] max-w-[1240px] mx-auto text-center">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#5544dc]/30 bg-white/90 shadow-sm text-[13px] md:text-[14px] text-[#24232d] mb-8">
            <span className="font-bold text-[#5544dc] bg-[#5544dc]/10 px-2 py-0.5 rounded text-[11px] uppercase tracking-wider">
              New
            </span>
            <span>Voice Isolation 2.5: Technical deep dive</span>
            <span className="text-[#5544dc] font-semibold ml-1">&rarr;</span>
          </div>

          <h1 className="text-[38px] sm:text-[52px] md:text-[68px] font-extrabold tracking-tight leading-[1.08] text-[#131032] mb-6 max-w-[950px] mx-auto">
            Your agent is only as good as <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#614efa] to-[#43c4fc] bg-clip-text text-transparent">
              what it hears.
            </span>
          </h1>

          <p className="text-[17px] md:text-[20px] text-[#525069] leading-[30px] md:leading-[34px] max-w-[760px] mx-auto mb-10">
            Background voices break Voice AI agents. Krisp isolates the caller’s voice on-device or in the cloud with zero enrollment and 15ms latency.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              to="/contact-sales"
              className="w-full sm:w-auto h-[52px] px-8 bg-[#614efa] hover:bg-[#4a3bbe] text-white font-bold rounded-[12px] flex items-center justify-center transition-all shadow-lg shadow-[#614efa]/25 text-[15px]"
            >
              Request VIVA SDK Access
            </Link>
            <Link
              to="/developers"
              className="w-full sm:w-auto h-[52px] px-8 bg-white border border-[#d8d8de] hover:border-[#131032] text-[#131032] font-bold rounded-[12px] flex items-center justify-center transition-all text-[15px]"
            >
              Explore Voice AI Playground
            </Link>
          </div>

          {/* VHD Dual-Lane Interactive Waveform Box */}
          <div className="bg-[#131032] rounded-[28px] p-6 md:p-8 text-white max-w-[1000px] mx-auto shadow-2xl border border-white/10 text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#62c8ff] font-bold">
                  Interactive Audio Comparison
                </span>
                <h3 className="text-[20px] font-bold text-white mt-1">
                  Multi-Speaker Cafe Interference Benchmark
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveLane("raw")}
                  className={`px-4 py-1.5 rounded-full text-[13px] font-bold transition-all ${
                    activeLane === "raw" ? "bg-red-500 text-white" : "bg-white/10 text-white/60 hover:bg-white/20"
                  }`}
                >
                  Raw Audio (With Crosstalk)
                </button>
                <button
                  onClick={() => setActiveLane("clean")}
                  className={`px-4 py-1.5 rounded-full text-[13px] font-bold transition-all ${
                    activeLane === "clean" ? "bg-[#20bf6b] text-white" : "bg-white/10 text-white/60 hover:bg-white/20"
                  }`}
                >
                  Krisp Clean Stream
                </button>
              </div>
            </div>

            {/* Visualizer Lanes */}
            <div className="space-y-4">
              {/* Lane 1: Raw */}
              <div
                onClick={() => setActiveLane("raw")}
                className={`p-4 rounded-[16px] cursor-pointer transition-all border ${
                  activeLane === "raw"
                    ? "bg-white/10 border-red-400"
                    : "bg-white/5 border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <div className="flex items-center justify-between text-[12px] font-bold text-red-400 mb-2">
                  <span>UNPROCESSED INPUT (CALLER + 2 BACKGROUND VOICES)</span>
                  <span>STT WER: 35.9%</span>
                </div>
                <div className="h-14 flex items-center gap-1">
                  {[20, 60, 85, 40, 95, 70, 30, 80, 100, 65, 45, 90, 75, 35, 85, 95, 40, 70, 85, 30].map(
                    (h, i) => (
                      <span
                        key={i}
                        className="flex-1 bg-red-400/80 rounded-full"
                        style={{ height: `${h}%` }}
                      />
                    )
                  )}
                </div>
                <div className="text-[13px] font-mono text-white/70 mt-2">
                  Transcribed by STT: "As you see, those words <span className="text-red-400 font-bold bg-red-500/20 px-1 rounded">Kumquat</span> keep on popping up in the <span className="text-red-400 font-bold bg-red-500/20 px-1 rounded">Juxtapose</span> background..."
                </div>
              </div>

              {/* Lane 2: Clean */}
              <div
                onClick={() => setActiveLane("clean")}
                className={`p-4 rounded-[16px] cursor-pointer transition-all border ${
                  activeLane === "clean"
                    ? "bg-white/10 border-green-400"
                    : "bg-white/5 border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <div className="flex items-center justify-between text-[12px] font-bold text-green-400 mb-2">
                  <span>KRISP VIVA 2.5 ISOLATED STREAM</span>
                  <span>STT WER: 8.2% (-77% ERROR DROP)</span>
                </div>
                <div className="h-14 flex items-center gap-1">
                  {[20, 45, 60, 25, 65, 45, 15, 55, 65, 40, 20, 55, 45, 20, 50, 65, 25, 45, 55, 20].map(
                    (h, i) => (
                      <span
                        key={i}
                        className="flex-1 bg-green-400 rounded-full"
                        style={{ height: `${h}%` }}
                      />
                    )
                  )}
                </div>
                <div className="text-[13px] font-mono text-green-300 mt-2">
                  Transcribed by STT: "As you see, those words <span className="font-bold underline">Kumquat</span> are clearly audible while all background chatter is completely removed."
                </div>
              </div>
            </div>
          </div>

          {/* 3 Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 mt-12 border-t border-[#e7e7ea] max-w-[850px] mx-auto">
            <div>
              <div className="text-[34px] md:text-[42px] font-extrabold text-[#131032]">46%</div>
              <div className="text-[13px] uppercase font-bold tracking-wider text-[#75738b] mt-1">
                Fewer WER Errors Across STTs
              </div>
            </div>
            <div>
              <div className="text-[34px] md:text-[42px] font-extrabold text-[#131032]">15 ms</div>
              <div className="text-[13px] uppercase font-bold tracking-wider text-[#75738b] mt-1">
                Algorithmic Latency on CPU
              </div>
            </div>
            <div>
              <div className="text-[34px] md:text-[42px] font-extrabold text-[#131032]">1B+ min</div>
              <div className="text-[13px] uppercase font-bold tracking-wider text-[#75738b] mt-1">
                Voice AI Traffic / Month
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY AGENTS BREAK - THREE THINGS GO WRONG */}
      <section className="py-20 md:py-28 bg-[#f7f7fa] border-b border-[#ececef]">
        <div className="w-[calc(100%-48px)] max-w-[1240px] mx-auto">
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <span className="text-[13px] font-bold uppercase tracking-wider text-[#614efa] bg-[#efeefa] px-3.5 py-1 rounded-full">
              Why Agents Break
            </span>
            <h2 className="text-[32px] md:text-[46px] font-extrabold text-[#131032] mt-4 mb-4">
              Demos work. Real calls don't.
            </h2>
            <p className="text-[17px] text-[#525069]">
              Three things go wrong in live calls, and all three start in the audio signal — not inside your LLM.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: A Second Voice */}
            <div className="bg-white rounded-[24px] p-8 border border-[#e4e4eb] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-[14px] bg-[#efeefa] text-[#614efa] flex items-center justify-center font-bold text-xl mb-6">
                01
              </div>
              <h3 className="text-[22px] font-bold text-[#131032] mb-3">A second voice</h3>
              <p className="text-[15px] text-[#525069] leading-[26px]">
                Modern speech-to-text handles noise reasonably well. Another person talking in the background is a completely different problem. The STT transcribes both voices into one messy string and hands your agent the hallucinated mixture.
              </p>
            </div>

            {/* Card 2: The Wrong Moment */}
            <div className="bg-white rounded-[24px] p-8 border border-[#e4e4eb] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-[14px] bg-[#efeefa] text-[#614efa] flex items-center justify-center font-bold text-xl mb-6">
                02
              </div>
              <h3 className="text-[22px] font-bold text-[#131032] mb-3">The wrong moment</h3>
              <p className="text-[15px] text-[#525069] leading-[26px]">
                Legacy agents wait for complete silence timeouts (800ms+) to decide when a turn is over. But humans naturally pause mid-thought. The result is awkward dead air on one side and talk-over on the other.
              </p>
            </div>

            {/* Card 3: Every "Mhm" is a Stop */}
            <div className="bg-white rounded-[24px] p-8 border border-[#e4e4eb] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-[14px] bg-[#efeefa] text-[#614efa] flex items-center justify-center font-bold text-xl mb-6">
                03
              </div>
              <h3 className="text-[22px] font-bold text-[#131032] mb-3">Every "mhm" is a stop</h3>
              <p className="text-[15px] text-[#525069] leading-[26px]">
                To a naive Voice AI agent, a listener acknowledging with "mhm" or "yeah" sounds like a full interruption. So the bot stops talking abruptly mid-sentence when nobody asked it to.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VIVA PIPELINE - IT SITS UNDERNEATH THE CONVERSATION */}
      <section className="py-20 md:py-28 bg-white border-b border-[#ececef]">
        <div className="w-[calc(100%-48px)] max-w-[1240px] mx-auto">
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <span className="text-[13px] font-bold uppercase tracking-wider text-[#614efa] bg-[#efeefa] px-3.5 py-1 rounded-full">
              Integration Architecture
            </span>
            <h2 className="text-[32px] md:text-[46px] font-extrabold text-[#131032] mt-4 mb-4">
              It sits underneath the conversation
            </h2>
            <p className="text-[17px] text-[#525069]">
              VIVA runs first, directly in front of your speech-to-text. Everything downstream inherits an isolated, pure signal.
            </p>
          </div>

          <div className="bg-[#f9f9fc] rounded-[28px] p-8 md:p-12 border border-[#e4e4eb] mb-12">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center">
              <div className="bg-white p-6 rounded-[20px] border border-[#e7e7ed] shadow-sm">
                <div className="text-[11px] font-bold uppercase text-[#75738b] tracking-wider mb-2">Step 1</div>
                <div className="text-[18px] font-bold text-[#131032]">Input Audio</div>
                <div className="text-[13px] text-[#68667c] mt-2">Raw caller microphone with room chatter</div>
              </div>

              <div className="bg-[#614efa] text-white p-6 rounded-[20px] shadow-lg md:scale-105 z-10">
                <div className="text-[11px] font-bold uppercase text-white/80 tracking-wider mb-2">Step 2 (15ms)</div>
                <div className="text-[18px] font-bold text-white">Krisp VIVA 2.5</div>
                <div className="text-[13px] text-white/80 mt-2">Voice Isolation & Turn Prediction on CPU</div>
              </div>

              <div className="bg-white p-6 rounded-[20px] border border-[#e7e7ed] shadow-sm">
                <div className="text-[11px] font-bold uppercase text-[#75738b] tracking-wider mb-2">Step 3</div>
                <div className="text-[18px] font-bold text-[#131032]">Transcribe (STT)</div>
                <div className="text-[13px] text-[#68667c] mt-2">Whisper, Deepgram, AssemblyAI, Google</div>
              </div>

              <div className="bg-white p-6 rounded-[20px] border border-[#e7e7ed] shadow-sm">
                <div className="text-[11px] font-bold uppercase text-[#75738b] tracking-wider mb-2">Step 4</div>
                <div className="text-[18px] font-bold text-[#131032]">Reason (LLM)</div>
                <div className="text-[13px] text-[#68667c] mt-2">GPT-4o, Claude 3.5, Gemini, Llama 3</div>
              </div>

              <div className="bg-white p-6 rounded-[20px] border border-[#e7e7ed] shadow-sm">
                <div className="text-[11px] font-bold uppercase text-[#75738b] tracking-wider mb-2">Step 5</div>
                <div className="text-[18px] font-bold text-[#131032]">Speak (TTS)</div>
                <div className="text-[13px] text-[#68667c] mt-2">ElevenLabs, Cartesia, PlayHT, Deepgram Aura</div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-[14px] text-[#525069] font-semibold">
            <span className="flex items-center gap-2">✓ Server-side on CPU</span>
            <span className="flex items-center gap-2">✓ On-prem or your cloud VPC</span>
            <span className="flex items-center gap-2">✓ LiveKit & Pipecat native</span>
            <span className="flex items-center gap-2">✓ Any STT engine supported</span>
          </div>
        </div>
      </section>

      {/* 4. FIVE MODELS. ONE INTEGRATION. */}
      <section className="py-20 md:py-28 bg-[#f7f7fa] border-b border-[#ececef]">
        <div className="w-[calc(100%-48px)] max-w-[1240px] mx-auto">
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <span className="text-[13px] font-bold uppercase tracking-wider text-[#614efa] bg-[#efeefa] px-3.5 py-1 rounded-full">
              VIVA Model Family
            </span>
            <h2 className="text-[32px] md:text-[46px] font-extrabold text-[#131032] mt-4 mb-4">
              Five models. One integration.
            </h2>
            <p className="text-[17px] text-[#525069]">
              Each model does one critical job. Run a single model or compose them together.
            </p>
          </div>

          {/* Model Navigation Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-10">
            {models.map((m, idx) => (
              <button
                key={m.id}
                onClick={() => setActiveTab(idx)}
                className={`px-5 py-3 rounded-[14px] text-[14px] font-bold transition-all ${
                  activeTab === idx
                    ? "bg-[#614efa] text-white shadow-md shadow-[#614efa]/25"
                    : "bg-white text-[#525069] hover:bg-[#efeefa] border border-[#e4e4e9]"
                }`}
              >
                {m.title}
              </button>
            ))}
          </div>

          {/* Active Model Card */}
          <div className="bg-white rounded-[28px] p-8 md:p-12 border border-[#e4e4eb] shadow-sm max-w-[1000px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="px-3.5 py-1 bg-[#efeefa] text-[#614efa] rounded-full text-[12px] font-bold uppercase tracking-wider">
                  {models[activeTab].badge}
                </span>
                <h3 className="text-[26px] md:text-[32px] font-bold text-[#131032] mt-3 mb-2">
                  {models[activeTab].title}
                </h3>
                <p className="text-[16px] font-semibold text-[#614efa] mb-4">
                  {models[activeTab].subtitle}
                </p>
                <p className="text-[15px] text-[#525069] leading-[26px] mb-6">
                  {models[activeTab].desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {models[activeTab].tags.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#f4f4f7] text-[#24232d] text-[12px] font-semibold rounded-[8px]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  to="/contact-sales"
                  className="inline-flex h-[46px] px-6 bg-[#131032] hover:bg-[#232045] text-white font-bold rounded-[10px] items-center justify-center transition-colors text-[14px]"
                >
                  Request SDK Access
                </Link>
              </div>

              {/* Code Preview */}
              <div className="bg-[#131032] rounded-[20px] p-6 text-white font-mono text-[13px] border border-white/10 shadow-lg">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-white/50 text-[11px] mb-4">
                  <span>viva_pipeline.py</span>
                  <span>Python / Node / C++</span>
                </div>
                <pre className="overflow-x-auto text-[#dfdcfe] leading-[24px]">
                  {models[activeTab].code}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DARK BENCHMARK CARD */}
      <section className="py-20 md:py-28 bg-[#131032] text-white">
        <div className="w-[calc(100%-48px)] max-w-[1240px] mx-auto">
          <div className="max-w-[900px] mx-auto text-center mb-16">
            <span className="text-[12px] font-bold uppercase tracking-wider text-[#62c8ff] bg-white/10 px-3.5 py-1 rounded-full">
              Empirical Evaluation
            </span>
            <h2 className="text-[32px] md:text-[48px] font-extrabold text-white mt-4 mb-4">
              Voice isolation your STT can actually read.
            </h2>
            <p className="text-[17px] text-[#b6b4d0] leading-[28px]">
              We measured this the way a skeptic would: 1,685 real-world recordings, three acoustic conditions, ten STT engines from seven vendors, nothing tuned to any single engine.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1100px] mx-auto mb-12">
            <div className="bg-white/5 border border-white/10 rounded-[20px] p-6 text-center">
              <div className="text-[38px] font-extrabold text-[#62c8ff]">46%</div>
              <div className="text-[14px] font-bold text-white mt-1">Fewer word errors</div>
              <div className="text-[12px] text-white/60 mt-1">15.3% &rarr; 8.2% across full set</div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[20px] p-6 text-center">
              <div className="text-[38px] font-extrabold text-[#20bf6b]">70%</div>
              <div className="text-[14px] font-bold text-white mt-1">On background voices</div>
              <div className="text-[12px] text-white/60 mt-1">35.9% &rarr; 10.9% error reduction</div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[20px] p-6 text-center">
              <div className="text-[38px] font-extrabold text-[#f7b731]">2.15%</div>
              <div className="text-[14px] font-bold text-white mt-1">Zero distortion on clean</div>
              <div className="text-[12px] text-white/60 mt-1">vs 2.10% without processing</div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[20px] p-6 text-center">
              <div className="text-[38px] font-extrabold text-[#fe6257]">77.4%</div>
              <div className="text-[14px] font-bold text-white mt-1">On best single engine</div>
              <div className="text-[12px] text-white/60 mt-1">22.5% &rarr; 5.1% word errors</div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/contact-sales"
              className="inline-flex items-center gap-2 text-[#62c8ff] font-bold text-[15px] hover:underline"
            >
              Test with your own audio recordings &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 6. TWO SIZES: LITE VS STANDARD */}
      <section className="py-20 md:py-28 bg-white border-b border-[#ececef]">
        <div className="w-[calc(100%-48px)] max-w-[1240px] mx-auto">
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <span className="text-[13px] font-bold uppercase tracking-wider text-[#614efa] bg-[#efeefa] px-3.5 py-1 rounded-full">
              Compute Efficiency
            </span>
            <h2 className="text-[32px] md:text-[46px] font-extrabold text-[#131032] mt-4 mb-4">
              Isolation on every stream, without the CPU bill
            </h2>
            <p className="text-[17px] text-[#525069]">
              Most teams cap voice isolation to the calls they think need it. Voice Isolation 2.5 Lite is light enough to leave on 100% of the time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[950px] mx-auto">
            {/* Size 1: Lite */}
            <div className="bg-[#f9f9fc] rounded-[28px] p-8 border border-[#e4e4eb] flex flex-col justify-between">
              <div>
                <span className="px-3 py-1 bg-[#20bf6b]/15 text-[#008065] text-[12px] font-bold rounded-full uppercase tracking-wider">
                  New: 70% Less Compute
                </span>
                <h3 className="text-[26px] font-bold text-[#131032] mt-3 mb-2">
                  Voice Isolation 2.5 Lite
                </h3>
                <p className="text-[15px] text-[#525069] leading-[24px] mb-6">
                  Matches the default model on typical calls, with a slight gap only in extreme overlap. Built for high-volume server fleets, edge nodes, mobile, and embedded hardware.
                </p>

                <div className="space-y-3 pt-4 border-t border-[#e7e7ed] text-[14px]">
                  <div className="flex justify-between py-1 border-b border-[#ececef]">
                    <span className="text-[#6e6c82]">Compute</span>
                    <span className="font-bold text-[#131032]">3.5x faster execution</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#ececef]">
                    <span className="text-[#6e6c82]">Latency</span>
                    <span className="font-bold text-[#131032]">15 ms</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-[#6e6c82]">Best For</span>
                    <span className="font-bold text-[#131032]">High-volume agent fleets</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Size 2: Standard */}
            <div className="bg-[#f9f9fc] rounded-[28px] p-8 border border-[#e4e4eb] flex flex-col justify-between">
              <div>
                <span className="px-3 py-1 bg-[#efeefa] text-[#614efa] text-[12px] font-bold rounded-full uppercase tracking-wider">
                  Maximum Precision
                </span>
                <h3 className="text-[26px] font-bold text-[#131032] mt-3 mb-2">
                  Voice Isolation 2.5 Standard
                </h3>
                <p className="text-[15px] text-[#525069] leading-[24px] mb-6">
                  Strongest in the hardest real-world conditions: heavy cafeteria background chatter, overlapping voices, and degraded audio streams.
                </p>

                <div className="space-y-3 pt-4 border-t border-[#e7e7ed] text-[14px]">
                  <div className="flex justify-between py-1 border-b border-[#ececef]">
                    <span className="text-[#6e6c82]">Compute</span>
                    <span className="font-bold text-[#131032]">Standard CPU thread</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#ececef]">
                    <span className="text-[#6e6c82]">Latency</span>
                    <span className="font-bold text-[#131032]">15 ms</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-[#6e6c82]">Best For</span>
                    <span className="font-bold text-[#131032]">Worst-case acoustic noise</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CUSTOMER TESTIMONIALS */}
      <section className="py-20 md:py-28 bg-[#f7f7fa] border-b border-[#ececef]">
        <div className="w-[calc(100%-48px)] max-w-[1240px] mx-auto">
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <h2 className="text-[32px] md:text-[44px] font-extrabold text-[#131032] mb-3">
              From voice AI teams
            </h2>
            <p className="text-[17px] text-[#525069]">
              How leading platforms eliminate hallucinations and latency with Krisp VIVA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((tp, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[24px] p-6 border border-[#e4e4eb] flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <img
                      src={tp.img}
                      alt={tp.name}
                      className="w-12 h-12 rounded-full object-cover border border-white shadow-sm flex-shrink-0"
                    />
                    <div>
                      <h4 className="text-[15px] font-bold text-[#131032]">{tp.name}</h4>
                      <p className="text-[12px] text-[#716f84] font-medium">{tp.title}</p>
                    </div>
                  </div>
                  <p className="text-[14px] text-[#4b4960] leading-[22px] italic">
                    "{tp.quote}"
                  </p>
                </div>
                {tp.logo && (
                  <div className="mt-6 pt-4 border-t border-[#ececef]">
                    <img
                      src={tp.logo}
                      alt="Logo"
                      className="h-5 w-auto max-w-[80px] object-contain opacity-60"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQS ACCORDION */}
      <section className="py-20 md:py-28 bg-white border-b border-[#ececef]">
        <div className="w-[calc(100%-48px)] max-w-[850px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[44px] font-extrabold text-[#131032] mb-3">
              Have questions? We've got answers.
            </h2>
            <p className="text-[17px] text-[#525069]">
              Everything you need to know about evaluating and deploying Krisp Voice Isolation 2.5.
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

      {/* 9. FINAL CTA BANNER */}
      <section className="py-20 bg-[#f7f7fa]">
        <div className="w-[calc(100%-48px)] max-w-[1240px] mx-auto">
          <div className="rounded-[32px] bg-gradient-to-r from-[#5544dc] via-[#614efa] to-[#43c4fc] p-8 md:p-16 text-white text-center shadow-xl">
            <div className="max-w-[700px] mx-auto">
              <h2 className="text-[32px] md:text-[48px] font-extrabold text-white mb-6 leading-[1.15]">
                Run it on your own calls.
              </h2>
              <p className="text-[17px] md:text-[19px] text-white/90 mb-10 leading-[30px]">
                We will set up an engineering trial on your real production audio. That is the only number that matters.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/contact-sales"
                  className="h-[52px] px-8 bg-white hover:bg-[#f0f0f4] text-[#131032] font-bold rounded-[12px] flex items-center justify-center transition-colors text-[15px] shadow-md"
                >
                  Request VIVA 2.5 SDK
                </Link>
                <Link
                  to="/developers"
                  className="h-[52px] px-8 bg-white/20 hover:bg-white/30 border border-white/40 text-white font-bold rounded-[12px] flex items-center justify-center transition-colors text-[15px]"
                >
                  Back to Developers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
