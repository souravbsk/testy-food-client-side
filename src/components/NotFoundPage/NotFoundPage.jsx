import React from 'react';
import {TbError404} from "react-icons/tb"
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className='flex items-center justify-center '>
            <div className='text-center'>
                <img className='md:w-3/12  mx-auto' src="https://i.ibb.co/4NG5kRm/5203299.jpg" alt="" />
                <Link className='btn primary-btn' to="/">Go To Home</Link>
            </div>
        </div>
    );
};

export default NotFoundPage;