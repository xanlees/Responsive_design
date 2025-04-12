import React from 'react'
import icon01 from '../assets/img/icon-01.png'
import icon02 from '../assets/img/icon-02.png'
import icon03 from '../assets/img/icon-03.png'

function Community() {
    return (
        <div className=' container mx-auto max-w-[1320px] text-center border border-[#E6E6E6] border-dashed bg-[#FCFCFC] p-14 w-full group hover:bg-[#F5F5F5] transition duration-500 hover:duration-200'>
            <h2 className=' text-[2.25rem] font-semibold text-[#4D4D4D]'> Manage your entire community <br /> in single system </h2>
            <p className=' mb-5 text-[#717171]'> Who is Nextcent suitable for?</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-[10px] m-10 md:m-0 justify-center isolate'>
                <div className=' shadow-lg bg-[#FCFCFC] p-10 rounded-lg grid place-items-center ring-1 ring-black/[0.08]  relative left-2.5 top-1.5 -rotate-6  group-hover:-translate-x-5 group-hover:-rotate-12 group-hover:-translate-y-0.5 transition duration-500 group-hover:duration-200'>
                    <img className=' mx-auto' src={icon01} alt="" />
                    <h3 className=' text-[1.75rem] font-bold text-[#4D4D4D] my-3'>Membership <br /> Oranisations</h3>
                    <p>Our membership management sofware provides full automation of membership renewals and pyments</p>
                </div>
                <div className='shadow-lg bg-[#FCFCFC] p-10 rounded-lg  grid place-items-center ring-1 ring-black/[0.08] z-10 group-hover:-translate-y-0.5 transition duration-500 group-hover:duration-200'>
                    <img className='mx-auto' src={icon02} alt="" />
                    <h3 className='text-[1.75rem] font-bold text-[#4D4D4D] my-3'>National <br /> Associations</h3>
                    <p>Our membership management sofware provides full automation of membership renewals and pyments</p>
                </div>
                <div className='shadow-lg bg-[#FCFCFC] p-10 rounded-lg grid place-items-center ring-1 ring-black/[0.08] relative right-2.5 top-1.5 rotate-6 group-hover:translate-x-5 group-hover:rotate-12 group-hover:-translate-y-0.5 transition duration-500 group-hover:duration-200'>
                    <img className='mx-auto' src={icon03} alt="" />
                    <h3 className='text-[1.75rem] font-bold text-[#4D4D4D] my-3'>Clubs And <br /> Groups</h3>
                    <p>Our membership management sofware provides full automation of membership renewals and pyments</p>
                </div>

            </div>
        </div>
    )
}

export default Community
