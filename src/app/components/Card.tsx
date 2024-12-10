import React from 'react'
import Image from 'next/image'
interface propsData{
  title:string,
  description:string,
  image:string,
}
interface cardType {
  items:propsData,
}
const Card = ({items}:cardType) => {
  return (
    <div className=' rounded p-2 border-green-900 border-t-2 border-b-2 m-2'>
        <div className='text-white p-2'>
        <p className='font-bold text-lg mb-3'>{items.title}</p>
        <Image src={items.image}
        alt="finimage"
        width={50}
        height={100}
        className='w-[90%] hover:scale-95 rounded-lg transistion-transform duration-300 ease-in-out'
        layout='responsive'/>
        <p className='mt-2'>{items.description}</p>
        </div>
        
    </div>
  )
}

export default Card