import axios from "axios";
import { useNavigate } from "react-router-dom";
import UseAuth from "../user/UseAuth";

 
 const axiosSicoer = axios.create({
    baseURL: 'http://localhost:5000'
});


const UseAxios = () => {
    const navigate =useNavigate();
    const {loguot}=UseAuth();
    axiosSicoer.interceptors.request.use(function (config){
        const token = localStorage.getItem('acces-token')
        // console.log('reqousr',token);
        config.headers.authorization = `Bearer ${token}`
        return config;
    },
     function (error) {
        // Do something with request error
        return Promise.reject(error);
})
axiosSicoer.interceptors.response.use(function(response){
    return response
},async (error) => {
    const status =error.response.status;
    // console.log('ststus error',status);
    if(status === 401 || status ===403){
        // await loguot();
        // navigate('/login')
    }
})
return axiosSicoer
};

export default UseAxios;