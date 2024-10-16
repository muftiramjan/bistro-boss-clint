import { FaEdit, FaTrashAlt, } from "react-icons/fa";
import UseMenu from "../../../Hoks/usehoks/UseMenu";
import Sectionhedin from "../../../components/Sectionhedin";
import Swal from "sweetalert2";
import UseAxios from "../../../Hoks/usehoks/useAxos/UseAxios";
import { Link } from "react-router-dom";


const Manageitems = () => {
    const [menus, refetch] = UseMenu();
    const axiosSicoer = UseAxios();

    const handeldeleteitems = item => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSicoer.delete(`/menu/${item._id}`)

                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.name} deleed saccesfuly`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

            }
        });
    }
    return (
        <div>
            <Sectionhedin heding='manage all items' sabheding='huryy up'></Sectionhedin>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>image</th>
                                <th>item name</th>
                                <th>price </th>
                                <th>update</th>
                                <th>delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menus.map((item, index) => <tr key={item._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>{item.price}</td>
                                    <td>
                                        <Link to={`/dashbort/updeteItem/${item._id}`}>
                                            <button
                                                className="btn btn-ghost btn-sm bg-orange-500  ">
                                                <FaEdit className="text-red-600"></FaEdit>
                                            </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handeldeleteitems(item)}
                                            className="btn btn-ghost btn-lg"><FaTrashAlt className="text-red-600"></FaTrashAlt></button>
                                    </td>
                                </tr>
                                )
                            }


                        </tbody>


                    </table>
                </div>
            </div>
        </div>

    );
};

export default Manageitems;