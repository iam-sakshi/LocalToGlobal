import React, { useContext, useEffect } from 'react';
import { CartContext } from './CartContext';
import { Icon } from 'react-icons-kit';
import { ic_add } from 'react-icons-kit/md/ic_add';
import { ic_remove } from 'react-icons-kit/md/ic_remove';
import { iosTrashOutline } from 'react-icons-kit/ionicons/iosTrashOutline';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { auth } from './firebase';
import "./Checkout.css";
import {Sliderbar} from "./Sliderbar";

 export const Checkout = ({ user }) => {

const { shoppingCart, dispatch, totalPrice, totalQty } = useContext(CartContext);

const history = useHistory();

useEffect(() => {
    auth.onAuthStateChanged(user => {
        if (!user) {
            history.push('/Signup');
        }
    })
})

return (
    <div>
        <Sliderbar user={user} />
      <img src="poster.PNG" className="cheackout_img"/>
            {shoppingCart.length !== 0 && <h1>Cart</h1>}
            <div className="cart-container">
                {
                    shoppingCart.length === 0 && <>
                        <div>no items in your cart or slow internet causing trouble (Refresh the page) or you are not logged in</div>
                        <div><Link to="/Home">Return to Home page</Link></div>
                    </>
                        }
                        
                {shoppingCart && shoppingCart.map(cart => (
                    
                    <div className='cart-card' key={cart.ProductID}>

                        <div className='cart-img'>
                            <img src={cart.ProductImg} alt="not found" />
                        </div>

                        <div className='cart-name'>{cart.ProductName}</div>

                        <div className='cart-price-orignal'>Rs {cart.ProductPrice}.00</div>

                        <div className='inc' onClick={() => dispatch({ type: 'INC', id: cart.ProductID, cart })}>
                            <Icon icon={ic_add} size={24} />
                        </div>

                        <div className='quantity'>{cart.qty}</div>

                        <div className='dec' onClick={() => dispatch({ type: 'DEC', id: cart.ProductID, cart })}>
                            <Icon icon={ic_remove} size={24} />
                        </div>

                        <div className='cart-price'>
                            Rs {cart.TotalProductPrice}.00
                        </div>

                        <button className='delete-btn' onClick={() => dispatch({ type: 'DELETE', id: cart.ProductID, cart })}>
                            <Icon icon={iosTrashOutline} size={24} />
                        </button>
                    </div>
                ))
                }
                {shoppingCart.length > 0 && <div className='cart-summary'>
                    <div className='cart-summary-heading'>
                        Cart-Summary
                    </div>
                    <div className='cart-summary-price'>
                        <span>Total Price</span>
                        <span>{totalPrice}</span>
                    </div>
                    <div className='cart-summary-price'>
                        <span>Total Qty</span>
                        <span>{totalQty}</span>
                    </div>
                    <Link to='./Cashout' className='cashout-link'>
                        <button className='btn'>
                            Pay Now
                    </button>
                    </Link>
                </div>}
            </div>
        </div>
)
}
export default Checkout;