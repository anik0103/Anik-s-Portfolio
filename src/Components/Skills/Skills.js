function Skills() {
  const skills = [
    { name: "HTML5", icon: "🛠️", level: 90, category: "Frontend" },
    { name: "CSS3", icon: "🎨", level: 85, category: "Frontend" },
    { name: "JavaScript", icon: "📜", level: 90, category: "Frontend" },
    { name: "React", icon: "⚛️", level: 85, category: "Frontend" },
    { name: "Tailwind CSS", icon: "💨", level: 80, category: "Frontend" },
    { name: "Git", icon: "📂", level: 75, category: "Tools" },
  ];

  const categories = ["Frontend", "Tools"];

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#FEFCE8] to-[#FFFBEB] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-[#7C3AED] to-[#C4B5FD] bg-clip-text text-transparent text-center mb-20">
          My Skills
        </h2>

        {categories.map((category) => {
          const catSkills = skills.filter(
            (skill) => skill.category === category,
          );
          if (catSkills.length === 0) return null;

          return (
            <div key={category} className="mb-16">
              <h3 className="text-3xl font-bold text-[#7C3AED] mb-8 text-center">
                {category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {catSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:-translate-y-2 border border-white/50"
                  >
                    <div className="flex items-center mb-4">
                      <div className="text-4xl mr-4 group-hover:animate-bounce">
                        {skill.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-baseline">
                          <h4 className="text-xl font-bold text-gray-800 group-hover:text-[#7C3AED] transition-colors">
                            {skill.name}
                          </h4>
                          <span className="text-[#C4B5FD] font-bold text-lg">
                            {skill.level}%
                          </span>
                        </div>
                        {skill.level > 85 && (
                          <span className="inline-block bg-gradient-to-r from-[#7C3AED] to-[#C4B5FD] text-white text-xs px-3 py-1 rounded-full font-semibold mt-1 animate-pulse">
                            Mastery
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="w-full bg-gray-200/50 rounded-full h-4 overflow-hidden">
                      <div
                        className="h-4 bg-gradient-to-r from-[#C4B5FD] via-[#A78BFA] to-[#7C3AED] rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse shadow-inner"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
