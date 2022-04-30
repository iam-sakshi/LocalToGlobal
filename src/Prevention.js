import React from 'react'
import { Select, MenuItem, Box, Typography } from '@material-ui/core';
import styles from './CovidDash.css';
import {Sliderbar} from './Sliderbar';

export const Prevention= () => {
    return(
    <div className="pr">
         <Sliderbar />
  
         <img src="asserts/pev.png" className="pv"/>
        <h2>Prevention</h2>
        <p>Protect yourself and others around you by knowing the facts and taking appropriate precautions. Follow advice provided by your local health authority.
To prevent the spread of COVID-19:<br/><ol>
<li>Clean your hands often. Use soap and water, or an alcohol-based hand rub.</li>
<li>Maintain a safe distance from anyone who is coughing or sneezing.</li>
<li>Wear a mask when physical distancing is not possible.</li>
<li>Don’t touch your eyes, nose or mouth.</li>
<li>Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze.</li>
<li>Stay home if you feel unwell.</li>
<li>If you have a fever, cough and difficulty breathing, seek medical attention.
Calling in advance allows your healthcare provider to quickly direct you to the right health facility. This protects you, and prevents the spread of viruses and other infections.
</li></ol>
</p>
<img src="asserts/pre.png" className="ppv1"/>
<p>Maintain at least a 1-metre distance between yourself and others to reduce your risk of infection when they cough, sneeze or speak. Maintain an even greater distance between yourself and others when indoors. The further away, the better.
Make wearing a mask a normal part of being around other people. The appropriate use, storage and cleaning or disposal are essential to make masks as effective as possible.<br/>
Here are the basics of how to wear a mask:
<br/>
Clean your hands before you put your mask on, as well as before and after you take it off, and after you touch it at any time.<br/>
Make sure it covers both your nose, mouth and chin.<br/>
When you take off a mask, store it in a clean plastic bag, and every day either wash it if it’s a fabric mask, or dispose of a medical mask in a trash bin.<br/>
Don’t use masks with valves.</p>
    </div>
    )
}

export default Prevention;