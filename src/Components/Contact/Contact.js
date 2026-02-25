function Contact() {
  return (
    <section className="min-h-screen bg-[#FEFCE8] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-[#7C3AED] text-center mb-8">Get In Touch</h2>
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <p className="text-lg text-gray-700 text-center mb-8">
            Feel free to reach out if you have any questions or want to collaborate on a project!
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a href="https://mail.google.com/" className="bg-[#C4B5FD] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#A78BFA] transition-colors duration-300 text-center">
              Email Me
            </a>
            <a href="https://github.com/anik0103" target="_blank" rel="noopener noreferrer" className="border-2 border-[#C4B5FD] text-[#7C3AED] px-8 py-3 rounded-full font-semibold hover:bg-[#C4B5FD] hover:text-white transition-colors duration-300 text-center">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/anik-adhikary-6b1969238/" target="_blank" rel="noopener noreferrer" className="border-2 border-[#C4B5FD] text-[#7C3AED] px-8 py-3 rounded-full font-semibold hover:bg-[#C4B5FD] hover:text-white transition-colors duration-300 text-center">
              LinkedIn
            </a>
          </div>
        </div>
        <footer className="text-center mt-16 text-gray-600">
          <p>© 2024 Frontend Developer Portfolio. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
}

export default Contact;
