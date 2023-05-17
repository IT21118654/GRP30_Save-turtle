import React, {useState,useEffect} from 'react'
import CommonSection from '../components/dashboard/CommonLeather'
import { useParams } from 'react-router-dom'
import { Container,Row,Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

const Nesting = () => {

  
  return (
    <div>
       <CommonSection title = 'Nesting Survey'/>
       <h3>Introduction</h3>
       <p>Calling all nature enthusiasts and wildlife advocates! Get ready to make a real difference in the world of turtle conservation by participating in the thrilling turtle nesting survey. 
        Your involvement in this event is crucial, as it provides an incredible opportunity to contribute directly to the preservation of these captivating creatures. By joining forces with scientists,
         conservationists, and fellow nature lovers, you'll be on the forefront of collecting vital data about turtle nesting sites, reproductive patterns, and habitat health. Through your efforts, 
         we can gain valuable insights that will shape conservation strategies and safeguard these majestic turtles for generations to come. So, come on board, embrace this adventure, 
         and be a part of the movement to protect these remarkable animals. Your dedication and enthusiasm can help secure a brighter future for turtles and their magnificent habitats.
          Together, let's make a lasting impact and create a legacy of conservation that will inspire others to follow in our footsteps. Join the turtle nesting survey today and let your passion for nature shine! </p>
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

export default Nesting