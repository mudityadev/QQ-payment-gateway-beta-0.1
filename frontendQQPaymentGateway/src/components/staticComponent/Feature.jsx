import React from 'react';
import { FaCreditCard, FaLock, FaMobileAlt, FaChartLine, FaGlobe, FaDollarSign } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';

const Feature = () => {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center">
            
            <div className="container mx-auto p-8">
                <h1 className="text-3xl font-bold mb-6 text-center">QQ Payment Gateway</h1>
                <p className="text-gray-700 mb-10 text-center">
                    Experience seamless and secure online payments with QQ Payment Gateway. Our platform
                    helps you grow your business by accepting a wide range of payment methods and providing
                    essential tools for seamless integration.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            <FaCreditCard size={24} className="text-blue-600 mr-4" />
                            <h2 className="font-semibold text-lg">Easy Payments</h2>
                        </div>
                        <p className="text-gray-600">
                            Accept payments from various channels including credit cards, debit cards, and
                            mobile wallets with ease.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            <FaLock size={24} className="text-blue-600 mr-4" />
                            <h2 className="font-semibold text-lg">Secure Transactions</h2>
                        </div>
                        <p className="text-gray-600">
                            State-of-the-art security features, including PCI DSS compliance and advanced fraud
                            detection, to protect your payments.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            <FaMobileAlt size={24} className="text-blue-600 mr-4" />
                            <h2 className="font-semibold text-lg">Mobile Friendly</h2>
                        </div>
                        <p className="text-gray-600">
                            Fully responsive and optimized for mobile devices, ensuring a seamless checkout
                            experience for your customers.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            <FaChartLine size={24} className="text-blue-600 mr-4" />
                            <h2 className="font-semibold text-lg">Grow Your Business</h2>
                        </div>
                        <p className="text-gray-600">
                            Access detailed reporting and analytics to better understand your customers and
                            make data-driven decisions.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            <FaGlobe size={24} className="text-blue-600 mr-4" />
                            <h2 className="font-semibold text-lg">Global Reach</h2>
                        </div>
                        <p className="text-gray-600">
                            Accept payments in multiple currencies and expand your business worldwide with our
                            global payment processing capabilities.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            <FaDollarSign size={24} className="text-green-600 mr-4" />
                            <h2 className="font-semibold text-lg">Seamless Transactions</h2>
                        </div>
                        <p className="text-gray-600">
                     With our easy-to-use dashboard, you can track your transactions, manage refunds and chargebacks, and gain valuable insights into your sales data.
                        </p>
                    </div> 


                    
                </div>
            </div>
        </div>
    );
};

export default Feature;
