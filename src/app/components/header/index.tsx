import {
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
} from "@mui/material";
import "../../../css/navbar.css";
import { NavLink } from "react-router-dom";
import { sweetTopSuccessAlert } from "../../../lib/sweetAlert";
import React, { useState } from "react";
import { Logout } from "@mui/icons-material";
import Basket from "./basket";
import { Product } from "../../../types/products";

export default function NavbarHome(props: any) {
  /** INITIALIZATIONS **/

  return (
    <div className="format home_navbar">
      <Container>
        <Stack
          className="navbar_config"
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <Box>
            <img src="/icons/papay.svg" alt="header img" />
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
            {props.verifierMemberData ? (
              <Box className="hover-line" onClick={props.setPath}>
                <NavLink to="/orders" activeClassName="underline">
                  Buyurtma
                </NavLink>
              </Box>
            ) : null}
            <Box className="hover-line" onClick={props.setPath}>
              <NavLink to="/community" activeClassName="underline">
                Jamiyat
              </NavLink>
            </Box>
            {props.verifierMemberData ? (
              <Box className="hover-line" onClick={props.setPath}>
                <NavLink to="/member-page" activeClassName="underline">
                  Sahifam
                </NavLink>
              </Box>
            ) : null}
            <Box className="hover-line" onClick={props.setPath}>
              <NavLink to="/help" activeClassName="underline">
                Yordam
              </NavLink>
            </Box>
            {/* <Box className="hover-line">
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
            </Box> */}

            <Basket
              onAdd={props.onAdd}
              onRemove={props.onRemove}
              cartItems={props.cartItems}
              onDelete={props.onDelete}
              onDeleteAll={props.onDeleteAll}
              setOrderRebuild={props.setOrderRebuild}
            />

            {!props.verifierMemberData ? (
              <Box>
                <Button
                  onClick={() => props.handleLoginOpen()}
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
            ) : (
              <img
                alt="user img"
                src={props.verifierMemberData.mb_image}
                style={{ width: "48px", height: "48px", borderRadius: "24px" }}
                onClick={props.handleLogoutClick}
              />
            )}
            <Menu
              anchorEl={props.anchorEl}
              open={props.open}
              onClick={props.handleCLoseLogout}
              slotProps={{
                paper: {
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32",
                    mt: 1.5,
                    " & .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "Background.paper",
                      transform: "translateY(-50%) rotate(45deg",
                      zIndex: 0,
                    },
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={props.handleLogoutRequest}>
                <ListItemIcon>
                  <Logout fontSize="small" style={{ color: "blue" }} />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Stack>
        </Stack>

        <Stack className="head_information">
          <Stack
            justifyContent={"row"}
            style={{ marginTop: "86px", marginLeft: "24px" }}
          >
            <Box>
              <img src="/icons/welcome.svg" alt="header img" />
            </Box>
            <Box className="define_reataurant">
              The Authentic Restaurant & Cafe
            </Box>
            <Box className="timeline_service">24 soat xizmatingizdamiz.</Box>
            <Box sx={{ mt: "90px" }}>
              {/*  */}

              {!props.verifierMemberData ? (
                <Button
                  onClick={() => props.handleSignUpOpen()}
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
              ) : null}

              {/*  */}
            </Box>
          </Stack>
          <Box className="img_halal"></Box>
        </Stack>
      </Container>
    </div>
  );
}
