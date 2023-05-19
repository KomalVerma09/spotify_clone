import React, { useState } from 'react'
import Data3 from './Data3'

function TopMix() {
  const [showPlayBtn, setshowPlayBtn] = useState(true);
  const [showPlayBtnBiggestHits, setshowPlayBtnBiggestHits] = useState(true);
  const [showPlayBtnRecentlyPlayed, setshowPlayBtnRecentlyPlayed] = useState(true);


  return (
    <div>
      <div className='grid grid-cols-2 pb-5 '>
        <div className='text-white text-2xl font-bold'>
          Your top mixes
        </div>
        <div className='grid justify-end text-[#B3B3B3] font-bold'>
          Show all
        </div>
      </div>
      <div className='grid md:grid-cols-5 grid-cols-2 gap-5 rounded-md'>
        {
          Data3.map((user) => (
            <>
              <div className=' justify-center items relative' >
                <div className='gap-3 flex flex-col pb-3 bg-[#181818] hover:bg-[#1C1C1C] p-4 cursor-pointer rounded-md md:h-72 h-[330px]' onMouseEnter={() => setshowPlayBtn(false)}
                  onMouseLeave={() => setshowPlayBtn(true)}>
                  <div className=' h-40 md:w-full  rounded-md bg-red-500 flex justify-center '><img src={user.img} alt="" className='rounded-md w-full' /> <div className={`absolute inset-0 md:opacity-100 opacity-0 ${showPlayBtn ? "hidden" : ""}`}> <img src={user.play} alt="" className='h-14 w-14 absolute right-5 bottom-[115px]' /></div></div>
                  <div className=''>
                    <div className='text-white text-base font-semibold leading-6'>{user.name}</div>
                    <div className='  text-sm leading-6 text-[#B3B3B3]'>{user.title}</div>
                  </div>
                </div>
              </div>
            </>
          ))
        }


      </div>
      <div className='grid grid-cols-2 py-5 '>
        <div className='text-white text-2xl font-bold'>
          Today's biggest hits
        </div>
        <div className='grid justify-end text-[#B3B3B3] font-bold'>
          Show all
        </div>
      </div>
      <div className='grid md:grid-cols-5 grid-cols-2 gap-5 rounded-md'>
        {
          Data3.map((user) => (
            <>
              <div className=' justify-center items relative' >
                <div className='gap-3 flex flex-col pb-3 bg-[#181818] hover:bg-[#1C1C1C] p-4 cursor-pointer rounded-md md:h-72 h-[330px]' onMouseEnter={() => setshowPlayBtnBiggestHits(false)}
                  onMouseLeave={() => setshowPlayBtnBiggestHits(true)}>
                  <div className=' h-40 md:w-full  rounded-md bg-red-500 flex justify-center '><img src={user.imgBiggestHits} alt="" className='rounded-md w-full' /> <div className={`md:opacity-100 opacity-0 absolute inset-0 ${showPlayBtnBiggestHits ? "hidden" : ""}`}> <img src={user.play} alt="" className='h-14 w-14 absolute right-5 bottom-[115px]' /></div></div>
                  <div className=''>
                    <div className='text-white text-base font-semibold leading-6'>{user.nameBiggestHits}</div>
                    <div className='  text-sm leading-6 text-[#B3B3B3]'>{user.titleBiggestHits}</div>
                  </div>
                </div>
              </div>
            </>
          ))
        }


      </div>

      <div className='grid grid-cols-2 py-5 '>
        <div className='text-white text-2xl font-bold'>
          Recently played
        </div>
        <div className='grid justify-end text-[#B3B3B3] font-bold'>
          Show all
        </div>
      </div>
      <div className='grid md:grid-cols-5 grid-cols-2 gap-5 rounded-md'>
        {
          Data3.map((user) => (
            <>
              <div className=' justify-center items relative' >
                <div className='gap-3 pb-3 bg-[#181818] hover:bg-[#1C1C1C] p-4 cursor-pointer rounded-md md:h-72 h-[330px] flex flex-col' onMouseEnter={() => setshowPlayBtnRecentlyPlayed(false)}
                  onMouseLeave={() => setshowPlayBtnRecentlyPlayed(true)}>
                  <div className=' h-40 md:w-full  rounded-md bg-red-500 flex justify-center '><img src={user.imgRecentlyPlayed} alt="" className='rounded-md w-full' /> <div className={`md:opacity-100 opacity-0 absolute inset-0 ${showPlayBtnRecentlyPlayed ? "hidden" : ""}`}> <img src={user.play} alt="" className='h-14 w-14 absolute right-5 bottom-[115px]' /></div></div>
                  <div className=''>
                    <div className='text-white text-base font-semibold leading-6'>{user.nameRecentlyPlayed}</div>
                    <div className='  text-sm leading-6 text-[#B3B3B3]'>{user.titleRecentlyPlayed}</div>
                  </div>
                </div>
              </div>
            </>
          ))
        }


      </div>


    </div>
  )
}

export default TopMix