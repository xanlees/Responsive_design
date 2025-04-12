import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeaderImg from '../assets/img/header-img.png'

function Header() {

  useEffect(() => {
    AOS.init({
      duration: 1200, // animation duration in ms
      once: true,     // whether animation should happen only once
    });
  }, []);

  return (
    <div className='bg-[#F5F7FA] h-auto md:h-[37.5rem] flex items-center md:px-10 '>
      <div className=' container mx-auto max-w-[1320px] p-10 flex flex-col md:flex-row md:justify-between md:items-center md:p-0'>
         <div>
          <h1 className='text-[4rem] leading-[1] font-semibold text-[#4D4D4D]' data-aos="fade-right">
            Lessons and insights <br />
            <span className='text-[#4CAF4F]'>from 8 years</span>
          </h1>
             <p className='text-[#717171] mt-5'> Where fo grow your business as a developer: site or social media?</p>
          <button
            className="rounded-md mt-10 bg-[#4CAF4F] cursor-pointer text-white w-[120px] h-[50px] relative group overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <div className="w-full h-full flex items-center justify-center">
              Register
            </div>
            <div
              className="absolute top-0 left-0 w-[10px] h-[60px] bg-green-900 opacity-40 -skew-x-15 -translate-x-8 group-hover:translate-x-32 transition-all duration-500 ease-in-out"
            >
              &nbsp;
            </div>
          </button>
         </div>
         {/* <div>
            <img src={HeaderImg} alt="" />
         </div> */}
        <div className='flex relative md:right-10 justify-center'>
          <div className="image-container my-5 md:my-0">
            <img
              className="manzdev w-[280px] h-[280px] md:w-[300px] md:h-[280px]"
              src={HeaderImg}
              alt="HeaderImg"
            />
          </div>
         </div>
      </div>
    </div>
  )
}

export default Header
