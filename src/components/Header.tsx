import { useState, useRef, useEffect } from "react";
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
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname === "/" && location.hash) {
      window.history.replaceState(null, "", "/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Close menu when a nav item is clicked
  const handleNavClick = (item: typeof navItems[0]) => {
    setIsOpen(false);
    scrollToSection(item.href, location.pathname, navigate);
  };

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed top-0 left-0 w-full bg-opacity-80 backdrop-blur-lg p-4 flex items-center justify-between z-50"
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
                className="text-lg cursor-pointer hover:text-fuchsia-900 transition-colors duration-300 relative group"
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
        className="md:hidden text-fuchsia-900 primary-navigation"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Navigation Menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Navigation Panel */}
      {isOpen && (
        <>
          {/* Overlay backdrop */}
          <div
            className="fixed inset-0 bg-opacity-50 md:hidden z-40"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          
          {/* Menu */}
          <motion.div
            ref={menuRef}
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 h-fit w-full bg-fuchsia-900 bg-opacity-95 p-6 flex flex-col space-y-4 md:hidden z-50 overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="self-end text-white hover:text-cyan-400 transition-colors mb-4"
              aria-label="Close Navigation Menu"
            >
              <X size={32} />
            </button>

            {/* Navigation Items */}
            {navItems.map((item) => (
              <button
                key={item.href}
                className="text-white text-lg hover:text-cyan-400 transition-colors text-left"
                onClick={() => handleNavClick(item)}
              >
                {item.title}
              </button>
            ))}
          </motion.div>
        </>
      )}
    </motion.header>
  );
};

export default Header;