import React, { useState } from 'react';
import {Link,NavLink} from "react-router-dom"
import Hamburger from 'hamburger-react'
const Header = () => {
    const [isOpen,setOpen] = useState(false)
    return (
        <div className='bg-black absolute right-0 left-0 top-0 border-b-2'>
            <nav className=' container flex flex-col md:flex-row py-4 md:py-6 md:items-center justify-between'>
                <div className='flex items-center justify-between'>
                    <Link><h2 className='text-2xl md:text-4xl font-bold text-white font-serif'>Testy Food</h2></Link>
                <div className='block md:hidden'>
                    <button onClick={() => setOpen(!isOpen)} className='text-orange-500 border-2 '>
                        <Hamburger></Hamburger>
                    </button>
                </div>
                </div>
                <ul className={`flex flex-col md:flex-row absolute md:static items-center gap-4 md:h-auto h-screen md:bg-transparent bg-black duration-300 top-24 px-11 ${isOpen ? "left-0" : "-left-60"}`}>
                    <li className='px-3 py-3'><NavLink to="/" className="text-xl text-white font-medium">Home</NavLink></li>
                    <li className='px-3 py-3'><NavLink to="/blog" className="text-xl text-white font-medium">Blog</NavLink></li>
                    <li className='px-3 py-3'><NavLink to="/login" className="text-xl text-white font-medium"><button>Login</button></NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;