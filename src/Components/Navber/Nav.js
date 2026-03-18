import { Link } from 'react-router-dom';
import { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="bg-[#C4B5FD] py-4 shadow-md">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center">
              {/* Logo or empty for center align simulation */}
              <div className="flex-shrink-0">
              </div>
              
              {/* Hamburger button for mobile */}
              <button
                className="lg:hidden text-white text-2xl focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path className={!isOpen ? 'block' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  <path className={isOpen ? 'block' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Desktop Menu */}
              <ul className="hidden lg:flex gap-10 justify-center text-lg font-bold text-white flex-1">
                <li>
                  <Link to="/" className="hover:text-[#FEFCE8] focus:text-[#FEFCE8] transition-colors duration-200">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-[#FEFCE8] focus:text-[#FEFCE8] transition-colors duration-200">About</Link>
                </li>
                <li>
                  <Link to="/skills" className="hover:text-[#FEFCE8] focus:text-[#FEFCE8] transition-colors duration-200">Skills</Link>
                </li>
                <li>
                  <Link to="/projects" className="hover:text-[#FEFCE8] focus:text-[#FEFCE8] transition-colors duration-200">Projects</Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-[#FEFCE8] focus:text-[#FEFCE8] transition-colors duration-200">Contact</Link>
                </li>
              </ul>
            </div>
            
            {/* Mobile Menu */}
            {isOpen && (
              <div className="lg:hidden mt-4 pb-4 border-t border-white/20">
                <ul className="flex flex-col gap-4 text-lg font-bold text-white">
                  <li>
                    <Link 
                      to="/" 
                      className="block py-2 hover:text-[#FEFCE8] focus:text-[#FEFCE8] transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/about" 
                      className="block py-2 hover:text-[#FEFCE8] focus:text-[#FEFCE8] transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/skills" 
                      className="block py-2 hover:text-[#FEFCE8] focus:text-[#FEFCE8] transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      Skills
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/projects" 
                      className="block py-2 hover:text-[#FEFCE8] focus:text-[#FEFCE8] transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/contact" 
                      className="block py-2 hover:text-[#FEFCE8] focus:text-[#FEFCE8] transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>
    );
};

export default Nav;
