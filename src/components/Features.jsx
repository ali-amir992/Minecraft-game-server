import React from 'react';
// import Domain from './icons/Domain';
import { BiHeadphone } from "react-icons/bi";
import { BiServer } from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai";
import { BsGlobe2 } from "react-icons/bs";
import { BiMoon } from 'react-icons/bi';
import { FaHeartbeat } from 'react-icons/fa';
const Features = () => {
    return (
        <section className="bg-gradient-to-r from-neutral-900 to-slate-800">
            <div className="px-3 md:px-6 py-16 mx-auto">
                <h1 className="text-3xl text-center font-semibold font-primary text-theme2 capitalize lg:text-5xl">explore our exclusive <span className=" decoration-theme2">Features</span></h1>

                <p className="mt-4 text-center text-white">
                    Explore unique features tailored for Minecraft servers.
                </p>

                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                    {/* Full uptime */}
                    <div className="p-8 space-y-3 border-2 border-theme2 rounded-xl">
                        <span className="inline-block text-theme2">
                            <BiServer className='h-8 w-8' />
                        </span>
                        <h1 className="text-2xl font-semibold text-theme2 capitalize dark:text-white">Full uptime</h1>
                        <p className="text-white">
                            Get unparalleled support and enjoy seamless uptime.
                        </p>
                        <a href="#" className="inline-flex p-2 text-theme2 capitalize transition-colors duration-200 transform bg-blue-100 rounded-full dark:bg-blue-500 dark:text-white hover:underline">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </a>
                    </div>

                    {/* Support */}
                    <div className="p-8 space-y-3 border-2 border-theme2 rounded-xl">
                        <span className="inline-block text-theme2">
                            <BiHeadphone className='h-8 w-8' />
                        </span>
                        <h1 className="text-2xl font-semibold text-theme2 capitalize dark:text-white">Support</h1>
                        <p className="text-white">
                            24/7  support with an average response time of 20 minutes.
                        </p>
                        <a href="#" className="inline-flex p-2 text-theme2 capitalize transition-colors duration-200 transform bg-blue-100 rounded-full dark:bg-blue-500 dark:text-white hover:underline">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </a>
                    </div>

                    {/* Setup Facility */}
                    <div className="p-8 space-y-3 border-2 border-theme2 rounded-xl">
                        <span className="inline-block text-theme2">
                            <AiFillSetting className='h-8 w-8' />
                        </span>
                        <h1 className="text-2xl font-semibold text-theme2 capitalize dark:text-white">Setup Facility</h1>
                        <p className="text-white">
                            Hassle-free setup to get your server running in no time.
                        </p>
                        <a href="#" className="inline-flex p-2 text-theme2 capitalize transition-colors duration-200 transform bg-blue-100 rounded-full dark:bg-blue-500 dark:text-white hover:underline">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </a>
                    </div>

                    {/* SubDomain */}
                    <div className="p-8 space-y-3 border-2 border-theme2 rounded-xl">
                        <span className="inline-block text-theme2">
                            <BsGlobe2 className='h-8 w-8' />
                        </span>
                        <h1 className="text-2xl font-semibold text-theme2 capitalize dark:text-white">SubDomain</h1>
                        <p className="text-white">
                            Free subdomain for customizing your server's web address.
                        </p>
                        <a href="#" className="inline-flex p-2 text-theme2 capitalize transition-colors duration-200 transform bg-blue-100 rounded-full dark:bg-blue-500 dark:text-white hover:underline">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </a>
                    </div>

                    {/* Dark Mode */}
                    <div className="p-8 space-y-3 border-2 border-theme2 rounded-xl">
                        <span className="inline-block text-theme2">
                            <BiMoon className='h-8 w-8' /> {/* Changed from SVG to icon */}
                        </span>
                        <h1 className="text-2xl font-semibold text-theme2 capitalize dark:text-white">Elegant Dark Mode</h1>
                        <p className="text-white">
                            Enhanced night mode options to ease your gameplay at night.
                        </p>

                        <a href="#" className="inline-flex p-2 text-theme2 capitalize transition-colors duration-200 transform bg-blue-100 rounded-full dark:bg-blue-500 dark:text-white hover:underline">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </a>
                    </div>

                    {/* Performance Monitoring */}
                    <div className="p-8 space-y-3 border-2 border-theme2 rounded-xl">
                        <span className="inline-block text-theme2">
                            <FaHeartbeat className='h-8 w-8' /> {/* New icon for performance */}
                        </span>
                        <h1 className="text-2xl font-semibold text-theme2 capitalize dark:text-white">Performance Monitor</h1>
                        <p className="text-white">
                            Server performance monitoring to ensure optimal operation.
                        </p>

                        <a href="#" className="inline-flex p-2 text-theme2 capitalize transition-colors duration-200 transform bg-blue-100 rounded-full dark:bg-blue-500 dark:text-white hover:underline">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </a>

                    </div>

                    {/* More similar div elements here */}
                </div>
            </div>
        </section>
    );
}


export default Features;
