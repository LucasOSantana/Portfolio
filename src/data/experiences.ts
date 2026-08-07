export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl: string;
  period: string;
  description: string;
  highlights?: string;
  current?: boolean;
}

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Full-Stack Software Engineer",
    company: "Qyon Technologies",
    companyUrl: "https://qyon.com/br/",
    period: "July 2025 - July 2026",
    description: "Designing and deploying high-performance APIs, containerized services on Amazon ECS, and event-driven architectures. Focusing on engineering resilient systems that optimize corporate data workflows.",
    highlights: "Designed and implemented a modular, event-driven microservices ecosystem utilizing RabbitMQ to handle complex enterprise tax data processing. Created a modular parametrization tool for tax data processing, enabling dynamic configuration of business rules and workflows.",
    current: true
  },
  {
    id: "exp-2",
    role: "Full-Stack Developer",
    company: "Outserv",
    companyUrl: "https://outserv.com.br/",
    period: "Sep 2022 - July 2025",
    description: "Built clean, maintainable personalized products using PHP (Laravel and Codeigniter), integrating complex systems like TOTVS' RM and Protheus via REST, SOAP, and GraphQL APIs.",
    highlights: "Shipped and maintained core full-stack features for global market leaders. Actively contributed to the tech community by delivering university lectures on backend architecture and competing in algorithmic challenges. Refactored legacy codebases across 20+ legacy applications to enhance security, readability, and performance",
    current: false
  }
];
