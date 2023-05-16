import React, {useState,useEffect} from 'react'
import CommonSection from '../components/dashboard/CommomHawks'
import { useParams } from 'react-router-dom'
import { Container,Row,Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

const Hawksbill = () => {

  
  return (
    <div>
       <CommonSection title = 'Hawksbill Turtle'/>
       <h3>Introduction</h3>
       <p>The adults of hawksbill turtles, which typically weigh around 60kg and reach lengths of up to 90cm, are also quite small. 
        They are largely carnivorous and live in tropical coastal waters near coral reefs.
         They eat a wide range of creatures, such as jellyfish, sponges, and crabs. 
         The English name "hawksbill turtle" refers to the creature's tiny, bird-like beak, which it employs to snare prey that is lurking in small cracks.
          Hawksbill turtles occasionally consume poisonous sponges. Hawksbills can really store the toxins in their own body rather than getting poisoned. 
          A human who consumes Hawksbill turtle flesh runs the risk of developing severe food illness. Due to centuries of the killing of Hawksbill turtles for their shells by people all over the world, their numbers are now critically low. 
          Once cleaned and polished, the shell is crafted into ‘’tortoiseshell’’ ornaments. Today, Hawksbill turtles are considered as ‘’Critically Endangered’</p>
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

export default Hawksbill