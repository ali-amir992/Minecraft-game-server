import React, { useState } from 'react';
import './CSS/GameServer.css'

const Server = () => {
    const [selectedOption, setSelectedOption] = useState('');

    // Onchange handler for dropdown select
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    // Submit handler for the form
    const handleSubmit = (event) => {
        event.preventDefault();
        // You can perform any actions with the form data here, such as sending it to the server
        console.log('Form submitted with selected option:', selectedOption);
        setSelectedOption('')
    };

    return (
        <div className='bg-server-bg-d h-full w-full flex md:flex-row flex-col items-center justify-center p-4 md:p-24 md:gap-x-4'>

            <div className="flex flex-col items-start justify-start w-full gap-y-4">

                <h1 className="font-bold text-4xl text-white font-quantico">Server</h1>
                <div className="flex md:flex-row w-full flex-col items-center justify-center  md:gap-x-4 xs:gap-y-4">

                    <div className="form-container w-full ">
                        <form className="form" onSubmit={handleSubmit}>

                            <div className="form-group">


                                <div id="dropdown" className="">
                                    <label for="countries" className="block mb-2 text-sm font-medium text-white">Select an option</label>
                                    <select id="" value={selectedOption} onChange={handleSelectChange} className="bg-formColor border border-formBorder text-white text-sm rounded-lg  focus:border-theme2 block w-full p-2.5">
                                        <option selected>Choose a server</option>
                                        <option className='bg-black' value="US">United States</option>
                                        <option value="CA">Canada</option>
                                        <option value="FR">France</option>
                                        <option value="DE">Germany</option>
                                    </select>

                                </div>
                            </div>
                            <div className="flex flex-row gap-2">

                                <button type="Start" className="form-submit-btn">Start</button>
                                <button type="Stop" className="form-submit-btn">Stop</button>
                                <button type="Restart" className="form-submit-btn">Restart</button>
                            </div>
                        </form>
                        <div className="flex flex-row items-start ">
                            <div className="text-md font-secondry w-1/3">
                                Status
                            </div>
                            <div className="text-md font-secondry w-2/3 gap-x-8 flex flex-row xs:justify-end md:justify-start">
                                <div className="">

                                    <i class="fa-solid fa-check fa-beat" style={{ "color": "#FF6A22" }}></i>
                                </div>
                                Active, 300 players Online
                            </div>

                        </div>
                        <div className="flex flex-row justify-between items-center w-full">
                            <div className="h1 text-md font-secondry w-1/3">
                                Share Server
                            </div>
                            <div className="flex gap-x-4 flex-row w-full justify-end">
                                <button className="py-[13px] px-[16px] rounded-full bg-transparent border border-formBorder hover:bg-theme2">   <i
                                    className="fa-brands fa-twitter fa-lg"
                                    style={{ color: "#ffffff", cursor: "pointer" }}
                                ></i></button>
                                <button className="py-[13px] px-[16px] rounded-full bg-transparent border border-formBorder hover:bg-theme2"> <i
                                    className="fa-brands fa-instagram fa-lg"
                                    style={{ color: "#ffffff", cursor: "pointer" }}
                                ></i></button>

                                <button className="py-[13px] px-[16px] rounded-full bg-transparent border border-formBorder hover:bg-theme2">  <i
                                    className="fa-brands fa-facebook fa-lg"
                                    style={{ color: "#ffffff", cursor: "pointer" }}
                                ></i></button>
                            </div>
                        </div>
                        <div className="">

                            <div className="text-md font-secondry w-1/3">
                                Connected Players
                            </div>
                            <hr className="text-white opacity-30 bg-formBorder mb-2" />
                            <div className="text-md font-secondry w-1/3">
                                No Players Online
                            </div>
                        </div>
                    </div>
                    <div className="form-container xs:w-full md:w-1/3 rounded-xl flex flex-col justify-center items-center gap-y-4 bg-formColor">
                        <div className="flex flex-row items-center gap-x-3"><h1 className='text-2xl font-secondry'>Need Help</h1>                <i class="fa-solid fa-question fa-2xl"></i>
                        </div>
                        <button className="text-xl font-secondry px-2 py-1 rounded-md hover:bg-theme2 border border-formBorder  text-white">Go to FAQs</button>
                    </div>
                </div>

            </div>

        </div >
    );
}

export default Server;