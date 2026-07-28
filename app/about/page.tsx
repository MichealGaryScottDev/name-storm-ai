import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6">
              About Name Storm
            </h1>
            <div className="prose prose-zinc max-w-none space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Name Storm was built for founders who are tired of wading through generic name generators that spit out combinations of random words with zero context.
              </p>
              
              <h2 className="text-2xl font-semibold tracking-tight mt-12 mb-4">
                The Problem
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Most name generators give you lists of available domains—but those names rarely sound like real brands. They're often awkward mashups, misspellings, or words that have nothing to do with your product's vibe.
              </p>
              
              <h2 className="text-2xl font-semibold tracking-tight mt-12 mb-4">
                Our Approach
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Instead of checking domains (which narrows your options to what's left), Name Storm focuses on generating memorable, on-brand candidates with clear rationale. You describe your product's personality and niche, and we give you names that actually sound like they could be real companies.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                We include quick notes about domain likelihood (e.g., "common word—likely taken" or "unique compound—worth checking"), but we don't waste your time running WHOIS queries. The goal is to spark ideas, not to limit them.
              </p>
              
              <h2 className="text-2xl font-semibold tracking-tight mt-12 mb-4">
                Who It's For
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Founders in the early stages of product development. You know your product's vibe but need help articulating it as a brand name. You want names that feel intentional, not accidental leftovers from the domain gold rush.
              </p>
              
              <h2 className="text-2xl font-semibold tracking-tight mt-12 mb-4">
                How We Built It
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Name Storm runs on Cloudflare Workers AI with a carefully tuned prompt that prioritizes brand quality over availability. The interface is designed to feel like a creative brainstorm session—floating cards, generous whitespace, and a shortlist feature so you can collect favorites as you go.
              </p>
              
              <div className="mt-12 pt-8 border-t">
                <p className="text-sm text-muted-foreground">
                  Built by <span className="font-medium">Autodev</span> — ship real products in one prompt.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}