import React from 'react'
import Container from './Container'
import font from "../assets/font.png"
import font1 from "../assets/font1.png"
import font2 from "../assets/font2.png"
import font3 from "../assets/font3.png"

const Special = () => {
  return (
      <div>
        <Container>
             <h1 className='text-[#262626] text-[39px] pt-7 font-dm font-bold'>Special Offers</h1>
            <div className="py-5 flex gap-8">
                
                <div className="w-3/12 relative">
                    <img src={font} alt="" />
                     <div className="">
                     <button className='px-[20px] py-[5px] cursor-pointer bg-[#000] text-[#fff] absolute top-2 left-2'>
                        New
                     </button>
                     <div className="w-[3/12] flex justify-between pt-4">
                        <div className="">
                            <h4 className='text-[20px] font-dm text-[#262626] font-bold'>Basic Crew Neck Tee</h4>
                            <p className='text-[#767676] font-dm text-[16px]' >Black</p>
                        </div>
                        <div className="">
                            <h5 className='text-[#767676] font-dm text-[16px]'>$44.00</h5>
                        </div>
                     </div>
                   </div>
                </div>
                <div className="w-3/12 relative">
                    <img src={font1} alt="" />
                     <div className="">
                     <button className='px-[20px] py-[5px] cursor-pointer bg-[#000] text-[#fff] absolute top-2 left-2'>
                        New
                     </button>
                     <div className="w-[3/12] flex justify-between pt-4">
                        <div className="">
                            <h4 className='text-[20px] font-dm text-[#262626] font-bold'>Basic Crew Neck Tee</h4>
                            <p className='text-[#767676] font-dm text-[16px]' >Black</p>
                        </div>
                        <div className="">
                            <h5 className='text-[#767676] font-dm text-[16px]'>$44.00</h5>
                        </div>
                     </div>
                   </div>
                </div>
                <div className="w-3/12 relative">
                    <img src={font2} alt="" />
                     <div className="">
                     <button className='px-[20px] py-[5px] cursor-pointer bg-[#000] text-[#fff] absolute top-2 left-2'>
                        New
                     </button>
                     <div className="w-[3/12] flex justify-between pt-4">
                        <div className="">
                            <h4 className='text-[20px] font-dm text-[#262626] font-bold'>Basic Crew Neck Tee</h4>
                            <p className='text-[#767676] font-dm text-[16px]' >Black</p>
                        </div>
                        <div className="">
                            <h5 className='text-[#767676] font-dm text-[16px]'>$44.00</h5>
                        </div>
                     </div>
                   </div>
                </div>
                <div className="w-3/12 relative">
                    <img src={font3} alt="" />
                     <div className="">
                     <button className='px-[20px] py-[5px] cursor-pointer bg-[#000] text-[#fff] absolute top-2 left-2'>
                        New
                     </button>
                     <div className="w-[3/12] flex justify-between pt-4">
                        <div className="">
                            <h4 className='text-[20px] font-dm text-[#262626] font-bold'>Basic Crew Neck Tee</h4>
                            <p className='text-[#767676] font-dm text-[16px]' >Black</p>
                        </div>
                        <div className="">
                            <h5 className='text-[#767676] font-dm text-[16px]'>$44.00</h5>
                        </div>
                     </div>
                   </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Special