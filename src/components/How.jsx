import React from 'react'
import icon02 from '../assets/img/img-02.png'
function How() {
  return (
      <div className='py-10'>
          <div className='container mx-auto max-w-[1320px] p-10 grid grid-cols-1 md:grid-cols-2'>
              <div>
                  <img src={icon02} alt="" />
              </div>
              <div>
                  <h3 className='mt-5 md:mt-0 text-[2.25rem] font-semibold text-[#4D4D4D]'>How to design your site footer like <br /> we did</h3>
                  <p className='my-5 text-[#717171]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui consequuntur nihil perferendis velit, perspiciatis labore commodi quis dolores quasi. Nemo facilis dicta provident iusto ipsa laudantium atque dolor, placeat repellendus!</p>
                  <a className='inline-flex justify-center items-baseline-last mt-5 py-3 px-8 bg-[#4CAF4F] text-white rounded-md' href="">Learn more</a>
              </div>
          </div>
      </div>
  )
}

export default How
