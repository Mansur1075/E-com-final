import React from 'react'
import Container from './Container'
import { PiNumberTwoBold } from 'react-icons/pi'
import { RiEBike2Fill } from 'react-icons/ri'
import { TbReload } from 'react-icons/tb'

const Three = () => {
  return (
    <div>
      <Container>
        <div className="flex justify-center items-center gap-90 pt-3">
            <div className="flex items-center gap-3 pr-6 "><PiNumberTwoBold className='text-[25px]' /> <span className='text-[#6D6D6D] font-[400]'>Two years warranty</span></div>
            <div className=" flex items-center gap-3"><RiEBike2Fill className='text-[25px]'/><span className='text-[#6D6D6D] font-[400]'> Free shipping</span></div>
            <div className="flex items-center gap-3"><TbReload className='text-[25px]'/><span className='text-[#6D6D6D] font-[400]'> Return policy in 30 days</span></div>
        </div>
      </Container>
    </div>
  )
}

export default Three