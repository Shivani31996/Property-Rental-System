import React from 'react'
import '../Pages/SignIn.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from '../components/FormControl/Input';

function SignIn() {
  return (
    <div id='signInComponent'>
    <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card border-0 shadow-lg p-3 mb-5 bg-white rounded rounded-3 my-5" >
                <div className="card-body p-4 p-sm-5" id='loginbox'>
                  <h5 className="card-title text-center mb-5 fw-light fs-5"><img src="images/airbnbLogo.png" alt="logo" /></h5>
                  <form>
                    <div className="form-floating mb-3">
                    {/* <label htmlFor="floatingInput">Email address</label> */}
                      {/* <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" /> */}
                      <Input type='email' className='form-control' id='floatingInput' placeholder='Email' />
                      
                    </div>
                    <div className="form-floating mb-3">
                      {/* <input type="password" className="form-control" id="floatingPassword" placeholder="Password" /> */}
                      <Input type='password' className='form-control' id='floatingInput' placeholder='Password' />

                      {/* <label htmlFor="floatingPassword">Password</label> */}
                    </div>
      
                    <div className="form-check mb-3">
                      <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />
                      <label className="form-check-label" htmlFor="rememberPasswordCheck">
                        Remember password
                      </label>
                    </div>
                    <div className="d-grid">
                      <button className="btn btn-primary btn-login text-uppercase fw-bold" id='signin' type="submit">Sign
                        in</button>

                    </div>
                  </form>

                  <p>
                    <br /><br />
                    <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                      Read Terms and Conditions*
                    </button>
                  </p>
                  <div className="collapse" id="collapseExample">
                    <div className="card card-body">
                      <strong>By creating an account, you have agreed to AirBnB's internal policies and security. Please read them before proceding.</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
  )
}

export default SignIn


