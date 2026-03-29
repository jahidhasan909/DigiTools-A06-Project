import React from 'react';
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";




const Footer = () => {
    return (
        <div className='bg-[#101727]/100 py-5'>
            <footer className="footer sm:footer-horizontal  px-[200px] py-[120px] text-white container mx-auto">
                <div>
                    <h1 className='text-3xl'>DigiTools</h1>
                    <p>Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br /> with our suite  of powerful tools.</p>
                </div>
                <nav>
                    <h6 className="footer-title">Product</h6>
                    <a className="link link-hover">Features</a>
                    <a className="link link-hover">Pricing</a>
                    <a className="link link-hover">Templates</a>
                    <a className="link link-hover">Integrations</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About</a>
                    <a className="link link-hover">Blog</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Press</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Resources</h6>
                    <a className="link link-hover">Documentation</a>
                    <a className="link link-hover">Help Center</a>
                    <a className="link link-hover">Community</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social Links</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a>
                            <FaInstagram />
                        </a>
                        <a>
                            <FaFacebook />
                        </a>
                        <a>
                            <FaXTwitter />
                        </a>
                    </div>
                </nav>


            </footer>
            <hr className='text-white container mx-auto' />
            <div className='text-white flex justify-between container mx-auto'>
                <p>© 2026 Digitools. All rights reserved.</p>
                <ul className='flex gap-5'>
                    <li>Privacy Policy</li>
                    <li>Terms of Service </li>
                    <li>Cookies</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer; 