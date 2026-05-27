import type { Project } from "./portfolio";

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Lumen Analytics",
    tagline: "Real-time SaaS dashboard with live charting & dark mode.",
    year: "2025",
    stack: ["React.js", "HTML", "Css", "React Router", "Tailwind"],
    bg: "linear-gradient(135deg, #F4F1EC 0%, #E8E0D4 100%)",
    image: "/dresswithme.jpg",
    websiteUrl: "https://dresswithmee.netlify.app/",
  },
  {
    id: "2",
    title: "Atelier Commerce",
    tagline: "Editorial e-commerce front-end with Stripe checkout.",
    year: "2024",
    stack: ["React", "Tailwind", "Stripe", "Framer"],
    bg: "linear-gradient(135deg, #FBFBFA 0%, #F0EBE2 100%)",
    image: "/Solar.png",
    websiteUrl: "",
  },
  {
    id: "3",
    title: "Go Cart",
    tagline: "Minimal weather PWA with geolocation & offline mode.",
    year: "2024",
    stack: ["React", "PWA", "Tailwind", "OpenWeather"],
    bg: "linear-gradient(135deg, #E8E6E1 0%, #C9C5BD 100%)",
    image: "/GoCart.png",
    websiteUrl: "",
  },
  {
    id: "4",
    title: "Solar Energy",
    tagline:
      "Switch to Solar Energy Today save money and help the environment.",
    year: "2023",
    stack: ["React", "HTML", "Css", "React Router"],
    bg: "linear-gradient(135deg, #F4F1EC 0%, #DCD5C7 100%)",
    image: "/Solar.png",
    websiteUrl: "https://solarenergyco.netlify.app/",
  },
];
