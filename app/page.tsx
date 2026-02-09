import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import ProductLoop from "@/components/ProductLoop";
import IntegrationModel from "@/components/IntegrationModel";
import WhoItsFor from "@/components/WhoItsFor";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <ProductLoop />
      <IntegrationModel />
      <WhoItsFor />
      <FinalCTA />
    </main>
  );
}
