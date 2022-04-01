/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Navbar.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Error from './Error'
import LandingPage from '../Pages/LandingPage';
import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';
import Events from '../Pages/Events';
import AddProperty from '../Pages/AddProperty';


function Navbar() {
  return (
    <div>
        <Router>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
        <a className="navbar-brand" href='/'>
        <img src = "images/airbnbLogo.png" className='logo' alt='logo' />
        </a>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <div className='col-12 col-md-6'>
                <ul className='navbar'>
                    <li className='nav-item'>
                    <a className="nav-link active" id = "host" aria-current="page">Become a host</a>
                    </li>

                    <li className='nav-item dropdown'>
                    <a
                        className="nav-link dropdown-toggle"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                <img src="images/134216_menu_lines_hamburger_icon.png" alt='hamburger' className='hamburger' />
                <img src="images/profile.png" alt='profile' id='profileLogo' className='hamburger' />
                
                </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item"><Link className='navigation' to='/login'>Login</Link>{"   "}</a></li>
                            <li><a className="dropdown-item"><Link className='navigation' to='/signup'>Sign Up</Link>{"   "}</a></li>
                            <li><hr className="dropdown-divider" /></li>
                        <li>
                            <a className="dropdown-item"><Link className='navigation' to='/host'>Host your Home</Link>{"   "}</a>
                            <a className="dropdown-item"><Link className='navigation' to='/events'>Events near You</Link>{"   "}</a>
                            <a className="dropdown-item">Help</a>
                         </li>
                    </ul>
                    </li>
                </ul>
            </div>
            
        </div>
        <div className="col-12 col-md-6">
                <form className="d-flex align-items-center">
            <input
              className="form-control me-2"
              id="myInput"
              type="text"
              placeholder="Start your search"
              aria-label="Search"
             
            />
            <button type="submit" className="btn btn-light">
              <img src="images/3688454_find_lens_search_magnifier_magnifying_icon.png"  alt="magnifier" className='magnifier' />
            </button>

            <button type="submit" className="btn btn-light">
              <img src="images/103571_globe_icon.png" alt='global' className='global'/>
            </button>

          </form>
        </div>
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
      <span className="navbar-toggler-icon"></span>
      </button>
        </div>
 
        </nav>
        <Routes>
          <Route path='/' element={<LandingPage/>}></Route>
          <Route path='/login' element={<SignIn/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/events' element={<Events/>}></Route>
          <Route path='/host' element={<AddProperty/>}></Route>
          <Route path='*' element={<Error/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default Navbar;