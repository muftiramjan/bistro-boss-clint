// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import UseAxiosPublik from "./UseAxiosPublik";


const UseMenu = () => {
    // const [menus, setmenu] = useState([]);
    // const [loddin, setloddin] = useState(true);
    // useEffect(() => {
    //     fetch('http://localhost:5000/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //             setmenu(data)
    //             setloddin(false)
    //         })
    // }, [])
    const  axiosPublic= UseAxiosPublik();
const {data : menus=[],isPending: loddin,refetch} =useQuery({
    queryKey: ['menu'],
    queryFn: async() => {
        const res =await axiosPublic.get('/menu')
        return res.data;
    }
});



    return [menus, loddin,refetch]
};

export default UseMenu;