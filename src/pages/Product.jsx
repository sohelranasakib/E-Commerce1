import React, { useContext } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { apiData } from '../components/ContextApi'
import { Link } from 'react-router-dom';
import Post from '../components/pagination/Post';
import { useState } from 'react';
import PaginationArea from '../components/pagination/PaginationArea';
import { RxCaretRight } from "react-icons/rx";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { PiSquaresFourFill } from "react-icons/pi";
import { GrSort } from "react-icons/gr";



const Product = () => {
    let data = useContext(apiData)

    let [currentPage, setCurrentPage] = useState(1)
    let [perPage, setPerPage] = useState(6)

    let lastPage = currentPage * perPage
    let firstPage = lastPage - perPage

    let allData = data.slice(firstPage, lastPage)

    let pageNumber = []

    for (let i = 0; i < Math.ceil(data.length / perPage); i++) {
        pageNumber.push(i)
    }

    let Paginate = (pageNumber) => {
        setCurrentPage(pageNumber + 1);
    }

    let next = () => {
        if (currentPage < pageNumber.length) {
            setCurrentPage((state) => state + 1)
        }

    }
    let prev = () => {
        if (currentPage > 1) {
            setCurrentPage((state) => state - 1)
        }

    }

    let [catshow, setCatShow] = useState(false)
    let [colshow, setColShow] = useState(false)
    let [brashow, setBraShow] = useState(false)
    let [prishow, setPriShow] = useState(false)

    return (
        <section>
            <Container>
                <Flex>
                    <div className="w-[30%]">
                        <div className="lg:pb-[70px] pb-[10px]">
                            <h2 className='font-sans text-[#262626] lg:text-[36px] text-[20px] font-bold'>Products</h2>
                            <h3 className="flex items-center gap-x-2 font-sans text-[12px] text-[#767676] font-normal">
                                <Link to="/">Home</Link> <RxCaretRight /> Products
                            </h3>
                        </div>
                        <div className="">
                            <h3 onClick={() => setCatShow(!catshow)} className='font-sans lg:text-[20px] text-[12px] font-bold text-[#262626] flex justify-between items-center cursor-pointer'>Shop by Category <p>{catshow == true ? <FaCaretUp /> : <FaCaretDown />}</p></h3>
                            {catshow &&
                                <ul>
                                    <li className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0]'>Category 1</li>
                                    <li className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0]'>Category 2</li>
                                    <li className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0]'>Category 3</li>
                                    <li className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0]'>Category 4</li>
                                    <li className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0]'>Category 5</li>
                                </ul>
                            }
                        </div>
                        <div className="lg:pt-[50px] pt-3">
                            <h3 onClick={() => setColShow(!colshow)} className='font-sans lg:text-[20px] text-[12px] font-bold text-[#262626] flex justify-between items-center cursor-pointer'>Shop by Color <p>{colshow == true ? <FaCaretUp /> : <FaCaretDown />}</p></h3>
                            {colshow &&
                                <ul>
                                    <li className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0] relative after:absolute after:left-0 after:top-[50%] after:translate-y-[-50%] after:h-[10px] after:w-[10px] after:rounded-full after:bg-black pl-5'>Color 1</li>
                                    <li className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0] relative after:absolute after:left-0 after:top-[50%] after:translate-y-[-50%] after:h-[10px] after:w-[10px] after:rounded-full after:bg-[#FF8686] pl-5'>Color 2</li>
                                    <li className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0] relative after:absolute after:left-0 after:top-[50%] after:translate-y-[-50%] after:h-[10px] after:w-[10px] after:rounded-full after:bg-[#7ED321] pl-5'>Color 3</li>
                                    <li className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0] relative after:absolute after:left-0 after:top-[50%] after:translate-y-[-50%] after:h-[10px] after:w-[10px] after:rounded-full after:bg-[#B6B6B6] pl-5'>Color 4</li>
                                    <li className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0] relative after:absolute after:left-0 after:top-[50%] after:translate-y-[-50%] after:h-[10px] after:w-[10px] after:rounded-full after:bg-[#15CBA5] pl-5'>Color 5</li>
                                </ul>
                            }
                        </div>
                        <div className="lg:pt-[50px] pt-3">
                            <h3 onClick={() => setBraShow(!brashow)} className='font-sans lg:text-[20px] text-[12px] font-bold text-[#262626] flex justify-between items-center cursor-pointer'>Shop by Brand <p>{brashow == true ? <FaCaretUp /> : <FaCaretDown />}</p></h3>
                            {brashow &&
                                <ul>
                                    <li className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0]'>Brand 1</li>
                                    <li className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0]'>Brand 2</li>
                                    <li className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0]'>Brand 3</li>
                                    <li className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0]'>Brand 4</li>
                                    <li className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0]'>Brand 5</li>
                                </ul>
                            }
                        </div>
                        <div className="lg:pt-[50px] pt-3">
                            <h3 onClick={() => setPriShow(!prishow)} className='font-sans lg:text-[20px] text-[12px] font-bold text-[#262626] flex justify-between items-center cursor-pointer'>Shop by Price <p>{prishow == true ? <FaCaretUp /> : <FaCaretDown />}</p></h3>
                            {prishow &&
                                <ul>
                                    <li className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0]'>$0.00 - $9.99</li>
                                    <li className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0]'>$10.00 - $19.99</li>
                                    <li className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0]'>$20.00 - $29.99</li>
                                    <li className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0]'>$30.00 - $39.99</li>
                                    <li className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0]'>$40.00 - $69.99</li>
                                </ul>
                            }
                        </div>
                    </div>
                    <div className=" w-[80%] pl-10">
                        <div className=" flex justify-between pt-[130px]">
                            <div className="">
                                <div className="flex gap-x-5 lg:justify-normal justify-center lg:w-[30%] w-100%">
                                    <div className="lg:h-[46px] h-[26px] lg:w-[46px] w-[26px] flex justify-center items-center text-[#737373] hover:text-white duration-300 ease-in-out hover:bg-black border-[1px] border-[#737373] text-[35px]"><PiSquaresFourFill /></div>
                                    <div className="lg:h-[46px] h-[26px] lg:w-[46px] w-[26px] flex justify-center items-center text-[#737373] hover:text-white duration-300 ease-in-out hover:bg-black border-[1px] border-[#737373] text-[35px]"><GrSort /></div>
                                </div>
                            </div>
                            <div className=" flex ">
                                <div className=" flex items-center mr-6">
                                    <h2 className='mr-[10px] font-sans'>Sort by :</h2>
                                    <select className=' px-[47px] py-[5px] border-[1px] border-[#262626] outline-none rounded-[2px]'>
                                        <option>Featured</option>
                                        <option >Price</option>
                                        <option >Category</option>
                                    </select>
                                </div>
                                <div className=" flex items-center">
                                    <h2 className='mr-[10px] font-sans'>Show :</h2>
                                    <select className='px-[47px] py-[5px] border-[1px] border-[#262626] outline-none'>
                                        <option>36</option>
                                        <option >30</option>
                                        <option >20</option>
                                    </select>
                                </div>
                            </div>

                        </div>

                        <div className=" flex justify-between flex-wrap">

                            <Post allData={allData} />

                        </div>
                        <div className=" text-end">
                            <PaginationArea pageNumber={pageNumber} Paginate={Paginate} currentPage={currentPage} next={next} prev={prev} />
                        </div>

                    </div>
                </Flex>
            </Container>
        </section>
    )
}

export default Product