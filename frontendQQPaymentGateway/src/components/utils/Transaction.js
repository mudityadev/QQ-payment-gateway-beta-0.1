import { IoCheckmarkDoneCircleSharp } from 'react-icons/io5';
import { GiCancel } from 'react-icons/gi';
import Link from 'next/link';
import { useState } from 'react';

const Transaction = ({ transaction }) => {
    const [showSignature, setShowSignature] = useState(false);
    const [clickedId, setClickedId] = useState(null);

    const [showNonce, setShowNonce] = useState(false);
    const [clickedNonceId, setClickedNonceId] = useState(null);

    const handleClickNonce = (id) => {
        if (id === clickedNonceId) {
            setShowNonce(!showNonce);
        } else {
            setShowNonce(true);
            setClickedNonceId(id);
        }

        if (!showNonce) {
            setTimeout(() => {
                setShowNonce(false);
                setClickedNonceId(null);
            }, 5000);
        }
    };




    const handleClick = (id) => {
    if (id === clickedId) {
        setShowSignature(!showSignature);
    } else {
        setShowSignature(true);
        setClickedId(id);
    }

    if (!showSignature) {
        setTimeout(() => {
            setShowSignature(false);
            setClickedId(null);
        }, 5000);
    }
};


    const [toastMessage, setToastMessage] = useState(null);

    const showToast = (message) => {
        setToastMessage(message);
        setTimeout(() => {
            setToastMessage(null);
        }, 3000);
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(
            () => {
                console.log('Copied to clipboard:', text);
                showToast(`Address copied: ${text}`);
            },
            (err) => {
                console.error('Failed to copy text: ', err);
            }
        );
    };



    return (
           <>
        { toastMessage && (
            <div className="fixed top-4 right-4 bg-green-500 text-black py-2 px-4 rounded-lg shadow-md transition duration-500 ease-in-out">
                {toastMessage}
            </div>
        )}
        <div className="overflow-x-auto">
            <table className="min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-50">
                    <tr className="text-left">
                        <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Amount
                        </th>
                        <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                        </th>
                        <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Signature
                        </th>
                        <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Currency
                        </th>
                        <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Receiver
                        </th>
                        <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Sender
                        </th>
                        <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Gas Fee
                        </th>
                        <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Nonce
                        </th>
                        <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Transaction ID
                        </th>
                        <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Block Number
                        </th>
                        <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Timestamp
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {transaction &&
                        transaction.data.map((tran) => {
                            return (
                                <tr key={tran.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {tran.attributes.amount}
                                    </td>
                                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${tran.attributes.status === 'Completed' ? 'text-green-500' : 'text-red-500'}`}>
                                        {tran.attributes.status === 'Completed' ? (
                                            <IoCheckmarkDoneCircleSharp className="mr-2 inline-block" />
                                        ) : (
                                            <GiCancel className="mr-2 inline-block" />
                                        )}
                                        {tran.attributes.status}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        <div className="relative">
                                            {clickedId === tran.id && showSignature ? (<span className="block text-gray-700 font-mono">{tran.attributes.signature}</span>
                                            ) : (
                                                <button
                                                    onClick={() => handleClick(tran.id)}
                                                    className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                >
                                                    {clickedId === tran.id && !showSignature ? 'Show signature' : 'Hide signature'}
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {tran.attributes.currency}
                                    </td>
                                  
                                    <td
                                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 cursor-pointer hover:bg-gray-100"
                                        onClick={() => copyToClipboard(tran.attributes.receiver_public_key)}
                                    >
                                        {tran.attributes.receiver_public_key}
                                    </td>
                                    <td
                                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 cursor-pointer hover:bg-gray-100"
                                        onClick={() => copyToClipboard(tran.attributes.sender_public_key)}
                                    >
                                        {tran.attributes.sender_public_key}
                                    </td>


                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {tran.attributes.gas_fee}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <div className="relative">
                                            {clickedNonceId === tran.id && showNonce ? (
                                                <span className="block text-gray-700 font-mono">{tran.attributes.nonce}</span>
                                            ) : (
                                                <button
                                                    onClick={() => handleClickNonce(tran.id)}
                                                    className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                >
                                                    {clickedNonceId === tran.id && !showNonce ? 'Show nonce' : 'Hide nonce'}
                                                </button>
                                            )}
                                        </div>
                                    </td>

                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
                                        <Link href={`transaction/${tran.id}`}>
                                            {tran.attributes.transaction_id}
                                        </Link>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {tran.attributes.block_number}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {tran.attributes.timestamp}
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </div>
        </>
    );
};


export default Transaction;