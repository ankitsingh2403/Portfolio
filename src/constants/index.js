import {
  mobile,
  backend,
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
  codsoft,
  cdac,
  dcare,
  cpu,
  Dcare,
  expense,
  threejs,
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
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
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
  // {
  //   title: "React.js Developer",
  //   company_name: "Starbucks",
  //   icon: starbucks,
  //   iconBg: "#383E56",
  //   date: "March 2020 - April 2021",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Cybersecurity Intern",
    company_name: "CDAC-Noida",
    icon: cdac,
    iconBg: "#E6DEDD",
    date: "july 2024 - August 2024",
    points: [
      "Completed a virtual cybersecurity internship at CDAC Noida under the CyberGyan project.",
      "Gained hands-on experience in ethical hacking and penetration testing",
      "Learned about cybersecurity topics, including phishing attacks, keyloggers, and threat analysis.",
      "Enhanced skills in network security and defensive strategies to mitigate cyber threats.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "D-care Multispeciality Hospital Web",
    icon: dcare,
    iconBg: "#383E56",
    date: "Jan 2024- march 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "CodSoft",
    icon: codsoft,
    iconBg: "#E6DEDD",
    date: "August-2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Hospital Management System",
    description:
      "Dcare is a comprehensive healthcare management platform designed to streamline the patient care experience. It offers a user-friendly interface for both patients and administrators, enabling seamless appointment booking, efficient patient management, and secure access to medical records.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Dcare,
    source_code_link: "https://github.com/ankitsingh2403/Hospital-management-System",
  },
  {
    name: "Expense Management System",
    description:
      "The Expense Management System is a user-friendly platform designed to track and manage personal or organizational finances efficiently.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "pink-text-gradient",
      },
    ],
    image: expense,
    source_code_link: "https://github.com/ankitsingh2403/Expense-Management-System-main",
  },
  {
    name: "CPU-Scheduling Algo",
    description:
      "A CPU Scheduling Algorithm is a crucial process management technique used by operating systems to determine the order in which tasks (processes) are executed by the CPU.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "g++",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: cpu,
    source_code_link: "https://github.com/ankitsingh2403/CPU-Scheduling-Algo",
  },
];

export { services, technologies, experiences, projects };
