import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "./Logo";
import { scrollToSection } from "../utils/scrollToSection";

const navItems = [
  { title: "Technologies", href: "#technologies" },
  { title: "Portfolio", href: "#portfolio" },
  { title: "Connect", href: "#connect" },
];

const Header = () => {
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

  const handleNavClick = (href: string) => {
    scrollToSection(href, location.pathname, navigate);
  };

  return (
    <>
      {/* Skip-to-content link, bumped down so visible */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-20 focus:left-2 focus:bg-white focus:text-black p-2 rounded z-50"
      >
        Skip to main content
      </a>

      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="fixed top-0 left-0 w-full bg-opacity-80 backdrop-blur-lg py-2 px-4 flex justify-between items-center z-40"
      >
        {/* Logo as button */}
        <Logo onClick={handleLogoClick} />

        {/* Navigation */}
        <nav aria-label="Primary" className="flex space-x-4 text-sm">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                if (location.pathname === "/") {
                  e.preventDefault();
                  handleNavClick(item.href);
                }
              }}
              className="cursor-pointer hover:text-fuchsia-900 transition-colors"
            >
              {item.title}
            </a>
          ))}
        </nav>
      </motion.header>
    </>
  );
};

export default Header;
