export interface SkillInfo {
  title: string;
  description: string;
  uses: string[];
  level: number;
  levelText: string;
}

export const skillDetails: Record<string, SkillInfo> = {
  Java: {
    title: "Programming Language",
    description:
      "A powerful object-oriented language widely used for enterprise software, backend systems, and scalable applications.",
    uses: [
      "Spring Boot",
      "REST APIs",
      "Backend Development",
      "DSA & Problem Solving",
    ],
    level: 90,
    levelText: "Advanced",
  },

  Python: {
    title: "Programming Language",
    description:
      "Versatile language used in AI, Machine Learning, automation, scripting, and backend development.",
    uses: [
      "Machine Learning",
      "Automation",
      "Data Analysis",
      "Backend APIs",
    ],
    level: 88,
    levelText: "Advanced",
  },

  React: {
    title: "Frontend Library",
    description:
      "JavaScript library for creating fast and interactive user interfaces using reusable components.",
    uses: [
      "Component Architecture",
      "SPA Development",
      "Hooks",
      "State Management",
    ],
    level: 92,
    levelText: "Advanced",
  },

  "Next.js": {
    title: "React Framework",
    description:
      "Framework for server-side rendering, routing, SEO optimization and full-stack applications.",
    uses: [
      "SSR",
      "API Routes",
      "Routing",
      "Performance",
    ],
    level: 90,
    levelText: "Advanced",
  },

  Docker: {
    title: "Containerization Platform",
    description:
      "Packages applications and dependencies into lightweight containers for consistent deployment.",
    uses: [
      "Microservices",
      "CI/CD",
      "Cloud Deployment",
      "Development Environment",
    ],
    level: 70,
    levelText: "Intermediate",
  },

  Kubernetes: {
    title: "Container Orchestration",
    description:
      "Automates deployment, scaling and management of containerized applications.",
    uses: [
      "Pods",
      "Deployments",
      "Auto Scaling",
      "Load Balancing",
    ],
    level: 45,
    levelText: "Learning",
  },

  AWS: {
    title: "Cloud Platform",
    description:
      "Cloud computing platform offering compute, networking, storage and DevOps services.",
    uses: [
      "EC2",
      "IAM",
      "Cloud Deployment",
      "Scalable Infrastructure",
    ],
    level: 65,
    levelText: "Intermediate",
  },

  "Spring Boot": {
    title: "Java Framework",
    description:
      "Framework for building production-ready REST APIs and enterprise applications.",
    uses: [
      "REST APIs",
      "Microservices",
      "Authentication",
      "Backend Development",
    ],
    level: 85,
    levelText: "Advanced",
  },
};
