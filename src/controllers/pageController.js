import { useState } from "react";

export function usePageController() {
  const [activeStep, setActiveStep] = useState("in-meeting");
  const [activeFeatureIndex, setActiveFeatureIndex] = useState({
    "in-meeting": 0,
    "post-meetings": 0,
    "pre-meetings": 0
  });
  const [openFaqs, setOpenFaqs] = useState({ 0: true }); // First FAQ open by default like reference

  const setStep = (stepId) => {
    setActiveStep(stepId);
  };

  const setFeatureForStep = (stepId, index) => {
    setActiveFeatureIndex((prev) => ({
      ...prev,
      [stepId]: index
    }));
  };

  const toggleFaq = (index) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return {
    activeStep,
    setStep,
    activeFeatureIndex,
    setFeatureForStep,
    openFaqs,
    toggleFaq
  };
}
