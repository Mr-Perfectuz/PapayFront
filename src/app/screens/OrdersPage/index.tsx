import React from "react";
import Tab from "@mui/material/Tab";
import { Box, Container, Stack } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "../../../../src/css/orders.css";
import FinishedOrders from "./finishedOrders";
import Marginer from "../../components/marginer";
import ProcessedOrders from "./processedOrders";
import PausedOrders from "./pausedOrders";

export default function OrdersPage() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div className="order_page">
      <Container>
        <Stack flexDirection={"row"}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center", // Center horizontally
              width: "100%", // Set your desired maximum width
              margin: "auto", // Center the component
              typography: "body1",
            }}
          >
            <TabContext value={value}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  width: "900px",
                  borderBottom: 1,
                  borderColor: "divider",
                }}
              >
                <TabList
                  className="orders_tablist"
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  style={{
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginLeft: "30px",
                  }}
                >
                  <Tab label="Burtmalarim" value="1" sx={{ flex: "1" }} />
                  <Tab label="Jarayon" value="2" sx={{ flex: "1" }} />
                  <Tab label="Yakunlangan" value="3" sx={{ flex: "1" }} />
                </TabList>
                <Marginer
                  width="300"
                  bg="#fff"
                  height="2"
                  direction="horizontal"
                />
              </Box>

              <PausedOrders />
              <ProcessedOrders />
              <FinishedOrders />
            </TabContext>
          </Box>
          <Stack flexDirection={"column"} sx={{ mt: "165px" }}>
            <Stack className="user_box">
              <img
                className="user_box_img"
                src="/others/user_img.png"
                alt="order user "
              />
              <Box className="user_box_name">Ismoilov Akmaljon</Box>
              <Box className="user_box_status">Foydalanuvchi</Box>
              <Stack alignItems={"center"}>
                <Marginer
                  width="400"
                  bg="#A1A1A1;"
                  height="2"
                  direction="horizontal"
                />
              </Stack>

              <Stack
                flexDirection={"row"}
                sx={{ ml: "30px", mt: "10px", mb: "50px" }}
              >
                <img
                  className="location_img"
                  src="/icons/location.png"
                  alt="location icon"
                />
                <Box className="location_txt">Seoul</Box>
              </Stack>
            </Stack>
            <Stack className="user_box" sx={{ mt: "20px" }}>
              <div className="form-container">
                <Box className="field-container width: 300px;">
                  <label htmlFor="name"></label>
                  <input
                    className="name_input"
                    id="name"
                    type="text"
                    placeholder="Card number: 5243 4090 2002 7495"
                  />
                </Box>
                <Stack flexDirection={"row"}>
                  <Box className="field-container">
                    <label htmlFor="expirationdate"></label>
                    <input
                      className="name_txt"
                      id="expirationdate"
                      type="text"
                      placeholder="07 / 24"
                    />
                  </Box>
                  <Box className="field-container" sx={{ ml: "20px" }}>
                    <label htmlFor="securitycode"></label>
                    <input
                      className="name_txt"
                      id="securitycode"
                      type="text"
                      pattern="[0-9]*"
                      placeholder="CVV : 010"
                    />
                  </Box>
                </Stack>
                <Box className="field-container width: 325px;">
                  <label htmlFor="name"></label>
                  <input
                    className="name_input"
                    id="name"
                    type="text"
                    placeholder="Ismoilov  Akmaljon"
                  />
                </Box>
              </div>

              <Stack
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={"center"}
                className="payment_box"
              >
                <img src="/others/western_union.svg" alt="payment" />
                <img src="/others/mastercard.svg" alt="payment" />
                <img src="/others/paypal.svg" alt="payment" />
                <img src="/others/visa.svg" alt="payment" />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
