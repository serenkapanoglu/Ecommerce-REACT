import React,{useEffect, useState} from "react";
import { PRODUCTS } from "../../products";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './CartDetail.css'
import { ArrowLeft } from "phosphor-react";
const CartDetail = () => {
    const {cartId} = useParams();
    const [cartDetails, setCartDetails] = useState(null);
    let navigate = useNavigate();

  useEffect(() => {
    const fetchCartDetails = () => {
        const cartItem = PRODUCTS.find(product => product.id === parseInt(cartId));
        //console.log(cartItem);
        setCartDetails(cartItem);
        
    };
    fetchCartDetails();
  },[cartId]);


  return(
    <div>
        
        {cartDetails ? (
            <div >
                <h1>{cartDetails.productName}</h1>
                <img width="300px" height="300px"src={cartDetails.productImage} alt={cartDetails.productName} />
                
                <p><b>${cartDetails.price}</b></p>
                <p className="details">{cartDetails.description}</p>
 
  
    <button className='goBack' onClick={() => navigate("/")}> 
    <ArrowLeft  style={{marginRight:'15px'}}/>
    Go Back</button>
            </div>
            
        ) : (
            <p>Loading cart details..</p>
        )}
    </div>
  )
}

export default CartDetail;