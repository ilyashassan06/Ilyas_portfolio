// Import project images
import project1Img from "../assets/Project1.PNG";
import project2Img from "../assets/Project2.PNG";
import AiResume from "../assets/Airesume.PNG";

// Import tech stack logos
import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/css.png';
import jsLogo from '../assets/javascript.png';
import reactLogo from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import firebase from '../assets/firebase.png';

const recentWorkData = [
  {
  name: "Ai Resume Analyzer",
  description:
    "A smart web app built with React that uses AI to evaluate resumes, score them for ATS compatibility, and suggest improvements. Designed with a modern, responsive UI and deployed on Vercel.",
  image: AiResume,
  techStack: [htmlLogo, cssLogo, jsLogo, reactLogo,tailwind,firebase],
  link:"https://ai-resume-analyzer-iota-seven.vercel.app/login",},
  {
  name: "Ecom Website",
  description:
    "A full-featured e-commerce platform that allows users to browse products, add items to their cart, and securely checkout. Built with modern UI components and responsive design for a seamless shopping experience.",
  image: project1Img,
  techStack: [htmlLogo, cssLogo, jsLogo, reactLogo,],
  link:"https://github.com/ilyashassan06/ReactEcommerce",
},
{
  name: "Quiz App",
  description:
    "A web application that helps users manage their finances by tracking income and expenses. Includes interactive charts, category-wise breakdowns, and persistent data storage for better budgeting.",
  image: project2Img,
  techStack: [reactLogo,],
  link:"https://github.com/ilyashassan06/ReactQuiz",
},

 
];

export default recentWorkData;
