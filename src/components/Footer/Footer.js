import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 z-10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Vasanth</h3>
            <p className="text-gray-400">Frontend Developer</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/Vasanth-04/My-Projects.git" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            <a href="https://www.linkedin.com/in/vasanth3256/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} A.VASANTH, All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;