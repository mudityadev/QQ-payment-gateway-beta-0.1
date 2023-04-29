import React, { useState } from 'react';
import DashboardLayout from '../utils/DashboardLayout';
import { getUserFromLocalCookie } from '../../lib/auth';
import { fetcher } from '@/lib/api';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const SendMoney = () => {

  const [showPopup, setShowPopup] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const Spinner = () => {
    return (
      <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
    );
  };


  const handleSuccess = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      setShowToast(true);
      toast.success('Transaction successful!', {
        onClose: () => {
          setShowToast(false);
          // Reset the form data
          setFormData({
            recipientPublicAddress: '',
            amount: '',
            currency: 'BTC',
          });
        },
      });
    }, 2000);
  };


  const [formData, setFormData] = useState({
    recipientPublicAddress: '',
    amount: '',
    currency: 'BTC',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form...');
    const currentUser = await getUserFromLocalCookie();
    console.log('Current user:', currentUser);

    try {
      console.log('Sending request with data:', { ...formData, sender: currentUser });
      const response = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/transaction/send_money`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          currentUser: currentUser,
        }),
      });
      console.log('Request response:', response);
      console.log("hello moto");

      handleSuccess();
    } catch (error) {
      console.error('Error with request:', error);
      handleSuccess();

    }
  };


  return (
    // <DashboardLayout title="Send Money">
    //   <div className="w-full max-w-md mx-auto">
    //     <h1 class="text-4xl font-semibold text-center text-blue-600 bg-gradient-to-r from-blue-100 to-blue-200 py-4 px-6 rounded-lg shadow-lg">
    //       Send Money
    //     </h1>

    //     <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    //       <div className="mb-4">
    //         <label htmlFor="recipientPublicAddress" className="block text-gray-700 text-sm font-bold mb-2">
    //           Recipient Public Address:
    //         </label>
    //         <input
    //           type="text"
    //           name="recipientPublicAddress"
    //           value={formData.recipientPublicAddress}
    //           onChange={handleChange}
    //           required
    //           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //         />
    //       </div>

    //       <div className="mb-4">
    //         <label htmlFor="amount" className="block text-gray-700 text-sm font-bold mb-2">
    //           Amount:
    //         </label>
    //         <input
    //           type="number"
    //           name="amount"
    //           value={formData.amount}
    //           onChange={handleChange}
    //           required
    //           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //         />
    //       </div>

    //       <div className="mb-6">
    //         <label htmlFor="currency" className="block text-gray-700 text-sm font-bold mb-2">
    //           Currency:
    //         </label>
    //         <select
    //           name="currency"
    //           value={formData.currency}
    //           onChange={handleChange}
    //           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //         >
    //           <option value="BTC">BTC</option>
    //           <option value="ETH">ETH</option>
    //           <option value="LTC">LTC</option>
    //         </select>
    //       </div>

    //       <button
    //         type="submit"
    //         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    //       >
    //         Send
    //       </button>
    //     </form>

    //     {/* Popup */}
    //     {showPopup && (
    //       <div className="fixed inset-0 z-50 flex items-center justify-center">
    //         <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    //           <h2 className="text-2xl font-bold mb-6">Hang tight, your transaction is on its way!</h2>
    //           <p className="text-gray-700">We're zipping your payment through the interwebs at warp speed!</p>
    //           <div className="flex justify-center mt-6">
    //             <Spinner />
    //           </div>
    //         </div>
    //       </div>
    //     )}

    //     {/* Toast */}
    //     <ToastContainer
    //       position="top-left"
    //       autoClose={5000}
    //       hideProgressBar={false}

    //       newestOnTop={false}
    //       closeOnClick
    //       rtl={false}
    //       pauseOnFocusLoss
    //       draggable
    //       pauseOnHover
    //       theme="dark"

    //     />
    //   </div>
    // </DashboardLayout>
 
 
    <DashboardLayout title="Send Money">
      <div className="w-full max-w-md mx-auto">
        <h1 class="text-4xl font-semibold text-center text-gray-900 mb-8">
          Send Money
        </h1>

        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Fill in the details</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="recipientPublicAddress" className="block text-gray-700 text-sm font-bold mb-2">
                Recipient Public Address:
              </label>
              <input
                type="text"
                name="recipientPublicAddress"
                value={formData.recipientPublicAddress}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="amount" className="block text-gray-700 text-sm font-bold mb-2">
                Amount:
              </label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="currency" className="block text-gray-700 text-sm font-bold mb-2">
                Currency:
              </label>
              <select
                name="currency"
                value={formData.currency}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="BTC">BTC</option>
                <option value="ETH">ETH</option>
                <option value="LTC">LTC</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send
            </button>
          </form>
        </div>

        {/* Popup */}
        {showPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <h2 className="text-2xl font-bold mb-6">Hang tight, your transaction is on its way!</h2>
              <p className="text-gray-700">We're zipping your payment through the interwebs at warp speed!</p>
              <div className="flex justify-center mt-6">
                <Spinner />
              </div>
            </div>
          </div>
        )}

        {/* Toast */}
        <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </DashboardLayout>

 
    );
};

export default SendMoney;
