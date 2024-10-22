import PropTypes from 'prop-types';

const Menuitems = ({ item }) => {
    const { name, recipe, image, price } = item;
    return (
        <div className='flex space-x-4'>
            <img style={{ borderRadius: '0 200px 200px 200px' }} className='w-24' src={image} alt={name} />
            <div>
                <h2>{name}--------</h2>
                <p>{recipe}</p>
            </div>
            <p className='text-[#D99904]'>${price}</p>
        </div>
    );
};

Menuitems.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        recipe: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    }).isRequired
};

export default Menuitems;
