import React from "react";
import { Box, Stack } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import moment from "moment";

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

const number_of_articles = [1, 2, 3];

export default function MembersPosts(props: any) {
  return (
    <Stack>
      {number_of_articles?.map((index) => {
        const art_img = "/community/article_img.svg";
        return (
          <Stack>
            <Stack className="target_articles" flexDirection={"row"}>
              <Box>
                <img src={art_img} alt="article" />
              </Box>
              <Stack className="target_articles_wrapper">
                <Stack flexDirection={"row"} alignItems={"center"}>
                  <img
                    className="target_articles_user_img"
                    src="/auth/user.svg"
                    alt="user"
                  />
                  <Box className="target_articles_user_name">@John</Box>
                </Stack>

                <Box className="target_articles_text">
                  Kebuli Rice with <br /> tomatoes s...
                </Box>
                <Stack
                  flexDirection={"row"}
                  justifyContent={"flex-end"}
                  className="target_articles_last"
                >
                  <span>{moment().format("YY-MM-DD HH:mm")}</span>
                  <Box>
                    <Checkbox
                      checkedIcon={<Favorite style={{ color: "red" }} />}
                      icon={<FavoriteBorder />}
                    />
                    <span>98</span>
                  </Box>
                  <Box className="removed_eve_box">
                    <RemoveRedEyeIcon style={{ color: "#fff" }} />
                    <span className="target_articles_eye_icon">98</span>
                  </Box>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        );
      })}
    </Stack>
  );
}
