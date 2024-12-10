"use-client"
import React, {useState } from 'react'
import {corouselData} from '../data'
/* interface Data{
    name:string;
    quote:string;
    image:string;
}
interface propsData{
    data:Data,
    index:number
} */

const Corousel = () => {
  const [corouselIndex , setCorouselIndex] = useState(0);
  /* useEffect(()=>{
    const timer=setTimeout(()=>{
      clickHandler();
      console.log("settimeoutCalled");
      
    },5000)
    return ()=>clearTimeout(timer);
  },[corouselIndex]) */

 
 const length = corouselData.length;
 const clickHandler=()=>{
  setCorouselIndex((prevValue)=> (prevValue+1)%length);
  console.log("current value",corouselIndex);
 }
  return (
    <div className='corousel w-full h-screen'> 
        <div className='corousel-wrapper relative w-full h-full '>
        {corouselData.map((item,index)=>(
            <div key={index} className={`${index===corouselIndex ? 'corousel-card carousel-active':'corousel-card'} w-[100%] h-[100%] absolute`}>
              <img className='w-full h-full object-cover' src={`${item.image}`} alt='image'/>
              <div className='corousel-data absolute top-10 left-5 text-white p-4'>
                <h2 className='text-responsiveMedium'>{item.name}</h2>
                <h2 className='text-responsiveSmall'>{item.quote}</h2>
                </div>
            </div>
        ))}
        <div className='absolute top-[50%] w-full flex justify-between p-10'>
                  <button className='w-12 h-12 text-3xl bg-white rounded-full' onClick={()=>clickHandler()}>&lt;</button>
                   <button className='w-12 h-12 text-3xl bg-white rounded-full' onClick={()=>clickHandler()}>&gt;</button>
                </div>
        </div>
    </div>
  )
}

export default Corousel