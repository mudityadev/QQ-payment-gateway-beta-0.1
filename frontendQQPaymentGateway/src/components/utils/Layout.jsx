import Head from 'next/head';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';
import Nav from '@/components/Nav';
import { UserProvider } from '@/lib/authContext';



const Layout = ({ user, loading = false, children, title = 'QQ Payment Gateway' }) => {
    return (
        <UserProvider value={{user, loading}}>
            <Head>
                <title>{title} | QQ Payment Gateway</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Secure and fast QQ Payment Gateway" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className="h-screen bg-gray-100">
            {/* <div className="h-screen bg-dark-100"> */}
                <main>
                    <Nav />

                    <div>
                        <div className=" h-full text-black">
                            {children}
                        </div>
                    </div>
                </main>
            </div>
        </UserProvider>
    );
};

export default Layout;
