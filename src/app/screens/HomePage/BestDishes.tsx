import { MonetizationOn } from "@mui/icons-material";
import { Box, Container, Stack } from "@mui/material";
import React from "react";
export default function BestDishes() {
  return (
    <div className="best_dishes_frame">
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Box className="best_dishes_title">Trendagi Ovqatlar</Box>

          <Stack sx={{ mt: "43px" }} flexDirection={"row"}>
            <Box className="dish_box">
              <Stack className="dish_img">
                <Box className="dish_sale">Large size</Box>
                <Box className="view_btn">
                  Batafsil ko’rish
                  <img
                    className="left_arrow"
                    src="./icons/left_arrow.svg"
                    alt="arrow icon"
                  />
                </Box>
              </Stack>
              <Stack
                sx={{ width: "90%", mt: "18px" }}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Box className="dish_name">Korean Spicy Soup</Box>
                <Box className="dish_price">
                  <MonetizationOn />
                  15
                </Box>
              </Stack>
            </Box>
            <Box className="dish_box">
              <Stack className="dish_img dish_img2">
                <Box className="dish_sale">Large size</Box>
                <Box className="view_btn">
                  Batafsil ko’rish
                  <img
                    className="left_arrow"
                    src="./icons/left_arrow.svg"
                    alt="arrow icon"
                  />
                </Box>
              </Stack>
              <Stack
                sx={{ width: "90%", mt: "18px" }}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Box className="dish_name">Korean Spicy Soup</Box>
                <Box className="dish_price">
                  <MonetizationOn />
                  15
                </Box>
              </Stack>
            </Box>
            <Box className="dish_box">
              <Stack className="dish_img dish_img3">
                <Box className="dish_sale">Large size</Box>
                <Box className="view_btn">
                  Batafsil ko’rish
                  <img
                    className="left_arrow"
                    src="./icons/left_arrow.svg"
                    alt="arrow icon"
                  />
                </Box>
              </Stack>
              <Stack
                sx={{ width: "90%", mt: "18px" }}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Box className="dish_name">Korean Spicy Soup</Box>
                <Box className="dish_price">
                  <MonetizationOn />
                  15
                </Box>
              </Stack>
            </Box>
            <Box className="dish_box">
              <Stack className="dish_img dish_img4">
                <Box className="dish_sale">Large size</Box>
                <Box className="view_btn">
                  Batafsil ko’rish
                  <img
                    className="left_arrow"
                    src="./icons/left_arrow.svg"
                    alt="arrow icon"
                  />
                </Box>
              </Stack>
              <Stack
                sx={{ width: "90%", mt: "18px" }}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Box className="dish_name">Korean Spicy Soup</Box>
                <Box className="dish_price">
                  <MonetizationOn />
                  15
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
