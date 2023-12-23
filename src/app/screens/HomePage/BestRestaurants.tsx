import React from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import CallIcon from "@mui/icons-material/Call";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { CssVarsProvider } from "@mui/joy/styles";
import { AspectRatio, CardOverflow, IconButton, Link } from "@mui/joy";
import { Favorite } from "@mui/icons-material";
//REDUX
import { createSelector } from "reselect";
import { retreiveBestRestaurants } from "./selector";
import { useSelector } from "react-redux";
import { Restaurant } from "../../../types/user";
import { serviceApi } from "../../../lib/config";

// REDUX SELECTOR
const bestRestaurantRetreiver = createSelector(
  retreiveBestRestaurants,
  (bestRestaurants) => ({ bestRestaurants })
);

export default function BestRestaurants() {
  const { bestRestaurants } = useSelector(bestRestaurantRetreiver);

  console.log("bestRestaurants", bestRestaurants);

  return (
    <div className="best_restaurants_frame">
      <img
        src="/icons/icon_best_restaurants.svg"
        alt="icon img"
        style={{ position: "absolute", left: "6%", transform: "rotate{90deg}" }}
      />
      <Container sx={{ paddingTop: "153px", width: "100%" }}>
        <Stack flex-direction="column" alignItems={"center"}>
          <Box className="category_title">Zo'r Restaurantlar</Box>
          <Stack flexDirection={"row"} sx={{ mt: "33px" }}>
            {bestRestaurants.map((ele: Restaurant) => {
              const image_path = `${serviceApi}/${ele.mb_image}`;

              return (
                <CssVarsProvider key={ele._id}>
                  <Card
                    variant="outlined"
                    sx={{
                      minHeight: 483,
                      minWidth: 320,
                      margin: "35px",
                      cursor: "pointer",
                      borderRadius: "17px",
                    }}
                  >
                    <CardOverflow>
                      <AspectRatio ratio={1}>
                        <img
                          src={image_path}
                          loading="lazy"
                          alt="foog img"
                          width="273px"
                          height="273px"
                        />
                      </AspectRatio>
                      <IconButton
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
                        <Favorite style={{ fill: "white" }} />
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
                        {ele.mb_likes}
                        <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                      </Typography>
                    </CardOverflow>
                  </Card>
                </CssVarsProvider>
              );
            })}
          </Stack>
          <Stack
            flexDirection={"row"}
            justifyContent={"flex-end"}
            sx={{
              width: "1420px",
            }}
          >
            <Button
              sx={{
                background: "#1976d2",
                color: "#fff",
                "&:hover": {
                  background: "#85bdf2 !important",
                },
              }}
            >
              BARCHASINI KO’RISH
            </Button>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
