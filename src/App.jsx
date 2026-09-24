import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

// Home Page
import Home from "./pages/Home/Home";

// AI Meeting Assistant Independent Pages
import AIMeetingAssistant from "./pages/AI-MEETING-ASSISTANT/AIMeetingAssistant";
import AINoteTaker from "./pages/AI-MEETING-ASSISTANT/AINoteTaker";
import MeetingTranscription from "./pages/AI-MEETING-ASSISTANT/MeetingTranscription";
import MeetingRecording from "./pages/AI-MEETING-ASSISTANT/MeetingRecording";
import MeetingSummary from "./pages/AI-MEETING-ASSISTANT/MeetingSummary";
import AIMeetingNoiseCancellation from "./pages/AI-MEETING-ASSISTANT/NoiseCancellation";
import AIMeetingAccentConversion from "./pages/AI-MEETING-ASSISTANT/AccentConversion";

// Call Center AI Independent Pages
import CallCenterAI from "./pages/CALL-CENTER-AI/CallCenterAI";
import CallCenterNoiseCancellation from "./pages/CALL-CENTER-AI/NoiseCancellation";
import CallCenterAccentConversion from "./pages/CALL-CENTER-AI/AccentConversion";
import CallCenterVoiceTranslation from "./pages/CALL-CENTER-AI/VoiceTranslation";
import CallCenterAgentAssist from "./pages/CALL-CENTER-AI/AgentAssist";
import CallCenterSpeechAnalytics from "./pages/CALL-CENTER-AI/SpeechAnalytics";
import CallCenterVoiceSecurity from "./pages/CALL-CENTER-AI/VoiceSecurity";

// Developers Independent Pages
import Developers from "./pages/DEVELOPERS/Developers";
import DevelopersVoiceIsolation from "./pages/DEVELOPERS/VoiceIsolation";
import DevelopersTurnTaking from "./pages/DEVELOPERS/TurnTaking";
import DevelopersAccentConversion from "./pages/DEVELOPERS/AccentConversion";
import DevelopersNoiseCancellation from "./pages/DEVELOPERS/NoiseCancellation";
import DevelopersVoiceTranslationAPI from "./pages/DEVELOPERS/VoiceTranslationAPI";
import DevelopersCompareTranslationAPI from "./pages/DEVELOPERS/CompareTranslationAPI";

// Customers & Pricing Independent Pages
import Customers from "./pages/CUSTOMERS/Customers";
import Pricing from "./pages/PRICING/Pricing";
import ContactSales from "./pages/ContactSales/ContactSales";

// Scroll restoration helper
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/**
 * Main Application Routing Component.
 * Implements a clean, category-based page architecture without MVC folders.
 */
export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          {/* Main Home Route */}
          <Route path="/" element={<Home />} />

          {/* AI Meeting Assistant Routes */}
          <Route path="/ai-meeting-assistant" element={<AIMeetingAssistant />} />
          <Route path="/ai-meeting-assistant/ai-note-taker" element={<AINoteTaker />} />
          <Route path="/ai-note-taker" element={<AINoteTaker />} />
          <Route path="/ai-meeting-assistant/meeting-transcription" element={<MeetingTranscription />} />
          <Route path="/meeting-transcription" element={<MeetingTranscription />} />
          <Route path="/ai-meeting-assistant/meeting-recording" element={<MeetingRecording />} />
          <Route path="/meeting-recording" element={<MeetingRecording />} />
          <Route path="/ai-meeting-assistant/meeting-summary" element={<MeetingSummary />} />
          <Route path="/ai-meeting-summary" element={<MeetingSummary />} />
          <Route path="/ai-meeting-assistant/noise-cancellation" element={<AIMeetingNoiseCancellation />} />
          <Route path="/noise-cancellation" element={<AIMeetingNoiseCancellation />} />
          <Route path="/ai-meeting-assistant/accent-conversion" element={<AIMeetingAccentConversion />} />
          <Route path="/ai-accent-conversion" element={<AIMeetingAccentConversion />} />

          {/* Call Center AI Routes */}
          <Route path="/call-center-ai" element={<CallCenterAI />} />
          <Route path="/contact-center" element={<CallCenterAI />} />
          <Route path="/call-center-ai/noise-cancellation" element={<CallCenterNoiseCancellation />} />
          <Route path="/contact-center/noise-cancellation" element={<CallCenterNoiseCancellation />} />
          <Route path="/call-center-ai/accent-conversion" element={<CallCenterAccentConversion />} />
          <Route path="/contact-center/accent-conversion" element={<CallCenterAccentConversion />} />
          <Route path="/call-center-ai/voice-translation" element={<CallCenterVoiceTranslation />} />
          <Route path="/contact-center/voice-translation" element={<CallCenterVoiceTranslation />} />
          <Route path="/ai-voice-translation" element={<CallCenterVoiceTranslation />} />
          <Route path="/call-center-ai/agent-assist" element={<CallCenterAgentAssist />} />
          <Route path="/contact-center/agent-assist" element={<CallCenterAgentAssist />} />
          <Route path="/contact-center/ai-agent-assist" element={<CallCenterAgentAssist />} />
          <Route path="/call-center-ai/speech-analytics" element={<CallCenterSpeechAnalytics />} />
          <Route path="/contact-center/speech-analytics" element={<CallCenterSpeechAnalytics />} />
          <Route path="/call-center-ai/voice-security" element={<CallCenterVoiceSecurity />} />
          <Route path="/contact-center/voice-security" element={<CallCenterVoiceSecurity />} />

          {/* Developers Routes */}
          <Route path="/developers" element={<Developers />} />
          <Route path="/developers/voice-isolation" element={<DevelopersVoiceIsolation />} />
          <Route path="/developers/viva" element={<DevelopersVoiceIsolation />} />
          <Route path="/developers/turn-taking" element={<DevelopersTurnTaking />} />
          <Route path="/developers/accent-conversion" element={<DevelopersAccentConversion />} />
          <Route path="/developers/noise-cancellation" element={<DevelopersNoiseCancellation />} />
          <Route path="/developers/voice-translation-api" element={<DevelopersVoiceTranslationAPI />} />
          <Route path="/developers/compare-translation-api" element={<DevelopersCompareTranslationAPI />} />
          <Route path="/vt-comparison" element={<DevelopersCompareTranslationAPI />} />

          {/* Customers & Pricing Routes */}
          <Route path="/customers" element={<Customers />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact-sales" element={<ContactSales />} />

          {/* Catch-all fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
