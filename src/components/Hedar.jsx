import React, { useState } from 'react'
import Container from './Container'

import logo from '../assets/Logo.png';
import { FaBars } from "react-icons/fa";
import { GiCrossedSwords } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Hedar = () => {
    let [menu, setMenu] = useState(false)
    return (
        <header className='py-4'>
            <Container>
                <div className=" lg:flex items-center">
                    <div className=" w-full lg:w-2/12 ">
                        <img src={logo} alt="" />
                    </div>
                    <div className="w-full lg:w-10/12 lg:py-3 px-3 text-center">
                        <ul className={`lg:flex gap-7 justify-center duration-300 ease-in-out ${menu == true ? "bg-[#00000040] rounded-2xl opacity-100 lg:h-[0px] h-[200px]"
                            :" opacity-1 lg:opacity-100 h-[0] lg:h-[0] z-[-1]"  }`}>
                            <Link to="/">  <li className='font-dm text-[16px] text-[#767676] hover:text-[#262626] pt-7 lg:pt-0 leading-0 py-1 duration-300 ease-in-out hover:font-bold  cursor-pointer '>Home</li></Link>
                            <Link to="/shop"> <li className='font-dm text-[16px] text-[#767676] hover:text-[#262626] pt-6 lg:pt-0  leading-0  py-1 duration-300 ease-in-out hover:font-bold  cursor-pointer '>Shop</li></Link>
                            <li className='font-dm text-[16px] text-[#767676] hover:text-[#262626] pt-8 lg:pt-0  leading-0  py-1 duration-300 ease-in-out hover:font-bold  cursor-pointer '>About</li>
                            <li className='font-dm text-[16px] text-[#767676] hover:text-[#262626] pt-8 lg:pt-0  leading-0  py-1 duration-300 ease-in-out hover:font-bold  cursor-pointer '>Contacts</li>
                            <li className='font-dm text-[16px] text-[#767676] hover:text-[#262626] pt-8 lg:pt-0  leading-0  py-1 duration-300 ease-in-out hover:font-bold cursor-pointer '>Journal</li>
                        </ul>
                    </div>
                    <div className="lg:hidden absolute top-0 pt-2 right-2 z-[1]" onClick={()=>setMenu(!menu)}>{menu ?<GiCrossedSwords />:<FaBars />}
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Hedar