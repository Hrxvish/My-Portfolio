import { Outlet } from "react-router-dom";
import bgImage from "../assets/bg4.jpg";
import Landing from "./landing";

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center text-white font-serif bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Navbar */}
      <nav className="relative z-10 bg-black/30 backdrop-blur-lg shadow-lg px-6 sm:px-12 py-4 rounded-lg md:text-center text-center">
        <h1 className="text-lg sm:text-2xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
        Beyond Code: A Developer’s Showcase 
        </h1>
      </nav>

      {/* Page Content */}
      <div className="relative z-10 w-full text-center">
        <Outlet />
      </div>
    </div>
  );
}
