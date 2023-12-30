import { Product } from "./products";

export interface OrderIem{
_id: string,
item_quentity: number,
item_price: number,
order_id: string,
product_id: string
createdAt: Date,
updatedAt: Date,

}


export interface Order{
_id: string,
order_total_amount: number,
order_delivery_cost: number,
order_status: string,
mb_id: string,
createdAt: Date,
updatedAt: Date,
//From agregations
order_items: OrderIem[],
product_data: Product[]

}


