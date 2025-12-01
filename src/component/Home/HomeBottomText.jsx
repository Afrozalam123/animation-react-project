import React from 'react'
import {Link} from  'react-router-dom'
const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-4  '>
      <div className='text-[6.5vw] uppercase border-5 border-white hover:border-green-500 rounded-full px-10 pb-3 pt-1 hover:text-amber-200 duration-200 leading-[5.5vw] italic'  >
       <Link className='text-[6vw] mt-6' to='/Projects'>Projects</Link>
      </div> 
      <div className='text-[6.5vw] uppercase border-5 border-white hover:border-green-500 rounded-full px-10 pb-3 pt-1 hover:text-amber-300 duration 300 leading-[5.5vw]  italic'  >
     <Link className='text-[6vw] mt-6' to='/agence'>agence</Link>
      </div>
     
    </div>
  )
}

export default HomeBottomText




 