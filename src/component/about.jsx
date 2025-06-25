import img from "../assets/profile.jpg";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20  min-h-screen">
        <div className="flex justify-center w-full lg:w-1/3">
          <img
            src={img}
            alt="profile"
          className="h-56 w-56 md:h-72 md:w-72 rounded-full shadow-lg object-contain bg-white"

          />
        </div>
        <div className="w-full lg:w-2/3 text-center lg:text-left mt-6 lg:mt-0">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white-800">
            VISHAL YADAV
          </h1>
          <p className="text-lg text-white-600 mt-2">A bit about me</p>
          <p className="text-white-700 mt-3 leading-relaxed">
            I am a passionate Full Stack Developer and I'm also on an 
            entrepreneurial journey co-founding a startup focused on 
            creating impactful tech solutions using cutting-edge technologies 
            like AI, ML, and IoT.
            This startup experience has helped me merge technical innovation with real-world problem-solving
            and product development.,Over the years, I've built and contributed to multiple projects, including SightEcho, 
            a smart wearable device designed to assist visually impaired individualscrafting seamless digital experiences
            with cutting-edge technologies.

            Beyond coding, I love exploring the world and
            unraveling the mysteries of history. When not building robust
            applications, you’ll find me immersed in books, on the cricket
            field, or bringing ideas to life through code.
          </p>
          <Link to="/">
            <button className="mt-6 px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-md hover:scale-105 transition duration-300">
              Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default About;
