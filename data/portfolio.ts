export type SocialLink = {
  label: string;
  href: string;
};

export type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
};

export type WorkProject = {
  name: string;
  status?: string;
  description: string[];
  responsibilities: string[];
  technologies: string[];
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  projects: WorkProject[];
};

export type Education = {
  degree: string;
  institution: string;
  period: string;
};

export type FeaturedProject = {
  name: string;
  eyebrow: string;
  description: string;
  technologies: string[];
  features: string[];
  repository?: string;
  live?: string;
  variant: "featured" | "standard" | "wide";
};

export type CreativeCapability = {
  name: string;
  description: string;
};

export const portfolio = {
  person: {
    name: "Jebin T",
    shortName: "JT",
    title: "Senior Software Developer",
    descriptor: "Full Stack Developer · Cloud Enthusiast · Tech Explorer",
    location: "Bangalore, India",
    email: "jebindhanush24@gmail.com",
    phone: "+91 8015662902",
    introduction:
      "I craft scalable web and mobile solutions using ASP.NET, Angular, React, and cloud platforms across Azure and AWS.",
    statement:
      "Building reliable digital products from thoughtful interfaces to cloud-ready systems.",
    focus:
      "Modern UI, performance, scalable architecture, and meaningful digital experiences.",
  },
  content: {
    navigation: {
      menuLabel: "Navigation",
      contactCta: "Let's talk",
    },
    hero: {
      eyebrow: "Hello, I'm Jebin",
      headingStart: "I engineer",
      headingEmphasis: "dependable",
      headingEnd: "digital products.",
      projectsCta: "View projects",
      contactCta: "Contact me",
    },
    sections: {
      about: {
        index: "01",
        eyebrow: "About",
        title: "Full-stack thinking, from interface to infrastructure.",
      },
      skills: {
        index: "02",
        eyebrow: "Capabilities",
        title: "A practical toolkit for production software.",
        description:
          "Technologies used across frontend, backend, cloud, data, and quality engineering.",
      },
      creative: {
        index: "03",
        eyebrow: "Creative studio",
        title: "Code by discipline. Content by instinct.",
        description:
          "A second creative practice focused on editing, visual rhythm, and digital storytelling.",
      },
      projects: {
        index: "04",
        eyebrow: "Selected work",
        title: "Digital systems built for real-world use.",
        description:
          "A selection of professional delivery and public projects across legacy and modern technologies.",
      },
      experience: {
        index: "05",
        eyebrow: "Experience",
        title: "Enterprise delivery across software and cloud.",
        description:
          "A career focused on modernizing applications, building dependable systems, and leading technical delivery.",
      },
      education: {
        index: "06",
        eyebrow: "Education",
        title: "The foundation.",
      },
    },
    aboutFacts: [
      { label: "Current role", value: "Lead Analyst" },
      { label: "Primary stack", value: ".NET · Angular · React" },
      { label: "Cloud platforms", value: "Azure · AWS" },
      { label: "Development focus", value: "Scale · UI · Performance" },
    ],
    github: {
      eyebrow: "Open source profile",
      title: "Follow the work as it evolves on GitHub.",
      handle: "@jebindhanush",
    },
    contact: {
      index: "07",
      eyebrow: "Start a conversation",
      headingStart: "Let's build something",
      headingEmphasis: "worth using.",
      description:
        "Have a project or collaboration idea? Send a direct email and start the conversation.",
    },
    footer: {
      technology: "Built with Next.js · Deployed on GitHub Pages",
      backToTop: "Back to top ↑",
    },
  },
  socials: [
    { label: "GitHub", href: "https://github.com/jebindhanush" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jebin-t-9752ab184/",
    },
    { label: "Email", href: "mailto:jebindhanush24@gmail.com" },
  ] satisfies SocialLink[],
  skills: [
    {
      title: "Frontend & Mobile",
      description: "Interfaces designed for clarity, reach, and real-world use.",
      skills: [
        "HTML",
        "CSS",
        "SCSS",
        "JavaScript",
        "TypeScript",
        "jQuery",
        "AJAX",
        "React",
        "Next.js",
        "React Native",
        "Angular",
        "Flutter",
        "Bootstrap",
        "Tailwind UI",
        "Material UI",
        "Highcharts",
        "amCharts",
        "Google Charts",
        "PWA",
      ],
    },
    {
      title: "Backend & Architecture",
      description: "Application foundations built for maintainability and scale.",
      skills: [
        "ASP.NET Framework",
        "Web Forms",
        "ASP.NET MVC",
        "ASP.NET Core",
        "C#",
        "Python",
        "PHP",
        "Web APIs",
        "Microservices",
        "Entity Framework Core",
        "ADO.NET",
        "Laravel",
        "Redis",
      ],
    },
    {
      title: "Data & Reporting",
      description: "Relational data, reporting, and data-rich interface tooling.",
      skills: [
        "SQL Server",
        "MySQL",
        "PostgreSQL",
        "RDLC Reporting",
        "AJAX DataTables",
      ],
    },
    {
      title: "Cloud & Infrastructure",
      description: "Application delivery across cloud and on-premises environments.",
      skills: ["Microsoft Azure", "AWS", "On-Premises Infrastructure"],
    },
    {
      title: "CI/CD & DevOps",
      description: "Automated build, delivery, and deployment workflows.",
      skills: [
        "Continuous Integration",
        "Continuous Delivery",
        "Azure DevOps",
        "GitHub Actions",
        "Jenkins",
        "Docker",
      ],
    },
    {
      title: "Quality & Tools",
      description: "A practical toolset for shipping dependable software.",
      skills: [
        "Jest",
        "xUnit",
        "NUnit",
        "Integration Testing",
        "E2E Testing",
        "Playwright",
        "Manual Testing",
        "k6",
        "Postman",
        "Git",
        "Azure Boards",
        "Jira",
        "Power BI",
      ],
    },
    {
      title: "Collaboration & Delivery",
      description:
        "Cross-functional delivery through reviews, agile ceremonies, and direct client collaboration.",
      skills: [
        "Code Reviews",
        "Sprint Planning",
        "Sprint Reviews",
        "Sprint Retrospectives",
        "Backlog Refinement",
        "Scrum Ceremonies",
        "Client Collaboration",
        "Requirements Gathering",
        "Stakeholder Communication",
      ],
    },
    {
      title: "Content & Post-Production",
      description: "Visual storytelling shaped through intentional editing and pacing.",
      skills: ["DaVinci Resolve", "CapCut", "Content Creation", "Video Editing"],
    },
  ] satisfies SkillGroup[],
  creative: {
    title: "Content creator",
    eyebrow: "Beyond the IDE",
    statement:
      "Turning raw ideas and footage into focused stories built to hold attention.",
    tools: ["DaVinci Resolve", "CapCut"],
    visual: {
      projectLabel: "Post / 01",
      eyebrow: "Create",
      headingStart: "Ideas into",
      headingEnd: "motion.",
      clips: ["Story", "Motion", "Sound"],
    },
    capabilities: [
      {
        name: "Video editing",
        description:
          "Structuring footage into clear, engaging narratives with deliberate pacing.",
      },
      {
        name: "Content creation",
        description:
          "Developing digital content from the initial idea through the final cut.",
      },
      {
        name: "Post-production",
        description:
          "Refining edits, transitions, audio, and visual flow for a polished result.",
      },
    ] satisfies CreativeCapability[],
  },
  featuredProjects: [
    {
      name: "Beneficiary Administration Dashboards",
      eyebrow: "NIC · Karnataka",
      description:
        "Implemented multiple administrative dashboards supporting beneficiary services across Karnataka while working at the National Informatics Centre.",
      technologies: [
        "Admin Dashboards",
        "Legacy Systems",
        "Modern Web Technologies",
      ],
      features: [
        "Multiple administration dashboards",
        "Beneficiary-focused government services",
        "Delivery across legacy and modern technology stacks",
      ],
      variant: "featured",
    },
    {
      name: "PinPoint Enterprise Application",
      eyebrow: "CGI · Current project",
      description:
        "Developing enterprise modules with Angular 22 and .NET Azure Functions using Domain-Driven Design principles and Azure-native services.",
      technologies: [
        "Angular 22",
        ".NET Azure Functions",
        "Azure Blob Storage",
        "Application Insights",
        "Azure SQL Database",
        "Azure Key Vault",
        "MediatR",
        "Entity Framework Core",
      ],
      features: [
        "Azure-native serverless application development",
        "Domain-Driven Design with MediatR",
        "Jest and Playwright test coverage",
      ],
      variant: "standard",
    },
    {
      name: "StoneEagle Cloud Migration",
      eyebrow: "CGI · Previous project",
      description:
        "Worked across the legacy .NET MVC application, React interfaces, microservices, payment integration, and the migration from Azure to AWS.",
      technologies: [
        ".NET Framework MVC",
        "SQL Server",
        "Entity Framework",
        "Legacy Application",
        "Microservices",
        "WEX Payment Gateway",
        "Web API",
        "React",
        "Amazon DynamoDB",
        "AWS Lambda",
        "Amazon SQS",
        "Amazon SNS",
        "Application Insights",
        "Terraform",
      ],
      features: [
        "Legacy .NET application development and modernization",
        "Microservices, Web APIs, and WEX payment integration",
        "AWS serverless and messaging services provisioned with Terraform",
      ],
      variant: "standard",
    },
    {
      name: "Document Chain",
      eyebrow: "NIC · Secure government services",
      description:
        "Designed and developed a blockchain-based secure document management system for government certificates with responsive administration and user portals.",
      technologies: [
        "Angular",
        "ASP.NET Core",
        "SQL Server",
        "Blockchain",
        "QR Codes",
        "REST APIs",
      ],
      features: [
        "Tamper-resistant certificate management",
        "QR-code retrieval and validation",
        "Secure frontend and .NET API integration",
      ],
      variant: "wide",
    },
  ] satisfies FeaturedProject[],
  experience: [
    {
      role: "Lead Analyst",
      company: "CGI Inc.",
      period: "March 2023 – Present",
      projects: [
        {
          name: "PinPoint Application",
          status: "Current project",
          description: [
            "Developing enterprise modules with Angular 22 and .NET Azure Functions.",
            "Applying Domain-Driven Design with MediatR and Entity Framework Core across Azure-native services.",
            "Working with Jest and Playwright for automated testing.",
          ],
          responsibilities: [
            "Developing and maintaining Azure Functions and Angular modules.",
            "Working with Azure Blob Storage, Azure SQL Database, Key Vault, and Application Insights.",
            "Managing delivery through Azure DevOps and Azure Boards.",
          ],
          technologies: [
            "Azure DevOps",
            ".NET Azure Functions",
            "Azure Blob Storage",
            "Application Insights",
            "Azure SQL Database",
            "Azure Key Vault",
            "Azure Boards",
            "Angular 22",
            "Jest",
            "Playwright",
            "Domain-Driven Design",
            "MediatR",
            "Entity Framework Core",
          ],
        },
        {
          name: "StoneEagle Migration",
          status: "Previous project",
          description: [
            "Led the StoneEagle platform migration from Microsoft Azure to Amazon Web Services.",
            "Worked across the legacy .NET MVC application, React application, microservices, and supporting APIs.",
            "Implemented AWS serverless, data, and messaging integrations.",
          ],
          responsibilities: [
            "Developed and maintained .NET Framework MVC, SQL Server, Entity Framework, and React modules.",
            "Built microservices and Web APIs, including WEX payment gateway integration.",
            "Worked with DynamoDB, AWS Lambda, SQS, SNS, Application Insights, and Terraform.",
          ],
          technologies: [
            ".NET Framework MVC",
            "SQL Server",
            "Entity Framework",
            "Legacy Application",
            "Microservices",
            "WEX Payment Gateway",
            "Web API",
            "React",
            "Amazon DynamoDB",
            "AWS Lambda",
            "Amazon SQS",
            "Amazon SNS",
            "Application Insights",
            "Terraform",
          ],
        },
      ],
    },
    {
      role: "Lead Engineer",
      company: "HCL Technologies",
      period: "January 2021 – March 2023",
      projects: [
        {
          name: "Xerox Enterprise Platform",
          description: [
            "Developed internal automation tools and dashboards for Xerox clients.",
            "Built Angular and ASP.NET Core components integrated with REST APIs.",
          ],
          responsibilities: [
            "Designed frontend modules and backend services.",
            "Integrated third-party APIs and internal services.",
            "Automated build and deployment pipelines.",
          ],
          technologies: [
            "Angular",
            "ASP.NET Core",
            "SQL Server",
            "Azure DevOps",
            "REST APIs",
            "CI/CD",
          ],
        },
      ],
    },
    {
      role: "Software Developer",
      company: "National Informatics Centre (NIC)",
      period: "October 2019 – December 2020",
      projects: [
        {
          name: "Document Chain",
          description: [
            "Designed and developed a blockchain-based secure document management system for government certificates.",
            "Created responsive admin and user portals with QR-code certificate retrieval.",
          ],
          responsibilities: [
            "Designed certificate-management workflows and frontend modules.",
            "Integrated the frontend with secure .NET Web APIs.",
            "Implemented QR code scanning, validation, testing, and optimization.",
          ],
          technologies: [
            "Angular",
            "ASP.NET Core",
            "SQL Server",
            "Blockchain",
            "QR Codes",
            "REST APIs",
          ],
        },
      ],
    },
  ] satisfies Experience[],
  education: [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Rohini College of Engineering & Technologies",
      period: "2014 – 2018",
    },
    {
      degree: "Higher Secondary Education",
      institution: "Government Higher Secondary School, Kottaram",
      period: "2012 – 2014",
    },
    {
      degree: "Secondary Education",
      institution: "Government Higher Secondary School, Kottaram",
      period: "2011 – 2012",
    },
  ] satisfies Education[],
} as const;

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Creative", href: "#creative" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;
