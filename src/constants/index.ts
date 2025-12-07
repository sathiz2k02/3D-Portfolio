import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import imaggarLogo from "../assets/imaggar_logo.png";
import thinklogo from "../assets/think_logo.png";
import ecommerce from "../assets/e-commerce.jpeg";
import portfolio from "../assets/3d.jpeg";
import musicity from "../assets/Musicity.jpeg";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  
  threejs,
} from "../assets";



export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Front-end Developer",
    icon: web,
  },
  {
    title: "React JS Developer",
    icon: mobile,
  },
  {
    title: "UI Developer",
    icon: creator,
  },
  {
    title: "JavaScript Enthusiast",
    icon: backend,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "TypeScript (Learning)",
    icon: typescript,
  },
  {
    name: "Node JS (Basics)",
    icon: nodejs,
  },
];

const experiences: TExperience[] = [
  {
    title: "Front-end Developer Intern",
    companyName: "Imaggar Technologies",
    icon: imaggarLogo,
    iconBg: "#ffffffff",
    date: "6-month Internship",
    points: [
      "Developed and maintained responsive web pages using HTML, CSS, JavaScript, and React.",
      "Collaborated with the team to convert UI/UX designs into functional web interfaces.",
      "Fixed UI bugs and improved user experience across different screen sizes.",
      "Learned industry standards, Git workflow, and worked in an agile environment.",
    ],
  },
  
  {
    title: "Self-taught Front-end Developer",
    companyName: "Personal Projects",
    icon: thinklogo,
    iconBg: "#fff700ff",
    date: "Ongoing",
    points: [
      "Created personal projects like Musicity, a Spotify-style music web app.",
      "Practiced building reusable components and clean UI layouts.",
      "Explored 3D experiences on the web using React Three Fiber and Three.js.",
      "Continuously learning new tools, libraries, and front-end best practices.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Sathish quickly understood our requirements and delivered clean, responsive UI screens on time.",
    name: "Abimani",
    designation: "Team Lead",
    company: "Imaggar Technologies",
    image: "https://randomuser.me/api/portraits/men/11.jp ",
  },
  {
    testimonial:
      "He is eager to learn, takes feedback positively, and always tries to improve the user experience.",
    name: "Dinesh",
    designation: "Senior Developer",
    company: "Imaggar Technologies, Thanjavur",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  
];

const projects: TProject[] = [
  {
    name: "Musicity - Music Web App",
    description:
      "A Spotify-style music website that allows users to play/pause songs, choose their favourite tracks, and search songs across multiple languages with a clean and modern UI.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "javascript", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: musicity, // replace with your real screenshot
    sourceCodeLink: "https://github.com/sathiz2k02/musicity",
  },

  {
    name: "E-commerce UI",
    description:
      "A responsive e-commerce web interface where users can browse products, view details, and manage their cart. Built with modern UI practices and clean component architecture.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
      { name: "responsive", color: "pink-text-gradient" },
    ],
    image: ecommerce, // replace with your real screenshot
    sourceCodeLink: "https://github.com/sathiz2k02/ecommerce-ui",
  },

  {
    name: "3D Portfolio Website",
    description:
      "An interactive 3D developer portfolio built using React Three Fiber and Three.js, showcasing skills, experience, and projects with smooth animations and visually engaging UI.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "threejs", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: portfolio, // replace with your real screenshot
    sourceCodeLink: "https://github.com/sathiz2k02/3d-portfolio",
  },
];


export { services, technologies, experiences, testimonials, projects };
