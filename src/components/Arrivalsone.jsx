import React from 'react'
import arrival1 from "../assets/arrival1.png"
import { FaHeart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { FaCartArrowDown } from "react-icons/fa6";



const Arrivalsone = ({item}) => {
    
  return (
    <div className=" w-full lg:w-[96%] py-5 lg:px-0 px-5">
        <div className=" relative group overflow-hidden">
            <img src={item.thumbnail} className=' h-[350px]' alt="arrival1" />
            <div className=" bg-white absolute left-0 bottom-[-120px] w-full h-[130px] flex items-center justify-end duration-300 ease-in-out group-hover:bottom-0 ">
                <ul className=' pr-6'>
                    <li className=' flex items-center justify-end gap-x-4 font-sans font-normal text-[16px] text-[#767676] hover:text-black hover:font-bold'>Add to Wish List <FaHeart /></li>
                    <li className=' flex items-center justify-end gap-x-4 font-sans font-normal text-[16px] text-[#767676] py-3 hover:text-black hover:font-bold'>Compare <TfiReload /></li>
                    <li className=' flex items-center justify-end gap-x-4 font-sans font-normal text-[16px] text-[#767676] hover:text-black hover:font-bold'>Add to Cart <FaCartArrowDown /></li>
                </ul>
            </div>
        </div>
        <div className=" flex justify-between py-3">
            <h3 className=' font-sans font-bold text-[16px]'>{item.title}</h3>
            <p className=' font-sans font-normal text-[16px] text-[#767676]'>${item.price}</p>
        </div>
    </div>
  )
}

export default Arrivalsone