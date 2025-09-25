import React, { useContext } from 'react'
import Container from './Container'
import ppw from "../assets/ppw.png"
import ppo from "../assets/ppo.png"
import ppr from "../assets/ppr.png"
import pri from "../assets/pri.png"
import { GiEternalLove } from 'react-icons/gi'
import { HiOutlineRefresh } from 'react-icons/hi'
import { IoCart } from 'react-icons/io5'
import Slider from 'react-slick'
import { FaArrowLeft, FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { Apidata } from './ContextApi'
import { Link } from 'react-router-dom'

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className='mansur2  p-[15px] rounded-[50%] bg-[#000] right1  absolute left-0 top-[50%] z-[5] text-[#979797] transform - translate-y-[-50%] '
      onClick={onClick}
    ><FaArrowLeft className='nexte'/></div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className='mansur2  p-[16px] rounded-[50%] bg-[#000] right1  absolute right-0 top-[50%] z-[5] text-[#979797] transform - translate-y-[-50%] '
      onClick={onClick}
    ><FaArrowRight className=''/></div>
  );
}

const Five = () => {
 let {info,loading} = useContext(Apidata)
 
 

   var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
      autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

       responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  if(loading){
    return(
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
    )
  
  }

  return (
    <div>
      <Container>
        <div className="pt-0 pb-8 gap-3">
          <div className="">
            <h1 className='text-[#262626] text-[39px] font-dm font-bold pb-7'>New Arrivals</h1>
          </div>
          <div className="five">
          <Slider {...settings}>
            {info.map((item) =>(     
              <div className=" relative flex overflow-hidden group p-4 gap-10 shadow-md h-[400px] w-full ml-2.5 ">
            <Link to="/shop">
            <div className=" hover:shadow-md duration-300 hover:bg-[#f0f8ff]">
              <img src={item.thumbnail} alt="" className='w-full' />
            </div>
            </Link>
          <div className="">
            <button className='px-[20px] py-[5px] bg-[black] text-[#fff] absolute top-[8%] left-[10%] cursor-pointer '>
              %{item.discountPercentage}
            </button>
          </div>
          <div className="W-3/12 bg-[#fff] cursor-pointer   top-[146px]  absolute left-[-100%] h-[40%] w-full group-hover:left-[0px] duration-300 ease-in-out" >
            <h4 className='pl-[50%] pt-[10%] text-[16px] text-[#767676] font-dm font-[400]'>Add to Wish List <GiEternalLove className=' text-[#000] inline-block'/></h4>
            <h4 className='pl-[72%] pt-[5%] font-dm text-[#262626] font-[700]'>Shape <HiOutlineRefresh className=' inline-block' /></h4>
            <h4 className='pl-[57%] pt-[5%] font-dm text-[#262626] font-[700]'>Add to Cart <IoCart className=' inline-block pl-2 text-[30px]' /></h4>
          </div>
          <div className=" w-full justify-between flex pt-5">
            <div className="">
              <h5 className=' font-dm text-[16px] font-[600] text-[#262626]'>{item.title}</h5>
              <p className=' text-[14px] font-dm text-[#473835] '>${item.price}</p>
            </div>
            <div className="">
              <h5 className=' text-[14px] font-dm text-[#473835] pt-3'>${item.price}</h5>
            </div>
          </div>
          </div>
            ))}
          </Slider>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Five