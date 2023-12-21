import { createSelector } from "reselect";
import { AppRootState } from "../../../types/screen";

const selectHomePage = (state: AppRootState) => state.homePage;
export const retreiveTopRestaurants = createSelector(
    selectHomePage,
    (HomePage) => HomePage.topRestaurants
)
export const retreivebestRestaurants = createSelector(
    selectHomePage,
    (HomePage) => HomePage.bestRestaurants
)
export const retreivetrendProducts = createSelector(
    selectHomePage,
    (HomePage) => HomePage.trendProducts
)
export const retreivebestBoArticles = createSelector(
    selectHomePage,
    (HomePage) => HomePage.bestBoArticles
)
export const retreivetrendBoArticles = createSelector(
    selectHomePage,
    (HomePage) => HomePage.trendBoArticles
)
export const retreivenewsBoArticles = createSelector(
    selectHomePage,
    (HomePage) => HomePage.newsBoArticles
)