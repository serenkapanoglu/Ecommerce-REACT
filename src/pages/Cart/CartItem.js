import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContextProvider';
import './Cart.css';
function CartItem(props) {
    const {id, productName,price,productImage} = props.data;
    const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext);
    useContext(ShopContext);
  return (
    <div className='cartItem'>
      Selam
      {" "}
      <img src={productImage} height="150px" width="150px"/>
      <div className='description'>
    <p><b>{productName}</b></p>
    <p>${price}</p>
    <div className='countHandler'>
        <button className="btn3" onClick={() => removeFromCart(id)}> Remove </button>
        <input className="input" value={cartItems[id]} onChange={(e)=>updateCartItemCount(Number(e.target.value),id) }/>
        <button className="btn3" onClick={() =>addToCart(id)}> Add </button>
        
    </div>
      </div>
    </div>
  )
}

export default CartItem