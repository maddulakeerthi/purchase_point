import { useState } from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'
import Home from './components/Home'
import Address from './components/Address'
import Contactus from './components/Contactus'
import Signup from './components/Signup'
import More from './components/More'
import Women from './components/Women'
import Babies from './components/Babies'
import {FcLinux} from 'react-icons/fc'
//import {Logo} from "./images/logo.png"

 
function App() {
  
  



  return (
    <div>
    <div className='content-wrap'>
      {/* links to routes */}
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid" id='nav'>
        <NavLink className="nav-link text-warning text-capitalize mb-2 mt-0" to="Home" ><img style={{"height": "50px", "width":"100px"}} src={require("./images/logo.png")}></img></NavLink>
        <li className="nav-item" id='logo'>
              
        </li>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              
              <li className="nav-item">
                <NavLink className="nav-link " to="Address" >Address</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="contactus" >Contactus</NavLink>
              </li>
              
              <li className="nav-item">
                <NavLink className="nav-link" to="Signup" >Sign up</NavLink>
              </li>
              
              
              
              
              

            </ul>

          </div>
        </div>
      </nav>
      


      {/* define routes for its children */}
      <Routes>
        {/* route for Home component */}
        <Route path="/Home" element={<Home />} />
        {/* route for formAddressForm component */}
        <Route path="/Address" element={<Address/>} />
        <Route path="More" element={<More />} />
        <Route path="Women" element={<Women />} />
        <Route path="Babies" element={<Babies />} />
        {/* route for Contactus component */}
        <Route path="/Contactus" element={<Contactus />} />
        {/* route for Signup component */}
        <Route path="/Signup" element={<Signup />} />
      </Routes>


    </div>
   
  </div>



  );
}

export default App;




