export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  initials: string;
  title: string;
  location: string;
  tagline: string;
  yearsOfExperience: number;
  introText: string;
  skillsDescription: string;
  skillsList: { title: string; description: string }[];
  exploring: string[];
  socialLinks: SocialLink[];
  footerText: string;
}

export const personalInfo: PersonalInfo = {
  name: "Lucas Sant'Ana",
  firstName: "Lucas",
  lastName: "Sant'Ana",
  initials: "LS",
  title: "Backend Software Engineer",
  location: "São Paulo, Brazil",
  tagline: "Full-Stack Software Engineer specialized in backend - building high-performance APIs, scalable distributed architectures, and automated cloud workflows. Strong knowledge in Java (Spring Boot), PHP (Laravel), and Python.",
  yearsOfExperience: 4,
  introText: "From architecting asynchronous microservices that process complex corporate data to deploying containerized cloud applications, I bridge the gap between business requirements and technical execution.",
  skillsDescription: "I thrive in dynamic, collaborative environments where code quality, scalable system design, and continuous innovation matter.",
  skillsList: [
    {
      title: "Distributed System Architecture",
      description: "Engineering scalable, asynchronous microservice ecosystems utilizing RabbitMQ event queues and robust RESTful API design to eliminate processing bottlenecks."
    },
    {
      title: "Cloud & Serverless Infrastructure",
      description: "Designing and deploying containerized and serverless applications utilizing AWS Lambda and Amazon ECS to optimize resource utilization and performance under high-volume workloads."
    },
    {
      title: "Workflow Automation",
      description: "Developing custom Python automation scripts to eliminate manual bottlenecks, successfully reclaiming critical operational hours for corporate departments."
    },
    {
      title: "Full-Stack Features & Integrations",
      description: "Building clean, maintainable web features using Laravel and modern front-end frameworks like Next.js and Vue.js, integrated across complex REST, SOAP, and GraphQL APIs."
    }
  ],
  exploring: ["Spring Boot", ".NET", "Go", "Algorithmic Challenges"],
  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/lucasolivsantana/",
      icon: "linkedin"
    },
    {
      name: "GitHub",
      url: "https://github.com/LucasOSantana",
      icon: "github"
    }
  ],
  footerText: "Lucas — Backend Software Engineer"
};
