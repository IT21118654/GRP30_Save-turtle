import React, {useState,useEffect} from 'react'
import CommonSection from '../components/dashboard/CommonLeather'
import { useParams } from 'react-router-dom'
import { Container,Row,Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

const Marathon = () => {

  
  return (
    <div>
       <CommonSection title = 'Turtle Marathon'/>
       <h3>Introduction</h3>
       <p>Get ready to lace up your running shoes and make a splash for an incredible cause! The Save Turtle Marathon is here, and it's your chance to be a part of something truly remarkable. 
        By joining this marathon, you'll be championing the conservation and protection of these magnificent creatures that grace our oceans and shores. Turtles are not only fascinating creatures 
        but also vital contributors to the balance of marine ecosystems. Sadly, they face numerous threats, from habitat destruction to pollution and climate change. However, by participating in 
        this marathon, you become a beacon of hope for their survival. Every step you take and every donation you raise will directly support essential conservation efforts, habitat restoration, 
        and educational initiatives to raise awareness about turtle conservation. The Save Turtle Marathon is more than just a race; it's a statement of solidarity and a powerful way to make a tangible
         impact. So, gather your friends, family, and colleagues, and let's take a stand for these gentle ocean wanderers. Whether you're a seasoned runner or a beginner, everyone is welcome to join in
          this incredible journey. Together, let's run for the turtles, ignite change, and create a future where these magnificent creatures thrive. Sign up for the Save Turtle Marathon today and be a 
          part of a movement that will leave a lasting legacy for generations to come. </p>
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

export default Marathon