import { FaBars, FaCaretDown, FaCaretUp, FaMinus, FaPlus, FaThLarge, FaThList } from "react-icons/fa"
import Container from "../components/Container"
import { AiOutlinePlus } from "react-icons/ai"
import React, { useContext, useEffect, useState } from 'react'
import { BiPlus } from "react-icons/bi"
import { HiMiniMinus } from "react-icons/hi2"
import { GoDotFill } from "react-icons/go"
import { MdOutlineGridView } from "react-icons/md"
import { RiLayoutGridLine } from "react-icons/ri"
import { IoMdArrowDropdown } from "react-icons/io"

import { PiFlagPennantThin } from "react-icons/pi"
import { Apidata } from "../components/ContextApi"
import Poste from "../components/Postee"
import Pagination from "../components/Paginationn"



const Shop = () => {

    let { info } = useContext(Apidata)

    let [perPage, setPerPage] = useState(6);
    let [currentPage, setCurrentPage] = useState(1);
    let lastPage = perPage * currentPage
    let firstPage = lastPage - perPage
    let allPage = info.slice(firstPage, lastPage);

    let [Active, setActive] = useState(true)
    let [category, setCategory] = useState([]);
    let [filterCategory, setFilterCategory] = useState([]);
    let [brand , setBrand] = useState()
    let [low , setLow] = useState()
    let [high , sethigh] = useState()



    let pageNumber = [];

    for (let i = 1; i <= Math.ceil(info.length / perPage); i++) {

        pageNumber.push(i);
    }

    let twoclick = (index) => {
        setCurrentPage(index + 1)

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
    let handlePageNumber = (e) => {
        setPerPage(e.target.value);


    }
    useEffect(() => {
        setCategory([...new Set(info.map((item) => item.category))]);
        setBrand([...new Set(info.map((item) => item.brand))]);

    }, [info])
    console.log(category);





    let [show, setShow] = useState(false)
    let [teo, teoShow] = useState(false)

    let [tew, tewShow] = useState(false)
    let [tmw, tmwShow] = useState(false)
    let [tow, towShow] = useState(false)



    let handleCategory = (citem) => {
        console.log(citem);
        let filterItem = info.filter((item) => item.category == citem)
        setFilterCategory(filterItem);

    }

    let handleAllProduct = () => {
        setFilterCategory("")

    }
    let handleActive = () => {
        setActive(true)

    }
    let handleUnActive = () => {
        setActive(false)

    }

    let handleBrand = (bitem) =>{
        let filterBrand = info.filter((item)=> item.brand == bitem)
        setFilterCategory(filterBrand)
    }

    let handlePrice = (value) =>{
        setLow(value.low);
        sethigh(value.high);
        let Pricefilter = info.filter((item)=> item.price > value.low && item.price < value.high)
       setFilterCategory(Pricefilter);
       
        
        
    }
    console.log(low);
    console.log(high);
    




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
                            <div onClick={() => setShow(!show)} className="flex items-center justify-between cursor-pointer">
                                <p className="font-bold text-[20px] font-dm cursor-pointer">Shop by Category</p>
                                {show ? <FaCaretDown /> : <FaCaretUp />}
                            </div>

                            {show &&
                                <ul>
                                    <h3 onClick={handleAllProduct} className="text-[25px] text-center cursor-pointer border-[#000] font-bold font-dm py-[10px] text-[#767676] border-b-2 hover:bg-[#676767] hover:text-[#ffff] duration-300"> All product</h3>

                                    {category.map((item) => (
                                        <>

                                            <div onClick={() => handleCategory(item)} className=" text-center pt-0">
                                                <h3 className="text-[18px] cursor-pointer font-bold font-dm py-[10px] text-[#767676] border-b-2 hover:bg-[black] duration-300">{item}</h3>
                                            </div>

                                        </>
                                    ))}


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
                                    {brand.map((item)=>(

                                    <li onClick={()=>handleBrand(item)} className="text-[#767676] text-[16px] font-bold pt-2 cursor-pointer">{item}</li>
                                    ))}
                                </ul>
                            }
                            <div onClick={() => towShow(!tow)} className=" flex justify-between items-center pt-3">
                                <p className="font-bold text-[20px]  font-dm cursor-pointer">Shop by Price</p>
                                {tow ? <FaCaretDown /> : <FaCaretUp />}
                            </div>
                            {tow &&
                                <ul className=" select-none cursor-pointer">
                                    <li onClick={()=>handlePrice({low:0 , high:10})} className="text-[#767676] text-[16px] font-bold  pt-2">$00 - $10</li>
                                    <li onClick={()=>handlePrice({low:11 , high:20})} className="text-[#767676] text-[16px] font-bold  pt-2">$11 - $10</li>
                                </ul>
                            }
                        </div>
                        <div className="w-9/12  ">
                            <div className="pt-[-40px] pl-6 flex  justify-between">
                                <div className="">
                                    <div className="flex gap-3">
                                        <div onClick={handleActive} className={`${Active ? "p-[5px] text-black bg-[#7676] shadow-md border-[1px] border-[#737373]" : "p-[5px] text-black border-[1px] border-[#737373]"} `}>
                                        <FaThLarge />
                                    </div>
                                    <div onClick={handleUnActive} className={`${Active ? "p-[5px] text-black border-[1px] border-[#737373] shadow-md" : "p-[5px] text-black bg-[#7676] border-[1px] border-[#737373]"}`}>
                                    <FaThList />
                                </div>
                            </div>
                        </div>{!filterCategory.length &&(
                             <div className="flex  gap-4">  
                            <div className="flex gap-5 cursor-pointer">
                                <div className="pt-2 text-[16px] text-[#767676]">
                                    <h1>Sort by:</h1>
                                </div>
                                <div className="w-40">
                                    <select
                                        id="category"
                                        name="category"
                                        className="block w-full font-bold text-[#767676]  rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:ring focus:ring-blue-200"
                                    >
                                        <option className="font-bold text-[#767676]">1</option>
                                        <option className="font-bold text-[#767676]">2</option>
                                        <option className="font-bold text-[#767676]">3</option>
                                        <option className="font-bold text-[#767676]">4</option>
                                    </select>
                                </div>

                            </div>
                            {!filterCategory.length && (<div className="flex gap-2 text-center items-center">
                                <div className="text-[16px] text-[#767676]">
                                    <h4 >Show:</h4>
                                </div>
                                <div className="w-24">
                                    <select onChange={handlePageNumber}
                                        name=""
                                        id="" className=" border-[1px] border-[#0062ff42] py-2 rounded-[5px] shadow-md pl-20 pr-1">
                                        <option value="6">6</option>
                                        <option value="12">12</option>
                                        <option value="18">18</option>
                                        <option value="24">24</option>
                                        <option value="30">30</option>
                                    </select>
                                </div>

                            </div>)}
                        </div>
                        )}
                       
                    </div>
                    <div className="pl-6 pt-6 w-12/12">
                        <Poste allPage={allPage} filterCategory={filterCategory} Active={Active} />
                    </div>
                    <div className="pl-6 pt-6 cursor-pointer font-bold font-dm">
                        {!filterCategory.length && (<Pagination pageNumber={pageNumber} twoclick={twoclick} next={next} prev={prev} currentPage={currentPage} />)}
                    </div>
                </div>
        </div>

                </Container >
            </section >
        </div >
    )
}

export default Shop
