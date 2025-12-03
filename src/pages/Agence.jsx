import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
// import React from 'react'
import React,{useRef} from 'react'

const Agence = () => {
    gsap.registerPlugin(ScrollTrigger)
    const imageDivRef=useRef(null)
    const imageRef=useRef(null)

    const imageArray=[
      "https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7",
      "https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64",
     " https://k72.ca/images/teamMembers/Lawrence_480x640.jpg?w=480&h=640&fit=crop&s=0a878205586092164001a9afe0ef4007",
      "https://k72.ca/images/teamMembers/HugoJoseph_480x640.jpg?w=480&h=640&fit=crop&s=f152025b8a59b062d1e7978b5d6544c3",
      "https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991",
       "https://k72.ca/images/teamMembers/SophieA_480x640.jpg?w=480&h=640&fit=crop&s=fcb556060c29623e706dfbc4eeca87ac",
       "https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2",
       "https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6",
       "https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a",

       "https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847",

       "https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6",
    ]
   
    useGSAP(function(){
      gsap.to(imageDivRef.current,{
       scrollTrigger:{
        trigger:imageDivRef.current,
        start:'top 35%',
        end:'top -100%',
        scrub:true,
        pin:true,
         onUpdate:function(elem){
           let imageIndex;
            if(elem.progress<1){
               imageIndex=Math.floor(elem.progress*imageArray.length)
            }else{
              imageIndex=imageArray
            }
          
            imageRef.current.src=imageArray[imageIndex]
         }
       }
      })
    })
  
  return (
   <div className='section1'>
    <div ref={imageDivRef} className='  absolute  overflow-hidden  h-[20vw] w-[15vw]  top-85  left-[30vw] rounded-3xl '>
    <img ref={imageRef} className='h-full w-full object-cover ' src='https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2'/>
    </div>

    <div>
       <div className='font-[font2] relative'>
      <div className='mt-[55vh]'>
        <h1 className='text-[19vw] uppercase leading-[15vw] text-center leading[15vw] text-orange-900 hover:text-pink-700 duration-300 text-shadow-orange-700'>Soixan7e <br/>
Douze</h1>
      </div>

      <div className='pl-[40%] mt-20'>
          <p className='text-6x text-black hover:text-red-400 duration-100'>&nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
      </div>
    </div>
    </div>
   </div>




   
  )
}

export default Agence


