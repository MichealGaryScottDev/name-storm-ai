"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface NameCardProps {
  name: string;
  rationale: string;
  domainNote: string;
  isShortlisted: boolean;
  onToggleShortlist: () => void;
}

export function NameCard({
  name,
  rationale,
  domainNote,
  isShortlisted,
  onToggleShortlist,
}: NameCardProps) {
  return (
    <Card className="relative transition-all hover:shadow-md">
      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-xl font-semibold tracking-tight leading-tight">
            {name}
          </CardTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleShortlist}
            className="h-8 w-8 shrink-0"
          >
            <Star
              className={cn(
                "h-4 w-4 transition-colors",
                isShortlisted
                  ? "fill-primary text-primary"
                  : "text-muted-foreground"
              )}
            />
          </Button>
        </div>
        <Badge variant="secondary" className="w-fit text-xs">
          {domainNote}
        </Badge>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {rationale}
        </p>
      </CardContent>
    </Card>
  );
}