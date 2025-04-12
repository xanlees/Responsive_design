import React from 'react';
import Typical from 'react-typical';
import clientLogo01 from '../assets/img/clients/client-01.png';
import clientLogo02 from '../assets/img/clients/client-02.png';
import clientLogo03 from '../assets/img/clients/client-03.png';
import clientLogo04 from '../assets/img/clients/client-04.png';
import clientLogo05 from '../assets/img/clients/client-05.png';
import clientLogo06 from '../assets/img/clients/client-06.png';

const clientImgLOgo = [
  clientLogo01,
  clientLogo02,
  clientLogo03,
  clientLogo04,
  clientLogo05,
  clientLogo06,
];

function Clients() {
  return (
    <div className="container mx-auto max-w-[1320px] p-10 text-center">
      <h2 className="text-[2.25rem] font-semibold text-[#4D4D4D] flex flex-wrap justify-center items-center gap-2">
        <Typical
          steps={[
            'Our Clients', 3000,
            'Our Services', 3000,
            'Our Projects', 3000
          ]}
          loop={Infinity}
          className="typical-wrapper"
        />
      </h2>

      <p className="text-[#717171] mt-2">
        We have been working with some Fortune 500+ clients
      </p>
      <div className="overflow-hidden h-[110px] md:h-[80px] bg-gray-50 shadow-sm p-10 md:p-4 mt-5">
        <ul className="marquee-content flex gap-1 md:gap-20 justify-center items-center animate-marquee">
          {/* {clientImgLOgo.map((logo, index) => (
            <li key={index}>
              <img className="w-[100px] md:w-12" src={logo} alt={`client-${index}`} />
            </li>
          ))} */}
          <li>
            <img className="w-[45px] md:w-12" src={clientLogo01} alt="client-01" />
          </li>
          <li>
            <img className="w-[45px] md:w-12" src={clientLogo02} alt="client-02" />
          </li>
          <li>
            <img className="w-[45px] md:w-12" src={clientLogo03} alt="client-03" />
          </li>
          <li>
            <img className="w-[45px] md:w-12" src={clientLogo04} alt="client-04" />
          </li>
          <li>
            <img className="w-[45px] md:w-12" src={clientLogo05} alt="client-05" />
          </li>
          <li>
            <img className="w-[45px] md:w-12" src={clientLogo06} alt="client-06" />
          </li>

        </ul>
      </div>

    </div>
  );
}

export default Clients;
