import React, { useContext, useEffect, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import Arrivalsone from './Arrivalsone'
import { apiData } from './ContextApi'
import Slider from "react-slick";
import { FaLongArrowAltRight, FaLongArrowAltLeft  } from "react-icons/fa";
import { Link } from 'react-router-dom'


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className=' h-[50px] w-[50px] bg-[#979797] rounded-full text-center leading-[50px] text-[24px] text-white absolute top-[50%] right-0 lg:right-[-11px] z-50 translate-y-[-50%]'><FaLongArrowAltRight className=' inline-block' /> </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className=' h-[50px] w-[50px] bg-[#979797] rounded-full text-center leading-[50px] text-[24px] text-white absolute top-[50%] left-0 lg:left-[-25px] z-50 translate-y-[-50%]'><FaLongArrowAltLeft className=' inline-block' /> </div>
  );
}



const Newarrivals = () => {
  let data = useContext(apiData)

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };
  
  return (
    <Container>
       <h3 className=' font-bold font-sans text-[39px]'>New Arrivals</h3>
      
        <Slider {...settings} >
        {data.map((item)=>(
          <Link to="/product">
          <Arrivalsone item={item}/>
          </Link>
        ))}
        </Slider>
       
    </Container>
  )
}

export default Newarrivals