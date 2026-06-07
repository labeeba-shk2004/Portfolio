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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  warehouse,
  n8n,
  tripguide,
  threejs,
  github,
  resume,
  Gmail,
  linkedin,
} from "../assets";

export const navLinks = [
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
  {
    id: "resume",
    title: "Resume",
    link: resume,
  },
];

const services = [
  {
    title: "Python Developer",
    icon: web,
  },
  {
    title: "AI/ML Engineer",
    icon: mobile,
  },
  {
    title: "Data Analyst",
    icon: backend,
  },
  {
    title: "Software Engineer",
    icon: creator,
  },
];

const technologies = [
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Warehouse and Analytics Framework",
    description:
      "Built an end-to-end Data Warehouse using SQL Server and Medallion Architecture (Bronze, Silver, Gold) to integrate ERP and CRM data. Developed ETL pipelines, star schema models, and analytical reports to generate actionable business insight ",
    tags: [
      {
        name: "SQL Server",
        color: "blue-text-gradient",
      },
      {
        name: "ETL Pipelines",
        color: "green-text-gradient",
      },
      {
        name: "T-SQL",
        color: "pink-text-gradient",
      },
    ],
    image: warehouse,
    source_code_link: "https://github.com/labeeba-shk2004/Data-Warehouse-and-Analytics-Framework",
  },
  {
    name: "AI Powered Supply Chain Data Analysis Pipeline ",
    description:
      "Built an AI-powered supply chain analytics pipeline using n8n, Supabase, and Quadratic AI to automate data extraction, storage, and analysis. Enabled real-time KPI tracking and data-driven decision-making through AI-assisted dashboards and visualizations.",
    tags: [
      {
        name: "n8n",
        color: "blue-text-gradient",
      },
      {
        name: "Quadratic AI",
        color: "green-text-gradient",
      },
      {
        name: "Supabase",
        color: "pink-text-gradient",
      },
    ],
    image: n8n,
    source_code_link: "https://github.com/labeeba-shk2004/AI-Based-Supply-Chain-Automation",
  },
  {
    name: "Employee Management System",
    description:
      "Built a comprehensive Employee Management System with secure admin, attendance tracking, leave management, payroll processing, and departmental operations. Designed a responsive UI and dashboards to enhance organizational productivity.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "SQLite",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/labeeba-shk2004/Employee-Management-System",
  },
];

export const socialLinks = [
  {
    name: "Gmail",
    icon: Gmail,
    link: "mailto:your-labbiskh0417@gmail.com",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/labeeba-shk2004",
  },
  {
    name: "LinkedIn",
    icon: linkedin,
    link: "https://linkedin.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };