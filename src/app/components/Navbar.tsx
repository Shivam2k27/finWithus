"use client";
import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [isScroll , setIsscroll] = useState(true);
    const [listButton , setlistButton]=useState(true);
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
        <div className={`${isScroll? "myDark":"myBright"}  flex flex-col w-full h-14 md:flex `}>
            <div className='md:block block'>
            <p className='text-2xl p-2 ml-2 mr-8'>FinWithUs</p>
            </div>
        <ul className={ `bg-mygreen z-999 w-full md:flex md:w-[100%]  md:bg-transparent md:absolute md:top-1.5 md:left-48 md:text-center ${isScroll?"md:myDark":"md:myBright"} ${listButton?"hidden":""}`}>
            <li className={`h-10 md:w-[10%] hover:text-blue-600 md:text-lg text-2xl text-center ${isScroll?"md:myDark":"md:myBright"}`}>Products</li>
            <li className={`h-10 md:w-[10%]  hover:text-blue-600 md:text-lg  text-2xl text-center ${isScroll?"md:myDark":"md:myBright"}`}>Pricing</li>
            <li className={`h-10 md:w-[10%]  hover:text-blue-600 md:text-lg text-2xl text-center ${isScroll?"md:myDark":"md:myBright"}`}>Resources</li>
        </ul>
        <div className={`right-signIn  md:absolute md:right-2   md:top-0 ${listButton?"hidden":""} md:block z-99`}>
                <div className='flex-col md:flex-row  gap-6  text-center  items-center h-[100%] z-10'>
                <button className={`${isScroll?"buttonDark":"buttonLight"} mb-4 w-[90%]  md:mr-4 md:mt-2 md:w-28`}>Get Started</button>
                <button className={`${isScroll?"buttonLight":"buttonDark"} w-[90%] md:mr-4 md:mt-2  md:w-28`}>Sign-In</button>
                </div>
            </div>
        </div>
        <div className="md:hidden fixed top-2 right-4 rounded-lg w-10 h-10 bg-white">
        <button  onClick={()=>setlistButton((prevValue)=>!prevValue)} className={`${listButton?"bg-blue-400":"bg-red-400"} `}><img  className=''src='/list.png' alt='listIcon'/></button>
        </div>
    </div>
  )
}

export default Navbar