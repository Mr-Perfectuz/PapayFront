import * as React from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrovBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Marginer from "../../components/marginer";
import Rating from "@mui/material/Rating";
import Checkbox from "@mui/material/Checkbox";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const review_list = Array.from(Array(10).keys());
const review_list_sm = Array.from(Array(10).keys());

export default function ChosenDish() {
  const lebel = { inputProps: { "aria-label": "Checkbox demo" } };
  const [value, setValue] = React.useState<number | null>(4);

  return (
    <div className="chosen_dish_page">
      <Container className="dish_container" sx={{ display: "flex" }}>
        <Stack className="chosen_dish_slider_left">
          <Stack
            style={{
              width: "611px",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box className="prev_btns chosen_dish_prev">
              <ArrovBackIosNewIcon sx={{ fontSize: 40, color: "#fff" }} />
            </Box>
            <Swiper
              className="chosenDish_wrapper"
              slidesPerView={1}
              navigation={{
                nextEl: ".chosen_dish_next",
                prevEl: ".chosen_dish_prev",
              }}
            >
              {review_list.map((ele, index) => {
                return (
                  <SwiperSlide
                    style={{ cursor: "pointer", width: "110px" }}
                    key={index}
                    className="restaurant_avatars"
                  >
                    <img
                      className="chosenDish_img"
                      src="/restaurant/chosenDish.png"
                      alt="res img"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>

            <Box className="prev_btns chosen_dish_next">
              <ArrowForwardIosIcon sx={{ fontSize: 40, color: "#fff" }} />
            </Box>
          </Stack>
          <Stack flexDirection={"row"} className="chosendish_swimer_sm_srapper">
            <Swiper
              slidesPerView={3}
              // centeredSlides={false}
              spaceBetween={10}
              navigation={{
                nextEl: ".restaurant_next",
                prevEl: ".restaurant_prev",
              }}
            >
              {review_list_sm.map((ele, index) => {
                return (
                  <SwiperSlide
                    style={{ cursor: "pointer", width: "110px" }}
                    key={index}
                    className="restaurant_avatars"
                  >
                    <img
                      className="review_sm_img"
                      src="/restaurant/bd_img1.png"
                      alt="res img"
                    />
                    <span className="avatar_text">Chinor</span>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Stack>
        </Stack>

        <Stack className="chosen_dish_slider_right">
          <Box className="chosen_dish_text">Qovurilgan Go’sht</Box>
          <Box className="chosen_dish_text_desc">ShamsFood </Box>
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box
              sx={{
                "& > legend": { mt: 2 },
                mt: "10px",
                mb: "20px",
              }}
            >
              <Rating
                name="size-large"
                precision={0.5}
                size="large"
                defaultValue={3.5}
              />
            </Box>
            <Stack flexDirection={"row"}>
              <Box>
                <Checkbox
                  checked={true}
                  checkedIcon={<Favorite style={{ color: "red" }} />}
                  icon={<FavoriteBorder />}
                />{" "}
                <span>98ta</span>
              </Box>
              <Box className="removed_eve_box">
                <RemoveRedEyeIcon />
                <span>98ta</span>
              </Box>
            </Stack>
          </Stack>
          <Box className="chosen_dish_text_extra">
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy.
          </Box>
          <Marginer width="300" bg="#000" height="2" direction="horizontal" />
          <Stack className="chosen_dish_text_price" flexDirection={"row"}>
            <span>Narx:</span>
            <span>UZD 15</span>
          </Stack>
          <Stack alignItems={"center"} justifyContent={"center"}>
            <Button className="chosenDish_btn" variant="contained">
              Savatga qo’shish
            </Button>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
