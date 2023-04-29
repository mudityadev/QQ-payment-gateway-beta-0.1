import React, { useState } from 'react';
import { FaRegCreditCard, FaMoneyBillWave } from 'react-icons/fa';
import Layout from '@/components/utils/Layout';
import Sidebar from '@/components/dashboard/sidebar';
import SendMoney from '@/components/dashboard/SendMoney';
import Home from '@/components/dashboard/Home';
import Balance from '@/components/dashboard/Balance';
import MerchantAccount from '@/components/dashboard/MerchantAccount';
import SellProduct from '@/components/dashboard/SellProduct';
import Setting from '@/components/dashboard/Setting';
import Wallet from '@/components/dashboard/Wallet';
import Key from '@/components/dashboard/Key';



const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState('home');


  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'home':
        return <Home />;
      case 'balance':
        return <Wallet />;
      case 'settings':
        return <Setting />;
      case 'key':
        return <Key />;
      case 'sendMoney':
        return <SendMoney />;
      case 'merchantAccount':
        return <MerchantAccount />;
      case 'sellProduct':
        return <SellProduct />;
      default:
        return <Home />;
    }
  };

  return (
        // <WalletProvider>
    <Layout title="Dashboard">
      <div className="container mx-auto px-4 mt-10">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="md:w-1/4 md:mr-8 mb-8">
            <Sidebar setActiveComponent={setActiveComponent} />
          </div>
          <main className="md:w-3/4">{renderActiveComponent()}</main>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
