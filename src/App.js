import React,{Component} from 'react';
import Home from './Home';
import Footer from './Footer';
import { BrowserRouter as Router , Switch , Route, BrowserRouter } from 'react-router-dom';
import Product from './Product';
import Checkout from './Checkout';
import SigninSignup from './SigninSignup';
import Signup from './Signup';
import { ProductsContextProvider } from './ProductContext';
import Updatepr from './Updatepr';
import { NotFound } from './NotFound';
import {db, auth} from './firebase';
import {CartContextProvider} from './CartContext';
import Cashout from './Cashout';
import Contact from './Contact';
import Payment from './Payment';
import Intropage from './Intropage';
import CovidDash from './CovidDash';
import Create from './Create';
import Prevention from './Prevention';
import vaccination from './vaccination';
import Ex from './Ex';
import sym from './sym';



export class App extends Component {

state = {
    user: null,
}

componentDidMount() {

  auth.onAuthStateChanged(user => {
        if (user) {
            db.collection('SignedUpUsersData').doc(user.uid).get().then(snapshot => {
                this.setState({
                    user: snapshot.data().FName
                })
            })
        }
        else {
            this.setState({
                user: null
            })
        }
    })

} render(){
  return (
    <div>
       <ProductsContextProvider>
       <CartContextProvider>
     <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Intropage}/>
        <Route exact path="/Updatepr" component={Updatepr} />    
        <Route exact path="/CovidDash" component={CovidDash} />  
        <Route exact path="/Create" component={Create} />  
        <Route exact path="/Ex" component={Ex} />   
        <Route exact path="/Home" component={Home} />   
        <Route exact path="/sym" component={sym} /> 
        <Route exact path="/Prevention" component={Prevention} />    
        <Route exact path="/vaccination" component={vaccination} />   
        <Route exact path="/Product" component={Product} />
        <Route exact path="/SigninSignup" component={SigninSignup} />
        <Route exact path="/Checkout" component={() => <Checkout user={this.state.user}/>}/>
        <Route exact path="/Signup" component={Signup} />  
        <Route exact path="/Contact" component={Contact} />  
        <Route path='/Cashout' component={() => <Cashout user={this.state.user}/>}/>
        <Route exact path="/Payment" component={Payment} />  
        <Route component={NotFound} />
      </Switch>
     </BrowserRouter>
   </CartContextProvider>
   </ProductsContextProvider>
 <Footer/>
   </div>
  );
}
}

export default App;