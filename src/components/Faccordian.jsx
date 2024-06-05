import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const Faccordian = () => {
    let [show, setShow] = useState(false)
    let [showe, setShowe] = useState(false)
  return (
    <>
    <div className=" w-[50%] pt-10 py-1 border-b-[1px] border-[#D8D8D8]">
       <div onClick={()=>setShow(!show)} className=" flex justify-between items-center">
       <h3 className='font-bold font-sans text-[20px] text-[#262626] pb-3'>FEATURES  & DETAILS</h3>
       {show == true ? <RxCross2 /> : <FaPlus />}
       </div>
       {show &&
       <p className=' text-[#767676] font-normal font-sans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
       }
    </div>
    <div className=" w-[50%] pt-10 py-1 border-b-[1px] border-[#D8D8D8]">
       <div onClick={()=>setShowe(!showe)} className=" flex justify-between items-center">
       <h3 className='font-bold font-sans text-[20px] text-[#262626] pb-3'>SHIPPING & RETURNS</h3>
        {showe == true ? <RxCross2 />: <FaPlus />}
       </div>
       {showe &&
       <p className=' text-[#767676] font-normal font-sans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
       }
    </div>
    </>
  )
}

export default Faccordian