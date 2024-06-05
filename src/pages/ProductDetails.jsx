import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { FaStar, FaRegStar, FaRegStarHalfStroke  } from "react-icons/fa6";
import Faccordian from '../components/Faccordian'
import { useDispatch } from 'react-redux'
import { addToCart } from '../components/slice/productSlice'







const ProductDetails = () => {
    let [singleData, setSingleData] = useState([]);
    let productId = useParams();
   let dispatch = useDispatch();
    
    

    let getData = ()=>{
        axios.get(`https://dummyjson.com/products/${productId.id}`).then((response)=>{
            setSingleData(response.data);
        })
    }
    
    useEffect(()=>{
      getData()
    },[])

    let clientRating = Array.from({length:5},(elm, index)=>{
      let ratingNumber = index + 0.5
      return(
        singleData.rating >= index + 1 ?  <FaStar  className=' text-[#FFD881]'/> : singleData.rating > ratingNumber  ? <FaRegStarHalfStroke className=' text-[#FFD881]' /> : <FaRegStar  />
      )
    })

     let handleAddTocart = (item)=>{
      dispatch(addToCart({...item, qun:1}));
    
     }

  return (
   <div className="">
    <Container>
      <Flex className="flex-wrap justify-between">
     {singleData?.images?.map((item)=>(
      <div className="w-[48%] my-4">
      <img src={item} alt="Productd" />
    </div> 
     ))}
        
       
      </Flex>
      <div className="">
        <h3 className='font-bold font-sans text-[39px]'>Product</h3>
        <div className=" flex items-center my-3">
        {clientRating}
        <div className=" pl-3">
          <span>Review</span>
        </div>
        </div>
          <h3 className='font-bold font-sans text-[18px] border-b-[1px] border-[#D8D8D8] py-5'>${singleData.price}</h3>  
      </div>
      
      {/* <div className="flex gap-x-6 py-6 items-center">
              <div className="">
                <h3 className='font-sans font-bold text-[16px]  uppercase'>Color :</h3>
              </div>
             
              <div className="flex gap-x-3 ms-[40px]">
                <div className="h-[30px] w-[30px] bg-[#767676] rounded-full"></div>
                <div className="h-[30px] w-[30px] bg-[#FF8686] rounded-full"></div>
                <div className="h-[30px] w-[30px] bg-[#7ED321] rounded-full"></div>
                <div className="h-[30px] w-[30px] bg-[#B6B6B6] rounded-full"></div>
                <div className="h-[30px] w-[30px] bg-[#15CBA5] rounded-full"></div>
              </div>
            </div> */}

            {/* <div className="flex gap-x-6 py-6 items-center">
              <div className="">
                <h3 className='font-sans font-bold text-[16px] text-[#262626] uppercase'>Size :</h3>
              </div>
              <div className="">
                <select name="" id="" className='border-[1px] border-[#F0F0F0] py-2 w-[150px] ms-[64px] px-2'>
                  <option value="">S</option>
                  <option value="">M</option>
                  <option value="">L</option>
                  <option value="">XL</option>
                  <option value="">XXL</option>
                </select>
              </div>
              <div className=""></div>
            </div> */}


            {/* <div className=" w-[50%] flex items-center border-b-[1px] border-[#D8D8D8] py-5">
        <div className=" mr-10">
          <h3 className=' font-normal font-sans text-[18px]'>QUANTITY:</h3>
        </div>
          <div className=" flex w-[150px] h-[50px] border-2 border-[#262626] justify-around items-center">
            <div className="">-</div>
            <div className="">1</div>
            <div className="">+</div>
          </div>
      </div> */}

      {/* <div className=" w-[50%] flex items-center gap-x-6 py-5 border-b-[1px] border-[#D8D8D8]">
        <h3 className=' font-normal font-sans text-[18px]'>STATUS:</h3>
        <h4>0</h4>
      </div> */}

      <div className=" py-6">
      <div className=" w-[50%] py-5 border-b-[1px] border-[#D8D8D8]">
      <a className=' py-[16px] px-[45px] border-2 border-[#262626] inline-block hover:bg-[#262626] hover:text-white cursor-pointer duration-300 ease-in-out'>Add to Wish List</a>
       <Link to="/cart" onClick={()=>handleAddTocart(singleData)}>  
        <a className=' py-[16px] px-[45px] border-2 border-[#262626] inline-block ms-4 hover:bg-[#262626] hover:text-white cursor-pointer duration-300 ease-in-out'>Add to Cart</a>
       </Link>
      </div>
      </div>

      <div className="">
     <Faccordian/>
      </div>
     


    </Container>
   </div>
    
      
  )
}

export default ProductDetails