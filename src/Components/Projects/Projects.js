import React, { useState } from "react";

const projectsData = [
  {
    title: "Nare & Dear: E-Commerce Website",
    description:
      "A full-featured online cake shopping platform with cart functionality, payment integration, and responsive design for seamless user experience.",
    image: "/images/near.png",
    tech: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://sabbir45ali.github.io/near---dear-cake-shop/",
    githubLink: "https://github.com/Sabbir45ali/near---dear-cake-shop",
    features: [
      "Shopping cart management",
      "Payment gateway integration",
      "Responsive design",
      "Product catalog",
    ],
  },
  {
    title: "Athena Inventory: Inventory Management System",
    description:
      "Comprehensive inventory management application featuring stock tracking, order processing, and advanced reporting tools for businesses.",
    image: "/images/athena.png",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    demoLink: "https://athena-inventory.vercel.app",
    githubLink: "https://athenainventory.netlify.app/",
    features: [
      "Real-time stock tracking",
      "Order management",
      "Reporting dashboard",
      "User authentication",
    ],
  },
  {
    title: "Portfolio Website",
    description:
      "Modern personal portfolio website highlighting projects, skills, and professional experience with smooth animations and responsive layout.",
    image: "/images/Anikpic.jpeg",
    tech: ["React", "Tailwind CSS", "Vercel"],
    demoLink: "https://yourportfolio.vercel.app",
    githubLink: "https://github.com/yourusername/portfolio",
    features: [
      "React Router navigation",
      "Tailwind responsive design",
      "Smooth animations",
      "SEO optimized",
    ],
  },
  {
    title: "Weather Dashboard",
    description:
      "Interactive real-time weather application providing location-based forecasts, current conditions, and interactive maps powered by OpenWeather API.",
    image: "/images/1.svg",
    tech: ["JavaScript", "OpenWeather API", "CSS3"],
    demoLink: "https://weather-dashboard.vercel.app",
    githubLink: "https://github.com/yourusername/weather-dashboard",
    features: [
      "Real-time weather data",
      "Geolocation support",
      "Interactive maps",
      "Forecast charts",
    ],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((project) =>
          project.tech.some((t) =>
            t.toLowerCase().includes(filter.toLowerCase()),
          ),
        );

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  const techFilters = ["all", "React", "JavaScript", "HTML", "CSS"];

  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-[#7F00FF] pt-8 mb-2 yafter:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-24 after:h-1 after:bg-gradient-to-r after:from-[#7C3AED] after:to-[#A855F7] after:rounded-full">
              My Projects
            </h2>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Explore my diverse portfolio of web applications built with modern
              technologies
            </p>
          </div>

          {/* Tech Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {techFilters.map((tech) => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  filter === tech
                    ? "bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white shadow-lg shadow-purple-500/25"
                    : "bg-white/70 backdrop-blur-sm text-gray-800 border border-gray-200 hover:shadow-md"
                }`}
              >
                {tech}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-transparent backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-2 border-white hover:border-purple-200"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#7F00FF] mb-4 group-hover:text-[#7C3AED] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="bg-gradient-to-r from-[#FEFCE8] to-[#FEF3C7] text-[#7C3AED] px-4 py-2 rounded-full text-sm font-semibold border border-purple-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white py-3 px-6 rounded-xl font-semibold text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                      Live Demo
                    </a>
                    <button
                      onClick={() => openModal(project)}
                      className="px-6 py-3 bg-white text-gray-800 border-2 border-gray-200 rounded-xl font-semibold hover:bg-gray-50 hover:border-purple-300 hover:text-[#7C3AED] transition-all duration-300"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="col-span-full text-center py-20">
              <p className="text-2xl text-gray-500">
                No projects match this filter
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white/90 backdrop-blur-xl rounded-3xl max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8 md:p-12">
              <div className="flex justify-between items-start mb-8">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={closeModal}
                  className="text-2xl text-gray-500 hover:text-gray-900 transition-colors p-2 -m-2 rounded-full hover:bg-gray-200"
                >
                  ×
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <img
                    className="w-full rounded-2xl shadow-xl object-contain h-80"
                    src={selectedProject.image}
                    alt={selectedProject.title}
                  />
                </div>

                <div>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    {selectedProject.description}
                  </p>

                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Features
                  </h4>
                  <ul className="space-y-2 mb-8">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-[#7C3AED] rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-4">
                    <a
                      href={selectedProject.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white py-4 px-8 rounded-2xl font-bold text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-lg"
                    >
                      🚀 Live Demo
                    </a>
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-900 text-white py-4 px-8 rounded-2xl font-bold text-center hover:bg-gray-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-lg"
                    >
                      💻 View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
