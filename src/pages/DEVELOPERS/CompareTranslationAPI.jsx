import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button";

/**
 * Replicated Krisp Compare Translation API Page (Faithful Replica of krisp.ai/vt-comparison/)
 */
export default function CompareTranslationAPI() {
  const [sourceLang, setSourceLang] = useState("English");
  const [targetLang, setTargetLang] = useState("Spanish");
  const [selectedPreset, setSelectedPreset] = useState("support");
  const [isSimulating, setIsSimulating] = useState(false);
  const [playbackVolume, setPlaybackVolume] = useState({ krisp: true, openai: false, gemini: false });
  const [isAddProviderOpen, setIsAddProviderOpen] = useState(false);
  const [activeProviders, setActiveProviders] = useState(["krisp", "openai", "gemini"]);

  const samplePresets = {
    support: {
      title: "Customer Support Call",
      rawText: "Hi there, I was charged twice on my credit card for invoice number 782-X. Can you please check my account balance?",
      krisp: "Hola, me han cobrado dos veces en mi tarjeta de crédito la factura número 782-X. ¿Podría revisar el saldo de mi cuenta?",
      openai: "Hola, me cobraron dos veces en mi tarjeta por la factura 782-X. ¿Puedes ver mi saldo?",
      gemini: "Hola, vi dos cobros en mi tarjeta de crédito para la factura setecientos ochenta y dos equis. ¿Me ayuda a verificar el balance?"
    },
    medical: {
      title: "Telehealth Prescription",
      rawText: "The patient is taking 50 milligrams of Amoxicillin twice daily with meals. No prior allergic reactions noted.",
      krisp: "El paciente toma 50 miligramos de amoxicilina dos veces al día con las comidas. No se registran reacciones alérgicas previas.",
      openai: "El paciente está tomando 50 mg de amoxicilina dos veces al día con comida. Sin alergias registradas.",
      gemini: "El paciente toma cincuenta miligramos de amoxicilina con comida dos veces por día. Sin alergias previas."
    },
    travel: {
      title: "Hotel Reservation",
      rawText: "I would like to reserve a non-smoking double room for three nights starting October 14th under the name Robertson.",
      krisp: "Me gustaría reservar una habitación doble para no fumadores por tres noches a partir del 14 de octubre a nombre de Robertson.",
      openai: "Quisiera reservar una habitación doble de no fumadores por tres noches desde el 14 de octubre a nombre de Robertson.",
      gemini: "Deseo reservar una habitación doble para no fumar tres noches comenzando el catorce de octubre para Robertson."
    }
  };

  const handleTogglePlay = () => {
    setIsSimulating(!isSimulating);
  };

  const toggleSound = (provider) => {
    setPlaybackVolume({
      krisp: false,
      openai: false,
      gemini: false,
      [provider]: !playbackVolume[provider]
    });
  };

  return (
    <div className="bg-[#fcfcfd] text-[#131032] overflow-x-hidden min-h-screen">
      {/* 1. TOP HEADER & INTRO BANNER */}
      <section className="relative pt-12 md:pt-16 pb-12 bg-white border-b border-[#ececef]">
        <div className="w-[calc(100%-48px)] max-w-[1280px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#131032] text-white text-[12px] font-bold mb-6">
            <span>Voice Translation Workbench</span>
          </div>

          <h1 className="text-[36px] sm:text-[48px] md:text-[60px] font-extrabold text-[#131032] tracking-tight leading-[1.1] mb-4">
            Voice Translation, side by side
          </h1>
          <p className="text-[17px] md:text-[19px] text-[#525069] max-w-[760px] mx-auto mb-8">
            Speak once and compare Krisp against OpenAI, Gemini and Qwen on the same live audio — real-time transcript, translation and latency.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/developers/voice-translation-api"
              className="px-5 py-2.5 bg-[#614efa] hover:bg-[#4a3bbe] text-white text-[14px] font-bold rounded-[10px] transition-colors"
            >
              Get Free Krisp VT API Key
            </Link>
            <Link
              to="/developers"
              className="px-5 py-2.5 bg-white border border-[#d8d8de] hover:border-[#131032] text-[#131032] text-[14px] font-bold rounded-[10px] transition-colors"
            >
              All Developer Models
            </Link>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE COMPARISON CONSOLE */}
      <section className="py-10 bg-[#f7f7fa]">
        <div className="w-[calc(100%-48px)] max-w-[1320px] mx-auto">
          {/* Controls Bar */}
          <div className="bg-white rounded-[24px] p-6 border border-[#e4e4eb] shadow-sm mb-8 flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Left: Brand & Language Pair */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 bg-[#131032] text-white px-3.5 py-1.5 rounded-[10px]">
                <span className="font-extrabold text-[14px]">Krisp</span>
                <span className="text-[11px] bg-white/20 px-1.5 py-0.5 rounded font-bold uppercase">Compare</span>
              </div>

              {/* Language Selection */}
              <div className="flex items-center gap-2">
                <select
                  value={sourceLang}
                  onChange={(e) => setSourceLang(e.target.value)}
                  className="bg-[#f4f4f7] border border-[#e2e2e8] text-[#131032] font-bold text-[13px] rounded-[10px] px-3 py-2 focus:outline-none"
                >
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                  <option value="German">German</option>
                  <option value="Mandarin">Mandarin</option>
                </select>

                <span className="text-[#75738b] font-bold">&rarr;</span>

                <select
                  value={targetLang}
                  onChange={(e) => setTargetLang(e.target.value)}
                  className="bg-[#f4f4f7] border border-[#e2e2e8] text-[#131032] font-bold text-[13px] rounded-[10px] px-3 py-2 focus:outline-none"
                >
                  <option value="Spanish">Spanish</option>
                  <option value="Portuguese">Portuguese</option>
                  <option value="Japanese">Japanese</option>
                  <option value="French">French</option>
                  <option value="German">German</option>
                </select>
              </div>

              {/* Presets */}
              <div className="hidden sm:flex items-center gap-1.5 bg-[#f4f4f7] p-1 rounded-[12px] border border-[#e2e2e8]">
                {Object.keys(samplePresets).map((key) => (
                  <button
                    key={key}
                    onClick={() => setSelectedPreset(key)}
                    className={`px-3 py-1 rounded-[8px] text-[12px] font-bold transition-all ${
                      selectedPreset === key
                        ? "bg-white text-[#131032] shadow-sm"
                        : "text-[#6b6982] hover:text-[#131032]"
                    }`}
                  >
                    {samplePresets[key].title}
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Audio Action Trigger */}
            <div className="flex items-center gap-3 w-full lg:w-auto justify-end">
              <button
                onClick={handleTogglePlay}
                className={`h-[44px] px-6 rounded-[12px] font-bold text-[14px] flex items-center gap-2 transition-all shadow-md ${
                  isSimulating
                    ? "bg-red-500 text-white animate-pulse"
                    : "bg-[#614efa] hover:bg-[#4a3bbe] text-white"
                }`}
              >
                <span>{isSimulating ? "■ Stop Live Audio" : "▶ Start Live Comparison"}</span>
              </button>

              <button
                onClick={() => setIsAddProviderOpen(true)}
                className="h-[44px] px-4 rounded-[12px] border border-[#d8d8de] hover:border-[#131032] text-[#131032] font-bold text-[13px] flex items-center gap-1.5 transition-colors"
              >
                <span>+ Add Provider</span>
              </button>
            </div>
          </div>

          {/* 3 Provider Comparison Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Provider 1: Krisp */}
            <div className="bg-white rounded-[24px] border-2 border-[#614efa] shadow-lg flex flex-col justify-between overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between pb-4 border-b border-[#ececef] mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-[8px] bg-[#614efa] text-white flex items-center justify-center font-bold text-sm">
                      K
                    </div>
                    <div>
                      <h3 className="text-[17px] font-extrabold text-[#131032]">Krisp VT</h3>
                      <span className="text-[11px] font-mono text-[#614efa] font-semibold">krisp-vt-live</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#008065] bg-[#e6f8f5] px-2.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#008065] animate-ping" />
                    Live 16kHz
                  </span>
                </div>

                {/* Metrics Badges */}
                <div className="grid grid-cols-2 gap-2 mb-5">
                  <div className="bg-[#f4f4f7] rounded-[12px] p-2.5 text-center">
                    <div className="text-[10px] font-bold uppercase text-[#75738b]">TTIS (Transcript)</div>
                    <div className="text-[18px] font-extrabold text-[#131032] mt-0.5">240 ms</div>
                  </div>
                  <div className="bg-[#efeefa] rounded-[12px] p-2.5 text-center border border-[#614efa]/20">
                    <div className="text-[10px] font-bold uppercase text-[#614efa]">TTFS (First Sound)</div>
                    <div className="text-[18px] font-extrabold text-[#614efa] mt-0.5">380 ms</div>
                  </div>
                </div>

                {/* Real-Time Transcript Stream */}
                <div className="mb-4">
                  <div className="text-[11px] font-bold uppercase text-[#75738b] tracking-wider mb-1">
                    Transcript ({sourceLang})
                  </div>
                  <div className="bg-[#f9f9fc] rounded-[14px] p-3.5 border border-[#e7e7ed] text-[13px] leading-[22px] min-h-[72px]">
                    {isSimulating ? samplePresets[selectedPreset].rawText : "Press Start Live Comparison to stream..."}
                  </div>
                </div>

                {/* Real-Time Translation Stream */}
                <div>
                  <div className="flex items-center justify-between text-[11px] font-bold uppercase text-[#008065] tracking-wider mb-1">
                    <span>Translation ({targetLang})</span>
                    <span>BLEU: 98.4</span>
                  </div>
                  <div className="bg-[#e6f8f5]/40 rounded-[14px] p-3.5 border border-[#008065]/20 text-[13px] text-[#00604c] font-medium leading-[22px] min-h-[88px]">
                    {isSimulating ? samplePresets[selectedPreset].krisp : "Awaiting audio chunks..."}
                  </div>
                </div>
              </div>

              {/* Speaker Bar */}
              <div className="bg-[#f9f9fc] px-6 py-3.5 border-t border-[#ececef] flex items-center justify-between">
                <span className="text-[12px] font-semibold text-[#525069]">Acoustic BVC Active</span>
                <button
                  onClick={() => toggleSound("krisp")}
                  className={`text-[12px] font-bold px-3 py-1 rounded-[8px] transition-colors ${
                    playbackVolume.krisp ? "bg-[#614efa] text-white" : "bg-white border text-[#525069]"
                  }`}
                >
                  {playbackVolume.krisp ? "🔊 Playing Sound" : "🔇 Muted"}
                </button>
              </div>
            </div>

            {/* Provider 2: OpenAI */}
            <div className="bg-white rounded-[24px] border border-[#e4e4eb] shadow-sm flex flex-col justify-between overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between pb-4 border-b border-[#ececef] mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-[8px] bg-[#10a37f] text-white flex items-center justify-center font-bold text-sm">
                      O
                    </div>
                    <div>
                      <h3 className="text-[17px] font-extrabold text-[#131032]">OpenAI Realtime</h3>
                      <span className="text-[11px] font-mono text-[#75738b]">gpt-realtime-translate</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-[#75738b] bg-[#f4f4f7] px-2 py-0.5 rounded">
                    WebSocket
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-5">
                  <div className="bg-[#f4f4f7] rounded-[12px] p-2.5 text-center">
                    <div className="text-[10px] font-bold uppercase text-[#75738b]">TTIS (Transcript)</div>
                    <div className="text-[18px] font-extrabold text-[#131032] mt-0.5">490 ms</div>
                  </div>
                  <div className="bg-[#f4f4f7] rounded-[12px] p-2.5 text-center">
                    <div className="text-[10px] font-bold uppercase text-[#75738b]">TTFS (First Sound)</div>
                    <div className="text-[18px] font-extrabold text-[#131032] mt-0.5">920 ms</div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-[11px] font-bold uppercase text-[#75738b] tracking-wider mb-1">
                    Transcript ({sourceLang})
                  </div>
                  <div className="bg-[#f9f9fc] rounded-[14px] p-3.5 border border-[#e7e7ed] text-[13px] leading-[22px] min-h-[72px]">
                    {isSimulating ? samplePresets[selectedPreset].rawText : "Awaiting audio..."}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-[11px] font-bold uppercase text-[#75738b] tracking-wider mb-1">
                    <span>Translation ({targetLang})</span>
                    <span>BLEU: 92.1</span>
                  </div>
                  <div className="bg-[#f9f9fc] rounded-[14px] p-3.5 border border-[#e7e7ed] text-[13px] text-[#2c2a3e] leading-[22px] min-h-[88px]">
                    {isSimulating ? samplePresets[selectedPreset].openai : "Awaiting audio chunks..."}
                  </div>
                </div>
              </div>

              <div className="bg-[#f9f9fc] px-6 py-3.5 border-t border-[#ececef] flex items-center justify-between">
                <span className="text-[12px] text-[#75738b]">No BVC Pre-Filter</span>
                <button
                  onClick={() => toggleSound("openai")}
                  className={`text-[12px] font-bold px-3 py-1 rounded-[8px] transition-colors ${
                    playbackVolume.openai ? "bg-[#10a37f] text-white" : "bg-white border text-[#525069]"
                  }`}
                >
                  {playbackVolume.openai ? "🔊 Playing Sound" : "🔇 Muted"}
                </button>
              </div>
            </div>

            {/* Provider 3: Gemini */}
            <div className="bg-white rounded-[24px] border border-[#e4e4eb] shadow-sm flex flex-col justify-between overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between pb-4 border-b border-[#ececef] mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-[8px] bg-[#1a73e8] text-white flex items-center justify-center font-bold text-sm">
                      G
                    </div>
                    <div>
                      <h3 className="text-[17px] font-extrabold text-[#131032]">Gemini 3.5 Live</h3>
                      <span className="text-[11px] font-mono text-[#75738b]">gemini-live-translate</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-[#75738b] bg-[#f4f4f7] px-2 py-0.5 rounded">
                    gRPC Stream
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-5">
                  <div className="bg-[#f4f4f7] rounded-[12px] p-2.5 text-center">
                    <div className="text-[10px] font-bold uppercase text-[#75738b]">TTIS (Transcript)</div>
                    <div className="text-[18px] font-extrabold text-[#131032] mt-0.5">610 ms</div>
                  </div>
                  <div className="bg-[#f4f4f7] rounded-[12px] p-2.5 text-center">
                    <div className="text-[10px] font-bold uppercase text-[#75738b]">TTFS (First Sound)</div>
                    <div className="text-[18px] font-extrabold text-[#131032] mt-0.5">1,140 ms</div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-[11px] font-bold uppercase text-[#75738b] tracking-wider mb-1">
                    Transcript ({sourceLang})
                  </div>
                  <div className="bg-[#f9f9fc] rounded-[14px] p-3.5 border border-[#e7e7ed] text-[13px] leading-[22px] min-h-[72px]">
                    {isSimulating ? samplePresets[selectedPreset].rawText : "Awaiting audio..."}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-[11px] font-bold uppercase text-[#75738b] tracking-wider mb-1">
                    <span>Translation ({targetLang})</span>
                    <span>BLEU: 91.5</span>
                  </div>
                  <div className="bg-[#f9f9fc] rounded-[14px] p-3.5 border border-[#e7e7ed] text-[13px] text-[#2c2a3e] leading-[22px] min-h-[88px]">
                    {isSimulating ? samplePresets[selectedPreset].gemini : "Awaiting audio chunks..."}
                  </div>
                </div>
              </div>

              <div className="bg-[#f9f9fc] px-6 py-3.5 border-t border-[#ececef] flex items-center justify-between">
                <span className="text-[12px] text-[#75738b]">Cloud Media Pipeline</span>
                <button
                  onClick={() => toggleSound("gemini")}
                  className={`text-[12px] font-bold px-3 py-1 rounded-[8px] transition-colors ${
                    playbackVolume.gemini ? "bg-[#1a73e8] text-white" : "bg-white border text-[#525069]"
                  }`}
                >
                  {playbackVolume.gemini ? "🔊 Playing Sound" : "🔇 Muted"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BENCHMARK SUMMARY TABLE */}
      <section className="py-20 bg-white border-b border-[#ececef]">
        <div className="w-[calc(100%-48px)] max-w-[1100px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[28px] md:text-[38px] font-extrabold text-[#131032]">
              Technical Latency & Quality Breakdown
            </h2>
            <p className="text-[16px] text-[#525069] mt-2">
              Evaluated across 5,000 real-world telephony audio streams under identical network conditions.
            </p>
          </div>

          <div className="overflow-x-auto rounded-[20px] border border-[#e4e4eb] shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#f4f4f7] border-b border-[#e4e4eb] text-[13px] text-[#75738b] uppercase tracking-wider font-bold">
                  <th className="p-4 md:p-5">Performance Metric</th>
                  <th className="p-4 md:p-5 text-[#614efa] bg-[#efeefa]/50">Krisp Voice Translation</th>
                  <th className="p-4 md:p-5">OpenAI Realtime</th>
                  <th className="p-4 md:p-5">Gemini 3.5 Live</th>
                </tr>
              </thead>
              <tbody className="text-[14px] text-[#2c2a3e] divide-y divide-[#ececef]">
                <tr>
                  <td className="p-4 md:p-5 font-bold text-[#131032]">Time to First Sound (TTFS)</td>
                  <td className="p-4 md:p-5 font-bold text-[#614efa] bg-[#efeefa]/20">380 ms</td>
                  <td className="p-4 md:p-5">920 ms</td>
                  <td className="p-4 md:p-5">1,140 ms</td>
                </tr>
                <tr>
                  <td className="p-4 md:p-5 font-bold text-[#131032]">Background Voice Muting</td>
                  <td className="p-4 md:p-5 font-bold text-[#008065] bg-[#efeefa]/20">Built-in (Zero extra lag)</td>
                  <td className="p-4 md:p-5 text-red-500">None (Hallucinates voices)</td>
                  <td className="p-4 md:p-5 text-red-500">None (Transcribes background)</td>
                </tr>
                <tr>
                  <td className="p-4 md:p-5 font-bold text-[#131032]">Alphanumeric Accuracy</td>
                  <td className="p-4 md:p-5 font-bold text-[#614efa] bg-[#efeefa]/20">99.4% (Trained on CX)</td>
                  <td className="p-4 md:p-5">91.2%</td>
                  <td className="p-4 md:p-5">89.8%</td>
                </tr>
                <tr>
                  <td className="p-4 md:p-5 font-bold text-[#131032]">Language Support</td>
                  <td className="p-4 md:p-5 font-bold text-[#614efa] bg-[#efeefa]/20">61 dialects any-to-any</td>
                  <td className="p-4 md:p-5">~35 languages</td>
                  <td className="p-4 md:p-5">~40 languages</td>
                </tr>
                <tr>
                  <td className="p-4 md:p-5 font-bold text-[#131032]">Hourly Cost Rate</td>
                  <td className="p-4 md:p-5 font-bold text-[#008065] bg-[#efeefa]/20">$5.53 / hr (Flat)</td>
                  <td className="p-4 md:p-5">$18.00 / hr (Token based)</td>
                  <td className="p-4 md:p-5">$12.50 / hr (Token based)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. ADD PROVIDER MODAL */}
      {isAddProviderOpen && (
        <div
          onClick={() => setIsAddProviderOpen(false)}
          className="fixed inset-0 z-[9999] bg-black/60 flex items-center justify-center p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-[24px] max-w-[500px] w-full p-6 md:p-8 shadow-2xl relative"
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#ececef] mb-6">
              <h3 className="text-[20px] font-bold text-[#131032]">Add Translation Engine</h3>
              <button
                onClick={() => setIsAddProviderOpen(false)}
                className="w-8 h-8 rounded-full bg-[#f4f4f7] flex items-center justify-center font-bold text-lg"
              >
                &times;
              </button>
            </div>

            <div className="space-y-3 mb-6">
              {["Qwen Audio Live", "Whisper Large-v3 + ElevenLabs", "Deepgram Nova-2 + Cartesia"].map((pName, pIdx) => (
                <div
                  key={pIdx}
                  className="p-4 rounded-[14px] border border-[#e4e4eb] hover:border-[#614efa] cursor-pointer flex items-center justify-between"
                  onClick={() => {
                    alert(`Added ${pName} to active benchmarks.`);
                    setIsAddProviderOpen(false);
                  }}
                >
                  <span className="font-bold text-[14px] text-[#131032]">{pName}</span>
                  <span className="text-[12px] text-[#614efa] font-semibold">+ Add to board</span>
                </div>
              ))}
            </div>

            <p className="text-[12px] text-[#75738b] text-center">
              You can also connect a custom WebSocket endpoint in your developer dashboard.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
