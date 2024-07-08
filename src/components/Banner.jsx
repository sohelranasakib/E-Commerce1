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
  <section className='lg:mt-0 mt-1'>
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
        <dive className=" lg:flex justify-between ">
             <div className="lg:pl-0 pl-4">
                <h2 className=' font-sans font-bold text-[16px] text-[#767676]  '> <span className=' pr-2 font-bold text-[22px]'>2</span> Two years warranty</h2>
             </div>
             <div className="lg:pl-0 pl-4">
                <div className=" flex items-center gap-x-2">
                <FaTruck />
                <h2 className=' font-sans font-bold text-[16px] text-[#767676]  '>Free shipping</h2>
                </div>
             </div>
             <div className="lg:pl-0 pl-4">
                <div className=" flex items-center gap-x-2">
                <IoReload />
                <h2 className=' font-sans font-bold text-[16px] text-[#767676]   '>Return policy in 30 days</h2>
                </div>
             </div>
        </dive>
    </Container>
  </section>
  

  )
}

export default Banner