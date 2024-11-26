"use client";
import React, { useEffect, useState } from 'react'
import Button from '../UI/Button';

const navbar = () => {
    const [isScroll , setIsscroll] = useState(true);
    const scrollHandler=()=>{
        if (window.scrollY > 56) {
            setIsscroll(false); 
          } else {
            setIsscroll(true); 
          }
    }
    useEffect(()=>{
        document.addEventListener('scroll',scrollHandler)
        return()=>document.removeEventListener('scroll',scrollHandler); 
    },[])
  return (
    <div>
        <div className={`${isScroll? "myDark":"myBright"} w-full h-14 md:flex items-center fixed`}>
            <div>
            <p className='text-2xl p-2 mr-8'>FinWithUs</p>
            </div>
        <ul className=' md:block '>
            <li className='md:flex md:gap-2 list-none flex flex-col gap-4'>
                <p className='inline w-full'>Products</p>
                <p className='inline w-full'>Pricing</p>
                <p className='inline w-full'>Resources</p>
            </li>
        </ul>
        <div className='right-signIn   absolute right-2 h-[100%] top-0'>
                <div className='flex  gap-6 justify-between items-center h-[100%]'>
                <button className={`md:${isScroll?`buttonDark`:'buttonLight'} w-28`}>Get Started</button>
                <button className={`md:${isScroll?`buttonLight`:'buttonDark'} w-28`}>Sign-In</button>
                </div>
            </div>
        <div className='absolute top-2 right-4 rounded-lg w-10 h-10 bg-white'>
        <img  className=''src='/list.png' alt='listIcon'/>
        </div>
        </div>
        <div className='w-full h-48'>haha</div>
        <div className='w-full h-48'>haha</div>
        <div className='w-full h-48'>haha</div>
        <div className='w-full h-48'>haha</div>
        <div className='w-full h-48'>haha</div>
        <div className='w-full h-48'>haha</div>
        <div className='w-full h-48'>haha</div>
        <div className='w-full h-48'>haha</div>
        <div className='w-full h-48'>haha</div>
    </div>
  )
}

export default navbar