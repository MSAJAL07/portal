"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="pt-24 pb-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.p
          className="font-mono text-sm text-cyan-500 mb-4"
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.4 }}
        >
          Hi, I&apos;m
        </motion.p>

        <motion.h1
          className="text-4xl sm:text-6xl font-bold tracking-tight mb-4"
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Sajal Mishra.
        </motion.h1>

        <motion.p
          className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mb-8 leading-relaxed"
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          Senior Software Developer. I build scalable web products &mdash; from LMS platforms serving{" "}
          <span className="text-foreground">1M+ users</span> to logistics dashboards that drive operational efficiency.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-3 mb-10"
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Link href="/projects" className={cn(buttonVariants())}>
            View Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link href="/contact" className={cn(buttonVariants({ variant: "outline" }))}>
            Get in touch
          </Link>
        </motion.div>

        <motion.div
          className="flex items-center gap-4"
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <Link
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground hover:text-cyan-500 transition-colors"
          >
            <GitHubIcon className="h-5 w-5" />
          </Link>
          <Link
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-cyan-500 transition-colors"
          >
            <LinkedInIcon className="h-5 w-5" />
          </Link>
          <Link
            href={siteConfig.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter / X"
            className="text-muted-foreground hover:text-cyan-500 transition-colors"
          >
            <XIcon className="h-5 w-5" />
          </Link>
          <Link
            href={`mailto:${siteConfig.email}`}
            aria-label="Email"
            className="text-muted-foreground hover:text-cyan-500 transition-colors"
          >
            <Mail className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
