import dark from "../assets/dark.jpg"
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [

  {
    title: "My PortFolio (React + Vite + Tailwind + Node.js )",
    description: [
      "Fully Responsive Design: Adapts seamlessly to different screen sizes (desktop, tablet, mobile).",
      "Dynamic Project Showcase: Displays project details with animations and modal pop-ups.",
      "Smooth Animations: Uses Framer Motion for elegant transitions and hover effects.",
      "Social Media Links: Connects to GitHub, LinkedIn, and other platforms for networking.",
      "Tech Stack Highlight: Displays skills and technologies using interactive UI elements.",
      "Github : https://github.com/Hrxvish/My-PortFolio"
    ]
  },
  {
    title: "SNIP level validation in EDI files (JavaScript)",
    description: [
      "Syntax Validation: Checks the basic structure, segment order, required fields, and delimiters in the EDI file.",
      "Semantic Validation: Ensures proper data types, value formats, and segment relationships.",
      "Balancing Validation: Validates financial transactions by checking that total amounts match line-item sums.",
      "Code Set Validation: Ensures that all code values comply with standard EDI guidelines (e.g., ICD, CPT, NPI codes).",
      "Implementation Guide-Specific Rules: Validates transactions against custom implementation guidelines."
    ]
  },
  {
    title: "JSON to EDI Converter (JavaScript)",
    description: [
      "Lightning-Fast Conversion : Optimized JavaScript logic ensures rapid and accurate JSON to EDI transformation.",
      "Seamless Integration : Easily integrates with existing systems to automate EDI processing.",
      "Customizable & Scalable : Adaptable to different EDI formats and scalable for growing data needs.",
      "Github :https://github.com/Hrxvish/Json2edi"
    ]
  },
  {
    title: "EDI File Size Increaser (JavaScript)",
    description: [
      "Customizable Expansion : Allows flexible adjustments based on business and compliance needs.",
      "Github : https://github.com/Hrxvish/edi_size_increase"
    ]
  },
  {
    title: "Doctor Appointment System (React+Spring Boot+MongoDB+Azure)",
    description: [
      "Seamless Scheduling – Effortlessly book, reschedule, or cancel appointments with real-time availability.",
      "Automated Reminders – Reduce no-shows with SMS and email notifications for upcoming appointments.",
      "Secure & Scalable – Ensures patient data privacy while supporting multiple clinics and doctors.",
      "Github: https://github.com/Hrxvish/Doctor_Appointment_System"
    ]
  },
  {
    title: "Cab Booking Service (React + Spring Boot + MySQL + Git + Github)",
    description: [
      "User-Friendly Interface – Intuitive and responsive design for a seamless booking experience.",
      "24/7 Availability – Book a ride anytime, anywhere, with instant confirmations.",
      "Multiple Ride Options – Choose from economy, premium, or shared rides to suit your needs.",
      "Github Frontend: https://github.com/Hrxvish/cab_services_frontend",
      "Github Backend: https://github.com/Hrxvish/Cab_services_server"
    ]
  },
  {
    title: "Online Car Rental System (HTML + CSS + JavaScript + PHP + MySQL)",
    description: [
      "User Authentication: Secure login and registration for customers and admins.",
      "Car Listings: Displays available cars with images, descriptions, and pricing.",
      "Admin Dashboard: Manage car inventory, bookings, users, and payments.",
      "Responsive Design: Works smoothly on desktop and mobile devices.",
      "Github : https://github.com/Hrxvish/Online_Car_Rental"
    ]
  }
];

const ProjectCard = ({ title, company, onClick }) => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg rounded-lg p-6 my-4 s:mx-2 w-full md:w-full lg:w-full cursor-pointer hover:shadow-2xl transition-transform transform hover:scale-105" onClick={onClick}>
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      {company && <h4 className="text-lg font-semibold">({company})</h4>}
    </div>
  );
};
const Modal = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-md z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          className="bg-white p-8 rounded-lg w-full max-w-4xl shadow-2xl relative text-gray-900"
        >
          <button
            className="absolute top-4 right-4 text-gray-700 text-2xl font-bold hover:text-red-600 transition"
            onClick={onClose}
          >
            &times;
          </button>
          <h2 className="text-3xl font-bold text-gray-800 mb-3">{project.title}</h2>
          {project.company && <h4 className="text-xl font-semibold text-gray-600">({project.company})</h4>}
          <ul className="list-disc pl-6 mt-4 text-gray-700">
            {project.description.map((point, index) => (
              <li key={index} className="mt-2">{point}</li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (<>
    <section className=" py-12 md:px-12">
      <div className=" mx-auto">
        <h1 className="text-5xl font-bold text-center text-white-900 mb-8">Projects</h1>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} onClick={() => setSelectedProject(project)} />
        ))}
        {selectedProject && <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </div>
    </section>
    <Link to="/">
    <button className="mb-10 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6  rounded-xl shadow-lg hover:scale-110 transition transform duration-300 ease-in-out hover:shadow-xl">
      <span className="flex items-center gap-2 font-semibold text-lg">
        Home
      </span>
    </button></Link></>
  );
};
export default Projects;
