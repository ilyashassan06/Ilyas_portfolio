// Import project images
import project1Img from "../assets/Project1.PNG";
import project2Img from "../assets/Project2.PNG";

// Import tech stack logos
import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/css.png';
import jsLogo from '../assets/javascript.png';
import reactLogo from '../assets/react.png';

const recentWorkData = [
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
