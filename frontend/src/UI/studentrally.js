import React, {useState,useEffect} from 'react'
import CommonSection from '../components/dashboard/CommonLeather'
import { useParams } from 'react-router-dom'
import { Container,Row,Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

const Student = () => {

  
  return (
    <div>
       <CommonSection title = 'Students Rally'/>
       <h3>Introduction</h3>
       <p>Attention all students and young changemakers! Brace yourselves for an inspiring opportunity to make a real difference in the world of turtle conservation. 
        The Save Turtle Student Rally is calling upon the power of youth to unite and protect these incredible creatures that call our oceans home. Turtles are not 
        only captivating to observe but also play a vital role in maintaining healthy marine ecosystems. However, they face numerous challenges, from plastic pollution 
        to habitat destruction. By participating in this student rally, you become a voice for change and an advocate for their survival. This event is a platform for 
        you to raise awareness, educate others, and take action to protect turtles and their habitats. Through interactive workshops, inspiring talks, and engaging 
        activities, you'll gain the knowledge and tools to become true ambassadors for turtle conservation. By standing together, we can drive positive change, influence 
        policies, and inspire others to join our cause. So, rally your classmates, friends, and fellow students, and let's embark on a journey of environmental stewardship
         and turtle protection. The Save Turtle Student Rally is not just an event; it's a stepping stone towards a future where turtles thrive and our oceans flourish. Don't 
         miss this incredible opportunity to be a part of the solution. Register for the Save Turtle Student Rally today and be a catalyst for meaningful change. Together, 
         let's leave a lasting legacy of compassion, sustainability, and a deep respect for the incredible diversity of life on our planet. </p>
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

export default Student