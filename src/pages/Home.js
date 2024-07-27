import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/ABC.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Phycho</h1>
        <p>Stay true,Stay YOU</p>
        <Link to="/menu">
          <button>Explore</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;