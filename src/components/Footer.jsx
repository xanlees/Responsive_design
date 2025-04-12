import React, { useState, useRef } from 'react'
import { FaRegPaperPlane, FaInstagramSquare, FaDribbble, FaTwitter, FaYoutube } from 'react-icons/fa'
import logofooter from '../assets/img/logo-white.png'

function Footer() {

    const inputRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);

    const handleButtonClick = (e) => {
        e.preventDefault();
        setIsFocused(true);
        setTimeout(() => {
            if (inputRef.current) {
                inputRef.current.focus();
            }
        }, 100); // Wait for expansion animation to complete
    };

    return (
        <div className='bg-[#263238] py-20'>
            <div className='container mx-auto max-w-[1320px] md:px-10'>
                <div className=' grid grid-cols-1 m-10 md:m-0 md:grid-cols-2'>
                    <div>
                        <img src={logofooter} alt="" />
                        <p className='my-10 text-white'>
                            Copyright © 2025 Pixelgrade. <br />
                            All rights reserved
                        </p>
                        <ul className='flex mb-5 md:flex-row '>
                            <li className='mr-[1rem]'><a className=' text-white text-[1.5rem]' href=""><FaInstagramSquare /></a></li>
                            <li className='mr-[1rem]'><a className=' text-white text-[1.5rem]' href=""><FaDribbble /></a></li>
                            <li className='mr-[1rem]'><a className=' text-white text-[1.5rem]' href=""><FaTwitter /></a></li>
                            <li className='mr-[1rem]'><a className=' text-white text-[1.5rem]' href=""><FaYoutube /></a></li>
                        </ul>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3'>
                        <div>
                            <h4 className='text-white text-[1.25rem] font-semibold'>Company</h4>
                            <ul className='flex flex-col mb-5'>
                                <li className='mt-2'><a className='text-white text-[0.875rem]' href="">About us</a></li>
                                <li className='mt-2'><a className='text-white text-[0.875rem]' href="">Blog</a></li>
                                <li className='mt-2'><a className='text-white text-[0.875rem]' href="">Contact us</a></li>
                                <li className='mt-2'><a className='text-white text-[0.875rem]' href="">Pricing</a></li>
                                <li className='mt-2'><a className='text-white text-[0.875rem]' href="">Textimonials</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className='text-white text-[1.25rem] font-semibold'>Support</h4>
                            <ul className='flex flex-col mb-5'>
                                <li className='mt-2'><a className='text-white text-[0.875rem]' href="">Help center</a></li>
                                <li className='mt-2'><a className='text-white text-[0.875rem]' href="">Term of service</a></li>
                                <li className='mt-2'><a className='text-white text-[0.875rem]' href="">Legal</a></li>
                                <li className='mt-2'><a className='text-white text-[0.875rem]' href="" >Privacy policy</a></li>
                                <li className='mt-2'><a className='text-white text-[0.875rem]' href="">Status</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className='text-white text-[1.25rem] font-semibold'>Stay up to date</h4>
                            <form action="" className='flex mt-5'>
                                <div className={`relative ${isFocused ? 'w-full' : 'w-12'} transition-all duration-300 ease-in-out`}>
                                    <input
                                        ref={inputRef}
                                        type="email"
                                        onFocus={() => setIsFocused(true)}
                                        onBlur={() => setIsFocused(false)}
                                        className={` bg-white/20 text-white text-[0.875rem] px-4 py-3 rounded-full block w-full border-none outline-none text-base placeholder:text-transparent transition-opacity duration-300 focus:placeholder:text-gray-200 ${isFocused ? '' : 'cursor-pointer'}`}
                                        placeholder="Enter your email"
                                    />
                                    <button
                                        type="submit"
                                        onClick={handleButtonClick}
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
                                    >
                                        <FaRegPaperPlane size={20} className="text-white" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
