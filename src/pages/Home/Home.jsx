import Benar from "./Baner/Banner";
import Bistro from "./BistroBoss/Bistro";
import CallUs from "./CallUs/CallUs";
import FoodCategory from "./Category/FoodCategory";
import Fichard from "./Ficurd/Fichard";
import PopularMenu from "./Pupolermenu/PopularMenu";
import TESTIMONIALS from "./Testimonilias/Testimonials";

import { Helmet, } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Benar></Benar>
            <FoodCategory></FoodCategory>
            <Bistro></Bistro>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <Fichard></Fichard>
            <TESTIMONIALS></TESTIMONIALS>
            
        </div>
    );
  
};

export default Home;