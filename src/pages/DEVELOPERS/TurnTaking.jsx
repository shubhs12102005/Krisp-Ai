import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button";

/**
 * Replicated Krisp Turn Taking Page (Faithful Replica of Krisp VIVA Turn Taking Architecture)
 */
export default function TurnTaking() {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [isSimulatingTimeline, setIsSimulatingTimeline] = useState(false);
  const [timelineMode, setTimelineMode] = useState("krisp"); // "krisp" or "traditional"

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "How does Turn Prediction work without transcription?",
      a: "Human turn-taking is primarily signaled acoustically through prosody, pitch contour drops, lengthening of terminal syllables, and energy decay. Krisp Turn Prediction v3 trains deep convolutional neural networks directly on raw audio waveforms to detect these conversational markers before silence ever occurs."
    },
    {
      q: "What is the difference between Turn Prediction and VAD?",
      a: "Voice Activity Detection (VAD) only answers a binary question: 'is there human speech sound present right now?' It cannot know whether the speaker is pausing to think or has finished their thought. Turn Prediction actively models conversational semantics from acoustic prosody to predict when the turn has concluded."
    },
    {
      q: "How does Interruption Prediction handle backchanneling?",
      a: "When a human listener says 'mhm', 'uh-huh', or 'got it', they are encouraging the speaker to keep talking. Traditional voice agents treat any sound above threshold as an interruption and stop speaking immediately. Krisp Interruption Prediction v1 classifies incoming speech within 60ms to let backchannels pass while halting the agent only for real interruptions."
    },
    {
      q: "Does Turn Prediction require language-specific models?",
      a: "No. Acoustic prosody and cadence markers for conversational turn completion are remarkably consistent across human languages. The model is language-agnostic and functions out of the box across English, Spanish, French, German, Japanese, and 50+ other languages."
    },
    {
      q: "What is the computational footprint on the server?",
      a: "Krisp Turn Taking models are ultra-lightweight and optimized for on-server CPU execution. They consume less than 2% of a single CPU core per active audio stream, allowing massive concurrency without expensive GPU clusters."
    }
  ];

  return (
    <div className="bg-[#fcfcfd] text-[#131032] overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 md:pt-20 pb-16 md:pb-24 border-b border-[#ececef] overflow-hidden">
        <div className="w-[calc(100%-48px)] max-w-[1240px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#5544dc]/30 bg-white/90 shadow-sm text-[13px] md:text-[14px] text-[#24232d] mb-8">
            <span className="font-bold text-[#5544dc] bg-[#5544dc]/10 px-2 py-0.5 rounded text-[11px] uppercase tracking-wider">
              VIVA Family
            </span>
            <span>Turn Prediction v3 & Interruption Prediction v1</span>
          </div>

          <h1 className="text-[38px] sm:text-[52px] md:text-[68px] font-extrabold tracking-tight leading-[1.08] text-[#131032] mb-6 max-w-[950px] mx-auto">
            Predict conversational turns. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#614efa] to-[#43c4fc] bg-clip-text text-transparent">
              Stop dead air and talk-over.
            </span>
          </h1>

          <p className="text-[17px] md:text-[20px] text-[#525069] leading-[30px] md:leading-[34px] max-w-[760px] mx-auto mb-10">
            Humans don't wait for 1 second of silence to respond. Neither should your Voice AI agent. Krisp Turn Taking predicts turn completion directly from raw audio with sub-200ms latency.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              to="/contact-sales"
              className="w-full sm:w-auto h-[52px] px-8 bg-[#614efa] hover:bg-[#4a3bbe] text-white font-bold rounded-[12px] flex items-center justify-center transition-all shadow-lg shadow-[#614efa]/25 text-[15px]"
            >
              Request Turn-Taking SDK
            </Link>
            <Link
              to="/developers/voice-isolation"
              className="w-full sm:w-auto h-[52px] px-8 bg-white border border-[#d8d8de] hover:border-[#131032] text-[#131032] font-bold rounded-[12px] flex items-center justify-center transition-all text-[15px]"
            >
              Explore Voice Isolation
            </Link>
          </div>

          {/* Interactive Turn-Taking Timeline Simulation Box */}
          <div className="bg-[#131032] rounded-[28px] p-6 md:p-10 text-white max-w-[1000px] mx-auto shadow-2xl border border-white/10 text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#62c8ff] font-bold">
                  Interactive Latency Comparison
                </span>
                <h3 className="text-[20px] font-bold text-white mt-1">
                  Human Speech-to-Response Turnaround
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setTimelineMode("traditional")}
                  className={`px-4 py-1.5 rounded-full text-[13px] font-bold transition-all ${
                    timelineMode === "traditional"
                      ? "bg-red-500 text-white"
                      : "bg-white/10 text-white/60 hover:bg-white/20"
                  }`}
                >
                  Legacy VAD (Silence Timeout)
                </button>
                <button
                  onClick={() => setTimelineMode("krisp")}
                  className={`px-4 py-1.5 rounded-full text-[13px] font-bold transition-all ${
                    timelineMode === "krisp"
                      ? "bg-[#20bf6b] text-white"
                      : "bg-white/10 text-white/60 hover:bg-white/20"
                  }`}
                >
                  Krisp VIVA Turn Prediction
                </button>
              </div>
            </div>

            {/* Timeline Graphic */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between text-[13px] font-semibold text-white/80 mb-2">
                  <span>User utterance: "Can you confirm my flight departure time for tomorrow morning?"</span>
                  <span className="font-mono text-[12px] text-white/50">2,400ms duration</span>
                </div>
                <div className="h-10 bg-white/10 rounded-[10px] overflow-hidden flex items-center px-4">
                  <div className="w-3/4 h-3 bg-[#62c8ff] rounded-full" />
                </div>
              </div>

              {/* Turn Completion Trigger Point */}
              <div className="p-4 rounded-[16px] bg-white/5 border border-white/10">
                <div className="flex items-center justify-between text-[13px] mb-2 font-bold">
                  <span className={timelineMode === "krisp" ? "text-green-400" : "text-red-400"}>
                    {timelineMode === "krisp"
                      ? "✓ Krisp Turn Prediction Trigger: 160ms after final syllable"
                      : "⚠ Legacy VAD Silence Timeout: 900ms dead air before trigger"}
                  </span>
                  <span className="text-[12px] font-mono text-white/60">
                    {timelineMode === "krisp" ? "Turnaround: 180ms" : "Turnaround: 1,120ms"}
                  </span>
                </div>

                <div className="w-full bg-[#1b1742] h-6 rounded-full overflow-hidden flex">
                  {timelineMode === "krisp" ? (
                    <>
                      <div className="w-[18%] bg-green-500 h-full flex items-center justify-center text-[10px] font-bold text-black">
                        180ms (Instant)
                      </div>
                      <div className="w-[82%] bg-[#614efa] h-full flex items-center px-4 text-[11px] font-bold text-white">
                        Agent Speaks: "Yes, your flight departs at 8:30 AM from Terminal 2."
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-[60%] bg-red-500/80 h-full flex items-center justify-center text-[11px] font-bold text-white">
                        900ms Dead Air Hesitation
                      </div>
                      <div className="w-[40%] bg-[#614efa]/50 h-full flex items-center px-4 text-[11px] text-white/80">
                        Late Response...
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between text-[12px] text-white/60">
              <span>✓ Audio-only prosodic classification</span>
              <span>✓ Multilingual across 50+ languages</span>
              <span>✓ Sub-2% single CPU core footprint</span>
            </div>
          </div>

          {/* 3 Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 mt-12 border-t border-[#e7e7ea] max-w-[850px] mx-auto">
            <div>
              <div className="text-[34px] md:text-[42px] font-extrabold text-[#131032]">&lt;200 ms</div>
              <div className="text-[13px] uppercase font-bold tracking-wider text-[#75738b] mt-1">
                Turn Detection Latency
              </div>
            </div>
            <div>
              <div className="text-[34px] md:text-[42px] font-extrabold text-[#131032]">0 ms</div>
              <div className="text-[13px] uppercase font-bold tracking-wider text-[#75738b] mt-1">
                Transcription Wait Delay
              </div>
            </div>
            <div>
              <div className="text-[34px] md:text-[42px] font-extrabold text-[#131032]">98.6%</div>
              <div className="text-[13px] uppercase font-bold tracking-wider text-[#75738b] mt-1">
                Backchannel Accuracy
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TWO CORE TURN-TAKING MODELS */}
      <section className="py-20 md:py-28 bg-[#f7f7fa] border-b border-[#ececef]">
        <div className="w-[calc(100%-48px)] max-w-[1240px] mx-auto">
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <span className="text-[13px] font-bold uppercase tracking-wider text-[#614efa] bg-[#efeefa] px-3.5 py-1 rounded-full">
              VIVA Architecture
            </span>
            <h2 className="text-[32px] md:text-[46px] font-extrabold text-[#131032] mt-4 mb-4">
              Two specialized models. Natural conversation.
            </h2>
            <p className="text-[17px] text-[#525069]">
              Turn Prediction signals when to start speaking. Interruption Prediction tells the bot when to stop.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1050px] mx-auto">
            {/* Model 1: Turn Prediction v3 */}
            <div className="bg-white rounded-[28px] p-8 md:p-10 border border-[#e4e4eb] shadow-sm flex flex-col justify-between">
              <div>
                <span className="px-3.5 py-1 bg-[#efeefa] text-[#614efa] rounded-full text-[12px] font-bold uppercase tracking-wider">
                  Model 01
                </span>
                <h3 className="text-[26px] font-bold text-[#131032] mt-3 mb-2">Turn Prediction v3</h3>
                <p className="text-[15px] font-semibold text-[#614efa] mb-4">
                  Predicts turn completion directly from raw audio.
                </p>
                <p className="text-[15px] text-[#525069] leading-[26px] mb-6">
                  Analyzes fundamental pitch drops, terminal vowel lengthening, and prosodic decay in streaming audio. Lets your LLM voice agent start generating audio the instant human speech completes, eliminating frustrating 1-second gaps.
                </p>

                <div className="space-y-2.5 pt-4 border-t border-[#ececef] text-[14px]">
                  <div className="flex items-center gap-2 text-[#2c2a3e]">
                    <span className="text-[#008065] font-bold">✓</span>
                    <span>No STT transcription pipeline latency</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#2c2a3e]">
                    <span className="text-[#008065] font-bold">✓</span>
                    <span>Avoids cutting off speakers who pause mid-thought</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#2c2a3e]">
                    <span className="text-[#008065] font-bold">✓</span>
                    <span>Sub-200ms turnaround time</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Model 2: Interruption Prediction v1 */}
            <div className="bg-white rounded-[28px] p-8 md:p-10 border border-[#e4e4eb] shadow-sm flex flex-col justify-between">
              <div>
                <span className="px-3.5 py-1 bg-[#efeefa] text-[#614efa] rounded-full text-[12px] font-bold uppercase tracking-wider">
                  Model 02
                </span>
                <h3 className="text-[26px] font-bold text-[#131032] mt-3 mb-2">Interruption Prediction v1</h3>
                <p className="text-[15px] font-semibold text-[#614efa] mb-4">
                  Classifies user speech mid-response in real time.
                </p>
                <p className="text-[15px] text-[#525069] leading-[26px] mb-6">
                  Distinguishes between a genuine barge-in ("Wait, can you explain that part?") versus a passive backchannel ("uh-huh", "right", "okay"). Prevents the bot from freezing whenever the caller acknowledges understanding.
                </p>

                <div className="space-y-2.5 pt-4 border-t border-[#ececef] text-[14px]">
                  <div className="flex items-center gap-2 text-[#2c2a3e]">
                    <span className="text-[#008065] font-bold">✓</span>
                    <span>60ms classification turnaround</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#2c2a3e]">
                    <span className="text-[#008065] font-bold">✓</span>
                    <span>Allows fluid backchannels without pausing the agent</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#2c2a3e]">
                    <span className="text-[#008065] font-bold">✓</span>
                    <span>Instant stop on true barge-ins</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CODE INTEGRATION */}
      <section className="py-20 md:py-28 bg-white border-b border-[#ececef]">
        <div className="w-[calc(100%-48px)] max-w-[1240px] mx-auto">
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <span className="text-[13px] font-bold uppercase tracking-wider text-[#614efa] bg-[#efeefa] px-3.5 py-1 rounded-full">
              Developer Integration
            </span>
            <h2 className="text-[32px] md:text-[46px] font-extrabold text-[#131032] mt-4 mb-4">
              Drop into your voice agent pipeline
            </h2>
            <p className="text-[17px] text-[#525069]">
              Compatible with LiveKit Agents, Pipecat, WebRTC, and custom Python or Node.js loops.
            </p>
          </div>

          <div className="bg-[#131032] rounded-[24px] p-6 md:p-8 text-white font-mono text-[13px] max-w-[900px] mx-auto shadow-2xl border border-white/10">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-white/50 text-[11px] mb-4">
              <span>turn_taking_agent.py</span>
              <span>Python 3.10+ · LiveKit / Pipecat</span>
            </div>
            <pre className="overflow-x-auto text-[#dfdcfe] leading-[24px]">
{`from krisp_viva import TurnPredictionEngine, InterruptionClassifier

# Initialize VIVA turn-taking acoustic models
turn_detector = TurnPredictionEngine(model="turn-prediction-v3")
interruption_guard = InterruptionClassifier(model="interruption-v1")

async def on_user_audio_chunk(chunk):
    # Predict conversational turn completion straight from raw PCM
    if turn_detector.is_turn_complete(chunk):
        await voice_agent.respond()

async def on_agent_speaking_audio(incoming_mic_chunk):
    # Guard against false stops on 'mhm' or 'yeah'
    event = interruption_guard.classify(incoming_mic_chunk)
    if event.is_barge_in:
        await voice_agent.stop()
    elif event.is_backchannel:
        # Ignore backchannel nod; continue talking smoothly
        pass`}
            </pre>
          </div>
        </div>
      </section>

      {/* 4. FAQS ACCORDION */}
      <section className="py-20 md:py-28 bg-[#f7f7fa] border-b border-[#ececef]">
        <div className="w-[calc(100%-48px)] max-w-[850px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[44px] font-extrabold text-[#131032] mb-3">
              Frequently asked questions
            </h2>
            <p className="text-[17px] text-[#525069]">
              Everything you need to know about conversational turn-taking and interruption handling.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-[18px] border border-[#e2e2e8] overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-[16px] md:text-[18px] text-[#131032] hover:text-[#614efa] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className={`w-8 h-8 rounded-full bg-[#f4f4f7] flex items-center justify-center flex-shrink-0 text-xl transition-transform ${isOpen ? "rotate-45" : ""}`}>
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

      {/* 5. FINAL CTA BANNER */}
      <section className="py-20 bg-white">
        <div className="w-[calc(100%-48px)] max-w-[1240px] mx-auto">
          <div className="rounded-[32px] bg-gradient-to-r from-[#5544dc] via-[#614efa] to-[#43c4fc] p-8 md:p-16 text-white text-center shadow-xl">
            <div className="max-w-[700px] mx-auto">
              <h2 className="text-[32px] md:text-[48px] font-extrabold text-white mb-6 leading-[1.15]">
                Make your Voice AI agents conversationally fluent.
              </h2>
              <p className="text-[17px] md:text-[19px] text-white/90 mb-10 leading-[30px]">
                Eliminate awkward hesitations and false stops on production calls with Krisp Turn Taking.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/contact-sales"
                  className="h-[52px] px-8 bg-white hover:bg-[#f0f0f4] text-[#131032] font-bold rounded-[12px] flex items-center justify-center transition-colors text-[15px] shadow-md"
                >
                  Request Turn-Taking SDK Access
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
