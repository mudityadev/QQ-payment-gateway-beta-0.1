import React, { useState, useEffect } from 'react';
import DashboardLayout from '../utils/DashboardLayout';
import { useFetchUser } from '@/lib/authContext';
import { getUserFromLocalCookie } from '../../lib/auth';
import { fetcher } from '@/lib/api';
import { FaBuilding, FaCalendarAlt, FaInfoCircle, FaTag } from 'react-icons/fa';
import Image from 'next/image';

const MerchantAccount = () => {
  const { user, loading } = useFetchUser();
  const [businessInfo, setBusinessInfo] = useState(null);
  const [fetchError, setFetchError] = useState(null);


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newBusinessName, setNewBusinessName] = useState('');

  const createMerchantAccount = async () => {
    try {
      const currentUser = await getUserFromLocalCookie();
      const response = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/merchant`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          takeUser: currentUser,
          business_name: newBusinessName,
        }),
      });

      // Show success message
      alert('Merchant Account created successfully, now you can take payments');
      // Close the modal
      setIsModalOpen(false);
      // Refetch the business info
      fetchBusinessInfo();
    } catch (error) {
      console.error(error);
      alert('An error occurred while creating the merchant account');
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };


  const closeModal = () => {
    setIsModalOpen(false);
  };




  useEffect(() => {
    const fetchBusinessInfo = async () => {
      if (user && !loading) {
        const currentUser = await getUserFromLocalCookie();
        try {
          const response = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/merchant/getBusinessInfo`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              currentUser: currentUser,
            }),
          });
          setBusinessInfo(response);
        } catch (error) {
          setFetchError();
        }
      }
    };
    fetchBusinessInfo();
  }, [user, loading]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <DashboardLayout title="Merchant Account">
      <div className="w-full max-w-md mx-auto">
        {fetchError ? (
          <div className="text-center text-red-500 mb-4">
            An error occurred: {fetchError.message}
          </div>
        ) : null}
        {businessInfo ? (

          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Business Information</h2>
            <div className="flex items-center mb-4">
              <FaBuilding className="mr-3 text-blue-600" />
              <p>
                <strong>Business Name:</strong> {businessInfo.business_name}
              </p>
            </div>
            <div className="flex items-center mb-4">
              <FaInfoCircle className="mr-3 text-blue-600" />
              <p>
                <strong>Description:</strong> {businessInfo.description || 'Not provided'}
              </p>
            </div>
            <div className="flex items-center mb-4">
              <FaTag className="mr-3 text-blue-600" />
              <p>
                <strong>Category:</strong> {businessInfo.category || 'Not provided'}
              </p>
            </div>
            <div className="flex items-center mb-4">
              <FaCalendarAlt className="mr-3 text-blue-600" />
              <p>
                <strong>Created At:</strong> {new Date(businessInfo.createdAt).toLocaleString()}
              </p>
            </div>
            <div className="flex items-center">
              <FaCalendarAlt className="mr-3 text-blue-600" />
              <p>
                <strong>Updated At:</strong> {new Date(businessInfo.updatedAt).toLocaleString()}
              </p>
            </div>
          </div>

        ) : (
         
         
          <div className="text-center text-gray-900 my-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute left-0 top-0 m-2"
                onClick={openModal}
              >
                Create Merchant Account
              </button>

            <Image
              src="/saving.png"
              alt="Image"
              width={2000}
              height={2000}
              className="rounded-full"
            />

            <h1 className="text-xl font-bold text-center py-8 bg-green-300">
              Open Business Account today with QQ Pay
            </h1>
         
          </div>
  //  {isModalOpen && (
  //         <div className="fixed inset-0 flex items-center justify-center z-50">
  //           <div className="bg-white rounded p-8 w-full max-w-md">
  //             <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
  //               Create Merchant Account
  //             </h2>
  //             <label htmlFor="businessName" className="block text-gray-700 text-sm font-bold mb-2">
  //               Business Name
  //             </label>
  //             <input
  //               type="text"
  //               id="businessName"
  //               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  //               value={newBusinessName}
  //               onChange={(e) => setNewBusinessName(e.target.value)}
  //             />
  //             <div className="flex items-center justify-between mt-6">
  //               <button
  //                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  //                 onClick={createMerchantAccount}
  //               >
  //                 Create
  //               </button>
  //               <button
  //                 className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
  //                 onClick={closeModal}
  //               >
  //                 Cancel
  //               </button>
  //             </div>
  //           </div>
  //         </div>
        )}


      </div>
    </DashboardLayout>
  );
};

export default MerchantAccount;