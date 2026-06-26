export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveDemoUrl: string;
  image: string; // ✅ Added the image property type
}

export const projectData: Project[] = [
  {
    title: "DevPulse - Agile Project Management Tool",
    description: "A real-time Kanban board and project management platform featuring drag-and-drop tasks, collaborative workspaces, and sprint analytics dashboards.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Socket.io"],
    githubUrl: "https://github.com/yourusername/devpulse",
    liveDemoUrl: "https://devpulse-demo.vercel.app",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80" // Modern tech abstract/dashboard vibe
  },
  {
    title: "CryptoTrackr - Live Web3 Dashboard",
    description: "A cryptocurrency tracking application that monitors live coin prices, visualizes market trends with interactive charts, and manages a mock user portfolio.",
    techStack: ["React", "TypeScript", "Chart.js", "Tailwind CSS", "CoinGecko API", "Firebase Authentication"],
    githubUrl: "https://github.com/yourusername/cryptotrackr",
    liveDemoUrl: "https://cryptotrackr-live.netlify.app",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=800&q=80" // Clean crypto/chart vibe
  },
  {
    title: "ShopSphere - Headless E-Commerce Platform",
    description: "A lightning-fast e-commerce store with a fully integrated Stripe payment gateway, instant search, dynamic cart state management, and a robust admin inventory panel.",
    techStack: ["Next.js", "TypeScript", "Zustand", "Stripe API", "Sanity CMS", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/shopsphere",
    liveDemoUrl: "https://shopsphere-store.vercel.app",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" // Web development / store workspace vibe
  },
  {
    title: "FitFlow - AI Workout Planner",
    description: "An intelligent fitness app that generates personalized workout routines using AI, tracks daily caloric intake, and visualizes weekly progress metrics.",
    techStack: ["React Native", "TypeScript", "Node.js", "Express", "MongoDB", "OpenAI API"],
    githubUrl: "https://github.com/yourusername/fitflow",
    liveDemoUrl: "https://fitflow-app.com",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80" // Minimalist fitness/tracking vibe
  }
];