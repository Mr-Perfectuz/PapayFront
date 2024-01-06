import { Logout } from "@mui/icons-material";
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
import React from "react";
import { NavLink } from "react-router-dom";
import Basket from "./basket";

export default function NavbarOthers(props: any) {
  return (
    <div className="home_navbar format_others">
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
              <NavLink to="/">Bosh Sahifa</NavLink>
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
            {props.verifierMemberData ? (
              <Box className="hover-line" onClick={props.setPath}>
                <NavLink to="/member-page" activeClassName="underline">
                  Sahifam
                </NavLink>
              </Box>
            ) : null}
            {props.verifierMemberData ? (
              <Box className="hover-line" onClick={props.setPath}>
                <NavLink to="/orders" activeClassName="underline">
                  Buyurtma
                </NavLink>
              </Box>
            ) : null}
            <Box className="hover-line" onClick={props.setPath}>
              <NavLink to="/help" activeClassName="underline">
                Yordam
              </NavLink>
            </Box>

            <Basket
              onAdd={props.onAdd}
              onRemove={props.onRemove}
              cartItems={props.cartItems}
              onDelete={props.onDelete}
              onDeleteAll={props.onDeleteAll}
              setOrderRebuild={props.setOrderRebuild}
            />

            <Box>
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
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "24px",
                  }}
                  onClick={props.handleLogoutClick}
                />
              )}

              <Menu
                anchorEl={props.anchorEl}
                open={props.open}
                onClick={props.handleCLoseLogout}
                onClose={props.handleCLoseLogout}
                PaperProps={{
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
            </Box>
          </Stack>
        </Stack>
        <Box sx={{ position: "relative" }}>
          <img
            className="dec_img_left"
            src="/restaurant/top_left_dec.svg"
            alt="decoration img"
          />
          <img
            className="dec_img"
            src="/restaurant/top_decoration.svg"
            alt="decoration img"
          />
        </Box>
      </Container>
    </div>
  );
}
