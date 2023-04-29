import React from 'react';
import DashboardLayout from '../utils/DashboardLayout';

const SellProduct = () => {
  return (
    <DashboardLayout title="Sell Product">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow-md rounded-lg p-8">
          <form className="space-y-6">
            <div>
              <label htmlFor="ProductName" className="block text-sm font-medium text-gray-700 mb-2">
                Store Name
              </label>
              <input
                id="StoreName"
                name="StoreName"
                type="text"
                autoComplete="off"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-900 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your Store name"
              />

            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Store Description
              </label>
              <textarea
                id="description"
                name="description"
                rows="4"
                className="mt-1 block w-full px-3 py-2 border border-gray-900 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-500 sm:text-sm"
                placeholder="Store Description"

                defaultValue={''}
              />
            </div>
            <div>
              <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-2">
                Store Type
              </label>
              <select
                id="ProductType"
                name="ProductType"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-900 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-500 sm:text-sm"

              >
                <option>Retail</option>
                <option>Service</option>
                <option>Food & Beverage</option>
                <option>Other</option>
              </select>
            </div>
           
           
            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Set Up Store
              </button>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
};


export default SellProduct;