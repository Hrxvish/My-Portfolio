import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { RxDividerVertical } from "react-icons/rx";
import { FcVideoCall, FcSms } from "react-icons/fc";
const Button = ({ to, children }) => {
  const baseStyle =
    "w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-300 active:scale-95 text-center";

  return (
    <div className="w-full">
      {to ? (
        <Link to={to}>
          <button className={baseStyle} aria-label={children}>
            {children}
          </button>
        </Link>
      ) : (
        <button className={baseStyle} aria-label={children}>
          {children}
        </button>
      )}
    </div>
  );
};
const Landing = () => {
  return (
    <>
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center ">
      <div className="flex flex-col items-center leading-tight text-center px-4 sm:mt-14 sm:px-8 lg:px-16  mx-auto">
      {/* Animated Heading */}
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Hello, I'm <span className="text-blue-400">VISHAL YADAV</span>
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-base sm:text-lg text-gray-300 "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        I'm a passionate Full Stack Developer with expertise in building
        scalable, high-performance web applications. With a deep understanding
        of front-end and back-end technologies, I create seamless user
        experiences and robust server-side architectures. My goal is to craft
        efficient and innovative solutions that solve real-world problems.
      </motion.p>
    </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mx-4 w-full max-w-lg mt-7">
          <Button to="/about">About</Button>
          <Button to="/skills">Skills</Button>
          <Button to="/projects">Projects</Button>
          <Button to="/education">Education</Button>
        </div>
      </header>

      {/* Contact Section */}
      <section id="contact" className="p-12 bg-gray-800 text-center lg:mt-20 md:mt-5 mt-5">
        <h3 className="text-3xl font-semibold mb-4">Get in Touch</h3>
        <div className="flex justify-center gap-6 text-2xl">
          <a
            href="https://github.com/Hrxvish"
            className="hover:text-blue-400"
          >
            <FaGithub />
          </a>{" "}
          <RxDividerVertical />
          <a
            href="https://www.linkedin.com/in/vishal-yadav-814547272"
            className="hover:text-blue-400"
          >
            <FaLinkedin />
          </a>
          <RxDividerVertical />
          <a href="tel:+919598606971" className="hover:text-blue-400">
            <FcVideoCall />
          </a>
          <RxDividerVertical />
          <a
            href="mailto:v4vishaly26@gmail.com"
            className="hover:text-blue-400"
          >
            <FcSms />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-6 text-center bg-gray-900 text-gray-500">
        &copy; 2025 vishal_yadav. All Rights Reserved.
      </footer>
    </>
  );
};
export default Landing;
