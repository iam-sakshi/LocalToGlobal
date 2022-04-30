import React from 'react'
import { Select, MenuItem, Box, Typography } from '@material-ui/core';
import styles from './CovidDash.css';
import {Sliderbar} from './Sliderbar';

export const CovidDash= () => {
    return(
    <div>
         <Sliderbar />
         <div className="hr1">
         <div className="hr">
                <div className="one">Security and Safety</div>
                <div>Precautions</div>
                <div>Dashbord</div>
                 <div>Create Message</div>
                 <div>Vaccination</div>
         </div>
         </div>
         <div>
             <h1>SAFETY FROM FRAUD BUYERS</h1> 
         It is important to exercise caution and follow general safety guidelines on any internet platform as you would in the offline/physical world.
So, here are tips for spotting buyers who are possible fraud: 
<ul>
<li><b>UPI Fraud:</b> Buyer deceives to have sent you money, but the amount is deducted from your account via Google-Pe, Phone-Pe, etc. </li>
<li><b>Asking for Advance Product:</b> The buyer demands you send the item before they pay for it or provides fake payment proofs</li>
<li><b>Fake payment proofs:</b> The buyer will ask for item without verifying it and deceive by sending a fake payment receipt, message etc.</li>
<li><b>Insist on non-cash methods:</b> Typically, the buyer insists on using a cheque. Note cheques could get bounced and banks bear no responsibility</li>
<li><b>Seeking personal information:</b> The Buyer asks for personal information like your ID, bank details, your email address, your debit/credit card number </li>
            </ul> </div>
             <div>
                 <h1>SAFETY FROM FRAUD SELLERS</h1>
                 <ul>
            <li><b>Meeting face-to-face:</b> Always insist on meeting with the buyer personally and exchanging your item for money. Use a safe location to meet.</li>
<li><b>Chat Conversation:</b> For a safer transaction, try using the OLX chat option. Avoid other channels like WhatsApp/Skype/Messengers etc.</li>
<li><b>Avoid partial payments:</b> Take the full payment decided mutually at the time of the delivering item to buyer.  </li>    
<li><b>Payment Method:</b> Watch out for fake currency and payment link scams. Banks will not honour fake currency/money order and will hold you responsible for it.</li>
<li><b>Buyer's Personal Information:</b> Verify the buyer's details if there is a bulk order request such as photo ID and proof of address. </li>
<li><b>Realistic product description:</b> Ensure your item meets the features you list in your ad to avoid misunderstanding with the buyer. </li>
<li><b>Personal information:</b> Don't share any private details or financial information except the one necessary. We advise that sensitive information such as (IMEI no.) or (PCBA no.), should not be disclosed to any user.</li>
                 </ul>
                 </div>
     </div>
    )
}

export default CovidDash;