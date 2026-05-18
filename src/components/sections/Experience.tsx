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
          "Designing and building scalable automation workflows for complex data onboarding pipelines, improving system reliability and throughput for dealership accounting processes.",
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
          "Architected the LMS platform's core services — cohort management, drip-content delivery, parallel video upload pipelines, and lesson ordering — enabling 500+ cohort launches by creators.",
          "Built the certificate issuance system, installment payment logic, and affiliate reward engine powering the creator monetisation layer for 1M+ users.",
          "Designed and integrated a video streaming infrastructure using MPD and M3U8 manifest formats, with multi-language subtitle support and dynamic bitrate selection, reducing playback errors by 98%.",
          "Developed cohort purchase flows and the content access platform (progress tracking, quizzes, assignments, commenting), serving 50+ edtech creators including GrowDataSkills, AlgoPrep, and PowerOfStocks.",
        ],
      },
      {
        title: "Software Developer",
        period: "Feb 2023 – Oct 2023 · 9 mos",
        bullets: [
          "Built GapUp from scratch — a platform for SEBI-registered advisors covering service discovery, advisory purchases, and referral tracking — driving a 50%+ revenue increase.",
          "Extended the coupon service to support platform-level discounts, reworked payment logic to handle platform cuts across all offerings, and implemented an affiliate tracking system for GapUp.",
          "Integrated Razorpay for payment processing, Amplitude for event instrumentation, and built the referral and acquisition pipeline end to end.",
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
          "Architected a 3PL analytics dashboard from scratch — data ingestion, aggregation, and visualisation — giving leadership real-time visibility into logistics KPIs.",
          "Redesigned PO and SOB bulk processing into a distributed batch pipeline using Azure Orchestrator, significantly reducing order processing latency.",
          "Built core TMS services: carrier selection logic, shipment tracking, freight optimisation, and WMS/ERP integration.",
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
