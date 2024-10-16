import { useForm } from "react-hook-form";
import Sectionhedin from "../../components/Sectionhedin";
import { FaUtensils } from "react-icons/fa";
import UseAxiosPublik from "../../Hoks/usehoks/UseAxiosPublik";
import UseAxios from "../../Hoks/usehoks/useAxos/UseAxios";
import Swal from "sweetalert2";

const image_hosting_kye =import.meta.env.VITE_API_HOSTING_KYE;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_kye}`


const ItemsAdd = () => {
    const { register, handleSubmit,reset } = useForm()
    const axiosPublic=UseAxiosPublik();
    const axiosSicoer=UseAxios();
    const onSubmit = async (data) => {
        // image uplod imgbb
        const imageFile= {image: data.image[0]}
const res =await axiosPublic.post(image_hosting_api,imageFile,{
    headers:{
        'Content-Type': 'multipart/form-data'
    }
})
if(res.data.success){
    const menuitem={
        name:data.name,
        cetegory:data.cetegory,
        price:parseFloat(data.price),
        recepi:data.recepi,
        image:res.data.display_url,
    }
    const menuRes= await axiosSicoer.post('/menu',menuitem)
    console.log(menuRes.data);
    if(menuRes.data.insertedId){
        reset();
        // swo popup
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${data.name} is adeded saccesfuly`,
            showConfirmButton: false,
            timer: 1500
          });
    }
}
console.log(res.data);
      
    }
    return (
        <div >
            <Sectionhedin heding='add an item' sabheding='whats new?'></Sectionhedin>
            <div >
                <form  onSubmit={handleSubmit(onSubmit)}>
                    <label>First Name</label>
                    <input {...register("name")} />
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Recipe name</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Recipe name"
                            {...register('name',{required:true})}
                            required
                            className="input input-bordered w-full " />
                    </label>
                    <div className="">
                        {/* cetegory */}
                        <input {...register("cetegory")} />
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">cetegory</span>
                            </div>
                            <select defaultValue='default'{...register('cetegory',{required:true})}
                                className="select select-bordered w-full ">
                                <option disabled value='default'>selet a cetegory</option>
                                <option value="female">salad</option>
                                <option value="soup">soup</option>
                                <option value="pizza">pizza</option>
                                <option value="offered">offered</option>
                                <option value="dessert">dessert</option>

                            </select>

                        </label>
                        {/* price */}

                        <input {...register("price")} />
                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">price</span>
                            </div>
                            <input
                                type="numbar"
                                placeholder="price"
                                {...register('price')}
                                className="input input-bordered w-full " />

                        </label>

                    </div>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">recepi detals</span>
                          
                        </div>
                        <textarea {...register('recepi',{required:true})} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                        
                    </label>
                    <div>
                    <input  {...register('image')}type="file" className="file-input w-full max-w-xs" />
                    </div>
                    <button className="btn bg-black text-white">
                        add items
                        <FaUtensils className="ml-2 p-2"></FaUtensils>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ItemsAdd;