import logo from './logo.svg';
import './App.css';
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
;

function App() {
  return (
    <div className="App">

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

          <Route path="/cart">
            <CartItems></CartItems>
          </Route>
          <Route path="/admin">
            <Admin></Admin>
          </Route>
          
         
          
        </Switch>

      </Router>

    
    </div>
  );
}

export default App;
