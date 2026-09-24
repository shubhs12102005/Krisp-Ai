import React from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import { navigationData } from "../../utils/navigationData";
import { siteLogos } from "../../utils/constants";

/**
 * Mobile navigation overlay drawer with nested submenu drilldowns.
 */
export default function MobileMenu({
  isOpen,
  onClose,
  activeSubMenu,
  setActiveSubMenu
}) {
  if (!isOpen) return null;

  const mainCategories = [
    navigationData.aiMeetingAssistant,
    navigationData.callCenterAI,
    navigationData.developers,
    navigationData.customers,
    navigationData.pricing
  ];

  const currentCategory = mainCategories.find(
    (item) => item.id === activeSubMenu
  );

  return (
    <div className="fixed inset-0 top-[63px] z-[999] bg-white overflow-y-auto pb-32">
      <div className="px-6 py-6">
        {!activeSubMenu ? (
          // Main Menu Level
          <div>
            <ul className="space-y-4">
              {mainCategories.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between border-b border-[#f4f4f5] pb-3"
                >
                  {item.hasSubMenu ? (
                    <button
                      onClick={() => setActiveSubMenu(item.id)}
                      className="flex items-center justify-between w-full text-left text-[18px] font-semibold text-[#1a1a22]"
                    >
                      <span>{item.title}</span>
                      <img
                        src={siteLogos.arrowIcon}
                        alt="Open"
                        className="-rotate-90 w-4 h-4 opacity-60"
                      />
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={onClose}
                      className="text-[18px] font-semibold text-[#1a1a22] block w-full"
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Bottom Actions */}
            <div className="mt-8 space-y-4">
              <Button
                variant="dark"
                href="/contact-sales"
                onClick={onClose}
                className="w-full text-center"
              >
                Book a demo
              </Button>
              <Button
                variant="primary"
                href="https://app.krisp.ai/sign-up"
                external
                className="w-full text-center"
              >
                Get Krisp for free
              </Button>

              <div className="pt-6 border-t border-[#f4f4f5] flex justify-center gap-4">
                <a
                  href="https://apps.apple.com/us/app/krisp-ai-meeting-note-taker/id6740535865?mt=8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://krisp.ai/wp-content/themes/krisp-v4/imgs//icon_app_store.svg"
                    alt="App Store"
                    className="h-10"
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=ai.krisp.krispMobile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://krisp.ai/wp-content/themes/krisp-v4/imgs//icon_google_play.svg"
                    alt="Google Play"
                    className="h-10"
                  />
                </a>
              </div>
            </div>
          </div>
        ) : (
          // Submenu Drilldown Level
          <div>
            <button
              onClick={() => setActiveSubMenu(null)}
              className="flex items-center gap-2 text-[#525069] text-[14px] font-semibold mb-6"
            >
              <img
                src={siteLogos.arrowIcon}
                alt="Back"
                className="rotate-90 w-4 h-4"
              />
              Back
            </button>

            {currentCategory && (
              <div>
                <div className="bg-[#f7f7f8] rounded-[16px] p-5 mb-6">
                  <div className="text-[20px] font-bold text-[#1a1a22] mb-1">
                    {currentCategory.card?.title}
                  </div>
                  <div className="text-[14px] text-[#757585] mb-4">
                    {currentCategory.card?.desc}
                  </div>
                  <Link
                    to={currentCategory.card?.href}
                    onClick={onClose}
                    className="inline-flex items-center justify-between w-full h-[40px] px-4 rounded-[10px] border border-[#23232e] text-[#1a1a22] text-[14px] font-bold"
                  >
                    <span>{currentCategory.card?.buttonText}</span>
                    <img
                      src={siteLogos.ctaPointer}
                      alt="Arrow"
                      className="w-4 h-4"
                    />
                  </Link>
                </div>

                <div className="space-y-6">
                  {currentCategory.groups?.map((group, idx) => (
                    <div key={idx}>
                      <div className="text-[#757585] text-[12px] font-semibold uppercase tracking-wider mb-2">
                        {group.groupTitle}
                      </div>
                      <div className="space-y-2">
                        {group.items.map((sub, sIdx) => (
                          <Link
                            key={sIdx}
                            to={sub.href}
                            onClick={onClose}
                            className="block p-3 rounded-[10px] hover:bg-[#f4f4f5] transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <img
                                src={sub.icon}
                                alt={sub.title}
                                className="w-5 h-5 flex-shrink-0"
                              />
                              <div>
                                <div className="text-[14px] font-bold text-[#1a1a22]">
                                  {sub.title}
                                </div>
                                {sub.desc && (
                                  <div className="text-[12px] text-[#757585]">
                                    {sub.desc}
                                  </div>
                                )}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
