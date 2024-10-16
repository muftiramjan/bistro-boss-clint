import { useQuery } from "@tanstack/react-query";
import UseAxios from "../../../Hoks/usehoks/useAxos/UseAxios";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
    const axiosSicoer = UseAxios();
    const { data: users = [],refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSicoer.get('/users');
            return res.data;

        }
    })
    const handelMakeAdmin= user => {
        axiosSicoer.patch(`users/admin/${user._id}`)
        .then(res => {
            console.log(res.data)
            if(res.data.modifiedCount >0 ){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name}is an user now`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
    const handeldelete = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSicoer.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div className="flex justify-evenly">
                <h1 className="text-4xl">all users</h1>
                <h1 className="text-4xl">Totle users: {users.length}</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Rool</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    { user.Rool === 'admin'? 'Admin' :
                                        <button
                                        onClick={() => handelMakeAdmin(user)}
                                        className="btn btn-ghost btn-lg bg-orange-500 font-medium text-3xl"><FaUsers className="text-red-600"></FaUsers></button>}
                                </td>
                                <td>
                                    <button
                                        onClick={() => handeldelete(user)}
                                        className="btn btn-ghost btn-lg"><FaTrashAlt className="text-red-600"></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;