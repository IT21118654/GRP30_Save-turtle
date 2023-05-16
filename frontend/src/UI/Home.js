import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/images/home/turtle1.png";
import "../styles/home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Save Turtles </h1>
        <p> Treasure of the Ocean</p>
        
        <Link to="/TurtleHome">
          <button> See Turtles </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
