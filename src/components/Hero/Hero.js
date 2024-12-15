import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import ParticlesBackground from './ParticlesBackground';
import { Link } from 'react-scroll';

const Hero = () => {
  const images = [
    '/images/img3.jpg',
    '/images/img2.jpg',
    '/images/img1.jpg',

  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Particles Background */}
      <ParticlesBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Grid Layout for Content and Image */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-0 sm:justify-between align-center text-center  items-center">
          {/* Left Section: Content */}
          <div className="text-center sm:text-left">
            <motion.h1

              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500  bg-clip-text relative"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',  // Semi-transparent background
                backdropFilter: 'blur(10px)',  // Apply blur effect to the background
                borderRadius: '10px',  // Optional: Add rounded corners
                padding: '10px',  // Optional: Add some padding around the text
              }}
            // className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text"
            >
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                Hi, I'm Vasanth
              </span>

            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl sm:text-2xl md:text-3xl mb-8 text-gray-100 dark:text-gray-300"
            >
              <TypeAnimation
                sequence={[
                  'Frontend Developer',
                  2000,
                  'Tailwind Css',
                  2000,
                  'React Specialist',
                  2000,

                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow mx-auto sm:mx-0"
            >
              <Link
                to="projects" // The ID of the Projects section
                smooth={true} // Enables smooth scrolling
                duration={500} // Time for scroll (in ms)
                className="cursor-pointer"
              >
                View My Work
              </Link>
            </motion.button>
          </div>

          {/* Right Section: Animated Images */}
          <div className="flex justify-center sm:justify-start items-center relative">
            {/* Fixed Circle Container */}
            <div className="w-72  md:w-80 lg:w-[25rem] xl:w-[25rem] h-72  md:h-80 lg:h-[25rem] xl:h-[25rem] rounded-full overflow-hidden shadow-lg bg-black relative border-2 border-purple-900">
              {/* Image Transition */}
              <div className="relative w-full h-full">
                {/* Current Image */}
                <motion.img
                  key={`current-${currentImageIndex}`}
                  src={images[currentImageIndex]}
                  alt="Current Hero"
                  initial={{ x: 0, opacity: 1 }}
                  animate={{ x: -200, opacity: 0 }} // Move left
                  exit={{ x: -200, opacity: 0 }}
                  transition={{
                    duration: 1.5,
                    ease: 'easeInOut',
                  }}
                  className="absolute w-full h-full object-cover object-center rounded-full"
                />

                {/* Next Image */}
                <motion.img
                  key={`next-${(currentImageIndex + 1) % images.length}`}
                  src={images[(currentImageIndex + 1) % images.length]}
                  alt="Next Hero"
                  initial={{ x: 200, opacity: 0 }} // Start off-screen to the right
                  animate={{ x: 0, opacity: 1 }} // Move to center
                  exit={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 1.5,
                    ease: 'easeInOut',
                  }}
                  className="absolute w-full h-full object-cover object-center rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
