import React from 'react';
import DashboardLayout from '../utils/DashboardLayout';
import Image from 'next/image';
import { useFetchUser } from '@/lib/authContext';

const Home = () => {
  const { user, loading } = useFetchUser();

  return (
    <DashboardLayout title="Home">
      <div className="flex flex-col items-center justify-center  p-10">
        <Image
          src="/dashboardWelcome.gif"
          alt="Image"
          width={400}
          height={400}
          className="rounded-full"
        />
        <div className="text-gray-900 text-lg font-semibold mt-4">
          Welcome to your QQ Pay Dashboard!
        </div>

        <p className="mt-4 text-gray-900">
          Here, you can view your account balance, track your transactions, and manage your payments. Use the navigation menu on the left to access the different features of the dashboard.
        </p>

      </div>
    </DashboardLayout>
  );
};

export default Home;
