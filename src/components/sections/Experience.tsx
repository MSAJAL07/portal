"use client";

import { motion } from "framer-motion";

interface Role {
  title: string;
  period: string;
  bullets: string[];
}

interface ExperienceItem {
  company: string;
  location: string;
  roles: Role[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Veramatic",
    location: "Remote",
    roles: [
      {
        title: "Senior Software Developer",
        period: "April 2025 – Present",
        bullets: [
          "Working on the Onboarding team, contributing to scalable automation workflows that streamline complex data onboarding and enhance system reliability for dealership accounting processes.",
        ],
      },
    ],
  },
  {
    company: "Rigi",
    location: "Bengaluru, Karnataka, India · On-site",
    roles: [
      {
        title: "Senior Software Developer",
        period: "Oct 2023 – Mar 2025 · 1 yr 6 mos",
        bullets: [
          "Developed a comprehensive LMS platform enabling creators to design cohorts with text, video, audio, live classes, quizzes, and assignments, including features like draft saving, parallel video uploads, and lesson rearrangement.",
          "Developed creator dashboards for managing certificates, installment payments, coupons, drip learning, affiliate rewards, and more.",
          "Developed a user-friendly landing page for seamless cohort purchases and a content access platform with lesson viewing, commenting, quizzes, and assignment submissions, featuring progress tracking and certificate issuance for 1M+ users.",
          "Engineered a custom Video.js player supporting MPD and M3U8 formats, with multi-language subtitle support and dynamic bitrate selection for optimized video streaming.",
        ],
      },
      {
        title: "Software Developer",
        period: "Feb 2023 – Oct 2023 · 9 mos",
        bullets: [
          "Developed GapUp from scratch, enabling users to discover SEBI-registered advisors, purchase advisory services, and track referrals, driving a 50%+ revenue increase.",
          "Extended the existing Rigi coupon service to support platform-level coupons for GapUp, enhanced payment logic to accommodate platform cuts across all offerings, and implemented affiliate tracking for GapUp's affiliate program.",
          "Integrated Razorpay for payments, Amplitude for user behaviour tracking, and built a referral system to enhance user engagement and acquisition.",
        ],
      },
    ],
  },
  {
    company: "GoBOLT",
    location: "Gurugram",
    roles: [
      {
        title: "SDE 1 – Fullstack",
        period: "Jan 2022 – Feb 2023",
        bullets: [
          "Architected an analytics dashboard from scratch to analyze key parameters of 3PL logistics solutions, providing senior leadership with improved visibility into processes.",
          "Enhanced PO and SOB bulk processing workflows using Azure Orchestrator, streamlining the order management process.",
          "Developed key features of the GoBolt TMS platform: carrier selection, shipment tracking, and freight optimization, with WMS and ERP integration.",
        ],
      },
    ],
  },
  {
    company: "Luxolis (LuxPM)",
    location: "Delhi",
    roles: [
      {
        title: "Software Development Engineer",
        period: "May 2021 – Jan 2022",
        bullets: [
          "Full-stack developer for a yoga instructor booking platform, handling frontend and backend development including user authentication and booking management.",
          "Integrated payment systems and optimized user experience for seamless booking flow.",
        ],
      },
    ],
  },
];

export function Experience() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-8">Experience</h2>
        </motion.div>

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="grid md:grid-cols-4 gap-4"
            >
              {/* Left: company + location */}
              <div className="md:col-span-1">
                <p className="font-semibold text-sm">{exp.company}</p>
                <p className="text-xs text-muted-foreground mt-1">{exp.location}</p>
              </div>

              {/* Right: roles */}
              <div className="md:col-span-3 space-y-6">
                {exp.roles.map((role, j) => (
                  <div
                    key={j}
                    className={
                      exp.roles.length > 1 && j < exp.roles.length - 1
                        ? "pb-6 border-b border-border/40"
                        : ""
                    }
                  >
                    <p className="text-sm font-medium text-cyan-500">{role.title}</p>
                    <p className="text-xs text-muted-foreground mb-3">{role.period}</p>
                    <ul className="space-y-2">
                      {role.bullets.map((bullet, k) => (
                        <li key={k} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-cyan-500 mt-1.5 shrink-0">▹</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
