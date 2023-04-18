import React, {useState,useEffect} from 'react'
import CommonSection from '../components/dashboard/CommonSection'
import { useParams } from 'react-router-dom'
import { Container,Row,Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

const OliveRidley = () => {
  return (
    <div>
       <CommonSection title = 'Olive Ridley Turtle'/>
       <h3>Introduction</h3>
       <p>Olive Ridley turtles are the smallest sea turtles. 
        Adults weigh less than 40 kg and are up to 65 cm long. They are usually found in the Indian, South Atlantic, and Pacific Oceans. 
        They are omnivorous, consuming crustaceans, fish, and some seaweed. Olive Ridley turtles are now classified as a ''Endangered'' species. 
        Olive Ridley turtles nest on a beach in a large crowd known as a ''Arribada'' in a few countries. This Spanish term implies ''coming''. In India, for example, 600,000 Olive Ridley turtles were observed breeding on the same beach within a few weeks. 
        Despite their seeming abundance, Olive Ridley turtles are endangered. This is due to the large number of members of this species depending on the security of a small number of important beaches for nesting.</p>
        <h3>Scientific Name</h3>
        <p>Lepidochelys olivacea</p>
        <h3>Status</h3>
        <p>Endangered</p>
        <h3>Habitat</h3>
        <Button className='btn btn-primary'><Link to='/olivelocation'>Click Here</Link></Button>
        <br></br>
        <br></br>
        <Button className='btn btn-info'><Link to='/olivelocation'>Browse Photos</Link></Button>
    </div>
  )
}

export default OliveRidley