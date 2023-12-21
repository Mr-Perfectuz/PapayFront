import React, { useEffect } from "react";
import Statistics from "./statistics";
import TopRestaurants from "./topRestaurants";
import BestDishes from "./BestDishes";
import BestRestaurants from "./BestRestaurants";
import Events from "./events";
import Recomendations from "./recomendations";
import "../../../css/home.css";
import Advertisement from "./advertisements";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setTopRestaurants } from "./slice";
import { retreiveTopRestaurants } from "./selector";
import { Restaurant } from "../../../types/user";
import RestaurantApiService from "../../apiServices/restaurantApiService";

// REDUX SLICE
const actionDispatch = (dispatch: Dispatch) => ({
  setTopRestaurants: (data: Restaurant[]) => dispatch(setTopRestaurants(data)),
});

// REDUX SELECTOR
const topRestaurantRetriever = createSelector(
  retreiveTopRestaurants,
  (topRestaurants) => ({ topRestaurants })
);

export default function HomePage() {
  /**  INITIALIZATION */
  const { setTopRestaurants } = actionDispatch(useDispatch());
  const { topRestaurants } = useSelector(topRestaurantRetriever);
  console.log("topRestaurants", topRestaurants);

  // selector : store = > data

  useEffect(() => {
    // backend data request => data
    const restaurantApiService = new RestaurantApiService();
    restaurantApiService
      .getTopRestaurants()
      .then((data) => {
        // setTopRestaurants([data]);
      })
      .catch((err) => console.log(err));
  }, []);
  // slice : data = > store

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
