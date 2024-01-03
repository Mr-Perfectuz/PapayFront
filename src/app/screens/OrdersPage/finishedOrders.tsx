import TabPanel from "@mui/lab/TabPanel";
import { Box, Stack } from "@mui/material";
import React from "react";
//REDUX
import { createSelector } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { retreiveFinishedOrders } from "./selector";
import { serviceApi } from "../../../lib/config";
import { Product } from "../../../types/products";

//REDUX SELECTORS
const finishedOrdersRetreiver = createSelector(
  retreiveFinishedOrders,
  (finishedOrders) => ({ finishedOrders })
);

export default function FinishedOrders(props: any) {
  /**  INITIALIZATION */

  const { finishedOrders } = useSelector(finishedOrdersRetreiver);

  return (
    <TabPanel value="3">
      <Stack className="finishedOrder_wrapper">
        {finishedOrders?.map((order, index) => {
          return (
            <Box className="order_main_box" key={index}>
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
                  className="finishedOrders_dish_calc_extra"
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
                </Stack>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </TabPanel>
  );
}
