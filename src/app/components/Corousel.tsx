import React, { useState } from 'react'
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
    const length = corouselData.length;
const [corouselIndex , setCorouselIndex]=useState(0);
const [fade , setFade]=useState(false);

const clickHandler=()=>{
    setFade(true);
    setTimeout(()=>{
        setCorouselIndex(prevValue=>(prevValue+1
        )%length);
        setFade(false)
    },1000)
}
  return (
    <div className='corousel-parent p-6'>
    <div className={`corousel-box ${fade?"fade":""} w-full h-50rem rounded-lg`}style={{backgroundImage:`url(${corouselData[corouselIndex].image})`,backgroundSize:"cover" ,backgroundRepeat:"no-repeat",backgroundPosition: "center",
}}>
       <p>{corouselData[corouselIndex].name}</p>
       <h3>{corouselData[corouselIndex].quote}</h3>
       <button onClick={()=>clickHandler()}>click</button>
    </div>
    </div>
  )
}

export default Corousel