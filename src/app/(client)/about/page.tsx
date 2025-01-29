import React from 'react'
import AboutHomePage from './components/home'
import Problems from './components/problems'
import Costumers from './components/costumers'
import Video from './components/video'
import MeetTeam from './components/team'
import Companies from './components/companies'
import Work from './components/work'


const About = () => {
  return (
    <div>
        <AboutHomePage/>
        <Problems/>
        <Costumers/>
        <Video/>
        <MeetTeam/>
        <Companies/>
        <Work/>
    </div>
  )
}

export default About