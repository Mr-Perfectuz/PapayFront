import React, { useContext, useEffect, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { Stack, Avatar, Box } from "@mui/material";
import { SocketContext } from "../../context/socket";
export default function CommunityChats() {
  // INITIALIZATIONS
  const [messageList, setMessageList] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState<number>(0);
  const socket = useContext(SocketContext);

  useEffect(() => {
    socket.connect();
    socket?.on("connect", (msg: any) => {
      console.log("CLIENT: connected");
    });
    socket?.on("newMsg", (new_message: any) => {
      console.log("CLIENT: new message");
    });
    socket?.on("greetMsg", (msg: any) => {
      console.log("CLIENT: greet message");
    });
    socket?.on("infoMsg", (msg: any) => {
      console.log("CLIENT: info message");
      setOnlineUsers(msg.total);
    });
    return () => {
      socket.disconnect();
    };
  }, [socket]);

  return (
    <Stack className="community_chat">
      <Box className="jonli_muloqot">Jonli muloqot {onlineUsers}</Box>
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
