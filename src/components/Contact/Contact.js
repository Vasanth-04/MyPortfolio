import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-20 relative z-10  dark:from-gray-800 dark:to-gray-900"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8">
          Get In Touch
        </h2>
        <div className="space-y-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300 hover:shadow-md dark:bg-gray-700 dark:text-gray-300"
            />
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300 hover:shadow-md dark:bg-gray-700 dark:text-gray-300"
            />
          </div>

          {/* Message Input */}
          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300 hover:shadow-md dark:bg-gray-700 dark:text-gray-300"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="button"
              className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-500 transition duration-300 transform hover:scale-105 cursor-pointer"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
