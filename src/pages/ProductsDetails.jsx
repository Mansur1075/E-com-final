import font2 from "../assets/font2.png"
import font3 from "../assets/font3.png"
import React, { useState, useEffect } from "react"
import Container from "../components/Container"
import axios from "axios"
import { useParams } from "react-router-dom"
import { MdStar, MdStarBorder, MdStarHalf } from "react-icons/md"
import { TiMinus, TiPlus } from "react-icons/ti"
import { IoIosStar, IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io"

const ProductsDetails = () => {
  let [tto, ttoShow] = useState(false)
  let [ttq, ttqShow] = useState(false)

  let [tty, ttyShow] = useState(0)

  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err))
  }, [id])

  if (!product) {
    return <div> <Container>
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
    </div>
  }

  return (
    <>
      <div className="py-5 pt-3">
        <Container>
          <div className="flex gap-4 justify-between">
            <div className="w-6/12 m-auto hover:bg-gray-100 p-6 rounded-2xl hover:shadow-2xl duration-300 ml-100 ">
              <img className="w-full" src={product.thumbnail} alt={product.title} />
            </div>
          </div>

          <div className="w-6/12 border-b-[2px] border-[#7676] pt-5 pb-4">
            <div className="w-6/12 flex items-center pb-4 ">
              {product.rating >= 1 ? <MdStar className="text-[30px] text-[#FFD881]" />
                : product.rating >= 0.5 ? <MdStarHalf className="text-[30px] text-[#FFD881]" />
                  : <MdStarBorder className="text-[30px] text-[#6767]" />}

              {product.rating >= 2 ? <MdStar className="text-[30px] text-[#FFD881]" />
                : product.rating >= 1.5 ? <MdStarHalf className="text-[30px] text-[#FFD881]" />
                  : <MdStarBorder className="text-[30px] text-[#6767]" />}

              {product.rating >= 3 ? <MdStar className="text-[30px] text-[#FFD881]" />
                : product.rating >= 2.5 ? <MdStarHalf className="text-[30px] text-[#FFD881]" />
                  : <MdStarBorder className="text-[30px] text-[#6767]" />}

              {product.rating >= 4 ? <MdStar className="text-[30px] text-[#FFD881]" />
                : product.rating >= 3.5 ? <MdStarHalf className="text-[30px] text-[#FFD881]" />
                  : <MdStarBorder className="text-[30px] text-[#6767]" />}

              {product.rating >= 5 ? <MdStar className="text-[30px] text-[#FFD881]" />
                : product.rating >= 4.5 ? <MdStarHalf className="text-[30px] text-[#FFD881]" />
                  : <MdStarBorder className="text-[30px] text-[#6767]" />}

              <div className="text-[18px] font-dm text-[#767676] pl-2 ">{product.rating} Reviews</div>
            </div>

            <div className="pt-1 pb-4">
              <h1 className="PL-1 text-[16px] text-[#767676] font-dm">
                <span className="line-through">${(product.price + 44).toFixed(2)}</span>
                <span className="pl-10 text-[20px] font-dm font-bold text-[#000000]">
                 ${product.price.toFixed(2)}
                </span>
              </h1>
            </div>
          </div>

          <div className="w-6/12 border-b-[2px] pb-6 border-[#7676]">
            <div className="flex items-center gap-4 pt-5">
              <div className="text-[16px] font-dm font-bold text-[#262626]">COLOR :</div>
              <div className="flex gap-3 cursor-pointer">
                <div className="w-[15px] h-[15px] bg-[#767676] rounded-full hover:scale-170 duration-300"></div>
                <div className="w-[15px] h-[15px] bg-[#FF8686] rounded-full hover:scale-170 duration-300"></div>
                <div className="w-[15px] h-[15px] bg-[#7ED321] rounded-full hover:scale-170 duration-300"></div>
                <div className="w-[15px] h-[15px] bg-[#6767] rounded-full hover:scale-170 duration-300"></div>
                <div className="w-[15px] h-[15px] bg-[#6068] rounded-full hover:scale-170 duration-300"></div>
              </div>
            </div>
           
            <div className="flex pt-5 gap-2 items-center">
              <div className="text-[16px] font-dm font-bold text-[#262626]">
                <h1>QUANTITY :</h1>
              </div>
              <div className="flex items-center gap-3 border-[1px] border-[#676767] rounded-[2px] select-none px-3 cursor-pointer">
                <div onClick={() => ttyShow(tty > 0 ? tty - 1 : 0)} className="text-[25px]">-</div>
                <p>{tty}</p>
                <div onClick={() => ttyShow(tty + 1)} className="text-[25px]">+</div>
              </div>
            </div>
          </div>
          

          <div className="w-6/12 border-b-[2px] pb-6 border-[#6767]  items-center">
            <div className="flex pt-5 gap-2 items-center">
              <div className="text-[16px] font-dm font-bold text-[#262626]">
                <h1>STATUS :</h1>
              </div>
              <h4 className="text-[16px] text-[#767676]">
                {product.stock > 0 ? "In stock" : "Out of stock"}
              </h4>
            </div>
            <div className="flex gap-4 pt-4">
              <button className="py-2 px-5 border-[2px] border-[#7676] text-[14px] text-[#262626] hover:bg-[#000] hover:text-[#fff] duration-300 cursor-pointer">Add to Wish List</button>
              <button className="py-2 px-7 text-[14px] border-[#7676] text-[#262626] border-[2px] hover:bg-[#000] hover:text-[#fff] duration-300 cursor-pointer">Add to Cart</button>
            </div>
          </div>

          <div className="w-6/12 py-6 border-b-[2px] border-[#7676] select-none">
            <div onClick={() => ttqShow(!ttq)} className="flex items-center cursor-pointer justify-between">
              <div className="text-[16px] font-bold font-dm text-[#262626]">FEATURES & DETAILS</div>
              {ttq ? <TiMinus /> : <TiPlus />}
            </div>
            {ttq && <p className="text-[#767676] font-dm">{product.description}</p>}
          </div>

          <div className="w-6/12 py-6 border-b-[2px] border-[#7676] select-none">
            <div onClick={() => ttoShow(!tto)} className="flex items-center cursor-pointer justify-between">
              <div className="text-[16px] font-bold font-dm text-[#262626]">SHIPPING & RETURNS</div>
              {tto ? <TiMinus /> : <TiPlus />}
            </div>
            {tto && <p className="text-[#767676] font-dm">Free shipping on orders over $50 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, repudiandae.</p>}
          </div>

          <div className="w-6/12 pt-7 pb-17 text-[16px] font-dm text-[#767676]">
            <p>{product.description}</p>
          </div>

          <div className="w-6/12 flex py-5">
          


{/* 
<div class="mb-4 border-b border-gray-200 dark:border-gray-700">
    <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
        <li class="me-2" role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
        </li>
        <li class="me-2" role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Dashboard</button>
        </li>
        <li class="me-2" role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Settings</button>
        </li>
        <li role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Contacts</button>
        </li>
    </ul>
</div>
<div id="default-tab-content">
    <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab">
        <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
    <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
        <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
    <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="settings" role="tabpanel" aria-labelledby="settings-tab">
        <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
    <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
        <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
</div> */}


            <div>
              <h1 className="text-[20px] font-dm text-[#767676]">Description</h1>
              <p className="pt-5 text-[14px] font-dm text-[#767676]">1 review for Product</p>
            </div>
            <div className="pl-5">
              <h2 className="text-[20px] font-dm font-bold text-[#000]">Reviews (1)</h2>
            </div>
          </div>
          <div className="w-12/12 py-8 border-[#7676] border-b-[2px] border-t-[2px] mt-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-1 text-[#FFD881] text-[30px]">
                  {product.rating >= 1 ? <IoMdStar />
                    : product.rating >= 0.5 ? <IoMdStarHalf />
                      : <IoMdStarOutline />}

                  {product.rating >= 2 ? <IoMdStar />
                    : product.rating >= 1.5 ? <IoMdStarHalf />
                      : <IoMdStarOutline />}

                  {product.rating >= 3 ? <IoMdStar />
                    : product.rating >= 2.5 ? <IoMdStarHalf />
                      : <IoMdStarOutline />}

                  {product.rating >= 4 ? <IoMdStar />
                    : product.rating >= 3.5 ? <IoMdStarHalf />
                      :  <IoMdStarOutline />}

                  {product.rating >= 5 ? <IoMdStar />
                    : product.rating >= 4.5 ? <IoMdStarHalf />
                      : <IoMdStarOutline />}
                </div>

              </div>
              <div className="text-[16px] font-dm text-[#767676]"><h4>6 months ago</h4></div>
            </div>
            <div className="w-full pt-3 text-[14px] font-dm text-[#767676]">
              <p>Lorem Ipsum is simply dummy text of the printing and <br /> typesetting industry Lorem ipsum dolor <br /> sit amet consectetur adipisicing elit. Atque a, sit maxime aut similique deserunt <br /> aliquid voluptate quasi hic temporibus. </p>
            </div>
          </div>

          <div className="w-6/12">
            <div>
              <div className="py-5 text-[20px] font-dm pb-10 font-bold text-[#262626]">
                <h2>Add a Review</h2>
              </div>
              <div className="border-b-[2px] border-[#6767] pb-3 pt-5">
                <h4 className="text-[16px] font-bold font-dm text-[#262626]">Name</h4>
                <input className="mt-4 border-none focus:outline-none" type="text" placeholder="Your name here" />
              </div>
              <div className="border-b-[2px] border-[#6767] pb-3 pt-5">
                <h4 className="text-[16px] font-bold font-dm text-[#262626]">Email</h4>
                <input className="mt-4 border-none focus:outline-none" type="email" placeholder="Your email here" />
              </div>
              <div className="border-b-[2px] border-[#6767] pb-25 pt-5">
                <h4 className="text-[16px] font-bold font-dm text-[#262626]">Review</h4>
                <input className="mt-4 border-none focus:outline-none" type="text" placeholder="Your review here" />
              </div>
              <div className="pb-10">
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



// import font2 from "../assets/font2.png"
// import font3 from "../assets/font3.png"
// import React, { useState, useEffect } from "react"
// import Container from "../components/Container"
// import axios from "axios"
// import { useParams } from "react-router-dom"
// import { MdStar } from "react-icons/md"
// import { TiMinus, TiPlus } from "react-icons/ti"
// import { IoIosStar } from "react-icons/io"

// const ProductsDetails = () => {
//   let [tew, tewShow] = useState(false)
//   let [tmw, tmwShow] = useState(false)
//   let [tow, towShow] = useState(false)
//   let [show, setShow] = useState(false)
//   let [teo, teoShow] = useState(false)
//   let [tto, ttoShow] = useState(false)
//   let [ttq, ttqShow] = useState(false)

//   let [tty, ttyShow] = useState(0)

//   const { id } = useParams()
//   const [product, setProduct] = useState(null)

//   useEffect(() => {
//     axios.get(`https://dummyjson.com/products/${id}`)
//       .then(res => setProduct(res.data))
//       .catch(err => console.log(err))
//   }, [id])

//   if (!product) {
//     return <div>
//        <Container>
//                 <div className="w-full  h-[564px] items-center">
//                     <div className="flex flex-col justify-center items-center h-[70vh]">
//                         <div className="w-16 h-16 border-4 border-[#000] border-t-transparent rounded-full animate-spin"></div>

//                         <h1 className="mt-5 text-center text-[28px] font-bold text-[#767676]">
//                             Ready for You..
//                         </h1>
//                         <p className="text-gray-500 mt-2">Please wait a moment</p>
//                     </div>
//                 </div>
//             </Container></div>
//   }

//   return (
//     <>
//       <div className="py-5 pt-3">
//         <Container>
//           <div className="flex gap-4 justify-between">
//             <div className="w-6/12 m-auto hover:bg-gray-100 p-6 rounded-2xl hover:shadow-2xl duration-300 ">
//               <img className="w-full" src={product.thumbnail} alt={product.title} />
//             </div>
//           </div>

//           <div className="w-6/12 border-b-[2px] border-[#7676] pt-5 PB-4">
//             <div className="w-6/12 flex items-center pb-2">
//               {[1, 2, 3, 4, 5].map((_, i) => (
//                 <MdStar
//                   key={i}
//                   className={`text-[20px] ${i < Math.round(product.rating) ? "text-[#FFD881]" : "text-[#6767]"}`}
//                 />
//               ))}
//               <div className="text-[14px] font-dm text-[#767676] pl-2">{product.rating} Reviews</div>
//             </div>
//             <div className="pt-1 pb-4">
//               <h1 className="PL-1 text-[16px] text-[#767676] font-dm">
//                 <span className="line-through">${product.price + 44}.00</span>
//                 <span className="pl-10 text-[20px] font-dm font-bold text-[#000000]">
//                   ${product.price}.00
//                 </span>
//               </h1>
//             </div>
//           </div>

//           <div className="w-6/12 border-b-[2px] pb-6 border-[#7676]">
//             <div className="flex items-center gap-4 pt-5">
//               <div className="text-[16px] font-dm font-bold text-[#262626]">COLOR :</div>
//               <div className="flex gap-3 cursor-pointer">
//                 <div className="w-[15px] h-[15px] bg-[#767676] rounded-full"></div>
//                 <div className="w-[15px] h-[15px] bg-[#FF8686] rounded-full"></div>
//                 <div className="w-[15px] h-[15px] bg-[#7ED321] rounded-full"></div>
//               </div>
//             </div>
//             <div className="flex pt-3 gap-13 pl-[2px] items-center">
//               <div className="text-[16px] font-dm font-bold text-[#262626] ">
//                 <h1>SIZE :</h1>
//               </div>
//               <div>
//                 <select className="border-[1px] border-[#676767] rounded-[2px] py-1 px-5 cursor-pointer">
//                   <option value="">M</option>
//                   <option value="">S</option>
//                   <option value="">XL</option>
//                   <option value="">XXL</option>
//                 </select>
//               </div>
//             </div>
//             <div className="flex pt-5 gap-2 items-center">
//               <div className="text-[16px] font-dm font-bold text-[#262626]">
//                 <h1>QUANTITY :</h1>
//               </div>
//               <div className="flex items-center gap-3 border-[1px] border-[#676767] rounded-[2px] select-none px-3 cursor-pointer">
//                 <div onClick={() => ttyShow(tty > 0 ? tty - 1 : 0)} className="text-[25px]">-</div>
//                 <p>{tty}</p>
//                 <div onClick={() => ttyShow(tty + 1)} className="text-[25px]">+</div>
//               </div>
//             </div>
//           </div>

//           <div className="w-6/12 border-b-[2px] pb-6 border-[#6767] ">
//             <div className="flex pt-5 gap-2 items-center">
//               <div className="text-[16px] font-dm font-bold text-[#262626]">
//                 <h1>STATUS :</h1>
//               </div>
//               <h4 className="text-[16px] text-[#767676]">
//                 {product.stock > 0 ? "In stock" : "Out of stock"}
//               </h4>
//             </div>
//             <div className="flex gap-4 pt-4">
//               <button className="py-2 px-5 border-[2px] border-[#7676] text-[14px] text-[#262626] hover:bg-[#000] hover:text-[#fff] duration-300 cursor-pointer">Add to Wish List</button>
//               <button className="py-2 px-7 text-[14px] border-[#7676] text-[#262626] border-[2px] hover:bg-[#000] hover:text-[#fff] duration-300 cursor-pointer">Add to Cart</button>
//             </div>
//           </div>

//           <div className="w-6/12 py-6 border-b-[2px] border-[#7676]">
//             <div onClick={() => ttqShow(!ttq)} className="flex items-center cursor-pointer justify-between">
//               <div className="text-[16px] font-bold font-dm text-[#262626]">FEATURES & DETAILS</div>
//               {ttq ? <TiMinus /> : <TiPlus />}
//             </div>
//             {ttq && <p className="text-[#767676] font-dm">{product.description}</p>}
//           </div>

//           <div className="w-6/12 py-6 border-b-[2px] border-[#7676]">
//             <div onClick={() => ttoShow(!tto)} className="flex items-center cursor-pointer justify-between">
//               <div className="text-[16px] font-bold font-dm text-[#262626]">SHIPPING & RETURNS</div>
//               {tto ? <TiMinus /> : <TiPlus />}
//             </div>
//             {tto && <p className="text-[#767676] font-dm">Free shipping on orders over $50</p>}
//           </div>

//           <div className="w-6/12 pt-7 pb-17 text-[16px] font-dm text-[#767676]">
//             <p>{product.description}</p>
//           </div>

//           <div className="w-6/12 flex py-5">
//             <div>
//               <h1 className="text-[20px] font-dm text-[#767676]">Description</h1>
//               <p className="pt-5 text-[14px] font-dm text-[#767676]">1 review for Product</p>
//             </div>
//             <div className="pl-5">
//               <h2 className="text-[20px] font-dm font-bold text-[#000]">Reviews (1)</h2>
//             </div>
//           </div>
//           <div className="w-12/12 py-8 border-[#7676] border-b-[2px] border-t-[2px] mt-3">
//             <div className="flex justify-between items-center">
//               <div className="flex items-center gap-5">
//                 <div className="text-[#262626] font-dm text-[16px]">John Ford</div>
//                 <div className="flex text-[#FFD881]">
//                   {[...Array(5)].map((_, i) => <IoIosStar key={i} />)}
//                 </div>
//               </div>
//               <div className="text-[16px] font-dm text-[#767676]"><h4>6 months ago</h4></div>
//             </div>
//             <div className="w-full pt-3 text-[14px] font-dm text-[#767676]">
//               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
//             </div>
//           </div>

//           <div className="w-6/12">
//             <div>
//               <div className="py-5 text-[20px] font-dm pb-10 font-bold text-[#262626]">
//                 <h2>Add a Review</h2>
//               </div>
//               <div className="border-b-[2px] border-[#6767] pb-3 pt-5">
//                 <h4 className="text-[16px] font-bold font-dm text-[#262626]">Name</h4>
//                 <input className="mt-4 border-none focus:outline-none" type="text" placeholder="Your name here" />
//               </div>
//               <div className="border-b-[2px] border-[#6767] pb-3 pt-5">
//                 <h4 className="text-[16px] font-bold font-dm text-[#262626]">Email</h4>
//                 <input className="mt-4 border-none focus:outline-none" type="email" placeholder="Your email here" />
//               </div>
//               <div className="border-b-[2px] border-[#6767] pb-25 pt-5">
//                 <h4 className="text-[16px] font-bold font-dm text-[#262626]">Review</h4>
//                 <input className="mt-4 border-none focus:outline-none" type="text" placeholder="Your review here" />
//               </div>
//               <div className="pb-100">
//                 <button className="py-3 mt-5 border-[1px] px-15 text-[20px] font-dm font-bold bg-[#000] text-[#fff] hover:bg-[#fff] hover:text-[#000] hover:border-[1px] duration-300">Post</button>
//               </div>
//             </div>
//           </div>
//         </Container>
//       </div>
//     </>
//   )
// }

// export default ProductsDetails
