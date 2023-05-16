import React, {useState,useEffect} from 'react'
import CommonSection from '../components/dashboard/CommonLeather'
import { useParams } from 'react-router-dom'
import { Container,Row,Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

const Leatherback = () => {

  
  return (
    <div>
       <CommonSection title = 'Leatherback Turtle'/>
       <h3>Introduction</h3>
       <p>The Leatherback turtle is the most massive of all marine turtles. 
        They may grow to be more than 2 metres long and weigh over 600 kg. The heaviest Leatherback ever discovered weighed 918 kg!
         They have a mostly black dorsal coat with varying degrees of white or lighter patterning. 
         Pinkish spots on the neck are possible. Leatherback sharks only consume jellyfish and will travel large distances to find them. 
         Leatherback turtles have been discovered feasting on jellyfish in Arctic Circle waters. They can live in the severe cold because, unlike other turtles, 
         they can regulate their own body temperature thanks to layers of fatty tissue that insulate their bodies. The English term ''Leatherback'' alludes to their distinctive carapace.
         Leatherback turtles are capable of diving to great depths of 1500 metres in search of deep-sea jellyfish. At these depths the Leatherback’s body is subjected to tremendous water pressure, but its flexible shell does not break and so the turtle can feed safely. 
         Today, Leatherback turtles are considered as ‘’Critically Endangered’’. </p>
        <h3>Scientific Name</h3>
        <p>Dermochelys coriacea</p>
        <h3>Status</h3>
        <p>Critically Endangered</p>
        <h3>Habitat</h3>
        <Button className='btn btn-primary'><Link to='/leatherlocation'>Click Here</Link></Button>
        <br></br>
        <br></br>
        <Button className='btn btn-info'><Link to='/gallery'>Browse Photos</Link></Button>
    </div>
  )
}

export default Leatherback