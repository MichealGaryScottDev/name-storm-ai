"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { NameCard } from "@/components/name-card";
import { Loader2, Sparkles } from "lucide-react";

interface NameCandidate {
  name: string;
  rationale: string;
  domainNote: string;
}

export function BrainstormCanvas() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [names, setNames] = useState<NameCandidate[]>([]);
  const [shortlist, setShortlist] = useState<Set<string>>(new Set());
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setError("");
    setNames([]);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: prompt.trim() }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate names");
      }

      const data = await response.json();
      setNames(data.names || []);
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const toggleShortlist = (name: string) => {
    setShortlist((prev) => {
      const next = new Set(prev);
      if (next.has(name)) {
        next.delete(name);
      } else {
        next.add(name);
      }
      return next;
    });
  };

  const shortlistedNames = names.filter((n) => shortlist.has(n.name));

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="space-y-8">
          {/* Input Section */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="prompt" className="text-base font-medium">
                Describe your product
              </Label>
              <p className="text-sm text-muted-foreground">
                Share the vibe, niche, target audience, or core problem. The more context, the better the names.
              </p>
            </div>
            <Textarea
              id="prompt"
              placeholder="e.g., A productivity app for remote teams that feels calm and focused, not chaotic. We want something modern but approachable, maybe one word or a short compound."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="min-h-32 resize-none"
            />
            <Button
              onClick={handleGenerate}
              disabled={loading || !prompt.trim()}
              size="lg"
              className="w-full sm:w-auto"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating…
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Generate Names
                </>
              )}
            </Button>
            {error && (
              <p className="text-sm text-destructive">{error}</p>
            )}
          </div>

          {/* Results Grid */}
          {names.length > 0 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold tracking-tight">
                Name Candidates
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {names.map((candidate) => (
                  <NameCard
                    key={candidate.name}
                    name={candidate.name}
                    rationale={candidate.rationale}
                    domainNote={candidate.domainNote}
                    isShortlisted={shortlist.has(candidate.name)}
                    onToggleShortlist={() => toggleShortlist(candidate.name)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Shortlist Section */}
          {shortlistedNames.length > 0 && (
            <div className="space-y-6 pt-8 border-t">
              <h2 className="text-2xl font-semibold tracking-tight">
                Your Shortlist
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {shortlistedNames.map((candidate) => (
                  <NameCard
                    key={candidate.name}
                    name={candidate.name}
                    rationale={candidate.rationale}
                    domainNote={candidate.domainNote}
                    isShortlisted={true}
                    onToggleShortlist={() => toggleShortlist(candidate.name)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}