import { useState } from "react";
import Logo from "./Logo";
import { Menu, X } from "lucide-react"; // Icons for the menu toggle on mobile
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { scrollToSection } from "../utils/scrollToSection";

const navItems = [
  { title: "Case Studies", href: "#case-studies" },
  { title: "About + CV", href: "#about" },
  { title: "What and How", href: "#what-how" },
  { title: "Connect", href: "#connect" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname === "/" && location.hash) {
      // If on home but there's a hash (e.g. #case-studies), remove it
      window.history.replaceState(null, "", "/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (location.pathname === "/") {
      // On home and no hash, just scroll
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Navigate to home (will clear path and hash)
      navigate("/");
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-lg p-4 flex items-center justify-between z-50"
    >
      <button onClick={handleLogoClick} aria-label="Go to top of home page">
        <Logo />
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:block primary-navigation">
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                onClick={() =>
                  scrollToSection(item.href, location.pathname, navigate)
                }
                className="text-white text-lg cursor-pointer hover:text-cyan-400 transition-colors duration-300 relative group"
              >
                {item.title}
                <span className="absolute top-8 left-0 w-full h-0.5 bg-cyan-400 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white primary-navigation"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Navigation Menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Navigation Panel */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black bg-opacity-90 p-6 flex flex-col items-center space-y-4 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              className="text-white text-lg hover:underline"
              onClick={() => {
                setIsOpen(false);
                scrollToSection(item.href, location.pathname, navigate);
              }}
            >
              {item.title}
            </a>
          ))}
        </div>
      )}
    </motion.header>
  );
};

export default Header;