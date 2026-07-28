import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Sparkles, Star, Globe } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Describe the vibe",
    description: "Share your product's personality, niche, or target audience in a few sentences.",
  },
  {
    icon: Sparkles,
    title: "Get AI-generated names",
    description: "We generate 8 brand-quality candidates with clear rationale for each.",
  },
  {
    icon: Star,
    title: "Build your shortlist",
    description: "Star your favorites to collect them in one place for easy comparison.",
  },
  {
    icon: Globe,
    title: "Check domains yourself",
    description: "We note domain likelihood, but you verify final availability when ready.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/5">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">
            How It Works
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A simple four-step process to move from vague ideas to real name candidates.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index}>
                <CardHeader>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-medium">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}