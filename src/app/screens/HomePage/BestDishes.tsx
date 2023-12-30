import { MonetizationOn } from "@mui/icons-material";
import { Box, Container, Stack } from "@mui/material";
import React, { useEffect } from "react";
//REDUX
import { createSelector } from "reselect";
import { retreiveTrendProducts } from "./selector";
import { Product } from "../../../types/products";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setTrendProducts } from "./slice";
import ProductApiService from "../../apiServices/productApiService";
import { serviceApi } from "../../../lib/config";
import { useHistory, useParams } from "react-router-dom";

// REDUX SLICE
const actionDispatch = (dispatch: Dispatch) => ({
  setTrendProducts: (data: Product[]) => dispatch(setTrendProducts(data)),
});

// REDUX SELECTOR
const trendProductsRetreiver = createSelector(
  retreiveTrendProducts,
  (trendProducts) => ({ trendProducts })
);

export default function BestDishes() {
  /**  INITIALIZATION */
  let { dish_id } = useParams<{ dish_id: string }>();

  const { setTrendProducts } = actionDispatch(useDispatch());
  const { trendProducts } = useSelector(trendProductsRetreiver);

  console.log("trendProducts::", trendProducts);

  useEffect(() => {
    const productService = new ProductApiService();

    productService
      .getTargetProducts({
        order: "product_likes",
        page: 1,
        limit: 4,
      })
      .then((data) => {
        setTrendProducts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  // HANDLERS
  const history = useHistory();

  const chosenDishHandler = (id: any) => {
    history.push(`/restaurant/dish/${id}`);
  };
  return (
    <div className="best_dishes_frame">
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Box className="best_dishes_title">Trendagi Ovqatlar</Box>

          <Stack sx={{ mt: "43px" }} flexDirection={"row"}>
            {trendProducts.map((product: Product, id) => {
              const image_path = `${serviceApi}/${product.product_images[0]}`;
              const size_volume =
                product.product_collection === "drink"
                  ? product.product_volume + "l"
                  : product.product_size + "size";
              return (
                <Box className="dish_box" key={id}>
                  <Stack
                    className="dish_img"
                    sx={{
                      backgroundImage: `url(${image_path})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "contain",
                    }}
                  >
                    <Box className="dish_sale">{size_volume}</Box>
                    <Box className="view_btn">
                      <div onClick={() => chosenDishHandler(product._id)}>
                        Batafsil ko’rish
                      </div>
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
                    <Box className="dish_name">{product.product_name}</Box>
                    <Box className="dish_price">
                      <MonetizationOn />
                      {product.product_price}
                    </Box>
                  </Stack>
                </Box>
              );
            })}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
