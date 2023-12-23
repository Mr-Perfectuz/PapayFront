import axious from "axios"
import assert from "assert"
import { serviceApi } from "../../lib/config"
import { Definer } from "../../lib/Definer"
import { Restaurant } from "../../types/user"
class RestaurantApiService {
private readonly path: String
    constructor(){
        this.path = serviceApi
    }

    async getTopRestaurants(){
        try {
            const url = "/restaurants?order=top&page=1&limit=4"
            let result = await axious.get(serviceApi + url, {withCredentials: true})
            assert.ok(result, Definer.geteral_err);
            console.log("state:", result.data.state)
            const top_restaurants : Restaurant[] = result.data.data;
        
            console.log("top_restaurants", top_restaurants)
            return top_restaurants;
        } catch (err: any) {
            console.log(`ERROR: getTopRestaurants ${err.message}`);
            throw err;
            
        }
    }
}

export default RestaurantApiService