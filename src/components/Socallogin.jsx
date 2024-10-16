import { FaGoogle } from "react-icons/fa";
import UseAuth from "../Hoks/usehoks/user/UseAuth";
import { useNavigate } from "react-router-dom";
import UseAxiosPublik from "../Hoks/usehoks/UseAxiosPublik";


const Socallogin = () => {
    const {googlelogine}=UseAuth();
    const axiosusepublic=UseAxiosPublik();
    const navigaite =useNavigate();
    const handelgooglogin=() => {
        googlelogine()
        .then(result => {
            console.log(result.user);
            const userrinfo={
                email:result.user?.email,
                name:result.user?.displayName
            }
            axiosusepublic.post('/users',userrinfo)
            .then(res => {
                console.log(res.data);
            })
            navigaite('/')
        })
    }
    return (
        <div className="p-8">
              <div className="divider"></div>
            <button onClick={handelgooglogin} className="btn btn-accent"><FaGoogle className="mr-4"></FaGoogle>google</button>
        </div>
    );
};

export default Socallogin;