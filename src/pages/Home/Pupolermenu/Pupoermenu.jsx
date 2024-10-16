
import Sectionhedin from "../../../components/Sectionhedin";
import Menuitems from "../shared/Menuitems";
import UseMenu from "../../../Hoks/usehoks/UseMenu";

const Pupoermenu = () => {
    const [menus]=UseMenu();
    const pupoler = menus.filter(item => item.category === 'popular')
    
    return (
        <section className="mb-8 mt-10">
            <Sectionhedin
             sabheding={'---Check it out---'}
             heding={'FROM OUR MENU'}
            ></Sectionhedin>
            <div className="grid md: grid-cols-2 gap-10">
                {
                    pupoler.map( item => <Menuitems
                    key={item._data}
                    item={item}
                    ></Menuitems>)
                    
                }
                
            </div>
           <div className="flex items-center justify-center mt-5">
           <button className="btn btn-outline border-0 border-b-4 ">View Full  Menu</button>
           </div>
        </section>
      
    );
};

export default Pupoermenu;