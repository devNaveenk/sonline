import { Hero } from "@/components/sections/Hero";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { WhySonlineSection } from "@/components/sections/WhySonlineSection";
import { PillarsSection } from "@/components/sections/PillarsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { FeaturedProjectSection } from "@/components/sections/FeaturedProjectSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { RiseOfExperienceSection } from "@/components/sections/RiseOfExperienceSection";
import { WhyWorkWithUsSection } from "@/components/sections/WhyWorkWithUsSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientsSection />
      <WhySonlineSection />
      <PillarsSection />
      <ServicesSection />
      <SolutionsSection />
      <FeaturedProjectSection />
      <ImpactSection />
      <TestimonialsSection />
      <WorkSection />
      <RiseOfExperienceSection />
      <WhyWorkWithUsSection />
      <FinalCtaSection />
    </>
  );
}
