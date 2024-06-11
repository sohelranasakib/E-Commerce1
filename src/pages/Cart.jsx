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
 <>
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
       <Flex className="gap-x-5 py-4 border-[1px] pl-5 items-center">
                <select
                  name=""
                  id=""
                  className="border-2 w-[200px] py-[5px] font-sans text-[14px] text-[#262626] font-bold"
                >
                  <option
                    className="font-sans text-[14px] text-[#262626] font-bold"
                    value=""
                  >
                    SIZE
                  </option>
                  <option
                    className="font-sans text-[14px] text-[#262626] font-bold"
                    value=""
                  >
                    S
                  </option>
                  <option
                    className="font-sans text-[14px] text-[#262626] font-bold"
                    value=""
                  >
                    M
                  </option>
                  <option
                    className="font-sans text-[14px] text-[#262626] font-bold"
                    value=""
                  >
                    L
                  </option>
                  <option
                    className="font-sans text-[14px] text-[#262626] font-bold"
                    value=""
                  >
                    XL
                  </option>
                  <option
                    className="font-sans text-[14px] text-[#262626] font-bold"
                    value=""
                  >
                    XXL
                  </option>
                </select>
                <div className="">
                  <h4 className="font-sans text-[14px] text-[#262626] font-bold">
                    Apply coupon
                  </h4>
                </div>
              </Flex>

   <div className="text-end">
            <div className="">
              <h3 className="font-sans text-[20px] text-[#262626] font-bold pb-[24px] pt-[50px]">
                Cart Total
              </h3>
            </div>
            <div className="flex justify-end pb-[45px]">
              <table className="border-2">
                <tr>
                  <td className="border-2 py-2 w-[250px] text-start pl-5 font-sans text-[16px] text-[#262626] font-bold">
                    Total Quantity
                  </td>
                  <td className="border-2 py-2 w-[250px] text-start pl-5 font-sans text-[16px] text-[#262626] font-normal">
                    {totalQuantity}
                  </td>
                </tr>
                <tr>
                  <td className="border-2 py-2 w-[250px] text-start pl-5 font-sans text-[16px] text-[#262626] font-bold">
                    Subtotal
                  </td>
                  <td className="border-2 py-2 w-[250px] text-start pl-5 font-sans text-[16px] text-[#767676] font-normal">
                    {totalPrice} $
                  </td>
                </tr>
                <tr>
                  <td className="border-2 py-2 w-[250px] text-start pl-5 font-sans text-[16px] text-[#262626] font-bold">
                    Total
                  </td>
                  <td className="border-2 py-2 w-[250px] text-start pl-5 font-sans text-[16px] text-[#262626] font-normal">
                    {totalPrice} $
                  </td>
                </tr>
              </table>
            </div>
            <div className="">
              <button
                onClick={handleCheckOut}
                className="font-sans text-[16px] text-[#FFF] font-bold py-[16px] px-[25px] bg-[#262626]"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
          <ToastContainer className="w-[100%] text-center"
            position="top-center"
            autoClose={2500}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            
          />
   </Container>
 </div>
 </>
  )
}

export default Cart