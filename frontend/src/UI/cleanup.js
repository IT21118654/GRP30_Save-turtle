import React, {useState,useEffect} from 'react'
import CommonSection from '../components/dashboard/CommonLeather'
import { useParams } from 'react-router-dom'
import { Container,Row,Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

const Beach = () => {

  
  return (
    <div>
       <CommonSection title = 'Beach Cleanup'/>
       <h3>Introduction</h3>
       <p>Attention all beach lovers and environmental enthusiasts! Get ready to roll up your sleeves and join us for a transformative experience at the Save Turtle Beach Cleanup event.
         Our beautiful coastlines provide nesting grounds for sea turtles, but they are under threat from pollution and debris. By participating in this beach cleanup, you become a guardian
          of these precious habitats and a defender of marine life. Every piece of trash you collect and every bit of plastic you remove from the shoreline makes a tangible difference. By 
          restoring the pristine condition of our beaches, we create safer nesting environments for sea turtles and protect them from the harmful effects of pollution. Furthermore, the Save
           Turtle Beach Cleanup is an incredible opportunity to connect with like-minded individuals, learn about the importance of conservation, and inspire others to take action. Together,
            we can make a lasting impact, not only for sea turtles but for the overall health of our oceans. So, gather your friends, family, and community, and let's make our coastlines a
             haven for marine life. Participate in the Save Turtle Beach Cleanup and be a force for positive change. Your actions today will help ensure a brighter tomorrow for sea turtles
              and the incredible ecosystems they depend on. </p>
        <h3>Event Details</h3>
        <p>Place : Colombo</p>
        <p>Date  : 05th June 2023</p>
        <p>Time  : 9:30 AM</p>
        
        <h3>How to participate</h3>
        <Button className='btn btn-primary'><Link to='/form'>Click Here to participate</Link></Button>
        <br></br>
        <br></br>
        
    </div>
  )
}

export default Beach