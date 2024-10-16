import PropTypes from 'prop-types';
import UseAuth from '../../../../Hoks/usehoks/user/UseAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import UseAxios from '../../../../Hoks/usehoks/useAxos/UseAxios';
import Usecart from '../../../../Hoks/usehoks/usecart/Usecart';

const FoodCard = ({item}) => {
    const {name,recipe,image,price,_id}=item;
    const {user} =UseAuth();
    const navigate= useNavigate();
    const location =useLocation();
    const axiosSicoer=UseAxios();
    const [,refetch]=Usecart();

    const handeleaddFood= () => {
        if(user && user.email){
           
            const meuid={
                menuitems:_id,
                email:user.email,
                name,image,price
            }
            axiosSicoer.post('/carts',meuid)
            .then( res => {
                console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your item is saved in databage",
                        showConfirmButton: false,
                        timer: 1500
                      });
                      refetch();
                }
            })
            
            // 
        }
        else{
            Swal.fire({
                title: "you ar not login",
                text: "pleass add tha cart in login",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login"
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login',{ state:{from:location}})
                }
              });
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
                <h2 className="card-title bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-3">{price}</h2>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button
                    onClick={handeleaddFood}
                    className="btn btn-outline border-0 border-b-4 border-orange-400">add to cart</button>
                </div>
            </div>
        </div>
    );
};
FoodCard.propTypes = {
    item:PropTypes.object
}
export default FoodCard;