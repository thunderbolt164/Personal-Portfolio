const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];
const abilities = [
  {
    imgPath: "/images/creative.png",
    title: "Design Thinking",
    desc: "Applying creative problem-solving to design user-centric and innovative solutions.",
  },
  {
    imgPath: "/images/support.png",
    title: " Team Collaboration",
    desc: "Fostering open communication and synergy to achieve shared goals effectively.",
  },
  {
    imgPath: "/images/speak.png",
    title: "Communication",
    desc: "Conveying ideas clearly and effectively to build understanding and alignment.",
  },
  {
    imgPath: "/images/coding.png",
    title: " Quick Learning & Flexibility",
    desc: "Adapting swiftly to new challenges while acquiring skills efficiently.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "During my internship at Variable Soft, I contributed to a production CRM platform by building responsive interfaces, integrating REST APIs, and creating smooth user experiences with modern frontend technologies.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Full-Stack Developer Intern",
    date: "Jan 2026 – Jun 2026",
    responsibilities: [
      "Built reusable UI components using React and TypeScript.",
      "Integrated REST APIs across multiple CRM modules.",
      "Debugged, tested, and optimized application performance.",
      "Collaborated using Git and GitHub in a team environment.",
    ],
  },
  {
    review: "As a GSSoC 2026 contributor, I collaborated with maintainers worldwide, contributing features, bug fixes, and improvements while following professional open-source development workflows.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Open Source Contributor",
    date: "May 2026 – Present",
    responsibilities: [
      "Implemented new features and resolved bugs in open-source projects.",
      "Submitted pull requests and participated in code reviews.",
      "Worked with Git and GitHub workflows in collaborative development.",
      "Followed software engineering best practices while contributing.",
    ],
  },
  {
    review: "Completed an intensive on-site AI & Machine Learning workshop at MNIT Jaipur, gaining hands-on experience with Python, machine learning concepts, and real-world datasets under the guidance of experienced faculty members.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "AI & Machine Learning Trainee",
    date: "May 2023 - Jun 2023",
    responsibilities: [
      "Learned core Machine Learning and Artificial Intelligence concepts.",
    "Built hands-on projects using Python and real-world datasets.",
    "Explored data preprocessing, model training, and evaluation techniques.",
    "Worked alongside mentors and faculty in an immersive on-site learning environment",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];



const socialImgs = [
  {
    name: "codingNinjas",
    imgPath: "/images/codingninja.png",
    url: "https://www.naukri.com/code360/profile/thunderbolt164",
  },
  {
    name: "Github",
    imgPath: "/images/github.png",
    url: "https://github.com/thunderbolt164"
  },
  {
    name: "LeetCode",
    imgPath: "/images/leetcode.png",
    url: "https://leetcode.com/u/Dhruv408/"
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url:"https://www.linkedin.com/in/dhruv-akash-agarwal/"
  },
];

const projects = [
  {
    title: "Built the frontend for an AI-powered CRM using React, TypeScript, Tailwind CSS, and GSAP.",
    image: "/images/project1.png",
    color: "bg-[#d9ecff]",
    liveLink: "https://vscrm.ai",

  },
  {
    title: "Responsive landing page with smooth GSAP animations and modern UI.",
    image: "/images/project2.png",
    color: "bg-[#ffefdb]",
    liveLink: "https://cocktail-navy-six.vercel.app/",
  },
  {
    title: "Full-stack platform for comparing loan offers from banks and NBFCs.",
    image: "/images/project3.png",
    color: "bg-[#ffe7eb]",
    liveLink: null, // Under Development
  },
];

export {
  words,
  abilities,
  counterItems,
  expCards,
  expLogos,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  projects,
};