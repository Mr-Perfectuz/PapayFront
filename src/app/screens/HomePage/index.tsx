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
import { Dispatch, createSelector } from "@reduxjs/toolkit";

import { setTopRestaurants, setBestRestaurants } from "./slice";

import { Restaurant } from "../../../types/user";
import RestaurantApiService from "../../apiServices/restaurantApiService";
import { useDispatch, useSelector } from "react-redux";

// REDUX SLICE
const actionDispatch = (dispatch: Dispatch) => ({
  setTopRestaurants: (data: Restaurant[]) => dispatch(setTopRestaurants(data)),
  setBestRestaurants: (data: Restaurant[]) =>
    dispatch(setBestRestaurants(data)),
});

export default function HomePage() {
  /**  INITIALIZATION */
  const { setTopRestaurants, setBestRestaurants } = actionDispatch(
    useDispatch()
  );

  useEffect(() => {
    // backend data request => data
    const restaurantApiService = new RestaurantApiService();
    restaurantApiService
      .getTopRestaurants()
      .then((data) => {
        setTopRestaurants(data);
      })
      .catch((err) => console.log(err));

    restaurantApiService
      .getBestRestaurants({
        page: 1,
        limit: 4,
        order: "mb_point",
      })
      .then((data) => {
        setBestRestaurants(data);
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
