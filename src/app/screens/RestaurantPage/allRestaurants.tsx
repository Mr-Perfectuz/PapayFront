/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import CallIcon from "@mui/icons-material/Call";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { CssVarsProvider } from "@mui/joy/styles";
import { AspectRatio, CardOverflow, IconButton, Link } from "@mui/joy";
import { Favorite } from "@mui/icons-material";

//REDUX
import { Dispatch, createSelector } from "@reduxjs/toolkit";
import { useHistory } from "react-router-dom";
import { retreiveTargetRestaurants } from "../RestaurantPage/selector";
//REDUX
import { useDispatch, useSelector } from "react-redux";
import { Restaurant } from "../../../types/user";
import { serviceApi } from "../../../lib/config";
import { setTargetRestaurants } from "./slice";
import RestaurantApiService from "../../apiServices/restaurantApiService";
import { SearchObj } from "../../../types/others";
import assert from "assert";
import { Definer } from "../../../lib/Definer";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import MemberApiService from "../../apiServices/memberApiService";

// REDUX SLICE
const actionDispatch = (dispatch: Dispatch) => ({
  setTargetRestaurants: (data: Restaurant[]) =>
    dispatch(setTargetRestaurants(data)),
});

//INITITALIZATIONS
const targetRestaurantRetriever = createSelector(
  retreiveTargetRestaurants,
  (targetRestaurants) => ({ targetRestaurants })
);

