import React, { useState, Fragment } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Dialog, Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faCertificate, faTimes } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Animation will trigger every time the cards come into view.
    threshold: 0.2, // Trigger when 20% of the cards are visible.
  });

  const [modalInfo, setModalInfo] = useState({
    isOpen: false,
    type: '',
    data: '',
  });

  const openModal = (type) => {
    const data = {
      education: "B.Tech in Information Technology from Oxford Engineering College, Trichy",
      profession: "Currently working as a Junior Software Developer at Nandalalainfotech.",
      certifications: "Completed Full Stack Java Development from Besant Technologies, Chennai.",
    };

    setModalInfo({
      isOpen: true,
      type,
      data: data[type],
    });
  };

  const closeModal = () => {
    setModalInfo({ ...modalInfo, isOpen: false });
  };

  return (
    <section
      id="about"
      className="py-20">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.h2
          className="text-3xl font-bold text-center text-gray-100 dark:text-gray-100 mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {['education', 'profession', 'certifications'].map((type, index) => (
            <motion.div
              key={type}
              ref={ref}
              className="flex flex-col justify-center items-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow cursor-pointer"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onClick={() => openModal(type)}
            >
              <FontAwesomeIcon
                icon={type === 'education' ? faGraduationCap : faCertificate}
                className={`text-6xl ${type === 'education' ? 'text-purple-500' : type === 'profession' ? 'text-green-500' : 'text-indigo-500'
                  } mb-4`}
              />
              <h3 className="text-2xl font-bold mb-4 capitalize text-gray-800 dark:text-gray-200">
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-400">
                Click to view my {type}.
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Info Modal */}
      <Transition appear show={modalInfo.isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 dark:text-white mb-4"
                  >
                    {modalInfo.type.charAt(0).toUpperCase() + modalInfo.type.slice(1)}
                  </Dialog.Title>
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                  <div className="mt-2">
                    <p className="text-gray-600 dark:text-gray-300">
                      {modalInfo.data || "Content coming soon..."}
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
};

export default About;
