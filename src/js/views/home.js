import React from "react";
import "../../styles/home.css";
import CardPersonajes from "./CardPersonajes";
import CardPlanetas from "./CardPlanetas";
import Cardstarships from "./CardStarships";
import "../../styles/home.css";

export const Home = () => (
  <div className="text-center mt-5">
    <CardPlanetas />
    <CardPersonajes />
    <Cardstarships />
  </div>
);
