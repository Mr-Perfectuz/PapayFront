
import { BoArticle } from "./boArticles";
import { Follower, Following } from "./follow";
import { Order } from "./order";
import { Product } from "./products";
import { Member, Restaurant } from "./user";

export interface AppRootState {
    homePage: HomePageState;
    restaurantPage : RestaurantPageState;
    ordersPage: OrdersPageState
    communityPage: CommunityPageState
    memberPage: MemberPageState
}

export interface HomePageState{
    topRestaurants: Restaurant[];
    bestRestaurants: Restaurant[];
    trendProducts: Product[];
    bestBoArticle: BoArticle[];
    trendBoArticle: BoArticle[];
    newsBoArticle: BoArticle[];
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
export interface OrdersPageState{
    pausedOrders: Order[];
    processOrders: Order[];
    finishedOrders: Order[];
    
}

// CommunityPageState 
export interface CommunityPageState{
    targetBoArticle: BoArticle[];
    
}

// MemberPageState 
export interface MemberPageState{
    chosenMember: Member | null;
    chosenMemberBoArticle: BoArticle[];
    chosenSingleBoArticle: BoArticle | null;
    memberFollowers: Follower[];
    memberFollowings: Following[];

    
}

