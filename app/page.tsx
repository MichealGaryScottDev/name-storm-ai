import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { BrainstormCanvas } from "@/components/brainstorm-canvas";
import { HowItWorks } from "@/components/how-it-works";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <BrainstormCanvas />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}