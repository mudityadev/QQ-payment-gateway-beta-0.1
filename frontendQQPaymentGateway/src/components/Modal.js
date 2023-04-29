import Image from 'next/image';
import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';

const Modal = ({ showModal, closeModal, handleChange, handleSubmit }) => {
    if (!showModal) {
        return null;
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96 relative">
                <button
                    onClick={closeModal}
                    className="absolute top-2 right-2 text-gray-800 hover:text-gray-500 text-2xl"
                >
                    <MdClose />
                </button>

                <div className="flex justify-center mb-6">
                    {/* <AiOutlineUser className="text-green-600 text-6xl" /> */}
                    {/* <Image src="/logo.png" alt="QQ Payment Logo" width={100} height={100} /> */}
                    {/* <Image src="/l1.gif" alt    ="QQ Payment Logo" width={200} height={200} /> */}
                    <Image src="/l1.gif" alt="QQ Payment Logo" width={200} height={200} />

                </div>

                <form onSubmit={handleSubmit} className="form-inline">
                    <div className="mb-4">
                        <input
                            type="text"
                            name="identifier"
                            onChange={handleChange}
                            placeholder="Username"
                            className="w-full px-4 py-2 form-input text-gray-800 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            placeholder="Password"
                            className="w-full px-4 py-2 form-input text-gray-800 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
                            required
                        />
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button
                            className="px-4 py-2 font-semibold text-white bg-green-600 rounded hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75"
                            type="submit"
                        >
                            Login
                        </button>

                        <button
                            className="px-4 py-2 font-semibold text-white bg-red-600 rounded hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75"
                            type="submit"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;
