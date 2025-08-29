

import { GiEternalLove, GiSelfLove } from "react-icons/gi"
import React, { useContext, useEffect, useInsertionEffect, useState } from 'react'
import { TfiReload } from "react-icons/tfi"
import { Apidata } from "./ContextApi"


import { FaShoppingCart } from "react-icons/fa"
import Container from "./Container"
import { Link } from "react-router-dom"


const Poste = ({ allPage, filterCategory, Active }) => {

  let [allFilter,stAllFilter] = useState([])
  let [showAll, setShowAll] = useState(true)
  console.log(Active);
  

  useEffect(()=>{
    let filtercate = filterCategory.slice(0,5)
    stAllFilter(filtercate);
    
  
  },[filterCategory])

   let handleShow = () =>{
    
   stAllFilter(filterCategory)

   setShowAll(false);
   }

    let handleLess = () =>{
   let filtercate = filterCategory.slice(0,5)
    stAllFilter(filtercate);
    setShowAll(true)
    
   }

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
             <div className="">
      {allFilter.length > 0 
      ? 
      <div className="">
        <div className="grid  md:grid-cols-3  gap-4">
        {allFilter.map((item) => (
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
        ))}
      </div>
      {showAll ? filterCategory.length > 5 && <button onClick={handleShow} className="py-1 px-4 bg-[#7676] mt-5 rounded-[5px] text-[#fff] font-bold font-dm cursor-pointer hover:bg-[black] duration-300">Show all</button> 
      : <div onClick={handleLess}  className="">
        <button  className="py-1 px-4 bg-[#7676] text-[#fff] font-bold font-dm cursor-pointer hover:bg-[black] rounded-[5px] mt-5 duration-300">Less show</button>
      </div> }
      </div>
      : 
      <>
      {Active ? 
      

      <div className="grid  md:grid-cols-3  gap-4" >
        { allPage.map((item) => (
            <div className="h-[400px] " key={item.id}>
            <div className="relative h-full overflow-hidden shadow-md group ">
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
        ))}
      </div>
      :
      
      
      
      <div className="" >
        { allPage.map((item) => (
            <div className="h-[200px] " key={item.id}>
            <div className="relative h-full overflow-hidden shadow-md group flex items-center">
              <Link to ={`/Shop/${item.id}`}> 
              
              <img className="w-[70%] cursor-pointer object-cover" src={item.thumbnail} alt=""/>
              </Link>
              <div className="absolute top-4 left-3 z-5">
                <p className="py-[5px] px-[20px] border bg-black text-white font-bold text-[14px] font-dm">
                  {item.discountPercentage}%
                </p>
              </div>
              <div className="absolute right-0 bottom-4  w-[350px] pr-2 ">
                <div className="flex gap-6">
                  <div className="flex items-center gap-2 justify-end ml-[-100px] py-[10px] pr-[10px] cursor-pointer hover:scale-105 transition duration-300 ease-in-out  rounded-[4px] text-[#fff]  pl-2 bg-gradient-to-r from-black to-blue-900 ">
                    <p>Add to Wish List</p>
                    <GiSelfLove />
                  </div>
                  <div className="flex items-center gap-2 justify-end px-2 py-[0px] pr-[10px] cursor-pointer rounded-[10px] text-[#fff] hover:scale-105 transition duration-300 ease-in-out shadow-[0_6px_18px_rgba(101,163,13,0.6)] pl-2 bg-gradient-to-r from-sky-500 to-lime-700 ">
                   <p>beauty</p>
                    <TfiReload />
                  </div>
                  <div className="flex items-center gap-2 justify-end py-[10px] pr-[10px] cursor-pointer rounded-[5px] text-[#fff] hover:scale-105 transition duration-300 ease-in-out   pl-2 bg-gradient-to-r from-gray-700 to-purple-700 ">
                    <p>Add to Cart</p>
                    <FaShoppingCart />
                  </div>
                </div>
              </div>
              <div className="justify-between pl-[20px] pr-[20px] pt-2">
                <div>
                  <p className="font-bold font-dm text-[16px] text-[#262626]">{item.title}</p>
                  <p className="font-bold font-dm py-3 text-[16px] text-[#8a8686]">{item.category}</p>
                </div>
                <div>
                  <p className="font-dm text-[#767676]">${item.price}</p>
                </div>
              </div>
            </div>
          </div>  
        ))}
      </div>
      }
      </>
       
      }




    </div>
        </>
    )
}

export default Poste 