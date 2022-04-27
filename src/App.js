import logo from './logo.svg';
import './App.css';
import React, { createContext, useState } from "react";
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin'
import ProductDetails from './components/ProductInfo/ProductDetails/ProductDetails'
import CartItems from './components/CartItems/CartItems'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Shippment from './components/shippment/Shippment/Shippment';
;

export const UserContext = createContext();
function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  console.log(loggedInUser);




  return (
    <div >
<UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
<Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/productDetails/:_id">
           <ProductDetails></ProductDetails>
          </Route>

          <PrivateRoute path="/cart">
            <CartItems></CartItems>
          </PrivateRoute>
          
          <Route path="/admin">
            <Admin></Admin>
          </Route>
          <Route path="/login">
           <Login></Login>
          </Route>
          
         
          
        </Switch>

      </Router>

      </UserContext.Provider>
    </div>
  );
}

export default App;
