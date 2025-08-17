export const siteConfig = {
  name: "Sebastian Su",
  title: "Full-Stack Software Engineer",
  description: "Portfolio website of Sebastian Su - Full-Stack Engineer with expertise in distributed systems",
  accentColor: "#1d4ed8",
  social: {
    email: "your-email@example.com",
    linkedin: "https://linkedin.com/in/yourprofile",
    twitter: "",
    github: "https://github.com/yourusername",
  },
  aboutMe:
    "I'm a full-stack engineer with expertise in distributed systems and a passion for AI-driven, data-powered solutions. I love exploring system design, business logic, and data flows to uncover new ways technology can optimize performance and efficiency at scale.",
  skills: ["Java", "Python", "JavaScript", "TypeScript", "C#", "Kotlin", "React.js", "Redux", "Spring Boot", "MySQL", "MongoDB", "Redis", "Kafka", "Elasticsearch", "Docker", "AWS", "DynamoDB", "JWT", "API Gateway", "Pandas", "Power BI", "Tableau"],
  projects: [
    {
      name: "Custom Macros for Dynamics",
      description:
        "A feature that lets customers write and run custom JavaScript inside Dynamics to automate repetitive workflows. This became a key enabler for migrating enterprise clients from outdated systems to a modern SaaS platform, making customization both powerful and manageable.",
      link: "",
      skills: ["JavaScript", "Dynamics 365", "SaaS"],
    },
    {
      name: "Agent Diagnostic Tool",
      description:
        "A self-service diagnostic system inside Dynamics 365 that empowered support agents to troubleshoot their own environment issues. By running pre-defined diagnostic rules and generating detailed reports, agents could resolve problems faster and open fewer tickets.",
      link: "",
      skills: ["Dynamics 365", "Diagnostics", "Support Tools"],
    },
    {
      name: "In-App Messaging for Marketplaces",
      description:
        "Designed an in-app messaging service with text, image sharing, push notifications, and broadcast messaging capabilities. By integrating with Twilio's APIs, the system increased engagement and kept conversations flowing across devices.",
      link: "",
      skills: ["React", "Twilio", "Push Notifications", "Real-time Messaging"],
    },
    {
      name: "Identity & Access Management",
      description:
        "Developed a complete role-based access control (RBAC) system with APIs for managing users, roles, and permissions. The system included detailed activity logs, multithreaded processing for scale, and email notifications for security alerts.",
      link: "",
      skills: ["RBAC", "Security", "API Development", "Multithreading"],
    },
  ],
  experience: [
    {
      company: "Microsoft",
      title: "Software Engineer",
      dateRange: "Mar 2022 - Feb 2025",
      bullets: [
        "Built APIs and infrastructure for Copilot and Teams, raising critical API reliability to 99.97%",
        "Led vendor teams to fully automate testing pipelines, boosting code quality and developer velocity",
        "Carried global on-call responsibilities, solving high-priority incidents for Fortune 500 customers across eight regions",
        "Designed systems for scale, resilience, and user trust serving large-scale productivity solutions",
      ],
    },
    {
      company: "Michaels",
      title: "Software Engineer",
      dateRange: "Oct 2020 - Mar 2022",
      bullets: [
        "Led transformation from legacy e-commerce system to modern, scalable platform",
        "Built authentication flows, in-app messaging, and secure user management with JWT and Spring Boot",
        "Created interactive dashboards and management tools in React and Redux",
        "Delivered end-to-end ownership across the stack, from designing APIs to user-facing features",
      ],
    },
    {
      company: "Qcompass Voyage Limited (Qeeq.com)",
      title: "Software Engineer",
      dateRange: "Jan 2018 - Aug 2019",
      bullets: [
        "Built analytics dashboards used daily by 200+ employees across product, marketing, and finance teams",
        "Optimized large-scale data pipelines to handle millions of data points efficiently",
        "Enabled smarter pricing and operational strategies through data insights",
        "Worked as both full-stack engineer and data analyst in fast-growing startup operating in 160+ countries",
      ],
    },
  ],
  education: [
    {
      school: "University of California, Berkeley",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "Fall 2015 - Fall 2019",
      achievements: [],
    },
  ],
};
