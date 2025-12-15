import React from 'react'
import HFirst from './Headings'
import Headings from './Headings'
import RealWorldPractice from './RealWorldPractice'
import JobAt from './JobAt'
import Testimonials from './Testimonials'
import Navigation from '../Component/Navigation'

function Home()
 {
  return<>
  <Navigation/>
    <Headings/>
    <RealWorldPractice/>
    <JobAt/>
    <Testimonials/>
  </>
}

export default Home
