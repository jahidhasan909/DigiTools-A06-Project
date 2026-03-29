import React from 'react';
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>Products</li>
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Testimonials</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text">DigiTools</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4">
                        <li>Products</li>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Testimonials</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <button>
                        <IoCartOutline />
                    </button>
                    <a>Login</a>
                    <a className="btn rounded-3xl  bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;