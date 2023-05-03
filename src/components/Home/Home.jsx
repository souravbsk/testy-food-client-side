import React from 'react';
import Banner from '../Banners/Banner';
import OurChefs from '../OurChefs/OurChefs';
import {useLoaderData} from "react-router-dom"
import Categories from '../Categories/Categories';
import ThinkIntro from '../ThinkIntro/ThinkIntro';
import MapLocation from '../MapLocation/MapLocation';

const Home = () => {
    const chefs = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <ThinkIntro></ThinkIntro>
            <OurChefs chefs={chefs}></OurChefs>
            <Categories></Categories>
            {/* <MapLocation></MapLocation> */}
        </div>
    );
};

export default Home;