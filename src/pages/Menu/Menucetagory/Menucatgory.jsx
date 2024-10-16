import Menuitems from "../../Home/shared/Menuitems";
import PropTypes from 'prop-types';
import Ourmenucover from "../../Home/shared/over/Ourmenucover";
import { Link } from "react-router-dom";

const Menucatgory = ({items,title,img}) => {
    
    return (
        <div className="pt-8">
             {title &&
              <Ourmenucover img={img} title={title}></Ourmenucover>
              }

              <div className="grid md: grid-cols-2 gap-10 my-16">
                {
                    items.map( item => <Menuitems
                    key={item._data}
                    item={item}
                    ></Menuitems>)
                    
                }
                
            </div>
            {/* <div className="flex items-center justify-center mt-5"> */}

           <Link to={`/order/${title}`}><button className="btn btn-outline border-0 border-b-4 items-center">order your food</button></Link> 
            {/* </div> */}
        </div>
    );
    
};
Menucatgory.propTypes = {
    items:PropTypes.object
}
Menucatgory.propTypes = {
    title:PropTypes.object
}
Menucatgory.propTypes = {
    img:PropTypes.object
}
export default Menucatgory;