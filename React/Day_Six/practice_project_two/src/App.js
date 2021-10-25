// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"


function App(props) {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-dark')
    
  }

  const toggleMode = (cls)=>{
     console.log(cls)
     removeBodyClasses();
     document.body.classList.add('bg-' +cls)
  }

  return (
    <>
      <Router>
        <Navbar title="Web Page" toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Switch>
            {/* /user --> Component 1
            /user/home --> Component 2 */}
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              < TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra space" />
            </Route>

          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
