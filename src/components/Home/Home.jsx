import React from 'react';
import Banner from '../Banners/Banner';
import OurChefs from '../OurChefs/OurChefs';
import {useLoaderData} from "react-router-dom"

const Home = () => {
    const chefs = useLoaderData();
    console.log(chefs);
    return (
        <div>
            <Banner></Banner>
            <OurChefs chefs={chefs}></OurChefs>
        </div>
    );
};

export default Home;