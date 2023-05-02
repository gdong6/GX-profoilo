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
    threejs,

    UW,
    Cornell,
    LYG,
    Demic,

    bluebook,
    amazon_mockup,
    demicApp,
    NFTApp,
    eLife,
    jetfighter,
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
  title: "Frontend Developer",
  icon: web,
},
{
  title: "Backend Developer",
  icon: mobile,
},
{
  title: "Machine Learning",
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
  title: "B.S in Computer Science",
  company_name: "University of Wisconsin-Madison",
  icon: UW,
  iconBg: "#EFDEDD",
  date: "August 2018 - May 2022",
  points: [
    "Courses: Data Structure, Introduction to Computer Engineering, Intro to Computer System, Intro to Algorithm, Intro to AI, Intro to Database Manage System, Intro to Mobile System, Intro to Computer Grapgics, Physical based model simulation...",
    "Peer Mentor for CS559 Computer Graphics."
  ],
},
{
  title: "Software Intern, City Bus Brain Construction Project",
  company_name: "Lianyungang Communication Holding Group Co., LTD",
  icon: LYG,
  iconBg: "white",
  date: "May 2019 - Aug 2019",
  points: [
    "Traversed the real-time information and initial schedule to find the most suitable departure time to let dispatchers make corrections caused by accidents.",
    "Designed & developed an App with ReactNative, and followed the H5 standard to enable users to check bus information conveniently.",
  ],
},
{
  title: "Web Developer",
  company_name: "Demic., LLC",
  icon: Demic,
  iconBg: "#EFEFFF",
  date: "Jun 2022 - Sept 2022",
  points: [
    "http://demicapp.com/",
    "Designed & developed a website for Demic App to introduce their app.",
    "Used Figma to design and React as the framework. Deployed on AWS for public browsing.",
    "Used several React libraries to build an animated webpage.",
  ],
},
{
  title: "M.Eng in Systems Engineering",
  company_name: "Cornell University",
  icon: Cornell,
  iconBg: "#FEEEEE",
  date: "Aug 2022 - Present",
  points: [
    "Course: Machine Learning, Software System engineering, Big Data Technology, Data Analytics and Machine Learning...",
  ],
},
];

const projects = [
{
  name: "BlueBook",
  description:
    "A MERN based social media website. You can view social stories. If you've loggedin, you can like or leave a comment",
  tags: [
    {
      name: "React",
      color: "blue-text-gradient",
    },
    {
      name: "mongodb",
      color: "green-text-gradient",
    },
    {
      name: "Express",
      color: "pink-text-gradient",
    },
    {
      name: "MUI",
      color: "blue-text-gradient",
    },
    {
      name: "Node",
      color: "blue-text-gradient",
    },
    {
      name: "Google OAuth",
      color: "green-text-gradient",
    },
    {
      name: "Axios",
      color: "pink-text-gradient",
    },
    {
      name: "Redux",
      color: "blue-text-gradient",
    },
  ],
  image: bluebook,
  source_code_link: "https://github.com/gdong6/BlueBook",
},
{
  name: "Amazon Mockup",
  description:
    "This a fully functional FULL Stack amazon mockup. You can register an account and add items into you shopping cart, can even checkout! ",
  tags: [
    {
      name: "React",
      color: "blue-text-gradient",
    },
    {
      name: "MUI",
      color: "blue-text-gradient",
    },
    {
      name: "Elements",
      color: "pink-text-gradient",
    },
    {
      name: "Stripe",
      color: "green-text-gradient",
    },
    {
      name: "Firebase",
      color: "pink-text-gradient",
    },
  ],
  image: amazon_mockup,
  source_code_link: "https://github.com/gdong6/Amazon-mockup",
},
{
  name: "Demic App offical website",
  description:
    "Demic App's intoduction website. You can checkout http://demicapp.com to see. Designed by using Figma and deployed on Amazon.",
  tags: [
    {
      name: "React",
      color: "blue-text-gradient",
    },
    {
      name: "AWS",
      color: "green-text-gradient",
    },
    {
      name: "MUI",
      color: "blue-text-gradient",
    },
    {
      name: "Figma",
      color: "pink-text-gradient",
    },
    {
      name: "css",
      color: "pink-text-gradient",
    },
  ],
  image: demicApp,
  source_code_link: "https://github.com/gdong6/demic-web",
},
{
  name: "NFT App",
  description:
    "A NFT mobile app created by using React Native. You can browse NFTs and place a bid on them if you want to buy it.",
  tags: [
    {
      name: "ReactNative",
      color: "blue-text-gradient",
    },
    {
      name: "MUI",
      color: "blue-text-gradient",
    },
  ],
  image: NFTApp,
  source_code_link: "https://github.com/gdong6/NFT-ReactNative",
},
{
  name: "eLife - Health App",
  description:
    "An Android app which help people find healthier food & activities around them. Used Firebase for backend and user login authentication. Real-time food menu data are crawled by python from resturaunt's website. Food & Activity recommendation mechanism based on different user's preference and implemented K-means and Tree classification algorithm",
  tags: [
    {
      name: "Java",
      color: "blue-text-gradient",
    },
    {
      name: "Android Studio",
      color: "green-text-gradient",
    },
    {
      name: "Firebase",
      color: "pink-text-gradient",
    },
    {
      name: "Python",
      color: "green-text-gradient",
    },
    {
      name: "Machine Learning",
      color: "blue-text-gradient",
    },
    {
      name: "css",
      color: "pink-text-gradient",
    },
  ],
  image: eLife,
  source_code_link: "https://github.com/gdong6/cs638capstone",
},
{
  name: "JetFighter Game",
  description:
    "Just a simple funny game... Move your fighter to avoid hit by enemies and try to shot them down!",
  tags: [
    {
      name: "JavaScript",
      color: "pink-text-gradient",
    },
  ],
  image: jetfighter,
  source_code_link: "https://github.com/gdong6/jetfighter_game",
},
];

const testimonials = [
  {
    testimonial:
      "Always believe something wonderful is going to happen!",
    name: "",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  ];

export { services, technologies, experiences, testimonials, projects };