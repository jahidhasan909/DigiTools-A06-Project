import React from 'react';
import { FaRegDotCircle } from "react-icons/fa";




const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen container mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <img
                        src="https://i.ibb.co.com/7xZXMz3s/banner.png"
                        className="max-w-110 max-h-md rounded-lg shadow-2xl"
                    />
                    <div className='mr-50'>
                        <div className="badge badge-soft badge-primary">
                            <FaRegDotCircle />
                            New: AI-Powered Tools Available</div>
                        <h1 className="text-6xl  leading-20    font-bold">Supercharge Your <br /> Digital Workflow</h1>
                        <p className="py-6">
                            Access premium AI tools, design assets, templates, and productivity <br />
                            software—all in one place. Start creating faster today. <br />
                            Explore Products
                        </p>
                        <div className='flex gap-3'>
                            <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-3xl">Explore Products</button>
                            <button className="btn btn-primary btn-outline rounded-3xl">
                                <img src="https://i.ibb.co.com/TqgtTWyq/Play.png" alt="" />
                                Watch Demo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;