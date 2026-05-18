export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  thumbnail?: string;
}

export const projects: Project[] = [
  {
    id: "cpp-mongodb-library",
    title: "C++ MongoDB Library",
    description:
      "A C++ wrapper over the MongoDB C Driver, providing a clean object-oriented API for database operations. Handles connection management, CRUD operations, and error propagation in a header-friendly interface.",
    tags: ["C++", "MongoDB", "Library"],
    githubUrl: "https://github.com/MSAJAL07/cpp-library-for-mongodb",
  },
  {
    id: "data-driven-dashboard",
    title: "Data-Driven Dashboard",
    description:
      "A React dashboard featuring word cloud visualization, pagination, filtering, and sorting of large datasets. Built with performance and usability in mind.",
    tags: ["React", "JavaScript", "Data Visualization"],
    githubUrl: "https://github.com/MSAJAL07/DataDrivenDashboardinREACT",
  },
  {
    id: "web-framework-cpp",
    title: "Web Application Framework (C++)",
    description:
      "An HTTP/1.1 application framework built from scratch in C++. Implements raw TCP socket handling, request parsing, URL routing, and response generation with zero external dependencies.",
    tags: ["C++", "Web Server", "Networking"],
    githubUrl: "https://github.com/MSAJAL07/Web-applications-framework-in-CPP",
  },
  {
    id: "invoice-generator",
    title: "Invoice Generator",
    description:
      "A Python CLI tool that takes a template bill with variable placeholders and a JSON data file to automatically generate formatted invoices.",
    tags: ["Python", "CLI", "Automation"],
    githubUrl: "https://github.com/MSAJAL07/Invoice-Generator",
  },
  {
    id: "smart-attendance",
    title: "Smart Attendance Recognizer",
    description:
      "React application for an AI-powered attendance system. Communicates with a recognition API in real time, manages session state, and renders live attendance records.",
    tags: ["React", "JavaScript", "AI/ML"],
    githubUrl: "https://github.com/MSAJAL07/smart-attendance-recognizer-frontend",
  },
];
