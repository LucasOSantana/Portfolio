export interface Project {
  id: string;
  title: string;
  description: string;
  url?: string;
  githubUrl?: string;
  image?: string;
  technologies: string[];
  featured: boolean;
  platforms?: string;
  isNew?: boolean;
}

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Multi-engine container CLI",
    description: "A cross-platform Terminal User Interface (TUI) for monitoring and managing multiple container engines (Docker and Podman) in real time. Built in Go using the Bubble Tea and Lip Gloss libraries.",
    githubUrl: "https://github.com/LucasOSantana/multiengine-container-log-cli",
    image: "/images/projects/ContainerCLI.png",
    technologies: ["Go", "Docker", "Podman", "Bubble Tea", "Lip Gloss"],
    featured: true,
    platforms: "CLI · TUI",
    isNew: true
  },
  {
    id: "proj-2",
    title: "SwissKnife",
    description: "A desktop utility app built with Tauri, React, TypeScript, and Tailwind CSS. Aggregates converters, encoders/decoders, formatters, and generators in a modern, responsive dashboard.",
    githubUrl: "https://github.com/LucasOSantana/SwissKnife",
    image: "/images/projects/SwissKnife.png",
    technologies: ["Tauri", "React", "TypeScript", "Tailwind CSS", "Rust"],
    featured: true,
    platforms: "Desktop · Tauri",
    isNew: false
  },
  {
    id: "proj-3",
    title: "Location Sharing API",
    description: "A scalable, real-time location sharing service built with Spring Boot, RabbitMQ, and WebSockets. Mimics the event-driven live tracking feature found in modern ride-sharing applications.",
    githubUrl: "https://github.com/LucasOSantana/location-sharing-api",
    technologies: ["Java", "Spring Boot", "RabbitMQ", "WebSockets", "Docker"],
    featured: true,
    platforms: "Backend · Distributed",
    isNew: false
  },
  {
    id: "proj-4",
    title: "life-simulation-smooth-life",
    description: "A Python implementation of SmoothLife using Pygame and NumPy. Models continuous, fluid-like cellular automata structures using concentric circular kernels and state density transition functions.",
    githubUrl: "https://github.com/LucasOSantana/life-simulation-smooth-life",
    technologies: ["Python", "Pygame", "NumPy"],
    featured: false
  },
  {
    id: "proj-5",
    title: "life-simulation-conway",
    description: "A clean implementation of Conway's Game of Life in Python using the Pygame library, showcasing traditional discrete cellular automata rules and real-time board interaction.",
    githubUrl: "https://github.com/LucasOSantana/life-simulation-conway",
    technologies: ["Python", "Pygame"],
    featured: false
  }
];
