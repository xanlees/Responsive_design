import React from 'react'
import clientLogo01 from '../assets/img/clients/client-01.png'
import clientLogo02 from '../assets/img/clients/client-02.png'
import clientLogo03 from '../assets/img/clients/client-03.png'
import clientLogo04 from '../assets/img/clients/client-04.png'
import clientLogo05 from '../assets/img/clients/client-05.png'
import clientLogo06 from '../assets/img/clients/client-06.png'
import clientLogo07 from '../assets/img/clients/client-07.png'

const clientImgLOgo = [clientLogo01, clientLogo02, clientLogo03, clientLogo04, clientLogo05, clientLogo06, clientLogo07]
function Clients() {
  return (
    <div className=' container mx-auto max-w-[1320px] p-10 text-center'>
      <h2 className=' text-[2.25rem] font-semibold text-[#4D4D4D]'>Our Clients</h2>
      <p className='text-[#717171]'>We have been working with some Fortune 500+ clients</p>
          <ul className='flex flex-col items-center my-10 md:flex-row md:justify-between '>
        {clientImgLOgo.map((logo, index) => (
          <li key={index}>
            <img src={logo} alt="" />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Clients
