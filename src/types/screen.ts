import { BoArticles } from "./boArticles";
import { Order } from "./order";
import { Product } from "./products";
import { Restaurant } from "./user";

export interface AppRootState {
    homePage: HomePageState;
    restaurantPage : RestaurantPageState;
    ordersPage: OrdersPageState
}

export interface HomePageState{
    topRestaurants: Restaurant[];
    bestRestaurants: Restaurant[];
    trendProducts: Product[];
    bestBoArticles: BoArticles[];
    trendBoArticles: BoArticles[];
    newsBoArticles: BoArticles[];
}

// RESTAURANT PAGE
export interface RestaurantPageState{
    targetRestaurants: Restaurant[];
    randomRestaurants: Restaurant[];
    chosenRestaurants: Restaurant | null;
    targetProducts: Product[];
    chosenProduct: Product| null;
}


// ORDERS PAGE
// RESTAURANT PAGE
export interface OrdersPageState{
    pausedOrders: Order[];
    processOrders: Order[];
    finishedOrders: Order[];
    
}
