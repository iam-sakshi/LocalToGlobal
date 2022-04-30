import './Intro.css'; 
import React from 'react';
import { Link } from 'react-router-dom'
import CovidDash  from './CovidDash';
import {Sliderbar} from './Sliderbar';

export const Intropage= () => {
    return (
      <div>
      <Sliderbar />
        <div className="bd">
        <div class="parallax img1">
  <div class="par"><p>Stopping the spreadstarts with you<br/>
Wear a mask.<br/>
Clean your hands.<br/>
Maintain safe distance.<br/>
Share your experience<br/>
Share important message <br/>
Any urgent Need!<br/>
Get vaccinated.
</p>
  <Link to="/Ex">
  <button type="button">Covid Information Dashboard</button>
  </Link>
  </div>
</div>
<div class="parallax img2">
  <div class="par"><p>the mindset of free India should be 'vocal for local' to achieve the goal of 'Aatmanirbhar Bharat' (self-reliant India).
</p>
<Link to="/Home">
  <button type="button"> Shop & Sell local Dashboard</button>
  </Link>
  </div>
</div>
</div>
</div>
)
}
export default Intropage;