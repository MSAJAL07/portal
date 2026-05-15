"use client";

import { motion } from "framer-motion";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Veramatic",
    role: "Senior Software Developer",
    period: "April 2025 – Present",
    location: "Remote",
    bullets: [
      "Working on the Onboarding team, contributing to scalable automation workflows that streamline complex data onboarding and enhance system reliability for dealership accounting processes.",
    ],
  },
  {
    company: "Rigi",
    role: "Senior Software Developer",
    period: "Feb 2023 – April 2025",
    location: "Bengaluru",
    bullets: [
      "Developed GapUp, allowing users to discover SEBI-registered advisors, purchase advisory services and track referrals, driving a 50%+ revenue increase.",
      "Extended the existing coupon service to support platform-level coupons for 100K+ users, enhanced payment logic to accommodate platform cuts, and implemented affiliate tracking.",
      "Led development of a comprehensive LMS platform enabling creators to design cohorts with text, video, audio, live classes, quizzes, and assignments — enabling 500+ cohorts to launch.",
      "Built cohort purchase landing pages and a content access platform with progress tracking and certificate issuance for 1M+ users.",
      "Engineered a custom video player supporting MPD and M3U8 formats with multi-language subtitles and resolution selection, reducing playback errors by 98%.",
      "LMS adopted by 50+ edtech and stock market creators including GrowDataSkills, HeyDevOps, AlgoPrep, OnePercentClub, PowerOfStocks, and Mohak Mangal.",
    ],
  },
  {
    company: "GoBOLT",
    role: "SDE 1 – Fullstack",
    period: "Jan 2022 – Feb 2023",
    location: "Gurugram",
    bullets: [
      "Architected an analytics dashboard from scratch to analyze key parameters of 3PL logistics solutions, providing senior leadership with improved visibility into processes.",
      "Enhanced PO and SOB bulk processing workflows using Azure Orchestrator, streamlining the order management process.",
      "Developed key features of the GoBolt TMS platform: carrier selection, shipment tracking, and freight optimization, with WMS and ERP integration.",
    ],
  },
  {
    company: "Luxolis (LuxPM)",
    role: "Software Development Engineer",
    period: "May 2021 – Jan 2022",
    location: "Delhi",
    bullets: [
      "Full-stack developer for a yoga instructor booking platform, handling frontend and backend development including user authentication and booking management.",
      "Integrated payment systems and optimized user experience for seamless booking flow.",
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
              <div className="md:col-span-1">
                <p className="font-semibold text-sm">{exp.company}</p>
                <p className="text-xs text-muted-foreground mt-1">{exp.period}</p>
                <p className="text-xs text-muted-foreground">{exp.location}</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-sm font-medium text-cyan-500 mb-3">{exp.role}</p>
                <ul className="space-y-2">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-cyan-500 mt-1.5 shrink-0">▹</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
