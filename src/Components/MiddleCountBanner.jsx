import React from 'react';

const MiddleCountBanner = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA]  p-10'>
            <div className='flex  justify-center gap-40 items-center text-center'>
                <div>
                    <h1 className='text-5xl font-bold text-white'>50k+</h1>
                    <p className='text-gray-300'>Active Users</p>
                </div>
                <div>
                    <h1 className='text-5xl font-bold text-white'>200k+</h1>
                    <p className='text-gray-300'>Premium Tools</p>
                </div>
                <div>
                    <h1 className='text-5xl font-bold text-white'>4.9</h1>
                    <p className='text-gray-300'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default MiddleCountBanner;