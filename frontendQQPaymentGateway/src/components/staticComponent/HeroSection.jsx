import Link from 'next/link';
import React from 'react';
import { CgListTree } from 'react-icons/cg';
import { IoEnter } from 'react-icons/io5';

export const HeroSection = () => {
    return (
        <div className="bg-blue-700 py-24">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
                <div className="lg:w-1/2 text-white mb-6 lg:mb-0">
                    <h1 className="text-5xl font-bold leading-tight mb-6">Fiat, Crypto & Beyond with Our Open-Source Gateway</h1>

                    {/* <h1 className="text-5xl font-bold leading-tight mb-6">Open-Source pay gateway, powered by QQ Pay</h1> */}
                    <p className="text-lg mb-6">QQ Pay is an open source payment gateway that provides a secure and flexible solution for processing online payments.</p>
    <button className="bg-green-600 py-3 px-8 mt-6 rounded hover:bg-green-600 hover:text-white transition-colors duration-300 ease-in-out hover:transform hover:scale-110"><IoEnter /></button>
                    <Link href="/transaction">
                        <button className="mx-4 bg-red-600 py-3 px-8 mt-6 rounded hover:bg-red-600 hover:text-white transition-colors duration-300 ease-in-out transform hover:scale-110"><CgListTree /></button>
                   </Link>
                </div>
                <div className="lg:w-1/4">
                    <img src="/animationHeroSection.gif" alt="QQ Payment Gateway" />
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
