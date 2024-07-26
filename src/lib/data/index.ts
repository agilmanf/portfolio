import { About, Contact, Nav, Skills } from "src/types";

export const navigations: Nav[] = [
  {
    title: "Intro",
    href: "#intro",
    aos: {
      "data-aos-delay": 0,
    },
  },
  {
    title: "About",
    href: "#about",
    aos: {
      "data-aos-delay": 150,
    },
  },
  {
    title: "My Projects",
    href: "#projects",
    aos: {
      "data-aos-delay": 300,
    },
  },
  {
    title: "Contact",
    href: "#contact",
    aos: {
      "data-aos-delay": 450,
    },
  },
];

export const contacts: Contact[] = [
  {
    title: "Github",
    icon: "fi-brands-github",
    href: "https://github.com/agilmanf",
    aos: {
      "data-aos": "fade-right",
      "data-aos-offset": "-300",
    },
  },
  {
    title: "Linkedin",
    icon: "fi-brands-linkedin",
    href: "https://www.linkedin.com/in/agilmanf/",
    aos: {
      "data-aos": "fade-right",
      "data-aos-delay": "150",
      "data-aos-offset": "-300",
    },
  },
  {
    title: "Email",
    icon: "fi-ss-circle-envelope",
    href: "mailto:agilmanf@gmail.com",
    aos: {
      "data-aos": "fade-right",
      "data-aos-delay": "450",
      "data-aos-offset": "-300",
    },
  },
];

export const abouts: About[] = [
  {
    title: "Curious",
    description:
      "Many things excite my interest, and I'm constantly eager to learn new technology.",
    icon: "fi-ss-interrogation",
    aos: {
      "data-aos": "flip-right",
      "data-aos-delay": "0",
    },
  },
  {
    title: "Fast Learner",
    description: "I'm a self-taught person who picks things up quickly.",
    icon: "fi-ss-bolt",
    aos: {
      "data-aos": "flip-right",
      "data-aos-delay": "150",
    },
  },
  {
    title: "Problem Solver",
    description:
      "Able to identify issues, track down errors, and resolve them.",
    icon: "fi-ss-bug-slash",
    aos: {
      "data-aos": "flip-right",
      "data-aos-delay": "300",
    },
  },
  {
    title: "Time Controller",
    description:
      "I can plan my projects and manage my time well enough to do them before the deadline.",
    icon: "fi-ss-calendar-clock",
    aos: {
      "data-aos": "flip-right",
      "data-aos-delay": "450",
    },
  },
];

export const skills: Skills = {
  frontend: [
    "Typescript",
    "React",
    "Next.js",
    "Remix",
    "Vue",
    "Nuxt",
    "Tailwind",
    "Chakra UI",
    "shadcn/ui",
    "Flutter",
  ],
  backend: ["Node.js", "Golang", "PostgreSQL", "MongoDB", "GraphQL", "Redis"],
  tools: ["VS Code", "Figma", "Postman", "DBeaver"],
  others: [
    "Linux",
    "Git",
    "Docker",
    "Monorepo",
    "Cloudflare",
    "Midtrans",
    "VPS",
    "AWS S3, EC2, RDS",
  ],
};
