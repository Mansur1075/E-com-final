import React from 'react'
import Container from './Container'
import ghori from "../assets/ghori.png"

const Phone = () => {
  return (
    <div>
        <Container>
            <div className="py-5">
                <div className="w-12/12 relative">
                    <img src={ghori} alt="" className='w-full' />
                    <div className="w-4/12 absolute top-[18%] right-[20%] ">
                    <h4 className='text-[39px] font-dm font-bold pt-4 text-[#000]'> Phone of the year</h4>
                    <p className='text-[16px] font-dm text-[#262626] pt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum..</p>
                    <button className='px-[20px] py-[5px] bg-[black] text-[#fff] mt-[15px] cursor-pointer'>Shop Now</button>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Phone