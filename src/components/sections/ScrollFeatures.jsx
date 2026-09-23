import React from "react";
import { Link } from "react-router-dom";
import { featureModel } from "../../models/featureModel";
import { usePageController } from "../../controllers/pageController";
import AudioDemoPlayer from "./AudioDemoPlayer";
import Button from "../common/Button";

export default function ScrollFeatures() {
  const {
    activeStep,
    setStep,
    activeFeatureIndex,
    setFeatureForStep
  } = usePageController();

  const currentSection = featureModel.meetingSections.find(
    (sec) => sec.id === activeStep
  ) || featureModel.meetingSections[0];

  const currentFeatureIdx = activeFeatureIndex[activeStep] || 0;
  const currentFeature = currentSection.items[currentFeatureIdx] || currentSection.items[0];

  return (
    <section id="features" className="bg-[#131032] py-20 md:py-28 text-white relative">
      {/* Sticky Step Navigation */}
      <div className="sticky top-[85px] z-30 mb-16 flex justify-center px-4 pointer-events-none">
        <div className="pointer-events-auto bg-[rgba(50,48,77,0.8)] backdrop-blur-md p-1.5 rounded-[24px] shadow-[0px_0px_20px_0px_rgba(22,19,52,0.8)] inline-flex items-center gap-1">
          {featureModel.meetingSections.map((sec) => {
            const isActive = activeStep === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => setStep(sec.id)}
                className={`px-5 py-2 rounded-[20px] text-[14px] leading-[22px] font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#dfdcfe] text-[#131032] shadow-sm"
                    : "text-[#918f9f] hover:text-white"
                }`}
              >
                {sec.stepName}
              </button>
            );
          })}
        </div>
      </div>

      <div className="krisp-container">
        {/* Section Header */}
        <div className="text-left mb-16 md:mb-20 max-w-[800px]">
          <h2 className="text-[36px] md:text-[48px] font-semibold leading-[1.2] mb-4">
            <span className={currentSection.gradientClass}>
              {currentSection.title}
            </span>
          </h2>
          <p className="text-[20px] md:text-[24px] leading-[36px] text-white/90 font-normal">
            {currentSection.subtitle}
          </p>
        </div>

        {/* Content Container (Items on Left, Media on Right) */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Feature Selectors */}
          <div className="w-full lg:w-[410px] flex-shrink-0 space-y-4">
            {currentSection.items.map((item, idx) => {
              const isActive = currentFeatureIdx === idx;
              return (
                <div
                  key={item.id}
                  onClick={() => setFeatureForStep(activeStep, idx)}
                  className={`p-6 rounded-[16px] cursor-pointer transition-all duration-300 relative text-left select-none overflow-hidden ${
                    isActive
                      ? "feature_item_active"
                      : "bg-white/[0.03] hover:bg-white/[0.08]"
                  }`}
                >
                  {/* Demo Badge */}
                  {item.hasDemo && (
                    <span
                      className={`absolute right-6 top-6 px-3 py-1 rounded-[12px] text-[12px] uppercase font-bold tracking-wider ${
                        isActive
                          ? "bg-[#eafdfa] text-[#131032]"
                          : "bg-white/10 text-white/50"
                      }`}
                    >
                      demo
                    </span>
                  )}

                  <div className="flex items-start gap-4">
                    <span
                      className={`w-2.5 h-2.5 rounded-full mt-2.5 flex-shrink-0 transition-colors ${
                        isActive ? "bg-[#fe6257]" : "bg-[#918f9f]"
                      }`}
                    ></span>

                    <div className="pr-12">
                      <h3
                        className={`text-[20px] md:text-[22px] font-semibold leading-[30px] mb-2 ${
                          isActive ? "text-white" : "text-[#918f9f]"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`text-[15px] leading-[26px] font-normal ${
                          isActive ? "text-white/80" : "text-[#918f9f]"
                        }`}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {isActive && item.link && (
                    <Link
                      to={item.link}
                      className="absolute bottom-5 right-5 opacity-80 hover:opacity-100 transition-opacity"
                    >
                      <img
                        src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/icon_link.svg"
                        alt="Learn more"
                        className="w-6 h-6"
                      />
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Presentation Video or Interactive Audio Demo */}
          <div className="w-full flex-1 flex items-center justify-center">
            {currentFeature.isDemo ? (
              currentFeature.demoType === "noise" ? (
                <AudioDemoPlayer
                  demoConfig={featureModel.audioDemos.noise}
                  defaultTrack="remote-work"
                />
              ) : (
                <AudioDemoPlayer
                  demoConfig={featureModel.audioDemos.accent}
                  defaultTrack="manoj"
                  isAccent={true}
                />
              )
            ) : (
              <div className="w-full max-w-[800px] overflow-hidden rounded-[20px] shadow-2xl bg-black/40">
                {currentFeature.video && (
                  <video
                    key={currentFeature.video}
                    className="w-full h-auto rounded-[20px] object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={currentFeature.video} type="video/mp4" />
                  </video>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Section CTA */}
        <div className="text-center mt-20">
          <Button
            variant="primary"
            href="https://app.krisp.ai/sign-up"
            external
            className="h-[52px] px-8 text-[16px] rounded-[12px]"
          >
            Get Krisp for free
          </Button>
        </div>
      </div>
    </section>
  );
}
