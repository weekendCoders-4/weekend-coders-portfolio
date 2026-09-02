import type { LucideIcon } from "lucide-react";
import {
  Globe,
  Layout,
  Workflow,
  Server,
  Sparkles,
  Code2,
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
}

export const services: Service[] = [
  {
    id: "web-apps",
    title: "Web Applications",
    description:
      "Full-stack applications built around real business requirements — not slide decks.",
    icon: Layout,
    tags: ["React", "TypeScript", "PostgreSQL", "FastAPI"],
  },
  {
    id: "websites",
    title: "Websites",
    description:
      "Fast, responsive, modern websites for businesses, products, and personal brands.",
    icon: Globe,
    tags: ["React", "Tailwind", "SEO", "Vite"],
  },
  {
    id: "automation",
    title: "Automation",
    description:
      "Automate repetitive workflows, testing, reporting, and internal processes.",
    icon: Workflow,
    tags: ["Python", "Playwright", "Selenium", "Docker"],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    description:
      "Scalable APIs, integrations, and backend systems that actually hold up in production.",
    icon: Server,
    tags: ["FastAPI", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    id: "ai",
    title: "AI-Powered Tools",
    description:
      "AI assistants, intelligent workflows, and AI-enabled applications that solve real problems.",
    icon: Sparkles,
    tags: ["OpenAI", "Python", "FastAPI", "AI"],
  },
  {
    id: "custom",
    title: "Custom Software",
    description:
      "If it involves code, we'll figure it out. // probably should have used git",
    icon: Code2,
    tags: ["Python", "JavaScript", "React", "AWS"],
  },
];
