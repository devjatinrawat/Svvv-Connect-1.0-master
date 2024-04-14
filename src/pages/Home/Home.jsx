import React from 'react'
import { HeroSection, Navbar,Companies,Courses, Achievement,Categories,FeedBack,CTA,Footer } from '../../components'
import Background from '../../components/BackgroundLightPurple';







function Home() {

  return (
    <div>
        <Background/>
        <Navbar/>
        <HeroSection/>
        <Companies/>
        <Courses/>
        <Achievement/>
        <Categories/>
        <FeedBack/>
        <CTA/>
        <Footer/>
    </div>
  )
}

export default Home;
