import Link from "next/link";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-border/40 mt-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
        <div className="flex items-center gap-4">
          <Link href={siteConfig.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-foreground transition-colors">
            <GitHubIcon className="h-4 w-4" />
          </Link>
          <Link href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition-colors">
            <LinkedInIcon className="h-4 w-4" />
          </Link>
          <Link href={siteConfig.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter / X" className="text-muted-foreground hover:text-foreground transition-colors">
            <XIcon className="h-4 w-4" />
          </Link>
          <Link href={`mailto:${siteConfig.email}`} aria-label="Email" className="text-muted-foreground hover:text-foreground transition-colors">
            <Mail className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
