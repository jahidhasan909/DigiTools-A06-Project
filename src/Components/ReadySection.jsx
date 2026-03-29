import React from 'react';

const ReadySection = () => {
    return (
        <div>
            <div className="hero bg-linear-to-r from-[#4F39F6] to-[#9514FA] min-h-96">
                <div className="hero-content text-center">
                    <div className="">
                        <h1 className="text-5xl font-bold text-white">Ready to Transform Your Workflow?</h1>
                        <p className="py-6 text-white">
                            Join thousands of professionals who are already using Digitools to work smarter. <br />Start your free trial today.
                        </p>
                        <div className='gap-3 flex justify-center'>
                            <button className="btn bg-white rounded-3xl">
                                <span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text '>Explore Products</span>
                            </button>
                            <button className="btn bg-transparent text-white rounded-3xl">View Pricing</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadySection;