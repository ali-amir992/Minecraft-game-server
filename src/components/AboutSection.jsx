import React from 'react';
import charImage from '../assets/char3.png';

const AboutSection = () => {
    return (
        <div className='bg-theme1 p-4 sm:p-0'>

            <div className='flex flex-col sm:flex-row items-center justify-center sm:justify-start sm:pl-8'>

                <div className='w-full sm:w-1/2 mt-8 px-4 text-center sm:text-left'>
                    <h1 className='text-4xl font-primary sm:text-5xl lg:text-7xl font-extrabold text-theme2 mb-4 sm:mb-6'>
                        Explore New Worlds with Our Premium Minecraft Servers
                    </h1>

                    <p className='text-white text-sm sm:text-base lg:text-lg leading-tight max-w-lg mx-auto sm:mx-0'>
                        Immerse yourself in the adventure and creativity Minecraft offers. Experience enhanced performance and support, customized for your gaming needs.
                    </p>
                    <div className='flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3 mt-4 sm:mt-5'>
                        <input
                            type="text"
                            placeholder='Your Email Address'
                            class='h-12 sm:h-14 w-full rounded-md placeholder-text-black text-sm sm:text-base px-3 custom-input'
                        />


                        <button className='h-12 sm:h-14 bg-theme2 border-2 border-theme2 transition ease-in duration-200 rounded-md text-white hover:bg-transparent hover:border-theme2 hover:text-theme2 sm:w-1/2 px-5 mt-2 sm:mt-0 sm:ml-3'>
                            Join Now
                        </button>

                    </div>

                </div>

                <div className='my-8 sm:mt-16 sm:mb-8 sm:w-1/2 flex justify-center'>
                    <img className='w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg' src={charImage} alt="" />
                </div>




            </div>
        </div>
    );
};

export default AboutSection;
