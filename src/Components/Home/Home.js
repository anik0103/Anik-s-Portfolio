import { useState, useEffect } from "react";
import Anik from "../../Assest/Anikpic.jpeg";

function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#FEFCE8] via-[#F5F0FF] to-[#FEFCE8]">
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#C4B5FD] opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#A78BFA] opacity-15 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-32 right-32 w-4 h-4 bg-[#C4B5FD] rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-[#A78BFA] rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-[#7C3AED] rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-[#C4B5FD] rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute top-1/3 left-10 w-2 h-2 bg-[#A78BFA] rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-20 w-3 h-3 bg-[#7C3AED] rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute top-1/2 left-20 w-2 h-2 bg-[#C4B5FD] rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute bottom-1/2 right-40 w-4 h-4 bg-[#A78BFA] rounded-full opacity-20 animate-pulse"></div>
      <div
        className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen px-4 gap-20"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      >
        <div className="flex-shrink-0">
          <div className="w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#C4B5FD] shadow-2xl">
            <img
              src={Anik}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-[#7C3AED] mb-4">
            Hi, I'm a Frontend Developer
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-4 max-w-2xl">
            I build beautiful, responsive, and user-friendly web applications
          </p>
          <div className="mb-8 max-w-2xl">
            <p className="text-gray-600 mb-4">
              A passionate frontend developer with expertise in React,
              JavaScript, and modern web technologies. I create seamless user
              experiences with clean code and creative solutions.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
              <span className="px-3 py-1 bg-[#F3E8FF] text-[#7C3AED] rounded-full text-sm font-medium">
                React
              </span>
              <span className="px-3 py-1 bg-[#F3E8FF] text-[#7C3AED] rounded-full text-sm font-medium">
                JavaScript
              </span>
              <span className="px-3 py-1 bg-[#F3E8FF] text-[#7C3AED] rounded-full text-sm font-medium">
                Tailwind CSS
              </span>
              <span className="px-3 py-1 bg-[#F3E8FF] text-[#7C3AED] rounded-full text-sm font-medium">
                Node.js
              </span>
            </div>
          </div>
          <a
            href="/projects"
            className="bg-[#C4B5FD] text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-[#A78BFA] transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
