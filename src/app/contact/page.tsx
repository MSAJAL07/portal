import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig } from "@/config/site";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with Sajal Kumar Mishra — Senior Software Developer available for freelance projects and full-time opportunities.`,
  alternates: { canonical: "/contact/" },
  openGraph: {
    title: "Contact — Sajal Mishra",
    description: `Get in touch with Sajal Kumar Mishra — Senior Software Developer available for freelance projects and full-time opportunities.`,
    url: `${siteConfig.url}/contact/`,
  },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-bold mb-2">Get in touch</h1>
      <p className="text-muted-foreground mb-10 max-w-lg">
        Have a project in mind, want to collaborate, or just want to say hi? Fill out the form or reach
        me directly through any of the links below.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        <ContactForm />

        <div className="space-y-6">
          <div>
            <p className="text-sm font-medium mb-3">Elsewhere</p>
            <div className="space-y-3">
              <Link
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <GitHubIcon className="h-4 w-4" />
                {siteConfig.github.replace("https://", "")}
              </Link>
              <Link
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <LinkedInIcon className="h-4 w-4" />
                {siteConfig.linkedin.replace("https://www.linkedin.com/in/", "in/")}
              </Link>
              <Link
                href={siteConfig.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <XIcon className="h-4 w-4" />
                @msajaldev
              </Link>
              <Link
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                {siteConfig.email}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
