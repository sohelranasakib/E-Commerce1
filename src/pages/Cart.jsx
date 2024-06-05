import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { RxCross2 } from "react-icons/rx";
import cartimg from "../assets/cartsingle.png"
import {  useDispatch, useSelector } from 'react-redux';
import { productIncrement } from '../components/slice/productSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
  let dispatch = useDispatch()
  let data = useSelector((state)=>state.product.cartItem)

  let handleIncrement = (index)=>{
    dispatch(productIncrement(index))
  }
  
  return (
 <div className=" my-20">
    <Container>
    <h2 className='font-sans text-[#262626] text-[36px] font-bold'>Cart</h2>
    <p className='font-sans text-[#262626] text-[18px] font-normal'> <Link to="/">Home</Link>	&#62;  Cart</p>
    <Flex className=" justify-between bg-[#F5F5F3] h-[60px] items-center">
       <div className=" w-[40%]">
        <h2 className='font-sans text-[#262626] text-[20px] font-bold pl-36'>Product</h2>
       </div>
       <div className="w-[15%]">
        <h2 className=' text-center font-sans text-[#262626] text-[20px] font-bold'>Price</h2>
       </div>
       <div className="w-[30%]">
        <h2 className=' text-center font-sans text-[#262626] text-[20px] font-bold'>Quantity</h2>
       </div>
       <div className="w-[15%]">
        <h2 className=' text-center font-sans text-[#262626] text-[20px] font-bold'>Total</h2>
       </div>
    </Flex>
    {data.map((item, index)=>(
 <Flex className=" my-14 items-center">
 <div className="w-[40%]">
   <div className=" flex items-center gap-x-10">
     <div className="">
     <RxCross2 />
     </div>
     <div className="">
         <img className=' w-[100px] h-[100px]' src={item.thumbnail} alt="" />
     </div>
     <div className="">
       <h3 className='font-sans text-[#262626] text-[18px] font-normal'>{item.title}</h3>
     </div>
   </div>
 </div>
 <div className="w-[15%]">
   <h2 className=' text-center'>${item.price}</h2>
 </div>
 <div className="w-[30%]">
     <div className=" flex w-[150px] h-[50px] border-2 border-[#262626] justify-around items-center mx-auto">
       <div className="">-</div>
       <div className="">{item.qun}</div>
       <div onClick={ ()=>handleIncrement(index)} className="">+</div>
     </div>
 </div>
 <div className="w-[15%]">
   <h2 className=' text-center'>$gg</h2>
 </div>
</Flex>
    ))}
   
   </Container>
 </div>
  )
}

export default Cart