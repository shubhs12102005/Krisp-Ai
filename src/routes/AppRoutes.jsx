import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../views/Home/Home";
import Pricing from "../views/Pricing/Pricing";
import Customers from "../views/Customers/Customers";
import AIMeetingAssistant from "../views/AIMeetingAssistant/AIMeetingAssistant";
import CallCenterAI from "../views/CallCenterAI/CallCenterAI";
import Developers from "../views/Developers/Developers";
import ContactSales from "../views/ContactSales/ContactSales";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/ai-meeting-assistant" element={<AIMeetingAssistant />} />
        <Route path="/ai-note-taker" element={<AIMeetingAssistant />} />
        <Route path="/meeting-transcription" element={<AIMeetingAssistant />} />
        <Route path="/meeting-recording" element={<AIMeetingAssistant />} />
        <Route path="/ai-meeting-summary" element={<AIMeetingAssistant />} />
        <Route path="/contact-center" element={<CallCenterAI />} />
        <Route path="/contact-center/*" element={<CallCenterAI />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/developers/*" element={<Developers />} />
        <Route path="/contact-sales" element={<ContactSales />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
