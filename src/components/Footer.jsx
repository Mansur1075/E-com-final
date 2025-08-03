import React from 'react'
import Container from './Container'
import logo from "../assets/logo.png"
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-[#F5F5F3] py-8'>
     <Container>
        <div className="">
            <div className="flex">
                <div className="w-2/12">
                <h5 className='font-bold text-[16px] text-[#262626] font-dm'>MENU</h5>
                <ul className=' text-[14px] font-dm text-[#6D6D6D] pt-5'>
                    <li className='pt-2'>Home</li>
                    <li className='pt-2'>Shop</li>
                    <li className='pt-2'>About</li>
                    <li className='pt-2'>Contact</li>
                    <li className='pt-2'>Journal</li>
                </ul>
                </div>
                <div className="w-2/12">
                <h5 className='font-bold text-[16px] text-[#262626] font-dm'>SHOP</h5>
                <ul className=' text-[14px] font-dm text-[#6D6D6D] pt-5'>
                    <li className='pt-2'>Category 1</li>
                    <li className='pt-2'>Category 2</li>
                    <li className='pt-2'>Category 3</li>
                    <li className='pt-2'>Category 4</li>
                    <li className='pt-2'>Category 5</li>
                </ul>
                </div>
                <div className="w-2/12">
                <h5 className='font-bold text-[16px] text-[#262626] font-dm'>HELP</h5>
                <ul className=' text-[14px] font-dm text-[#6D6D6D] pt-5'>
                    <li className='pt-2'>Privacy Policy</li>
                    <li className='pt-2'>Terms & Conditions</li>
                    <li className='pt-2'>Special E-shop</li>
                    <li className='pt-2'>Shipping</li>
                    <li className='pt-2'>Secure Payments</li>
                </ul>
                </div>
                <div className="w-2/12 text-[#262626] font-dm text-[16px] font-bold ">
                <h4>(052) 611-5711</h4>
                <h4>company@domain.com</h4>
                </div>
                <div className="w-4/12 pl-[50px]">
                <img src={logo} alt="" />
                </div>
            </div>
        </div>
     </Container>
     <Container>
        <div className="flex py-8 justify-between ">
            <div className=" w-3/12 flex gap-3 text-[#6D6D6D]">
                <FaFacebookF />
                <FaLinkedinIn />
                <FaInstagram />
            </div>
            <div className="w-7/12text-[#6D6D6D] text-[14px] font-dm">
                <p>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
            </div>
        </div>
     </Container>
    </div>
  )
}

export default Footer