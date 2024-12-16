import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio',
      description: 'A personal website showcasing my work, skills, and projects. It demonstrates my web development capabilities.',
      image: '/images/Portfolio.png',
      tags: ['Html', 'React', 'Tailwind'],
    },
    {
      title: 'APPOLO CLONE',
      description: 'My demo project during training at NandalalaInfotech. A clone of the Apollo app, which demonstrates my skills with HTML, CSS, Bootstrap, and JavaScript.',
      image: '/images/Apollo.jpg',
      tags: ['Html', 'Css', 'Boostrap', 'Js'],
    },
    {
      title: 'EVANTO MARKET',
      description: 'A full-featured online shopping platform built with a frontend, replicating the functionality and look of the Envato Market.',
      image: '/images/market.jpg',
      tags: ['Html', 'Css', 'Boostrap', 'Js'],
    },
    {
      title: 'QUIZ-APP',
      description: 'An interactive quiz application that allows users to answer multiple questions with a score at the end.',
      image: '/images/Quiz.jpg',
      tags: ['Html', 'Css', 'Boostrap', 'Js'],
    },
    {
      title: 'WEATHER DASHBOARD',
      description: 'Real-time weather information with interactive maps, providing users with current weather updates and forecasts.',
      image: '/images/Weather.jpg',
      tags: ['Html', 'Css', 'Boostrap', 'Js'],
    },
    {
      title: 'RBAC-dashboard',
      description: 'RBAC stands for Role-Based Access Control, a method used in systems to restrict access to resources based on users roles.',
      image: '/images/dashboard.jpg',
      tags: ['Html', 'Css', 'Boostrap', 'Js'],
    },
  ];

  return (
    <section id="projects" className="py-20 cursor-pointer">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white dark:bg-gray-800 dark:text-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow animate__animated animate__bounceInfinite"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-indigo-100 text-indigo-600 dark:bg-indigo-600 dark:text-indigo-200 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
