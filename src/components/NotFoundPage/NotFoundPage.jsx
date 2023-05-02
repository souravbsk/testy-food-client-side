import React from 'react';
import {TbError404} from "react-icons/tb"
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className='flex items-center justify-center h-96'>
            <div className='text-center'>
                <h2 className='text-5xl font-medium text-gray-900'>Testy Food</h2>
            <p className=' text-xl md:text-4xl font-mono flex items-center gap-3 font-extrabold text-orange-500'><TbError404 className='text-5xl md:text-8xl'></TbError404> Not Found Page !!!</p>
                <Link className='btn primary-btn' to="/">Go To Home</Link>
            </div>
        </div>
    );
};

export default NotFoundPage;