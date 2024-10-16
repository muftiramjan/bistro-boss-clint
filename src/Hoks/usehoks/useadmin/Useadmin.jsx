import { useQuery } from "@tanstack/react-query";
import UseAuth from "../user/UseAuth";
import UseAxios from "../useAxos/UseAxios";


const Useadmin = () => {
   const {user} =UseAuth();
   const axiosSicoer=UseAxios();
   const {data: isAdmin,isPending: isAdminLoding} =useQuery({
    queryKey:[user?.email, 'isAdmin'],
    queryFn: async() => {
        const res =await axiosSicoer.get(`/users/admin/${user.email}`);
        // console.log(res.data);
        return res.data?.admin;
    }
   });
   return [isAdmin,isAdminLoding]
};

export default Useadmin;