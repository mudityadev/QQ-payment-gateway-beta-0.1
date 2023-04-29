import React, { useState, useEffect } from 'react';
import DashboardLayout from '../utils/DashboardLayout';
import { getUserFromLocalCookie } from '../../lib/auth';
import { fetcher } from '@/lib/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Wallet = () => {
  const [wallet, setWallet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showFullPrivateAddress, setShowFullPrivateAddress] = useState(false);
  const [showBlur, setShowBlur] = useState(true);

  useEffect(() => {
    const fetchWallet = async () => {
      try {
        setLoading(true);
        const currentUser = await getUserFromLocalCookie();
        console.log('Current user:', currentUser);

        const token = currentUser.jwt;
        const response = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/wallets/get_wallet`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify({
            currentUser: currentUser,
          }),
        });
        console.log(currentUser);
        setWallet(response);
      } catch (error) {
        console.error('Error fetching wallet:', error);
        // setWallet(response);
      } finally {
        setLoading(false);
      }
    };

    fetchWallet();
  }, []);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast('Copied Public Address!', {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 2000,
    });
  };

  const togglePrivateAddress = () => {
    setShowFullPrivateAddress(!showFullPrivateAddress);
  };

  const toggleBlur = () => {
    setShowBlur(!showBlur);
  };

  return (
    <DashboardLayout title="Wallet">

      <div className="w-full max-w-md mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Wallet</h1>
        {loading ? (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-600"></div>
          </div>
        ) : (
          wallet && (
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <p className="mb-4 text-lg font-semibold text-gray-700">
                Amount: <span className="text-gray-600">{wallet.amount.toFixed(8)}</span>
              </p>
              <p className="mb-4 text-lg font-semibold text-gray-700">
                Public Address:{' '}
                <span
                  className="text-gray-600 cursor-pointer"
                  onClick={() => copyToClipboard(wallet.public_address)}
                >
                  {wallet.public_address.slice(0, 10)}...
                </span>
              </p>
              <p className="mb-4 text-lg font-semibold text-gray-700">
                Private Address:{' '}
                <span
                  className={`text-gray-600 cursor-pointer ${showBlur ? 'blur' : ''}`}
                  onClick={toggleBlur}
                >
                  {showFullPrivateAddress
                    ? wallet.private_address
                    : wallet.private_address.slice(0, 5) + '...'}
                </span>
              </p>
              <p className="text-lg font-semibold text-gray-700">
                Passphrase:{' '}
                <span className={`text-gray-600 ${showBlur ? 'blur' : ''}`}>{wallet.passphrase}</span>
              </p>
            </div>
          )
        )}
      </div>
      <ToastContainer />
    </DashboardLayout>
  );
};

export default Wallet;