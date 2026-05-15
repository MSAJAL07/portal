import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { type Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex flex-col h-full hover:border-cyan-500/50 transition-colors">
      <CardHeader>
        <CardTitle className="text-base">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-mono text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 pt-4">
        {project.githubUrl && (
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
          >
            <GitHubIcon className="mr-1.5 h-3.5 w-3.5" />
            Code
          </Link>
        )}
        {project.liveUrl && (
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "sm" }))}
          >
            <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
            Live
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}
