import React from "react";
import AIMeetingAssistantMenu from "./AIMeetingAssistantMenu";
import CallCenterAIMenu from "./CallCenterAIMenu";
import DevelopersMenu from "./DevelopersMenu";

/**
 * MegaMenu wrapper that conditionally renders the specific category MegaMenu dropdown.
 */
export default function MegaMenu({ activeId, isOpen, onClose }) {
  if (!isOpen || !activeId) return null;

  return (
    <div
      className="fixed left-0 top-[73px] w-full z-50 pointer-events-none transition-all duration-300"
      style={{ opacity: isOpen ? 1 : 0, visibility: isOpen ? "visible" : "hidden" }}
    >
      <div className="pointer-events-auto mx-auto max-w-[1280px] px-6 mt-2 flex justify-start">
        {activeId === "ai-meeting-assistant" && (
          <AIMeetingAssistantMenu onClose={onClose} />
        )}
        {activeId === "call-center-ai" && (
          <CallCenterAIMenu onClose={onClose} />
        )}
        {activeId === "developers" && (
          <DevelopersMenu onClose={onClose} />
        )}
      </div>
    </div>
  );
}
