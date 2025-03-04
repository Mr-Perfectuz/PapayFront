import { Container, Stack, Box } from "@mui/material";
import React, { useRef } from "react";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { CssVarsProvider } from "@mui/joy/styles";
import { CardOverflow, IconButton } from "@mui/joy";

//REDUX
import { createSelector } from "reselect";
import { retreiveTopRestaurants } from "./selector";
import { useSelector } from "react-redux";
import { Restaurant } from "../../../types/user";
import { serviceApi } from "../../../lib/config";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";

import assert from "assert";
import { Definer } from "../../../lib/Definer";
import { Favorite } from "@mui/icons-material";
import MemberApiService from "../../apiServices/memberApiService";
import { useHistory } from "react-router-dom";
import { verifierMemberData } from "../../apiServices/vertify";

export default function TopRestaurants() {
  //INITITALIZATIONS
  const history = useHistory();
  const topRestaurantRetriever = createSelector(
    retreiveTopRestaurants,
    (topRestaurants) => ({ topRestaurants })
  );

  const { topRestaurants } = useSelector(topRestaurantRetriever);

  const refs: any = useRef([]);

  //  HANDLERS
  const chosenRestaurantHandler = (id: string) => {
    history.push(`/restaurant/${id}`);
  };

  const goRestaurantsHandler = () => history.push("/restaurant");

  const targetLikeTop = async (e: any, id: string) => {
    try {
      // e.stopPropagation();
      assert.ok(verifierMemberData, Definer.auth_err);

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
    <div className="top_restaurant_frame">
      <Container>
        <Stack
          flexDirection={"column"}
          alignItems={"center"}
          sx={{ mt: "45px" }}
        >
          <Box className="category_title">TOP Restauranlar</Box>
          <Stack flexDirection={"row"} sx={{ mt: "33px" }}>
            {topRestaurants.map((ele: Restaurant) => {
              const image_path = `${serviceApi}/${ele.mb_image}`;
              return (
                <CssVarsProvider key={ele._id}>
                  <Card
                    onClick={() => chosenRestaurantHandler(ele._id)}
                    sx={{
                      minHeight: "440px",
                      width: 325,
                      margin: "35px",
                      cursor: "pointer",
                      borderRadius: "17px",
                    }}
                  >
                    <CardCover>
                      <img
                        src={image_path}
                        alt="restaurant img"
                        loading="lazy"
                      />
                    </CardCover>
                    <CardCover
                      sx={{
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
                      }}
                    />
                    <CardContent sx={{ justifyContent: "flex-end" }}>
                      <Typography level="title-lg" textColor="#fff">
                        {ele.mb_nick}
                      </Typography>
                      <Typography
                        startDecorator={<LocationOnRoundedIcon />}
                        textColor="neutral.300"
                      >
                        {ele.mb_adress}
                      </Typography>
                    </CardContent>
                    <CardOverflow
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 1.5,
                        pay: 1.5,
                        px: "var{--Card-padding}",
                        borderTop: "1px solid",
                      }}
                    >
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
                          bottom: 45,
                          transform: "translateY(58%)",
                          color: "rgba(0,0,0, 4",
                        }}
                      >
                        <Favorite
                          onClick={(e) => targetLikeTop(e, ele._id)}
                          style={{
                            color:
                              ele?.me_liked && ele?.me_liked[0]?.my_favorite
                                ? "red"
                                : "white",
                          }}
                        />
                      </IconButton>
                      <Typography
                        level="body-sm"
                        sx={{
                          fontWeightL: "md",
                          color: "neutral.300",
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
                          color: "neutral.300",
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
                </CssVarsProvider>
              );
            })}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
