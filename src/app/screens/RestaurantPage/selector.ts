import { createSelector } from "reselect";
import { AppRootState } from "../../../types/screen";

const selectRestaurantPage = (state: AppRootState) => state.restaurantPage;

export const retreiveTargetRestaurants = createSelector(
    selectRestaurantPage,
    (RestaurantPage) => RestaurantPage.targetRestaurants
)
export const retreiveRandomRestaurants = createSelector(
    selectRestaurantPage,
    (RestaurantPage) => RestaurantPage.randomRestaurants
)
export const retreiveChosenRestaurants = createSelector(
    selectRestaurantPage,
    (RestaurantPage) => RestaurantPage.chosenRestaurants
)
export const retreiveTargetProducts = createSelector(
    selectRestaurantPage,
    (RestaurantPage) => RestaurantPage.targetProducts
)
export const retreiveChosenDish = createSelector(
    selectRestaurantPage,
    (RestaurantPage) => RestaurantPage.chosenProduct
)