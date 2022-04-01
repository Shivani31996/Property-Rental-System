import React from 'react'
import Carousel from '../components/Home/Carousel.jsx'
import Footer from '../components/Footer'
import LocationCards from '../components/Home/LocationCards.jsx'
import ExperienceCard from '../components/Home/ExperienceCard.jsx'
function LandingPage() {
  return (
    <div>
       <Carousel />
       <LocationCards />
       <ExperienceCard />
       <footer>
         <Footer />
       </footer>
    </div>
  )
}

export default LandingPage