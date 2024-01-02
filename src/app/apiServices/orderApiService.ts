import { serviceApi } from "../../lib/config";
import assert from "assert";
import axios from "axios";
import { Definer } from "../../lib/Definer";
import { Member } from "../../types/user";
import { CartItem } from "../../types/others";
import { Order } from "../../types/order";



class orderApiService {
    private readonly path: string;

    constructor(){
        this.path = serviceApi;
    }



public async createOrder(data: CartItem[]): Promise<Boolean> {
    try {
    const result= await axios.post(this.path + "/orders/create ", data,  {withCredentials: true});
    console.log("state: ", result.data.state);
    assert.ok(result?.data, Definer.general_err);
    assert.ok(result?.data?.state !== "fail", result?.data?.message);

    const order: any = result.data.data;
    console.log("order::", order)
    return true;
    } catch (err: any) {  
      console.log(`ERROR: createOrder ${err.message}`);
      throw err;
    }
  }

public async getMyOrders(order_status: string) : Promise<Boolean>{
    try {
    const result= await axios.get(this.path + `/orders?status=${order_status}`,  {withCredentials: true});
    console.log("state: ", result.data.state);
    assert.ok(result?.data, Definer.general_err);
    assert.ok(result?.data?.state !== "fail", result?.data?.message);

    const order: any = result.data.data;
    console.log("order::", order)
    return true;
    } catch (err: any) {  
      console.log(`ERROR: createOrder ${err.message}`);
      throw err;
    }
  }



}


export default orderApiService

