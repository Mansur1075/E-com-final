import { GiEternalLove } from "react-icons/gi"
import pri from "../assets/pri.png"
import React, { useContext } from 'react'
import { TfiReload } from "react-icons/tfi"
import { IoCart } from "react-icons/io5"
import { Apidata } from "./ContextApi"

const Poste = () => {
    let {info} = useContext(Apidata)
    console.log(info);
    
   
    
  return (
    
    <div>
        <div className="flex">
            <div className="w-4/12 relative overflow-hidden group">
                <img src={pri} alt="" />
                <div className="w-full h-[156px] bg-[#fff] shadow-lg absolute top-[41%] left-[-100%] group-hover:left-[0] duration-500">
                    <h4 className="pl-35 pt-5">Add to Wish List <GiEternalLove className=" inline-block ml-2" /></h4>
                    <h4 className="pl-47 pt-5">Compare <TfiReload className=" inline-block ml-2"/></h4>
                    <h4 className="pl-45 pt-3">Add to Cart <IoCart className=" inline-block ml-2" /></h4>
                </div>
                <div className="">
                    <button className=" border-2 px-3 py-2 bg-[black] text-[#fff] absolute top-2 left-2">NEW</button>
                </div>
                <div className="flex justify-between pt-4">
                    <div className="">
                        <h4>Basic Crew Neck Tee</h4>
                        <p>Black</p>
                    </div>
                    <div className="">
                        <h1>$44.00</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Poste