import { Container, Stack, Box } from "@mui/material";
import React from "react";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { CssVarsProvider } from "@mui/joy/styles";
import { CardOverflow, IconButton } from "@mui/joy";
import { Favorite } from "@mui/icons-material";
export default function TopRestaurants() {
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
            <CssVarsProvider>
              <Card
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
                    src="/restaurant/rayhon.png"
                    srcSet="/restaurant/rayhon.png 2x"
                    loading="lazy"
                    alt="restaurant img"
                    width="319.997px"
                    height="430px"
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
                    Rayhon
                  </Typography>
                  <Typography
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.300"
                  >
                    Tashkent, Yunus Abad 4
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
                    <Favorite style={{ fill: "white" }} />
                  </IconButton>
                  <Typography
                    level="h3"
                    sx={{
                      fontWeightL: "md",
                      color: "neutral.300",
                      alignItems: "center",
                      display: "flex",
                      mt: "5px",
                      mb: "5px",
                    }}
                  >
                    100
                    <VisibilityIcon sx={{ fontSize: 20, marginLeft: "5px" }} />
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
                    50
                    <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                  </Typography>
                </CardOverflow>
              </Card>
              <Card
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
                    src="/restaurant/chinor.png"
                    srcSet="/restaurant/chinor.png 2x"
                    loading="lazy"
                    alt="restaurant img"
                    width="319.997px"
                    height="430px"
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
                    Chinor
                  </Typography>
                  <Typography
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.300"
                  >
                    Tashkent, Alisher Navoiy 2
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
                    <Favorite style={{ fill: "white" }} />
                  </IconButton>
                  <Typography
                    level="h3"
                    sx={{
                      fontWeightL: "md",
                      color: "neutral.300",
                      alignItems: "center",
                      display: "flex",
                      mt: "5px",
                      mb: "5px",
                    }}
                  >
                    100
                    <VisibilityIcon sx={{ fontSize: 20, marginLeft: "5px" }} />
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
                    50
                    <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                  </Typography>
                </CardOverflow>
              </Card>
              <Card
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
                    src="/restaurant/Afina.png"
                    srcSet="/restaurant/Afina.png 2x"
                    loading="lazy"
                    alt="restaurant img"
                    width="319.997px"
                    height="430px"
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
                    Afina
                  </Typography>
                  <Typography
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.300"
                  >
                    Tashkent, Chilanzar 7
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
                    <Favorite style={{ fill: "white" }} />
                  </IconButton>
                  <Typography
                    level="h3"
                    sx={{
                      fontWeightL: "md",
                      color: "neutral.300",
                      alignItems: "center",
                      display: "flex",
                      mt: "5px",
                      mb: "5px",
                    }}
                  >
                    100
                    <VisibilityIcon sx={{ fontSize: 20, marginLeft: "5px" }} />
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
                    50
                    <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                  </Typography>
                </CardOverflow>
              </Card>
              <Card
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
                    src="/restaurant/rayhon.png"
                    srcSet="/restaurant/rayhon.png 2x"
                    loading="lazy"
                    alt="restaurant img"
                    width="319.997px"
                    height="430px"
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
                    Rayhon
                  </Typography>
                  <Typography
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.300"
                  >
                    Tashkent, Yunus Abad 4
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
                    <Favorite style={{ fill: "white" }} />
                  </IconButton>
                  <Typography
                    level="h3"
                    sx={{
                      fontWeightL: "md",
                      color: "neutral.300",
                      alignItems: "center",
                      display: "flex",
                      mt: "5px",
                      mb: "5px",
                    }}
                  >
                    100
                    <VisibilityIcon sx={{ fontSize: 20, marginLeft: "5px" }} />
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
                    50
                    <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                  </Typography>
                </CardOverflow>
              </Card>
            </CssVarsProvider>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
