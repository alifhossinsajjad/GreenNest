
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Home = () => {


    const plants = useLoaderData();
    console.log(plants);


    const [allPlants, setAllPlants] = useState([]);

    useEffect(() => {
        setAllPlants(plants)
    }, [plants])



    
    return (
       <div>

       </div>
    );
};

export default Home;