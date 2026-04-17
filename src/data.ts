import lifelink from "./assets/lifelink.png";
import portfolio from "./assets/portfolio.png";
import profile from "./assets/profile.jpeg";

const data = {
  name: "Jaimin Solanki",
  role: "Frontend Developer",

  bio:"High-impact Frontend Developer specializing in React.js, TypeScript, and modern web technologies. Focused on building scalable, high-performance user interfaces with clean design and seamless user experience.",

  profile: profile,

  skills: [
    "React.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Responsive Design",
    "Django",
    "REST APIs",
    "Git",
    "GitHub",
    "Figma",
  ],

  experience: [
    {
      title: "Full Stack Developer Intern",
      company: "Ocean Dolphin Technolabs",
      duration: "Jan 2026 – Apr 2026",
      points: [
        "Developed web applications using React and Django",
        "Built reusable UI components for frontend interfaces",
        "Integrated REST APIs for dynamic data handling",
        "Worked on debugging and real-world workflows",
      ],
    },
    {
      title: "UI/UX Design Intern(Short-term)",
      company: "Sparks To Ideas",
      duration: "Jul 2025",
      points: [
        "Learned UI/UX fundamentals and design principles",
        "Created wireframes and interface layouts",
        "Understood user-centered design concepts",
      ],
    },
  ],

  projects: [
    {
      title: "LifeLink – Hospital Management System",
      description:
        "Built a full-stack hospital management system with dashboards, patient tracking, and real-time alerts using React and Django.",
      github: "https://github.com/jaiminsolankidev",
      live: "",
      image: lifelink,
    },
    {
      title: "Portfolio Website",
      description:
        "Developed a responsive portfolio with clean UI, smooth navigation, and optimized performance using React and Tailwind CSS.",
      github: "https://github.com/jaiminsolankidev/portfolio",
      live: "",
      image: portfolio,
    },
  ],

  education: {
    degree: "Bachelor of Engineering (Computer Engineering)",
    college:
      "Shree Swami Atmanand Saraswati Institute of Technology, Surat",
    year: "2022 – 2026",
    cgpa: "7.07",
  },

  languages: ["English (Professional)", "Hindi (Fluent)", "Gujarati (Native)"],

  email: "jaimin.solanki.dev@gmail.com",
};

export default data;