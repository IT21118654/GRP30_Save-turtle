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

             <h3>Turtle Species</h3>
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

export default TurtleHome