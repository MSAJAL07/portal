"use client";

import { motion } from "framer-motion";
import { Globe, Database, Zap, Cloud, Code2 } from "lucide-react";
import type { ElementType } from "react";
import {
  SiNodedotjs,
  SiExpress,
  SiRedis,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiCplusplus,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiDocker,
  SiGithubactions,
  SiPrometheus,
  SiGrafana,
  SiApachekafka,
  SiKubernetes,
  SiGo,
} from "react-icons/si";
import { skillCategories } from "@/data/skills";

interface SkillMeta {
  icon: ElementType;
  color: string;
}

const skillMeta: Record<string, SkillMeta> = {
  "Node.js":        { icon: SiNodedotjs,         color: "#339933" },
  "Express.js":     { icon: SiExpress,            color: "#888888" },
  "gRPC":           { icon: Zap,                  color: "#06b6d4" },
  "REST APIs":      { icon: Globe,                color: "#06b6d4" },
  "Redis":          { icon: SiRedis,              color: "#FF4438" },
  "React.js":       { icon: SiReact,              color: "#61DAFB" },
  "Next.js":        { icon: SiNextdotjs,          color: "#aaaaaa" },
  "Redux":          { icon: SiRedux,              color: "#764ABC" },
  "Tailwind CSS":   { icon: SiTailwindcss,        color: "#06B6D4" },
  "TypeScript":     { icon: SiTypescript,         color: "#3178C6" },
  "JavaScript":     { icon: SiJavascript,         color: "#F7DF1E" },
  "Java":           { icon: Code2,                 color: "#f89820" },
  "C/C++":          { icon: SiCplusplus,          color: "#00599C" },
  "SQL":            { icon: Database,             color: "#06b6d4" },
  "Python":         { icon: SiPython,             color: "#3776AB" },
  "PostgreSQL":     { icon: SiPostgresql,         color: "#4169E1" },
  "MongoDB":        { icon: SiMongodb,            color: "#47A248" },
  "MySQL":          { icon: SiMysql,              color: "#4479A1" },
  "Docker":         { icon: SiDocker,             color: "#2496ED" },
  "AWS":            { icon: Cloud,                color: "#FF9900" },
  "GitHub Actions": { icon: SiGithubactions,      color: "#2088FF" },
  "Prometheus":     { icon: SiPrometheus,         color: "#E6522C" },
  "Grafana":        { icon: SiGrafana,            color: "#F46800" },
  "Kafka":          { icon: SiApachekafka,        color: "#888888" },
  "Kubernetes":     { icon: SiKubernetes,         color: "#326CE5" },
  "Go":             { icon: SiGo,                 color: "#00ADD8" },
};

function SkillPill({ skill, exploring }: { skill: string; exploring?: boolean }) {
  const meta = skillMeta[skill];
  const Icon = meta?.icon ?? Globe;
  const color = meta?.color ?? "#06b6d4";

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium
        bg-muted/60 hover:bg-muted text-foreground transition-colors
        ${exploring ? "border border-dashed border-border/60 opacity-75 hover:opacity-100" : "border border-border/40"}`}
    >
      <Icon style={{ color }} className="h-3.5 w-3.5 shrink-0" />
      {skill}
    </span>
  );
}

export function Skills() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-8">Skills</h2>
        </motion.div>

        <div className="space-y-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="grid sm:grid-cols-4 gap-3 items-start"
            >
              <p className={`text-sm font-medium ${cat.exploring ? "text-muted-foreground/60 italic" : "text-muted-foreground"}`}>
                {cat.category}
              </p>
              <div className="sm:col-span-3 flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <SkillPill key={skill} skill={skill} exploring={cat.exploring} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
