/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../Home/LocationCards.css'

function LocationCards(props) {
  return (
    <div className='container'>
    <br /><br />
    <div className="jumbotron" id='jumbotronCard'>
            <h1 className="display-4">Inspiration for your next trip</h1>
            <p className="lead">Your next trip, just a click away!</p>
          </div>
          <div className="row">
                <div className="col">
                    <div className="card my-3">
                        <img src="images/miami.jpeg" className="card-img-top" alt="..." />
                        <div className="card-body" id='card1'>
                            <h5 className="card-title">Miami</h5>
                            <p className="card-text">1100 miles away</p>
                            <button type="button" className="btn btn-primary">Visit</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card my-3">
                        <img src="images/ny.jpeg" className="card-img-top" alt="..." />
                        <div className="card-body" id='card2'>
                            <h5 className="card-title">New York</h5>
                            <p className="card-text">1000 miles away</p>
                            <button type="button" className="btn btn-primary">Visit</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card my-3">
                        <img src="images/portland.jpeg" className="card-img-top" alt="..." />
                        <div className="card-body" id='card3'>
                            <h5 className="card-title">Portland</h5>
                            <p className="card-text">400 miles away.</p>
                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Visit</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card my-3">
                        <img src="images/rutland.jpeg" className="card-img-top" alt="..." />
                        <div className="card-body" id='card4'>
                            <h5 className="card-title">Rutland</h5>
                            <p className="card-text">400 miles away.</p>
                             <button type="button" className="btn btn-primary">Visit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default LocationCards;