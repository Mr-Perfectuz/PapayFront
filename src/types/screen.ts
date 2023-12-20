import { BoArticles } from "./boArticles";
import { Product } from "./products";
import { Restaurant } from "./user";

export interface AppRootState {
    homePage: HomePageState;
}

export interface HomePageState{
    topRestaurants: Restaurant[];
    bestRestaurants: Restaurant[];
    trendProducts: Product[];
    bestBoArticles: BoArticles[];
    trendBoArticles: BoArticles[];
    newsBoArticles: BoArticles[];

}