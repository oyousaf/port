import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  next,
  reactjs,
  tailwind,
  firebase,
  vue,
  nodejs,
  git,
  redux,
  mongodb,
  figma,
  docker,
  fcc,
  hgs,
  uw,
  itcw,
  defi,
  gop,
  hxmza,
  notflix,
  pollards,
  weather,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "xp",
    title: "Experience",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Enthusiast",
    icon: mobile,
  },
  {
    title: "Tailwind Aficionado",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Vue",
    icon: vue,
  },
  /*{
      name: "Redux Toolkit",
      icon: redux,
    },*/
  {
    name: "Node JS",
    icon: nodejs,
  },
  /*{
      name: "MongoDB",
      icon: mongodb,
    },*/
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  /*{
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },*/
];

const experiences = [
  {
    title: "Self-taught developer",
    company_name: "FreeCodeCamp",
    icon: fcc,
    iconBg: "#383E56",
    date: "Sept 2021 - Jan 2022",
    points: [
      `To keep my skills relevant and up-to-date, I decided to do go through the free resources available on
      FreeCodeCamp.`,
      `With the aid of patience and perseverance, I hope to become career ready upon completion and look forward to working in the vast world of development as it has always been a personal passion of mine.`,
    ],
  },
  {
    title: "Inbound Customer Service Advisor",
    company_name: "HGSUK",
    icon: hgs,
    iconBg: "#E6DEDD",
    date: "Sept 2022 - Dec 2022",
    points: [
      `Receiving inbound calls from the general public in a timely fashion, accurately recording their personal details using a dedicated call logger and then booking them in for their autumn booster vaccinations.`,
      `Providing correct, valid and relevant information to the caller in accordance with the NHS website and internal operational updates
      was also a daily occurrence as was problem-solving.`,
      `Providing the right solution was rewarding as it brought delight knowing that we were involved in vital work; getting citizens, especially those at high-risk, the elderly
      and those clinically vulnerable fully vaccinated for the fast-approaching winter months.`,
    ],
  },
  {
    title: "Technical Support Advisor",
    company_name: "UW",
    icon: uw,
    iconBg: "#383E56",
    date: "Jan 2023 - May 2023",
    points: [
      `Communicated effectively with customers through phone, email and live chat to ensure their issues were resolved in a timely manner.`,
      `Consistently provided exceptional customer service by proactively identifying solutions and offering new services when appropriate.`,
    ],
  },
  {
    title: "Coding Traineeship",
    company_name: "IT Career Switch",
    icon: itcw,
    iconBg: "#E6DEDD",
    date: "June 2023 - Present",
    points: [
      "To get back into the groove of developing I decided to embark on a traineeship program.",
      "Revisited the fundamentals of Web Development, which included HTML5, CSS3 and JavaScript, and also got a feel of Python.",
      "Delved into full stack development learning technologies such as Express.js, React, Node.js, and SQL.",
      "Had a taste of the software development life cycle and ensured code integrity with the use of testing libraries.",
    ],
  },
  /*{
    title: "Next Experience Goes here",
    company_name: "",
    icon: meta,
    iconBg: "#E6DEDD",
    date: " - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },*/
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
    name: "DeFi",
    description: "A simple crypto app developed using React and Tailwind",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: defi,
    source_code_link: "https://github.com/oyousaf/defi",
    live: "https://legxcy.uk",
  },
  {
    name: "Gardens of Paradise",
    description:
      "One of the very first websites I ever developed and has been through so many iterations! Initially it was developed using Bootstrap, then moved over to Mobirise and now safely resides within the ecosystem of Next.js, React and Tailwind",
    tags: [
      {
        name: "next",
        color: "black-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: gop,
    source_code_link: "https://github.com/oyousaf/gop",
    live: "https://oyousaf.uk",
  },
  {
    name: "Hxmza",
    description:
      "A simple rental app developed using Next.js, React, Tailwind and TypeScript",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next",
        color: "black-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "orange-text-gradient",
      },
    ],
    image: hxmza,
    source_code_link: "https://github.com/oyousaf/hxmza",
    live: "https://hxmza.uk",
  },
  {
    name: "Notflix",
    description:
      "A cool Netflix clone built using Firebase, React and Tailwind",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: notflix,
    source_code_link: "https://github.com/oyousaf/notflix",
    live: "https://react-notflix.web.app/",
  },
  {
    name: "Pollards",
    description: "An opticians website built using Next,js, React and Tailwind",
    tags: [
      {
        name: "next",
        color: "black-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: pollards,
    source_code_link: "https://github.com/oyousaf/pollards",
    live: "https://pollards.info",
  },
  {
    name: "Weather",
    description: "A simple weather app built using Vue",
    tags: [
      {
        name: "vue",
        color: "teal-green-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/oyousaf/weather",
    live: "https://kufi.uk",
  },
];

export { services, technologies, experiences, testimonials, projects };
