import React from 'react'
import Container from './Container'
import ad from "../assets/add.png"

const Addproduct = () => {
  return (
  <section className=' py-10'>
     <Container>
    <div className="">
        <img src={ad} alt="ad" />
    </div>
   </Container>
  </section>
  )
}

export default Addproduct