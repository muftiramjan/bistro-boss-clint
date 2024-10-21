import PropTypes from 'prop-types';


const SectionHide = ({ heading, subheading }) => {
    
    return (
        <div className='w-3/12 mx-auto text-center mb-4'>
            <p className='text-[#D99904] mb-2'>{subheading}</p>
            <p className='text-2xl uppercase border-y-4 p-3'>{heading}</p>
        </div>
    );
};
SectionHide.propTypes = {
    heading: PropTypes.object
};
SectionHide.propTypes = {
    subheading: PropTypes.object
};
export default SectionHide;