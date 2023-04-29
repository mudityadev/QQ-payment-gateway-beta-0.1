import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';

const Footer = () => {
  return (
    <div className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">QQ Payment Gateway</h2>
            <p className="text-gray-300">
              Experience seamless and secure online payments with QQ Payment Gateway.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">Pricing</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">Features</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">Support</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Connect with Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <hr className="my-8 border-t border-gray-800" />

        <div className="text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} QQ Payment Gateway. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
