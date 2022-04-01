import React from 'react'
import '../Home/ExperienceCard.css'

function ExperienceCard() {
  return (
    <div className='container'>
      <br/><br/>
        <div className="jumbotron" id='experiencesection'>
      <h1 className="display-4">Discover AirBnb experiences</h1>
      <p className="lead">Browse through our catalogs and discover the experiences we provide to ensure you have a memorable trip.</p>
      <br/>
    </div>

    <div className="row">
        <div className="col-12 col-lg-6 position-relative">
            <img className= "img-fluid" src="images/japan.jpg" alt='tourist' id='touristimg'/>
            <div id="travel-img1">
                <p id="description-img1">Things to on your trip</p>
                <button className="btn btn-light" id='btnexperiences' data-container="body" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Experiences</button>
              </div>
        </div>
        <div className="col-12 col-lg-6 position-relative">
          <img className="img-fluid" src="images/woman_resting.jpeg" alt='woman resting' id='imagehome'/>
          <div id="travel-img2">
              <p id="description-img2">Views that you cannot miss</p>
              <button className="btn btn-light" id='onlineexperience'>Online Experiences</button>
          </div>
      </div>
    </div>
    <br/><br/>
</div>
)
}

export default ExperienceCard;