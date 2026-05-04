import type { ReactNode } from "react";

export interface Project {
  title: string;
  tagline: string;
  year: string;
  stack: string[];
  bg: string;
  svg: ReactNode;
}

export interface Role {
  title: string;
  company: string;
  where: string;
  from: string;
  to: string;
  summary: string;
  keys: string[];
}

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const SKILLS_MARQUEE: string[] = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "JavaScript ES6+",
  "HTML5 / CSS3",
  "Sass",
  "Bootstrap",
  "Git / GitHub",
  "RESTful APIs",
  "SEO-friendly Code",
  "Agile / Scrum",
];

export const SKILL_GROUPS: { title: string; items: string[] }[] = [
  {
    title: "Foundations",
    items: ["HTML5", "CSS3 / Sass", "JavaScript", "TypeScript"],
  },
  {
    title: "Frameworks",
    items: ["React.js", "Next.js", "Webflow", "WordPress"],
  },
  {
    title: "Styling",
    items: ["Tailwind CSS", "Bootstrap", "CSS Grid", "Flexbox"],
  },
  {
    title: "Workflow",
    items: ["Git / GitHub", "NPM", "Agile / Scrum", "REST APIs"],
  },
];

export const ROLES: Role[] = [
  {
    title: "Front End Developer",
    company: "MZ Technologies",
    where: "Rawalpindi, Pakistan",
    from: "2024",
    to: "Now",
    summary:
      "Leading front-end architecture across the product surface. React and Next.js for new builds; Angular and jQuery on legacy systems. Built a reusable component layer that shaved sprint cycles and gave designers a closer-to-final canvas to iterate on.",
    keys: [
      "React · Next.js architecture",
      "Component-driven design system",
      "Cross-browser performance",
      "REST API integration",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Zweeler Ltd",
    where: "Williamson County, TX (Remote)",
    from: "2022",
    to: "2024",
    summary:
      "Took designs from Figma through to production. Built React components, owned the Bootstrap-based design layer, and worked inside a small Agile team to ship features end-to-end.",
    keys: [
      "Design-to-code conversion",
      "React + Bootstrap UI",
      "Semantic HTML5 / CSS3",
      "Git workflow",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Assent Compliance Inc",
    where: "Remote",
    from: "2021",
    to: "2022",
    summary:
      "First role out of university — hands-on building from scratch in HTML, CSS, JavaScript, AngularJS and early React. Where I learned the discipline of cross-browser, multi-platform front-end work.",
    keys: [
      "End-to-end project ownership",
      "Angular & early React",
      "Cross-browser QA",
      "Client-facing delivery",
    ],
  },
];

export const STATS: [string, string][] = [
  ["04+", "Years building for the web"],
  ["30+", "Production interfaces shipped"],
  ["React · Next", "Daily-driver stack"],
  ["MZ Tech", "Front End Developer, current"],
];

export const CONTACT = {
  email: "malikumairyaseen@gmail.com",
  linkedin: "linkedin.com/in/umairyaseenmalik",
  linkedinUrl: "https://linkedin.com/in/umairyaseenmalik",
  location: "Islamabad, Pakistan",
  phone: "0092-315-5777015",
};
