import React,{useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import './Sliderbar.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { auth } from "./firebase";
import { ShoppingCart } from '@material-ui/icons';
import Checkout from './Checkout';
import { useHistory } from 'react-router-dom';
import { CartContext } from './CartContext';
import { ProductsContext} from './ProductContext';
import {Contact} from './Contact';
import CovidDash from './CovidDash';
import Create from './Create';
import Prevention from './Prevention';
import vaccination from './vaccination';
import Ex from './Ex';
import sym from './sym';
import Home from './Home';
import Intropage from './Intropage';


export const Sliderbar = ({ user }) => {


  const history = useHistory();
  const { totalQty } = useContext(CartContext);
  const { products } = useContext(ProductsContext);
  const { dispatch } = useContext(CartContext);
  const [searchTerm, setSearchTerm]= useState('')

  const handleLogout = () => {
      auth.signOut().then(() => {
          history.push('/Signup');
      })
  }

        return(
        <div>         
<div className="header">
  <p>LOCAL TO GLOBAL</p>
<nav>
        <input type="checkbox" id="openSidebarMenu"/>
          <label for="openSidebarMenu" class="sidebarIconToggle">
              <div class="spinner top"></div>
              <div class="spinner middle"></div>
              <div class="spinner bottom"></div>
          </label>
     <div id="sidebarMenu">
     <ul class="menu">    
     <Link to="/"><li>Welcone</li></Link>          
      <Link to="/Home"><li>HOME</li></Link>
      <Link to="/Product"><li>Get Started</li></Link>
      <Link to="/SigninSignup"><li>Signup/Login</li></Link>                
      <Link to="/Contact"><li>Contact Us</li></Link>
      <Link to="/Prevention"><li>Precautions</li></Link>
      <Link to="/Ex"><li>Dashbord</li></Link>                
      <Link to="/Create"><li>Create Message</li></Link>
      <Link to="/vaccination"><li>Vaccination</li></Link>
      <Link to="/sym"><li>Symptoms</li></Link>
      <Link to="/CovidDash"><li>Security Help</li></Link>         
    </ul>
  </div>
</nav>  
<div className="header_search">
<input type="text" className="header_searchIn" placeholder="Search" onChange={event => {setSearchTerm(event.target.value)}}/><SearchIcon className="header_searchIcon" />
</div><br/>
{products.filter((product)=>{
  if(searchTerm == ""){
    return
  }else if(product.ProductName.toLowerCase().includes(searchTerm.toLowerCase())){
   return {product}
}}).map((product)=>{
 return(  
   <div className="srch">
  <div  key={product.ProductID} className="product product-card">
    <div className='product-name'>
          {product.ProductName}
      </div>
      <div className='product-img'>
          <img src={product.ProductImg} alt="not found" />
      </div>
      <div className='product-price'> Price:
          Rs {product.ProductPrice}.00
  </div>
  <div className="product-rating">Rating:
   {Array(product.ProductRate).fill().map((_, i) => (
       <h6>⭐</h6>
     ))}
 </div>
      <button className='cart' onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product })}><span>Add to Cart &nbsp;&nbsp;&nbsp;</span>
      <i className="fa fa-shopping-basket" aria-hidden="true"></i></button>
  </div>
  </div>
)})}
{!user && <div className='header_nav'>
<Link to='/Product'>
          <div className="header__option">
            <span className="header_op">Explore </span>
            <span className="header_op">Local</span>
          </div>
        </Link>
  <div className="header_op">
    <Link to="/Product">
    <span className="header_op2">BUY NOW</span>
 </Link>
  </div>

<div className="header_op">
  
<Link to="/Updatepr">
  <span className="header_op2">SELL NOW</span>
  </Link>
</div>
<Link to="/Checkout">
  <div className="header_opBasket">
    <ShoppingBasketIcon />
    <span className="header_op2 header_basketCount">{totalQty}
    </span>
</div>
</Link>
</div> }
{user && <div className='header_nav'>
 <Link to='/SigninSignup'>
          <div className="header__option">
            <span className="header_op">welcome</span>
            <span className="header_op">{user}</span>
          </div>
        </Link>
  <div className="header_op">
    <Link to="/Product">
    <span className="header_op2">BUY NOW</span>
 </Link>
  </div>

<div className="header_op">
  
<Link to="/Updatepr">
  <span className="header_op2">SELL NOW</span>
  </Link>
</div>
<Link to="/Checkout">
  <div className="header_opBasket">
    <ShoppingBasketIcon />
    <span className="header_op2 header_basketCount">{totalQty}
    </span>
</div>
</Link>
    <button className='btn' onClick={handleLogout}>Logout</button>
        </div>}
</div>
  </div>
      )
  }