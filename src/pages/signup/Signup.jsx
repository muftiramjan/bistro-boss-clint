import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { Authcontext } from "../authprovaider/Authprovaider";
import UseAxiosPublik from "../../Hoks/usehoks/UseAxiosPublik";
import Socallogin from "../../components/Socallogin";

const Signup = () => {
    const axiosPublic=UseAxiosPublik();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { creatUser, updetuserProfile } = useContext(Authcontext);
    const navigaite= useNavigate();

    const onSubmit = (data) => {
        creatUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            updetuserProfile(data.name, data.photoURL)
            .then(() => {
                const userinfo= {
                    name:data.name,
                    email:data.email
                }
             axiosPublic.post('/users',userinfo)
             .then( res => {
                if(res.data.insertedId){
                    reset();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your account has been created",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigaite('/')
                }
             })

                
            })
        })
   
    };

    return (
       <>
       <Helmet>
           <title>Signup</title>
       </Helmet>
       <div className="hero min-h-screen bg-base-200">
           <div className="hero-content flex-col lg:flex-row-reverse">
               <div className="md:w-1/2 text-center lg:text-left">
                   <h1 className="text-5xl font-bold">Sign Up</h1>
                   <p className="py-6">
                       Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                   </p>
               </div>
               <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                   <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                       <div className="form-control">
                           <label className="label">
                               <span className="label-text">Name</span>
                           </label>
                           <input type="text" name="name" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
                           {errors.name && <span className="text-red-800">This field is required</span>}
                       </div>
                       <div className="form-control">
                           <label className="label">
                               <span className="label-text">Photo URL</span>
                           </label>
                           <input type="text" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                           {errors.photoURL && <span className="text-red-800">This field is required</span>}
                       </div>
                       <div className="form-control">
                           <label className="label">
                               <span className="label-text">Email</span>
                           </label>
                           <input type="email" name="email" {...register("email", { required: true })} placeholder="Email" className="input input-bordered" />
                           {errors.email && <span className="text-red-800">This field is required</span>}
                       </div>
                       <div className="form-control">
                           <label className="label">
                               <span className="label-text">Password</span>
                           </label>
                           <input type="password" name="password" {...register("password", { required: true, minLength: 6, maxLength: 20 })} placeholder="Password" className="input input-bordered" />
                           {errors.password?.type === "required" && <p role="alert">Password is required</p>}
                           {errors.password?.type === "minLength" && <p role="alert">Password must be at least 6 characters</p>}
                           {errors.password?.type === "maxLength" && <p role="alert">Password must be less than 20 characters</p>}
                           <label className="label">
                               <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                           </label>
                       </div>
                       <div className="form-control mt-6">
                           <input className="btn btn-primary" type="submit" value="Sign Up" />
                       </div>
                   </form>
                   <p className='text-orange-300 p-3'>
                       <small>Already registered? <Link to='/login'>Go to log in</Link></small>
                   </p>

                   <Socallogin></Socallogin>
               </div>
           </div>
       </div>
       </>
    );
};

export default Signup;
