import React from 'react'
import banner from "../assets/bannerimg.png"
import Slider from "react-slick";
import Container from './Container';
import Flex from './Flex';
import { FaTruck } from "react-icons/fa";
import { IoReload } from "react-icons/io5";

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        arrows: false,
        appendDots: dots => (
          <div
            style={{
              borderRadius: "10px",
              padding: "10px",
              position: "absolute",
              left: "70px",
              top: "50%",
              transform: "translateY(-50%)"
            }}
          >
            <ul style={{ margin: "0px" }}> {dots} </ul>
          </div>
        ),
        customPaging: i => (
          <div className='ami'
            style={{
              width: "30px",
              color: "transparent",
              padding: "10px 0",
              borderRight: "4px #fff solid"
            }}
          >
            0{i + 1}
          </div>
        )
      };
  return (
  <>
    <Slider {...settings}>
       <div className="">
        <img src={banner} alt="" />
    </div>
     <div className="">
        <img src={banner} alt="" />
    </div>
     <div className="">
        <img src={banner} alt="" />
    </div>
     <div className="">
        <img src={banner} alt="" />
    </div>
    </Slider>
    <Container>
        <Flex className=" justify-between">
             <div className="">
                <h2 className=' font-sans font-bold text-[16px] lg:text-[#767676]  text-white '> <span className=' pr-2 font-bold text-[22px]'>2</span> Two years warranty</h2>
             </div>
             <div className="">
                <div className=" flex items-center gap-x-2">
                <FaTruck />
                <h2 className=' font-sans font-bold text-[16px] lg:text-[#767676]  text-white '>Free shipping</h2>
                </div>
             </div>
             <div className="">
                <div className=" flex items-center gap-x-2">
                <IoReload />
                <h2 className=' font-sans font-bold text-[16px] lg:text-[#767676]  text-white '>Return policy in 30 days</h2>
                </div>
             </div>
        </Flex>
    </Container>
  </>
  

  )
}

export default Banner