import React from "react";
import { Box, Link, Stack } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { BoArticles } from "../../../types/boArticles";
import { serviceApi } from "../../../lib/config";
import moment from "moment";

export default function TargetArticles(props: any) {
  const { targetBoardArticles } = props;
  console.log("props::", props);
  console.log("article::", targetBoardArticles);

  return (
    <Stack>
      {props.targetBoardArticles?.map((article: BoArticles) => {
        const art_img = article?.art_image
          ? `${serviceApi}/${article.art_image}`
          : "/community/article_img.svg";
        return (
          <Stack key={article.bo_id}>
            <Stack className="target_articles" flexDirection={"row"}>
              <Box>
                <img src={art_img} alt="article" />
              </Box>
              <Stack className="target_articles_wrapper">
                <Stack flexDirection={"row"} alignItems={"center"}>
                  <img
                    className="target_articles_user_img"
                    src={art_img}
                    alt="user"
                  />
                  <Box className="target_articles_user_name">
                    {article.member_data.mb_nick}
                  </Box>
                </Stack>

                <Box className="target_articles_text">
                  {article?.art_subjects}
                  {article?.art_content}
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
                      id={article?.bo_id} ///_id
                    />
                    <span>{article?.art_likes}</span>
                  </Box>
                  <Box className="removed_eve_box">
                    <RemoveRedEyeIcon style={{ color: "#fff" }} />
                    <span className="target_articles_eye_icon">
                      {article?.art_views}
                    </span>
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
