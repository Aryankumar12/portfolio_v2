 interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveDemoUrl: string;
}

export const projectData: Project[] = [
  {
    title: "DevPulse - Agile Project Management Tool",
    description: "A real-time Kanban board and project management platform featuring drag-and-drop tasks, collaborative workspaces, and sprint analytics dashboards.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Socket.io"],
    githubUrl: "https://github.com/yourusername/devpulse",
    liveDemoUrl: "https://devpulse-demo.vercel.app"
  },
  {
    title: "CryptoTrackr - Live Web3 Dashboard",
    description: "A cryptocurrency tracking application that monitors live coin prices, visualizes market trends with interactive charts, and manages a mock user portfolio.",
    techStack: ["React", "TypeScript", "Chart.js", "Tailwind CSS", "CoinGecko API", "Firebase Authentication"],
    githubUrl: "https://github.com/yourusername/cryptotrackr",
    liveDemoUrl: "https://cryptotrackr-live.netlify.app"
  },
  {
    title: "ShopSphere - Headless E-Commerce Platform",
    description: "A lightning-fast e-commerce store with a fully integrated Stripe payment gateway, instant search, dynamic cart state management, and a robust admin inventory panel.",
    techStack: ["Next.js", "TypeScript", "Zustand", "Stripe API", "Sanity CMS", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/shopsphere",
    liveDemoUrl: "https://shopsphere-store.vercel.app"
  },
  {
    title: "FitFlow - AI Workout Planner",
    description: "An intelligent fitness app that generates personalized workout routines using AI, tracks daily caloric intake, and visualizes weekly progress metrics.",
    techStack: ["React Native", "TypeScript", "Node.js", "Express", "MongoDB", "OpenAI API"],
    githubUrl: "https://github.com/yourusername/fitflow",
    liveDemoUrl: "https://fitflow-app.com"
  }
];