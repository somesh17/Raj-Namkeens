import React, { useEffect } from "react";
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from './firebase';
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

useEffect(() => {
  // will only run once when the app component loads...

  auth.onAuthStateChanged(authUser => {
    console.log('the user is ==>', authUser);

    if(authUser) {
      // the user just logged in / the user was logged in

      dispatch({
        type: 'SET_USER',
        user: authUser
      })

    }else {
      //the user is logged out
      dispatch({
        type: 'SET_USER',
        user: null
      })
    }
  })
}, [])

  return (
    <Router>
     <div className="app">
      
      <Routes> 
          <Route path="/login" element={<Login />} ></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/" element={<Home />} ></Route>
      </Routes>
     </div>
    </Router>
  );
}

export default App;
