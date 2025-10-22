
import { useLoaderData } from 'react-router';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Carosul from './carosul';

const Home = () => {


    const plants = useLoaderData();
    console.log(plants);


    return (
        <div>
            <Carosul plants ={plants}/>
        </div>
    );
};

export default Home;