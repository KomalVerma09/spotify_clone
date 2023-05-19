import React from 'react'
import { BiPlus } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { BiLibrary } from "react-icons/bi";
import { AiFillCaretDown } from "react-icons/ai";
import { SiSpotify } from "react-icons/si";

import Data from "./Data";

export default function Sidebar() {
    return (
        <div className=''>
            <div className='w-full md:grid  grid-rows-2 md:grid-rows-6 md:fixed md:gap-2 md:w-[430px] lg:w-[28.5%] pb-2 md:pb-0 md:pr-2 bg-[#000000]'>
                <div className=' bg-[#121212] px-6 py-6 rounded-md cursor-pointer md:mb-0 mb-2 md:relative top-0 w-full z-10'>
                    <ul className='text-white flex md:flex-col flex-row md:gap-5 justify-evenly '>
                        <li className='flex text-base gap-0 md:gap-4 font-semibold md:flex-row flex-col items-center'>
                            <AiFillHome className='text-2xl' /> Home
                        </li>
                        <li className='flex md:flex-row flex-col text-base md:gap-4 font-semibold text-[#B3B3B3] hover:text-white items-center'>
                            <FiSearch className='text-2xl' />Search
                        </li>
                        <li className='md:flex-row flex-col text-base md:gap-4 font-semibold text-[#B3B3B3] hover:text-white md:hidden flex items-center'>
                            <BiLibrary className='text-2xl' />Your Library
                        </li>
                        <li className='md:flex-row flex-col text-base md:gap-4 font-semibold text-[#B3B3B3] hover:text-white md:hidden flex items-center'>
                            <SiSpotify className='text-2xl' />Premium
                        </li>
                    </ul>
                </div>
                <div className=' row-span-6 bg-[#121212] px-6 py-6 rounded-md cursor-pointer hidden md:grid'>
                    <div className='flex flex-col text-base gap-5 font-semibold h-auto'>
                        <div className='flex gap-32'>
                            <p className='flex text-[#B3B3B3] hover:text-white gap-2'><BiLibrary className='text-2xl' />Your Library</p>
                            <div className='flex gap-4'>
                                <BiPlus className='text-xl text-[#B3B3B3] hover:text-white hover:bg-[#232323] rounded-full' />
                                <AiOutlineArrowRight className='text-xl text-[#B3B3B3] hover:text-white hover:bg-[#232323] rounded-full' />
                            </div>
                        </div>
                        <div className='flex '>
                            <button type="button" className="px-3 py-1.5 text-sm font-semibold rounded-full bg-[#232323] hover:bg-[#222121] text-white mr-2">Playlists</button>
                            <button type="button" className="px-3 py-1.5 text-sm font-semibold rounded-full bg-[#232323] hover:bg-[#222121] text-white">Albums</button>
                        </div>
                        <div className='flex gap-40'><span className='text-[#B3B3B3] hover:text-white hover:bg-[#232323] rounded-full p-1'><FiSearch className='text-xl  ' /></span><p className='flex text-[#B3B3B3] hover:text-white gap-2 justify-center items-center'>Your Library<AiFillCaretDown className='text-base' /></p></div>
                        <div>
                            {
                                Data.map((user) => (
                                    <>
                                        <div className='flex gap-2 pb-3 items-center'>
                                            <div className='bg-red-500 h-14 w-14 rounded-md'><img src={user.img} alt="" className='rounded-md' /></div>
                                            <div className=''>
                                                <div className='text-white text-base font-semibold leading-6'>{user.name}</div>
                                                <div className='  text-sm leading-6 text-[#B3B3B3]'>{user.title}</div>
                                            </div>
                                        </div>
                                    </>
                                ))}</div>
                    </div>


                </div>
            </div>
        </div>
    )
}
