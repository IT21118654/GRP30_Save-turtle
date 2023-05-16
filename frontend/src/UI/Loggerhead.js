import React, {useState,useEffect} from 'react'
import CommonSection from '../components/dashboard/CommonLogger'
import { useParams } from 'react-router-dom'
import { Container,Row,Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

const Loggerhead = () => {

  
  return (
    <div>
       <CommonSection title = 'Loggerhead Turtle'/>
       <h3>Introduction</h3>
       <p>Loggerheads may grow to be 1m long and weigh up to 180 kilograms. 
        This species nests on tropical beaches as well as beaches in temperate areas like as the Mediterranean and the United States' south-east coast.
         Despite being one of the most widespread species on the planet, it is the most uncommon nesting species in Sri Lanka. 
         They exclusively nest in Sri Lanka and have distinctive coloration, indicating a unique population with unique genes. 
         It is thus critical to adopt prompt conservation efforts to safeguard the Loggerhead turtles in Sri Lanka. 
         Loggerhead turtles are predominantly carnivorous, eating mollusks and crustaceans. 
         The term ''Loggerhead'' alludes to the huge head that houses a massive, muscular set of jaws, ideal for crushing mollusks and crustaceans. Loggerhead turtles are now considered as ‘’Endangered’’ </p>
        <h3>Scientific Name</h3>
        <p>Eretmochelys imbricata</p>
        <h3>Status</h3>
        <p>Endangered</p>
        <h3>Habitat</h3>
        <Button className='btn btn-primary'><Link to='/hawkslocation'>Click Here</Link></Button>
        <br></br>
        <br></br>
        <Button className='btn btn-info'><Link to='/gallery'>Browse Photos</Link></Button>
    </div>
  )
}

export default Loggerhead