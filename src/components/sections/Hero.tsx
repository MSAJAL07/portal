"use client";

import Link from "next/link";
import Image from "next/image";
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
    <section className="pt-12 sm:pt-24 pb-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col-reverse sm:flex-row items-center gap-8 sm:gap-16">

          {/* Left — text */}
          <div className="flex-1 min-w-0">
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
              className="text-xl sm:text-2xl text-muted-foreground mb-8 leading-relaxed"
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Senior Software Developer. I design and build scalable systems and APIs &mdash; from platforms serving{" "}
              <span className="text-foreground">1M+ users</span> to automation workflows powering business-critical operations.
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

          {/* Right — photo (~40% width, centered) */}
          <motion.div
            className="w-full sm:w-[40%] flex justify-center items-center shrink-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden ring-2 ring-border">
              <Image
                src="/avatar.jpg"
                alt="Sajal Kumar Mishra"
                fill
                className="object-cover"
                priority
                fetchPriority="high"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
