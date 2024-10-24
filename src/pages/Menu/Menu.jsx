import { Helmet } from "react-helmet-async";

import UseMenu from "../../Hoks/usehoks/UseMenu";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import bannerImg from "../../assets/menu/banner3.jpg";  // Import the image properly
import SectionHide from "../../components/SectionHide";
import MenuCategory from "./Menucetagory/MenuCategory";
import OurMenuCover from "../Home/shared/over/OurMenuCover";


const Menu = () => {
    const [menus] = UseMenu();
    const dessert = menus.filter(item => item.category === 'dessert');
    const salad = menus.filter(item => item.category === 'salad');
    const soup = menus.filter(item => item.category === 'soup');
    const pizza = menus.filter(item => item.category === 'pizza');
    const offered = menus.filter(item => item.category === 'offered');

    return (
        <div> 
           <Helmet><title>Menu</title></Helmet>
            {/* main cover */}
           <OurMenuCover img={bannerImg} title={"Our Menu"}></OurMenuCover>
           <SectionHide heading="Today's Offer" subheading="-----Don't Miss-----"></SectionHide>
        
            {/* offered menu items */}
           <MenuCategory items={offered}></MenuCategory>
           
            {/* dessert menu items */}
           <MenuCategory items={dessert} title="Dessert" img={dessertImg}></MenuCategory>
           <MenuCategory items={pizza} title="Pizza" img={pizzaImg}></MenuCategory>
           <MenuCategory items={salad} title="Salad" img={saladImg}></MenuCategory>
           <MenuCategory items={soup} title="Soup" img={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;
