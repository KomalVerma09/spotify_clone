import React from 'react'
import Sidebar from './Sidebar'
import RighSection from './RighSection'
import { AiOutlineUser } from "react-icons/ai";
import {IoIosArrowBack} from "react-icons/io";
import {IoIosArrowForward} from "react-icons/io";
import {MdDownloading} from "react-icons/md";
import TopMix from './TopMix';

function Hero() {
  return (
    <div className="p-2 bg-[#000000]">
      <div className="grid md:grid-cols-4">
        <Sidebar/>
        <div className="grid md:col-span-3 col-span-1  bg-gradient-to-t from-[#121212] to-[#20113F] rounded-md p-7 md:ml-[56px] z-20">
          <div className=" flex gap-5 flex-col ">
            <div className="grid grid-cols-2 ">
              <div className="flex gap-4 h-9 ">
                <span className=" text-[#49425B] bg-[#110926] rounded-full p-2 cursor-not-allowed">
                  <IoIosArrowBack className="text-xl  " />
                </span>
                <span className=" text-white bg-[#110926] rounded-full p-2 cursor-not-allowed">
                  <IoIosArrowForward className="text-xl  " />
                </span>
              </div>
              <div className="flex justify-end gap-2 h-9 ">
                <button
                  type="button"
                  className="px-3 py-1.5 text-sm font-semibold rounded-full bg-[#FFFFFF] text-[#000000] transition ease-in-out delay-150 md:hover:-translate-x-1 mf:hover:scale-105"
                >
                  Upgrade
                </button>
                <button
                  type="button"
                  className="px-3 py-1.5 text-sm font-semibold rounded-full bg-[#0D071D]  text-[#FEFEFE] transition ease-in-out delay-150 md:hover:-translate-x-1 md:hover:scale-105 flex items-center gap-1 min-w-max"
                >
                  <MdDownloading className='text-lg'/>Install App
                </button>
                <span className=" bg-[#0D071D]  text-[#FEFEFE] rounded-full p-2 cursor-pointer">
                  <AiOutlineUser className="text-xl  " />
                </span>
              </div>
            </div>
            <h1 className="text-white text-3xl font-bold ">Good afternoon</h1>
            <div className="">
            <RighSection />
            
          </div>
          <TopMix/>        
          </div>
          
          
        </div>
      </div>
    </div>
  );
}

export default Hero