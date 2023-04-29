import Layout from '@/components/utils/Layout';
import { fetcher } from '@/lib/api';
import React from 'react'
import { useState } from 'react';


const Transaction = ({ trans }) => {
    const { attributes } = trans;
    const [showTransactionID, setShowTransactionID] = useState(false);
    const [toastMessage, setToastMessage] = useState(null);

    const handleClickTransactionID = () => {
        setShowTransactionID(true);
        setToastMessage(`Transaction ID: ${attributes.transaction_id}`);
        setTimeout(() => {
            setToastMessage(null);
            setShowTransactionID(false);
        }, 3000);
    };

    return (
        <Layout title={attributes.transaction_id}>
            {toastMessage && (
                <div className="fixed top-4 right-4 bg-green-500 text-white py-2 px-4 rounded-lg shadow-md transition duration-500 ease-in-out">
                    {toastMessage}
                </div>
            )}
            <div className="flex justify-center min-h-screen p-4">
                <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-4xl">
                    <h1 className="text-3xl font-bold mb-8 text-center">
                        Transaction ID:{' '}
                        <button
                            onClick={handleClickTransactionID}
                            className="text-green-600 bg-green-100 rounded p-1 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                            <span className={showTransactionID ? 'hidden' : 'block'}>••••••••••</span>
                        </button>
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold text-blue-600">Transaction Details</h2>
                            <div className="space-y-2">

                                <div className="flex justify-between">
                                    <span className="font-semibold">Amount:</span>
                                    <span>{attributes.amount} {attributes.currency}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-semibold">Status:</span>
                                    <span>{attributes.status}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-semibold">Gas Fee:</span>
                                    <span>{attributes.gas_fee} {attributes.currency}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-semibold">Nonce:</span>
                                    <span>{attributes.nonce}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-semibold">Signature:</span>
                                    <span>{attributes.signature}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-semibold">Block Number:</span>
                                    <span>{attributes.block_number}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-semibold">Timestamp:</span>
                                    <span>{new Date(attributes.timestamp).toLocaleString()}</span>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold text-red-600">Public Keys</h2>

                            <div className="space-y-2">
                                <div className="flex flex-col">
                                    <span className="font-semibold">Receiver Public Key:</span>
                                    <span className="text-xs break-all">{attributes.receiver_public_key}</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-semibold">Sender Public Key:</span>
                                    <span className="text-xs break-all">{attributes.sender_public_key}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};


export async function getServerSideProps({ params }) {
    const { slug } = params;
    // /api/slugify / slugs /: modelName /: slug


    const transResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/transactions/${slug}`);

    return {
        props: {
            trans: transResponse.data
        }
    }
}

export default Transaction;
