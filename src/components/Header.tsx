import { useState } from "react";
import Logo from "./Logo";
import { Menu, X } from "lucide-react"; // Icons for the menu toggle on mobile
import { motion } from "framer-motion";

const navItems = [
  { title: "About + CV", href: "#about" },
  { title: "Case Studies", href: "#case-studies" },
  { title: "What and How", href: "#what-how" },
  { title: "Connect", href: "#connect" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-lg p-4 flex items-center justify-between z-50"
    >
      <a href="/">
        <Logo />
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden md:block primary-navigation">
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-white text-lg hover:underline"
              >
                {item.title}
              </a>
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
              href={item.href}
              className="text-white text-lg hover:underline"
              onClick={() => setIsOpen(false)} // Close menu on click
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
