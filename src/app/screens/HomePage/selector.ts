import { createSelector } from "reselect";
import { AppRootState } from "../../../types/screen";

const selectHomePage = (state: AppRootState) => state.homePage;
export const retreiveTopRestaurants = createSelector(
    selectHomePage,
    (HomePage) => HomePage.topRestaurants
)
export const retreiveBestRestaurants = createSelector(
    selectHomePage,
    (HomePage) => HomePage.bestRestaurants
)
export const retreiveTrendProducts = createSelector(
    selectHomePage,
    (HomePage) => HomePage.trendProducts
)
export const retreiveBestBoArticles = createSelector(
    selectHomePage,
    (HomePage) => HomePage.bestBoArticles
)
export const retreiveTrendBoArticles = createSelector(
    selectHomePage,
    (HomePage) => HomePage.trendBoArticles
)
export const retreiveNewsBoArticles = createSelector(
    selectHomePage,
    (HomePage) => HomePage.newsBoArticles
)