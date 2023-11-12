import {
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
} from "@mui/material";
import React from "react";
import "../../../css/navbar.css";
import { NavLink } from "react-router-dom";

export default function NavbarHome(props: any) {
  return (
    <div className="format home_navbar">
      <Container>
        <Stack
          className="navbar_config"
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <Box>
            <img src="/icons/papay.svg" alt="header image" />
          </Box>
          <Stack
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
            className="navbar_links"
          >
            <Box className="hover-line" onClick={props.setPath}>
              <NavLink to="/" activeClassName="underline">
                Bosh Sahifa
              </NavLink>
            </Box>
            <Box className="hover-line" onClick={props.setPath}>
              <NavLink to="/restaurant" activeClassName="underline">
                Oshxona
              </NavLink>
            </Box>
            <Box className="hover-line" onClick={props.setPath}>
              <NavLink to="/community" activeClassName="underline">
                Jamiyat
              </NavLink>
            </Box>
            <Box className="hover-line" onClick={props.setPath}>
              <NavLink to="/orders" activeClassName="underline">
                Buyurtma
              </NavLink>
            </Box>
            <Box className="hover-line" onClick={props.setPath}>
              <NavLink to="/help" activeClassName="underline">
                Yordam
              </NavLink>
            </Box>
            <Box className="hover-line">
              <IconButton
                aria-label="card"
                id="basic-button"
                aria-controls={undefined}
                aria-haspopup="true"
                aria-expanded={undefined}
                // onClick={handleClick}
              >
                <Badge badgeContent={3} color="secondary">
                  <img
                    src="/icons/shopping-cart.svg"
                    alt="shopping card icon"
                  />
                </Badge>
              </IconButton>
            </Box>
            <Box>
              <Button
                variant="contained"
                style={{
                  width: "77px",
                  height: "36px",
                  background: "#1976D2",
                  borderRadius: "4px",
                  color: "#fff",
                }}
              >
                KIRISH
              </Button>
            </Box>
          </Stack>
        </Stack>

        <Stack className="head_information">
          <Stack
            justifyContent={"row"}
            style={{ marginTop: "86px", marginLeft: "24px" }}
          >
            <Box>
              <img src="/icons/welcome.svg" alt="header image" />
            </Box>
            <Box className="define_reataurant">
              The Authentic Restaurant & Cafe
            </Box>
            <Box className="timeline_service">24 soat xizmatingizdamiz.</Box>
            <Box sx={{ mt: "90px" }}>
              <Button
                className="header_btn"
                variant="contained"
                style={{
                  width: "210px",
                  height: "60px",
                  background: "#1976D2",
                  color: "#fff",
                  borderRadius: "4px",
                }}
              >
                RO’YHATDAN O’TISH
              </Button>
            </Box>
          </Stack>
          <Box className="img_halal"></Box>
        </Stack>
      </Container>
    </div>
  );
}
