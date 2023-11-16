import { Box, Container, Stack } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <div className="footer_config">
      <Container>
        <Stack className="main_footer_component">
          <Stack flexDirection={"row"} style={{ height: "242px" }}>
            <Stack>
              <Box>
                <img src="/icons/footer.svg" alt="footer img" />
              </Box>
              <Box className="footer_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor Sed ut perspiciatis unde omnis iste
              </Box>
              <Stack sx={{ flexDirection: "row" }} className="footer_icons">
                <Box>
                  <img src="/icons/facebook.svg" alt="footer img" />
                </Box>
                <Box>
                  <img src="/icons/twitter.svg" alt="footer img" />
                </Box>
                <Box>
                  <img src="/icons/instagram.svg" alt="footer img" />
                </Box>
                <Box>
                  <img src="/icons/youtube.svg" alt="footer img" />
                </Box>
              </Stack>
            </Stack>
            <Stack className="center_parts">
              <Box className="center_parts_one">Bo’limlar</Box>
              <Box className="center_parts_second"></Box>
              <Box className="center_parts_third">
                Bosh Sahifa Oshxonalar Jamiyat <br />
                Yordam
              </Box>
            </Stack>
            <Stack className="findUs">
              <Box className="findUs_1"> Bizni top</Box>
              <Box className="center_parts_second"></Box>
              <Stack
                className="findUs_wrapper findUs_wrapper_first"
                flexDirection={"row"}
              >
                <Box className="findUs_contact">L.</Box>
                <Box className="findUs_contact_text">Uzbekistan</Box>
              </Stack>
              <Stack
                className="findUs_wrapper findUs_wrapper_second"
                flexDirection={"row"}
              >
                <Box className="findUs_contact">P.</Box>
                <Box className="findUs_contact_text">+998 - 99 266 25 62</Box>
              </Stack>
              <Stack className="findUs_wrapper" flexDirection={"row"}>
                <Box className="findUs_contact">E.</Box>
                <Box className="findUs_contact_text">Papays@restaurant.com</Box>
              </Stack>
              <Box></Box>
              <Box></Box>
            </Stack>
          </Stack>
          <Box className="liner"></Box>
          <Box className="copyrights">
            Copyright Papays 2022, All right reserved.
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
