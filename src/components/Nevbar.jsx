import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import { FaAngleRight, FaBars, FaCaretDown, FaShoppingCart, FaUser } from 'react-icons/fa'
import { IoSearchOutline } from 'react-icons/io5'
import { RxCross2, RxCrosshair2 } from 'react-icons/rx'
import { ImCross } from 'react-icons/im'

const Nevbar = () => {
    let cateRef = useRef()
    let accRef = useRef()
    let cartRef = useRef()

    let [show, setshow] = useState(false)
    let [acchow, setAccshow] = useState(false)
    let [cartShow, setCartShow] = useState(false)

    useEffect(() => {
        document.addEventListener("click", (e) => {
            if (cateRef.current.contains(e.target)) {
                setshow(!show)
            } else {
                setshow(false)
            }

            if (accRef.current.contains(e.target)) {
                setAccshow(!acchow)
            } else {
                setAccshow(false)
            }

            if (cartRef.current.contains(e.target)) {
                setCartShow(!cartShow)
            } else {
                setCartShow(false)
            }
        })
    }, [show, acchow, cartShow])

    return (
        <div className='py-3 bg-[#F5F5F3]'>
            <Container>
                <div className="flex items-center">
                    <div className="w-2/7 group cursor-pointer relative">
                        <div ref={cateRef} className="flex items-center lg:gap-3 gap-1 lg:font-semibold text-[10px] lg:text-[16px] font-dm">
                            <FaBars />
                            <h4>Shop by Category</h4>
                        </div>
                        {show &&
                            <div className="bg-[#2D2D2D] lg:py-3 absolute left-0 mt-5 lg:mt-0 lg:top-[55px] w-full z-10">
                                <ul>
                                    <li className='text-white pl-4 text-[10px] lg:text-[18px] border-b py-3 duration-300 hover:pl-6 hover:font-bold group relative'>
                                        <div className="flex items-center justify-between pr-3">
                                            <span>Accessories</span>
                                            <FaAngleRight />
                                            <div className="pl-10 w-[475px] gap-5 shadow-lg absolute text-center top-[-10px] left-90 p-5 text-black hidden group-hover:flex bg-white z-10">
                                              <ul className='text-gray-600 text-sm'>
                                                    <h4 className='font-bold text-black pb-2 text-base'>Computers</h4>
                                                    <li className='hover:text-black'>Computer 1</li>
                                                    <li className='hover:text-black'>Computer 2</li>
                                                    <li className='hover:text-black'>Computer 3</li>
                                                    <li className='hover:text-black'>Computer 4</li>
                                                    <li className='hover:text-black'>Computer 5</li>
                                                    <li className='hover:text-black'>Computer 6</li>
                                                    <li className='hover:text-black'>Computer 7</li>
                                                </ul>
                                                <ul className='text-gray-600 text-sm'>
                                                    <h4 className='font-bold text-black pb-2 text-base'>Computers</h4>
                                                    <li className='hover:text-black'>Computer 1</li>
                                                    <li className='hover:text-black'>Computer 2</li>
                                                    <li className='hover:text-black'>Computer 3</li>
                                                    <li className='hover:text-black'>Computer 4</li>
                                                    <li className='hover:text-black'>Computer 5</li>
                                                    <li className='hover:text-black'>Computer 6</li>
                                                    <li className='hover:text-black'>Computer 7</li>
                                                </ul>
                                               <ul className='text-gray-600 text-sm'>
                                                    <h4 className='font-bold text-black pb-2 text-base'>Computers</h4>
                                                    <li className='hover:text-black'>Computer 1</li>
                                                    <li className='hover:text-black'>Computer 2</li>
                                                    <li className='hover:text-black'>Computer 3</li>
                                                    <li className='hover:text-black'>Computer 4</li>
                                                    <li className='hover:text-black'>Computer 5</li>
                                                    <li className='hover:text-black'>Computer 6</li>
                                                    <li className='hover:text-black'>Computer 7</li>
                                                </ul>
                                                   <ul className='text-gray-600 text-sm'>
                                                    <h4 className='font-bold text-black pb-2 text-base'>Computers</h4>
                                                    <li className='hover:text-black'>Computer 1</li>
                                                    <li className='hover:text-black'>Computer 2</li>
                                                    <li className='hover:text-black'>Computer 3</li>
                                                    <li className='hover:text-black'>Computer 4</li>
                                                    <li className='hover:text-black'>Computer 5</li>
                                                    <li className='hover:text-black'>Computer 6</li>
                                                    <li className='hover:text-black'>Computer 7</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='text-white pl-4 text-[10px] lg:text-[18px] border-b py-3 duration-300 hover:pl-6 lg:hover:font-bold'>
                                        <div className="flex items-center justify-between pr-3">
                                            <span>Furniture</span>
                                            <FaAngleRight />
                                        </div>
                                    </li>
                                    <li className='text-white pl-4 text-[10px] lg:text-[18px] border-b py-3 duration-300 hover:pl-6 hover:font-bold'>
                                        <div className="flex items-center justify-between pr-3">
                                            <span>Electronics</span>
                                            <FaAngleRight />
                                        </div>
                                    </li>
                                    <li className='text-white pl-4 text-[10px] lg:text-[18px] border-b py-3 duration-300 hover:pl-6 hover:font-bold'>
                                        <div className="flex items-center justify-between pr-3">
                                            <span>Clothes</span>
                                            <FaAngleRight />
                                        </div>
                                    </li>
                                    <li className='text-white pl-4 text-[10px] lg:text-[18px] py-3 duration-300 hover:pl-6 hover:font-bold'>
                                        <div className="flex items-center justify-between pr-3">
                                            <span>Bags</span>
                                            <FaAngleRight />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        }
                    </div>

                    <div className="w-4/7">
                        <div className='flex justify-between items-center relative'>
                            <input className="bg-white lg:py-5 pr-[-5px] py-3 pl-[20px] lg:pl-5 lg:pr-[38px] lg:w-full border-0  shadow-lg outline-0" type="text" placeholder='Search Products' />
                            <div className="absolute lg:top-[23px] lg:right-[18px] right-[18px] pl-3 text-gray-600">
                                <IoSearchOutline className='text-[20px] font-bold' />
                            </div>
                        </div>
                    </div>
                    <div className="w-1/7 relative">
                        <div className="flex items-center justify-end lg:gap-x-4 gap-2">
                            
                            <div ref={accRef} className="flex cursor-pointer text-[12px] lg:text-[18px] lg:gap-1">
                                <FaUser />
                                <FaCaretDown />
                            </div>
                            {acchow &&
                                <div className="bg-white absolute top-[50px] lg:top-[55px] lg:right-[60px] w-[70px] lg:w-[150px] text-center shadow-lg z-10">
                                    <ul>
                                        <li className=' lg:text-[18px] text-[10px] hover:bg-black hover:text-white py-2 duration-300'>My Account</li>
                                        <li className='lg:text-[18px] text-[10px] hover:bg-black hover:text-white py-2 duration-300'>Log Out</li>
                                    </ul>
                                </div>
                            }

                            <div ref={cartRef} className="relative cursor-pointer text-[12px] lg:text-[18px]">
                                <FaShoppingCart />
                                {cartShow &&
                                    <div className="absolute top-[55px] right-0 w-[360px] bg-white shadow-lg  z-10 ">
                                        <div className="bg-[#F5F5F3] p-4 flex items-center">
                                            <div className="w-[80px] h-[80px] bg-[#979797]"></div>
                                            <div className="pl-2 font-bold text-[16x]">
                                                <h4>Black Smart Watch</h4>
                                                <h4>$44.00</h4>
                                            </div>
                                            <div className="pl-[80px]">
                                                <ImCross />
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className=" font-bold text-[16x] pl-4 pt-4 pb-4">
                                                <h4>Subtotal: $44.00</h4>
                                            </div>
                                            <div className="">
                                                <button className=' border-[1px] px-[30px] py-[15px] mb-4 ml-4 hover:bg-[#000] hover:text-[#fff] duration-700'>View Cart</button>
                                                <button className='  border-[1px] px-[30px] py-[15px] mb-4 ml-15 hover:bg-[#000] hover:text-[#fff] duration-700'>Checkout</button>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Nevbar
