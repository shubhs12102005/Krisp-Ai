import React from "react";
import HeroSection from "../../components/hero/HeroSection";
import LogoCloud from "../../components/sections/LogoCloud";
import ScrollFeatures from "../../components/sections/ScrollFeatures";
import TestimonialSection from "../../components/sections/TestimonialSection";
import WorkflowSection from "../../components/sections/WorkflowSection";
import WorkspacesSection from "../../components/sections/WorkspacesSection";
import PrivacySection from "../../components/sections/PrivacySection";
import IntegrationsSection from "../../components/sections/IntegrationsSection";
import MobileAppBanner from "../../components/sections/MobileAppBanner";
import FeaturesBlock from "../../components/sections/FeaturesBlock";
import ReviewsSection from "../../components/sections/ReviewsSection";
import FAQSection from "../../components/sections/FAQSection";
import VideoBanner from "../../components/sections/VideoBanner";
import FinalCTA from "../../components/sections/FinalCTA";

export default function Home() {
  return (
    <div className="home-page">
      <HeroSection />
      <LogoCloud />
      <ScrollFeatures />
      <TestimonialSection />
      <WorkflowSection />
      <WorkspacesSection />
      <PrivacySection />
      <IntegrationsSection />
      <MobileAppBanner />
      <FeaturesBlock />
      <ReviewsSection />
      <FAQSection />
      <VideoBanner />
      <FinalCTA />
    </div>
  );
}
