import Benar from "./Baner/Benar";
import Bistro from "./BistroBoss/Bistro";
import CallUs from "./CallUs/CallUs";

import FoddCategory from "./Category/FoddCategory";
import Fichard from "./Ficurd/Fichard";
import Pupoermenu from "./Pupolermenu/Pupoermenu";
import TESTIMONIALS from "./Testimonilias/TESTIMONIALS";

import { Helmet, } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Benar></Benar>
            <FoddCategory></FoddCategory>
            <Bistro></Bistro>
            <Pupoermenu></Pupoermenu>
            <CallUs></CallUs>
            <Fichard></Fichard>
            <TESTIMONIALS></TESTIMONIALS>
            
        </div>
    );
  
};

export default Home;