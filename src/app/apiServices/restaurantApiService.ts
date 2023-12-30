import axious from "axios"
import assert from "assert"
import { serviceApi } from "../../lib/config"
import { Definer } from "../../lib/Definer"
import { Restaurant } from "../../types/user"
import { SearchObj } from "../../types/others"
class RestaurantApiService {
private readonly path: String
    constructor(){
        this.path = serviceApi
    }

    async getTopRestaurants(): Promise<Restaurant[]>{
        try {
            const url = "/restaurants?order=top&page=1&limit=4"
            let result = await axious.get(serviceApi + url, {withCredentials: true})
            assert.ok(result, Definer.general_err);
            console.log("state:", result.data.state)
            const top_restaurants : Restaurant[] = result.data.data;
        
            console.log("top_restaurants", top_restaurants)
            return top_restaurants;
        } catch (err: any) {
            console.log(`ERROR: getTopRestaurants ${err.message}`);
            throw err;
            
        }
    }
    async getBestRestaurants(data: SearchObj): Promise<Restaurant[]>{
        try {
            const url = `/restaurants?order=${data.order}&page=${data.page}&limit=${data.limit}`
            let result = await axious.get(serviceApi + url, {withCredentials: true})
            assert.ok(result, Definer.general_err);
            console.log("state:", result.data.state)
            const best_restaurants : Restaurant[] = result.data.data;
        
            console.log("best_restaurants:::", best_restaurants)
            return best_restaurants;
        } catch (err: any) {
            console.log(`ERROR: getBestRestaurants ${err.message}`);
            throw err;
            
        }
    }

    async getRestaurants(data: SearchObj): Promise<Restaurant[]>{
        try {
            const url = `/restaurants?order=${data.order}&page=${data.page}&limit=${data.limit}`
            let result = await axious.get(serviceApi + url, {withCredentials: true})
            assert.ok(result, Definer.general_err);
            console.log("state:", result.data.state)
            const restaurants : Restaurant[] = result.data.data;
        
            console.log("getRestaurants:::", restaurants) 
            return restaurants;
        } catch (err: any) {
            console.log(`ERROR: getRestaurants ${err.message}`);
            throw err;
            
        }
    }
    async getChosenRestaurants(id: string): Promise<Restaurant>{
        try {
            const url = `/restaurants/${id}`
            let result = await axious.get(serviceApi + url, {withCredentials: true})
            assert.ok(result, Definer.general_err);
            console.log("state:", result.data.state)
            const restaurant : Restaurant = result.data.data;
        
            console.log("getChosenRestaurants:::", restaurant) 
            return restaurant;
        } catch (err: any) {
            console.log(`ERROR: getChosenRestaurants ${err.message}`);
            throw err;
            
        }
    }
}

export default RestaurantApiService