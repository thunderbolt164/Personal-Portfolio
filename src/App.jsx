  import React from 'react'
  import Hero from './sections/Hero'
import ShowCaseSection from './sections/ShowCaseSection'
import NavBar from './components/NavBar'
import FeatureCard from './sections/FeatureCard'
import ExperienceSection from './sections/ExperienceSection'
import TechStack from './sections/TechStack'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

  const App = () => {
    return (
    <>
      <NavBar/>
      <Hero/>
      <ShowCaseSection/>
      <FeatureCard/>
      <ExperienceSection/>
      <TechStack/>
      <Contact/>
      <Footer/>
      
    </>
      
    )
    
  }

  export default App
