import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContextProvider';
import './Shop.css'
import { Link } from 'react-router-dom';
function Product(props) {
    const {id, productName,price,productImage, description} = props.data;
    const {addToCart, cartItems} = useContext(ShopContext);
  return (
    <div className='product'>
    <div>
    <img src={productImage} height="220px" width="220px"/>
    <h3>{productName}</h3>
    <p>${price}</p>
    <button className='addToCartBttn' onClick={()=>addToCart(id)}>Add To Cart
     {cartItems[id] > 0 && <>({cartItems[id]})</>}
     </button>
  
    </div>
      
    </div>
  )
}

export default Product
