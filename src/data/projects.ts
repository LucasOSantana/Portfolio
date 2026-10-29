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
    id: "proj-7",
    title: "Orderly",
    description: "A full stack order platform with asynchronous processing. REST API built with Spring Boot and Java 21, PostgreSQL with Flyway migrations, RabbitMQ with a transactional outbox, retries and dead-letter queues, and an Angular frontend that tracks order status automatically. Everything runs with a single docker compose.",
    githubUrl: "https://github.com/LucasOSantana/order-platform",
    image: "/images/projects/Orderly.png",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "RabbitMQ", "Angular", "Docker"],
    featured: true,
    platforms: "Full Stack · Event-Driven",
    isNew: true
  },
  {
    id: "proj-8",
    title: "Easy Paper",
    description: "A lightweight, local-first wallpaper selector for Windows inspired by Hyprland/Quickshell setups. Presents wallpapers in a 3D carousel summoned by a global hotkey, with per-monitor support and cached thumbnails. Built with Tauri, Rust, and React.",
    githubUrl: "https://github.com/LucasOSantana/easy-paper",
    image: "/images/projects/EasyPaper.png",
    technologies: ["Tauri", "Rust", "React", "TypeScript"],
    featured: true,
    platforms: "Desktop · Tauri",
    isNew: true
  },
  {
    id: "proj-6",
    title: "Ledger Payment Engine",
    description: "A fast, reactive, and audit-safe double-entry ledger engine for financial transactions. Built with Spring WebFlux, R2DBC, PostgreSQL, and Redis to process consistent, idempotent transactions under heavy loads.",
    githubUrl: "https://github.com/LucasOSantana/reactive-ledger-core",
    technologies: ["Java", "Spring Boot", "Spring WebFlux", "R2DBC", "PostgreSQL", "Redis"],
    featured: true,
    platforms: "Backend · Financial",
    isNew: false
  },
  {
    id: "proj-1",
    title: "Multi-engine container CLI",
    description: "A cross-platform Terminal User Interface (TUI) for monitoring and managing multiple container engines (Docker and Podman) in real time. Built in Go using the Bubble Tea and Lip Gloss libraries.",
    githubUrl: "https://github.com/LucasOSantana/multiengine-container-log-cli",
    image: "/images/projects/ContainerCLI.png",
    technologies: ["Go", "Docker", "Podman", "Bubble Tea", "Lip Gloss"],
    featured: true,
    platforms: "CLI · TUI",
    isNew: false
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
