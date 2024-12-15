import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faBell } from '@fortawesome/free-solid-svg-icons';
import DarkModeToggle from './DarkModeToggle';
import NotificationPopup from './NotificationPopup';  // Import NotificationPopup

const Navbar = ({ isDark, toggleDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNotification, setShowNotification] = useState(false); // State to control notification popup visibility

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { title: 'Home', to: 'home' },
    { title: 'About', to: 'about' },
    { title: 'Skills', to: 'skills' },
    { title: 'Projects', to: 'projects' },
    { title: 'Contact', to: 'contact' },
  ];

  const toggleNotification = () => {
    setShowNotification(!showNotification); // Toggle notification popup
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled
        ? 'bg-opacity-70 text-gray-300  dark:bg-gray-900 dark:bg-opacity-70 backdrop-blur-lg shadow-lg'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text"
          >
            Portfolio
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                className={`cursor-pointer text-lg ${scrolled ? 'text-purple-700' : 'bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text'} font-semibold hover:text-purple-500 dark:bg-gradient-to-r from-purple-500 to-pink-500  bg-clip-text dark:hover:text-purple-400 transition-colors`}
              >
                {item.title}
              </Link>
            ))}
            <DarkModeToggle isDark={isDark} toggleDark={toggleDark} />

            {/* Notification Bell Icon */}
            <button
              onClick={toggleNotification} // This will trigger the popup to open
              className="relative cursor-pointer text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400"
            >
              <FontAwesomeIcon icon={faBell} className='text-xl' />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                1 {/* Example notification count */}
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <DarkModeToggle isDark={isDark} toggleDark={toggleDark} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300"
            >
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`md:hidden shadow-lg ${isDark ? 'bg-black' : 'bg-white'
            }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                className={`block px-3 py-2 font-semibold ${isDark
                  ? 'text-gray-300 hover:text-purple-400 dark:hover:text-purple-500'
                  : 'text-gray-700 hover:text-purple-500 dark:hover:text-purple-400'
                  } transition-colors`}
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </motion.div>
      )}


      {/* Show Notification Popup if showNotification is true */}
      {showNotification && <NotificationPopup closePopup={toggleNotification} />}
    </motion.nav>
  );
};

export default Navbar;
