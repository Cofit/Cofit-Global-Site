import { motion } from "motion/react";
import { useRef } from "react";
import HeroSection from "./cofit/HeroSection";
import HowItWorksSection from "./cofit/HowItWorksSection";
import ResultsSection from "./cofit/ResultsSection";
import SolutionsSection from "./cofit/SolutionsSection";
import ExpertsSection from "./cofit/ExpertsSection";
import FootprintSection from "./cofit/FootprintSection";
import ClosingSection from "./cofit/ClosingSection";
import Header from "./cofit/Header";
import ScrollProgress from "./cofit/ScrollProgress";
import BackToTop from "./cofit/BackToTop";
import CursorFollower from "./cofit/CursorFollower";

export default function CofitLanding() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'var(--font-primary)' }}>
      <CursorFollower />
      <ScrollProgress />
      <BackToTop />
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <ResultsSection />
      <SolutionsSection />
      <ExpertsSection />
      <FootprintSection />
      <ClosingSection />
    </div>
  );
}
