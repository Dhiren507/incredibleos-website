import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    console.log(`Attempting to scroll to section: ${id}`); // Debugging log
    const element = document.getElementById(id);
    if (element) {
      console.log(`Element found for ID: ${id}`); // Debugging log
      const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;

      // Add extra offset for specific sections
      const additionalOffset = id === 'download' ? 50 : 0; // Adjust for "Download" section
      const offsetPosition = elementPosition - navbarHeight + additionalOffset;

      console.log(`Calculated scroll position: ${offsetPosition}`); // Debugging log

      // Force scroll without smooth behavior for debugging
      window.scrollTo(0, offsetPosition);

      // Close the menu after scrolling (for mobile view)
      setIsMenuOpen(false);
    } else {
      console.warn(`Element with ID "${id}" not found.`);
    }
  };

  return (
    <nav className={`py-4 w-full z-50 fixed top-0 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-incredible-background'}`}>
      <div className="container mx-auto px-4 max-w-screen-lg flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/IncredibleOS-Avatar.jpg"
            alt="IncredibleOS Logo"
            className="h-12 rounded-full"
          />
          <div className="flex flex-col">
            <span className="font-gilroy font-bold text-incredible-primary text-xl">Incredible<span className="text-incredible-secondary">OS</span></span>
            <span className="text-incredible-muted text-xs">For Galaxy M30s</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4 items-center">
          <button
            className="text-incredible-text hover:text-incredible-primary transition-colors font-medium"
            onClick={() => scrollToSection('features')}
          >
            Features
          </button>
          <button
            className="text-incredible-text hover:text-incredible-primary transition-colors font-medium"
            onClick={() => scrollToSection('versions')}
          >
            Versions
          </button>
          <button
            className="primary-button"
            onClick={() => scrollToSection('download')}
          >
            Download
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-incredible-text"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg overflow-hidden"
          >
            <div className="p-4 flex flex-col space-y-4">
              <button
                className="text-incredible-text hover:text-incredible-primary transition-colors font-medium py-2 text-left"
                onClick={() => scrollToSection('features')}
              >
                Features
              </button>
              <button
                className="text-incredible-text hover:text-incredible-primary transition-colors font-medium py-2 text-left"
                onClick={() => scrollToSection('versions')}
              >
                Versions
              </button>
              <button
                className="primary-button w-full text-center"
                onClick={() => scrollToSection('download')}
              >
                Download
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
