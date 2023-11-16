import { Box, Container, Stack } from "@mui/material";
import React from "react";
import Marginer from "../../components/marginer";
export default function Statistics() {
  return (
    <div className="statistic_frame">
      <Container>
        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          style={{ height: "246px" }}
        >
          <div className="personage_img"></div>
          <Stack className="static_box">
            <Box className="static_number">12</Box>
            <Box className="static_text">Restaurants</Box>
          </Stack>
          <Marginer bg="#e3c08d" direction="vertical" width="2" height="64" />
          <Stack className="static_box">
            <Box className="static_number">8</Box>
            <Box className="static_text">Years Experience</Box>
          </Stack>
          <Marginer bg="#e3c08d" direction="vertical" width="2" height="64" />
          <Stack className="static_box">
            <Box className="static_number">50+</Box>
            <Box className="static_text">Menu ovqatlar</Box>
          </Stack>
          <Marginer bg="#e3c08d" direction="vertical" width="2" height="64" />
          <Stack className="static_box">
            <Box className="static_number">200+</Box>
            <Box className="static_text">Foydalanuvchilar</Box>
          </Stack>
          <div className="right"></div>
        </Stack>
      </Container>
    </div>
  );
}
