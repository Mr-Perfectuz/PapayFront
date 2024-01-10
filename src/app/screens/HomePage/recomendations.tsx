import { Avatar, Box, Container, Stack } from "@mui/material";
import React, { useEffect } from "react";

//REDUX
import { createSelector } from "reselect";
import { useDispatch, useSelector } from "react-redux";
import { setBestBoArticle, setTrendBoArticle, setNewsBoArticle } from "./slice";
import { Dispatch } from "@reduxjs/toolkit";
import {
  retreiveBestBoArticle,
  retreiveTrendBoArticle,
  retreiveNewsBoArticle,
} from "./selector";
import { BoArticle } from "../../../types/boArticles";
import CommunityApiService from "../../apiServices/communityApiService";
import { serviceApi } from "../../../lib/config";
import { verifierMemberData } from "../../apiServices/vertify";
import { TuViewer } from "../../components/tuiEditor/TuViewer";

// REDUX SLICE
const actionDispatch = (dispatch: Dispatch) => ({
  setBestBoArticle: (data: BoArticle[]) => dispatch(setBestBoArticle(data)),
  setTrendBoArticle: (data: BoArticle[]) => dispatch(setTrendBoArticle(data)),
  setNewsBoArticle: (data: BoArticle[]) => dispatch(setNewsBoArticle(data)),
});

// REDUX SELECTOR
const bestBoArticleRetreiver = createSelector(
  retreiveBestBoArticle,
  (bestBoArticle) => ({ bestBoArticle })
);
const trendBoArticleRetreiver = createSelector(
  retreiveTrendBoArticle,
  (trendBoArticle) => ({ trendBoArticle })
);
const newsBoArticleRetreiver = createSelector(
  retreiveNewsBoArticle,
  (newsBoArticle) => ({ newsBoArticle })
);

export default function Recomendations() {
  //INITIALIZATIONS
  const { setBestBoArticle, setTrendBoArticle, setNewsBoArticle } =
    actionDispatch(useDispatch());
  const { bestBoArticle } = useSelector(bestBoArticleRetreiver);
  const { trendBoArticle } = useSelector(trendBoArticleRetreiver);
  const { newsBoArticle } = useSelector(newsBoArticleRetreiver);

  useEffect(() => {
    const communityService = new CommunityApiService();
    communityService
      .getTargetArticles({
        bo_id: "all",
        page: 1,
        limit: 2,
        order: "art_views",
      })
      .then((data) => setBestBoArticle(data))
      .catch((err) => console.log(err));

    communityService
      .getTargetArticles({
        bo_id: "all",
        page: 1,
        limit: 2,
        order: "art_likes",
      })
      .then((data) => setTrendBoArticle(data))
      .catch((err) => console.log(err));

    communityService
      .getTargetArticles({
        bo_id: "celebrity",
        page: 1,
        limit: 2,
        order: "art_views",
      })
      .then((data) => setNewsBoArticle(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="top_article_frame">
      <Container
        maxWidth="lg"
        style={{
          marginTop: "50px",
          marginBottom: "60px",
          position: "relative",
        }}
      >
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Box className="category_title">Tafsiya qilingan maqolalar</Box>
          <Stack flexDirection={"row"} className="article_main">
            <Stack flexDirection={"column"}>
              <Stack className="article_container">
                <Box className="article_categorya_title">Ko’p ko’rilgan</Box>
                {bestBoArticle?.map((article: BoArticle) => {
                  const art_image = article?.art_image
                    ? `${serviceApi}/${article?.art_image}`
                    : "/restaurant/rc_img.png";
                  return (
                    <Stack flexDirection={"column"} key={article._id}>
                      <Stack className="articel_box" flexDirection={"row"}>
                        <Box
                          className="article_img"
                          sx={{ backgroundImage: `url(${art_image})` }}
                        ></Box>
                        <Stack className="article_info">
                          <Box className="article_main_info">
                            <div className="article_author">
                              <Avatar
                                alt="author photo"
                                src={
                                  article?.art_image
                                    ? `${serviceApi}/${article?.art_image}`
                                    : "/auth/user.svg"
                                }
                                sx={{ width: "35px", height: "35px" }}
                              />
                              <span className="auth_username">
                                {article?.member_data?.mb_nick}
                              </span>
                            </div>
                            <Box className="article_title" sx={{ mt: "22px" }}>
                              {article?.art_subjects}
                            </Box>
                            <p className="article_desc"></p>
                          </Box>
                        </Stack>
                      </Stack>
                    </Stack>
                  );
                })}
              </Stack>
              <Stack className="article_container">
                <Box className="article_categorya_title">Ko’p Yoqtirilgan</Box>
                {trendBoArticle?.map((article: BoArticle) => {
                  const art_image = article?.art_image
                    ? `${serviceApi}/${article?.art_image}`
                    : "/restaurant/res_n2.png";
                  return (
                    <Stack flexDirection={"column"} key={article._id}>
                      <Stack className="articel_box" flexDirection={"row"}>
                        <Box
                          className="article_img"
                          sx={{
                            backgroundImage: `url(${art_image})`,
                            objectFit: "contain",
                          }}
                        ></Box>
                        <Stack className="article_info">
                          <Box className="article_main_info">
                            <div className="article_author">
                              <Avatar
                                alt="author photo"
                                src={
                                  article?.art_image
                                    ? `${serviceApi}/${article?.art_image}`
                                    : "/auth/user.svg"
                                }
                                sx={{ width: "35px", height: "35px" }}
                              />
                              <span className="auth_username">
                                {article?.member_data?.mb_nick}
                              </span>
                            </div>
                            <Box className="article_title" sx={{ mt: "22px" }}>
                              {article?.art_subjects}
                            </Box>
                            <p className="article_desc"></p>
                          </Box>
                        </Stack>
                      </Stack>
                    </Stack>
                  );
                })}
              </Stack>
            </Stack>
            <Stack className="article_container">
              <Box className="article_categorya_title">Mashhurlar</Box>
              {newsBoArticle?.map((article: BoArticle) => {
                return (
                  <Box className="article_news">
                    <TuViewer chosenSingleBoArticle={article}></TuViewer>
                  </Box>
                );
              })}
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
