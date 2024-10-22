import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import UseAxiosPublic from "../../../Hoks/usehoks/UseAxiosPublic";
import SectionHide from "../../../components/SectionHide";
const image_hosting_kye =import.meta.env.VITE_API_HOSTING_KYE;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_kye}`

const updateItem = () => {
    const {name ,category,recipe,price}=useLoaderData();
   console.log(name,category,recipe,price);
    const { register, handleSubmit,reset } = useForm()
    const axiosPublic=UseAxiosPublic();
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
        category:data.category,
        price:parseFloat(data.price),
        recipe:data.recipe,
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
            title: `${data.name} is add successfully`,
            showConfirmButton: false,
            timer: 1500
          });
    }
}
console.log(res.data);
      
    }
    return (
        <div>
            <SectionHide heading='update item' subheading='update info'></SectionHide>

            <div >
                <form  onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Recipe name</span>
                        </div>
                        <input
                            type="text"
                            defaultValue={name}
                            placeholder="Recipe name"
                            {...register('name',{required:true})}
                            required
                            className="input input-bordered w-full " />
                    </label>
                    <div className="">
                        {/* category */}
                        <div className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">category</span>
                            </div>
                            <select defaultValue={category}{...register('category',{required:true})}
                                className="select select-bordered w-full ">
                                <option disabled value='default'>slide a category</option>
                                <option value="female">salad</option>
                                <option value="soup">soup</option>
                                <option value="pizza">pizza</option>
                                <option value="offered">offered</option>
                                <option value="dessert">dessert</option>

                            </select>

                        </div>
                        {/* price */}
                        <div className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">price</span>
                            </div>
                            <input
                                type="number"
                                defaultValue={price}
                                placeholder="price"
                                {...register('price')}
                                className="input input-bordered w-full " />

                        </div>

                    </div>
                    <div className="form-control">
                        <div className="label">
                            <span className="label-text">Recipe details</span>
                          
                        </div>
                        <textarea {...register('recipe',{required:true})} className="textarea textarea-bordered h-24" placeholder="Bio"
                        defaultValue={recipe}
                        ></textarea>
                        
                    </div>
                    <div>
                    <input  {...register('image')}type="file" className="file-input w-full max-w-xs" />
                    </div>
                    <button className="btn bg-black text-white">
                    Update menu item
                        
                    </button>
                </form>
            </div>
        </div>
    );
};

export default updateItem;