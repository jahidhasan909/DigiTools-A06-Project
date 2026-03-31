import React from 'react';

const MiddleCountBanner = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-5  md:p-10'>
            <div className='grid grid-cols-1 md:flex  justify-center gap-10 md:gap-40 items-center text-center'>
                <div className='md:border-r'>
                    <div className='md:mr-26'>
                        <h1 className=' md:text-5xl font-bold text-white'>50k+</h1>
                        <p className='text-gray-300'>Active Users</p>
                    </div>
                </div>
                <div className=''>
                    <div className=''>
                        <h1 className='md:text-5xl font-bold text-white'>200k+</h1>
                        <p className='text-gray-300'>Premium Tools</p>
                    </div>
                </div>
                <div className='md:border-l'>
                    <div className='md:ml-26'>
                        <h1 className='md:text-5xl font-bold text-white'>4.9</h1>
                        <p className='text-gray-300'>Rating</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiddleCountBanner;