import {
  About,
  Contact,
  Nav,
  Project,
  ProjectPlatform,
  ProjectType,
  Skills,
} from "./types";

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

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Melodico",
    subTitle: "Music Streaming WebApp",
    shortDescription:
      "Situs yang menyediakan layanan music streaming yang bisa diakses secara gratis.",
    description:
      "Final project bootcamp yang saya buat menggunakan teknologi MERN STACK, mulai dari design web, membangun backend untuk mengelola dan upload data, hingga coding frontend-nya. Adapun lagu & gambar yang telah di upload saya simpan di Amazon S3.",
    thumbnailUrl: "/images/projects/melodico/thumbnail.jpg",
    pictureUrl: "/images/projects/melodico/preview.webp",
    projectUrl: "https://melodico.netlify.app/",
    sourceUrl: "https://github.com/agilmanf/melodico",
    year: 2022,
    techs: ["React.js", "Bootstrap", "Express.js", "MongoDB", "Cloudinary"],
    platforms: new Set([ProjectPlatform.WEB]),
    type: ProjectType.DUMMY,
  },
  {
    id: "project-2",
    title: "Haku Library",
    subTitle: "Online Library",
    shortDescription:
      "Website membaca e-book dengan berbagai macam pilihan buku.",
    description:
      "Project pertama yang saya buat menggunakan React.js. Sebuah website perpustakaan online yang menyediakan layanan membaca buku digital (e-book) secara gratis. Dengan menggunakan API Google Books, buku-buku yang ada di Haku Library cukup lengkap dan update.",
    thumbnailUrl: "/images/projects/haku-library/thumbnail.jpg",
    pictureUrl: "/images/projects/haku-library/preview.webp",
    projectUrl: "https://haku-library.netlify.app/",
    sourceUrl: "https://github.com/agilmanf/haku-library",
    year: 2022,
    techs: ["React.js", "Bootstrap", "Google Books API"],
    platforms: new Set([ProjectPlatform.WEB]),
    type: ProjectType.DUMMY,
  },
  {
    id: "project-3",
    title: "Pasar Ikan",
    subTitle: "eCommerce",
    shortDescription:
      "Toko online yang menyediakan berbagai macam ikan dan seafood.",
    description:
      "Project pertama yang saya buat saat belajar Web Dev dan belajar cara menggunakan API. Dibuat hanya menggunakan Vanilla Javascipt & Bootstrap.",
    thumbnailUrl: "/images/projects/pasar-ikan/thumbnail.jpg",
    pictureUrl: "/images/projects/pasar-ikan/preview.webp",
    projectUrl: "https://pasar-ikan.netlify.app/",
    sourceUrl: "https://github.com/agilmanf/pasar-ikan",
    year: 2022,
    techs: ["React.js", "Bootstrap"],
    platforms: new Set([ProjectPlatform.WEB]),
    type: ProjectType.DUMMY,
  },
  {
    id: "project-4",
    title: "Game Gratis",
    subTitle: "Free Games Portal",
    shortDescription: "Kumpulan game gratis dan legal dari berbagai platform.",
    description:
      "Project yang saya buat untuk mempelajari teknologi Next.js dan Typescript. Didalamnya mengumpulkan informasi game - game gratis dan legal dari berbagai platform, seperti steam, epic games, ubisoft dan lain lain.",
    thumbnailUrl: "/images/projects/game-gratis/thumbnail.jpg",
    pictureUrl: "/images/projects/game-gratis/preview.webp",
    projectUrl: "https://gamegratis.vercel.app/",
    sourceUrl: "https://github.com/agilmanf/gamegratis",
    year: 2022,
    techs: ["Next.js", "Typescript", "Tailwind"],
    platforms: new Set([ProjectPlatform.WEB]),
    type: ProjectType.DUMMY,
  },
];
