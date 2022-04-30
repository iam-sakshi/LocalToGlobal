 import './error.css'; 
import React from 'react';
import { Link } from 'react-router-dom'

export const NotFound = () => {
    return (
        <div className="err">
        <div class="cer">
          <img src="asserts/404 error.png" className="error"/>
         </div>
         <div className="cer">
          <h2>404</h2><br/>
          <h1>Page not found.</h1>
        
          <p>We’re sorry but it appears that we can’t find the page you were looking for. Usually this occurs because of a page that previously existed was removed or you’ve mistyped the address.</p>
        
          <span class="go-back btn"><Link to="/">Go back</Link></span>
        </div>
        </div>
    )
}