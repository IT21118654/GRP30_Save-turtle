import React from 'react'
import { Col, Row } from "reactstrap";
import { Link } from 'react-router-dom';
import Blog from "../components/dashboard/Blog";

import awareneesimg from "../assets/images/aw/awareneesimg.jpg";
import habitat from "../assets/images/aw/habitat.jpg";
import pollution from "../assets/images/aw/pollution.jpg";
import climate from "../assets/images/aw/climate.jpg";





const BlogData = [
    {
      image: habitat,
      title: "Habitat Loss",
      description:
        "The destruction and degradation of natural habitats through activities such as deforestation, urbanization, and agricultural development can have a significant impact on turtle populations. As their habitats are destroyed or fragmented, turtles may struggle to find food, water, and nesting sites.",
      btnbg: "primary",
      link:"/habitat"
    },
    
    {
      image: pollution,
      title: "Pollution",
      description:
        "Pollution of aquatic habitats, particularly through plastic debris and chemicals, can harm turtles in a variety of ways. For example, turtles may accidentally ingest plastic debris, mistaking it for food, or become entangled in discarded fishing gear.",
      btnbg: "primary",
      link:"/pollution"
    },
    {
      image: climate,
      title: "Climate change",
      description:
        "Rising temperatures and changing weather patterns can impact turtle populations in a variety of ways, from altering nesting behaviors to changing the availability of food and water.",
      btnbg: "primary",
      link:"/climateChange"
    },

  ];
  
  const myStyle = {
    fontFamily: 'Roboto Condensed, sans-serif'
  };
  const myStyle1 = {
    fontFamily: 'League Mono, sans-serif'
                                                
  };

const Event = () => {
    return (
        <div className="event">
          <h3 style={myStyle1}>Turtle Awareness</h3>

          <div classname="aw_img">
             <img src={awareneesimg} alt="awareneesimg" width="1070px"/>
          </div>
           
       <p style={myStyle}>
          Turtle awareness refers to the knowledge and understanding of the biology, behavior, and conservation status of turtles. This includes knowledge of the different species of turtles and their habitats, as well as the threats they face from habitat loss, pollution, climate change, hunting, and the illegal wildlife trade.
          Awareness of turtle conservation issues is important because turtles are an important part of many ecosystems, serving as both predators and prey, and playing a vital role in maintaining the health of aquatic environments. Additionally, many species of turtles are endangered or critically endangered, and are at risk of extinction if action is not taken to protect them.
          Turtle awareness can involve learning about how to help protect turtle populations through conservation efforts such as habitat restoration, reducing plastic pollution, supporting legislation to protect turtles and their habitats, and supporting responsible tourism practices that do not harm turtle populations.
          Overall, turtle awareness is an important part of promoting conservation efforts and ensuring the long-term survival of these fascinating and important creatures.</p>

             <h3>Threats</h3>
     {/**Blog Cards**/}
          <Row>
            {BlogData.map((blg, index) => (
              <Col sm="6" lg="6" xl="3" key={index}>
                <Blog
                  image={blg.image}
                  title={blg.title}
                  text={blg.description}
                  color={blg.btnbg}
                />
                <Link to={blg.link}><button className='btn btn-primary'>Click Here</button></Link>
              </Col>
            ))}
          </Row>
        </div>
      );
}


export default Event