"use client";
import React from 'react'
import {cardData} from '../data'
import Card from './Card';
/* const [scroll , setIsscroll]=useState(false) */
const Hero = () => {
  return (
    <>
    <div className='bg-mygreen h-auto w-full pt-20'>
      <div className='pt-20 pl-8'>
      <button className=' rounded-2xl p-3 m-2 text-blue bg-gradient-to-r from-blue-200 to-red-200'>Explore our Fund ERP software</button> 
       <h1 className='text-myblue text-responsiveLarge leading-none .animate-fade-in'>Build to Scale 
        <br className='m-0 p-0'></br>
        all private firms
       </h1>
       <h2 className='text-myblue text-responsiveSmall mt-4 ml-1'>FinWithUs provides investors and Innovators <br/> with tools to grow </h2>
       <button className='bg-white m-4 md:w-auto w-[40%] rounded-lg p-3 text-sm md:text-lg hover:bg-gray-50 '>Contact Sales</button>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cardData.map((item, index) => (
            <Card items={item} key={index} />
          ))}
        </div>
      </div>
    </div>
    <div className='transistion-box-1 bg-mygreen p-16 text-white'>
       <section>
      <div className='partners-center-box flex-col flex text-center '>
       <div className='text-center text-gray-50 w-auto '>
         <h2 className='text-responsiveSmall'>Better together. <span className='text-myblue text-responsiveSmall md:text-responsiveMedium'>FinWithUs</span> partners with Industry leaders</h2>
       </div>
       <div className='partners-parent grid grid-rows-2  md:gird-cols-2'>
         <div className='grid grid-cols-2 md:grid-cols-4'>
          <span className='w-2rem h-2rem  border-r-2'>4Pines</span>
          <span className='w-2rem h-2rem  border-r-2'>4Pines</span>
          <span className='w-2rem h-2rem  border-r-2'>4Pines</span>
          <span className='w-2rem h-2rem  border-r-2'>4Pines</span>
         </div>
         <div>
          <span>BellTowers</span>
         </div>
       </div>
       </div>
       </section>
    </div>
    </>
  )
}

export default Hero