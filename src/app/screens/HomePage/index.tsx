import React from "react";
import Statistics from "./statistics";
import TopRestaurants from "./topRestaurants";
import BestDishes from "./BestDishes";
import BestRestaurants from "./BestRestaurants";
import Events from "./events";
import Recomendations from "./recomendations";
import "../../../css/home.css";
import Advertisement from "./advertisements";
export default function HomePage() {
  return (
    <div className="homePage">
      <Statistics />
      <TopRestaurants />
      <BestRestaurants />
      <BestDishes />
      <Advertisement />
      <Events />
      <Recomendations />
    </div>
  );
}
