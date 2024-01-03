import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrovBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Marginer from "../../components/marginer";
import Rating from "@mui/material/Rating";
import Checkbox from "@mui/material/Checkbox";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useHistory, useParams } from "react-router-dom";

//REDUX
import { Dispatch, createSelector } from "@reduxjs/toolkit";
import {
  retreiveChosenProduct,
  retreiveChosenRestaurants,
} from "../RestaurantPage/selector";
//REDUX
import { useDispatch, useSelector } from "react-redux";
import { Restaurant } from "../../../types/user";
import { serviceApi } from "../../../lib/config";
import { setChosenProduct, setChosenRestaurants } from "./slice";
import RestaurantApiService from "../../apiServices/restaurantApiService";
import { ProductSearchObj, SearchObj } from "../../../types/others";
import assert from "assert";
import { Definer } from "../../../lib/Definer";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import { Product } from "../../../types/products";
import ProductApiService from "../../apiServices/productApiService";
import MemberApiService from "../../apiServices/memberApiService";
import { IconButton } from "@mui/joy";

const review_list = Array.from(Array(10).keys());
const review_list_sm = Array.from(Array(10).keys());

// REDUX SLICE
const actionDispatch = (dispatch: Dispatch) => ({
  setChosenProduct: (data: Product) => dispatch(setChosenProduct(data)),

  setChosenRestaurants: (data: Restaurant) =>
    dispatch(setChosenRestaurants(data)),
});

//REDUX SELECTORS
const chosenDishRetreiver = createSelector(
  retreiveChosenProduct,
  (chosenProduct) => ({ chosenProduct })
);
const chosenRestaurantsRetreiver = createSelector(
  retreiveChosenRestaurants,
  (chosenRestaurants) => ({
    chosenRestaurants,
  })
);

export default function ChosenDish(props: any) {
  const lebel = { inputProps: { "aria-label": "Checkbox demo" } };
  const [value, setValue] = React.useState<number | null>(4);

  // INITIALIZATIONS

  let { dish_id } = useParams<{ dish_id: string }>();
  const { setChosenProduct, setChosenRestaurants } = actionDispatch(
    useDispatch()
  );
  const { chosenProduct } = useSelector(chosenDishRetreiver);
  const { chosenRestaurants } = useSelector(chosenRestaurantsRetreiver);

  const [isLiked, setIsLiked] = useState(
    chosenProduct?.me_liked && chosenProduct?.me_liked[0]?.my_favorite
  );

  const dishRelatedProcess = async () => {
    try {
      const productService = new ProductApiService();
      const product: Product = await productService.getCHosenDish(dish_id);
      setChosenProduct(product);
      const restaurantService = new RestaurantApiService();
      const restaurant = await restaurantService.getChosenRestaurants(
        product.restaurant_mb_id
      );
      setChosenRestaurants(restaurant);
    } catch (err) {
      console.log("ERROR dishRelatedProcess", err);
    }
  };

  //  HANDLERS

  //TARGET LIKES
  const [productRebuild, setProductRedbuild] = useState<Date>(new Date());

  useEffect(() => {
    dishRelatedProcess().then();
  }, [productRebuild, isLiked]);

  const targetLikeProduct = async (e: any) => {
    try {
      console.log("targetLikeProduct function called");
      assert.ok(localStorage.getItem("member_data"), Definer.auth_err);

      const memberApiService = new MemberApiService();

      const like_result: any = await memberApiService.memberLikeTarget({
        like_ref_id: e.target.id,
        group_type: "product",
      });
      setIsLiked((prevIsLiked) => !prevIsLiked);
      assert.ok(like_result, Definer.general_err);
      await sweetTopSmallSuccessAlert("success", 700, false);
      setProductRedbuild(new Date());
    } catch (err: any) {
      console.log("targetLikeProduct, ERROR::", err);
      await sweetErrorHandling(err).then();
    }
  };
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
              {chosenProduct?.product_images.map((ele: string, index) => {
                const image_path = `${serviceApi}/${ele}`;
                return (
                  <SwiperSlide
                    style={{ cursor: "pointer", width: "110px" }}
                    key={index}
                    className="restaurant_avatars"
                  >
                    <img
                      className="chosenDish_img"
                      src={image_path}
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
              slidesPerView={chosenProduct?.product_images.length}
              // centeredSlides={false}
              spaceBetween={10}
              navigation={{
                nextEl: ".restaurant_next",
                prevEl: ".restaurant_prev",
              }}
            >
              {chosenProduct?.product_images.map((ele: string, index) => {
                const image_path = `${serviceApi}/${ele}`;
                return (
                  <SwiperSlide
                    style={{ cursor: "pointer", width: "110px" }}
                    key={index}
                    className="restaurant_avatars"
                  >
                    <img
                      className="review_sm_img"
                      src={image_path}
                      alt="res img"
                    />
                    <span className="avatar_text">
                      {chosenRestaurants?.mb_nick}
                    </span>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Stack>
        </Stack>

        <Stack className="chosen_dish_slider_right">
          <Box className="chosen_dish_text">{chosenProduct?.product_name}</Box>
          <Box className="chosen_dish_text_desc">
            {" "}
            {chosenRestaurants?.mb_nick}{" "}
          </Box>
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
                <Box>
                  <Checkbox
                    id={chosenProduct?._id}
                    onClick={(e) => {
                      e.stopPropagation();
                      targetLikeProduct(e);
                    }}
                    checked={isLiked}
                    checkedIcon={
                      <Favorite style={{ color: isLiked ? "red" : "white" }} />
                    }
                    icon={<FavoriteBorder />}
                  />

                  {/* <Checkbox
                    {...lebel}
                    icon={<FavoriteBorder />}
                    id={chosenProduct?._id}
                    checkedIcon={
                      <Favorite
                        style={{
                          color: "red",
                        }}
                      />
                    }
                    onClick={targetLikeProduct}
                    checked={
                      chosenProduct?.me_liked &&
                      chosenProduct?.me_liked[0]?.my_favorite
                        ? true
                        : false
                    }
                  /> */}

                  <span>{chosenProduct?.producta_likes}</span>
                </Box>
              </Box>
              <Box className="removed_eve_box">
                <RemoveRedEyeIcon />
                <span>{chosenProduct?.product_views}</span>
              </Box>
            </Stack>
          </Stack>
          <Box className="chosen_dish_text_extra">
            {chosenProduct?.product_description
              ? chosenProduct?.product_description
              : "No description aviable"}
          </Box>
          <Marginer width="300" bg="#000" height="2" direction="horizontal" />
          <Stack className="chosen_dish_text_price" flexDirection={"row"}>
            <span>Narx:</span>
            <span>UZD {chosenProduct?.product_price}</span>
          </Stack>
          <Stack alignItems={"center"} justifyContent={"center"}>
            <Button
              onClick={() => {
                props.onAdd(chosenProduct);
              }}
              className="chosenDish_btn"
              variant="contained"
            >
              Savatga qo’shish
            </Button>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
