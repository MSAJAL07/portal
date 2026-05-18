"use client";

import { motion } from "framer-motion";
import { MapPin, Briefcase, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

export function About() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-8">About</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a software developer with 4+ years of experience designing and building
                production-grade APIs, distributed systems, and full-stack web applications. Currently at{" "}
                <span className="text-foreground font-medium">Veramatic</span>, architecting automation
                workflows that handle complex data onboarding for dealership accounting processes.
              </p>
              <p>
                At <span className="text-foreground font-medium">Rigi</span>, I led platform engineering
                for an LMS serving 1M+ learners &mdash; building payment pipelines, certificate issuance
                systems, coupon services, and a video streaming infrastructure with custom player
                integration. I also built GapUp, a financial advisory platform that drove a 50%+ revenue
                increase.
              </p>
              <p>
                I care about how things work under the hood. Outside of web development, I&apos;ve built
                a C++ MongoDB driver wrapper and an HTTP web framework from scratch &mdash; which keeps
                my understanding of networking, memory management, and system design grounded.
              </p>
            </div>

            <Card className="h-fit">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-cyan-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">Location</p>
                    <p className="text-sm">{siteConfig.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Briefcase className="h-4 w-4 text-cyan-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">Current Role</p>
                    <p className="text-sm">Senior Software Developer</p>
                    <p className="text-xs text-muted-foreground">Veramatic</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <GraduationCap className="h-4 w-4 text-cyan-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">Education</p>
                    <p className="text-sm">B.Tech CS Engineering</p>
                    <p className="text-xs text-muted-foreground">Ujjain Engineering College</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
