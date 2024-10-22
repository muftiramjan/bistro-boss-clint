import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";

const UseMenu = () => {
    const axiosPublic = UseAxiosPublic();

    const { data: menus = [], isLoading, refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await axiosPublic.get('/menu');
            return res.data;
        }
    });

    return [menus, isLoading, refetch];
};

export default UseMenu;
