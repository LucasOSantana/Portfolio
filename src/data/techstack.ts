export interface TechCategory {
  title: string;
  items: string[];
}

export const techStackData: TechCategory[] = [
  {
    title: "Languages",
    items: ["Java", "PHP", "Python", "JavaScript / TypeScript"]
  },
  {
    title: "Frameworks",
    items: ["Spring Boot", "Laravel", "CodeIgniter", "Next.js", "React", "Vue.js"]
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS (Lambda, ECS, S3, CloudWatch)", "Docker"]
  },
  {
    title: "Messaging & APIs",
    items: ["RabbitMQ", "RESTful", "SOAP", "GraphQL"]
  },
  {
    title: "Databases",
    items: ["SQL Server", "MySQL", "PostgreSQL", "Oracle", "Redis"]
  }
];
