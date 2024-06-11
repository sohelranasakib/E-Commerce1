import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { RxCross2 } from "react-icons/rx";
import cartimg from "../assets/cartsingle.png"
import {  useDispatch, useSelector } from 'react-redux';
import { productDecrement, productIncrement, productRemove } from '../components/slice/productSlice';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
  let dispatch = useDispatch()
  let navigate = useNavigate()
  let data = useSelector((state)=>state.product.cartItem)

  let handleIncrement = (index)=>{
    dispatch(productIncrement(index))
  }
  let handleDecrement = (index)=>{
    dispatch(productDecrement(index))
  }
  
  let handleRemove = (index)=>{
    dispatch(productRemove(index))
  }

  const { totalPrice, totalQuantity} = data.reduce((acc, item)=>{
    acc.totalPrice += item.price * item.qun
    acc.totalQuantity += item.qun
    return acc
  }, {totalPrice:0, totalQuantity:0})
  

  let handleCheckOut = ()=>{
    toast("Wow so easy!")
    setTimeout(()=>{
      navigate("/checkout")
    }, 2000)
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
     <div className="" onClick={()=>handleRemove(index)}>
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
       <div className="" onClick={()=>handleDecrement(index)}>-</div>
       <div className="">{item.qun}</div>
       <div onClick={ ()=>handleIncrement(index)} className="">+</div>
     </div>
 </div>
 <div className="w-[15%]">
   <h2 className=' text-center'>${item.price * item.qun}</h2>
 </div>
</Flex>
    ))}

    <div className=" flex justify-end">
     <div className="">
     <h2 className='font-sans text-[#262626] text-[22px] font-bold text-end'>Cart totals</h2>
      <div className=" flex">
      <div className=" w-[200px] border-2 border-[#262626]">
          <h2 className=' text-center'> Subtotal</h2>
        </div>
        <div className="w-[250px] border-2 border-[#262626] pl-4">
          <h3>{totalPrice}$</h3>
          </div>
      </div>
      <div className="flex my-1">
        <div className="w-[200px] border-2 border-[#262626]">
          <h3 className=' text-center'>Quantity</h3>
        </div>
        <div className="w-[250px] border-2 border-[#262626] pl-4">
          <h3>{totalQuantity}</h3>
        </div>
      </div>
      <div className="flex ">
        <div className="w-[200px] border-2 border-[#262626]">
          <h3 className=' text-center'>Total</h3>
        </div>
        <div className="w-[250px] border-2 border-[#262626] pl-4">
          <h3>{totalPrice}$</h3>
        </div>
      </div>
      <div className=" pt-2" onClick={handleCheckOut}>
        <p className='w-[200px] h-[50px] border-2 border-[#fff] inline-block text-center leading-[40px] bg-[#262626] text-[rgba(255,255,255,0.7)] hover:text-white'>Proceed to Checkout</p>
      </div>
     </div>
    </div>
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
   
   </Container>
 </div>
  )
}

export default Cart