

import { GiEternalLove, GiSelfLove } from "react-icons/gi"
import React, { useContext } from 'react'
import { TfiReload } from "react-icons/tfi"
import { Apidata } from "./ContextApi"


import { FaShoppingCart } from "react-icons/fa"
import Container from "./Container"
import { Link } from "react-router-dom"


const Poste = ({ allPage, filterCategory }) => {
  

    let { loading } = useContext(Apidata)




    if (loading) {
        return (
            <Container>
                <div className="w-full  h-[564px] items-center">
                    <div className="flex flex-col justify-center items-center h-[70vh]">
                        <div className="w-16 h-16 border-4 border-[#000] border-t-transparent rounded-full animate-spin"></div>

                        <h1 className="mt-5 text-center text-[28px] font-bold text-[#767676]">
                            Ready for You..
                        </h1>
                        <p className="text-gray-500 mt-2">Please wait a moment</p>
                    </div>
                </div>
            </Container>
        );

    }

    return (

        <>
             <div className="grid  md:grid-cols-3  gap-4">
      {filterCategory.length > 0 ? (
        filterCategory.map((item) => (
          <div className="h-[400px]" key={item.id}>
            <div className="relative h-full overflow-hidden shadow-md group ">
              <Link to ={`/Shop/${item.id}`}> 
              
              <img className="w-full cursor-pointer object-cover hover:bg-[#f0f8ff]" src={item.thumbnail} alt=""/>
              </Link>
              <div className="absolute top-4 left-3 z-5">
                <p className="py-[5px] px-[20px] border bg-black text-white font-bold text-[14px] font-dm">
                  {item.discountPercentage}%
                </p>
              </div>
              <div className="absolute right-0 bottom-25 w-[350px] bg-white hidden group-hover:block">
                <div>
                  <div className="flex items-center gap-2 justify-end py-[10px] pr-[10px] cursor-pointer">
                    <p>Add to Wish List</p>
                    <GiSelfLove />
                  </div>
                  <div className="flex items-center gap-2 justify-end py-[10px] pr-[10px] cursor-pointer">
                    <TfiReload />
                  </div>
                  <div className="flex items-center gap-2 justify-end py-[10px] pr-[10px] cursor-pointer">
                    <p>Add to Cart</p>
                    <FaShoppingCart />
                  </div>
                </div>
              </div>
              <div className="flex justify-between pl-[20px] pr-[20px] pt-2">
                <div>
                  <p className="font-bold font-dm text-[16px] text-[#262626]">{item.title}</p>
                  <p className="font-bold font-dm text-[16px] text-[#8a8686]">{item.category}</p>
                </div>
                <div>
                  <p className="font-dm text-[#767676]">${item.price}</p>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        allPage.map((item) => (
          <div className="h-[400px]" key={item.id}>
            <div className="relative h-full overflow-hidden shadow-md group">
              <Link to ={`/Shop/${item.id}`}> 
              
              <img className="w-full cursor-pointer object-cover hover:bg-[#f8f8f8]" src={item.thumbnail} alt=""/>
              </Link>
              <div className="absolute top-4 left-3 z-5">
                <p className="py-[5px] px-[20px] border bg-black text-white font-bold text-[14px] font-dm">
                  {item.discountPercentage}%
                </p>
              </div>
              <div className="absolute right-0 bottom-25 w-[350px] bg-white hidden group-hover:block">
                <div>
                  <div className="flex items-center gap-2 justify-end py-[10px] pr-[10px] cursor-pointer">
                    <p>Add to Wish List</p>
                    <GiSelfLove />
                  </div>
                  <div className="flex items-center gap-2 justify-end py-[10px] pr-[10px] cursor-pointer">
                    <TfiReload />
                  </div>
                  <div className="flex items-center gap-2 justify-end py-[10px] pr-[10px] cursor-pointer">
                    <p>Add to Cart</p>
                    <FaShoppingCart />
                  </div>
                </div>
              </div>
              <div className="flex justify-between pl-[20px] pr-[20px] pt-2">
                <div>
                  <p className="font-bold font-dm text-[16px] text-[#262626]">{item.title}</p>
                  <p className="font-bold font-dm text-[16px] text-[#8a8686]">{item.category}</p>
                </div>
                <div>
                  <p className="font-dm text-[#767676]">${item.price}</p>
                </div>
              </div>
            </div>
          </div>
        ))
      )}




    </div>
        </>
    )
}

export default Poste 