import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Toaster } from 'react-hot-toast';
import Loading from '../components/Loading/Loading';

const Main = () => {

    const navigation = useNavigation();
  


    return (
        <div>
            <Header></Header>
            {
                navigation.state === "loading" ? <Loading></Loading> :
            <Outlet></Outlet>
            }
            <Footer></Footer>
            <Toaster />
        </div>
    );
};

export default Main;