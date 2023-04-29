import React from 'react'
import { FaCheckCircle, FaCreditCard, FaMobileAlt, FaHandshake } from 'react-icons/fa'

const HowWork = () => {
    return (
            <div class="bg-white p-6">

            <h2 className="text-3xl font-semibold text-center mb-8">How QQ Payment Gateway Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div className="flex flex-col items-center text-center">
                    <FaCreditCard className="text-4xl text-green-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Accept Payments</h3>
                    <p>Accept all major credit cards and digital payments from your customers seamlessly.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <FaMobileAlt className="text-4xl text-red-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Mobile-Friendly</h3>
                    <p>Enable your customers to make secure transactions from their mobile devices anytime, anywhere.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <FaHandshake className="text-4xl text-black-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Expand Your Business</h3>
                    <p>Attract more customers by offering a variety of payment options and expanding your reach.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <FaCheckCircle className="text-4xl text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
                    <p>Keep your transactions safe and secure with our robust security measures and fraud prevention tools.</p>
                </div>
            </div>
        </div>
    )
}

export default HowWork;