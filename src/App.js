
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    
      <Router>
      <Route path="/">
     <Header/>
     <Home/>
     </Route>
     </Router>
    
  );
}

export default App;
