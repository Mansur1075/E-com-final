import { FaBars, FaCaretDown, FaCaretUp, FaMinus, FaPlus, FaThList } from "react-icons/fa"
import Container from "../components/Container"
import { AiOutlinePlus } from "react-icons/ai"
import React, { useState } from 'react'
import { BiPlus } from "react-icons/bi"
import { HiMiniMinus } from "react-icons/hi2"
import { GoDotFill } from "react-icons/go"
import { MdOutlineGridView } from "react-icons/md"
import { RiLayoutGridLine } from "react-icons/ri"
import { IoMdArrowDropdown } from "react-icons/io"
import Poste from "./Poste"
import { PiFlagPennantThin } from "react-icons/pi"
import Mgsw from "./Mgsw"


const Shipping = () => {
    let [show, setShow] = useState(false)
    let [row, rowShow] = useState(false)
    let [two, twoShow] = useState(false)
    let [tto, ttoShow] = useState(false)
    let [teo, teoShow] = useState(false)

    let [tew, tewShow] = useState(false)
    let [tmw, tmwShow] = useState(false)
    let [tow, towShow] = useState(false)
    let [tnw, tnwShow] = useState(false)
    return (
        <div className="py-6">
            <section>
                <Container>
                    <div className="py-10">
                        <div className="w-12/12"><h3 className="text-[39px] text-[bold] font-bold font-dm">Products</h3></div>
                        <div className="text-[12px] font-dm text-[#767676]"><h4>Home  &gt;  Products</h4></div>
                    </div>
                    <div className="py-6 flex">
                        <div className="w-3/12 items-center">
                            <div onClick={() => setShow(!show)} className="flex items-center justify-between">
                                <p className="font-bold text-[20px] font-dm cursor-pointer">Shop by Category</p>
                                {show ? <FaCaretDown /> : <FaCaretUp />}
                            </div>
                            {show &&
                                <ul>
                                    <div onClick={() => rowShow(!row)} className="flex justify-between items-center border-b-2 gap-2 pb-2 pt-4">
                                        <li className=" cursor-pointer text-[16px] text-[#767676] font-bold ">Category 1</li>
                                        {row ? <FaMinus className="text-[#767676]" /> : <FaPlus className="text-[#767676]" />}
                                    </div>
                                    {row &&
                                        <div className=" text-center">
                                            <h3 className="text-[18px] font-bold font-dm text-[#767676] border-b-2 hover:bg-[black] duration-300">1</h3>
                                            <h3 className="text-[18px] font-bold font-dm text-[#767676] border-b-2 hover:bg-[black] duration-300">2</h3>
                                            <h3 className="text-[18px] font-bold font-dm text-[#767676] border-b-2 hover:bg-[black] duration-300">3</h3>
                                            <h3 className="text-[18px] font-bold font-dm text-[#767676] border-b-2 hover:bg-[black] duration-300">4</h3>
                                            <h3 className="text-[18px] font-bold font-dm text-[#767676] border-b-2 hover:bg-[black] duration-300">5</h3>
                                        </div>
                                    }
                                    <div onClick={() => ttoShow(!tto)} className="flex justify-between items-center border-b-2 gap-2 pb-2 pt-4">
                                        <li className=" cursor-pointer text-[16px] text-[#767676] font-bold ">Category 2</li>
                                        {tto ? <FaMinus className="text-[#767676]" /> : <FaPlus className="text-[#767676]" />}
                                    </div>
                                    {tto &&
                                        <div className=" text-center">
                                            <h3 className="text-[18px] font-bold font-dm text-[#767676] border-b-2 hover:bg-[black] duration-300">One</h3>
                                            <h3 className="text-[18px] font-bold font-dm text-[#767676] border-b-2 hover:bg-[black] duration-300">Two</h3>
                                            <h3 className="text-[18px] font-bold font-dm text-[#767676] border-b-2 hover:bg-[black] duration-300">Three</h3>
                                            <h3 className="text-[18px] font-bold font-dm text-[#767676] border-b-2 hover:bg-[black] duration-300">Four</h3>
                                            <h3 className="text-[18px] font-bold font-dm text-[#767676] border-b-2 hover:bg-[black] duration-300">Five</h3>
                                        </div>
                                    }

                                    <div onClick={() => twoShow(!two)} className="flex justify-between items-center border-b-2 gap-2 pb-2 pt-4 text-[16px] text-[#767676] font-bold">
                                        <li className=" cursor-pointer ">Category 3</li>
                                        {two ? <FaMinus className="text-[#767676]" /> : <FaPlus className="text-[#767676]" />}
                                    </div>
                                    {two &&
                                        <div className=" text-center">
                                            <h3 className="text-[18px] font-bold font-dm text-[#767676] border-b-2 hover:bg-[black] duration-300">Six</h3>
                                            <h3 className="text-[18px] font-bold font-dm text-[#767676] border-b-2 hover:bg-[black] duration-300">Seven</h3>
                                            <h3 className="text-[18px] font-bold font-dm text-[#767676] border-b-2 hover:bg-[black] duration-300">Eight</h3>
                                            <h3 className="text-[18px] font-bold font-dm text-[#767676] border-b-2 hover:bg-[black] duration-300">Nine</h3>
                                            <h3 className="text-[18px] font-bold font-dm text-[#767676] border-b-2 hover:bg-[black] duration-300">Ten</h3>
                                        </div>
                                    }
                                    <div onClick={() => teoShow(!teo)} className="flex justify-between items-center border-b-2 gap-2 pb-2 pt-4 text-[16px] text-[#767676] font-bold">
                                        <li className=" cursor-pointer ">Category 4</li>
                                        {teo ? <FaMinus className="text-[#767676]" /> : <FaPlus className="text-[#767676]" />}
                                    </div>
                                    {teo &&
                                        <div className=" text-center">
                                            <h3 className="text-[18px] font-bold font-dm text-[#767676] border-b-2  hover:bg-[black] duration-300">11</h3>
                                            <h3 className="text-[18px] font-bold font-dm text-[#767676] border-b-2 hover:bg-[black] duration-300">12</h3>
                                            <h3 className="text-[18px] font-bold font-dm text-[#767676] border-b-2 hover:bg-[black] duration-300">13</h3>
                                            <h3 className="text-[18px] font-bold font-dm text-[#767676] border-b-2 hover:bg-[black] duration-300">14</h3>
                                            <h3 className="text-[18px] font-bold font-dm text-[#767676] border-b-2 hover:bg-[black] duration-300">15</h3>
                                        </div>
                                    }
                                </ul>
                            }
                            <div onClick={() => tewShow(!tew)} className="pt-3 flex justify-between items-center">
                                <p className="font-bold text-[20px]  font-dm cursor-pointer">Shop by Color </p>
                                {tew ? <FaCaretDown /> : <FaCaretUp />}
                            </div>
                            {tew &&
                                <ul>
                                    <li className="text-[#767676] text-[16px] border-b-[#767676] border-b-[2px] pt-2"><GoDotFill className=" inline-block text-[green]" />  Color 1</li>
                                    <li className="text-[#767676] text-[16px] border-b-[2px] pt-2"><GoDotFill className=" inline-block text-[#000000]" /> Color 2</li>
                                    <li className="text-[#767676] text-[16px] border-b-[2px] pt-2"><GoDotFill className=" inline-block text-[#FF8686]" /> Color 3</li>
                                    <li className="text-[#767676] text-[16px] border-b-[2px] pt-2"><GoDotFill className=" inline-block text-[#767676]" /> Color 4</li>
                                    <li className="text-[#767676] text-[16px] border-b-[2px] pt-2"><GoDotFill className=" inline-block text-[green]" /> Color 5</li>
                                </ul>
                            }
                            <div onClick={() => tmwShow(!tmw)} className=" flex justify-between items-center pt-3">
                                <p className="font-bold text-[20px]  font-dm cursor-pointer">Shop by Brand</p>
                                {tmw ? <FaCaretDown /> : <FaCaretUp />}
                            </div>
                            {tmw &&
                                <ul>
                                    <li className="text-[#767676] text-[16px] border-b-[2px] pt-2">Brand 1</li>
                                    <li className="text-[#767676] text-[16px] border-b-[2px] pt-2">Brand 2</li>
                                    <li className="text-[#767676] text-[16px] border-b-[2px] pt-2">Brand 3</li>
                                    <li className="text-[#767676] text-[16px] border-b-[2px] pt-2">Brand 4</li>
                                    <li className="text-[#767676] text-[16px] border-b-[2px] pt-2">Brand 5</li>
                                </ul>
                            }
                            <div onClick={() => towShow(!tow)} className=" flex justify-between items-center pt-3">
                                <p className="font-bold text-[20px]  font-dm cursor-pointer">Shop by Price</p>
                                {tow ? <FaCaretDown /> : <FaCaretUp />}
                            </div>
                            {tow &&
                                <ul>
                                    <li className="text-[#767676] text-[16px] border-b-[2px] pt-2">$0.00 - $9.99</li>
                                    <li className="text-[#767676] text-[16px] border-b-[2px] pt-2">$0.00 - $9.99</li>
                                    <li className="text-[#767676] text-[16px] border-b-[2px] pt-2">$0.00 - $9.99</li>
                                    <li className="text-[#767676] text-[16px] border-b-[2px] pt-2">$0.00 - $9.99</li>
                                    <li className="text-[#767676] text-[16px] border-b-[2px] pt-2">$0.00 - $9.99</li>
                                </ul>
                            }
                        </div>
                        <div className="w-9/12  ">
                            <div className="pt-[-40px] pl-6 flex  justify-between">
                                <div className="">
                                    <div className="flex gap-3">
                                        <div className=" border-2 p-[5px] hover:bg-black hover:text-[#fff]"><RiLayoutGridLine /></div>
                                        <div className=" text-center border-1 border-[#767676] p-[5px] hover:bg-black hover:text-[#fff] "><FaThList /></div>
                                    </div>
                                </div>
                                <div className="flex  gap-4">
                                    <div className="flex gap-5 cursor-pointer">
                                        <div className="pt-2 text-[16px] text-[#767676]">
                                            <h1>Sort by:</h1>
                                        </div>
                                        <div className="w-40">
                                            <select
                                                id="category"
                                                name="category"
                                                className="block w-full  rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:ring focus:ring-blue-200"
                                            >
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                            </select>
                                        </div>

                                    </div>
                                    <div className="flex gap-5 text-center">
                                        <div className="pt-2 text-[16px] text-[#767676]">
                                            <h4 >Show:</h4>
                                        </div>
                                        <div className="w-24">
                                            <select
                                                id="category"
                                                name="category"
                                                className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                                            >
                                                <option>ONE</option>
                                                <option>TWO</option>
                                                <option>THREE</option>
                                                <option>FOUR</option>
                                            </select>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="pl-6 pt-6">
                                <Poste />
                            </div>
                                <div className="pl-6 pt-6">
                                    <Mgsw/>
                                </div>
                        </div>
                    </div>

                </Container>
            </section>
        </div>
    )
}

export default Shipping