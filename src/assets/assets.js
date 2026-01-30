import {
  FaLightbulb,
  FaPaintBrush,
  FaCode,
  FaReact,
  FaServer,
  FaMobileAlt,
  FaTools,
  FaNodeJs,
  FaStripe,
  FaVuejs,
  FaFire,
  FaDatabase,
  FaCloud,
  FaRobot,
} from "react-icons/fa";

// import profileImg from "../assets/profile.avif";
import profileImg from "../assets/profile.jpeg";
import projectImg1 from "../assets/lms.jpg";
import projectImg2 from "../assets/tour.jpg";
import projectImg3 from "../assets/project2.avif";
import projectImg4 from "../assets/Youtube.jpg";
import projectImg5 from "../assets/portfolio.jpg";
import projectImg6 from "../assets/project6.avif";

export const assets = {
  profileImg,
};

export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: "Innovative",
    description:
      "I love creating unique solutions to complex problems with cutting-edge technologies.",
    color: "text-purple",
  },
  {
    icon: FaPaintBrush,
    title: "Design Oriented",
    description:
      "Beautiful design and user experience are at the heart of everything I create.",
    color: "text-pink",
  },
  {
    icon: FaCode,
    title: "Clean Code",
    description:
      "I write maintainable, efficient code following best practices and modern patterns.",
    color: "text-blue",
  },
];

export const skills = [
  {
    title: "Frontend Development",
    icon: FaReact,
    description:
      "Building responsive, accessible, and interactive user interfaces.",
    tags: ["React", "HTML", "CSS", "JavaScript", "Bootstrap"],
  },
  {
    title: "Backend Development",
    icon: FaServer,
    description: "Developing robust server-side applications and RESTful APIs.",
    tags: ["ASP.NET MVC", "Node.js", "Express", "Django"],
  },
  {
    title: "Database Management",
    icon: FaDatabase,
    description:
      "Designing and optimizing databases for performance and scalability.",
    tags: ["MongoDB", "PostgreSQL", "MS SQL Server"],
  },
  {
    title: "Mobile Development",
    icon: FaMobileAlt,
    description:
      "Building cross-platform mobile applications using modern frameworks.",
    tags: ["React Native"],
  },
  {
    title: "Tools & Technologies",
    icon: FaTools,
    description:
      "Tools and platforms I use for efficient development and collaboration.",
    tags: ["Git", "GitHub"],
  },
  {
    title: "Programming Languages",
    icon: FaPaintBrush,
    description:
      "Core programming languages I use for application development.",
    tags: ["C", "C++", "C#", "Python"],
  },
];

export const projects = [
  {
    title: "Learning Management System (LMS)",
    description:
      "A web-based Learning Management System developed using ASP.NET MVC with features like user authentication, course management, student enrollment, and an admin dashboard.",
    image: projectImg1,
    tech: ["ASP.NET MVC", "C#", "MS SQL Server", "Bootstrap"],
    icons: [FaServer, FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Tour & Travel Management System",
    description:
      "A tour and travel booking system built with ASP.NET MVC, allowing users to explore travel packages and administrators to manage bookings and inquiries.",
    image: projectImg2,
    tech: ["ASP.NET MVC", "C#", "MS SQL Server", "HTML", "CSS"],
    icons: [FaServer, FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Web Forms Application",
    description:
      "A database-driven application built using ASP.NET Web Forms with CRUD operations, server-side validation, and SQL Server integration.",
    image: projectImg3,
    tech: ["ASP.NET Web Forms", "C#", "MS SQL Server"],
    icons: [FaServer, FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "YouTube Clone",
    description:
      "A responsive YouTube clone developed using React, featuring video search, listings, and component-based architecture with API integration.",
    image: projectImg4,
    tech: ["React", "JavaScript", "YouTube API", "CSS"],
    icons: [FaReact],
    demo: "#",
    code: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built using React to showcase projects, skills, and experience with a modern, responsive UI.",
    image: projectImg5,
    tech: ["React", "JavaScript", "CSS", "GitHub Pages"],
    icons: [FaReact],
    demo: "#",
    code: "#",
  },
];

export const workData = [
  {
    role: "Apprentice .NET Developer",
    company: "Techpile Technology Pvt. Ltd., Lucknow",
    duration: "8 Months",
    description:
      "Completed an intensive apprenticeship focused on .NET development, gaining hands-on experience with C#, ASP.NET, and database integration while building real-world applications.",
    color: "purple",
  },
  {
    role: ".NET Developer Intern",
    company: "SigmaIT Software Designers Pvt. Ltd., Lucknow",
    duration: "4 Months",
    description:
      "Worked on live projects using ASP.NET MVC, .NET Core, and ASP.NET Web Forms. Contributed to application development, bug fixing, and feature implementation in a professional team environment.",
    color: "pink",
  },
];
