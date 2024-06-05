import React, { useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import logo from "../assets/Logo.png"
import { RxCross2 } from "react-icons/rx";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Header = () => {
    let [show, setShow] = useState(false)
  return (
 <header className='lg:h-[80px] h-[40px] '>
       <Container>
        <Flex className=" justify-between items-center lg:h-[80px] px-[50px] lg:px-0 ">
        <div className="w-[25%]">
           <img src={logo} alt="logo" />
        </div>
        <div className=" w-[75%]">
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
        </div>
        <div className=" lg:hidden" onClick={()=>setShow(!show)}>
            {show == true ? <RxCross2 /> : <FaBarsStaggered />}
        </div>
        </Flex>
        
    </Container>
 </header>
  )
}

export default Header




