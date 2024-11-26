import React from 'react'
interface buttonType{
    title:string,
    width?:string,
    height?:string,
    theme?:string
    onclick?:()=>void,
}

const Button:React.FC<buttonType> = ({title,width,height,theme}) => {
  return (
    <div>
        <button style={{width:`${width}rem`,height:`${}rem`}}className={`${theme}`}>{title}</button>
    </div>
  )
}

export default Button