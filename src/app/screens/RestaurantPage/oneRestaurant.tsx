import React from "react";
import {
  Badge,
  Box,
  Button,
  Container,
  Stack,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrovBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { MonetizationOn } from "@mui/icons-material";
import Favorite from "@mui/icons-material/Favorite";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Rating from "@mui/material/Rating";
// import { Map, Marker, GoogleApiWrapper } from ‘google-maps-react’
const restarant_list = Array.from(Array(10).keys());
const product_list = Array.from(Array(8).keys());

export default function OneRestaurant() {
  const [value, setValue] = React.useState<number | null>(4);
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

          <Stack
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              marginTop: "35px",
            }}
          >
            <Box className="prev_btns restaurant_prev">
              <ArrovBackIosNewIcon sx={{ fontSize: 40, color: "#fff" }} />
            </Box>
            <Swiper
              className="restaurant_avatars_wrapper"
              slidesPerView={7}
              centeredSlides={false}
              spaceBetween={30}
              navigation={{
                nextEl: ".restaurant_next",
                prevEl: ".restaurant_prev",
              }}
            >
              {restarant_list.map((ele, index) => {
                return (
                  <SwiperSlide
                    style={{ cursor: "pointer", width: "110px" }}
                    key={index}
                    className="restaurant_avatars"
                  >
                    <img
                      className="avatar_img"
                      src="/restaurant/bd_img1.png"
                      alt="res img"
                    />
                    <span className="avatar_text">Chinor</span>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            <Box className="prev_btns restaurant_next">
              <ArrowForwardIosIcon sx={{ fontSize: 40, color: "#fff" }} />
            </Box>
          </Stack>

          <Stack
            flexDirection={"row"}
            justifyContent={"flex-end"}
            sx={{ width: "100%", mt: "65px" }}
          >
            <Box className="dish_filter_box">
              <Button variant="contained" color="secondary">
                new
              </Button>
              <Button variant="contained" color="secondary">
                price
              </Button>
              <Button variant="contained" color="secondary">
                likes
              </Button>
              <Button variant="contained" color="secondary">
                views
              </Button>
            </Box>
          </Stack>

          <Stack
            flexDirection={"row"}
            style={{
              width: "1320px",
              display: "flex",
              minHeight: "600px",
              marginTop: "60px",
            }}
          >
            <Stack className="dish_category_box" sx={{ width: "100px" }}>
              <div className="dish_category_main">
                <Button variant="contained" color="secondary">
                  boshqa
                </Button>
                <Button variant="contained" color="secondary">
                  desert
                </Button>
                <Button variant="contained" color="secondary">
                  ichimlik
                </Button>
                <Button variant="contained" color="secondary">
                  salad
                </Button>
                <Button variant="contained" color="secondary">
                  ovqatlar
                </Button>
              </div>
            </Stack>

            <Stack
              className="dish_wrapper"
              flexDirection={"row"}
              sx={{ width: "100%" }}
            >
              {/* PRODUCT LIST MAPPING */}
              {product_list.map((ele, index) => {
                return (
                  <Box className="dish_box">
                    <Stack
                      className="dish_img"
                      style={{ width: "273px", height: "275px" }}
                    >
                      <Box className="dish_sale">Large size</Box>
                      <Box
                        className="view_btn_one"
                        sx={{
                          width: "200px",
                          backgroundImage: `url{"/public/restaurant/bd_img1.png}`,
                        }}
                      >
                        <Stack
                          className="view_btn_inner"
                          flexDirection={"row"}
                          alignItems={"center"}
                          sx={{ position: "relative" }}
                        >
                          <Button
                            className="like_view_btn"
                            sx={{
                              background: "#B4B4B4",
                              border: "1px solid #B4B4B4 ",
                              borderRadius: "50%",
                              width: "40px",
                              height: "40px",
                              minWidth: "40px",
                              marginRight: "20px",
                            }}
                          >
                            <Badge badgeContent={8} color="primary">
                              <Checkbox
                                icon={
                                  <FavoriteBorder
                                    style={{
                                      color: "white",
                                      width: "24px",
                                      height: "24px",
                                    }}
                                  />
                                }
                                // id={`${index}`}
                                checkedIcon={
                                  <Favorite style={{ color: "red" }} />
                                }
                              ></Checkbox>
                            </Badge>
                          </Button>
                          <Button
                            className="like_badge_btn"
                            sx={{
                              border: "1px solid #e3c08d",
                              background: "#BB2FC8",

                              width: "40px",
                              height: "40px",
                            }}
                          >
                            <IconButton aria-label="card" id="basic-button">
                              <Badge color="primary">
                                <img
                                  src="/icons/shopping-cart.svg"
                                  alt="shopping card icon"
                                />
                              </Badge>
                            </IconButton>
                          </Button>

                          <Button
                            className="like_view_btn"
                            sx={{
                              background: "#B4B4B4",
                              border: "1px solid #B4B4B4 ",
                              borderRadius: "50%",
                              width: "40px",
                              height: "40px",
                              minWidth: "40px",
                              marginLeft: "20px",
                            }}
                          >
                            <Badge badgeContent={8} color="primary">
                              <Checkbox
                                icon={
                                  <RemoveRedEyeIcon
                                    style={{ color: "white" }}
                                  />
                                }
                              ></Checkbox>
                            </Badge>
                          </Button>
                        </Stack>
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
                );
              })}
            </Stack>
          </Stack>
        </Stack>
      </Container>
      <div className="review_for_restaurant">
        <Box className="review_text">Oshxona haqida fikrlar</Box>
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-around"}
          sx={{
            marginBottom: "100px",
            width: "1320px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Stack className="review_box">
            <img
              className="review_img"
              src="/restaurant/review1.png"
              alt="review text"
            />
            <Box className="review_name">Eminova Dilnoza</Box>
            <Box className="review_status">Foydalanuvchi</Box>
            <Box className="review_comment">
              Menga bu oshxonaning taomlari juda yoqadi. <br /> Hammaga tafsiya
              qilaman!!!
              <Box
                sx={{
                  "& > legend": { mt: 2 },
                  mt: "10px",
                  mb: "20px",
                  textAlign: "center",
                }}
              >
                <Rating
                  name="simple-controlled"
                  value={value}
                  size="large"
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </Box>
            </Box>
          </Stack>
          <Stack className="review_box">
            <img
              className="review_img"
              src="/restaurant/review1.png"
              alt="review text"
            />
            <Box className="review_name">Eminova Dilnoza</Box>
            <Box className="review_status">Foydalanuvchi</Box>
            <Box className="review_comment">
              Menga bu oshxonaning taomlari juda yoqadi. <br /> Hammaga tafsiya
              qilaman!!!
              <Box
                sx={{
                  "& > legend": { mt: 2 },
                  mt: "10px",
                  mb: "20px",
                  textAlign: "center",
                }}
              >
                <Rating
                  name="simple-controlled"
                  value={value}
                  size="large"
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </Box>
            </Box>
          </Stack>
          <Stack className="review_box">
            <img
              className="review_img"
              src="/restaurant/review1.png"
              alt="review text"
            />
            <Box className="review_name">Eminova Dilnoza</Box>
            <Box className="review_status">Foydalanuvchi</Box>
            <Box className="review_comment">
              Menga bu oshxonaning taomlari juda yoqadi. <br /> Hammaga tafsiya
              qilaman!!!
              <Box
                sx={{
                  "& > legend": { mt: 2 },
                  mt: "10px",
                  mb: "20px",
                  textAlign: "center",
                }}
              >
                <Rating
                  name="simple-controlled"
                  value={value}
                  size="large"
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </Box>
            </Box>
          </Stack>
          <Stack className="review_box">
            <img
              className="review_img"
              src="/restaurant/review1.png"
              alt="review text"
            />
            <Box className="review_name">Eminova Dilnoza</Box>
            <Box className="review_status">Foydalanuvchi</Box>
            <Box className="review_comment">
              Menga bu oshxonaning taomlari juda yoqadi. <br /> Hammaga tafsiya
              qilaman!!!
              <Box
                sx={{
                  "& > legend": { mt: 2 },
                  mt: "10px",
                  mb: "20px",
                  textAlign: "center",
                }}
              >
                <Rating
                  name="simple-controlled"
                  value={value}
                  size="large"
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </Box>
            </Box>
          </Stack>
        </Stack>
      </div>

      <Container className="about_res">
        <Stack alignItems={"center"} flexDirection={"column"}>
          <Box className="about_res_title">Oshxona haqida</Box>
          <Stack flexDirection={"row"}>
            <Stack className="res_img_box">
              <Box className="about_res_name">Rayhon.</Box>
              <Box className="about_res_info">
                Biz sizlarga xizmat ko’rsatayotganimizdan bag’oyatda xursadmiz.
                Bizning xaqimizda: O’z faoliyatimizni 1945 - yilda boshlaganmiz
                vaxokazo vaxokazo vaxokazo...
              </Box>
            </Stack>
            <Stack flexDirection={"column"}>
              <Stack className="about_res_box" flexDirection={"row"}>
                <img
                  className="res_Img"
                  src="/restaurant/about_res.png"
                  alt="restaurant img"
                />
                <Stack sx={{ ml: "20px", mt: "0px" }}>
                  <Box className="res_txt">Bizning moxir oshpazlarimiz.</Box>
                  <Box className="res_txt_des">
                    Lorem ipsum dolor sit amet, consectetuer <br /> adipiscing
                    elit, sed diam nonummy nibh...
                  </Box>
                </Stack>
              </Stack>
              <Stack
                className="about_res_box"
                flexDirection={"row"}
                sx={{ mt: "20px" }}
              >
                <img
                  className="res_Img"
                  src="/restaurant/about_res2.png"
                  alt="restaurant img"
                />
                <Stack sx={{ ml: "20px", mt: "0px" }}>
                  <Box className="res_txt">Bizning moxir oshpazlarimiz.</Box>
                  <Box className="res_txt_des">
                    Lorem ipsum dolor sit amet, consectetuer <br /> adipiscing
                    elit, sed diam nonummy nibh...
                  </Box>
                </Stack>
              </Stack>
              <Stack
                className="about_res_box"
                flexDirection={"row"}
                sx={{ mt: "20px" }}
              >
                <img
                  className="res_Img"
                  src="/restaurant/about_res3.png"
                  alt="restaurant img"
                />
                <Stack sx={{ ml: "20px", mt: "0px" }}>
                  <Box className="res_txt">Bizning moxir oshpazlarimiz.</Box>
                  <Box className="res_txt_des">
                    Lorem ipsum dolor sit amet, consectetuer <br /> adipiscing
                    elit, sed diam nonummy nibh...
                  </Box>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Box className="about_res_title">Oshxona Manzili</Box>
          <Stack sx={{ mb: "50px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.4377562746317!2d69.22631931677766!3d41.321093427628114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b9a0a33281d%3A0x9c5015eab678e435!2z0KDQsNC50YXQvtC9!5e0!3m2!1sen!2skr!4v1700548643294!5m2!1sen!2skr"
              width="1200"
              height="600"
              style={{ border: "0" }}
              // allowfullscreen=""
              loading="lazy"
              // referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
