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
    const data: Restaurant[] = [
      {
        _id: "653395891b7f2d21a1503607",
        mb_nick: "Texas De Brazil",
        mb_phone: "234234332242",
        mb_password: "",
        mb_adress: "Tashketn Chilonzor",
        mb_type: "RESTAURANT",
        mb_image: "",
        mb_description: "",
        mb_status: "ACTIVE",
        mb_point: 0,
        mb_top: "Y",
        mb_views: 2,
        mb_likes: 1,
        mb_follow_cnt: 0,
        mb_subscriber_cnt: 1,
        me_liked: [],
        me_followed: [],
      },
      {
        _id: "653395891b7f2d21a1503607",
        mb_nick: "Texas De Brazil",
        mb_phone: "234234332242",
        mb_password: "",
        mb_adress: "Tashketn Chilonzor",
        mb_type: "RESTAURANT",
        mb_image: "",
        mb_description: "",
        mb_status: "ACTIVE",
        mb_point: 0,
        mb_top: "Y",
        mb_views: 2,
        mb_likes: 1,
        mb_follow_cnt: 0,
        mb_subscriber_cnt: 1,
        me_liked: [],
        me_followed: [],
      },
    ];
    setTopRestaurants(data);
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
