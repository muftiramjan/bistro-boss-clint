import { useContext } from "react";
import { Authcontext } from "../../../pages/authprovaider/Authprovaider";


const UseAuth = () => {
   const Auth =useContext(Authcontext)
   return Auth
    
};

export default UseAuth;