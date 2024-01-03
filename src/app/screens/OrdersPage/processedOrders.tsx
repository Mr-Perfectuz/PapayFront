import TabPanel from "@mui/lab/TabPanel";
import { Box, Button, Stack } from "@mui/material";
import React from "react";

//REDUX
import { createSelector } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { retreiveProcessOrders } from "./selector";
import { Order } from "../../../types/order";
import { Product } from "../../../types/products";
import { serviceApi } from "../../../lib/config";
import {
  sweetErrorHandling,
  sweetFailureProvider,
} from "../../../lib/sweetAlert";
import OrderApiService from "../../apiServices/orderApiService";

//REDUX SELECTORS
const processOrdersRetriever = createSelector(
  retreiveProcessOrders,
  (processOrders) => ({ processOrders })
);

export default function ProcessedOrders(props: any) {
  /**  INITIALIZATION */

  const { processOrders } = useSelector(processOrdersRetriever);

  // HANDLERS
  const finishOrderHandler = async (event: any) => {
    try {
      const order_id = event.target.value;
      const data = { order_id: order_id, order_status: "FINISHED" };

      if (!localStorage.getItem("member_data")) {
        sweetFailureProvider("Please login first", true);
      }

      let confirmation = window.confirm("Buyurtmani tasdiqlaysizmi ?");
      if (confirmation) {
        const orderService = new OrderApiService();
        await orderService.updateOrderStatus(data);
        props.setOrderRebuild(new Date());
      }
    } catch (err) {
      console.log("finishOrderHandler, ERROR::", err);
      sweetErrorHandling(err).then();
    }
  };

  return (
    <TabPanel value="2">
      <Stack className="finishedOrder_wrapper">
        {processOrders?.map((order: Order) => {
          return (
            <Box className="order_main_box" key={order._id}>
              <Box className="order_box_scroll">
                {order.order_items.map((item, index) => {
                  const product: Product = order.product_data.filter(
                    (ele) => ele._id === item.product_id
                  )[0];
                  const image_path = `${serviceApi}/${product.product_images[0]}`;
                  return (
                    <Stack flexDirection={"column"} key={index}>
                      <Stack className="orderDishBox" flexDirection={"row"}>
                        <Stack flexDirection={"row"} className="order_inside">
                          <img
                            src={image_path}
                            alt="sandwich img"
                            className="orderDishIasmg"
                          />
                          <Box className="titleDish">
                            {product.product_name}
                          </Box>
                        </Stack>
                        <Box className="dish_calc">
                          <span>${item.item_price}</span>
                          <span>x</span>
                          <span>{item.item_quentity}</span>
                          <span>=</span>
                          <span>${item.item_price * item.item_quentity}</span>
                        </Box>
                      </Stack>
                    </Stack>
                  );
                })}
                <Stack
                  className="prossededOrders_dish_calc_extra"
                  flexDirection={"row"}
                >
                  <span>mahsulot narxi</span>
                  <span>
                    ${order.order_total_amount - order.order_delivery_cost}
                  </span>
                  <span>+</span>
                  <span>yetkazish xizmati</span>
                  <span>${order.order_delivery_cost}</span>
                  <span>=</span>
                  <span>jami narx</span>
                  <span>${order.order_total_amount}</span>
                  <Button
                    value={order._id}
                    onClick={finishOrderHandler}
                    variant="contained"
                    sx={{
                      borderRadius: "10px",
                      marginTop: "5px",
                      marginBottom: "5px",
                      ml: "20px",
                    }}
                  >
                    Yakunlash
                  </Button>
                </Stack>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </TabPanel>
  );
}
