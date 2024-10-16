import { useContext } from "react";
import { Authcontext } from "../authprovaider/Authprovaider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';



const PraivetRout = ({children}) => {
    const {user,lodding} =useContext(Authcontext);
    const location = useLocation();

    if(lodding){
        return <progress className="progress w-56"></progress>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
      
};
PraivetRout.propTypes = {
    children:PropTypes.object
  };
export default PraivetRout;