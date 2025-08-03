import React from 'react'
import Container from './Container'
import ppw from "../assets/ppw.png"
import text from "../assets/text.png"
import text1 from "../assets/text1.png"
import text2 from "../assets/text2.png"
import text3 from "../assets/text3.png"

const Six = () => {
  return (
    <div>
        <Container>
            <div className="py-5 flex gap-8">
                <div className="w-3/12 relative">
                    <img src={text1} alt="" />
                     <div className="">
                     <button className='px-[20px] py-[5px] bg-[#000] text-[#fff] absolute top-2 left-2 cursor-pointer '>
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
                    <img src={text2} alt="" />
                     <div className="">
                     <button className='px-[20px] py-[5px] bg-[#000] text-[#fff] absolute top-2 left-2 cursor-pointer '>
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
                    <img src={text3} alt="" />
                     <div className="">
                     <button className='px-[20px] py-[5px] bg-[#000] text-[#fff] absolute top-2 left-2 cursor-pointer '>
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
                    <img src={text} alt="" />
                     <div className="">
                     <button className='px-[20px] py-[5px] bg-[#000] text-[#fff] absolute top-2 left-2 cursor-pointer '>
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

export default Six