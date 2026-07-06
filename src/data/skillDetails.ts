export interface SkillInfo {
  title: string;
  description: string;
  uses: string[];
  level: number;
  levelText: string;
}

export const skillDetails: Record<string, SkillInfo> = {
  // ===========================
  // Programming Languages
  // ===========================

  Java: {
    title: "Programming Language",
    description:
      "A robust object-oriented programming language used for backend development, enterprise applications, and scalable software solutions.",
    uses: [
      "Spring Boot",
      "REST APIs",
      "DSA & Problem Solving",
      "Backend Development",
    ],
    level: 90,
    levelText: "Advanced",
  },

  Python: {
    title: "Programming Language",
    description:
      "Versatile language widely used for AI, machine learning, automation, scripting, and backend application development.",
    uses: [
      "Machine Learning",
      "Automation",
      "Data Analysis",
      "Backend APIs",
    ],
    level: 88,
    levelText: "Advanced",
  },

  JavaScript: {
    title: "Programming Language",
    description:
      "The core language of modern web development, enabling dynamic, interactive, and responsive user experiences.",
    uses: [
      "Frontend Development",
      "React.js",
      "DOM Manipulation",
      "Async Programming",
    ],
    level: 90,
    levelText: "Advanced",
  },

  // ===========================
  // Frontend
  // ===========================

  "React.js": {
    title: "Frontend Library",
    description:
      "JavaScript library for building reusable, component-based, and high-performance user interfaces.",
    uses: [
      "SPA Development",
      "Hooks",
      "Component Architecture",
      "State Management",
    ],
    level: 92,
    levelText: "Advanced",
  },

  "Next.js": {
    title: "React Framework",
    description:
      "Production-ready React framework supporting server-side rendering, routing, and optimized performance.",
    uses: [
      "SSR",
      "Routing",
      "SEO",
      "Full Stack Apps",
    ],
    level: 90,
    levelText: "Advanced",
  },

  HTML: {
    title: "Markup Language",
    description:
      "Standard markup language used to structure and organize web page content.",
    uses: [
      "Semantic HTML",
      "Accessibility",
      "Forms",
      "SEO Structure",
    ],
    level: 95,
    levelText: "Advanced",
  },

  CSS: {
    title: "Styling Language",
    description:
      "Styles web applications with responsive layouts, animations, and modern UI design techniques.",
    uses: [
      "Responsive Design",
      "Flexbox",
      "Grid",
      "Animations",
    ],
    level: 90,
    levelText: "Advanced",
  },

  "Material UI": {
    title: "React UI Library",
    description:
      "Component library implementing Google's Material Design for fast and consistent UI development.",
    uses: [
      "Responsive Components",
      "Modern UI",
      "Theme Customization",
      "Forms",
    ],
    level: 85,
    levelText: "Advanced",
  },

  // ===========================
  // Backend
  // ===========================

  "Spring Boot": {
    title: "Java Framework",
    description:
      "Framework for building production-ready REST APIs, enterprise applications, and microservices.",
    uses: [
      "REST APIs",
      "Microservices",
      "Authentication",
      "Backend Services",
    ],
    level: 88,
    levelText: "Advanced",
  },

  "REST APIs": {
    title: "API Architecture",
    description:
      "Architectural style for building scalable and secure communication between applications.",
    uses: [
      "Client-Server Communication",
      "CRUD Operations",
      "Authentication",
      "Integration",
    ],
    level: 90,
    levelText: "Advanced",
  },

  WebClient: {
    title: "Reactive HTTP Client",
    description:
      "Spring WebFlux client for efficient asynchronous communication between microservices.",
    uses: [
      "Reactive Programming",
      "API Integration",
      "Microservices",
      "Non-blocking Calls",
    ],
    level: 80,
    levelText: "Intermediate",
  },

  MongoDB: {
    title: "NoSQL Database",
    description:
      "Document-oriented database designed for scalable and flexible application development.",
    uses: [
      "JSON Documents",
      "Scalable Storage",
      "Aggregation",
      "Cloud Applications",
    ],
    level: 85,
    levelText: "Advanced",
  },

  MySQL: {
    title: "Relational Database",
    description:
      "Popular relational database system for structured data storage and SQL-based querying.",
    uses: [
      "SQL Queries",
      "Joins",
      "Transactions",
      "Database Design",
    ],
    level: 85,
    levelText: "Advanced",
  },

  PostgreSQL: {
    title: "Advanced SQL Database",
    description:
      "Powerful open-source relational database known for reliability, extensibility, and advanced SQL features.",
    uses: [
      "Complex Queries",
      "Indexes",
      "Transactions",
      "Scalable Applications",
    ],
    level: 78,
    levelText: "Intermediate",
  },

  // ===========================
  // Frameworks & Tools
  // ===========================

  TensorFlow: {
    title: "Machine Learning Framework",
    description:
      "Open-source framework for developing, training, and deploying deep learning models.",
    uses: [
      "Deep Learning",
      "Neural Networks",
      "Computer Vision",
      "AI Applications",
    ],
    level: 80,
    levelText: "Intermediate",
  },

  "Scikit-learn": {
    title: "Machine Learning Library",
    description:
      "Python library providing efficient machine learning algorithms for data analysis and prediction.",
    uses: [
      "Classification",
      "Regression",
      "Clustering",
      "Model Evaluation",
    ],
    level: 82,
    levelText: "Intermediate",
  },

  "Cisco Packet Tracer": {
    title: "Network Simulator",
    description:
      "Simulation platform used for designing, configuring, and testing computer networks.",
    uses: [
      "Network Design",
      "Routing",
      "Switching",
      "Lab Practice",
    ],
    level: 90,
    levelText: "Advanced",
  },

  "SD-WAN": {
    title: "Software Defined WAN",
    description:
      "Modern networking technology that intelligently routes traffic across wide-area networks.",
    uses: [
      "Traffic Engineering",
      "Network Automation",
      "Path Selection",
      "Enterprise WAN",
    ],
    level: 82,
    levelText: "Intermediate",
  },

  "Cisco DNA Center": {
    title: "Network Management Platform",
    description:
      "Cisco platform for centralized automation, monitoring, and management of enterprise networks.",
    uses: [
      "Automation",
      "Network Monitoring",
      "Policy Management",
      "Provisioning",
    ],
    level: 75,
    levelText: "Intermediate",
  },

  AWS: {
    title: "Cloud Platform",
    description:
      "Amazon Web Services provides scalable cloud infrastructure, networking, storage, and deployment services.",
    uses: [
      "EC2",
      "IAM",
      "Cloud Deployment",
      "Scalable Infrastructure",
    ],
    level: 75,
    levelText: "Intermediate",
  },

  Docker: {
    title: "Containerization Platform",
    description:
      "Packages applications and dependencies into lightweight containers for consistent deployment.",
    uses: [
      "Containers",
      "Microservices",
      "CI/CD",
      "Cloud Deployment",
    ],
    level: 75,
    levelText: "Intermediate",
  },

  Kubernetes: {
    title: "Container Orchestration",
    description:
      "Automates deployment, scaling, and management of containerized applications.",
    uses: [
      "Pods",
      "Deployments",
      "Load Balancing",
      "Auto Scaling",
    ],
    level: 60,
    levelText: "Learning",
  },

  Render: {
    title: "Cloud Hosting Platform",
    description:
      "Cloud platform used for deploying full-stack applications with automated builds and scaling.",
    uses: [
      "Backend Hosting",
      "Static Sites",
      "CI/CD",
      "Web Services",
    ],
    level: 85,
    levelText: "Advanced",
  },

  GitHub: {
    title: "Version Control Platform",
    description:
      "Platform for version control, collaboration, and continuous integration using Git.",
    uses: [
      "Git",
      "Code Collaboration",
      "Pull Requests",
      "Version Control",
    ],
    level: 90,
    levelText: "Advanced",
  },

  // ===========================
  // Domains
  // ===========================

  "Computer Networking": {
    title: "Core Domain",
    description:
      "Strong foundation in networking concepts including routing, switching, protocols, and network architecture.",
    uses: [
      "TCP/IP",
      "Routing",
      "Switching",
      "Network Design",
    ],
    level: 92,
    levelText: "Advanced",
  },

  "AI/ML Integration": {
    title: "Artificial Intelligence",
    description:
      "Building intelligent applications by integrating machine learning models into software solutions.",
    uses: [
      "Generative AI",
      "Prediction Models",
      "Automation",
      "Computer Vision",
    ],
    level: 88,
    levelText: "Advanced",
  },

  "Web Development": {
    title: "Software Development",
    description:
      "Designing responsive, scalable, and full-stack web applications using modern technologies.",
    uses: [
      "Frontend",
      "Backend",
      "REST APIs",
      "Deployment",
    ],
    level: 92,
    levelText: "Advanced",
  },

  "Network Security": {
    title: "Cybersecurity",
    description:
      "Protecting network infrastructure through secure communication, authentication, and monitoring.",
    uses: [
      "Firewalls",
      "Access Control",
      "Threat Prevention",
      "Secure Networks",
    ],
    level: 82,
    levelText: "Intermediate",
  },

  IoT: {
    title: "Internet of Things",
    description:
      "Developing smart connected systems by integrating sensors, embedded devices, and cloud services.",
    uses: [
      "ESP8266",
      "Arduino",
      "Sensors",
      "Automation",
    ],
    level: 90,
    levelText: "Advanced",
  },

  "Cloud Deployment": {
    title: "Cloud Engineering",
    description:
      "Deploying scalable applications using cloud infrastructure, containers, and CI/CD pipelines.",
    uses: [
      "Docker",
      "AWS",
      "Render",
      "CI/CD",
    ],
    level: 80,
    levelText: "Intermediate",
  },

  // ===========================
  // Hardware
  // ===========================

  Arduino: {
    title: "Microcontroller Platform",
    description:
      "Open-source hardware platform for embedded systems, automation, and IoT prototyping.",
    uses: [
      "Embedded Systems",
      "Sensors",
      "Automation",
      "Prototyping",
    ],
    level: 90,
    levelText: "Advanced",
  },

  "Raspberry Pi": {
    title: "Single Board Computer",
    description:
      "Compact computer used for IoT, edge computing, automation, and Linux-based projects.",
    uses: [
      "Linux",
      "IoT",
      "Automation",
      "Python",
    ],
    level: 88,
    levelText: "Advanced",
  },

  ESP8266: {
    title: "Wi-Fi Microcontroller",
    description:
      "Low-cost Wi-Fi-enabled microcontroller widely used in IoT and smart automation systems.",
    uses: [
      "Wi-Fi Communication",
      "IoT Devices",
      "Home Automation",
      "Embedded Systems",
    ],
    level: 85,
    levelText: "Advanced",
  },

  Sensors: {
    title: "Electronic Components",
    description:
      "Devices that detect physical changes and provide real-time data for automation and intelligent systems.",
    uses: [
      "Monitoring",
      "Automation",
      "IoT Projects",
      "Data Collection",
    ],
    level: 88,
    levelText: "Advanced",
  },
};
