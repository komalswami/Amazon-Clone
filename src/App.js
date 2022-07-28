import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router} from "react-router-dom"
import { Route, Routes} from "react-router";
import Checkout from './Checkout';
function App() {
  return (
   <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<><Home /></>}></Route>
          <Route path="/checkout" element={<><Checkout/></>}></Route>
         
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
