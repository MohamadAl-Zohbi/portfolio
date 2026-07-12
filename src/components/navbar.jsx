import { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 
                    bg-slate-950/70 backdrop-blur-lg 
                    border-b border-white/10">

            <div className="max-w-7xl mx-auto px-6 py-4 
                      flex items-center justify-between">

                {/* Logo */}
                <div className="text-3xl font-bold">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 
                           bg-clip-text text-transparent">
                        Mohamad
                    </span>
                    <span className="text-white">.</span>
                </div>


                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-8 
                       text-gray-300 font-medium">

                    <li>
                        <Link
                            className="hover:text-cyan-400 transition duration-300"
                            to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className="hover:text-cyan-400 transition duration-300"
                        >
                            About
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/skills"
                            className="hover:text-cyan-400 transition duration-300"
                        >
                            Skills
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/projects"
                            className="hover:text-cyan-400 transition duration-300"
                        >
                            Projects
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/contact"
                            className="hover:text-cyan-400 transition duration-300"
                        >
                            Contact
                        </Link>
                    </li>

                </ul>


                {/* Button */}
                <button
                    className="
          hidden md:block
          px-5 py-2 rounded-full
          bg-gradient-to-r from-cyan-500 to-blue-600
          text-white font-semibold
          hover:scale-105
          transition duration-300
          shadow-lg shadow-cyan-500/20
          "
                >
                    Hire Me
                </button>


                {/* Mobile Menu Icon */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-3xl text-white"
                >
                    {open ? "✕" : "☰"}
                </button>



            </div>
            {/* Mobile Menu */}
            <div
                className={`
        md:hidden overflow-hidden transition-all duration-300
        ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
            >

                <ul className="flex flex-col items-center gap-6 py-8 
                       bg-slate-900 text-gray-300">


                    <li>
                        <a
                            href="#home"
                            onClick={() => setOpen(false)}
                            className="hover:text-cyan-400"
                        >
                            Home
                        </a>
                    </li>


                    <li>
                        <a
                            href="#about"
                            onClick={() => setOpen(false)}
                            className="hover:text-cyan-400"
                        >
                            About
                        </a>
                    </li>


                    <li>
                        <a
                            href="#projects"
                            onClick={() => setOpen(false)}
                            className="hover:text-cyan-400"
                        >
                            Projects
                        </a>
                    </li>


                    <li>
                        <a
                            href="#contact"
                            onClick={() => setOpen(false)}
                            className="hover:text-cyan-400"
                        >
                            Contact
                        </a>
                    </li>


                    <button
                        className="bg-cyan-500 px-6 py-2 rounded-full"
                    >
                        Hire Me
                    </button>


                </ul>

            </div>

        </nav>
    );
}

export default Navbar;