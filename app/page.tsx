import { HeroSection } from "@/components/home/HeroSection";
import { CurrentlyUnderway } from "@/components/home/CurrentlyUnderway";
import { FeaturedCruisingGuide } from "@/components/home/FeaturedCruisingGuide";
import { PassageCTA } from "@/components/home/PassageCTA";
import { FeaturedMarinas } from "@/components/home/FeaturedMarinas";
import { TheWakePreview } from "@/components/home/TheWakePreview";
import { PricingSection } from "@/components/home/PricingSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <CurrentlyUnderway />
      <FeaturedCruisingGuide />
      <PassageCTA />
      <FeaturedMarinas />
      <TheWakePreview />
      <PricingSection />
      <NewsletterSection />
    </div>
  );
}
