// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
} from "../assets";

// Navbar Links
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "source-code",
    title: "Source Code",
    link: "http://www.github.com/Technical-Shubham-tech/3d-portfolio/",
  },
];

// Services
const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

// Technologies
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
];

// Projects
const projects = [
  {
    name: "News App",
    description:
      "Developed a dynamic news app using JavaScript, delivering real-time news updates to users. Implemented an intuitive user interface, fetching data from API's and displaying articles in a user-friendly format and enhanced user experience",
    tags: [
      {
        name: "HTML||CSS",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "newsapi",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/Technical-Shubham-tech/disney-clone",
    live_site_link: "https://clonedisneyplus.web.app/",
  },
  {
    name: "Ignite Fitness",
    description:
      "Developed a dynamic fitness app using React js, empowering users to track workouts, save exercises, and access a diverse range of exercise routines. Utilized interactive UI to enhance user experience and foster a healthier lifestyle.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/Technical-Shubham-tech/fitness-app",
    live_site_link: "https://fitness-gym-react.netlify.app/",
  },
  {
    name: "AI-Image-Generator",
    description:
      "Developed an innovative AI Image Generator app using the MERN stack, harnessing the power of artificial intelligence to generate captivating and realistic images. Employs cutting-edge deep learning algorithms to produce impressive visual content",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node js",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link:
      "https://github.com/Technical-Shubham-tech/admin-dashboard",
    live_site_link: "https://shoppy-dashboard-react.netlify.app/",
  },
  {
    name: "Chat Application",
    description:
      "Developed a real-time chat application using the MERN stack (MongoDB, Express.js, React, and Node.js). Implemented WebSocket for instant messaging and created a seamless user interface, enabling users to communicate efficiently and securely",
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
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "socket.io",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/Technical-Shubham-tech/tiktok-clone",
    live_site_link: "https://tiktok-clone-react.vercel.app/",
  },
  {
    name: "3D Personal Portfolio",
    description:
      "Designed and developed an interactive portfolio website using Three.js, showcasing my creative work in a visually captivating and immersive 3D environment. Demonstrates technical skills in web development and a flair for artistic presentation.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "emailjs",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com/Technical-Shubham-tech/crypto-app",
    live_site_link: "https://reactjscryptoapp.netlify.app/",
  }
];

export { services, technologies, projects };
