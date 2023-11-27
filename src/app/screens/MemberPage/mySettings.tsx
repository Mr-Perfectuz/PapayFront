import React from "react";
import CloudDownLoadIcon from "@mui/icons-material/CloudDownload";
import { Box, Button, Stack } from "@mui/material";

export default function MySettings() {
  return (
    <Stack className="my_settings_page">
      <Stack flexDirection={"row"} className="my_settings_page_inner">
        <Box className="member_media_frame">
          <img
            src="/auth/user.svg"
            alt="user img"
            className="my_settings_img"
          />
        </Box>
        <Stack className="img_upload_wrapper">
          <Box className="upload_img">Rasm yuklash</Box>
          <Box className="upload_img_type">
            JPG, JPEG, PNG rasmlarini yuklay olasiz!
          </Box>
          <Button component="label" style={{ border: "none" }}>
            <CloudDownLoadIcon />
            <input type="file" name="file" id="file" className="upload_input" />
          </Button>
        </Stack>
      </Stack>
      <Stack flexDirection={"column"} sx={{ mt: "25px" }}>
        <Box className="input_name">
          <label htmlFor="">Ism</label>
          <input type="text" name="mb_nick" placeholder="User name" />
        </Box>
        <Stack flexDirection={"row"} justifyContent={"space-between"}>
          <Box className="input_number">
            <label htmlFor="">Telefon raqam</label>
            <input type="text" name="mb_number" placeholder="+12345656" />
          </Box>
          <Box className="input_adress">
            <label htmlFor="">Manzil</label>
            <input type="text" name="mb_adress" placeholder="Busan" />
          </Box>
        </Stack>
        <Box className="input_info">
          <label htmlFor="">Ma’lumot</label>
          <textarea
            className="input_info_textarea"
            name="mb_description"
            placeholder=" Salom, Men Papays  Developerlar uyushmasiman!"
          ></textarea>
        </Box>
        <Box className="save_btn" alignItems={"flex-end"}>
          <Button variant="contained">Saqlash</Button>
        </Box>
      </Stack>
    </Stack>
  );
}
