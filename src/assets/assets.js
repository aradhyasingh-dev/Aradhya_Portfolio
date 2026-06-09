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
    tags: ["React", "HTML", "CSS", "JavaScript", "Bootstrap", "Angular"],
  },
  {
    title: "Backend Development",
    icon: FaServer,
    description: "Developing robust server-side applications and RESTful APIs.",
    tags: ["ASP.NET MVC", "ASP.NET Core", "Node.js", "Express"],
  },
  {
    title: "Database Management",
    icon: FaDatabase,
    description:
      "Designing and optimizing databases for performance and scalability.",
    tags: ["MongoDB", "MS SQL Server"],
  },

  {
    title: "Tools & Technologies",
    icon: FaTools,
    description:
      "Tools and platforms I use for efficient development and collaboration.",
    tags: ["Git", "GitHub", "Visual Studio", "VS Code", "Postman"],
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
    title: "Medicine Management System",
    description:
      "A MERN stack-based inventory management application for managing medicines, stock levels, suppliers, sales, purchases, and expiry tracking with secure authentication and responsive dashboards.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
  {
    title: "Learning Management System (LMS)",
    description:
      "A web-based Learning Management System developed using ASP.NET MVC with features like user authentication, course management, student enrollment, and an admin dashboard.",
    tech: ["ASP.NET MVC", "C#", "MS SQL Server", "Bootstrap"],
  },
  {
    title: "Tour & Travel Management System",
    description:
      "A tour and travel booking system built with ASP.NET MVC, allowing users to explore travel packages and administrators to manage bookings and inquiries.",
    tech: ["ASP.NET MVC", "C#", "MS SQL Server", "HTML", "CSS"],
  },

  {
    title: "YouTube Clone",
    description:
      "A responsive YouTube clone developed using React, featuring video search, listings, and component-based architecture with API integration.",
    tech: ["React", "JavaScript", "YouTube API", "CSS"],
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built using React to showcase projects, skills, and experience with a modern, responsive UI.",
    tech: ["React", "JavaScript", "CSS", "GitHub Pages"],
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
  {
    role: "Full Stack Intern",
    company: "Fourbrick Technology Pvt. Ltd., Noida",
    duration: "April 2026 – Present",
    description:
      "Working on live projects using MongoDB, Express.js, React.js, and Node.js. Developing responsive user interfaces, building RESTful APIs, integrating databases, implementing CRUD operations, debugging applications, and collaborating with the development team to deliver scalable and efficient web solutions.",
    color: "pink",
  },
];
