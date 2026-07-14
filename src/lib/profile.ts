export const profile = {
  name: "Sonal Kumari",
  shortName: "SONAL",
  role: "Full Stack Developer",
  phone: "+91 8360228755",
  email: "sonal.kumari2304@gmail.com",
  linkedin: "https://linkedin.com/in/sonal-singh-2304so",
  github: "https://github.com/sonalsingh23",
  hackerrank: "https://www.hackerrank.com/profile/20bcs1808",
  resume: "/Sonal_Kumari_Resume.pdf",
  summary:
    "Full-stack developer building scalable web and mobile products with React, Node.js, Express, LLM, RAG, and modern databases.",
};

export const skills = [
  {
    title: "Frontend",
    description: "React.js, Next.js, Angular, TypeScript, Redux, Tailwind, Bootstrap",
    icon: "01",
  },
  {
    title: "Backend",
    description: "Node.js, Express.js, RESTful APIs, Microservices, ASP.NET",
    icon: "02",
  },
  {
    title: "LLM & RAG",
    description: "Prompt engineering, retrieval-augmented generation, vector search, AI apps",
    icon: "03",
  },
  {
    title: "Databases",
    description: "MySQL, MongoDB, PostgreSQL, SQL query optimization",
    icon: "04",
  },
  {
    title: "Languages",
    description: "JavaScript, TypeScript, Java, Python, ASP.NET · DSA & OOPs",
    icon: "05",
  },
  {
    title: "Cloud & Tools",
    description: "AWS S3, Docker, JWT auth, Axios, CI-friendly workflows",
    icon: "06",
  },
];

export const experience = [
  {
    role: "Full Stack Developer",
    company: "Ultrashield Software Private limited",
    period: "Dec 2025 – Present",
    points: [
      "Building scalable full-stack features for web and mobile with React.js, Node.js, and Express.js.",
      "Improving performance, database queries, and responsive UX across product surfaces.",
    ],
  },
  {
    role: "Software Developer",
    company: "Primafelicitas",
    period: "Feb 2025 – Nov 2025",
    points: [
      "Developed scalable backend APIs with Node.js and Express.js for enterprise web apps.",
      "Integrated frontend and backend services for reliable data flow across teams.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "PerfectKode Software Technologies",
    period: "Jan 2024 – Jan 2025",
    points: [
      "Built responsive interfaces with React.js, JavaScript, and Tailwind CSS.",
      "Created reusable UI components and enhanced existing React applications.",
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  stack: string;
  tech: string[];
  image: string;
  video: string;
  live: boolean;
  liveUrl?: string;
  githubUrl?: string;
  features: string[];
};

export const projects: Project[] = [
  {
    slug: "pmr-welfare-foundation",
    title: "PMR Welfare Foundation",
    description:
      "Full-stack non-profit platform for education, internships, exams, and community welfare with secure auth and dashboards.",
    longDescription:
      "Architected and deployed a full-stack web platform for a Section-8 NGO serving educational programs, internship registrations, online examination modules, and community welfare initiatives. The product includes robust form validation, JWT authentication, and data-driven dashboards that improved engagement and accessibility.",
    stack: "React • FastAPI • Python • JWT • Radix UI",
    tech: [
      "React.js",
      "CSS",
      "Radix UI",
      "Zod",
      "Axios",
      "FastAPI",
      "Python",
      "Uvicorn",
      "JWT",
      "Passlib",
      "Bcrypt",
      "ReportLab",
    ],
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80",
    video: "/videos/hero-code-sd.mp4",
    live: true,
    liveUrl: "https://pmrwelfarefoundation.org",
    features: [
      "Educational programs & scholarship flows",
      "Internship registration modules",
      "Online examination experience",
      "Secure JWT authentication",
      "Data-driven admin dashboards",
      "Validated forms with Zod + Radix UI",
    ],
  },
  {
    slug: "hobbeme-vendor-panel",
    title: "Hobbeme Vendor Panel",
    description:
      "Vendor business dashboard with React hooks, AWS S3 storage, OneSignal notifications, and automated data pipelines.",
    longDescription:
      "Built a vendor management dashboard for Hobbeeme with reusable React components and hooks for maintainability. Integrated AWS S3 for scalable file storage, OneSignal for real-time push notifications, and automated parsing pipelines to streamline day-to-day business operations.",
    stack: "React • Node.js • PostgreSQL • Docker • AWS S3",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Docker",
      "AWS S3",
      "OneSignal",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
    video: "/videos/hero-code-sd.mp4",
    live: true,
    liveUrl: "https://www.hobbeeme.com",
    features: [
      "Reusable React component system",
      "Vendor bookings & business tracking",
      "AWS S3 cloud storage",
      "OneSignal push notifications",
      "Automated data parsing pipelines",
      "Dockerized service setup",
    ],
  },
  {
    slug: "facial-emotion-detection",
    title: "Facial Emotion Detection",
    description:
      "Research publication pipeline using Haar Cascade and CNN for emotion detection, training, and evaluation.",
    longDescription:
      "Built a CNN-based facial emotion detection pipeline covering image preprocessing, model training, evaluation, and performance analysis. Published as research work demonstrating applied computer vision with classical and deep-learning techniques.",
    stack: "Python • CNN • Haar Cascade • Research",
    tech: ["Python", "CNN", "Haar Cascade", "OpenCV", "Model Evaluation"],
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1400&q=80",
    video: "/videos/hero-code-sd.mp4",
    live: false,
    githubUrl: "https://github.com/sonalsingh23/facial-emotion-detection",
    features: [
      "Haar Cascade face detection",
      "CNN emotion classification pipeline",
      "Image preprocessing workflow",
      "Model training & evaluation",
      "Performance analysis reporting",
    ],
  },
];

export const moreProjects = [
  {
    title: "ShopSphere",
    description: "Ecommerce experience shipped on Vercel.",
    liveUrl: "https://shopsphere-self.vercel.app",
    githubUrl: "https://github.com/sonalsingh23/shopsphere",
  },
  {
    title: "CRM Website",
    description: "CRM frontend product deployed live.",
    liveUrl: "https://crm-website-lemon.vercel.app",
    githubUrl: "https://github.com/sonalsingh23/crm_website",
  },
  {
    title: "Jeetzo Frontend",
    description: "Product frontend available on Vercel.",
    liveUrl: "https://jeetzo-frontend.vercel.app",
    githubUrl: "https://github.com/sonalsingh23/jeetzo-frontend",
  },
];

export const education = {
  degree: "Bachelor of Engineering — Computer Science",
  school: "Chandigarh University",
  period: "2020 – 2024",
  cgpa: "7.90",
};

export const certifications = [
  "HackerRank 5★ Problem Solving",
  "Salesforce Training — Honeywell",
  "React — Internshala",
  "Data Mining — NPTEL",
  "Java 11 Beyond Basic — Infosys",
];

export const techItems = [
  "React",
  "Next.js",
  "Angular",
  "TypeScript",
  "Node.js",
  "Express",
  "LLM",
  "RAG",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Java",
  "Python",
  "AWS S3",
  "Docker",
  "Redux",
  "Tailwind",
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
