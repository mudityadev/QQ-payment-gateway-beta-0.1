import React, { useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import 'tailwindcss/tailwind.css';
import DashboardLayout from '@/components/utils/DashboardLayout';
import Head from 'next/head';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import { getUserFromLocalCookie } from '@/lib/auth';
import { fetcher } from '@/lib/api';

const Checkout = () => {
  const router = useRouter();
  const { session_id } = router.query;
  const publish_id = router.query.publish_id;
  const total_price = router.query.total_price;

  const [loggedInUser, setLoggedInUser] = useState({
    name: '',
    balance: 204.600000,
  });

  const [paymentMethod, setPaymentMethod] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      const currentUser = await getUserFromLocalCookie();
      setLoggedInUser({
        name: currentUser,
        balance: 204.600000,
      });
    };

    fetchUserData();
  }, []);




  // Handle the payment process
  const handlePayment = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      toast.success('Payment processed successfully!');
    }, 2000);
  };

  // Handle success response
  const handleSuccess = (response) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success(`Transaction successful!`, {
        autoClose: 10000,
        onClose: () => {
          // Redirect to "http://localhost:3001" after 10 seconds
          window.location.href = "http://localhost:3000/payment_success";
        },
      });
    }, 2000);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form...');
    const currentUser = await getUserFromLocalCookie();
    console.log('Current user:', currentUser);

    try {
      console.log('Sending request with data:', {
        recipientPublicAddress: publish_id,
        amount: total_price,
        // sender: currentUser,
        sender: currentUser,
      });
      const response = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/transaction/send_money`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          currentUser: currentUser,
          recipientPublicAddress: publish_id,
          amount: total_price,
          currency: 'BTC',
        }),
      });
      console.log('Request response:', response);

      handleSuccess(response);
    } catch (error) {
      console.error('Error with request:', error);
    }
  };

  return (
    <>
      <Head>
        <title>Checkout | QQ Pay</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Secure and fast QQ Payment Gateway" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="bg-gray-100 min-h-screen text-black flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4">Checkout | QQ Pay</h1>
          <p className="mb-2">Session ID: {publish_id}</p>
          <p className="mb-4">Price: ${total_price}</p>
          <div className="flex items-center mb-4">
            <input
              type="radio"
              name="paymentMethod"
              id="card"
              value="card"
              checked={paymentMethod === 'card'}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="mr-2"
            />
            <label htmlFor="card">Pay with Credit Card</label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="radio"
              name="paymentMethod"
              id="account"
              value="account"
              checked={paymentMethod === 'account'}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="mr-2"
            />
            <label htmlFor="account">Pay with Logged In Account</label>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded mb-4 w-full"
          >
            Open Payment Form
          </button>

          <Transition appear show={isOpen} as={React.Fragment}>
            <Dialog
              as="div"
              className="fixed inset-0 z-10 overflow-y-auto"
              onClose={() => setIsOpen(false)}
            >
              <div className="min-h-screen px-4 text-center">
                <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

                <span
                  className="inline-block h-screen align-middle"
                  aria-hidden="true"
                >
                  &#8203;
                </span>

                <div className="inline-block text-black w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Payment Form
                  </Dialog.Title>

                  {paymentMethod === 'card' && (
                    <div className="mt-4">
                      <input
                        type="text"
                        placeholder="Card Number"
                        className="border p-2 mb-2 w-full"
                      />
                      <input
                        type="text"
                        placeholder="Expiry Date"
                        className="border p-2 mb-2 w-full"
                      />
                      <input
                        type="text"
                        placeholder="CVV"
                        className="border p-2 mb-4 w-full"
                      />
                    </div>
                  )}

                  {paymentMethod === 'account' && (
                    <div className="mt-4">
                      <p>Name: {loggedInUser.name}</p>
                      <p>Balance: ${loggedInUser.balance.toFixed(2)}</p>
                    </div>
                  )}

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={handleSubmit}
                    >
                      {isLoading ? 'Processing Transaction...' : 'Make Payment'}
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 ml-2 text-sm font-medium text-gray-700 bg-gray-100 border border-transparent rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500"
                      onClick={() => setIsOpen(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </Dialog>
          </Transition>

          <ToastContainer
            className="toast-container"
            position="top-left"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />

        </div>
      </div>
    </>
  )
}

export default Checkout


