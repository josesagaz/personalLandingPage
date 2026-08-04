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
  // 1. Initialize heroRow as null
  let heroRow = null;

  // 2. Wrap the risky network request in a try block
  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbzPtNJF8giaxEr-3RKF3UrR_RZ_ruoJj6J385kbfNaAxynszO2rxJ5jrdECTN3xcogS/exec', {
      next: { revalidate: 60 } 
    });
    
    // Check if the response is valid before trying to parse JSON
    if (!response.ok) {
      throw new Error(`Google Script returned status: ${response.status}`);
    }
    
    const sheetData = await response.json();
    heroRow = sheetData.find((row: any) => row.section?.toLowerCase() === 'hero');
    
  } catch (error) {
    // 3. If anything fails (HTML returned instead of JSON, network timeout, etc.),
    // Next.js logs the error to the server console but DOES NOT crash the build.
    console.error("Failed to fetch Google Sheet data:", error);
  }

  return (
    <>
      <PageIllustration />
      
      {/* 4. If heroRow is null, it gracefully falls back to your original text */}
      <Hero 
        headline={heroRow?.headline || "Technology Built on Freedom"} 
        subdeck={heroRow?.subdeck || "Engineered for Growth"}
        ctaText={heroRow?.ctaText || "Fallback CTA Text"}
        ctaUrl ={heroRow?.ctaUrl || "#0"}
        heroImage={heroRow?.heroImage || ""}
      />      
      <Workflows />
      <Features />
      {/* <Testimonials /> */}
      <Cta />
    </>
  );
}