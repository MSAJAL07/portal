import type { Metadata } from "next";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Projects",
  description: `Open-source projects and side work by Sajal Kumar Mishra — Full Stack Developer based in Bengaluru, India.`,
  alternates: { canonical: "/projects/" },
  openGraph: {
    title: "Projects — Sajal Mishra",
    description: `Open-source projects and side work by Sajal Kumar Mishra — Full Stack Developer based in Bengaluru, India.`,
    url: `${siteConfig.url}/projects/`,
  },
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
      <ProjectsGrid />
    </div>
  );
}
