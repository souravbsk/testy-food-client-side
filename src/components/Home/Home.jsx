import React from 'react';
import Banner from '../Banners/Banner';
import OurChefs from '../OurChefs/OurChefs';
import {useLoaderData} from "react-router-dom"
import Categories from '../Categories/Categories';
import ThinkIntro from '../ThinkIntro/ThinkIntro';

const Home = () => {
    const chefs = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <ThinkIntro></ThinkIntro>
            <Categories></Categories>
            <OurChefs chefs={chefs}></OurChefs>
        </div>
    );
};

export default Home;