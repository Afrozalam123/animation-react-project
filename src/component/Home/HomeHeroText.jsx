import React from 'react'
import Video from './Video'
const HomeHeroText = () => {
  return (
    <div className='font-[font2] pt-5 text-center'>
      
      <div className='text-[9.5vw]  justify-center flex items-center  uppercase leading-[8vw] text-white'>
        L'étincelle
        </div>
      <div className='text-[9.5vw] justify-center flex items-center uppercase leading-[8vw] text-green-300'>
        qui
        <div className='h-[8vw]  w-[16vw] rounded-full overflow-hidden'>
          <Video/>
          </div> 
          génère
          </div>
      <div className='text-[9.5vw]  justify-center flex items-center  uppercase  leading-[8vw] text-orange-300' > 
        la créativité
        </div>
    </div>
  )
}

export default HomeHeroText