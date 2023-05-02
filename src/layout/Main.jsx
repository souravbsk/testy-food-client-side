import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster />
        </div>
    );
};

export default Main;