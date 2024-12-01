"use client";
import React, { useEffect, useRef, useState } from "react";
import { cardData } from "../data";
import Card from "./Card";
const Hero = () => {

  const [expenseState , setExpenseState]=useState('Edit Expense');
  const sectionRef2 = useRef(null);
  const sectionRef1 = useRef(null);
  const expenseClickHandler=(value:string)=>{
    setExpenseState(value)
  }
  useEffect(()=>{
    const section2 = sectionRef2.current;
    const section1 =sectionRef1.current;
    const scrollHandler =(entries)=>{
     entries.forEach(element => {
      if(element.isIntersecting)
      {
        section1.classList.add('myBright');
        section1.classList.remove('myDark');
        console.log("Scrolled Down");}
      else
      {
        section1.classList.remove('myBright');
        section1.classList.add('myDark');
       console.log("Scrolled Up");
      }
     });
    }

    const observer = new IntersectionObserver(scrollHandler,{
      threshold:0.7,
    })
    observer.observe(section2);
    return () => observer.disconnect();
  },[])
  return (
    <>
      <div className="bg-mygreen h-auto w-full pt-20">
        <div className="pt-20 pl-8">
          <button className=" rounded-2xl p-3 m-2 text-blue bg-gradient-to-r from-blue-200 to-red-200">
            Explore our Fund ERP software
          </button>
          <h1 className="text-myblue text-responsiveLarge leading-none .animate-fade-in">
            Build to Scale
            <br className="m-0 p-0"></br>
            all private firms
          </h1>
          <h2 className="text-myblue text-responsiveSmall mt-4 ml-1">
            FinWithUs provides investors and Innovators <br /> with tools to
            grow{" "}
          </h2>
          <button className="bg-white m-4 md:w-auto w-[40%] rounded-lg p-3 text-sm md:text-lg hover:bg-gray-50 ">
            Contact Sales
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cardData.map((item, index) => (
              <Card items={item} key={index} />
            ))}
          </div>
        </div>
      </div>
      <div  ref ={sectionRef1} className="transistion-box-1 myDark pt-14">
        <section className="flex justify-center w-full">
          <div className="partners-center-box flex-col flex  justify-center">
            <div className="text-center  w-auto self-center ">
              <h2 className="text-responsiveSmall">
                Better together.{" "}
                <span className="text-myblue text-responsiveSmall md:text-responsiveMedium">
                  FinWithUs
                </span>{" "}
                partners with Industry leaders
              </h2>
            </div>
            <div className="partners-parent grid gap-2 sm:grid-cols-[auto_1fr] text-center self-center">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <span className="w-3rem h-3rem border-r-2 pr-2 border-white flex items-center justify-center">
                  4Pines
                </span>
                <span className="w-3rem h-3rem border-r-2 pr-2 border-white flex items-center justify-center">
                  ADANI
                </span>
                <span className="w-3rem h-3rem border-r-2 pr-2 border-white flex items-center justify-center">
                  RELIANCE
                </span>
                <span className="w-3rem h-3rem border-r-2 pr-2 border-white flex items-center justify-center">
                  HAWKTHU
                </span>
              </div>
              <div className="flex justify-center  items-center">
                <span className="w-2rem h-2rem flex items-center justify-center">
                  BellTowers
                </span>
              </div>
            </div>
            <div className="mt-10">
              <button className="rounded-xl text-white p-2 bg-gradient-to-r hover:border-myblue hover:border-2 from-blue-950 to-orange-950 ">
                Our Premier partnership program assembles top professional to
                deliver comprehensive expertise and support &rarr;
              </button>
            </div>
          </div>
        </section>

        <section  ref={sectionRef2} className="flex flex-col mt-36 pl-12">
          <div>
             <h2 className="md:text-responsiveSmall">Software for Venure & Private Equity</h2>
          </div>
          <div>
            <h1 className="md:text-responsiveMedium text-responsiveSmall mt-10 leading-tight">Our software suite amplifies
              <br/>
              opportuinity for venture and private
              <br/>
              equity firms regardless of stage or provider.
            </h1>
          </div>
        </section>
      </div>
      <div className="loading-affect flex flex-col gap-8 sm:flex-row p-14 text-center sm:h-40rem">
        <div className="flex flex-col flex-1  justify-between">
          <div>
          <button name='Edit Expense' onClick={(e)=>expenseClickHandler(e.currentTarget.name)} className="expenseButton"><h2>Edit Expense</h2></button>
         <button name='Limit Expense' onClick={(e)=>expenseClickHandler(e.currentTarget.name)} className="expenseButton"><h2>Limit Expense</h2></button>
         <button name='Expense Data' onClick={(e)=>expenseClickHandler(e.currentTarget.name)} className="expenseButton"><h2>Expense data</h2></button>
         <button name='Optimize Expense' onClick={(e)=>expenseClickHandler(e.currentTarget.name)} className="expenseButton border-b-2 border-gray-500"><h2>Optimize Expense</h2></button>
        </div>
        <div>
          <p className="text-responsiveSmall">A branded, secure doc sharing experience for your LPs.</p>
          <button className="buttonDark hover:text-mygreen hover:bg-white ">Explore More</button>
        </div>
          </div>
        <div className="flex-1 bg-gray-200 rounded-lg p-4">
         <h3>!Kindly note the functionality still needs to be added coming soon....</h3>
         <p className="text-responsiveMedium mt-2">{expenseState}</p>
         <div className="grid grid-cols-4 gap-4 self-center">
          <div className="w-[40%] h-20rem bg-blue-400"><div className="h-[40%] bg-gray-400"></div></div>
          <div className="w-[40%] h-20rem bg-blue-400"><div className="h-[60%] bg-gray-400"></div></div>
          <div className="w-[40%] h-20rem bg-blue-400"><div className="h-[20%] bg-gray-400"></div></div>
          <div className="w-[40%] h-20rem bg-blue-400"><div className="h-[80%] bg-gray-400"></div></div>
         </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
