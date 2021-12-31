import React from 'react';

import Banner from '../Banner/Banner';
import CategoriesHome from '../CategoryHome/CategoriesHome';
import Discount from '../Discount/Discount';
import Reservation from '../Reservation/Reservation';
import SeaFood from '../SeaFood/SeaFood';



const Home = () => {

    return (

        <>
        <Banner></Banner>
        <Discount></Discount>
        <Reservation></Reservation>
        <SeaFood></SeaFood>
        <CategoriesHome></CategoriesHome>
        </>
    );
};

export default Home;