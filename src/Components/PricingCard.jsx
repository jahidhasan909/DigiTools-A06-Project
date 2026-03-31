import React from 'react';
import { FaCheck } from "react-icons/fa6";


const PricingCard = () => {
    return (
        <div className='mt-32'>
            <div className='px-10 md:px-50 md:py-28'>
                <h1 className='text-center mt font-bold text-2xl md:text-4xl'>Simple, Transparent Pricing</h1>
                <p className='text-center mt-4 text-gray-400 text-[0.74rem] md:text-[0.83rem]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                <div className='grid grid-cols-1 md:grid-cols-3 container mx-auto mt-10 gap-3'>
                    <div className=" bg-base-100 w-80 h-[360px]  shadow-sm rounded-xl p-5 space-y-3">
                        <div className="">
                            <h2 className="text-2xl font-semibold">Starter</h2>
                            <p className='text-[0.75rem]'>Perfect for getting started</p>
                        </div>
                        <div className='flex items-center'>
                            <h1 className='text-2xl font-semibold'>$0</h1>
                            /<p>Month</p>
                        </div>
                        <ul>
                            <li className='flex gap-1 items-center'><FaCheck className='text-green-500' />Access to 10 free tools</li>
                            <li className='flex gap-1 items-center'><FaCheck className='text-green-500' />Basic templates</li>
                            <li className='flex gap-1 items-center'><FaCheck className='text-green-500' />Community support</li>
                            <li className='flex gap-1 items-center'><FaCheck className='text-green-500' />1 project per month</li>
                        </ul>
                        <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-3xl w-full mt-12'>Get Started Free</button>
                    </div>

                    <div className=" bg-base-100 w-80 h-[360px]   shadow-sm rounded-xl p-5 space-y-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white ">
                        <div className=" relative">
                            <div className="badge  badge-warning absolute left-1/2 -translate-1/2 -top-1/2">Most Popular</div>
                            <h2 className="text-2xl font-semibold">Pro</h2>
                            <p className='text-[0.75rem]'>Best for professionals</p>
                        </div>
                        <div className='flex items-center'>
                            <h1 className='text-2xl font-semibold'>$29</h1>
                            /<p>Month</p>
                        </div>
                        <ul>
                            <li className='flex gap-1 items-center'><FaCheck className='text-green-500' />Access to all premium tools</li>
                            <li className='flex gap-1 items-center'><FaCheck className='text-green-500' />Unlimited templates</li>
                            <li className='flex gap-1 items-center'><FaCheck className='text-green-500' />Priority support</li>
                            <li className='flex gap-1 items-center'><FaCheck className='text-green-500' />Unlimited projects</li>
                            <li className='flex gap-1 items-center'><FaCheck className='text-green-500' />Cloud sync</li>
                            <li className='flex gap-1 items-center'><FaCheck className='text-green-500' />Advanced analytics</li>
                        </ul>
                        <button className='btn  rounded-3xl w-full'>Start Pro Trial</button>
                    </div>

                    <div className=" bg-base-100 w-80 h-[360px]  shadow-sm rounded-xl p-5 space-y-3">
                        <div className="">
                            <h2 className="text-2xl font-semibold">Enterprise</h2>
                            <p className='text-[0.75rem]'>For teams and businesses</p>
                        </div>
                        <div className='flex items-center'>
                            <h1 className='text-2xl font-semibold'>$99</h1>
                            /<p>Month</p>
                        </div>
                        <ul>
                            <li className='flex gap-1 items-center'><FaCheck className='text-green-500' />Everything in Pro</li>
                            <li className='flex gap-1 items-center'><FaCheck className='text-green-500' />Team collaboration</li>
                            <li className='flex gap-1 items-center'><FaCheck className='text-green-500' />Custom integrations</li>
                            <li className='flex gap-1 items-center'><FaCheck className='text-green-500' />Dedicated support</li>
                            <li className='flex gap-1 items-center'><FaCheck className='text-green-500' />SLA guarantee</li>
                            <li className='flex gap-1 items-center'><FaCheck className='text-green-500' />Custom branding</li>
                        </ul>
                        <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-3xl w-full'>Contact Sales</button>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default PricingCard;