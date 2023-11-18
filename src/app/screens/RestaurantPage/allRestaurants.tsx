import React from "react";
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
import {
  ArrowBack,
  ArrowForward,
  Favorite,
  Translate,
} from "@mui/icons-material";

const order_list = Array.from(Array(8).keys());

export default function AllRestaurants() {
  return (
    <div className="all_restaurants">
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            sx={{ mt: "50px" }}
          >
            <Box className="fill_search_box">
              <Box className="fill_box">
                <a href="#">Zo'r</a>
                <a href="#">Mashhur</a>
                <a href="#">Trenddagi</a>
                <a href="#">Yangi</a>
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
              {order_list.map((ele) => {
                return (
                  <Card
                    variant="outlined"
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
                          src={"/restaurant/res1.png"}
                          alt="Afine img icon"
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
                      PizzaHut
                    </Typography>
                    <Typography level="body-sm" sx={{ mt: 0.5, mb: 2 }}>
                      <Link
                        href=""
                        startDecorator={<LocationOnRoundedIcon />}
                        textColor="neutral.700"
                      >
                        Tashkent, Chilanzar 7
                      </Link>
                    </Typography>
                    <Typography level="body-sm">
                      <Link
                        href=""
                        startDecorator={<CallIcon />}
                        textColor="neutral.700"
                      >
                        998902662562
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
                        4
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
                        3
                        <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                      </Typography>
                    </CardOverflow>
                  </Card>
                );
              })}
              {/* <Card
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
                      width="319.997px"
                      height="318px"
                      src={"/restaurant/res1.png"}
                      alt="Afine img icon"
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
                  PizzaHut
                </Typography>
                <Typography level="body-sm" sx={{ mt: 0.5, mb: 2 }}>
                  <Link
                    href=""
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.700"
                  >
                    Tashkent, Chilanzar 7
                  </Link>
                </Typography>
                <Typography level="body-sm">
                  <Link
                    href=""
                    startDecorator={<CallIcon />}
                    textColor="neutral.700"
                  >
                    998902662562
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
                    4
                    <VisibilityIcon sx={{ fontSize: 20, marginLeft: "5px" }} />
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
                    3
                    <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                  </Typography>
                </CardOverflow>
              </Card>
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
                      width="319.997px"
                      height="318px"
                      src={"/restaurant/res1.png"}
                      alt="Afine img icon"
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
                  PizzaHut
                </Typography>
                <Typography level="body-sm" sx={{ mt: 0.5, mb: 2 }}>
                  <Link
                    href=""
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.700"
                  >
                    Tashkent, Chilanzar 7
                  </Link>
                </Typography>
                <Typography level="body-sm">
                  <Link
                    href=""
                    startDecorator={<CallIcon />}
                    textColor="neutral.700"
                  >
                    998902662562
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
                    4
                    <VisibilityIcon sx={{ fontSize: 20, marginLeft: "5px" }} />
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
                    3
                    <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                  </Typography>
                </CardOverflow>
              </Card> */}
            </CssVarsProvider>
          </Stack>
          <Stack className="bottom_box">
            <Pagination
              count={3}
              page={1}
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
