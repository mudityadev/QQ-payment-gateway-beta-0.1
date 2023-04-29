import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsListColumns } from 'react-icons/bs';
import { FaWindowRestore, FaUserCircle } from 'react-icons/fa';
import Modal from './Modal';
import { useFetchUser, useUser } from '@/lib/authContext';
import { fetcher } from '@/lib/api';
import { setToken, unsetToken } from '@/lib/auth';
import { GiGreenPower, GiWallet } from 'react-icons/gi';
import { CgProfile } from 'react-icons/cg';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { useRouter } from 'next/router';
import { AiOutlinePoweroff } from 'react-icons/ai';
import { IoPower } from 'react-icons/io5';



const Nav = () => {

    const [showModal, setShowModal] = useState(false);
    const router = useRouter(); // Add this line to use the useRouter hook

    const [data, setData] = useState({
        identifier: '',
        password: '',
    });

    // const { user, loading } = useUser();
    const { user, loading } = useFetchUser();


    const handleSubmit = async (e) => {
        e.preventDefault();

        const responseData = await fetcher(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/local`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    identifier: data.identifier,
                    password: data.password,
                }),
            }
        );

        if (responseData) {
            setToken(responseData);
            router.push('/profile/dashboard'); // Redirect to profile/dashboard page
        } else {
            // Show an error message or handle the error as needed
        }
    
        // setToken(responseData);
    };

    const logout = () => {
        unsetToken();
    };

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };



    return (
        <>
            <nav className="bg-white shadow-sm" user={user} loading={loading}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-left">
                        <Link href="/">
                            <div>
                                {/* Replace with your logo */}

                                    <Image src="/logo.png" alt="QQ Payment Logo" width={100} height={100} />

                            </div>  
                        </Link>
                    </div>
                        <div className="flex items-center space-x-4">


                                {!loading && user ? (

                            <>
                                    <Link href="/profile/dashboard">
                                        <div className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-blue-100 hover:text-blue-600">
                                            {/* Your Profile button icon */}
                                            <CgProfile className="mr-2" />
                                            {user}
                                        </div>
                                    </Link>

                                
                                <Link href="/wallet">
                                    <div className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-green-100 hover:text-green-500">
                                        {/* Your Wallet button icon */}
                                            <GiWallet className="mr-2" />

                                        Wallet
                                    </div>
                                </Link>
                                
                                
                                    <button
                                        onClick={logout}
                                        className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-white bg-red-600 text-white-100"
                                    >
                                    {/* Your Logout button icon */}
                                        <IoPower className="mr-2" />

                                    Logout
                                </button>
                            </>
                        ) : (
                            <>

                      
                      
                            <Link href="/">
                                <div
                                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-blue-100 hover:text-blue-500"
                                    onClick={() => setShowModal(true)}
                                >
                                    <FaUserCircle className="mr-2" />
                                    Login
                                </div>
                            </Link>

                        <Link href="/merchant-login">
                            <div className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-red-100 hover:text-red-500">
                                <FaWindowRestore className="mr-2" />
                                Merchant
                            </div>
                        </Link>
                    </>
                        )}

                    </div>
                </div>
            </div>
        </nav>

            <Modal
                showModal={showModal}
                closeModal={() => setShowModal(false)}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />

        </>
    );
};

export default Nav;
