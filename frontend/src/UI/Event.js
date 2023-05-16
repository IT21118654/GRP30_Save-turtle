import React from 'react'
import { Col, Row } from "reactstrap";
import SalesChart from "../components/dashboard/SalesChart";
import Feeds from "../components/dashboard/Feeds";
import ProjectTables from "../components/dashboard/ProjectTable";
import { Link } from 'react-router-dom';


import Blog from "../components/dashboard/Blog";

import bg2 from "../assets/images/bg/nesting.jpeg";
import bg3 from "../assets/images/bg/run.jpeg";
import bg4 from "../assets/images/bg/walk.jpg";
import bg5 from "../assets/images/bg/clean.jpg";


const BlogData = [
    {
      image: bg2,
      title: "Nesting survey",
      description:
        "Volunteers can help monitor and protect turtle nests by conducting nesting surveys to document the number and location of nests.",
      btnbg: "primary",
      link:"/nesting"
    },
    
    {
      image: bg3,
      title: "Turtle Marathon",
      description:
        "Guided tours can help educate the public about turtle behavior and conservation efforts.",
      btnbg: "primary",
      link:"/marathon"
    },
    {
      image: bg4,
      title: "students rally",
      description:
        "Educating children about turtles can help raise awareness and inspire the next generation to become conservationists.",
      btnbg: "primary",
      link:"/studentrally"
    },
    {
        image: bg5,
        title: "Beach cleanup",
        description:
          "Many turtle species lay their eggs on beaches, so cleaning up beaches can help protect their nesting habitats..",
        btnbg: "primary",
        link:"/beach"
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
          <h3 style={myStyle1}>Events and Promotions</h3>
       <p style={myStyle}>Welcome to our events and promotions page, where we are passionate about protecting these fascinating and important creatures! 
        Turtles are incredible reptiles that have been around for millions of years, but they face many threats that are putting them at risk of extinction.
        Our mission is to raise awareness about the importance of turtles and their habitats, and to inspire people to take action to protect them.
         We believe that by working together, we can make a real difference in the fight to save turtles.</p>

         <p style={myStyle}>In addition to our ongoing work, we also conduct events and promotions to engage and educate the public. Our events range from beach cleanups to educational workshops,
             and our promotions include special discounts and offers for our supporters.We believe that everyone can make a difference in the fight to save turtles, 
             and we want to make it as easy and fun as possible to get involved. Whether you're a student, a scientist, a volunteer, or just someone who cares about the environment, 
             there are many ways you can participate in our events and promotions.</p>

          <p style={myStyle}>So please, take a look around our website, learn more about turtles and the threats they face, and find out how you can join us in our mission to protect these amazing creatures.
             Together, we can make a difference and ensure that turtles continue to thrive for generations to come!


        
</p>
        

             <h3>Upcoming Events</h3>
     {/***Blog Cards***/}
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