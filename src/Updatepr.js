import React, { useState } from 'react';
import './Updatepr.css'
import {storage,db} from "./firebase";
import {Sliderbar} from './Sliderbar';

export const Updatepr = ({user}) => {

    const [productName, setProductName] = useState('');
    const [productDescr, setProductDescr] = useState('');
    const [productPrice, setProductPrice] = useState(0);
    const [productRate, setProductRate] = useState(0);
    const [VendorNo , setVendorNo ] =useState('');
    const [productImg, setProductImg] = useState(null);
    const [error, setError] = useState('');

    const types = ['image/png', 'image/jpeg']; // image types

    const productImgHandler = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile && types.includes(selectedFile.type)) {
            setProductImg(selectedFile);
            setError('')
        }
        else {
            setProductImg(null);
            setError('Please select a valid image type (jpg or png)');
        }
    }

    // add product
    const addProduct = (e) => {
        e.preventDefault();
        const uploadTask = storage.ref(`product-images/${productImg.name}`).put(productImg);
        uploadTask.on('state_changed', snapshot => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(progress);
        }, err => setError(err.message)
            , () => {
                storage.ref('product-images').child(productImg.name).getDownloadURL().then(url => {
                    db.collection('Products').add({
                        ProductName: productName,
                        ProductDescr: productDescr,
                        ProductPrice: Number(productPrice),
                        ProductRate: Number(productRate),
                        VendorNo : VendorNo,
                        ProductImg: url
                    }).then(() => {
                        setProductName('');
                        setProductDescr('');
                        setProductPrice(0)
                        setProductRate(0)
                        setProductImg('');
                        setVendorNo('');
                        setError('');
                        document.getElementById('file').value = '';
                    }).catch(err => setError(err.message))
                })
            })
    }


     return (
         <div>
             <Sliderbar user={user} />
            <div className="up_con">            
            <img className="upimg" src="asserts/add_product-removebg-preview.png"/>
            <div>
            <h5>Upload Your Product Details:</h5><br/>
            <form autoComplete="off" className='form-group' onSubmit={addProduct}>
               <br/> <label htmlFor="product-name">Product Name</label><br/>
                <input type="text" className='form-control' required
                    onChange={(e) => setProductName(e.target.value)} value={productName} />
                <br />
                <label htmlFor="product-price">Product Price</label><br/>
                <input type="number" className='form-control' required
                    onChange={(e) => setProductPrice(e.target.value)} value={productPrice} />
                <br />
                <label htmlFor="product-rate">Product Ratting(0-5)</label><br/>
                <input type="number" className='form-control' required
                    onChange={(e) => setProductRate(e.target.value)} value={productRate} />
                <br />
                <label htmlFor="product-img">Product Image</label><br/>
                <input type="file" className='form-control' id="file" required
                    onChange={productImgHandler} />
                <br /><br/>
                <label htmlFor="VemdorNo">Vendor Phone Number</label><br/>
                <input type="text" className='form-control' required
                  onChange={(e) => setVendorNo(e.target.value)} value={VendorNo} />
                <br/>
                <label htmlFor="ProductDescr">Product Description</label><br/>
                <input type="text" className='form-control' required
                  onChange={(e) => setProductDescr(e.target.value)} value={productDescr} />
                <br /><br/>
                <button type="submit" className='btn btn-success btn-md mybtn'>ADD</button>
            </form>
            </div>
            {error && <span className='error-msg'>{error}</span>}
        </div>
        </div>
    )
}

export default Updatepr;
