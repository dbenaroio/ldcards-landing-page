import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { PerChi } from "@/components/sections/PerChi";
import { Cose } from "@/components/sections/Cose";
import { ComeFunziona } from "@/components/sections/ComeFunziona";
import { ComeSiGioca } from "@/components/sections/ComeSiGioca";
import { StarterKitCTA } from "@/components/sections/StarterKitCTA";
import { StarterKitFeatures } from "@/components/sections/StarterKitFeatures";
import { SocialProof } from "@/components/sections/SocialProof";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <Hero />
        <PerChi />
        <Cose />
        <ComeFunziona />
        <ComeSiGioca />
        <StarterKitCTA />
        <StarterKitFeatures />
        <SocialProof />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
