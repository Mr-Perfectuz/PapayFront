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
export const retreiveBestBoArticle = createSelector(
    selectHomePage,
    (HomePage) => HomePage.bestBoArticle
)
export const retreiveTrendBoArticle = createSelector(
    selectHomePage,
    (HomePage) => HomePage.trendBoArticle
)
export const retreiveNewsBoArticle = createSelector(
    selectHomePage,
    (HomePage) => HomePage.newsBoArticle
)