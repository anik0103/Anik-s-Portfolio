import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="bg-[#C4B5FD] py-4 shadow-md">
            <ul className="flex gap-10 justify-center text-lg font-bold text-white">
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
        </nav>
    );
};

export default Nav;
