import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
    FaHome,
    FaRegCreditCard,
    FaMoneyBillWave,
    FaCog,
    FaStoreAlt,
} from 'react-icons/fa';
import { MdLocalGroceryStore } from 'react-icons/md';
import { RiSecurePaymentFill } from 'react-icons/ri';
import { SiMonkeytie } from 'react-icons/si';
import { GiHouseKeys } from 'react-icons/gi';
import { BsFillKeyFill } from 'react-icons/bs';
import { fetcher } from '@/lib/api';
import { getUserFromLocalCookie } from '@/lib/auth';

const Sidebar = ({ setActiveComponent }) => {
    const [wallet, setWallet] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWallet = async () => {
            try {
                setLoading(true);
                const currentUser = await getUserFromLocalCookie();
                console.log('Current user:', currentUser);

                const response = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/wallets/get_wallet`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        currentUser: currentUser,
                    }),
                });
                console.log(currentUser);
                setWallet(response);
            } catch (error) {
                console.error('Error fetching wallet:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchWallet();
    }, []);

    const router = useRouter();

    const menuItems = [
        { id: 1, label: 'Home', icon: <FaHome />, path: '/profile/dashboard', component: 'home' },
        { id: 2, label: 'Send Money', icon: <RiSecurePaymentFill />, path: '/profile/dashboard', component: 'sendMoney' },
        { id: 3, label: 'API Key', icon: <BsFillKeyFill />, path: '/profile/dashboard', component: 'key' },
        { id: 4, label: 'Wallet', icon: <FaRegCreditCard />, path: '/profile/dashboard', component: 'balance' },
        { id: 5, label: 'Merchant Account', icon: <FaStoreAlt />, path: '/profile/dashboard', component: 'merchantAccount' },
        { id: 6, label: 'Sell Product', icon: <MdLocalGroceryStore />, path: '/profile/dashboard', component: 'sellProduct' },
        { id: 7, label: 'Settings', icon: <FaCog />, path: '/profile/dashboard', component: 'settings' },
    ];

    const handleItemClick = (e, path, component) => {
        e.preventDefault();
        router.push(path);
        setActiveComponent(component);
    };

    const BalanceCard = () => {
        if (loading || !wallet) {
            return <div className="text-gray-500">Loading balance...</div>;
        }

        return (
            <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-md shadow-md p-6">
                <div className="text-white font-semibold mb-2">Balance</div>
                <div className="text-3xl font-bold text-white">${wallet.amount.toFixed(8)}</div>
            </div>
        );
    };

    return (
        <div className="bg-white p-6 shadow-md rounded-md">
            <BalanceCard />
            <nav>
                <ul>
                    {menuItems.map((item) => (
                        <li key={item.id} className="mb-4 my-4">
                            <a
                                href={item.path}
                                onClick={(e) => handleItemClick(e, item.path, item.component)}
                                className={`flex items-center text-gray-600 hover:text-gray-900 ${router.pathname === item.path ? 'text-gray-900 font-semibold' : ''
                                    }`}
                            >
                                {React.cloneElement(item.icon, {
                                    className: `${router.pathname === item.path ? 'text-gray-900' : 'text-gray-400'
                                        } mr-4`,
                                })}
                                <span className="ml-2">{item.label}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;