
import React from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedCategories } from "@/components/sections/FeaturedCategories";
import { FeaturedTeams } from "@/components/sections/FeaturedTeams";
import { TechExtensions } from "@/components/sections/TechExtensions";
import { NewsletterSection } from "@/components/sections/NewsletterSection";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#0A0A0A]">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <FeaturedCategories />
        <FeaturedTeams />
        <TechExtensions />
        <NewsletterSection />
      </main>
    </div>
  );
};

export default Index;
