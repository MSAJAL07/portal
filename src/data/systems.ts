export interface System {
  id: string;
  name: string;
  company: string;
  period: string;
  what: string;
  scale: string;
  stack: string[];
  challenge: string;
  outcome?: string;
  diagram?: string;
}

export const systems: System[] = [
  {
    id: "lms-platform",
    name: "LMS Platform",
    company: "Rigi",
    period: "Oct 2023 – Mar 2025",
    what: "Course management platform with cohort delivery, drip content scheduling, progress tracking, quizzes, and assignments.",
    scale: "1M+ learners · 500+ cohort launches",
    stack: ["Node.js", "PostgreSQL", "Redis", "S3", "FFmpeg"],
    challenge: "Parallel video upload pipeline with real-time progress events and drip-content scheduling across thousands of active cohorts.",
    outcome: "Enabled 50+ edtech creators including GrowDataSkills, AlgoPrep, and PowerOfStocks.",
    diagram: `flowchart LR
    Creator([Creator]) --> API[LMS API]
    API --> DB[(PostgreSQL)]
    API --> Cache[(Redis)]
    API --> Queue[Job Queue]
    Queue --> Worker[Upload Worker]
    Worker --> S3[S3 / Raw Video]
    S3 --> Encoder[Encoder]
    Encoder --> CDN[CloudFront]
    Learner([Learner]) --> API`,
  },
  {
    id: "video-streaming",
    name: "Video Streaming Infrastructure",
    company: "Rigi",
    period: "Oct 2023 – Mar 2025",
    what: "Adaptive bitrate video delivery using HLS and DASH, with multi-language subtitle support and dynamic quality selection.",
    scale: "98% reduction in playback errors",
    stack: ["FFmpeg", "S3", "CloudFront", "Node.js", "HLS", "DASH"],
    challenge: "Generating MPD/M3U8 manifests per video, injecting subtitle tracks for multiple languages, and ensuring encoding reliability at scale.",
    outcome: "Reduced playback errors by 98% and enabled seamless adaptive streaming across all creator content.",
    diagram: `flowchart LR
    Upload[Upload API] --> Raw[S3 Raw]
    Raw --> Encoder[FFmpeg Worker]
    Encoder --> HLS[HLS Segments]
    Encoder --> DASH[DASH Manifest]
    HLS --> CDN[CloudFront]
    DASH --> CDN
    Subtitles[Subtitle Tracks] --> CDN
    CDN --> Player([Video Player])`,
  },
  {
    id: "payment-orchestration",
    name: "Payment Orchestration System",
    company: "Rigi",
    period: "Feb 2023 – Mar 2025",
    what: "Payment processing layer covering installment plans, platform-cut splits, coupon discounts, affiliate commissions, and certificate issuance.",
    scale: "Platform-wide · 1M+ user base",
    stack: ["Razorpay", "Node.js", "PostgreSQL", "Amplitude"],
    challenge: "Coordinating installment schedules, platform split logic, and affiliate reward allocation across multiple concurrent payment flows without double-processing.",
    outcome: "Foundation for 50%+ revenue increase via GapUp; powered full creator monetisation layer.",
    diagram: `flowchart LR
    Client([Client]) --> PurchaseAPI[Purchase API]
    PurchaseAPI --> Gateway[Razorpay]
    Gateway --> Webhook[Webhook Handler]
    Webhook --> DB[(PostgreSQL)]
    Webhook --> AffiliateEngine[Affiliate Engine]
    Webhook --> CertPipeline[Certificate Pipeline]
    Webhook --> Analytics[Amplitude]`,
  },
  {
    id: "data-onboarding-pipeline",
    name: "Data Onboarding Pipeline",
    company: "Veramatic",
    period: "Apr 2025 – Present",
    what: "Automation workflows that ingest, validate, transform, and load complex dealership accounting data into downstream systems.",
    scale: "Multi-source · business-critical reliability",
    stack: ["Node.js", "TypeScript"],
    challenge: "Handling heterogeneous source formats with strict validation, partial failure recovery, and auditability requirements.",
    diagram: `flowchart LR
    Source([Data Source]) --> Intake[Intake API]
    Intake --> Validator[Validation Layer]
    Validator -->|valid| Transform[Transform Worker]
    Validator -->|invalid| ErrorLog[(Error Log)]
    Transform --> Accounting[Accounting System]
    Transform --> AuditLog[(Audit Log)]`,
  },
  {
    id: "logistics-batch-pipeline",
    name: "Logistics Batch Processing Pipeline",
    company: "GoBOLT",
    period: "Jan 2022 – Feb 2023",
    what: "Distributed batch pipeline for processing purchase orders and shipment onboarding, replacing a synchronous bulk-upload flow.",
    scale: "3PL operations · significant latency reduction",
    stack: ["Azure Orchestrator", "Node.js", "React"],
    challenge: "Redesigning synchronous PO/SOB bulk processing into an async distributed pipeline with real-time status reporting for operations leadership.",
    outcome: "Significantly reduced order processing latency and gave leadership real-time visibility into logistics KPIs.",
    diagram: `flowchart LR
    Intake[PO / SOB Intake] --> Orchestrator[Azure Orchestrator]
    Orchestrator --> W1[Batch Worker]
    Orchestrator --> W2[Batch Worker]
    Orchestrator --> W3[Batch Worker]
    W1 & W2 & W3 --> DB[(Order DB)]
    DB --> DashAPI[Dashboard API]
    DashAPI --> Dashboard([Analytics Dashboard])`,
  },
];
