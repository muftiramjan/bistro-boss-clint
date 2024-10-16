import { useQuery } from "@tanstack/react-query";
import UseAxios from "../useAxos/UseAxios";
import UseAuth from "../user/UseAuth";


const Usecart = () => {
    const axiosSicoer= UseAxios();
    const {user} = UseAuth();
//    Tan stak qoyary
const {refetch, data:cart = []}=useQuery({
queryKey: ['cart',user?.email],
queryFn: async () => {
 const res =await axiosSicoer.get(`/carts?email=${user.email}`)
 return res.data;
}

})
return [cart,refetch];
};

export default Usecart;