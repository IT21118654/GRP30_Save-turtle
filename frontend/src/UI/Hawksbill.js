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
       <p>Hawksbill turtles are similarly little turtles; adults typically weigh around 60 kg and measure up to 90cm.
        They are largely carnivorous and live in tropical coastal waters near coral reefs. 
        They eat a wide range of creatures, including jellyfish, sponges, and crabs. 
        The English name for the Hawksbill turtle comes from its thin birdlike beak, which it utilizes to grab creatures lurking in small crevices. 
        Hawksbill turtles are known to consume poisonous sponges. Hawksbills may store poisons in their own tissues rather than being poisoned. 
        A human can die from severe food poisoning if he consumes the meat of a Hawksbill turtle. 
        The Hawksbill turtle is currently critically endangered because people all around the world have been killing them for millennia for their shell.
         After being cleaned and polished, the  shell is crafted into ‘’tortoiseshell’’ ornaments. 
         Today, Hawksbill turtles are considered as ‘’Critically Endangered</p>
        <h3>Scientific Name</h3>
        <p>Eretmochelys imbricata</p>
        <h3>Status</h3>
        <p>Endangered</p>
        <h3>Habitat</h3>
        <Button className='btn btn-primary'><Link to='/hawkslocation'>Click Here</Link></Button>
        <br></br>
        <br></br>
        <Button className='btn btn-info'>Browse Photos</Button>
    </div>
  )
}

export default Hawksbill