import { Navigate, useLocation } from "react-router-dom";
import Useadmin from "../../Hoks/usehoks/useadmin/Useadmin";
import UseAuth from "../../Hoks/usehoks/user/UseAuth";
import PropTypes from 'prop-types';

const AdminRout = ({children}) => {
    const {user,lodding}=UseAuth();
    const [isAdmin,isAdminLoding]=Useadmin();
    const location = useLocation();

    if(lodding || isAdminLoding){
        return <progress className="progress w-56"></progress>
    }
    if(user && isAdmin){
        return children
    }
    return <Navigate to='/' state={{from: location}} replace></Navigate>
      
};
AdminRout.propTypes = {
    children: PropTypes.object
  };
export default AdminRout;