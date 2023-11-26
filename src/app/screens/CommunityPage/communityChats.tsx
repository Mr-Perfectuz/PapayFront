import React from "react";
import SendIcon from "@mui/icons-material/Send";
import { Stack, Avatar, Box } from "@mui/material";
export default function CommunityChats() {
  return (
    <Stack className="community_chat">
      <Box className="jonli_muloqot">Jonli muloqot</Box>
      <Stack alignItems={"center"} flexDirection={"row"}>
        <img className="chat_img" src="/auth/user.svg" alt="user" />
        <Box className="chatting_left">Hammaga Assalomu alaykum!</Box>
      </Stack>
      <Stack alignItems={"flex-end"} flexDirection={"row"} sx={{ ml: "auto" }}>
        <Box className="chatting_right">Assalomu alaykum</Box>
      </Stack>
      <Stack alignItems={"center"} flexDirection={"row"} sx={{ mt: "20px" }}>
        <img className="chat_img" src="/auth/user.svg" alt="user" />
        <Box className="chatting_left">OoOo, zo’r ekanmi chat</Box>
      </Stack>
      <Stack className="send_wrapper" flexDirection={"row"}>
        <input
          type="text"
          name="message"
          className="msg_input"
          placeholder="Xabar jo’natish"
        />
        <button className="send_msg_btn">
          <SendIcon style={{ color: "#fff" }} />
        </button>
      </Stack>
    </Stack>
  );
}
