import React from "react";
import Discounted from "../components/Discounted";
import Featured from "../components/Featured";
import Highlights from "../components/Highlights";
import Landing from "../components/Landing";
import Explore from "../components/Explore";

const Home = () => {
  return (
    <div className="Home">
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
      <Explore />
    </div>
  );
};

export default Home;
