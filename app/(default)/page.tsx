import type { Metadata } from 'next';

export const metadata = {
  title: "Home - System's SagaZ",
  description: "Landing Page for System's SagaZ",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default async function Home() {
  // 1. Fetch your data
  const response = await fetch('https://script.google.com/macros/s/AKfycbxTN47aK_7rGaO0CXJrw5mnWRgTBnPhDDUP-q9ZmPjnJ6mKCzWT4sx_84v0-lyPoBpT/exec', {
    next: { revalidate: 60 } 
  });
  const sheetData = await response.json();

  // 2. Find the exact row for the hero section
  // (Assuming you typed "Hero" or "hero" in the 'section' column)
  const heroRow = sheetData.find((row: any) => row.section?.toLowerCase() === 'hero');
  return (
    <>
      <PageIllustration />
      
      {/* 3. Pass only the two columns you are using right now */}
      <Hero 
        headline={heroRow?.headline || "Fallback Headline"} 
        subdeck={heroRow?.subdeck || "Fallback Subdeck"} 
      />
      
      <Workflows />
      <Features />
      <Testimonials />
      <Cta />
    </>
  );
}