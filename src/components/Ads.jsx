import React from 'react'
import Container from './Container'
import Flex from './Flex'
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"


const Ads = () => {
  return (
  <section className=' lg:py-20 py-10'>
      <Container>
        <Flex className="justify-between">
            <div className="w-[48%]">
                <img src={img1} alt="img1" />
            </div>
            <div className=" w-[48%]">
               <div className="">
               <img src={img2} alt="img2" />
               </div>
                <div className=" mt-10">
                <img src={img3} alt="img3" />
                </div>
            </div>
        </Flex>
    </Container>
  </section>
  )
}

export default Ads