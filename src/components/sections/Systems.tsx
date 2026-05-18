"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { MermaidDiagram } from "@/components/MermaidDiagram";
import { systems } from "@/data/systems";

function StackPill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-muted/60 border border-border/40 text-foreground">
      {label}
    </span>
  );
}

function SystemCard({ system, index }: { system: (typeof systems)[number]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="grid md:grid-cols-4 gap-4 border-l-2 border-cyan-500/30 pl-4"
    >
      {/* Left: identity */}
      <div className="md:col-span-1">
        <p className="font-semibold text-sm">{system.name}</p>
        <p className="text-xs text-cyan-500 mt-0.5">{system.company}</p>
        <p className="text-xs text-muted-foreground mt-0.5">{system.period}</p>
      </div>

      {/* Right: details */}
      <div className="md:col-span-3 space-y-3">
        {/* Scale chip */}
        <p className="font-mono text-xs font-semibold text-cyan-400 tracking-wide">
          {system.scale}
        </p>

        {/* Description */}
        <p className="text-sm text-muted-foreground">{system.what}</p>

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5">
          {system.stack.map((s) => (
            <StackPill key={s} label={s} />
          ))}
        </div>

        {/* Challenge */}
        <p className="text-xs text-muted-foreground/70">
          <span className="text-muted-foreground font-medium">Key challenge:</span>{" "}
          {system.challenge}
        </p>

        {/* Outcome */}
        {system.outcome && (
          <p className="text-xs text-muted-foreground/70">
            <span className="text-muted-foreground font-medium">Outcome:</span>{" "}
            {system.outcome}
          </p>
        )}

        {/* Architecture toggle */}
        {system.diagram && (
          <div>
            <button
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors mt-1"
            >
              {open ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
              {open ? "Hide" : "View"} architecture
            </button>

            {open && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="mt-3 rounded-lg border border-border/40 bg-muted/20 p-4 overflow-hidden"
              >
                <MermaidDiagram chart={system.diagram} />
              </motion.div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function Systems() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-2">Systems I&apos;ve Built</h2>
          <p className="text-sm text-muted-foreground mb-8">
            Production systems I&apos;ve designed and owned — each shipped, scaled, and running.
          </p>
        </motion.div>

        <div className="space-y-10">
          {systems.map((system, i) => (
            <SystemCard key={system.id} system={system} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
