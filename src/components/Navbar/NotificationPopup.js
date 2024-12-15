import React, { useState, useEffect } from 'react';

const NotificationPopup = ({ closePopup }) => {
    const [recipient, setRecipient] = useState('');
    const [message, setMessage] = useState('');
    const [formError, setFormError] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false); // Track if the message is sent

    // Close the modal if the user clicks outside of it or presses the Escape key
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                closePopup();
            }
        };

        // Add event listener for Escape key press
        document.addEventListener('keydown', handleEscape);

        return () => {
            // Clean up the event listener when the component unmounts
            document.removeEventListener('keydown', handleEscape);
        };
    }, [closePopup]);

    // Close the modal if the user clicks outside of it
    const handleOutsideClick = (event) => {
        if (event.target === event.currentTarget) {
            closePopup();
        }
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent page refresh

        // Check if the recipient or message is empty
        if (!recipient || !message) {
            setFormError('Both fields are required!');
        } else {
            setFormError(''); // Clear error if validation passes
            setIsSubmitted(true); // Set the form as submitted
            setRecipient(''); // Clear the fields
            setMessage('');
        }
    };

    return (
        <div
            className="fixed inset-0 flex items-start justify-end z-50 bg-black bg-opacity-50 backdrop-blur-sm h-screen"
            onClick={handleOutsideClick} // Close on outside click
        >
            <div
                className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg shadow-lg w-full max-w-md py-4 px-6 absolute top-16 right-8"
                onClick={(e) => e.stopPropagation()} // Prevent click from bubbling to the outer div
            >
                {/* Modal Header */}
                <div className="flex justify-between items-center">
                    <h1 className="text-lg font-semibold">"Is there anything you'd like to know?"</h1>
                    <button
                        type="button"
                        className="text-gray-600 dark:text-gray-300"
                        onClick={closePopup} // Close the popup when clicked
                    >
                        <span className="text-2xl">&times;</span>
                    </button>
                </div>

                {/* Modal Body */}
                <div className="mt-4">
                    {isSubmitted ? (
                        // Show success message after submission
                        <div className="text-center text-green-500">
                            <p>Thank you for your message!</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="recipient-name" className="block text-sm text-gray-600 dark:text-gray-300">
                                    Your Name:
                                </label>
                                <input
                                    type="text"
                                    id="recipient-name"
                                    value={recipient}
                                    onChange={(e) => setRecipient(e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 border dark:text-black border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message-text" className="block text-sm text-gray-600 dark:text-gray-300">
                                    Your Message:
                                </label>
                                <textarea
                                    id="message-text"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 dark:text-black border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                                ></textarea>
                            </div>

                            {/* Display form error */}
                            {formError && <p className="text-red-500 text-sm">{formError}</p>}

                            <div className="mt-4 flex justify-end space-x-4">
                                <button
                                    type="button"
                                    className="py-2 px-4 bg-gray-300 text-gray-700 rounded-md dark:bg-gray-700 dark:text-gray-300"
                                    onClick={closePopup} // Close the popup when clicked
                                >
                                    Close
                                </button>
                                <button
                                    type="submit"
                                    className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500"
                                >
                                    Send message
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NotificationPopup;
