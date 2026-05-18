import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { projects } from "@/data/projects";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: { url: siteConfig.url },
};

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <>
      <Hero />
      <Separator className="opacity-30" />
      <About />
      <Separator className="opacity-30" />
      <Experience />
      <Separator className="opacity-30" />
      <Skills />
      <Separator className="opacity-30" />

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Projects</h2>
            <Link href="/projects" className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}>
              View all <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featured.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
