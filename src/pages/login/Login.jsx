import { useContext, useEffect,  useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Authcontext } from '../authprovaider/Authprovaider';
import { Link, useLocation, useNavigate, } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import loginn from "../../assets/login/authentication2 1.png"
import Swal from 'sweetalert2'
import Socallogin from '../../components/Socallogin';
const Login = () => {
    const {login}=useContext(Authcontext)
   const navigate= useNavigate();
   const location=useLocation();
   const from = location.state?.from?.pathname || "/";
    const [disabled,setdisable]=useState(true);
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handelelogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        login(email,password)
        .then(result => {
            const user =result.user;
            console.log(user)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "user login successfuly",
                showConfirmButton: false,
                timer: 1500
              });
              navigate(from, { replace: true });
        })
    }

    const handelValitedcaptcha = (e) => {
        const user_captcha_value = e.target.value;
      if(validateCaptcha(user_captcha_value)){
        setdisable(false)
      }
      else{
        setdisable(true)
      }
    }
    
 
    return (
       <>
       <Helmet>
                <title>Login</title>
            </Helmet>
         
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className=" md:w-1/2 text-center lg:text-left">
                   <img src={loginn} alt="" />
                </div>
                <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                <h1 className="text-5xl font-bold p-10">Login now!</h1>
                    <form onSubmit={handelelogin} className="card-body">
                        <div className="form-control">
                            <label className="label">

                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input onBlur={handelValitedcaptcha}  type="text" name="captcha" placeholder="type tha capch" className="input input-bordered" />
                        
                        </div>
                        <div className="form-control mt-6">
                        <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
                        </div>
                        <Socallogin></Socallogin>
                    </form>
                    <p className='text-orange-300 p-10 text-center font-semibold'> <small >New here? <Link to='/signup'>Create a New Account</Link> </small></p>
                </div>
            </div>
        </div>
       </>
    );
};

export default Login;