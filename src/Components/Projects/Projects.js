function Projects() {
  const projects = [
    {
      title: 'E-Commerce Website',
      description: 'A full-featured online shopping platform with cart functionality and payment integration.',
      tech: ['React', 'Tailwind CSS', 'Node.js'],
    },
    {
      title: 'Task Manager App',
      description: 'A productivity application for managing daily tasks with drag-and-drop functionality.',
      tech: ['React', 'Redux', 'Firebase'],
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing projects and skills.',
      tech: ['React', 'Tailwind CSS', 'Vercel'],
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather application with location-based forecasts and interactive maps.',
      tech: ['JavaScript', 'OpenWeather API', 'CSS3'],
    },
  ];

  return (
    <section className="min-h-screen bg-[#FEFCE8] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#7C3AED] text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-40 bg-gradient-to-r from-[#C4B5FD] to-[#A78BFA] flex items-center justify-center">
                <span className="text-white text-6xl font-bold opacity-50">{index + 1}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="bg-[#FEFCE8] text-[#7C3AED] px-3 py-1 rounded-full text-sm font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
