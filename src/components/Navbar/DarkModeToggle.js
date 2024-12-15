import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const DarkModeToggle = ({ isDark, toggleDark }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleDark}
      className=" rounded-full w-6 h-6 bg-opacity-20 backdrop-blur-lg bg-white dark:bg-gray-800 text-yellow-500 dark:text-blue-400 items-center flex justify-center"
    >
      <FontAwesomeIcon icon={isDark ? faSun : faMoon} className="text-md" />
    </motion.button>
  );
};

export default DarkModeToggle;