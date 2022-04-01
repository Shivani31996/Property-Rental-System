/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../components/Footer.css'

function Footer() {
  return (
    <div id="footer">
        
      <div className="container py-5 px-2">
      <br/><br/>
        <div className="row">
          <div className="col-4">
            <h5>Support</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a className="nav-link p-0 text-muted">Help Center</a></li>
              <li className="nav-item mb-2"><a className="nav-link p-0 text-muted">Safety information</a></li>
              <li className="nav-item mb-2"><a className="nav-link p-0 text-muted">Cancellation options</a></li>
              <li className="nav-item mb-2"><a className="nav-link p-0 text-muted">Our COVID-19 Response</a></li>
              <li className="nav-item mb-2"><a className="nav-link p-0 text-muted">Supporting people with disabilities</a></li>
            </ul>
          </div>

          <div className="col-4">
            <h5>Hosting</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a className="nav-link p-0 text-muted">Try hosting</a></li>
              <li className="nav-item mb-2"><a className="nav-link p-0 text-muted">Explore hosting resources</a></li>
              <li className="nav-item mb-2"><a className="nav-link p-0 text-muted">Visit our community forum</a></li>
            </ul>
          </div>

          <div className="col-4">
            <h5>About</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a className="nav-link p-0 text-muted">Newsroom</a></li>
              <li className="nav-item mb-2"><a className="nav-link p-0 text-muted">Learn about new features</a></li>
              <li className="nav-item mb-2"><a className="nav-link p-0 text-muted">Careers</a></li>
              <li className="nav-item mb-2"><a className="nav-link p-0 text-muted">FAQs</a></li>
            </ul>
          </div>


        </div>
      <div className="row">
        <div className="col">
          <div className="d-flex justify-content-between p-4 my-4 border-top">

            <p>© 2021 Company, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3"><a className="link-dark"><svg className="bi" width="24" height="24"></svg></a></li>
              <li className="ms-3"><a className="link-dark"><svg className="bi" width="24" height="24"></svg></a></li>
              <li className="ms-3"><a className="link-dark"><svg className="bi" width="24" height="24"></svg></a></li>
            </ul>
          </div>
        </div>
      </div>

  <div className="row">
    <div className="col">
      <div id="social-media-content" className="d-flex justify-content-around">
        <a id="contact"></a>
      <a href="mailto:airBnB@gmail.com"
        ><button type="button" className="btn btn-link" data-toggle="tooltip" data-placement="top" title="Mail Us"><img src="images/email.png" alt=""  data-toggle="Twitter" className="social-media-icons" /></button></a
      >
      <a href="tel:+18574379641"><button type="button" className="btn btn-link" data-toggle="tooltip" data-placement="top" title="Call Us"><img src="images/telephone-call.png" alt=""  data-toggle="Twitter" className="social-media-icons" /></button>
      </a>
      <a
        href="https://www.linkedin.com/company/airbnb/"
        target="_blank"
      >
      <button type="button" className="btn btn-link" data-toggle="tooltip" data-placement="top" title="LinkedIn"><img src="images/linkedin.png" alt=""  data-toggle="Twitter" className="social-media-icons" /></button>
      </a>
      <a
      href="https://twitter.com/Airbnb"
      target="_blank"
    >
      <button type="button" className="btn btn-link" data-toggle="tooltip" data-placement="top" title="Twitter"><img src="images/twitter.png" alt=""  data-toggle="Twitter" className="social-media-icons" /></button>
      </a>
    <a
        href="https://www.instagram.com/airbnb/"
        target="_blank" data-toggle="Instagram"
      >
      <button type="button" className="btn btn-link" data-toggle="tooltip" data-placement="top" title="Instagram"><img src="images/instagram.png" alt=""  data-toggle="Twitter" className="social-media-icons" /></button>
      </a>
    </div>
    </div>
  </div>
</div>
</div>
  )
}

export default Footer;