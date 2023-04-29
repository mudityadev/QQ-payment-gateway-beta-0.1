

import { IoCheckmarkDoneCircleSharp } from 'react-icons/io5';
import { GiCancel } from 'react-icons/gi';

const Transaction = ({ transaction }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
                <thead className="text-left bg-gray-50">
                    <tr>
                      
                        <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Amount
                        </th>
                        <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
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
                            Signature
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
                <tbody className="bg-white divide-y divide-gray-200">
                    {transaction &&
                        transaction.data.map((tran) => {
                            return (
                                <tr key={tran.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">{tran.attributes.amount}</td>
                                    
                                    {/* <td className="px-6 py-4 whitespace-nowrap">{tran.attributes.status}</td> */}
                                    <td className={`px-6 py-4 whitespace-nowrap ${tran.attributes.status === "Completed" ? "text-green-500" : "text-red-500"}`}>

                                    {/* <td className="px-6 py-4 whitespace-nowrap"> */}
                                        {tran.attributes.status === "Completed" ? (
                                            <IoCheckmarkDoneCircleSharp className="mr-2" />
                                        ) : (
                                            <GiCancel className="mr-2" />
                                        )}
                                        
                                        </td>

                                    <td className="px-6 py-4 whitespace-nowrap">{tran.attributes.currency}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{tran.attributes.receiver_public_key}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{tran.attributes.sender_public_key}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{tran.attributes.gas_fee}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{tran.attributes.nonce}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <a href={`tran${tran.id}`}>{tran.attributes.signature}</a>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">{tran.attributes.transaction_id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{tran.attributes.block_number}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{tran.attributes.timestamp}</td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </div>
    );
                    };


export default Transaction;