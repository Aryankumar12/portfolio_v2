export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveDemoUrl: string;
  image: string;
}

export const projectData: Project[] = [
  {
    title: "Remote Interview Platform",
    description: "A secure interview platform for candidates and interviewers with a built-in code editor for live coding sessions.",
    techStack: ["React", "Node.js", "WebSocket", "TypeScript"],
    githubUrl: "https://github.com/Aryankumar12/remote-interview-platform",
    liveDemoUrl: "https://remote-interview-platform-zeta.vercel.app/",
    image: "https://res.cloudinary.com/dzjjfucwz/image/upload/v1782734701/project_screenshot5_ybksir.png"
  },
  {
    title: "ScreenLink - Screen Recording App",
    description: "A secure screen recording web app with Google Auth, Firestore, and Cloudinary integration enabling instant shareable links and fast video delivery.",
    techStack: ["React", "Firebase", "Cloudinary", "Google Auth"],
    githubUrl: "https://github.com/Aryankumar12/Screenlink",
    liveDemoUrl: "https://screenlink-tau.vercel.app/",
    image: "https://res.cloudinary.com/dzjjfucwz/image/upload/v1782734702/project_screenshot6_p5psab.png"
  },
  {
    title: "ChatApp - Real Time Messaging",
    description: "A real-time chat application with secure authentication and instant messaging features.",
    techStack: ["React", "Node.js", "Socket.io", "Express", "MongoDB"],
    githubUrl: "https://github.com/Aryankumar12/chatapp_2",
    liveDemoUrl: "https://chatapp-2-bjly.onrender.com/login",
    image: "https://res.cloudinary.com/dzjjfucwz/image/upload/v1782734701/project_screenshot3_smrzvq.png"
  },
  {
    title: "Auth System",
    description: "A secure authentication system with login and registration functionality including JWT and session management.",
    techStack: ["Node.js", "Express", "JWT", "MongoDB"],
    githubUrl: "https://github.com/Aryankumar12/auth",
    liveDemoUrl: "https://auth-qxy8.onrender.com/login",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Growth Mantra",
    description: "A platform to track personal growth, goals, and achievements with progress visualization.",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    githubUrl: "https://github.com/Aryankumar12/growth_mantra",
    liveDemoUrl: "https://growth-mantra-j32c.vercel.app/",
    image: "https://res.cloudinary.com/dzjjfucwz/image/upload/v1782734702/project_screenshot2_deq9nv.png"
  },
  {
    title: "Portfolio V1",
    description: "My first personal portfolio website showcasing projects and skills — the foundation that led to this version.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Aryankumar12/PORTFOLIO.IO",
    liveDemoUrl: "https://portfolio-two-henna-21.vercel.app/",
    image: "https://res.cloudinary.com/dzjjfucwz/image/upload/v1782734701/project_screenshot4_atat0x.png"
  },
];