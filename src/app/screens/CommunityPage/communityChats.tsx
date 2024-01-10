import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import SendIcon from "@mui/icons-material/Send";
import { Stack, Box } from "@mui/material";
import { SocketContext } from "../../context/socket";
import { ChatGreetMsg, ChatInfoMsg, ChatMessage } from "../../../types/others";
import { verifierMemberData } from "../../apiServices/vertify";
import {
  sweetErrorHandling,
  sweetFailureProvider,
} from "../../../lib/sweetAlert";
import assert from "assert";
import { Definer } from "../../../lib/Definer";
import { RippleBadge } from "../../MaterialTheme/styled";

interface NewMessageProps {
  new_message: ChatMessage;
}

const NewMessage: React.FC<NewMessageProps> = ({ new_message }) => {
  console.log(new_message);
  if (new_message.mb_id === verifierMemberData?._id) {
    return (
      <Stack alignItems={"flex-start"} flexDirection={"row"}>
        <img className="chat_img" src="/auth/user.svg" alt="user" />
        <Box className="chatting_left">{new_message.msg}</Box>
      </Stack>
    );
  } else {
    return (
      <Stack alignItems={"flex-end"} flexDirection={"row"} sx={{ ml: "auto" }}>
        <Box className="chatting_right">{new_message.msg}</Box>
      </Stack>
    );
  }
};

export default function CommunityChats() {
  // INITIALIZATIONS
  const [messageList, setMessageList] = useState<React.ReactNode[]>([]);
  const [onlineUsers, setOnlineUsers] = useState<number>(0);
  const socket = useContext(SocketContext);
  const textInput: any = useRef(null);
  const [message, setMessage] = useState<string>("");
  useEffect(() => {
    socket.connect();

    socket?.on("connect", (msg: any) => {
      console.log("CLIENT: connected");
    });

    socket?.on("newMsg", (new_message: ChatMessage) => {
      setMessageList((prevMessages) => [
        ...prevMessages,
        <NewMessage key={prevMessages.length} new_message={new_message} />,
      ]);
    });

    socket?.on("greetMsg", (msg: ChatGreetMsg) => {
      setMessageList((prevMessages) => [
        ...prevMessages,
        <p
          key={prevMessages.length}
          style={{
            textAlign: "center",
            fontSize: "large",
            fontFamily: "serif",
          }}
        >
          {msg.text}, dear {verifierMemberData?.mb_nick ?? "guess"}
        </p>,
      ]);
    });

    socket?.on("infoMsg", (msg: ChatInfoMsg) => {
      console.log("CLIENT: info message");
      setOnlineUsers(msg.total);
    });

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  // HANDLERS
  const getInputMessageHandler = useCallback(
    (e: any) => {
      const text = e.target.value;
      setMessage(text);
    },
    [message]
  );
  const getKeyHandler = (e: any) => {
    try {
      if (e.key === "Enter") {
        assert.ok(message, Definer.input_err3);
        onClickHandler();
      }
    } catch (err) {
      sweetErrorHandling(err).then();
    }
  };
  const onClickHandler = () => {
    try {
      if (!verifierMemberData) {
        textInput.current.value = "";
        sweetFailureProvider("Please login first !", true);
        return false;
      }

      textInput.current.value = "";
      assert.ok(message, Definer.input_err1);

      const mb_img_url =
        verifierMemberData?.mb_image ?? "/auth/default_user.jpg";

      socket.emit("createMsg", {
        mb_id: verifierMemberData?._id,
        msg: message,
        mb_nick: verifierMemberData?.mb_nick,
        mb_image: mb_img_url,
      });
      setMessage("");
    } catch (err) {
      console.log("onClickHandler", err);
      sweetErrorHandling(err).then();
    }
  };

  return (
    <Stack className="community_chat">
      <Box className="jonli_muloqot">
        <span>Jonli muloqot</span>
        <RippleBadge
          badgeContent={onlineUsers}
          style={{ margin: "-30px 0 0 20px" }}
        />
      </Box>
      <Stack alignItems={"center"} flexDirection={"row"}>
        <img className="chat_img" src="/auth/user.svg" alt="user" />
        <Box className="chatting_left">Hammaga Assalomu alaykum!</Box>
      </Stack>
      <Stack alignItems={"flex-end"} flexDirection={"row"} sx={{ ml: "auto" }}>
        <Stack className="message_list">
          {messageList.map((message, index) => (
            <div key={index}>{message}</div>
          ))}
        </Stack>
      </Stack>

      <Stack className="send_wrapper" flexDirection={"row"}>
        <input
          ref={textInput}
          type="text"
          name="message"
          className="msg_input"
          placeholder="Xabar jo’natish"
          onChange={getInputMessageHandler}
          onKeyDown={getKeyHandler}
        />
        <button className="send_msg_btn" onClick={onClickHandler}>
          <SendIcon style={{ color: "#fff" }} />
        </button>
      </Stack>
    </Stack>
  );
}
