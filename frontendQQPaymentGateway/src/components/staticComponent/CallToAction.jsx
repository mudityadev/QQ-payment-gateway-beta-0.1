import React from 'react';

const CallToAction = () => {
  return (
    <div className="bg-white dark:bg-gray-900 py-24">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
     
        <div className="lg:w-1/2 text-white mb-6 lg:mb-0">
          <h1 className="text-5xl font-bold leading-tight mb-6">Experience Seamless Payments with Fiat and Crytocurrency</h1>
          <p className="text-lg">Empower Your Business with Fast, Secure, and Reliable Payment Solutions.</p>
          {/* <button className="bg-white text-blue-600 py-3 px-8 mt-6 rounded-full hover:bg-green-600 hover:text-white transition-colors duration-300 ease-in-out">Start Accepting Payments Today</button> */}
          <button className="bg-green-600 text-white py-3 px-8 mt-6 rounded-full hover:bg-green-700 hover:text-white-600 transition-colors duration-300 ease-in-out">Start Accepting Payments Today</button>

        </div>

        <div className="lg:w-1/3">
          <img src="/call.gif" alt="QQ Payment Gateway" />
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
