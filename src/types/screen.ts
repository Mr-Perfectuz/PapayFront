import { BoArticles } from "./boArticles";
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
export interface OrdersPageState{
    pausedOrders: Order[];
    processOrders: Order[];
    finishedOrders: Order[];
    
}

// CommunityPageState 
export interface CommunityPageState{
    targetBoArticles: BoArticles[];
    
}

// MemberPageState 
export interface MemberPageState{
    chosenMember: Member | null;
    chosenMemberBoArticles: BoArticles[];
    chosenSingleBoArticle: BoArticles | null;
    memberFollowers: Follower[];
    memberFollowings: Following[];

    
}

