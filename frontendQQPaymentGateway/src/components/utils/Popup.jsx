import React from 'react';

const Popup = ({ title, message, onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            <div className="relative w-10/12 md:w-1/2 lg:w-1/3 bg-white rounded-lg p-6 shadow-lg">
                <div className="text-right">
                    <button
                        className="text-gray-400 hover:text-gray-600 focus:outline-none"
                        onClick={onClose}
                    >
                        &times;
                    </button>
                </div>
                <div className="mt-4">
                    <h3 className="text-lg font-bold">{title}</h3>
                    <p className="mt-2">{message}</p>
                </div>
                <div className="mt-8 text-right">
                    <button
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 focus:outline-none"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Popup;
