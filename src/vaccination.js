import React from 'react'
import { Select, MenuItem, Box, Typography } from '@material-ui/core';
import styles from './vac.css';
import {Sliderbar} from './Sliderbar';

export const vaccination= () => {
    return(
    <div>
         <Sliderbar />
         <img src="asserts/vac.png" className="vac"/>
         <img src="asserts/vc-removebg-preview.png" className="vc"/>
          <ol>
              <div className="rght">
              <li><details ><summary>Where should I register for the vaccination?</summary>
Register on the Co-WIN Portal and schedule your vaccination appointment. https://www.cowin.gov.in/home</details></li>
<li><details ><summary>Where can I get the vaccine from?</summary>
Vaccines are available from Government and Private Health Facilities as notified, known as COVID Vaccination Centres (CVCs)</details></li>
<li><details ><summary>How do I pre-register myself online for an appointment for vaccination?</summary>
Online registration and appointment can be done through Co-WIN portal.

You will have to give some basic information about yourself and details of your photo identification card to get yourself registered online.

From one mobile phone number, one can register 4 people, however, each person will need their own photo identification document.

If Aadhar card is used as identification document, consent will be obtained and recorded.

Through the portal, you can find out the list of available CVCs and dates and time of available vaccination slots, to book an appointment as per your choice. You will need an OTP verification prior to registration and a confirmation slip/token will be generated after registration. You will also get a confirmatory sms later.

For all Private Hospitals, prior registration and appointment will be the only method of registration.

For Government hospitals, a proportion of slots will be available for online registration and appointment, the rest will be kept for on site registration and vaccination.

Appointments for any date for a Vaccination Center will be closed at 12:00 pm on the day prior to the date.</details></li>
<li><details ><summary>Can a person get the COVID-19 vaccine without registration with Health Department?</summary>
No, the registration of beneficiary is mandatory for vaccination for COVID-19 vaccine. Once registered, notification and information about the vaccine session date and time will be shared with the beneficiary.
 There will be a provision for walk-in to vaccination centres but they too would need to register on site before vaccination.</details></li>
 <li><details ><summary>What documents are required for registration of eligible beneficiary?</summary>
Any of the below mentioned ID with Photo may be produced at the time of registration:
Aadhaar Card
Driving License
Health Insurance Smart Card issued under the scheme of Ministry of Labour
Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA) Job Card
Official identity cards issued to MPs/MLAs/MLCs
PAN Card
Passbooks issued by Bank/Post Office
Passport
Pension Document
Service Identity Card issued to employees by Central/ State Govt./ Public Limited Companies
Voter ID
People with comorbidities will have to carry the certificate of comorbidities, in the format shared here by a registered medical practitioner.</details></li>
<li><details ><summary>Will a Photo ID be required at the time of registration?</summary>
The Photo ID produced at the time of registration must be produced and verified at the time of vaccination.</details></li>
<li><details ><summary>If a person is not able to produce Photo ID at the session site, whether s/he be vaccinated or not?</summary>
Photo ID is a must for both registration and verification of beneficiary at session site to ensure that the intended person is vaccinated.
</details></li>
<li><details> <summary>How will the beneficiary receive information about due date of vaccination?</summary>
Following online registration, beneficiary will receive SMS on their registered mobile number about the due date, place and time of vaccination.</details></li>
</div>
<div className="ltt">
<li><details ><summary>Will vaccinated beneficiaries receive information on the status of their vaccination after completion?</summary>
Yes. On getting due dose of COVID-19 vaccine, the beneficiary will receive SMS on their registered mobile number. After all doses of vaccine are administered, a QR code 
based certificate will also be sent to the registered mobile number of the beneficiary.</details></li>
<li><details ><summary>Will I get any certificate that I am vaccinated?</summary>
Yes, a provisional certificate would be provided after the first dose. On completion of second dose, when you receive the message for completion of schedule it would include a link to download digital
 certificate of vaccination for your perusal. This certificate can be then be saved in the digi-locker</details></li>
 <li><details ><summary>Both vaccines require cold chain temperature. How is the cold chain been maintained during storage and transportation of vaccine?</summary>
Both vaccines need to be stored and transported at +20 to +8⁰ Celsius. The cold chain for both vaccines is maintained through active and passive cold chain equipment 
available at approximately 29000 cold chain points across India</details></li>
<li><details ><summary>Out of the multiple vaccines available, how is one or more vaccine chosen for administration?</summary>
The safety and efficacy data from clinical trials of vaccine candidates are examined by Drug Regulator of our country before granting the license for the same. Hence, all the COVID-19 vaccines that receive license will have comparable safety and efficacy. However, it must be ensured that the entire schedule of vaccination is
 completed by only one type of vaccine as different COVID-19 vaccines are not interchangeable.</details></li>
 <li><details ><summary>Indian regulators have given authorization to Covaxin even before its Phase 3 trial results were out. How do we explain this?</summary>
We are passing through COVID-19 pandemic. COVID-19 has caused social disruption, economic downturn and significant number of deaths. To control this pandemic, the society as well as the system may have to take steps which may also be termed as drastic. Both pre-clinical and clinical data (complete data for Phase I and II, and partial data for Phase III) of Covaxin have been thoroughly scrutinized by the regulators. This data shows that the vaccine is safe and induces a robust antibody response. However, to what extent the vaccine will protect the recipients from getting the disease is not fully known yet. 
Therefore, the regulators have allowed its use in trial mode.</details></li>
<li><details ><summary>Will COVID-19 vaccine be given to everyone simultaneously?</summary>
Based on the potential availability of vaccines the Government of India has selected the priority groups who will be vaccinated on priority as they are at higher risk. The first group includes healthcare and frontline workers. The second group to receive COVID-19 vaccine was the persons over 60 years of age and persons between 45 and 59 years of age with comorbid conditions. From April 1st, 2021, People above the age of 45 years (born before 1st Jan, 1977) are eligible to get the COVID-19 vaccine. From May 1, 2021, 
all eligible citizens above the age of 18 years can get the COVID-19 vaccine.</details></li>
<li><details><summary>Is it important for me to receive the same vaccine during second dose?</summary>
As the vaccines available are not interchangeable, it is important to receive the second dose of same vaccine as the first one. The Co-WIN portal is also going 
to help to ensure that everyone receives the same vaccine</details></li>
<li><details close><summary>Does this vaccine provide herd immunity?</summary>
When an increasing number of people get vaccinated in the community, indirect protection through herd immunity develops. The percentage of people who need to be immune in order to achieve herd immunity varies with each disease. For example, its 95% for measles, however the proportion of the population 
that must be vaccinated against COVID-19 to begin inducing herd immunity is not known.</details></li>
</div>
          </ol>
    <img src="asserts/v2-removebg-preview.png" className="rgt"/>
        </div>
    )
}

export default vaccination;