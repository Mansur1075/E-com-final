import font2 from "../assets/font2.png"
import font3 from "../assets/font3.png"
import React, { useContext, useEffect, useState } from "react"
import Container from "../components/Container"
import { MdStar } from "react-icons/md"
import { TiMinus, TiPlus } from "react-icons/ti"
import { IoIosStar, IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io"
import { Apidata } from "../components/ContextApi"
import { useParams } from "react-router-dom"
import axios from "axios"


const ProductsDetails = () => {

  let info = useContext(Apidata)
  let productId = useParams()

  let [singleProducts, setSingleProducts] = useState({})

  let singleProduct = () => {
    axios.get(`https://dummyjson.com/products/${productId.id}`).then((response) => {
      setSingleProducts(response.data);
    })
  }
  useEffect(() => {
    singleProduct();
  }, []);

  console.log(info);

  let clientRating = Array.from({ length: 5 }, (_, index) => {
    let number = index + 0.5
    return singleProducts.rating > index + 1 ? (<IoMdStar />) : singleProducts.rating > number ? <IoMdStarHalf /> :
      (<IoMdStarOutline />);

  })


  let mainPrice = (singleProducts.price / 100) * singleProducts.discountPercentage;
  let mulPrice = singleProducts.price - mainPrice;
  console.log(singleProducts.reviews);


  let [onk, seoShowK] = useState(true);
  let [showpp, setShowpp] = useState(false);
  let [onshow, setOnShow] = useState(1);


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
          <div className="flex gap-4 justify-between">
            <div className="w-6/12 m-auto ml-[400px] hover:shadow-md hover:bg-[#77667717] duration-300">
              <img className="w-full" src={singleProducts.thumbnail} alt="" />
            </div>
          </div>

          <div className="w-6/12 border-b-[2px] border-[#767676] pt-5 pb-4">
            <div className=" flex text-[#FFD881] text-[24px]">
              {clientRating}
            </div>
            <div className=" pb-4 flex items-center pt-2">
              <h1 className="pl-1 text-[16px] text-[#767676] line-through font-dm">
                ${singleProducts.price}

              </h1>
              <div className="pl-10 text-[20px] font-dm font-bold text-[#000000]">
                ${mulPrice.toFixed(2)}
              </div>
            </div>
          </div>

          <div className="w-6/12 border-b-[2px] pb-6 border-[#767676]">
            <div className="flex items-center gap-4 pt-5">
            </div>



            <div className="flex pt-5 gap-2 items-center">
              <div className="text-[16px] font-dm font-bold text-[#262626]">
                QUANTITY :
              </div>
              <div className="flex items-center gap-3 border-[1px] border-[#676767] rounded-[2px] select-none px-3 cursor-pointer">
                <div
                  onClick={() => ttyShow(tty > 0 ? tty - 1 : 0)}
                  className="text-[25px]"
                >
                  -
                </div>
                <p>{tty}</p>
                <div
                  onClick={() => ttyShow(tty + 1)}
                  className="text-[25px]"
                >
                  +
                </div>
              </div>
            </div>
          </div>

          <div className="w-6/12 border-b-[2px] pb-6 border-[#767676]">
            <div className="flex pt-5 gap-2 items-center">
              <div className="text-[16px] font-dm font-bold text-[#262626]">
                STATUS :
              </div>
              <h4 className="text-[16px] text-[#767676]">In stock</h4>
            </div>
            <div className="flex gap-4 pt-4">
              <button className="py-2 px-5 border-[2px] border-[#7676] text-[14px] text-[#262626] hover:bg-[#000] hover:text-[#fff] duration-300">
                Add to Wish List
              </button>
              <button className="py-2 px-7 border-[2px] border-[#7676] text-[14px] text-[#262626] hover:bg-[#000] hover:text-[#fff] duration-300">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="w-6/12 py-6 border-b-[2px] border-[#767676]">
            <div
              onClick={() => ttqShow(!ttq)}
              className="flex items-center cursor-pointer justify-between"
            >
              <div className="text-[16px] font-bold font-dm text-[#262626]">
                FEATURES & DETAILS
              </div>
              {ttq ? <TiMinus /> : <TiPlus />}
            </div>
            {ttq && (
              <p className="text-[#767676] font-dm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            )}
          </div>
          <div className="w-6/12 py-6 border-b-[2px] border-[#767676]">
            <div
              onClick={() => ttoShow(!tto)}
              className="flex items-center cursor-pointer justify-between"
            >
              <div className="text-[16px] font-bold font-dm text-[#262626]">
                SHIPPING & RETURNS
              </div>
              {tto ? <TiMinus /> : <TiPlus />}
            </div>
            {tto && (
              <p className="text-[#767676] font-dm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nemo?
              </p>
            )}
          </div>

          <div className="w-6/12 pt-7 pb-10 text-[16px] font-dm text-[#767676]">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="w-6/12 py-5 ">


          </div>
          <div className="w-12/12 py-8 border-t-[2px] border-b-[2px] border-[#767676] mt-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-5">
                <div className="text-[#262626] font-dm text-[16px]">
                  John Ford
                </div>
                <div className="flex text-[#FFD881]">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                </div>
              </div>
              <div className="text-[16px] font-dm text-[#767676]">
                <h4>6 months ago</h4>
              </div>
            </div>
            <div className="w-full pt-3 text-[14px] font-dm text-[#767676]">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>

          <div className="w-6/12">
            <div>
              <div className="py-5 text-[20px] font-dm pb-10 font-bold text-[#262626]">
                <h2>Add a Review</h2>
              </div>
              <div className="border-b-[2px] border-[#6767] pb-3 pt-5">
                <h4 className="text-[16px] font-bold font-dm text-[#262626]">
                  Name
                </h4>
                <input
                  className="mt-4 border-none focus:outline-none w-full"
                  type="text"
                  placeholder="Your name here"
                />
              </div>
              <div className="border-b-[2px] border-[#6767] pb-3 pt-5">
                <h4 className="text-[16px] font-bold font-dm text-[#262626]">
                  Email
                </h4>
                <input
                  className="mt-4 border-none focus:outline-none w-full"
                  type="email"
                  placeholder="Your email here"
                />
              </div>
              <div className="border-b-[2px] border-[#6767] pb-6 pt-5">
                <h4 className="text-[16px] font-bold font-dm text-[#262626]">
                  Review
                </h4>
                <textarea
                  className="mt-4 border-none focus:outline-none w-full"
                  placeholder="Your review here"
                />
              </div>
              <div className="pt-5">
                <button className="py-3 px-10 text-[20px] font-dm font-bold bg-[#000] text-[#fff] hover:bg-[#fff] hover:text-[#000] hover:border-[1px] border border-transparent duration-300">
                  Post
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default ProductsDetails
