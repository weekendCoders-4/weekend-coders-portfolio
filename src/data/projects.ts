export type ProjectPreviewType = "dashboard" | "ecommerce" | "automation" | "testing";

export interface Project {
  id: string;
  number: string;
  name: string;
  description: string;
  tags: string[];
  gradient: string;
  preview: ProjectPreviewType;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "dummy-01",
    number: "01",
    name: "Project Alpha",
    description:
      "Placeholder full-stack web app — client dashboard with auth, data tables, and reporting.",
    tags: ["React", "FastAPI", "PostgreSQL"],
    gradient: "from-cyan-500/25 via-teal-500/10 to-transparent",
    preview: "dashboard",
    featured: true,
  },
  {
    id: "dummy-02",
    number: "02",
    name: "Sample Storefront",
    description:
      "Dummy e-commerce prototype with product listings, cart flow, and checkout UI.",
    tags: ["React", "TypeScript", "Tailwind"],
    gradient: "from-emerald-500/20 via-green-500/10 to-transparent",
    preview: "ecommerce",
  },
  {
    id: "dummy-03",
    number: "03",
    name: "AutoFlow Demo",
    description:
      "Placeholder automation — scheduled jobs, email triggers, and spreadsheet exports.",
    tags: ["Python", "Automation", "Docker"],
    gradient: "from-purple-500/20 via-violet-500/10 to-transparent",
    preview: "automation",
  },
  {
    id: "dummy-04",
    number: "04",
    name: "TestSuite Prototype",
    description:
      "Sample test automation framework with CI integration and HTML reporting.",
    tags: ["Playwright", "Python", "CI/CD"],
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    preview: "testing",
  },
];
