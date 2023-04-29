import Link from 'next/link'
import React from 'react'
import 'tailwindcss/tailwind.css'

const payment_success = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Payment Successful</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <p>Your payment has been successfully processed. Thank you for your purchase!</p>
                <p>Expect an email confirmation with the order details and tracking information shortly.</p>
              </div>
              <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                <p>Need help or have any questions? <Link href="http://localhost:3001" className="text-blue-600 hover:text-blue-700">Continue</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default payment_success
