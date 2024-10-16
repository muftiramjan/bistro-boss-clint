import FoodCard from "../Home/shared/FoodCard/FoodCard";
import PropTypes from 'prop-types';

const OrderTab = ({items}) => {
    return (
        <div className="grid lg:grid-cols-3 gap-3">
        {
             items.map( item => <FoodCard
             key={item._id}
             item={item}
             ></FoodCard>)
         }
        </div>
    );
};
OrderTab.propTypes = {
    items:PropTypes.object
}
export default OrderTab;