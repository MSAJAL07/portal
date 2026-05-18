export interface SkillCategory {
  category: string;
  skills: string[];
  exploring?: boolean;
}

export const skillCategories: SkillCategory[] = [
  {
    category: "APIs & Services",
    skills: ["Node.js", "Express.js", "gRPC", "REST APIs", "Redis"],
  },
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "Redux", "Tailwind CSS"],
  },
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "Java", "C/C++", "SQL", "Python"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    category: "Infrastructure & Cloud",
    skills: ["Docker", "AWS", "GitHub Actions", "Prometheus", "Grafana"],
  },
  {
    category: "Currently Exploring",
    skills: ["Kafka", "Kubernetes", "Go"],
    exploring: true,
  },
];
