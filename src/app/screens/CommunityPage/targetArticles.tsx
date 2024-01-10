import React from "react";
import { Box, Link, Stack } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { BoArticle } from "../../../types/boArticles";
import { serviceApi } from "../../../lib/config";
import moment from "moment";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import { Definer } from "../../../lib/Definer";
import assert from "assert";
import MemberApiService from "../../apiServices/memberApiService";

export default function TargetArticles(props: any) {
  const { setArticlesRebuilt } = props;
  const { targetBoardArticles } = props;
  console.log("article::", targetBoardArticles);

  // HANDLERS
  const targetLikeHandler = async (e: any) => {
    try {
      assert.ok(localStorage.getItem("member_data"), Definer.auth_err);

      const memberService = new MemberApiService();
      const like_result = await memberService.memberLikeTarget({
        like_ref_id: e.target.id,
        group_type: "community",
      });
      assert.ok(like_result, Definer.general_err);
      await sweetTopSmallSuccessAlert("success", 700, false);
      setArticlesRebuilt(new Date());
    } catch (err) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };

  return (
    <Stack>
      {props.targetBoardArticles?.map((article: BoArticle, index: number) => {
        const art_img = article?.art_image
          ? `${serviceApi}/${article.art_image}`
          : "/community/article_img.svg";
        return (
          <Stack key={index}>
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
                  <span>{article?.bo_id}</span>
                </Box>
                <Box
                  sx={{ color: "#fff" }}
                  className="target_articles_subjects"
                >
                  {article?.art_subject}
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
                      id={article?._id} ///_id
                      onClick={targetLikeHandler}
                      checked={
                        article?.me_liked && article.me_liked[0]?.my_favorite
                          ? true
                          : false
                      }
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
