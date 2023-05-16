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
       <p>Of all the sea turtles, the leatherback is the biggest. They typically weigh around 600kg and can grow to lengths of more than 2m. 
        The biggest Leatherback ever discovered was 918kg huge! They have a dorsal black color that predominates, with varying amounts of white or lighter dotting.
         On the neck, spots may be pinkish. In search of their prey, leatherbacks would travel great distances.
          They only consume jellyfish. The Leatherback turtle can live in the extreme cold because, unlike other turtles, it can control its own body temperature because layers of fatty tissue insulate its body.
           They have been spotted feasting on jellyfish in the waters of the Arctic Circle. Their distinctive carapace is what gives them the English name "Leatherback."
            Leatherback turtles are capable of deep diving of 1500m to look for deep-sea jellyfish. The Leatherback's body is subjected to great water pressure at these depths, but its flexible shell does not crack, allowing the turtle to feed securely. Leatherback turtles are now classified as ''Critically Endangered.'' </p>
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