import React from "react";
import { Box, Button, Stack } from "@mui/material";

const followers = [
  {
    mb_nick: "@ilkhom9601",
    name: "Temirov Ilkhom",
    following: true,
    img: "/images/ilkhom.svg",
  },
  {
    mb_nick: "@john2909",
    name: "Jonibek Buronov",
    following: false,
    img: "/images/john.svg",
  },
  {
    mb_nick: "@umka",
    name: "Umida Juraeva",
    following: true,
    img: "/images/umka.svg",
  },
];
export default function MemberFollowers(props: any) {
  return (
    <Stack>
      {followers?.map((follower) => {
        return (
          <Stack>
            <Stack className="followers_target_articles" flexDirection={"row"}>
              <Box className="followers_img">
                <img src={follower.img} alt="article" />
              </Box>
              <Stack
                className="followers_target_articles_wrapper"
                flexDirection={"row"}
              >
                <Stack>
                  <Stack flexDirection={"row"} alignItems={"center"}>
                    <Box className="followers_user_name">
                      {follower.mb_nick}
                    </Box>
                  </Stack>

                  <Box className="followers_target_articles_text">
                    {follower.name}
                  </Box>
                </Stack>

                <Stack>
                  {props.actions_enabled &&
                    (follower.following ? (
                      <Button variant="contained" className="following_btn">
                        Following
                      </Button>
                    ) : (
                      <Button variant="contained" className="followback_btn">
                        <img src="/icons/followback.svg" alt="followback img" />
                        <span>Follow back</span>
                      </Button>
                    ))}
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        );
      })}
    </Stack>
  );
}
