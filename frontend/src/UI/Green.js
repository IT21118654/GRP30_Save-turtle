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
       <p>Green turtles can weigh up to 230kg and have an average length of 1 m.
         All tropical and subtropical oceans, including the Indian, Atlantic, Caribbean, and Pacific Oceans, are home to this migratory fish.
          Green turtles are caught and killed to make the delicacy known as "turtle soup" in various cultures. Their English name alludes to the hue of the soup-making fat that can be discovered beneath their shells.
           The majority of young green turtles are carnivorous. 
           The adults, on the other hand, are herbivores and only consume marine plants like sea grass and marine algae. Nowadays, green turtles are regarded as a ''Endangered'' species.</p>
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