"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { skillCategories } from "@/data/skills";

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
              <p className="text-sm text-muted-foreground font-medium">{cat.category}</p>
              <div className="sm:col-span-3 flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="font-mono text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
