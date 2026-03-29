import React from 'react';

const ThreeStepCard = () => {
    return (
        <div className='bg-base-300 mt-32'>
            <div className='px-50 py-28'>
                <h1 className='text-center mt font-bold text-4xl'>Get Started in 3 Steps</h1>
                <p className='text-center mt-4 text-gray-400 text-[0.74rem]'>Start using premium digital tools in minutes, not hours.</p>
                <div className='grid grid-cols-3 container mx-auto mt-10 gap-3'>
                    <div className=" bg-base-100 w-80 h-80  shadow-sm rounded-xl p-5 space-y-3">
                        <div className='flex justify-end'>
                            <span className=' bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-7 h-7 flex items-center justify-center px-1  text-white  rounded-full'>01</span>
                        </div>
                      
                            <img
                                src="https://i.ibb.co.com/Fb8tByM9/user.png"
                                alt=""
                                className=" bg-linear-to-r from-[#4F39F6]/30 to-[#9514FA]/30 w-28 mx-auto rounded-full p-3" />
                     
                        <div className="items-center text-center">
                            <h2 className="text-center font-bold">Create Account</h2>
                            <p className='text-[0.75rem]'>Sign up for free in seconds. No credit card required to get started.</p>
                        </div>
                    </div>

                    <div className=" bg-base-100 w-80 h-80  shadow-sm rounded-xl p-5 space-y-3">
                        <div className='flex justify-end'>
                            <span className=' bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-7 h-7 flex items-center justify-center px-1  text-white  rounded-full'>02</span>
                        </div>
                      
                            <img
                                src="https://i.ibb.co.com/DgWbRRnH/package.png"
                                alt=""
                                className=" bg-linear-to-r from-[#4F39F6]/30 to-[#9514FA]/30 w-28 mx-auto rounded-full p-3" />
                     
                        <div className="items-center text-center">
                            <h2 className="text-center font-bold">Choose Products</h2>
                            <p className='text-[0.75rem]'>Browse our catalog and select the tools that fit your needs.</p>
                        </div>
                    </div>

                    <div className=" bg-base-100 w-80 h-80  shadow-sm rounded-xl p-5 space-y-3">
                        <div className='flex justify-end'>
                            <span className=' bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-7 h-7 flex items-center justify-center px-1  text-white  rounded-full'>03</span>
                        </div>
                      
                            <img
                                src="https://i.ibb.co.com/LdK1Tr77/rocket.png"
                                alt=""
                                className=" bg-linear-to-r from-[#4F39F6]/30 to-[#9514FA]/30 w-28 mx-auto rounded-full p-3" />
                     
                        <div className="items-center text-center">
                            <h2 className="text-center font-bold">Start Creating</h2>
                            <p className='text-[0.75rem]'>Download and start using your premium  tools immediately.</p>
                        </div>
                    </div>
                  
                </div>
            </div>
        </div>
    );
};

export default ThreeStepCard;