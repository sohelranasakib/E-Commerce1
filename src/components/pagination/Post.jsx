import React, { useContext } from 'react'
import { apiData } from '../ContextApi'
import { FaHeart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { FaCartArrowDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Post = ({allData, categorySearchFilter}) => {
    console.log(categorySearchFilter);
  return (
    <>
    {categorySearchFilter.length > 0 ?
 categorySearchFilter.map((item) => (
    <div className=" w-[32%] py-5">
        <Link to={`/product/${item.id}`}>
        <div className="">
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
        </Link>
      
        
    </div>
))
     :
     allData.map((item) => (
        <div className=" w-[32%] py-5">
            <Link to={`/product/${item.id}`}>
            <div className="">
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
            </Link>
          
            
        </div>
    ))
     }
     
    </>
  )
}

export default Post