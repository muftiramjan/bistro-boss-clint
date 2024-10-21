import Benar from "./Baner/Benar";
import Bistro from "./BistroBoss/Bistro";
import CallUs from "./CallUs/CallUs";

import FoodCategory from "./Category/FoodCategory";
import Fichard from "./Ficurd/Fichard";
import Pupoermenu from "./Pupolermenu/Pupoermenu";
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
            <Pupoermenu></Pupoermenu>
            <CallUs></CallUs>
            <Fichard></Fichard>
            <TESTIMONIALS></TESTIMONIALS>
            
        </div>
    );
  
};

export default Home;