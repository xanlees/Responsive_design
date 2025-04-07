import React, { useState } from 'react'
import logo from '../assets/img/logo-black.png'
import { FaBars } from 'react-icons/fa'

function Navbar() {
    const [toggle, setToggle] = useState(false)

    const updateToggle = () => {
        setToggle(!toggle)
    }

    return (
        <nav className='bg-[#F5F7FA]'>
            <div className='container mx-auto max-w-[1320px] relative h-auto p-10 flex flex-col md:flex-row md:justify-between md:items-center md:h-[80px]'>
                <div>
                    <a href="">
                        <img src={logo} alt="" />
                    </a>
                </div>
                <ul className={` ${ !toggle ? 'hidden' : 'flex' } flex flex-col my-5 md:flex md:flex-row `}>
                    <li className=' my-2 md:mx-4'><a href="">Home</a></li>
                    <li className=' my-2 md:mx-4'><a href="">Service</a></li>
                    <li className=' my-2 md:mx-4'><a href="">Feature</a></li>
                    <li className=' my-2 md:mx-4'><a href="">Product</a></li>
                    <li className=' my-2 md:mx-4'><a href="">Testimonial</a></li>
                    <li className=' my-2 md:mx-4'><a href="">FAQ</a></li>
                </ul>

                <ul className={` ${!toggle ? 'hidden' : 'flex'} flex flex-col my-5 md:flex md:flex-row `}>
                    <li className=' my-2 md:mx-4'><a className=' inline-flex justify-center items-baseline-last py-2 px-4 text-[#4CAF4F]' href="">Login</a></li>
                    <li className=' my-2 md:mx-4'><a className=' inline-flex justify-center items-baseline-last py-2 px-4 bg-[#4CAF4F] text-white rounded-md' href="">Sign up</a></li>
                </ul>

                <FaBars  onClick={updateToggle} className='absolute right-5 cursor-pointer text-xl md:hidden'/>
            </div>
        </nav>
    )
}

export default Navbar
