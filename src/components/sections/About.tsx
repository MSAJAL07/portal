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
                I&apos;m a full-stack software developer with 4+ years of experience building
                production-grade web applications. Currently working at{" "}
                <span className="text-foreground font-medium">Veramatic</span> on scalable automation
                workflows for dealership accounting processes.
              </p>
              <p>
                Previously at <span className="text-foreground font-medium">Rigi</span>, I led the
                development of a comprehensive LMS platform adopted by 50+ edtech creators and serving
                1M+ learners, and built GapUp &mdash; a platform for SEBI-registered advisors that drove
                a 50%+ revenue increase.
              </p>
              <p>
                I enjoy working across the stack: designing clean APIs, building performant React UIs,
                and thinking through system design. Outside of web development, I&apos;ve built things
                in C++ ranging from a MongoDB driver wrapper to a web framework from scratch.
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
