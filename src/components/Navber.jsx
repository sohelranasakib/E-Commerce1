import React, { useContext, useEffect, useRef, useState } from 'react';
import Container from './Container';
import Flex from './Flex';
import { FaBars, FaCartArrowDown, FaSearch, FaUser } from 'react-icons/fa';
import { MdArrowDropDown } from 'react-icons/md';
import cartimg from '../assets/cart.png';
import { RxCross2 } from 'react-icons/rx';
import { useSelector } from 'react-redux';
import { apiData } from './ContextApi';
import { useNavigate } from 'react-router-dom';

const Navber = () => {
    let info = useContext(apiData);
    let data = useSelector((state) => state.product.cartItem);
    let [cartShow, setCartShow] = useState(false);
    let [usercartShow, setUserCartShow] = useState(false);
    let [accountShow, setAccountShow] = useState(false);
    let [searchInput, setSearchInput] = useState('');
    let [searchFilter, setSearchFilter] = useState([]);
    let [selectedIndex, setSelectedIndex] = useState(-1);
    let cartref = useRef();
    let userref = useRef();
    let accountref = useRef();
    let navigate = useNavigate();

    useEffect(() => {
        document.addEventListener('click', (e) => {
            if (cartref.current.contains(e.target)) {
                setCartShow(!cartShow);
            } else {
                setCartShow(false);
            }
            if (userref.current.contains(e.target)) {
                setUserCartShow(!usercartShow);
            } else {
                setUserCartShow(false);
            }
            if (accountref.current.contains(e.target)) {
                setAccountShow(!accountShow);
            } else {
                setAccountShow(false);
            }
        });
    }, [cartShow, usercartShow, accountShow]);

    let handleInput = (e) => {
        setSearchInput(e.target.value);
        if (e.target.value === '') {
            setSearchFilter([]);
        } else {
            let searchOne = info.filter((item) => item.title.toLowerCase().includes(e.target.value.toLowerCase()));
            setSearchFilter(searchOne);
        }
        setSelectedIndex(-1);
    };

    let handleSingleSearch = (id) => {
        navigate(`/product/${id}`);
        setSearchFilter([]);
        setSearchInput('');
    };

    let handleKey = (e) => {
        if (e.key === 'ArrowDown') {
            setSelectedIndex((prevIndex) => (prevIndex + 1) % searchFilter.length);
        } else if (e.key === 'ArrowUp') {
            setSelectedIndex((prevIndex) => (prevIndex - 1 + searchFilter.length) % searchFilter.length);
        } else if (e.key === 'Enter') {
            if (selectedIndex >= 0 && selectedIndex < searchFilter.length) {
                handleSingleSearch(searchFilter[selectedIndex].id);
            }
        }
    };

    return (
        <section className='bg-[#F5F5F3] py-5 '>
            <Container>
                <Flex className='items-center'>
                    <div className='w-[30%] relative lg:left-0 left-[60px]'>
                        <div ref={cartref} className='flex items-center gap-2'>
                            <FaBars />
                            <p className='font-sans font-bold text-[16px] hidden lg:block lg:text-[#767676] text-white hover:text-[#262626]'>
                                Shop by Category
                            </p>
                        </div>
                        {cartShow && (
                            <div className='absolute top-[50px] z-50 lg:left-0 left-0 bg-[#262626] w-[250px]'>
                                <ul className='py-4'>
                                    <li className='text-[rgba(255,255,255,0.7)] font-sans text-[16px] py-2 duration-300 ease-in-out pl-3 hover:pl-6 hover:text-white'>
                                        Accessories
                                    </li>
                                    <li className='text-[rgba(255,255,255,0.7)] font-sans text-[16px] py-2 duration-300 ease-in-out pl-3 hover:pl-6 hover:text-white'>
                                        Furniture
                                    </li>
                                    <li className='text-[rgba(255,255,255,0.7)] font-sans text-[16px] py-2 duration-300 ease-in-out pl-3 hover:pl-6 hover:text-white'>
                                        Electronics
                                    </li>
                                    <li className='text-[rgba(255,255,255,0.7)] font-sans text-[16px] py-2 duration-300 ease-in-out pl-3 hover:pl-6 hover:text-white'>
                                        Clothes
                                    </li>
                                    <li className='text-[rgba(255,255,255,0.7)] font-sans text-[16px] py-2 duration-300 ease-in-out pl-3 hover:pl-6 hover:text-white'>
                                        Bags
                                    </li>
                                    <li className='text-[rgba(255,255,255,0.7)] font-sans text-[16px] py-2 duration-300 ease-in-out pl-3 hover:pl-6 hover:text-white'>
                                        Home appliances
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className='w-[40%]'>
                        <div className='relative'>
                            <input
                                value={searchInput}
                                onKeyDown={handleKey}
                                onChange={handleInput}
                                placeholder='search...'
                                type='search'
                                className='w-full h-[50px] border-2 border-[#262626] outline-none px-2'
                            />
                            <div className='absolute top-[50%] right-4 translate-y-[-50%]'>
                                <FaSearch />
                            </div>
                            {searchFilter.length > 0 && (
                                <div className='w-[500px] h-[400px] overflow-y-scroll z-50 absolute top-[60px] left-0 bg-[#262626]'>
                                    {searchFilter.map((item, index) => (
                                        <div
                                            key={item.id}
                                            className={`py-3 ${selectedIndex === index ? 'bg-gray-700' : ''}`}
                                            onClick={() => handleSingleSearch(item.id)}
                                        >
                                            <div className='flex justify-around items-center'>
                                                <div className='w-[100px] h-[100px]'>
                                                    <img src={item.thumbnail} alt='' />
                                                </div>
                                                <div className=''>
                                                    <h3 className='text-[rgba(255,255,255,0.7)] hover:text-white'>{item.title}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='lg:w-[30%] w-[25%]'>
                        <div className='flex justify-end items-center gap-x-2'>
                            <div ref={accountref} className='flex relative'>
                                <FaUser />
                                <MdArrowDropDown />
                            </div>
                            <div ref={userref} className=''>
                                <div className='relative'>
                                    {data.length > 0 ? (
                                        <div className='absolute h-[20px] w-[20px] bg-[#767676] left-[10px] top-[-15px] rounded-full text-center text-white'>
                                            {data.length}
                                        </div>
                                    ) : (
                                        ''
                                    )}
                                    <FaCartArrowDown />
                                </div>
                            </div>
                        </div>
                        {accountShow && (
                            <div className='absolute lg:top-[150px] z-50 top-[10px] right-[180px] bg-[#262626] w-[200px] py-[10px]'>
                                <div className='text-center'>
                                    <h3 className='text-[rgba(255,255,255,0.7)] font-sans font-bold text-[16px] py-2 duration-300 ease-in-out pl-3 hover:pl-6 hover:text-white'>
                                        My Account
                                    </h3>
                                </div>
                                <div className=''>
                                    <h4 className='text-[rgba(255,255,255,0.7)] font-sans font-semibold text-[16px] duration-300 ease-in-out pl-3 hover:pl-6 hover:text-white'>
                                        Log In
                                    </h4>
                                    <h4 className='text-[rgba(255,255,255,0.7)] font-sans font-semibold text-[16px] duration-300 ease-in-out pl-3 hover:pl-6 hover:text-white'>
                                        Log Out
                                    </h4>
                                </div>
                            </div>
                        )}
                        {usercartShow && (
                            <div className='w-[300px] z-50 absolute top-[150px] right-[170px] bg-[#262626]'>
                                <div className='py-3'>
                                    <div className='flex justify-around items-center'>
                                        <div className=''>
                                            <img src={cartimg} alt='' />
                                        </div>
                                        <div className=''>
                                            <h3 className='text-[rgba(255,255,255,0.7)] hover:text-white'>Black Smart Watch</h3>
                                            <h5 className='text-[rgba(255,255,255,0.7)] hover:text-white'>$44.00</h5>
                                        </div>
                                        <div className=''>
                                            <RxCross2 className='text-white' />
                                        </div>
                                    </div>
                                    <div className=''>
                                        <h2 className='pl-3 py-3 text-[rgba(255,255,255,0.7)] hover:text-white'>
                                            Subtotal: <span>$44.00</span>
                                        </h2>
                                        <div className='flex justify-around'>
                                            <div className=''>
                                                <a
                                                    className='w-[130px] h-[40px] border-2 border-[#fff] inline-block text-center leading-[40px] text-[rgba(255,255,255,0.7)] hover:text-white'
                                                    href='#'
                                                >
                                                    View Cart
                                                </a>
                                            </div>
                                            <div className=''>
                                                <a
                                                    className='w-[130px] h-[40px] border-2 border-[#fff] inline-block text-center leading-[40px] bg-[#262626] text-[rgba(255,255,255,0.7)] hover:text-white'
                                                    href='#'
                                                >
                                                    Checkout
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </Flex>
            </Container>
        </section>
    );
};

export default Navber;
