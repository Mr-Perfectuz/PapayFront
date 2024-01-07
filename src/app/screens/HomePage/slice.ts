import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../../types/screen";

const initialState: HomePageState = {
    topRestaurants: [],
    bestRestaurants: [],
    trendProducts: [],
    bestBoArticle: [],
    trendBoArticle: [],
    newsBoArticle: [],
}

const HomePageSlice = createSlice({
    name: 'homePage',
    initialState,
    reducers: {
        setTopRestaurants: (state, action) => {
            state.topRestaurants = action.payload
        },
        setBestRestaurants: (state, action) => {
            state.bestRestaurants = action.payload
        },
        setTrendProducts: (state, action) => {
            state.trendProducts = action.payload
        },
        setBestBoArticle: (state, action) => {
            state.bestBoArticle = action.payload
        },
        setTrendBoArticle: (state, action) => {
            state.trendBoArticle = action.payload
        },
        setNewsBoArticle: (state, action) => {
            state.newsBoArticle = action.payload
        },
    }

})

export const  {
    setTopRestaurants, 
    setBestRestaurants, 
    setTrendProducts, 
    setBestBoArticle,
    setTrendBoArticle,
    setNewsBoArticle
} = HomePageSlice.actions;

const HomePageReducer = HomePageSlice.reducer;
export default HomePageReducer;