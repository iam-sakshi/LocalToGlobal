import React,{Component} from 'react';


class Footer extends React.Component{
  render()
  {
    return(
      <div>
        <div className="main-content">
          <div className="left box">
             <h2>Local to Global</h2>
             <div className="content">
             <img src="asserts/logo.PNG"/>
              </div>
          </div>
       <div className="center box">
         <h2>Address</h2>
           <div className="content">
           <div className="place">
           <span className="fas fa-map-marker-alt"></span>
           <span className="text">kanpur</span>
           </div>
           <div className="phone">
           <span className="fas fa-phone-alt"></span>
            <span className="text">+91756999999</span>
           </div>
        <div className="email">
          <span className="fas fa-envelope"></span>
          <span className="text">vocalforlocal.email@gmail.com</span>
        </div>
</div>
</div>
<div className="right box">
      <h2>Contact us</h2>
<div className="content">
<div className="social">
                      <a href="#"><span className="fab fa-facebook-f"></span></a>
                      <a href="#"><span className="fab fa-twitter"></span></a>
                      <a href="#"><span className="fab fa-instagram"></span></a>
                      <a href="#"><span className="fab fa-youtube"></span></a>
                    </div>
<div className="btn">Contact Us</div>
</div>
</div>
</div>
</div>
    )
  }
}
 export default Footer