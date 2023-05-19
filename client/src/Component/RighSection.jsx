import React, { useState } from 'react'
import Data2 from './Data2'
import Data3 from './Data3';
function RighSection() {
  const [showPlayBtn, setshowPlayBtn] = useState(true);
  return (
    <div className='  rounded-md '>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-3 items-center'>
        {
          Data2.map((user) => (
            <>
              <div className=' relative rounded-md bg-[#302944] hover:bg-[#2D2938] ' onMouseEnter={() => setshowPlayBtn(false)}
                onMouseLeave={() => setshowPlayBtn(true)}>
                <div className='flex  items-center relative  w-full '>
                  <div className=' h-20 w-20  rounded-l-md rounded-none '><img src={user.img} alt="" className='rounded-l-md h-full' /></div>
                  <div className='pl-2'>
                    <div className='text-white text-base font-semibold leading-6'>{user.name}</div>
                    <div className='  text-white text-base font-semibold'>{user.title}</div>



                  </div>

                  <div className={`absolute inset-0 md:opacity-100 opacity-0 ${showPlayBtn ? "hidden" : ""}`}>
                    <img src={user.play} alt="" className='h-14 w-14 absolute right-3 top-3' />
                  </div>
                </div>
              </div>







            </>
          )

          )}

      </div>
    </div>
  )
}

export default RighSection