export default function AllRestaurants() {
  /**  INITIALIZATION */
  const { setTargetRestaurants } = actionDispatch(useDispatch());
  const { targetRestaurants } = useSelector(targetRestaurantRetriever);
  const [targetSearchObject, setTargetSeachObject] = useState<SearchObj>({
    page: 1,
    limit: 8,
    order: "mb_point",
  });
  useEffect(() => {
    const restaurantApiService = new RestaurantApiService();
    restaurantApiService
      .getRestaurants(targetSearchObject)
      .then((data) => {
        setTargetRestaurants(data);
      })
      .catch((err) => console.log(err));
  }, [targetSearchObject]);

  // HANDLERS
  const history = useHistory();
  const chosenRestaurantHandler = (id: string) => {
    history.push(`/restaurant/${id}`);
  };
  const searchHandler = (category: string) => {
    targetSearchObject.page = 1;
    targetSearchObject.order = category;
    setTargetSeachObject({ ...targetSearchObject }); //new reference
  };

  const handlePaginationChange = (event: any, value: number) => {
    targetSearchObject.page = value;
    setTargetSeachObject({ ...targetSearchObject });
  };
  const refs: any = useRef([]);

  const targetLikeHandler = async (e: any, id: string) => {
    try {
      // e.stopPropagation();
      assert.ok(localStorage.getItem("member_data"), Definer.auth_err);

      const memberApiService = new MemberApiService();

      const like_result: any = await memberApiService.memberLikeTarget({
        like_ref_id: id,
        group_type: "member",
      });
      console.log("Like Result:", like_result);

      assert.ok(like_result, Definer.general_err);

      if (like_result.like_status > 0) {
        e.target.style.fill = "red";
        refs.current[id].innerHTML++;
      } else {
        e.target.style.fill = "white";
        refs.current[id].innerHTML--;
      }
      await sweetTopSmallSuccessAlert("success", 700, false);
    } catch (err: any) {
      console.log("targetLikeTop, ERROR::", err);
      await sweetErrorHandling(err).then();
    }
  };

  return (
    <div className="all_restaurants">
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            sx={{ mt: "50px", width: "1400px" }}
          >
            <Box className="fill_search_box">
              <Box className="fill_box">
                <a onClick={() => searchHandler("mb_point")} href="#">
                  Zo'r
                </a>
                <a onClick={() => searchHandler("mb_views")} href="#">
                  Mashhur
                </a>
                <a onClick={() => searchHandler("mb_likes")} href="#">
                  Trenddagi
                </a>
                <a onClick={() => searchHandler("createdAt")} href="#">
                  Yangi
                </a>
              </Box>
            </Box>
            <Box className="search_big_box">
              <form className="search_form" action="" method="">
                <input
                  type="search"
                  name="resSearch"
                  className="searchInput"
                  placeholder="Qidiruv"
                />
                <Button
                  className="button_search"
                  variant="contained"
                  sx={{
                    background: " #f8be69",
                    borderRadius: "0px 18px 18px 00px",
                    height: "33px",
                  }}
                  endIcon={<SearchIcon />}
                >
                  Izlash
                </Button>
              </form>
            </Box>
          </Stack>

          <Stack flexDirection={"row"} className="all_res_box">
            <CssVarsProvider>
              {targetRestaurants.map((ele: Restaurant, i) => {
                const image_path = `${serviceApi}/${ele.mb_image}`;
                return (
                  <Card
                    onClick={() => chosenRestaurantHandler(ele._id)}
                    variant="outlined"
                    key={i}
                    sx={{
                      minHeight: 483,
                      minWidth: 320,
                      margin: "10px",
                      cursor: "pointer",
                      borderRadius: "17px",
                    }}
                  >
                    <CardOverflow>
                      <AspectRatio ratio={1}>
                        <img
                          width="319.997px"
                          height="318px"
                          src={image_path}
                          alt="Afine img icon"
                        />
                      </AspectRatio>
                      <IconButton
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        aria-label="Like minimal photography"
                        size="md"
                        variant="solid"
                        color="neutral"
                        sx={{
                          position: "absolute",
                          zIndex: 2,
                          borderRadius: "50%",
                          right: "1rem",
                          bottom: 0,
                          transform: "translateY(58%)",
                          color: "rgba(0,0,0, 4",
                        }}
                      >
                        <Favorite
                          onClick={(e) => targetLikeHandler(e, ele._id)}
                          style={{
                            color:
                              ele?.me_liked && ele?.me_liked[0]?.my_favorite
                                ? "red"
                                : "white",
                          }}
                        />
                      </IconButton>
                    </CardOverflow>
                    <Typography level="h2" sx={{ fontSize: "md", mt: 2 }}>
                      {ele.mb_nick} restaurant
                    </Typography>
                    <Typography level="body-sm" sx={{ mt: 0.5, mb: 2 }}>
                      <Link
                        href=""
                        startDecorator={<LocationOnRoundedIcon />}
                        textColor="neutral.700"
                      >
                        {ele.mb_adress}
                      </Link>
                    </Typography>
                    <Typography level="body-sm">
                      <Link
                        href=""
                        startDecorator={<CallIcon />}
                        textColor="neutral.700"
                      >
                        {ele.mb_phone}
                      </Link>
                    </Typography>
                    <CardOverflow
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 1.5,
                        pay: 1.5,
                        px: "var{--Card-padding}",
                        borderColor: "neutral.outlineBorder",
                        bgcolor: "background.level1",
                        borderTop: "1px solid #C4C4C4",
                      }}
                    >
                      <Typography
                        level="body-sm"
                        sx={{
                          fontWeightL: "md",
                          color: "neutral.700",
                          alignItems: "center",
                          display: "flex",
                          mt: "5px",
                          mb: "5px",
                        }}
                      >
                        {ele.mb_views}
                        <VisibilityIcon
                          sx={{ fontSize: 20, marginLeft: "5px" }}
                        />
                      </Typography>
                      <Box sx={{ width: 2, bgcolor: "divider" }} />
                      <Typography
                        sx={{
                          fontWeightL: "md",
                          color: "neutral.700",
                          alignItems: "center",
                          display: "flex",
                          mt: "5px",
                          mb: "5px",
                        }}
                      >
                        <div
                          ref={(element) => (refs.current[ele._id] = element)}
                        >
                          {ele.mb_likes}
                        </div>
                        <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                      </Typography>
                    </CardOverflow>
                  </Card>
                );
              })}
            </CssVarsProvider>
          </Stack>
          <Stack className="bottom_box">
            <Pagination
              count={
                targetSearchObject.page >= 3 ? targetSearchObject.page + 1 : 3
              }
              page={targetSearchObject.page}
              renderItem={(item) => (
                <PaginationItem
                  components={{
                    previous: ArrowBackIcon,
                    next: ArrowForwardIcon,
                  }}
                  {...item}
                  color={"secondary"}
                />
              )}
              onChange={handlePaginationChange}
            />
            <Stack
              flexDirection={"row"}
              justifyContent={"space-between"}
              sx={{ width: "1400px" }}
            >
              <img
                src={"/icons/icon_best_restaurants.svg"}
                alt="line img icon"
                className="line_right line_left"
              />
              <img
                src={"/icons/icon_best_restaurants.svg"}
                alt="line img icon"
                className="line_right"
              />
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
