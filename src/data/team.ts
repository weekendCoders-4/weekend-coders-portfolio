export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  stack: string[];
  github: string;
  linkedin: string;
  initials: string;
  accent: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "shailesh",
    name: "Shailesh Rajesh M",
    role: "Web, Mobile & Full Stack",
    bio: "Builds across web and mobile without treating either as an afterthought. If it has a screen, he'll ship it.",
    stack: [
      "React",
      "React Native",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "Node.js",
    ],
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    initials: "SR",
    accent: "from-cyan-500 to-teal-400",
  },
  {
    id: "deekshith",
    name: "Deekshith Poojary",
    role: "SDET",
    bio: "Automation-first mindset with a knack for test frameworks. If it can be automated, it probably already is.",
    stack: [
      "Playwright",
      "Selenium",
      "Python",
      "CI/CD",
      "Robot Framework",
      "Pytest",
    ],
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    initials: "DK",
    accent: "from-amber-500 to-orange-400",
  },
  {
    id: "mahesh",
    name: "Mahesh Rudraraju",
    role: "Backend Developer",
    bio: "The one who makes sure data actually gets where it needs to go. Strong opinions about API design and stronger ones about error handling.",
    stack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "Redis",
      "RabbitMQ",
      "AWS",
      "GCP",
      "Azure",
    ],
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    initials: "MH",
    accent: "from-emerald-500 to-green-400",
  },
  {
    id: "harshith",
    name: "Harshith",
    role: "SDET",
    bio: "Finds bugs for fun and breaks things before users do. Believes untested code is just a suggestion.",
    stack: ["Selenium", "Python", "Robot Framework"],
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    initials: "HA",
    accent: "from-purple-500 to-violet-400",
  },
];
