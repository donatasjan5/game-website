import React from "react";
import "./home.css";
import GameSwiper from "../components/GameSwiper";

const Home = ({ games }) => {
  return (
    <section id="home" className="home active">
      <div className="container-fluid">
        <div className="row">
          <GameSwiper games={games} />
        </div>
        <div className="row">
          <div className="col-lg-6">
            <h2 className="sectionTitle">Games on promotion</h2>
          </div>
          <div className="col-lg-6">
<a href="#" className="viewMore">
  View More Games
<i class="bi bi-arrow-right"></i>
</a>
</div>
        </div>
      </div>
    </section>
  );
};

export default Home;
