import React from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const restarant_list = Array.from(Array(10).keys());
const product_list = Array.from(Array(8).keys());

export default function OneRestaurant() {
  return (
    <div className="single_restaurant">
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Stack className="avatar_big_box">
            <Box className="top_text">
              <p>Texas De Brasil Restaurant</p>
              <Box className="single_search_big_box">
                <form className="single_search_form" action="" method="">
                  <input
                    type="search"
                    name="single_resSearch"
                    className="single_searchInput"
                    placeholder="Qidiruv"
                  />
                  <Button
                    className="single_button_search"
                    variant="contained"
                    sx={{
                      background: " #f8be69",
                      borderRadius: "0px 18px 18px 00px",
                      height: "33px",
                      "&:hover": {
                        backgroundColor: "#f8be69",
                        opacity: " 0.8",
                      },
                      "&:active": {
                        backgroundColor: "#f8be69",
                        opacity: "0.6",
                      },
                    }}
                    endIcon={<SearchIcon />}
                  >
                    Izlash
                  </Button>
                </form>
              </Box>
            </Box>
          </Stack>

          <Stack className=""></Stack>
          <Stack className=""></Stack>
          <Stack className=""></Stack>
        </Stack>
      </Container>
      <div className="review_for_restaurant"></div>
      <Container className="member_reviews"> </Container>
    </div>
  );
}
