import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { SunIcon, MoonIcon } from './icons/Icons';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const iconVariants = {
      hidden: { y: -20, opacity: 0, rotate: -90 },
      visible: { y: 0, opacity: 1, rotate: 0 },
      exit: { y: 20, opacity: 0, rotate: 90 }
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        backgroundColor: isScrolled 
          ? (theme === 'light' ? 'rgba(248, 247, 244, 0.8)' : 'rgba(26, 32, 44, 0.8)')
          : 'transparent',
      }}
    >
      <div className="container mx-auto flex justify-between items-center p-4 md:p-6">
        <div 
          className="text-2xl font-bold tracking-wider text-[#007BFF] cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          JD
        </div>
        
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className="text-gray-600 dark:text-gray-300 hover:text-[#007BFF] dark:hover:text-[#007BFF] transition-colors duration-300 font-medium"
              >
                {link.name}
              </button>
            ))}
          </nav>

          <button
            onClick={() => scrollTo('#contact')}
            className="hidden md:block bg-[#007BFF] text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
          >
            Contact
          </button>

          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 overflow-hidden"
            aria-label="Toggle theme"
          >
              <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                      key={theme}
                      variants={iconVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      transition={{ duration: 0.3 }}
                  >
                      {theme === 'light' ? <MoonIcon /> : <SunIcon />}
                  </motion.div>
              </AnimatePresence>
          </button>
          {/* Mobile menu hamburger icon could be added here */}
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
