import Menuitems from "../shared/Menuitems";
import UseMenu from "../../../Hoks/usehoks/UseMenu";
import SectionHide from "../../../components/SectionHide";

const PopularMenu = () => {
    const [menus] = UseMenu();
    const popular = menus.filter(item => item.category === 'pizza');

    return (
        <section className="mb-8 mt-10">
            <SectionHide subheading={'---Check it out---'} heading={'FROM OUR MENU'} />
            <div className="grid md:grid-cols-2 gap-10">
                {popular.map(item => (
                    <Menuitems key={item._id} item={item} />
                ))}
            </div>
            <div className="flex items-center justify-center mt-5">
                <button className="btn btn-outline border-0 border-b-4">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;
