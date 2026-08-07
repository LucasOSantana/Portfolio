export interface NowFocus {
  category: string;
  items: string[];
}

export interface NowData {
  lastUpdated: string;
  location: string;
  currentFoci: NowFocus[];
  currentlyReading: {
    title: string;
    author: string;
    link?: string;
  }[];
}

export const nowData: NowData = {
  lastUpdated: "August 2026",
  location: "São Paulo, Brazil",
  currentFoci: [
    {
      category: "At Work",
      items: [
        "Developing modular event-driven microservices to handle corporate accounting and tax data processing.",
        "Optimizing serverless execution times and resources on AWS Lambda.",
        "Refactoring legacy structures to modern and clean architectures."
      ]
    },
    {
      category: "Personal Focuses",
      items: [
        "Solving algorithmic challenges to keep problem-solving skills sharp.",
        "Exploring AWS CloudFormation and infrastructure-as-code tools.",
        "Exploring Go programming language and its ecosystem for backend development."
      ]
    },
    {
      category: "Life & Health",
      items: [
        "Loving Motorsports since ever.",
        "Practicing weightlifting to maintain physical fitness.",
        "Deepening knowledge in piano playing.",
        "Learning photography techniques to create art."
      ]
    }
  ],
  currentlyReading: [
    {
      title: "Designing Data-Intensive Applications",
      author: "Martin Kleppmann",
      link: "https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/"
    },
    {
      title: "Clean Code",
      author: "Robert C. Martin"
    }
  ]
};
