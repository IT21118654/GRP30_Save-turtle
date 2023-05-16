import React, {useState,useEffect} from 'react'
import CommonSection from '../components/dashboard/CommonSection'
import { useParams } from 'react-router-dom'
import { Container,Row,Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'



import h1 from "../assets/images/aw/h1.jpg";
import h2 from "../assets/images/aw/h2.jpg";
import h3 from "../assets/images/aw/h3.jpg";
import h4 from "../assets/images/aw/h4.jpg";

const habitat = () => {
  return (
    <div>
      <CommonSection title = 'Habitat Loss'/>
       <h3>Overview</h3>
       <p>Habitat loss is a major threat to turtles, as it can significantly impact their
         ability to find food, water, and nesting sites. The destruction and fragmentation of natural
          habitats through activities such as deforestation, urbanization, and agricultural development
           can lead to a decline in turtle populations. As their habitats are destroyed or altered,
            turtles may be forced to move into new areas or struggle to adapt to changing conditions. 
            This can also lead to increased competition for resources among turtle populations, 
            which can further reduce their numbers. In addition, habitat loss can also result in 
            the loss of important genetic diversity within turtle populations, which can make them 
            more vulnerable to disease and other threats. Effective conservation efforts to protect 
            turtles must include efforts to preserve and restore their natural habitats, including 
            protecting critical nesting sites and ensuring that habitats are well connected to allow 
            for the movement of turtles between different areas.
        </p>

        <h3>Photos</h3>
        <div classname="aw_h_img">
             <img src={h1} alt="h1" height="298px" width="400px"/>
             <img src={h2} alt="h2" height="298px" width="400px" />
             <img src={h3} alt="h3" height="298px" width="400px"/>
             <img src={h4} alt="h4" height="298px" width="400px"/>
          </div>
        
        <h3>Videos</h3>
        <div classname="aw_h_vid">
          <container>
            <div classname="ratio ratio-16x9">
              <iframe src="https://www.youtube.com/embed/Om6WLIBJvgg" title="youtube video" allowFullScreen height="298px" width="400px"></iframe>
            </div>
          </container>
        </div>
    </div>
  )
}

export default habitat


