export interface TechItem {
  name: string;
  category: "language" | "framework" | "tool" | "cloud" | "testing" | "ai";
}

export const technologies: TechItem[] = [
  { name: "Python", category: "language" },
  { name: "JavaScript", category: "language" },
  { name: "TypeScript", category: "language" },
  { name: "React", category: "framework" },
  { name: "FastAPI", category: "framework" },
  { name: "Node.js", category: "framework" },
  { name: "PostgreSQL", category: "tool" },
  { name: "Docker", category: "tool" },
  { name: "Git", category: "tool" },
  { name: "GitHub", category: "tool" },
  { name: "Playwright", category: "testing" },
  { name: "Selenium", category: "testing" },
  { name: "Robot Framework", category: "testing" },
  { name: "OpenAI", category: "ai" },
  { name: "AWS", category: "cloud" },
];

export const stats = [
  { value: "04", label: "People" },
  { value: "∞", label: "Ideas" },
  { value: "100%", label: "Engineer-built" },
  { value: "24/7", label: "Coffee-powered" },
];

export const processSteps = [
  {
    step: "01",
    title: "Talk",
    description: "Tell us what you're trying to build. No sales pitch, just engineers listening.",
  },
  {
    step: "02",
    title: "Plan",
    description: "We figure out the architecture, scope, and timeline together.",
  },
  {
    step: "03",
    title: "Build",
    description: "We design, code, test, and iterate. works on my machine™ — then yours too.",
  },
  {
    step: "04",
    title: "Ship",
    description: "You get working software — not a PowerPoint presentation.",
  },
];

export const whyUsPoints = [
  {
    title: "No agency layers",
    description:
      "You talk directly to the people building your product. No account managers, no telephone game.",
  },
  {
    title: "Engineering first",
    description:
      "We care about architecture, maintainability, and testing. Code that won't haunt you in six months.",
  },
  {
    title: "Flexible",
    description:
      "Need a quick MVP? A complete application? An automation tool? Let's figure it out together.",
  },
  {
    title: "Small team, big output",
    description:
      "Four developers who actually work together can move surprisingly fast. 404: weekend not found.",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export const budgetOptions = [
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000+",
  "Not sure yet",
];

export const timelineOptions = [
  "ASAP (< 1 month)",
  "1–3 months",
  "3–6 months",
  "Flexible / exploring",
];
