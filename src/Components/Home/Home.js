import { useState, useEffect } from "react";
import Anik from "../../Assest/Anik.png";

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
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900]">
      <div
        className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen px-4 gap-20 pt-24 md:pt-0"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      >
        <div className="flex-shrink-0">
          <div className="w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#C4B5FD] shadow-2xl">
            <img
              src={Anik}
              alt="Profile"
              className="w-full h-fit object-cover"
            />
          </div>
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-[#7F00FF] mb-4">
            <span className="text-white">Hi</span>, I'm a{" "}
            <span className="text-white">Frontend</span> Developer
          </h1>

          <p className="text-xl md:text-2xl text-[#7F00FF] mb-4 max-w-2xl">
            I build <span className="text-white">beautiful</span>,{" "}
            <span className="text-white">responsive</span>, and{" "}
            <span className="text-white">user-friendly</span> web applications
          </p>
          <div className="mb-8 max-w-2xl">
            <p className="text-gray-100 mb-4">
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/projects"
              className="bg-[#7F00FF] text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-[#A78BFA] transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
            >
              View My Work
            </a>
            <a
              href="/Anik-resume.pdf"
              download="Anik-Resume.pdf"
              className="bg-[#7F00FF] text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-[#A78BFA] transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-transparent hover:border-white/50 flex items-center gap-2"
            >
              📄 Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
