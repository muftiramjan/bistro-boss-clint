import { Helmet } from "react-helmet-async";
import Ourmenucover from "../Home/shared/over/Ourmenucover";
import Ourmenucoverr from "../../assets/menu/banner3.jpg"
import UseMenu from "../../Hoks/usehoks/UseMenu";
import Sectionhedin from "../../components/SectionHide";
import Menucatgory from "./Menucetagory/Menucatgory";
import dessertimg from "../../assets/menu/dessert-bg.jpeg"
import pizzaimg from "../../assets/menu/pizza-bg.jpg"
import saladimg from "../../assets/menu/salad-bg.jpg"
import soupimg from "../../assets/menu/soup-bg.jpg"

const Menu = () => {
    const [menus]=UseMenu();
    const dessert = menus.filter(item => item.category === 'dessert')
    const salad = menus.filter(item => item.category === 'salad')
    const soup = menus.filter(item => item.category === 'soup')
    const pizza = menus.filter(item => item.category === 'pizza')
    const offered = menus.filter(item => item.category === 'offered')
    return (
        <div> 
           <Helmet><title>menu</title></Helmet>
            {/* main cover */}
           <Ourmenucover img={Ourmenucoverr}title={"our menu"}></Ourmenucover>

          <Sectionhedin heding="Tode's offer" sabheding="-----Don't miss-----"></Sectionhedin>
            {/* offered menu items */}
          <Menucatgory items={offered}></Menucatgory>
          {/* dessert menu items */}
          <Menucatgory items={dessert} title="dessert" img={dessertimg}></Menucatgory>
          <Menucatgory items={pizza} title="pizza" img={pizzaimg}></Menucatgory>
          <Menucatgory items={salad} title="salad" img={saladimg}></Menucatgory>
          <Menucatgory items={soup} title="soup" img={soupimg}></Menucatgory>
        </div>
    );
};

export default Menu;