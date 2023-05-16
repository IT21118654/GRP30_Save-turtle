import React, {useState,useEffect} from 'react'
import CommonSection from '../components/dashboard/CommonSection'
import { useParams } from 'react-router-dom'
import { Container,Row,Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

const habitat = () => {
  return (
    <div>
      <CommonSection title = 'Climate Change'/>
       <h3>Overview</h3>
       <p>        
        Climate change is a significant threat to turtles, as it can impact their habitats, food sources, and reproductive success.
        Rising temperatures and changing weather patterns can have a range of effects on turtle populations. For example, changes 
        in precipitation patterns can lead to droughts or floods, which can disrupt nesting sites and reduce the availability of
          food and water for turtles. Rising temperatures can also affect the sex ratios of turtle populations, with higher temperatures leading 
          to a greater proportion of female hatchlings. This can lead to an imbalance in the population and impact breeding success. Climate change 
          can also impact the availability of important food sources for turtles, such as insects, plants, and fish, leading to reduced growth rates 
          and overall fitness. To address the impacts of climate change on turtle populations, it is necessary to reduce greenhouse gas emissions and 
          mitigate the effects of climate change through measures such as habitat restoration, reforestation, and supporting policies to promote sustainable practices. 
          Additionally, it is important to study and monitor the effects of climate change on turtle populations to better understand how they may be impacted and 
          how to address these impacts effectively.
       </p>

       <h3>Videos</h3>
        <div classname="aw_h_vid">
          <container>
            <div classname="ratio ratio-16x9">
              <iframe src="https://www.youtube.com/embed/Y3oty3wzGqs" title="youtube video" allowFullScreen height="298px" width="400px"></iframe>
            </div>
          </container>
        </div>
    </div>

    
  )
}

export default habitat

