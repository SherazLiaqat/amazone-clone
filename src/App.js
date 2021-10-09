import React,{useEffect,useStateValue} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from './Components/Checkout/Checkout';
import { auth } from './firebase';

function App() {
 
  return (
    
      <Router>
        <Switch>
      <Route path="/Login">
        <Login />
        </Route>
      <Route path="/Checkout">
     <Header/>
     <Checkout/>
     </Route>
     <Route path="/">
     <Header/>
     <Home/>
     </Route>
     </Switch>
     </Router>
    
  );
}

export default App;
