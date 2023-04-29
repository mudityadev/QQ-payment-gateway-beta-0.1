import Image from 'next/image';
import Layout from '@/components/utils/Layout';
import { Inter } from 'next/font/google';
import { useFetchUser } from '@/lib/authContext';
import { useUser } from '@/lib/authContext';
import HeroSection from '@/components/staticComponent/HeroSection';
import Feature from '@/components/staticComponent/Feature';
import Footer from '@/components/staticComponent/Footer';
import HowWork from '@/components/staticComponent/HowWork';
import Pricing from '@/components/staticComponent/Pricing';
import CallToAction from '@/components/staticComponent/CallToAction';
import { BrowserRouter } from 'react-router-dom';


const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { user, loading } = useUser();

  return (

    <Layout title="Welcome" user={user} loading={loading}>


      <HeroSection />

      <Feature />
      {/* <Pricing /> */}
      <HowWork />


      <CallToAction />


      <Footer />
    </Layout>
  );
}
