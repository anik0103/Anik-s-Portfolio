function About() {
  return (
    <section className="min-h-screen bg-[#FEFCE8] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-[#7C3AED] text-center mb-8">About Me</h2>
        <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-[#C4B5FD]">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Hello! I'm a passionate frontend developer with expertise in building modern web applications. 
            I love creating intuitive and visually appealing user interfaces that provide great user experiences.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            With a strong foundation in HTML, CSS, JavaScript, and React, I specialize in developing 
            responsive and accessible web applications. I'm always eager to learn new technologies and 
            stay up-to-date with the latest web development trends.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
