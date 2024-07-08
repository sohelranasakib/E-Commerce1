import React, { useContext, useEffect, useState } from 'react'
import { apiData } from '../ContextApi'
import { FaHeart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { FaCartArrowDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../slice/productSlice';

const Post = ({allData, categorySearchFilter, multiList}) => {
    
    
    let [filterShow, setFilterShow] = useState([])
    let [catShow, setCatshow] = useState(true)
    let dispatch = useDispatch()

    useEffect(()=>{
        let filterAmi = categorySearchFilter.slice(0,5)
        setFilterShow(filterAmi)
    },[categorySearchFilter])
    
    let handleShow = ()=>{
        setFilterShow(categorySearchFilter)
        setCatshow(false)
    }
    let handleHide = ()=>{
        let filterAmi = categorySearchFilter.slice(0,5)
        setFilterShow(filterAmi)
        setCatshow(true)
    }
    let handlePCart = (item)=>{
        dispatch(addToCart({...item, qun:1}))
    }

  return (
    <>
    {categorySearchFilter.length > 0 ?
      <div className="">
      <div className=" flex flex-wrap gap-5">
       {
      filterShow.map((item) => (
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
          
      ))}
    </div>
    {catShow ? categorySearchFilter.length > 5 &&
    <button onClick={handleShow} className=' font-bold border-2 h-[40px] w-[100px] hover:bg-black hover:text-white'>Show All</button>
    :
    <button onClick={handleHide} className=' font-bold border-2 h-[40px] w-[100px] hover:bg-black hover:text-white'>Hide</button>
  }
    
    </div>
     :
     <div className={`${multiList == "activeList" ? "" : "flex justify-between flex-wrap"}`}>
    { allData.map((item) => (
        
            <div className=" lg:w-[32%] w-full py-5">
            
            <div className="">
            <div className=" relative group overflow-hidden">
            <Link to={`/product/${item.id}`}>
                <img src={item.thumbnail} className=' h-[350px]' alt="arrival1" />
                </Link>
                <div className=" bg-white absolute left-0 bottom-[-120px] w-full h-[130px] flex items-center justify-end duration-300 ease-in-out group-hover:bottom-0 ">
                    <ul className=' pr-6'>
                        <li className=' flex items-center justify-end gap-x-4 font-sans font-normal text-[16px] text-[#767676] hover:text-black hover:font-bold'>Add to Wish List <FaHeart /></li>
                        <li className=' flex items-center justify-end gap-x-4 font-sans font-normal text-[16px] text-[#767676] py-3 hover:text-black hover:font-bold'>Compare <TfiReload /></li>
                        <li onClick={()=>handlePCart(item)} className=' flex items-center justify-end gap-x-4 font-sans font-normal text-[16px] text-[#767676] hover:text-black hover:font-bold'>Add to Cart <FaCartArrowDown /></li>
                    </ul>
                </div>
            </div>
            
            <div className=" flex justify-between py-3">
                <h3 className=' font-sans font-bold text-[16px]'>{item.title}</h3>
                <p className=' font-sans font-normal text-[16px] text-[#767676]'>${item.price}</p>
            </div>
            </div>
            
          
            
        </div>
        ))}
        </div>
     }
     
    </>
  )
}

export default Post