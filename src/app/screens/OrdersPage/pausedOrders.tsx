import TabPanel from "@mui/lab/TabPanel";
import { Box, Button, Stack } from "@mui/material";
import React from "react";

//REDUX

import { serviceApi } from "../../../lib/config";
import {
  sweetErrorHandling,
  sweetFailureProvider,
} from "../../../lib/sweetAlert";
import { Product } from "../../../types/products";
import { Order } from "../../../types/order";

//REDUX
import { createSelector } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { retreivePausedOrders } from "./selector";
import OrderApiService from "../../apiServices/orderApiService";
import { verifierMemberData } from "../../apiServices/vertify";

//REDUX SELECTORS
const pausedOrdersRetriever = createSelector(
  retreivePausedOrders,
  (pausedOrders) => ({ pausedOrders })
);

export default function PausedOrders(props: any) {
  /**  INITIALIZATION */

  const { pausedOrders } = useSelector(pausedOrdersRetriever);

  // HANDLERS
  const deleteOrderHandler = async (event: any) => {
    try {
      const order_id = event.target.value;
      const data = { order_id: order_id, order_status: "DELETED" };

      if (!verifierMemberData) {
        sweetFailureProvider("Please login first", true);
      }

      let confirmation = window.confirm(
        "Buyurtmani bekor qilishni istaysizmi ?"
      );
      if (confirmation) {
        const orderService = new OrderApiService();
        await orderService.updateOrderStatus(data);
        props.setOrderRebuild(new Date());
      }
    } catch (err) {
      console.log("deleteOrderHandler, ERROR::", err);
      sweetErrorHandling(err).then();
    }
  };

  const processOrderHandler = async (event: any) => {
    try {
      const order_id = event.target.value;
      const data = { order_id: order_id, order_status: "PROCESS" };

      if (!verifierMemberData) {
        sweetFailureProvider("Please login first", true);
      }

      let confirmation = window.confirm(
        "Buyurtmangizni to'lashni tasdiqlaysizmi ?"
      );
      if (confirmation) {
        const orderService = new OrderApiService();
        await orderService.updateOrderStatus(data);
        props.setOrderRebuild(new Date());
      }
    } catch (err) {
      console.log("deleteOrderHandler, ERROR::", err);
      sweetErrorHandling(err).then();
    }
  };

  return (
    <TabPanel value="1">
      <Stack className="finishedOrder_wrapper">
        {pausedOrders?.map((order: Order, index) => {
          return (
            <Box className="order_main_box" key={index}>
              <Box className="order_box_scroll">
                {order.order_items.map((item) => {
                  const product: Product = order.product_data.filter(
                    (ele) => ele._id === item.product_id
                  )[0];
                  const image_path = `${serviceApi}/${product.product_images[0]}`;
                  return (
                    <Stack flexDirection={"column"}>
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
                <Stack className="dish_calc_extra" flexDirection={"row"}>
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
                    onClick={deleteOrderHandler}
                    variant="contained"
                    color="secondary"
                    sx={{
                      borderRadius: "10px",
                      marginRight: "10px",
                      marginLeft: "10px",
                      marginTop: "5px",
                      marginBottom: "5px",
                    }}
                  >
                    Bekor qilish
                  </Button>
                  <Button
                    value={order._id}
                    onClick={processOrderHandler}
                    variant="contained"
                    sx={{
                      borderRadius: "10px",
                      marginTop: "5px",
                      marginBottom: "5px",
                    }}
                  >
                    To'lash
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
