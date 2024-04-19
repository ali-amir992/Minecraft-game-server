import React from 'react';
import Typewriter from 'typewriter-effect';
import heroImage from "../assets/heroImg.webp";

const HeroSection = () => {
    return (
        <div id="home" className="h-full py-24 flex justify-center overflow-hidden items-center dark:text-white">

            <section className='flex flex-col justify-center items-center mt-12 gap-7 p-4'>

                <h1 className='text-5xl lg:text-8xl text-center font-semibold text-theme2 font-primary'>Vector Hosting</h1>
                <h2 className='text-3xl text-center text-white font-bold'>
                    Find Your Best <span className='inline-block text-theme2 font-primary'><Typewriter
                        options={{
                            strings: ["Minecraft Server", "Game", "Website", "Hosting Deal"],
                            autoStart: true,
                            loop: true,
                            delay: 75
                        }}
                    /></span>
                </h2>
                <p className="text-xl lg:text-2xl text-center text-white font-secondry max-w-2xl">
                    Welcome to Vector Gaming, your ultimate destination for premium Minecraft hosting solutions. With lightning-fast servers, unbeatable uptime, and a dedicated support team, we're here to ensure your Minecraft adventure is seamless and fun. Explore our flexible hosting deals and elevate your gaming experience today!
                </p>

            </section>
        </div>
    );
}

export default HeroSection;
