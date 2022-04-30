import React, { createContext } from 'react';
import { db } from './firebase';
import {Sliderbar} from './Sliderbar';

class Ex extends React.Component {

    state = {
        expr: []
    }

    componentDidMount() {

        const pr = this.state.expr;
        db.collection('exp').onSnapshot(snapshot => {
            let changes = snapshot.docChanges();
            changes.forEach(change => {
                if (change.type === 'added') {
                    pr.push({
                        expID: change.doc.id,
                        Name: change.doc.data().Name,
                        Ph: change.doc.data().Ph,
                        Address: change.doc.data().Address,
                        exp: change.doc.data().exp,
                        exp_img: change.doc.data().exp_img
                    });
                }
                this.setState({
                  expr: pr
                });
            });
        });

    }
    render() {
        return (
                <div >
                             <Sliderbar />
                             <div className="btg">
                             <img src ="asserts/tg.png" className='tg'/>
                             </div>
                <div className='product products-container'>
                    {this.state.expr.map(ex => (
                        <div  key={ex.ExpID} className="product-card">
                          <div className='product-name'>
                                {ex.Name}
                            </div>
                            <div className='product-img'>
                                <img src={ex.exp_img} alt="not found" />
                            </div>
                            <div className='product-price'> Phone Number:
                                 {ex.Ph}
                        </div>
                        <div className='product-price'> Address:
                                 {ex.Address}
                        </div>
                        <div className='product-price'> Message:
                                 {ex.exp}
                        </div>
                        </div>
                    ))}
                </div>
        </div>
        );
    }
}
export default Ex;

   