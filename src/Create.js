import React, { useState } from 'react';
import './Create.css'
import {storage,db} from "./firebase";
import {Sliderbar} from './Sliderbar';

export const Create = ({user}) => {

    const [EName, setName] = useState('');
    const [EAddress, setAddress] = useState('');
    const [EPh, setPh] = useState(0);
    const [Eexp_img, setexp_img] = useState(null);
    const [Eexp, setexp] = useState('');
    const [error, setError] = useState('');

    const types = ['image/png', 'image/jpeg']; // image types

    const Eexp_imgHandler = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile && types.includes(selectedFile.type)) {
            setexp_img(selectedFile);
            setError('')
        }
        else {
            setexp_img(null);
            setError('Please select a valid image type (jpg or png)');
        }
    }

    // add product
    const addexp = (e) => {
        e.preventDefault();
        const uploadTask = storage.ref(`exp-images/${Eexp_img.name}`).put(Eexp_img);
        uploadTask.on('state_changed', snapshot => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(progress);
        }, err => setError(err.message)
            , () => {
                storage.ref('exp-images').child(Eexp_img.name).getDownloadURL().then(url => {
                    db.collection('exp').add({
                        Name: EName,
                        Address: EAddress,
                        Ph: Number(EPh),
                        exp: Eexp,
                        exp_img: url
                    }).then(() => {
                        setName('');
                        setAddress('');
                        setPh(0)
                        setexp('')
                        setexp_img('');
                        setError('');
                        document.getElementById('file').value = '';
                    }).catch(err => setError(err.message))
                })
            })
    }


     return (
         <div>
             <Sliderbar />
            <div className="up_con">            
            <img className="upimg" src="asserts/cr.png"/>
            <div>
            <h5>Upload Your Experience , any need<br/> or important message :</h5><br/>
            <form autoComplete="off" className='form-group' onSubmit={addexp}>
               <br/> <label htmlFor="product-name">Name</label><br/>
                <input type="text" className='form-control' required
                    onChange={(e) => setName(e.target.value)} value={EName} />
                <br />
                <label htmlFor="product-price">Address</label><br/>
                <input type="text" className='form-control' required
                    onChange={(e) => setAddress(e.target.value)} value={EAddress} />
                <br />
                <label >Phone Number</label><br/>
                <input type="text" className='form-control' required
                    onChange={(e) => setPh(e.target.value)} value={EPh} />
                <br />
                <label htmlFor="product-img"> Image</label><br/>
                <input type="file" className='form-control' id="file" required
                    onChange={ Eexp_imgHandler} />
                <br />
                <label>Experience</label><br/>
                <textarea className="form-control" id="" cols="52" rows="8" placeholder="Your message" name="message">
                <input type="text"  className='form-control' required
                    onChange={(e) => setexp(e.target.value)} value={Eexp} />
                    </textarea>
                <br /><br/>
                <button type="submit" className='btn btn-success btn-md mybtn'>ADD</button>
            </form>
            </div>
            {error && <span className='error-msg'>{error}</span>}
        </div>
        </div>
    )
}

export default Create;