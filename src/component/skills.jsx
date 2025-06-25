import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FcExpand } from "react-icons/fc";
import { Dialog } from "@headlessui/react";
import bgImage from "../assets/bg4.jpg";
const skills = [
  {
    name: "Java",
    description: [
      "Java is a versatile and widely-used programming language.",
      "Used for mobile, web, and enterprise applications.",
      "Known for its platform independence (Write Once, Run Anywhere).",
      "Popular frameworks: Spring Boot, Hibernate.",
      "Backbone of Android app development.",
    ],
  },
  {
  name: "DSA",
  description: [
    "Data Structures and Algorithms (DSA) form the foundation of efficient programming.",
    "Includes arrays, linked lists, trees, graphs, stacks, queues, and hash tables.",
    "Algorithms include sorting, searching, dynamic programming, and greedy techniques.",
    "Essential for solving complex problems in coding interviews and competitive programming.",
    "Improves code performance, scalability, and logical thinking.",
  ],
},
{
  name: "OOPS with Java",
  description: [
    "Object-Oriented Programming (OOP) is a programming paradigm based on objects and classes.",
    "Java is one of the most widely used languages for implementing OOP concepts.",
    "Core principles include encapsulation, inheritance, polymorphism, and abstraction.",
    "Java provides strong memory management, built-in libraries, and platform independence.",
    "Widely used in enterprise applications, Android development, and backend systems.",
  ],
},
  {
  name: "AI/ML",
  description: [
    "Artificial Intelligence and Machine Learning (AI/ML) focus on enabling machines to learn and make decisions.",
    "Used in real-world applications like recommendation systems, speech recognition, and computer vision.",
    "Includes techniques like supervised learning, unsupervised learning, and neural networks.",
    "Python is widely used for AIML development due to libraries like TensorFlow, PyTorch, and scikit-learn.",
    "Highly in-demand skill across industries such as healthcare, finance, and autonomous systems.",
  ],
},
{
  name: "GCP",
  description: [
    "Google Cloud Platform (GCP) is a suite of cloud computing services by Google.",
    "Provides scalable infrastructure for computing, storage, and AI/ML services.",
    "Popular services include Compute Engine, Cloud Functions, and BigQuery.",
    "Integrated with advanced analytics, security, and DevOps tools.",
    "Trusted by enterprises for building and deploying modern applications.",
  ],
},
{
  name: "Firebase",
  description: [
    "Firebase is a Backend-as-a-Service (BaaS) platform by Google for web and mobile apps.",
    "Offers real-time databases, authentication, cloud storage, and serverless functions.",
    "Supports rapid app development with minimal backend code.",
    "Features like Firestore, Firebase Auth, and Firebase Hosting streamline app deployment.",
    "Widely used in startups and MVPs for real-time and scalable apps.",
  ],
},
{
  name: "PHP",
  description: [
    "PHP is a widely-used open-source scripting language for web development.",
    "Runs on the server-side and is especially suited for dynamic websites.",
    "Supports integration with databases like MySQL and PostgreSQL.",
    "Used to build content management systems like WordPress and Drupal.",
    "Still a strong choice for backend development with frameworks like Laravel and CodeIgniter.",
  ],
},
  {
    name: "Spring Boot",
    description: [
      "Spring Boot simplifies Java application development.",
      "Provides built-in support for microservices.",
      "Eliminates boilerplate configuration.",
      "Supports embedded servers like Tomcat.",
      "Widely used in enterprise applications.",
    ],
  },
    {
    name: "Git",
    description: [
      "Git is a distributed version control system.",
      "Used for tracking changes in source code.",
      "Supports branching and merging.",
      "Essential for collaborative software development.",
      "Widely used in DevOps and CI/CD pipelines.",
    ],
  },
  {
    name: "GitHub",
    description: [
      "GitHub is a platform for hosting and managing Git repositories.",
      "Used for version control and collaboration.",
      "Supports issue tracking and project management.",
      "Provides CI/CD and automation features.",
      "Popular among open-source and enterprise developers.",
    ],
  },
  {
    name: "React",
    description: [
      "React is a JavaScript library for building UI components.",
      "Used for building single-page applications (SPAs).",
      "Virtual DOM improves performance.",
      "Supports component-based architecture.",
      "Maintained by Meta (Facebook).",
    ],
  },
  {
    name: "Express",
    description: [
      "Express.js is a minimal and flexible Node.js web application framework.",
      "Used for building APIs and web applications.",
      "Supports middleware for request handling.",
      "Lightweight and unopinionated.",
      "Popular for backend development in JavaScript.",
    ],
  },
  {
    name: "MongoDB",
    description: [
      "MongoDB is a NoSQL database that stores data in JSON-like format.",
      "Highly scalable and flexible.",
      "Used in modern web applications.",
      "Supports powerful querying and indexing.",
      "Popular for handling large amounts of unstructured data.",
    ],
  },
  {
    name: "MySQL",
    description: [
      "MySQL is a relational database management system.",
      "Widely used for web applications.",
      "Supports structured query language (SQL).",
      "Scalable and high-performance.",
      "Used in enterprise applications and cloud solutions.",
    ],
  },
  {
    name: "Node.js",
    description: [
      "Node.js is a JavaScript runtime built on Chrome's V8 engine.",
      "Used for building scalable network applications.",
      "Non-blocking, event-driven architecture.",
      "Ideal for backend development with Express.js.",
      "Supports asynchronous programming.",
    ],
  },
  {
    name: "JavaScript",
    description: [
      "JavaScript is a high-level, dynamic programming language.",
      "Core technology for web development alongside HTML and CSS.",
      "Supports both frontend and backend development.",
      "Widely used for interactive and dynamic web applications.",
      "Essential for modern frameworks like React and Angular.",
    ],
  },
  {
    name: "HTML",
    description: [
      "HTML (HyperText Markup Language) structures web pages.",
      "Defines the layout and content of a webpage.",
      "Works with CSS and JavaScript for complete web development.",
      "Uses elements like headings, paragraphs, and links.",
      "Fundamental to web development.",
    ],
  },
  {
    name: "CSS",
    description: [
      "CSS (Cascading Style Sheets) styles web pages.",
      "Controls layout, colors, and typography.",
      "Supports responsive design using Flexbox and Grid.",
      "Essential for web aesthetics.",
      "Works alongside HTML and JavaScript.",
    ],
  },
  {
    name: "Bootstrap",
    description: [
      "Bootstrap is a front-end framework for responsive web design.",
      "Provides ready-to-use components and grid system.",
      "Simplifies UI development.",
      "Compatible with modern browsers.",
      "Used in rapid web application development.",
    ],
  },
  {
    name: "Tailwind",
    description: [
      "Tailwind CSS is a utility-first CSS framework.",
      "Allows rapid UI development.",
      "Highly customizable and flexible.",
      "Used for modern web applications.",
      "Popular in the developer community.",
    ],
  },
  {
    name: "C",
    description: [
      "C is a general-purpose programming language.",
      "Used for system programming and embedded systems.",
      "Efficient and widely supported.",
      "Forms the foundation for many modern languages.",
      "Essential for operating systems and hardware-level programming.",
    ],
  },
  {
    name: "C++",
    description: [
      "C++ is an extension of C with object-oriented features.",
      "Used in game development, system software, and performance-critical applications.",
      "Supports multi-paradigm programming.",
      "Popular frameworks: Qt, Unreal Engine.",
      "Provides fine control over system resources.",
    ],
  },

  
  {
    name: "Azure",
    description: [
      "Microsoft Azure is a cloud computing platform.",
      "Provides a range of cloud services including AI, ML, and databases.",
      "Popular for enterprise cloud solutions.",
      "Supports hybrid cloud deployments.",
      "Offers integrations with Microsoft products.",
    ],
  },
];
const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <div className="p-6 min-h-screen flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6">Skill Pack</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {skills.map((skill, index) => (
          <button
            key={index}
            onClick={() => setSelectedSkill(skill)}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-110 transition transform duration-300 ease-in-out hover:shadow-xl"
          >
            <span className="flex items-center gap-2 font-semibold text-lg">
              {skill.name} <FcExpand />
            </span>
          </button>
        ))}
      </div>
      {selectedSkill && (
        <Dialog open={true} onClose={() => setSelectedSkill(null)}>
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-lg w-full transform transition-all scale-100 opacity-100">
              <h3 className="text-2xl font-bold mb-4 text-center">
                {selectedSkill.name}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {selectedSkill.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <button
                onClick={() => setSelectedSkill(null)}
                className="mt-6 text-red px-6 py-3 rounded-xl hover:bg-red-600 mx-auto shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:ring-4 focus:ring-red-300 focus:outline-none"
              >
                Close
              </button>
            </div>
          </div>
        </Dialog>
      )}

      <Link to="/">
      <button className="mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-110 transition transform duration-300 ease-in-out hover:shadow-xl">
        <span className="flex items-center gap-2 font-semibold text-lg">
          Home
        </span>
      </button></Link>
    </div>
  );
};
export default Skills;
