export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "HTML/CSS", "C/C++", "Java", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React.js", "Next.js", "Node.js", "Express.js", "Redux", "Tailwind CSS", "gRPC"],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
  },
];
