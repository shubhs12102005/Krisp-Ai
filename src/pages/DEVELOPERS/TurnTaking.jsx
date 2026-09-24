import React from "react";
import Button from "../../components/common/Button";

/**
 * Developers - Turn-Taking Independent Page.
 * Advanced acoustic models to solve conversational interruptions and latency in Voice AI bots.
 */
export default function TurnTaking() {
  const turnTakingFeatures = [
    {
      title: "Sub-50ms End-of-Turn Detection",
      desc: "Distinguishes between a natural mid-sentence pause and a genuine conversational completion, reducing robotic dead air.",
      badge: "Accurate Endpointing"
    },
    {
      title: "Intelligent Barge-In & Interruption Handling",
      desc: "Accurately senses when a human interrupts the AI without triggering false stops on coughs, clearing throats, or background thuds.",
      badge: "Natural Flow"
    },
    {
      title: "Integrated Acoustic Echo Cancellation (AEC)",
      desc: "Prevents the AI bot's own synthesized speaker output from leaking back into the microphone stream and triggering self-interruption.",
      badge: "Zero Self-Trigger"
    },
    {
      title: "Backchanneling Detection",
      desc: "Detects human agreement nods ('uh-huh', 'got it', 'sure') without abruptly cutting off the AI voice's current response.",
      badge: "Fluid Dialogue"
    }
  ];

  return (
    <div className="py-20 md:py-28 bg-white">
      <div className="krisp-container">
        {/* Hero Section */}
        <div className="max-w-[800px] mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f4f4f5] text-[#5544dc] text-[13px] font-bold mb-6">
            🎙️ Conversational Turn-Taking AI
          </div>
          <h1 className="text-[38px] md:text-[54px] font-bold leading-[1.15] text-[#131032] mb-6">
            Fluid Conversational Flow <br />
            <span className="gradient-purple">for Voice AI Agents</span>
          </h1>
          <p className="text-[18px] md:text-[20px] text-[#525069] leading-[32px] mb-8">
            Solve speech overlap, awkward bot hesitation, and false barge-in triggers with Krisp’s turn-taking acoustic intelligence engine.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" href="https://trust.krisp.ai" external className="h-[48px] px-8 text-[15px]">
              Access Turn-Taking SDK
            </Button>
            <Button variant="outline" href="/contact-sales" className="h-[48px] px-8 text-[15px]">
              Schedule Demo
            </Button>
          </div>
        </div>

        {/* Code Snippet Box */}
        <div className="max-w-[850px] mx-auto bg-[#131032] rounded-[24px] p-6 md:p-8 text-white shadow-2xl mb-24 font-mono text-[14px] border border-white/10">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 text-white/50 text-[12px]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#fe6257]"></span>
              <span className="w-3 h-3 rounded-full bg-[#f7b731]"></span>
              <span className="w-3 h-3 rounded-full bg-[#20bf6b]"></span>
              <span className="ml-2 text-white/80">turn_taking_events.js</span>
            </div>
            <span>WebSocket API</span>
          </div>

          <pre className="overflow-x-auto text-[#dfdcfe] leading-[26px]">
{`import { KrispTurnManager } from "@krisp/turn-taking";

const turnManager = new KrispTurnManager({
  endpointLatencyMs: 45,
  ignoreBackchannels: true
});

turnManager.on("user_stopped_speaking", () => {
  // Trigger immediate AI response generation
  voiceAgent.generateReply();
});

turnManager.on("user_interrupted", () => {
  // Instantly pause bot audio playback
  voiceAgent.cancelPlayback();
});`}
          </pre>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto mb-20">
          {turnTakingFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="bg-[#f7f7f8] rounded-[20px] p-8 border border-[#e7e7ea] hover:shadow-md transition-shadow"
            >
              <div className="mb-4">
                <span className="px-3 py-1 rounded-full bg-[#e8faf6] border border-[#cef4ec] text-[#008065] text-[12px] font-bold">
                  {feat.badge}
                </span>
              </div>
              <h3 className="text-[20px] font-bold text-[#131032] mb-3">
                {feat.title}
              </h3>
              <p className="text-[15px] leading-[26px] text-[#525069]">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
