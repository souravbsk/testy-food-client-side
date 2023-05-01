import React from 'react';
import {Link,NavLink} from "react-router-dom"

const Header = () => {
    return (
        <div className='container border-b-2'>
            <nav className='flex py-4 md:py-6 items-center justify-between'>
                <div>
                    <Link><h2 className='text-2xl md:text-4xl font-bold font-serif'>Testy Food</h2></Link>
                </div>
                <ul className={`flex flex-col md:flex-row absolute md:static items-center gap-4`}>
                    <li className='px-3 py-3'><NavLink to="/" className="text-xl font-medium">Home</NavLink></li>
                    <li className='px-3 py-3'><NavLink to="/blog" className="text-xl font-medium">Blog</NavLink></li>
                    <li className='px-3 py-3'><NavLink to="/login" className="text-xl font-medium"><button>Login</button></NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;