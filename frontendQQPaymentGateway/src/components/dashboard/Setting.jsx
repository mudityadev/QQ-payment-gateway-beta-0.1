import React from 'react';
import DashboardLayout from '../utils/DashboardLayout';

const Setting = () => {
  return (
    <DashboardLayout title="Setting">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-9/12 xl:w-8/12 my-6 px-6">
            <div className="bg-white rounded-lg shadow-lg">
              <div className="px-8 py-6">
                <h1 className="text-2xl font-semibold mb-6">Settings</h1>
                <form>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm mb-2" htmlFor="name">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Your email"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm mb-2" htmlFor="password">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="********"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm mb-2" htmlFor="confirmPassword">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="********"
                    />
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Setting;
