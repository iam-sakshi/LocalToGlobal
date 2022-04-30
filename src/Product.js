import React, { useContext , useHistory, useEffect} from 'react'
import './Product.css';
import { ProductsContext } from './ProductContext'
import {auth} from './firebase';
import {CartContext} from './CartContext'
import {Sliderbar} from './Sliderbar'

export const Product = ({ user }) => {

  const { products } = useContext(ProductsContext);
  const { dispatch } = useContext(CartContext);

  return (
    <div >
            <Sliderbar user={user} />
            {products.length !== 0 && <h1>Products</h1>}
            <div className='product products-container'>
                {products.length === 0 && <div>slow internet...no products to display</div>}
                {products.map(product => (
                    <div  key={product.ProductID} className="product-card">
                      <div className='product-name'>
                            {product.ProductName}
                        </div>
                        <div className='product-img'>
                            <img src={product.ProductImg} alt="not found" />
                        </div>
                        <div className='product-price'> <b>Price</b>
                         Rs {product.ProductPrice}.00
                    </div><br></br>
                    <div className='product-descr'> <b>Description:</b>
                    {product.ProductDescr}
                      </div><br></br>
                    <div className='product-vendorno'> <b>Vendor PhoneNo.:</b>
                    {product.VendorNo}
                      </div><br></br>
                    <div className="product-rating"><b>Rating:</b>
                     {Array(product.ProductRate).fill().map((_, i) => (
                         <p>⭐</p>
                       ))}
                   </div>
                        <button className='cart' onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product })}><span>Add to Cart &nbsp;&nbsp;&nbsp;</span>
                        <i className="fa fa-shopping-basket" aria-hidden="true"></i></button>
                    </div>
                ))}
            </div>
    </div>
  );
}

export default Product;
