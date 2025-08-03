import React from 'react'
import Container from './Container'
import pri from "../assets/pri.png"
import pdi from "../assets/pdi.png"
import ppi from "../assets/ppi.png"

const Four = () => {
    return (
        <div>
            <Container>
                <div className="py-20 flex gap-10 ">
                    <div className="w-6/12 relative">
                        <img src={pri} alt="" className="w-full" />

                        <div className="absolute left-10 font-dm bottom-10 text-black space-y-2">
                            <h3 className="text-[39px] text-[#262626] font-bold ">Phones Sale</h3>
                            <p className=" text-[16px] font-dm">Up to <span className='text-[40px] font-[700] text-[#262626]'> 30%</span> sale for all phones!</p>
                            <button className="bg-[#262626] text-white px-4 py-2  mt-7">
                                Shop Now
                            </button>
                        </div>
                    </div>
                    <div className="w-6/12 relative">
                        <div className="">
                            <div className="">
                                <img src={pdi} alt="" className="w-full" />
                                <div className="absolute left-10 font-dm bottom-90 text-black space-y-2">
                                    <h3 className="text-[32px] text-[#262626] font-bold ">Electronics Sale</h3>
                                    <p className=" text-[16px] font-dm">Up to <span className='text-[40px] font-[700] text-[#262626]'> 70%</span> sale for all phones!</p>
                                    <button className="bg-[#262626] text-white px-4 py-2  mt-7">
                                        Shop Now
                                    </button>
                                </div>
                            </div>
                            <div className=" relative mt-8">
                                <img src={ppi} alt="" className="w-full" />
                                <div className="absolute left-10 font-dm bottom-10 text-black space-y-2">
                                    <h3 className="text-[32px] text-[#262626] font-bold ">Furniture Offer</h3>
                                    <p className=" text-[16px] font-dm">Up to <span className='text-[40px] font-[700] text-[#262626]'> 50%</span> sale for all phones!</p>
                                    <button className="bg-[#262626] text-white px-4 py-2  mt-7">
                                        Shop Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
        </div>
    )
}

export default Four