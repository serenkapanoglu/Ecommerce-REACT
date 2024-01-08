import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContextProvider'
import { PRODUCTS } from '../../products';
import CartItem from './CartItem.js'
import './Cart.css';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, CreditCard } from 'phosphor-react';
import { FaShoppingCart,MdAttachMoney } from "react-icons/fa";

 
function Cart() {
  const { cartItems, getTotalCartAmount} = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  let navigate = useNavigate();
  return (
    
    <div className='cart'>
      
      <div>
        {PRODUCTS.map((product) =>{
          if(cartItems[product.id]!==0){ 
            return <CartItem data={product} />
          }
        })}

        {totalAmount > 0 ? (
        <div className='checkout'>
          <p style={{ fontSize: '20px' }}> Subtotal: <b style={{ fontSize: '20px' }}>${totalAmount}</b></p>
          <button className="btn2" onClick={() => navigate("/")}>Continue Shopping
          <FaShoppingCart style={{ marginLeft: '15px' }}/></button>
          <button className="btn2">Checkout
          <CreditCard style={{ marginLeft: '15px'}}/>
          </button>
        </div>
        ) : (
          <div className='empty-cart'>
            <img src='https://i.pinimg.com/736x/2e/ac/fa/2eacfa305d7715bdcd86bb4956209038.jpg' alt='Empty Cart Image' />
            <button className='button' onClick={() => navigate("/")}>Continue Shopping
            <FaShoppingCart style={{ marginLeft: '15px' }}/>
            </button>
          </div>
        )
}

      </div>
    </div>

 
  )
}

export default Cart
