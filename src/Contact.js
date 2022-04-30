import emailjs from "emailjs-com";
import React from 'react';
import './error.css';
import { Sliderbar } from "./Sliderbar";


export const Contact= () => {
    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('gmail', 'template_kxtkz9f', e.target, 'user_2Yq9LeBFhfDIBRMKjDjR9')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return(
        <div className="err">
            <Sliderbar/>
            <img src="asserts/Contactus-removebg-preview.png" className="Cus"/>
            <div className="cer Cer">
            <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                        <textarea className="form-control" id="" cols="53" rows="6" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Contact;