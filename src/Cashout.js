import React, { useState, useEffect, useContext } from 'react'
import { auth, db } from './firebase'
import { CartContext } from './CartContext'
import  {Sliderbar}  from './Sliderbar';
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

export const Cashout = (props) => {

    const history = useHistory();
    const { shoppingCart, totalPrice, totalQty, dispatch } = useContext(CartContext);

    const [Fname, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cell, setCell] = useState('');
    const [address, setAddress] = useState('');
    const [error, setError] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                db.collection('SignedUpUsersData').doc(user.uid).onSnapshot(snapshot => {
                    setName(snapshot.data().FName);
                    setEmail(snapshot.data().Email);
                })
            }
            else {
                history.push('/Signup')
            }
        })
    })

    const cashoutSubmit = (e) => {
        e.preventDefault();
        auth.onAuthStateChanged(user => {
            if (user) {
                const date = new Date();
                const time = date.getTime();
                db.collection('Buyer-info ' + user.uid).doc('_' + time).set({
                    BuyerName: Fname,
                    BuyerEmail: email,
                    BuyerCell: cell,
                    BuyerAddress: address,
                    BuyerPayment: totalPrice,
                    BuyerQuantity: totalQty
                }).then(() => {
                    db.collection('Buyer-info ' + user.uid).onSnapshot(snapshot => {
                        let changes = snapshot.docChanges();
                        changes.forEach(change => {
                            if (change.type === 'added') {
                                shoppingCart.forEach(cart => {
                                    db.collection(user.uid + change.doc.id).add(cart).then(() => {
                                        setCell('');
                                        setAddress('');
                                        dispatch({ type: 'EMPTY' })
                                        setSuccessMsg('Your order has been placed successfully. Thanks for visiting us. You will be redirected to home page after 5 seconds');
                                        setTimeout(() => {
                                            history.push('/')
                                        }, 5000)
                                    }).catch(err => setError(err.message))
                                })
                            }
                        })
                    })
                }).catch(err => setError(err.message))
            }
        })
    }

    return (
        <div className='cashh err'>
            <Sliderbar user={props.user} />
            {error && <span>{error}</span>}
            <img src="asserts/dilivery.PNG" className='Cus cash'/>
            <div className='cer Cer cd'>
                <br />
                <h2>Cashout Details</h2>
                <br />
                {successMsg && <div className='success-msg'>{successMsg}</div>}
                <form autoComplete="off" className='form-group' onSubmit={cashoutSubmit}>
                    <label htmlFor="name">Name</label><br/>
                    <input type="text" className='form-control' required
                        value={Fname} disabled />
                    <br />
                    <label htmlFor="email">Email</label><br/>
                    <input type="email" className='form-control' required
                        value={email} disabled />
                    <br />
                    <label htmlFor="Cell No">Cell No</label><br/>
                    <input type="number" className='form-control' required
                        onChange={(e) => setCell(e.target.value)} value={cell} placeholder='eg 03123456789' />
                    <br />
                    <label htmlFor="Delivery Address">Delivery Address</label><br/>
                    <input type="text" className='form-control' required
                        onChange={(e) => setAddress(e.target.value)} value={address} />
                    <br />
                    <label htmlFor="Price To Pay">Price To Pay</label><br/>
                    <input type="number" className='form-control' required
                        value={totalPrice} disabled />
                    <br />
                    <label htmlFor="Total No of Products">Total No of Products</label><br/>
                    <input type="number" className='form-control' required
                        value={totalQty} disabled />
                    <br /><br/>
                    <Link to="/Payment">
                    <button type="submit" className='btn btn-success btn-md mybtn'>Proceed To Payment</button>
                    </Link>
                </form>
                {error && <span className='error-msg'>{error}</span>}
            </div>
        </div>
    )
}
export default Cashout;