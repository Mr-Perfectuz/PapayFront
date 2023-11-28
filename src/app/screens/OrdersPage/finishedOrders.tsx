import TabPanel from "@mui/lab/TabPanel";
import { Box, Stack } from "@mui/material";
import React from "react";

export default function FinishedOrders() {
  const pausedOrders = [
    [1, 2, 3],
    [1, 2, 3],
  ];
  return (
    <TabPanel value="3">
      <Stack className="finishedOrder_wrapper">
        {pausedOrders?.map((order, index) => {
          return (
            <Box className="order_main_box" key={index}>
              <Box className="order_box_scroll">
                {order.map((item, index) => {
                  return (
                    <Stack flexDirection={"column"} key={index}>
                      <Stack className="orderDishBox" flexDirection={"row"}>
                        <Stack flexDirection={"row"} className="order_inside">
                          <img
                            src="/others/sandwich.png"
                            alt="sandwich img"
                            className="orderDishIasmg"
                          />
                          <Box className="titleDish">Sandwich</Box>
                        </Stack>
                        <Box className="dish_calc">
                          <span>$7</span>
                          <span>x3</span>
                          <span>=</span>
                          <span>$21</span>
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
                  <span>$21</span>
                  <span>+</span>
                  <span>yetkazish xizmati</span>
                  <span>$2</span>
                  <span>=</span>
                  <span>jami narx</span>
                  <span>$23</span>
                </Stack>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </TabPanel>
  );
}
