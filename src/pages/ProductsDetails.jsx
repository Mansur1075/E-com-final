import font2 from "../assets/font2.png"
import font3 from "../assets/font3.png"
import React, { useState } from 'react'
import Container from '../components/Container'
import { MdStar, MdStarBorder } from "react-icons/md"
import { GoDotFill, GoPlus } from "react-icons/go"
import { LuMinus, LuPlus } from "react-icons/lu"
import { FiMinus } from "react-icons/fi"
import { TiMinus, TiPlus } from "react-icons/ti"
import { IoIosStar } from "react-icons/io"

const ProductsDetails = () => {

  let [tew, tewShow] = useState(false)
  let [tmw, tmwShow] = useState(false)
  let [tow, towShow] = useState(false)
  let [show, setShow] = useState(false)
  let [teo, teoShow] = useState(false)
  let [tto, ttoShow] = useState(false)
  let [ttq, ttqShow] = useState(false)

  let [tty, ttyShow] = useState(0)
  


  return (

    <>
      <div className="py-5 pt-3">
        <Container>
          <div className=''>
            <div className="flex gap-4 justify-between">
              <div className="w-6/12">
                <img className="w-full" src={font3} alt="" />
              </div>
              <div className="w-6/12">
                <img className="w-full" src={font2} alt="" />
              </div>
            </div>
            <div className="flex gap-4 justify-between pt-4">
              <div className="w-6/12">
                <img className="w-full" src={font2} alt="" />
              </div>
              <div className="w-6/12">
                <img className="w-full" src={font3} alt="" />
              </div>
            </div>
          </div>
          <div className=" w-6/12 border-b-[2px] border-[#7676] pt-5 PB-4">
            <div className=" w-6/12 flex items-center  pb-2">
              <div onClick={() => tewShow(!tew)} className="flex gap-3 font-dm text-[20px] cursor-pointer ">
                {tew ? <MdStar className="text-[#FFD881]" /> : <MdStar className="text-[#6767]" />}
              </div>
              <div onClick={() => tmwShow(!tmw)} className="flex gap-3 font-dm text-[20px] cursor-pointer">
                {tmw ? <MdStar className="text-[#FFD881]" /> : <MdStar className="text-[#6767]" />}
              </div>
              <div onClick={() => towShow(!tow)} className="flex gap-3 font-dm text-[20px] cursor-pointer">
                {tow ? <MdStar className="text-[#FFD881]" /> : <MdStar className="text-[#6767]" />}
              </div>
              <div onClick={() => setShow(!show)} className="flex gap-3 font-dm text-[20px] cursor-pointer">
                {show ? <MdStar className="text-[#FFD881]" /> : <MdStar className="text-[#6767]" />}
              </div>
              <div onClick={() => teoShow(!teo)} className="flex gap-3 font-dm text-[20px] pr-2 cursor-pointer">
                {teo ? <MdStar className="text-[#FFD881]" /> : <MdStar className="text-[#6767]" />}
              </div>
              <div className=" text-[14px] font-dm text-[#767676]">1 Review</div>
            </div>
            <div className="pt-1 pb-4">
              <h1 className="PL-1 text-[16px] text-[#767676] font-dm">$88.00 <span className="pl-10 text-[20px] font-dm font-bold text-[#000000]">$44.00</span></h1>
            </div>
          </div>
          <div className="w-6/12 border-b-[2px] pb-6 border-[#7676]">
            <div className=" flex items-center gap-4 pt-5 ">
              <div className="text-[16px] font-dm font-bold text-[#262626]">COLOR :</div>
              <div className="flex gap-3 cursor-pointer">
                <div className="w-[15px] h-[15px] bg-[#767676] rounded-full hover:scale-150 duration-300 cursor-pointer"></div>
                <div className="w-[15px] h-[15px] bg-[#FF8686] rounded-full hover:scale-150 duration-300 cursor-pointer"></div>
                <div className="w-[15px] h-[15px] bg-[#7ED321] rounded-full hover:scale-150 duration-300 cursor-pointer"></div>
                <div className="w-[15px] h-[15px] bg-[#B6B6B6] rounded-full hover:scale-150 duration-300 cursor-pointer"></div>
                <div className="w-[15px] h-[15px] bg-[#15CBA5] rounded-full hover:scale-150 duration-300 cursor-pointer"></div>
              </div>
            </div>
            <div className=" flex pt-3 gap-13 pl-[2px] items-center">
              <div className="text-[16px] font-dm font-bold text-[#262626] ">
                <h1>SIZE :</h1>
              </div>
              <div className="">
                <select className="border-[1px] border-[#676767] rounded-[2px] py-1 px-5 cursor-pointer" name="" id="">
                  <option value="">M</option>
                  <option value="">S</option>
                  <option value="">XL</option>
                  <option value="">XXL</option>
                </select>
              </div>
            </div>
            <div className=" flex pt-5 gap-2 items-center ">
              <div className="text-[16px] font-dm font-bold text-[#262626]">
                <h1>QUANTITY :</h1>
              </div>
              <div className="flex items-center gap-3 border-[1px] border-[#676767] rounded-[2px]  px-3 cursor-pointer">
                 <div onClick={()=>ttyShow(tty > 0 ? tty -1 : 0)} className=" text-[25px]">-</div>
                <p>{tty}</p>
                <div onClick={()=>ttyShow(tty +1)} className=" text-[25px]">+</div>
              </div>
            </div>

          </div>
          <div className="w-6/12 border-b-[2px] pb-6 border-[#6767] ">
            <div className=" flex pt-5 gap-2 items-center ">
              <div className="text-[16px] font-dm font-bold text-[#262626]">
                <h1>STATUS :</h1>
              </div>
              <h4 className=" text-[16px] text-[#767676]">In stock</h4>
            </div>
            <div className="flex gap-4 pt-4">
              <div className="">
                <button className="py-2 px-5 border-[2px] border-[#7676] text-[14px] text-[#262626] hover:bg-[#000] hover:text-[#fff] duration-300  cursor-pointer">Add to Wish List</button>
              </div>
              <div className="">
                <button className="py-2 px-7 text-[14px] border-[#7676] text-[#262626] border-[2px] hover:bg-[#000] hover:text-[#fff] duration-300  cursor-pointer">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="w-6/12 py-6 border-b-[2px] border-[#7676]">
            <div onClick={() => ttqShow(!ttq)} className=" flex items-center cursor-pointer justify-between">
              <div className=" text-[16px] font-bold font-dm text-[#262626]">FEATURES  & DETAILS</div>
              {ttq ? <TiMinus /> : <TiPlus />}
            </div>
            {ttq &&

              <p className="text-[#767676] font-dm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, harum. orem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, harum</p>
            }
            <div className=""></div>
          </div>
          <div className="w-6/12 py-6 border-b-[2px] border-[#7676]">
            <div onClick={() => ttoShow(!tto)} className=" flex items-center cursor-pointer justify-between">
              <div className=" text-[16px] font-bold font-dm text-[#262626]">SHIPPING & RETURNS</div>
              {tto ? <TiMinus /> : <TiPlus />}
            </div>
            {tto &&

              <p className="text-[#767676] font-dm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, harum. orem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, harum</p>
            }
            <div className=""></div>
          </div>
          <div className="w-6/12 pt-7 pb-17 text-[16px] font-dm text-[#767676]">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="w-6/12 flex py-5">
            <div className="">
              <h1 className="text-[20px] font-dm text-[#767676]">Description</h1>
              <p className="pt-5 text-[14px] font-dm text-[#767676]">1 review for Product</p>
            </div>
            <div className="pl-5">
              <h2 className="text-[20px] font-dm font-bold text-[#000]">Reviews (1)</h2>
            </div>
          </div>
          <div className="w-12/12 py-8 border-[#7676] border-b-[2px] border-t-[2px] mt-3">
            <div className="flex justify-between items-center">
              <div className=" flex items-center gap-5">
                <div className=" text-[#262626] font-dm text-[16px]">John Ford</div>
                <div className="flex text-[#FFD881]">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                </div>
              </div>
              <div className=" text-[16px] font-dm text-[#767676]"><h4>6 months ago</h4></div>
            </div>
            <div className=" w-full pt-3 text-[14px] font-dm text-[#767676]">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
          </div>
          <div className="w-6/12">
            <div className="">
              <div className="py-5 text-[20px] font-dm pb-10 font-bold text-[#262626]">
                <h2>Add a Review</h2>
              </div>
              <div className=" border-b-[2px] border-[#6767] pb-3 pt-5">
                <h4 className="text-[16px] font-bold font-dm text-[#262626]">Name</h4>
                <input
                  className="mt-4 border-none focus:outline-none" type="name" placeholder="Your name here"/>
              </div>
              <div className=" border-b-[2px] border-[#6767] pb-3 pt-5">
                <h4 className="text-[16px] font-bold font-dm text-[#262626]">Email</h4>
                <input
                  className="mt-4 border-none focus:outline-none" type="email" placeholder="Your email here"/>
              </div>
              <div className=" border-b-[2px] border-[#6767] pb-25 pt-5">
                <h4 className="text-[16px] font-bold font-dm text-[#262626]">Review</h4>
                <input
                  className="mt-4 border-none focus:outline-none" type="name" placeholder="Your review here"/>
              </div>
              <div className="pb-100">
                <button className="py-3 mt-5 border-[1px] px-15 text-[20px] font-dm font-bold bg-[#000] text-[#fff] hover:bg-[#fff] hover:text-[#000] hover:border-[1px] duration-300">Post</button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}


export default ProductsDetails