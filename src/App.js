
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from './Components/Checkout/Checkout';
function App() {
  return (
    
      <Router>
        <Switch>
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
