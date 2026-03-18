// ========== PERSONAL INFO ==========
export const personalInfo = {
  name: "smrutiranjan pradhan",
  aka: "Developer",
  location: "Bhubaneswar,India",
  bio: "I'm Bickey,Full-Stack Engineer with hands-on experience building scalable web applications using React, Node.js, and TypeScript. Skilled in secure RESTful API design, relational and NoSQL database optimisation, and end-to-end delivery of production platforms. Proven ability to ship AI-driven tools, real estate systems, and healthcare automation with a focus on performance, maintainability, and clean architecture.",
  email: "bickypradhan1@gmail.com",
  github: "https://github.com/bickeypradhan",
  linkedin: "https://www.linkedin.com/in/smrutiranjan-pradhan-/",
  discord: "bicky",
  roles: [
    "Full Stack Developer",
    "Tech Enthusiast",
    "Creative Coder",
    "Web Developer"
  ]
};

// ========== ABOUT PAGE TAGS ==========
export const aboutTags = [
  "Student",
  "Passion for Tech",
  "Learner",
  "Web Developer",
  "Creative Thinker"
];

// ========== TIMELINE ==========
export const timeline = [
 
  { year: "2023", text: "Discovered electronics, tech, coding, and web development" },
  { year: "2024", text: "Started building full-stack applications" },
  { year: "2025", text: "Expanding skills in modern frameworks." },
  { year: "2026", text: "Now leading the field with confidence" }
];

// ========== PROJECTS ==========
export const projects = [
  {
    id: 1,
    title: "Agrogurdian AI",
    description: "AgroGuardian AI is a multi-modal smart agriculture assistant combining leaf disease detection,soil-sensor intelligence, weather-based alerts, and a context-aware chatbot.",
    techs: ["NextJS", "React", "TypeScript", "TailwindCSS",],
    category: "web",
    github: "https://github.com/bickeypradhan/agroguardian-ai",
    preview: "/assets/proyek/biki.png"
  },
  {
    id: 2,
    title: "UnderwriterAI – Insurance RAG Intelligence Platform",
    description: "• Built AI-powered underwriting assistant using LangChain and GPT-4o, processing 500+ insurance documents per day. .Designed RAG workflows enabling accurate policy analysis, cutting manual underwriting review time by 45%.",
    techs: ["NextJS", "React", "TypeScript", "TailwindCSS", "MongoDB"],
    category: "web",
    github: "https://github.com/bickeypradhan/INSURE-GUARD?tab=readme-ov-file",
    preview: "/assets/proyek/2.png"
  }
];

// ========== SKILLS ==========
// export const skills = [
//   { name: "React", icon: "code" },
//   { name: "Node.js", icon: "server" },
//   { name: "MongoDB", icon: "database" },
//   { name: "Tailwind CSS", icon: "palette" },
//   { name: "TypeScript", icon: "type" },
//   { name: "Git & GitHub", icon: "git" },
//   { name: "Next.js", icon: "link" },
//   { name: "Python", icon: "link" }
// ];

export const skills = [
  { name: "JavaScript", icon: "code" },
  { name: "TypeScript", icon: "type" },
  { name: "Python", icon: "code" },
  { name: "C++", icon: "code" },
  { name: "SQL", icon: "database" },

  { name: "React.js", icon: "code" },
  { name: "Next.js", icon: "link" },
  { name: "Redux", icon: "layers" },
  { name: "HTML5", icon: "code" },
  { name: "CSS3", icon: "palette" },
  { name: "Tailwind CSS", icon: "palette" },

  { name: "Node.js", icon: "server" },
  { name: "Express.js", icon: "server" },
  { name: "ASP.NET", icon: "server" },
  { name: "RESTful APIs", icon: "link" },
  { name: "JWT Authentication", icon: "shield" },
  { name: "API Architecture", icon: "layers" },

  { name: "MongoDB", icon: "database" },
  { name: "MySQL", icon: "database" },
  { name: "Database Design", icon: "database" },
  { name: "Query Optimisation", icon: "database" },

  { name: "Git", icon: "git" },
  { name: "Docker (Basics)", icon: "box" },
  { name: "CI/CD", icon: "settings" },
  { name: "GitHub Actions", icon: "git" }
]

// ========== TERMINAL COMMANDS ==========
export const terminalCommands = {
  help: `Available commands:
  about      - About me
  skills     - My skills
  projects   - My projects
  contact    - Contact info
  socials    - Social links
  clear      - Clear terminal
  exit       - Close terminal`,
  about: `
  Name: ${personalInfo.name}
  Location: ${personalInfo.location}
  Bio: ${personalInfo.bio}`,
  skills: `
  My Skills:
  → React, Node.js, MongoDB,Angular.js,Express.js,Node.js,Python
  → TypeScript, TailwindCSS
  → Next.js, Python
  → Git & GitHub`,
  projects: `
  My Projects:
  1. Agrogurdian AI
  2. InsureGuard`,
  contact: `
  Email: ${personalInfo.email}
  GitHub: ${personalInfo.github}
  LinkedIn: ${personalInfo.linkedin}
  Discord: ${personalInfo.discord}`,
  socials: `
  GitHub:   ${personalInfo.github}
  LinkedIn: ${personalInfo.linkedin}
  // Discord:  ${personalInfo.discord}`
};
