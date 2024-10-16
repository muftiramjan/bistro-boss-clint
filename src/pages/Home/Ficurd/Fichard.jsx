import Sectionhedin from "../../../components/Sectionhedin";
import featured from "../../../assets/home/featured.jpg"
import './Feartued.css'
const Fichard = () => {
    return (
        <div className="featurd-item text-white pt-10 my-20 bg-fixed">
            <Sectionhedin
                sabheding={'---Check it out---'}
                heding={'Featured items'}
            ></Sectionhedin>
            <div className="md: flex justify-center items-center py-20 px-36 bg-opacity-40 bg-slate-300">
                <div>
                    <img src={featured} alt="" />
                </div>
                <div className="md:  ml-10">
                    <h2>March 20, 2023</h2>
                    <h2 className="uppercase">WHERE CAN I GET SOME?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
<button className="btn btn-outline border-0 border-b-4 mt-4">Red more</button>
                </div>
            </div>
        </div>
    );
};

export default Fichard;