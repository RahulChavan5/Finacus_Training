// import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Product from './components/Product';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";



function App() {

 
  return (
    <> 
    <Router>
    <div>
    <NavBar/>
    </div>

   
    <Switch>
          <Route path="/Product">
            <Product />
          </Route>
          
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/NavBar">
            <NavBar />
          </Route>
         
          

        
          
        </Switch>
      
    </Router>

   
{/*    
    <Router>
      <Navbar/>
        <Switch>
          <Route path="/Login">
            <Login />
          </Route>
        
        </Switch>
        <div>
      <Login/>
    </div>
            </Router>
  */}
    </>
  );
}

export default App;
