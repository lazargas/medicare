"use client"
import React from 'react'

type Props = {
    height:any;
    width:any;
    children?:any;
    parentWidth?:any;
}

const AdSlots = (props: Props) => {
    const {height,width,parentWidth} = props;
  return (
    <div className={`flex justify-center items-center p-2`} style={{height:height,width:parentWidth?parentWidth:"100%"}} >
         <div className={`h-[100%] bg-[#EAEAEA] flex justify-center items-center `} style={{width:width}} >
              {props.children}
         </div>
    </div>
  )
}

export default AdSlots