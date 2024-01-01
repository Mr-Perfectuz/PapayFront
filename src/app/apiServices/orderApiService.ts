import { serviceApi } from "../../lib/config";
import assert from "assert";
import axios from "axios";
import { Definer } from "../../lib/Definer";
import { Member } from "../../types/user";
import { CartItem } from "../../types/others";



class orderApiService {
    private readonly path: string;

    constructor(){
        this.path = serviceApi;
    }



public async createOrder(data: CartItem[]){
    try {

    const result= await axios.post(this.path + "/orders/create ", {withCredentials: true});
    console.log("state: ", result.data.state);
    assert.ok(result?.data, Definer.general_err);
    assert.ok(result?.data?.state !== "fail", result?.data?.message);

    const member: Member = result.data.data;


    } catch (err: any) {  
      console.log(`ERROR: createOrder ${err.message}`);
      throw err;
    }
  }



}


export default orderApiService

