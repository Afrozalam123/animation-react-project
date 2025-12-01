import React from 'react'
 import Video from '../component/Home/Video'
 import HomeHeroText from "../component/Home/HomeHeroText"
 import HomeBottomText from "../component/Home/HomeBottomText"
const Home = () => {
  return (
    <>
    <div className='h-screen w-screen fixed'>
      <Video />
    </div>

    <div className='h-screen w-screen relative flex flex-col justify-between'>
      <HomeHeroText />
      <HomeBottomText />
      </div>  
    </>

    
    
   
  )
}

export default Home

{/* <div className='h-screen w-screen relative'>
      <HomeHeroText />
      <HomeBottomText />
      </div>   */}