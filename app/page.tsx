import { CapabilitiesSection } from "./ui/home/capabilities-section";
import { ExperienceSection } from "./ui/home/experience-section";
import { FeedbackSection } from "./ui/home/feedback-section";
import { Hero } from "./ui/home/hero";
import { SelectedWork } from "./ui/home/selected-work";
import { WritingSection } from "./ui/home/writing-section";

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <ExperienceSection />
      <CapabilitiesSection />
      <FeedbackSection />
      <WritingSection />
    </>
  );
}
