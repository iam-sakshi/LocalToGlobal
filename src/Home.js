  import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { auth } from './firebase'
import {Sliderbar} from './Sliderbar';

export const Home = ({ user }) => {

  const history = useHistory();
    return(
            <div>
            <Sliderbar user={user} />
            <div className="container">
            <img className="abs_img" src="asserts/online-removebg-preview.png"/>
    <div className="dots">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    
    <div className="content_wrapper">
      <h2><span className="text_1">   VOCAL for LOCAL !!</span></h2>
      <br/><br/>
      <h2>You can't buy happiness , <br/>but you can buy local 
        <br/> and that's kind of same!</h2>
      <div className="btn_group">
        <div className="btn active">start Shopping</div>
        <div className="btn">Start Business</div>
      </div>
    </div>
  </div>
  <center>
  <h1> Explore  the  market..</h1>
  </center>
  <div id="Web_1920__9">
    <div className="conr">
      <div className="bx">
        <div className="imgbx">
          <img src="asserts/AdobeStock_89272530_Preview.jpeg"/>
          </div>
          <div class="con">
            <div>
              <h2> Jutti</h2>
              <p>The jutti or Punjabi Jutti is a type of footwear common in North India and neighboring regions. 
                They are traditionally made up of leather and with extensive embroidery.
              </p>
            </div>
          </div>
      </div>
    </div>
   <div className="conr">
   <div className="bx">
    <div className="imgbx">
      <img src="asserts/AdobeStock_242249621_Preview.jpeg"/>
      </div>
      <div class="con">
        <div>
          <h2>phulkari dupatta</h2>
          <p>
          A plain white salwar and kurta would be a perfect match with the red phulkari dupatta. 
          This combination is the most popular and elegant of the lot. 
          </p>
        </div>
      </div>
</div>
</div>
<div className="conr">
<div className="bx">
  <div className="imgbx">
    <img src="asserts/AdobeStock_252554846_Preview.jpeg"/>
    </div>
    <div class="con">
      <div>
        <h2> wholesale crockery market in jaipur</h2>
        <p>
        A large number of wholesalers stock original bone crockery sets. You will get several colour options and sizes as well.
        </p>
      </div>
    </div>
</div>
</div>
</div>
<div id="Web_1920__9">
  <div className="conr1">
<div class="bx">
  <div className="imgbx">
    <img src="asserts/AdobeStock_300104079_Preview.jpeg"/>
    </div>
    <div class="con">
      <div>
        <h2> Imagecmhvjv,hvk</h2>
        <p>
          zhfgxckthygvukgjytfvgkvjckyfjcgkyfjtfktfjtcfjtfmtfjtgvly
        </p>
      </div>
    </div>
</div>
</div>
<div className="conr1">
<div class="bx">
  <div className="imgbx">
    <img src="asserts/AdobeStock_360228684_Preview.jpeg"/>
    </div>
    <div class="con">
      <div>
        <h2> Imagecmhvjv,hvk</h2>
        <p>
          zhfgxckthygvukgjytfvgkvjckyfjcgkyfjtfktfjtcfjtfmtfjtgvly
        </p>
      </div>
    </div>
</div>
</div>
<div className="conr1">
<div className="bx">
  <div className="imgbx">
      <img src="asserts/AdobeStock_395324608_Preview.jpeg"/>
    </div>
    <div class="con">
      <div>
        <h2> Imagecmhvjv,hvk</h2>
        <p>
          zhfgxckthygvukgjytfvgkvjckyfjcgkyfjtfktfjtcfjtfmtfjtgvly
        </p>
      </div>
    </div>
</div>
</div>
</div>
<div className="abus">
    <h2>
    ABOUT US
</h2>
</div>
<div className="ab_con">
 <div className="aboutus">
   <img className="ab_img" src="asserts/selling-removebg-preview.png"/>
   <p>
      Welcome to Vocal for Local Store, your number one source for all local things and product,<br/> ie: shoes, bags, 
    clothes, toys, and many more. We're dedicated to give you the very best of product,<br/> with a focus on three 
    characteristics, that is: dependability, customer service and uniqueness.<br/> Founded in 2020 by Sakshi Arora,
    Vocal for Local store . We now serve customers all over India,<br/> and are thrilled to be a part of the quirky wing 
    of the online shopping site  industry .<br/>Here you can also put your product and sell them online , this way 
    will let your product <br/>reach all over India and the payment mode is also very safe and secure. 
    <br/>We hope you enjoy our products as much as we enjoy offering them to you. 
    <br/>Thank you ,for giving us the opportunity to serve you with our product.<br/>
    If you have any questions or comments, please don't hesitate to contact us.
    <br/>Always at your service !    
   </p>
   </div>
    </div>
  
</div>
        )
    }
    export default Home;