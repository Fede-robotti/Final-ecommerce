import './App.css';
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import CheckoutPage from "./components/CheckoutPage"
import {Routes, BrowserRouter as Router, Route} from "react-router-dom"
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { useEffect } from 'react';
import { auth, db } from './firebase';
import { actionTypes } from './reducer';
import {useStateValue} from "./StateProvider";
import Checkout from './components/CheckoutForm/Checkout';
import StickyFooter from './components/StickyFooter';


function App() {
  const [{user}, dispatch] = useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      console.log(authUser);
      if (authUser){
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        })
      }
    })
  },[])
  return (
    <div className="GeeksForGeeks">
    <Router>
    <div >
      <Navbar/>
      <Routes>      
      <Route path="/signUp" element={<SignUp/>}>
        </Route>
        <Route path="/signin" element={<SignIn/>}>
        </Route>
        <Route path="/checkout-page" element={<CheckoutPage/>}>
        </Route>
        <Route path= "/checkout" element={<Checkout/>}>
        </Route>
        <Route path= "/" element={<Products/>}>
        </Route>
      </Routes>   
    </div>
    </Router>
    <StickyFooter/>

    </div>
    
  );
}

export default App;
