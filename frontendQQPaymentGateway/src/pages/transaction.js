import { fetcher } from '@/lib/api';
import Layout from '../components/utils/Layout.jsx'
import Tran from '@/components/utils/Transaction.js';
import useSWR from 'swr';
import { useState, useEffect } from 'react';
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import { useFetchUser } from '@/lib/authContext';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Transaction = ({ transaction }) => {
    const { user, loading } = useFetchUser();

    const [pageIndex, setPageIndex] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [messageVisible, setMessageVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setMessageVisible(false);
        }, 10000);
        return () => clearTimeout(timer);
    }, []);


    const { data } = useSWR(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/transactions?pagination[page]=${pageIndex}&pagination[pageSize]=10`,
        (url) => fetcher(url).then((res) => {
            setIsLoading(false);
            return res;
        }),
        {
            fallbackData: transaction,
        }
    );

    return (
   
        <Layout user={user} title="Transaction">
            <div className="p-4">


                <div
                    className={`bg-red-500 text-white py-3 px-6 rounded-md my-2 shadow-md ${messageVisible ? 'visible' : 'invisible'} `}
                    style={{
                        opacity: messageVisible ? 1 : 0,
                        transform: messageVisible ? 'translateY(0)' : 'translateY(-100%)',
                        transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
                        display: messageVisible ? 'block' : 'none', // added display property
                    }}
                >
                    <p className="text-lg font-medium">
                        Your transactions are being processed in real-time for your convenience and safety. Please feel free to proceed with confidence.
                    </p>
                </div>



                <div className="flex justify-left space-x-4 mt-8">
                    <button
                        className={`flex items-left justify-left px-6 py-2 rounded-md font-medium text-white ${pageIndex === 1
                            ? 'bg-gray-800 cursor-not-allowed'
                            : 'bg-red-600 hover:bg-red-700'
                            }`}
                        onClick={() => setPageIndex(pageIndex - 1)}
                        disabled={pageIndex === 1}
                    >
                        <span className="mr-2">
                            <svg
                                className="w-4 h-4 fill-current"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M15 19L8 12L15 5" />
                            </svg>
                        </span>
                        Previous
                    </button>
                    <span className="self-center">
                        {pageIndex} of {data && data.meta.pagination.pageCount}
                    </span>
                    <button
                        className={`flex items-center justify-center px-6 py-2 rounded-md font-medium text-white ${pageIndex === (data && data.meta.pagination.pageCount)
                            ? 'bg-gray-800 cursor-not-allowed'
                            : 'bg-blue-600 hover:bg-blue-700'
                            }`}
                        onClick={() => setPageIndex(pageIndex + 1)}
                        disabled={pageIndex === (data && data.meta.pagination.pageCount)}
                    >
                        Next
                        <span className="ml-2">
                            <svg
                                className="w-4 h-4 fill-current"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9 5L16 12L9 19" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>

            {isLoading ? (
                <div className="flex justify-center mt-8">
                    <ClipLoader color="#4A5568" loading={isLoading} css={override} size={50} />
                </div>
            ) : (
                <Tran transaction={data} />
            )}
        </Layout>
    );
};


export default Transaction;

export async function getStaticProps() {
    // const transactionResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/transactions?pagination[page]=1&pagination[pageSize]=10&timestamp:asc`);
    const transactionResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/transactions?pagination[page]=1&pagination[pageSize]=10&sort=createdAt:desc`);

    // const transactionResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/transactions%`);
    // console.log(transactionResponse);
    return {
        props: {
            transaction: transactionResponse
        }
    }
}