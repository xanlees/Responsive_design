import React from 'react'
import Tim from '../assets/img/tim-smith.png'
import clientLogo01 from '../assets/img/clients/client-01.png'
import clientLogo02 from '../assets/img/clients/client-02.png'
import clientLogo03 from '../assets/img/clients/client-03.png'
import clientLogo04 from '../assets/img/clients/client-04.png'
import clientLogo05 from '../assets/img/clients/client-05.png'
import clientLogo06 from '../assets/img/clients/client-06.png'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

function Meet() {
  return (
    <div className='bg-[#F5F7FA] py-10 '>
      <div className=' container mx-auto max-w-[1320px] p-10 grid grid-cols-1 md:grid-cols-2'>
        <div className="flex relative justify-center items-start md:justify-start p-20 md:p-0 ">
          <div className="relative w-full md:w-1/2 group">
            {/* Blue background, hidden by default */}
            <div className="absolute inset-0 bg-[#4CAF4F] rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

            {/* Image on top */}
            <img
              src={Tim}
              alt="Tim"
              className="relative z-10 rounded-lg shadow-lg transform transition-transform duration-500 group-hover:-translate-x-10 group-hover:translate-y-10"
            />
          </div>
        </div>
        <div>
            <p className='text-[#717171]'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et quis, sunt doloremque amet quia repellendus atque quasi. Quibusdam obcaecati dolorem aut alias sequi eos assumenda voluptatibus quos labore, culpa suscipit modi rem omnis, voluptatum blanditiis ad aperiam temporibus consectetur id totam deleniti excepturi cupiditate. Molestiae rem praesentium ullam nesciunt corrupti odio earum maxime voluptates ab nemo expedita, tenetur molestias libero!
            </p>
            <h3 className='mt-5 md:mt-0 text-[1.25rem] font-semibold text-[#4CAF4F]'>Tim Smith</h3>
            <p className='text-[#89939E]'>British Drogon Boat Racing Association</p>
            <ul className='flex flex-col items-center md:flex-row md:justify-between mt-10 '>
                <li><img src={clientLogo01} alt="" /></li>
                <li><img src={clientLogo02} alt="" /></li>
                <li><img src={clientLogo03} alt="" /></li>
                <li><img src={clientLogo04} alt="" /></li>
                <li><img src={clientLogo05} alt="" /></li>
                <li><img src={clientLogo06} alt="" /></li>
                <li><a className=' text-[#4CAF4F] flex items-center font-bold' href="">Meet all customers<HiOutlineArrowNarrowRight className='ml-2'/></a></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Meet
