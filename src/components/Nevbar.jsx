import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import { FaAngleRight, FaBars, FaCaretDown, FaShoppingCart, FaUser } from 'react-icons/fa'
import { IoSearchOutline } from 'react-icons/io5'
import { RxCross2, RxCrosshair2 } from 'react-icons/rx'
import { ImCross } from 'react-icons/im'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { useContext } from 'react'
import { Apidata } from './ContextApi'



const Nevbar = () => {
    let cateRef = useRef()
    let accRef = useRef()
    let cartRef = useRef()

    let [show, setshow] = useState(false)
    let [acchow, setAccshow] = useState(false)
    let [cartShow, setCartShow] = useState(false)
    let cartData = useSelector((state) => state.product.cartItem)
    let [filterProducts, setFilterProduct] = useState([])

    console.log(filterProducts);







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

    // product data fetch

    let { info, loading } = useContext(Apidata)
    console.log(info, loading);


    // search functionality apply

    let handleSearch = (e) => {
        let productFilter = info.filter((item) => item.title.toLowerCase().includes(e.target.value.toLowerCase()));
        setFilterProduct(productFilter);







    }

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
                            <input onChange={handleSearch} className="bg-white lg:py-5 pr-[-5px] py-3 pl-[20px] lg:pl-5 lg:pr-[38px] lg:w-full border-0 rounded-4xl shadow-lg outline-0" type="text" placeholder='Search Products ' />
                            <div className="absolute lg:top-[23px] lg:right-[18px] right-[18px] pl-3 text-gray-600">
                                <IoSearchOutline className='text-[20px] font-bold' />
                            </div>
                        </div>
                        {/* {product show} */}
                        <div className="w-3/7 h-auto border-2 absolute top-34 z-[5] items-center left-136 border-[#7676] rounded-xl p-3 flex flex-wrap justify-center gap-4 bg-gray-900">
                            {filterProducts.map((item) => (
                                <div key={item.id} className="w-[150px] bg-gray-800 rounded-lg overflow-hidden text-center hover:scale-105 duration-300">
                                    <img src={item.thumbnail} alt={item.title} className="w-full h-[120px] object-cover" />
                                    <h3 className="text-white text-sm font-semibold p-1">{item.title}</h3>
                                    <p className="text-gray-300 text-xs pb-2">${item.price}</p>
                                </div>
                            ))}
                        </div>

                        {/* {product show} */}
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


                            <Link to="/cart">
                                <div ref={cartRef} className="relative cursor-pointer text-[12px] lg:text-[18px]">
                                    <div className=" absolute bottom-4 text-[14px] text-[#fff] font-bold right-[-9px] bg-[red] w-[20px] h-[20px] text-center rounded-[50px]">
                                        {cartData.reduce((total, item) => total + item.qun, 0)}
                                    </div>
                                    <FaShoppingCart />
                                </div>

                            </Link>

                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Nevbar
