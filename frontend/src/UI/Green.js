import React, {useState,useEffect} from 'react'
import CommonSection from '../components/dashboard/CommomGreen'
import { useParams } from 'react-router-dom'
import { Container,Row,Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

const Green = () => {
  return (
    <div>
       <CommonSection title = 'Green Turtle'/>
       <h3>Introduction</h3>
       <p>Green turtles may grow to be 1 metre long and weigh up to 230 kilograms. They migrate and may be found in all tropical and subtropical waters, including the Indian, Atlantic, Caribbean, and Pacific Oceans.
         Green turtles are captured and slaughtered to produce ''turtle soup,'' a delicacy in many areas of the world. The color of the fat found behind their shells, which is utilized to prepare the soup, inspired its English name.
          Young green turtles eat mostly meat. Adults, on the other hand, are herbivorous, eating solely marine plants such as sea grass and algae. Green turtles are now classified as a ''Endangered'' species.</p>
        <h3>Scientific Name</h3>
        <p>Chelonia mydas</p>
        <h3>Status</h3>
        <p>Endangered</p>
        <h3>Habitat</h3>
        <Button className='btn btn-primary'><Link to='/greenlocation'>Click Here</Link></Button>
        <br></br>
        <br></br>
        <Button className='btn btn-info'><Link to='/gallery'>Browse Photos</Link></Button>
    </div>
  )
}

export default Green