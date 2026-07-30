import { AnnouncementBar } from "@/components/sections/AnnouncementBar";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { WhySonlineSection } from "@/components/sections/WhySonlineSection";
import { PillarsSection } from "@/components/sections/PillarsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { FeaturedProjectSection } from "@/components/sections/FeaturedProjectSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { RiseOfExperienceSection } from "@/components/sections/RiseOfExperienceSection";
import { WhyWorkWithUsSection } from "@/components/sections/WhyWorkWithUsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Header />

      <main id="main" className="flex-1">
        <Hero />
        <WhySonlineSection />
        <PillarsSection />
        <ServicesSection />
        <SolutionsSection />
        <FeaturedProjectSection />
        <ImpactSection />
        <WorkSection />
        <RiseOfExperienceSection />
        <WhyWorkWithUsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
