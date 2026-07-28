import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium">Name Storm</p>
            <p className="text-sm text-muted-foreground max-w-md">
              Fresh product names without the junk. Built for founders who need brand-quality ideas, not keyword mashups.
            </p>
          </div>
          <nav className="flex flex-col gap-2 sm:items-end">
            <Link 
              href="/" 
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Generator
            </Link>
            <Link 
              href="/about" 
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </Link>
          </nav>
        </div>
        <Separator className="my-6" />
        <p className="text-xs text-muted-foreground">
          Built by <span className="font-medium">Autodev</span> — ship real products in one prompt.
        </p>
      </div>
    </footer>
  );
}