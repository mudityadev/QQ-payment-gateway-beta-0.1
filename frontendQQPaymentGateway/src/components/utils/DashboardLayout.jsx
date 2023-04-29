import Head from 'next/head';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';
import Nav from '@/components/Nav';
import { UserProvider } from '@/lib/authContext';
import { useState, useEffect } from 'react';
import Popup from './Popup';

const DashboardLayout = ({ user, children, title = 'Hello QQ', wallet }) => {

  


    return (
        <UserProvider value={{ user }}>
            <Head>
                <title>{title} | Dashboard</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Secure and fast QQ Payment Gateway" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className="h-screen">
                <main>
                    <div className="flex justify-center items-center h-full">
                        <div className="w-full max-w-4xl text-black bg-white border rounded-lg shadow-lg bg-gray-100 p-4">
                            {/* <div className="w-full max-w-4xl text-black bg-white border rounded-lg shadow-lg bg-gradient-to-br from-green-300 to-blue-600 p-4"> */}
                            {children}
                        </div>
                    </div>
                </main>
            </div>

        </UserProvider>
    );
};

export default DashboardLayout;
