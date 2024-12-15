import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJs, faHtml5, faCss3, faGit, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
    const skills = [
        { name: 'HTML5', icon: faHtml5, color: 'text-red-500', description: 'The markup language for creating web content.' },
        { name: 'CSS3', icon: faCss3, color: 'text-blue-400', description: 'A stylesheet language for designing web pages.' },
        { name: 'Bootstrap', icon: faBootstrap, color: 'text-primary', description: 'A framework for building responsive, mobile-first websites.' },
        { name: 'Tailwind CSS', icon: faCss3, color: 'text-teal-400', description: 'A utility-first CSS framework for rapid UI development.' },
        { name: 'JavaScript', icon: faJs, color: 'text-yellow-500', description: 'A versatile programming language for the web.' },
        { name: 'React', icon: faReact, color: 'text-blue-500', description: 'A JavaScript library for building user interfaces.' },
        { name: 'SQL', icon: faReact, color: 'text-indigo-500', description: 'A language to query and manipulate databases.' },
        { name: 'Java', icon: faReact, color: 'text-orange-600', description: 'A versatile object-oriented programming language.' },
        { name: 'Git', icon: faGit, color: 'text-red-600', description: 'A version control system for tracking changes in code.' },
    ];

    // Track when the Skills section comes into view
    const { ref, inView } = useInView({
        triggerOnce: true, // Ensures the animation triggers only once when entering the view
        threshold: 0.3,    // Triggers when 30% of the section is visible in the viewport
    });

    return (
        <section
            id="skills" className="py-20 cursor-pointer">
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <motion.h2
                    className="text-3xl font-bold text-center text-gray-100 dark:text-gray-100 mb-12"
                    initial={{ opacity: 0, x: -100 }} // Start position off-screen to the left
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1 }}
                    ref={ref}
                >
                    Skills & Technologies
                </motion.h2>

                {/* Skill Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl dark:bg-gray-800 dark:shadow-gray-900 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-700"
                            initial={{ opacity: 0, x: -100 }} // Cards start off-screen to the left
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,  // Staggered animation based on the index
                            }}
                            ref={ref}
                        >
                            <FontAwesomeIcon
                                icon={skill.icon}
                                className={`text-5xl ${skill.color} mb-4`}
                            />
                            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">{skill.name}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center">{skill.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
