import React from "react";
import { Box, Link, Stack } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

export default function TargetArticles(props: any) {
  return (
    <Stack>
      {props.targetBoardArticles?.map((article: any, index: string) => {
        const art_img = "/community/article_img.svg";
        return (
          <Link href={""}>
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
                  <span>22-05-15 02:08</span>
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
          </Link>
        );
      })}
    </Stack>
  );
}
