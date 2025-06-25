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
  title: "Local Transportation Ticketing System (Java + Spring Boot + Tomcat + MySQL + REST API + HTML/CSS + JS)",
  description: [
    "Automated Ticket Booking : Enables users to book local transport tickets online with real-time availability.",
    "User Management : Secure login/signup, role-based access for users and admins.",
    "RESTful API Architecture : Designed using Spring Boot to ensure modular and scalable backend services.",
    "Database Integration : MySQL used for managing user data, ticket records, and transactions.",
    "Admin Dashboard : Manage routes, prices, and transactions with a secure admin panel.",
    "Deployed on Tomcat Server : Ensures fast request handling and scalable server-side processing.",
    "Tech Stack : Java, Spring Boot, MySQL, REST API, HTML/CSS, JavaScript (Thymeleaf or React for UI).",
    "Security : JWT-based authentication and HTTPS support for secure transactions.",
    "Responsive Design : Accessible on mobile and desktop for easy on-the-go ticketing.",
    "Github : https://github.com/Hrxvish/LocalTransportTicketingSystem"
  ]
},

{
  title: "SightEcho - Smart Goggles for the Visually Impaired (AI/ML+IoT+Python+Firebase+GCP)",
  description: [
    "Real-Time Assistance : Uses AI and image processing to detect surroundings, text, and objects in real-time.",
    "Voice Feedback System : Converts visual data into speech for the blind using TTS via Bluetooth audio.",
    "Cloud Integration : Processes data with powerful cloud services ensuring speed and reliability.",
    "Custom-Built Hardware : Developed with Raspberry Pi, USB camera, and Bluetooth speaker for portable use.",
    "Cross-Platform Access : Firebase integration enables data sync and cloud function triggers.",
    "Tech Stack : Python, OpenCV, Google Cloud Platform, Firebase, JavaScript (React for web UI), HTML/CSS.",
    "Machine Learning : Object detection, OCR (Optical Character Recognition), and speech synthesis models.",
    "IoT & Embedded : Raspberry Pi OS, camera interfacing, real-time sensor integration.",
    "Realtime Communication : Uses Firestore/Realtime DB for data exchange and Cloud Functions for automation.",
    "Github : https://github.com/Hrxvish/SightEcho"
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
  title: "Hall Ticket Generator with QR Code (HTML + CSS + JavaScript + React + MySQL + QR API)",
  description: [
    "Automated Hall Ticket Generation : Generates personalized hall tickets with student data fetched from the database.",
    "QR Code Integration : Each hall ticket contains a unique QR code for quick scanning and verification.",
    "Dynamic Frontend : Built with React.js for a responsive and interactive user interface.",
    "Backend Connectivity : Connects to MySQL database to fetch and store student records securely.",
    "PDF Export : Allows users to download or print the hall ticket in PDF format for offline use.",
    "Modern UI : Designed using HTML, CSS, and JavaScript for a clean and user-friendly layout.",
    "Data Validation : Ensures accurate and complete input of student details before generating the ticket.",
    "Tech Stack : HTML, CSS, JavaScript, React.js, MySQL, Node.js/Express (optional for backend), QR code libraries or APIs.",
    "Secure and Scalable : Built to handle multiple requests efficiently with data integrity.",
    "Github : https://github.com/Hrxvish/HallTicketQRGenerator"
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
