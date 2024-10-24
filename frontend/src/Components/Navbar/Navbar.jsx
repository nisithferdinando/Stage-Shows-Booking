import React, { useEffect, useState } from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import { BsFillFileMusicFill } from "react-icons/bs";

const Navbar = () => {

    const [theme, seTheme]=useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
    const element=document.documentElement;

    useEffect(()=>{
        if(theme==="dark"){
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
        else{
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    },[theme])
  return (
    <div>

        <div className='bg-gradient-to-l from-purple-900 via-purple-800 to-purple-900 fixed top-0 left-0 w-full border-b-[1px] border-primary/50 z-10'>
            <div className='container'>
            <div className='flex justify-between items-center py-3'>
                {/*Logo section*/}
                <div className='text-2xl md:text-3xl text-white uppercase'>
                    <a href='#'>Prime Shows</a>
                </div>
                
                {/*Desktop Menu section*/}
                <div className='text-white flex items-center gap-10 '>
                    <div className='flex items-center hover:text-yellow-300 transition duration-200'><IoHomeOutline className='mr-1 text-lg '/> <a href='#' className='text-lg'>Home</a></div>
                    <div className='flex items-center hover:text-yellow-300 transition duration-200'> <BsTelephone className='mr-2 text-base '/> <a href="#" className='text-lg'>Contact us</a></div>
                    <div className='flex items-center hover:text-yellow-300 transition duration-200'><BsFillFileMusicFill className='mr-2 text-lg'/><a href='#' className='text-lg'>Shows</a></div>
                </div>
                <div className=''>
                   {theme==="dark" ?(
                    <BiSolidSun className="text-white text-2xl cursor-pointer" onClick={()=>seTheme("light")}/>
                   ):
                   <BiSolidMoon className="text-white text-2xl cursor-pointer" onClick={()=>seTheme("dark")}/>
                   }
                </div>
                
                {/*Mobile Menu Section*/}
            </div>
            </div>
         

        </div>
    </div>
  )
}

export default Navbar