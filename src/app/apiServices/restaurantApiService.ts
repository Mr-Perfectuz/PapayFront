import axious from "axios"
import assert from "assert"
import { serviceApi } from "../../lib/config"
import { Definer } from "../../lib/Definer"
class RestaurantApiService {
private readonly path: String
    constructor(){
        this.path = serviceApi
    }

    async getTopRestaurants(){
        try {
            const url = "restaurants?order=top&page=1&limit=4"
            let result = await axious.get(this.path+url, {withCredentials: true})
            assert.ok(result, Definer.geteral_err);
            console.log("result:", result.data)
            
        } catch (err: any) {
            console.log(`ERROR: getTopRestaurants ${err.message}`);
            throw err;
            
        }
    }
}

export default RestaurantApiService