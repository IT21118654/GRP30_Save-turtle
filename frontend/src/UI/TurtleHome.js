import React from 'react'
import { Col, Row } from "reactstrap";
import SalesChart from "../components/dashboard/SalesChart";
import Feeds from "../components/dashboard/Feeds";
import ProjectTables from "../components/dashboard/ProjectTable";
import { Link } from 'react-router-dom';

import Blog from "../components/dashboard/Blog";
import bg1 from "../assets/images/bg/greenturtle.jpg";
import bg2 from "../assets/images/bg/Hawksbill.jpg";
import bg3 from "../assets/images/bg/leatherback.webp";
import bg4 from "../assets/images/bg/loggerhead.jpg";
import bg5 from "../assets/images/bg/oliveridley.jpg";
import bg6 from "../assets/images/bg/turtleConservation.jpg";
import bg7 from "../assets/images/bg/Untitled-1.png";
import bg8 from "../assets/images/bg/specialist1.svg";
import bg9 from "../assets/images/bg/goeco.webp";


const BlogData = [
    {
      image: bg1,
      title: "Olive Redley",
      description:
        "Olive/Greyish-green with a heart-shaped carapace (top shell) having 5-9 scutes.",
      btnbg: "primary",
      link:"/oliveridley"
    },
    {
      image: bg2,
      title: "Hawksbill",
      description:
        "Hawksbill turtles have mottled shells consisting of an irregular combination of shades of amber, orange,.",
      btnbg: "primary",
      link:"/hawksbill"
    },
    {
      image: bg3,
      title: "Leatherback",
      description:
        "They are the only species of sea turtle that lack scales and a hard shell. They are named for their tough.",
      btnbg: "primary",
      link:"/leatherback"
    },
    {
      image: bg4,
      title: "Loggerhead",
      description:
        "Loggerhead turtles have large heads with powerful jaws. The top shell (carapace) is.",
      btnbg: "primary",
      link:"/loggerhead"
    },
    {
        image: bg5,
        title: "Green",
        description:
          "Green turtles are the largest of all the hard-shelled sea turtles, but have a comparatively.",
        btnbg: "primary",
        link:"/green"
      },
  ];

const TurtleHome = () => {
    return (
        <div>
          <h3>Introduction</h3>
       <p>Marine turtles are a flourishing species of creatures that have watched the dinosaurs' rise and collapse.
         They have been on the planet for nearly 100 million years and have survived in large numbers until recently. 
         They originated from huge tortoise-like creatures that lived on land. Their body is made up of a head, a short neck, two long fore flippers, two small and rounded rear flippers, and a tail. The upper and lower carapaces form a protective structure (box) for internal organs. 
         They are unable to retract their head and limbs within themselves, unlike tortoises and freshwater terrapins. Although marine turtles lack teeth, their sharp, beak-like jaws may crush, rip, or bite depending on their nutrition, which differs by species.</p>

         <p>Turtles are cold-blooded creatures since they are reptiles (Class: Reptilia, Order: Chelonia). 
          As a result, their body temperature is determined by their surroundings. Marine turtles ''sunbathe'' at the sea's surface in the morning to raise their body temperature. 
          Marine turtles ''sunbathe'' at the sea's surface in the morning to raise their body temperature. 
          They have lungs that allow them to breathe air. Every - 30 minutes, turtles come to the surface to breathe. 
          They have evolved extremely well suited to surviving in a marine environment over millions of years. 
          Marine turtles are quick and agile swimmers because to their strong and powerful oar-like fore flippers, rudder-like rear flippers, and flattened, streamlined shells.</p>

          <p>Only when the females come ashore to breed do sea turtles leave the water.
             They can be observed ''sunbathing'' on beaches or rocks in some regions. 
             Males spend their whole lives at sea, and nothing is known about their behaviors. 
             Most species are extremely migratory, travelling thousands of kilometers between breeding and feeding areas. 
             We don't know precisely how long turtles live, although they're thought to live for more than 80 years. 
             The time it takes for a species to reach sexual maturity varies. Olive Ridley Turtle, the smallest, takes 7 to 15 years, whereas herbivorous Green Turtle could require 50 years !. 
             The remaining three species, including the biggest Leatherback Turtle, require 20 to 30 years. It is difficult to discern between male and female turtles until they reach adulthood. 
             Male turtles have a lengthy tail and a large claw on each fore flipper. It is yet unknown how an egg-laden female finds her way to her nesting beach. Some experts believe that marine turtles are magnetically sensitive and utilize it to navigate.
             They are frequently discovered not just on the same sandy beach, but also on the same stretch of beach that they frequented in prior years.Among the sea turtle species were hybrids and Albino individuals. Seven species of these ocean-dwelling reptiles survive today, divided into two families, Cheloniidae and Dermochelyidea. All of them are now threatened with extinction as a result of man's harmful behavior. </p>

              <div style = {{  marginBottom : 50 }}>
             <h3>Checkout Research Reports and Papers of Marine Turtles in Sri Lanka</h3>
             <a style = {{  marginLeft : 15 }} className='btn btn-dark' href="https://www.researchgate.net/publication/237091794_Sea_turtle_conservation_in_Sri_Lanka_assessment_of_knowledge_attitude_and_prevalence_of_consumptive_use_of_turtle_products_among_coastal_communities">
              Sea Turtle Conservation in Sri Lanka</a>
              <a style = {{  marginLeft : 15 }} className='btn btn-success' href="https://www.bmis-bycatch.org/system/files/zotero_attachments/library_1/UJ3KQ7J5%20-%20IOTC-2017-WPEB13-36.pdf">
              Marine Turtles of Sri Lanka</a>
              <a style = {{  marginLeft : 15 }} className='btn btn-danger' href="https://www.iotn.org/">
              Indian Ocean NewsLetter</a>
              <a style = {{  marginLeft : 15 }} className='btn btn-warning' href="https://www.academia.edu/5749611/Status_of_leatherback_turtles_in_Sri_Lanka">
              Status of leatherback turtles in Sri Lanka</a>
              <a style = {{  marginLeft : 15, marginTop: 15 }} className='btn btn-info' href="https://earthjournalism.net/stories/marine-turtles-in-sri-lanka-get-a-second-chance-while-nets-still-pose-risks">
              Marine Turtles in Sri Lanka Get a Second Chance While Nets Still Pose Risks</a>
             </div>
             <div style = {{  marginBottom : 50, marginTop: 50 }}>
             <h3>Checkout Some Marine Turtle Specialists</h3>
             <img style = {{  width: 500, height: 100, borderRadius: 400 }} src={bg6} alt=""/>
             <img  style = {{  width: 150, height: 150, borderRadius: 400, marginLeft : 15 }} src={bg7} alt=""/>
             <img  style = {{  width: 150, height: 150, borderRadius: 400, marginLeft : 20 }} src={bg8} alt=""/>
             <img  style = {{  width: 250, height: 70, borderRadius: 400, marginLeft : 20 }} src={bg9} alt=""/>
             </div>
             <h3>Turtle Species</h3>
     {/***Blog Cards***/}
          <Row className='mt-10'>
            {BlogData.map((blg, index) => (
              <Col className='mt-10' sm="6" lg="6" xl="3" key={index}>
                <Blog
                  image={blg.image}
                  title={blg.title}
                  text={blg.description}
                  color={blg.btnbg}
                />
                <Link to={blg.link}><button className='btn btn-primary mb-10'>Click Here</button></Link>
              </Col>
            ))}
          </Row>
        </div>
      );
}

export default TurtleHome