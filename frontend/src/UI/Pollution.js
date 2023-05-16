import React, {useState,useEffect} from 'react'
import CommonSection from '../components/dashboard/CommonSection'
import { useParams } from 'react-router-dom'
import { Container,Row,Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

import p1 from "../assets/images/aw/p1.jpg";
import p3 from "../assets/images/aw/p3.jpeg";
import p4 from "../assets/images/aw/p4.jpeg";

const Pollution = () => {
  return (
    <div>
      <CommonSection title = 'Pollution'/>
       <h3>Overview</h3>
       <p>
          Pollution is a significant threat to turtles, particularly in aquatic habitats. Turtles can be impacted by various forms of pollution, 
          including plastic debris, chemicals, and oil spills. Plastic pollution is a particularly pervasive and harmful form of pollution for turtles,
          as they may mistake plastic debris for food or become entangled in it, leading to injury or death. Chemical pollution, such as pesticides and 
          fertilizers used in agriculture, can also contaminate waterways and harm turtle populations. Oil spills can have a devastating impact on turtle populations,
          as the oil can coat their shells and skin, making it difficult for them to regulate their body temperature and move properly, as well as affecting their ability 
          to find food and water. Pollution can also impact the turtles' prey and the health of the overall ecosystem, further exacerbating the threats they face. Addressing
          pollution requires a combination of individual and collective actions, such as reducing plastic use, properly disposing of waste, supporting policies to regulate 
          pollutants, and promoting sustainable agricultural practices. By reducing pollution, we can help protect turtles and preserve the health of aquatic ecosystems.
       </p>

      <h3>Photos</h3>
       <div classname="aw_p_img">
             <img src={p1} alt="p1" height="198px" width="300px"/>
             <img src={p3} alt="p3" height="198px" width="300px" />
             <img src={p4} alt="p4" height="198px" width="300px"/>
        </div>

        <h3>Videos</h3>
        <div classname="aw_h_vid">
          <container>
            <div classname="ratio ratio-16x9">
              <iframe src="https://www.youtube.com/embed/TedBxnwVPyA" title="youtube video" allowFullScreen height="298px" width="400px"></iframe>
            </div>
          </container>
        </div>
        

    </div>

    
  )
}

export default Pollution

