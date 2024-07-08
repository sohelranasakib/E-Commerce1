import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import logo from "../assets/Logo.png"
import { RxCross2 } from "react-icons/rx";
// import { FaBarsStaggered } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Header = () => {
    let [show, setShow] = useState(false)
    let barref = useRef()

  useEffect(()=>{
    document.addEventListener("click", (e)=>{
      if(barref.current.contains(e.target)){
        setShow(!show)
      }else{
        setShow(false)
      }
    })
  },[show])

   
  return (
 <header className='lg:h-[80px] h-[40px] lg:pt-0 pt-[15px] lg:pb-0 pb-[10px]'>
       <Container>
        <Flex className=" justify-between items-center lg:h-[80px] px-[50px] lg:px-0 ">
        <div className="w-[25%]">
           <img src={logo} alt="logo" />
        </div>
        {/* <div className=" w-[75%]">
            <ul className={`lg:flex z-50 justify-center gap-10 lg:static text-center absolute duration-700 ease-out ${show == true ? "bg-[green] top-[50px] left-0 w-full" : " top-[50px] left-[-200px]"}`}>
                <li className=' font-sans font-bold text-[16px] lg:text-[#767676] text-white hover:text-[#262626]'>
                <Link to="/">Home</Link>
                </li>
                <li className=' font-sans font-bold text-[16px] lg:text-[#767676] text-white hover:text-[#262626]'>
                    <Link to="/product">Shop</Link>
                    </li>
                <li className=' font-sans font-bold text-[16px] lg:text-[#767676] text-white hover:text-[#262626]'>About</li>
                <li className=' font-sans font-bold text-[16px] lg:text-[#767676] text-white hover:text-[#262626]'>Contacts</li>
                <li className=' font-sans font-bold text-[16px] lg:text-[#767676] text-white hover:text-[#262626]'>Journal</li>
            </ul>
        </div> */}


<div className="w-2/3 items-center">
              <ul className={`lg:flex lg:flex-row flex flex-col z-50  gap-y-3 gap-x-10  pl-[20px] pt-[20px] lg:pt-0 font-sans text-[#767676] text-[18px] font-medium lg:static fixed duration-[800ms]  ${show == true ? "bg-[#262626] top-[0px] left-0 w-1/2 h-full py-2" : "top-[0px] left-[-250px] h-full"}`}>
                <li className='text-white flex justify-between items-center'>Menu <RxCross2 className='mr-[20px]'/></li>
                <li><a className='lg:hover:text-[#262626] hover:text-white lg:border-none border-b-2 border-[#767676] rounded-sm' href="#"><Link to="/">Home</Link></a></li>
                <li><a className='lg:hover:text-[#262626] hover:text-white lg:border-none border-b-2 border-[#767676] rounded-sm' href="#"><Link to="/product">Shop</Link></a></li>
                <li><a className='lg:hover:text-[#262626] hover:text-white lg:border-none border-b-2 border-[#767676] rounded-sm' href="#"> <Link to="/about"> About</Link></a></li>
                <li><a className='lg:hover:text-[#262626] hover:text-white lg:border-none border-b-2 border-[#767676] rounded-sm' href="#"><Link to="/contact"> Contacts</Link></a></li>
                <li><a className='lg:hover:text-[#262626] hover:text-white lg:border-none border-b-2 border-[#767676] rounded-sm' href="#">Journal</a></li>
              </ul>
            </div>

        {/* <div className=" lg:hidden" onClick={()=>setShow(!show)}>
            {show == true ? <RxCross2 /> : <FaBarsStaggered />}
        </div> */}
         <div className="lg:hidden cursor-pointer" ref={barref}>
              <FaBars />
            </div>
        </Flex>
        
    </Container>
 </header>
  )
}

export default Header




