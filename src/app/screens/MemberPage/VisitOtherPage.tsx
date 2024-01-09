/* eslint-disable jsx-a11y/anchor-is-valid */
import { Box, Button, Container, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import MembersPosts from "./membersPosts";
import Marginer from "../../components/marginer";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import MemberFollowers from "./memberFollowers";
import MemberFollowing from "./memberFollowing";
import MySettings from "./mySettings";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { TuViewer } from "../../components/tuiEditor/TuViewer";

//REDUX
import { createSelector } from "reselect";
import { useDispatch, useSelector } from "react-redux";
import {
  setChosenMember,
  setchosenMemberBoArticles,
  setChosenSingleBoArticle,
} from "./slice";
import { Dispatch } from "@reduxjs/toolkit";
import {
  retreiveChosenMember,
  retreivechosenMemberBoArticles,
  retreiveChosenSingleBoArticle,
} from "./selector";
import { Member } from "../../../types/user";
import { useHistory } from "react-router-dom";
import CommunityApiService from "../../apiServices/communityApiService";
import MemberApiService from "../../apiServices/memberApiService";
import { BoArticle, SearchMemberArticleObj } from "../../../types/boArticles";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import assert from "assert";
import { Definer } from "../../../lib/Definer";
import FollowApiService from "../../apiServices/followApiService";
import { verifierMemberData } from "../../apiServices/vertify";

// REDUX SLICE
const actionDispatch = (dispatch: Dispatch) => ({
  setChosenMember: (data: Member) => dispatch(setChosenMember(data)),
  setchosenMemberBoArticles: (data: BoArticle[]) =>
    dispatch(setchosenMemberBoArticles(data)),
  setChosenSingleBoArticle: (data: BoArticle) =>
    dispatch(setChosenSingleBoArticle(data)),
});

// REDUX SELECTOR
const chosenMemberRetreiver = createSelector(
  retreiveChosenMember,
  (chosenMember) => ({ chosenMember })
);
const chosenMemberBoArticlesRetreiver = createSelector(
  retreivechosenMemberBoArticles,
  (chosenMemberBoArticles) => ({ chosenMemberBoArticles })
);
const chosenSingleBoArticleRetreiver = createSelector(
  retreiveChosenSingleBoArticle,
  (chosenSingleBoArticle) => ({ chosenSingleBoArticle })
);

export default function VisitOtherPage(props: any) {
  //INITIALIZATIONS
  const { chosen_mb_id, chosen_art_id } = props;
  console.log("{VisitOtherPage chosen_mb_id}:", chosen_mb_id);

  const history = useHistory();
  const {
    setChosenMember,
    setchosenMemberBoArticles,
    setChosenSingleBoArticle,
  } = actionDispatch(useDispatch());
  const { chosenMember } = useSelector(chosenMemberRetreiver);
  const { chosenMemberBoArticles } = useSelector(
    chosenMemberBoArticlesRetreiver
  );
  const { chosenSingleBoArticle } = useSelector(chosenSingleBoArticleRetreiver);

  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const [memberArticleSearchObj, setMemberArticleSearchObj] =
    useState<SearchMemberArticleObj>({
      mb_id: chosen_mb_id,
      page: 1,
      limit: 5,
    });

  const [articlesRebuilt, setArticlesRebuilt] = useState<Date>(new Date());
  const [followRebuilt, setFollowRebuilt] = useState<boolean>(false);

  useEffect(() => {
    if (chosen_mb_id === verifierMemberData?._id) {
      history.push("/member-page");
    }

    const memberService = new MemberApiService();
    memberService
      .getChosenMember(memberArticleSearchObj.mb_id)
      .then((data) => setChosenMember(data))
      .catch((err) => console.log(err));
  }, [verifierMemberData, chosen_mb_id, followRebuilt]);

  useEffect(() => {
    if (chosen_mb_id === verifierMemberData?._id) {
      history.push("/member-page");
      const communityService = new CommunityApiService();

      if (chosen_art_id) {
        communityService
          .getCHosenArticle(chosen_art_id)
          .then((data) => {
            setChosenSingleBoArticle(data);
            setValue("4");
          })
          .catch((err) => console.log(err));
      }
      communityService
        .getMemberCommunityArticles(memberArticleSearchObj)
        .then((data) => setchosenMemberBoArticles(data))
        .catch((err) => console.log(err));
    }
  }, [memberArticleSearchObj, chosen_mb_id, articlesRebuilt]);

  // HANDLERS

  const subscribeHandler = async (e: any) => {
    assert.ok(localStorage.getItem("member_data"), Definer.auth_err);

    const followService = new FollowApiService();
    await followService.subscribe(e.target.value);
    await sweetTopSmallSuccessAlert("Subscriber successfully !", 700, false);
    setFollowRebuilt(!followRebuilt);
    try {
    } catch (err: any) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };

  const unSubscribeHandler = async (e: any) => {
    assert.ok(localStorage.getItem("member_data"), Definer.auth_err);

    const followService = new FollowApiService();
    await followService.unsubscribe(e.target.value);
    await sweetTopSmallSuccessAlert("Unsubscriber successfully !", 700, false);
    setFollowRebuilt(!followRebuilt);
    try {
    } catch (err: any) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };

  // renderChosenArticleHandler
  const renderChosenArticleHandler = async (art_id: string) => {
    try {
      const communityService = new CommunityApiService();
      communityService
        .getCHosenArticle(art_id)
        .then((data) => {
          setChosenSingleBoArticle(data);
          setValue("4");
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };

  const handlePaginationChange = (event: any, value: number) => {
    memberArticleSearchObj.page = value;
    setMemberArticleSearchObj({ ...memberArticleSearchObj });
  };

  console.log("{VisitOtherPage chosenMember}:", chosenMember);

  return (
    <div className="visit_my_page">
      <Container className="visit_my_page_wrapper">
        <TabContext value={value}>
          <Stack flexDirection={"row"} justifyContent={"space-between"}>
            <Stack flexDirection={"column"}>
              <TabPanel value="1">
                <Box className="my_articles_title"> Maqolalar</Box>
                <Marginer
                  width="300"
                  bg="#E4E4E4D4"
                  height="1"
                  direction="horizontal"
                />
                <Stack className="visit_my_page_inner">
                  <MembersPosts
                    chosenMemberBoArticles={chosenMemberBoArticles}
                    setArticlesRebuilt={setArticlesRebuilt}
                    renderChosenArticleHandler={renderChosenArticleHandler}
                  />
                </Stack>
                <Stack flexDirection={"column"} alignItems={"center"}>
                  <Pagination
                    className="community_pagination"
                    count={5}
                    page={1}
                    renderItem={(item) => (
                      <PaginationItem
                        components={{
                          previous: ArrowBackIcon,
                          next: ArrowForwardIcon,
                        }}
                        {...item}
                        color={"primary"}
                      />
                    )}
                  />
                </Stack>
              </TabPanel>
              <TabPanel value="2">
                <Box className="my_articles_title">Followers</Box>
                <Marginer
                  width="300"
                  bg="#E4E4E4D4"
                  height="1"
                  direction="horizontal"
                />
                <Stack className="menu_content">
                  <MemberFollowers
                    actions_enabled={false}
                    setFollowRebuilt={setFollowRebuilt}
                    followRebuilt={followRebuilt}
                    mb_id={chosen_mb_id}
                  />
                </Stack>
              </TabPanel>
              <TabPanel value="3">
                <Box className="my_articles_title">Following</Box>
                <Marginer
                  width="300"
                  bg="#E4E4E4D4"
                  height="1"
                  direction="horizontal"
                />
                <Stack className="menu_content">
                  <MemberFollowing
                    actions_enabled={false}
                    mb_id={chosen_mb_id}
                  />
                </Stack>
              </TabPanel>
              <TabPanel value="4">
                <Box className="my_articles_title">Tanlangan Maqola</Box>
                <Stack className="menu_content">
                  <TuViewer chosenSingleBoArticle={chosenSingleBoArticle} />
                </Stack>
              </TabPanel>
              <TabPanel value="6">
                <Box className="my_articles_title_write">
                  Ma'lumotlarni o'zgartirish
                </Box>
                <Marginer
                  width="300"
                  bg="#E4E4E4D4"
                  height="1"
                  direction="horizontal"
                />

                <Stack className="menu_content">
                  <MySettings />
                </Stack>
              </TabPanel>
            </Stack>

            <Stack flexDirection={"column"}>
              <Stack className="my_page">
                <Stack className="order_info_box">
                  <Stack flexDirection={"row"}>
                    <img
                      src="/auth/user_bike.svg"
                      alt="user img"
                      className="otherPage_user_img"
                    />
                  </Stack>
                  <Box className="user_name">{chosenMember?.mb_nick}</Box>
                  <Box className="user_name_status">
                    {chosenMember?.mb_type}
                  </Box>
                  <Stack className="user_social_media" flexDirection={"row"}>
                    <FacebookIcon className="icon_soc_med" />
                    <InstagramIcon className="icon_soc_med" />
                    <YouTubeIcon className="icon_soc_med" />
                    <TelegramIcon className="icon_soc_med" />
                  </Stack>
                  <Stack flexDirection={"row"}>
                    <Stack
                      flexDirection={"row"}
                      sx={{ mr: "10px", cursor: "pointer" }}
                    >
                      <Box>Followers: </Box>
                      <span>{chosenMember?.mb_subscriber_cnt}</span>
                    </Stack>
                    <Stack
                      flexDirection={"row"}
                      sx={{ ml: "10px", cursor: "pointer" }}
                    >
                      <Box>Followings: </Box>
                      <span>{chosenMember?.mb_follow_cnt}</span>
                    </Stack>
                  </Stack>
                  <Box className="usr_msg">
                    {chosenMember?.mb_description ??
                      "Qo'shimcha ma'lumot kiritilmagan !"}
                  </Box>
                </Stack>

                <TabList onChange={handleChange}>
                  <Stack flexDirection={"column"}>
                    {chosenMember?.me_followed &&
                    chosenMember?.me_followed[0]?.my_following ? (
                      <Tab
                        value={"4"}
                        sx={{ position: "relative" }}
                        component={() => (
                          <Button
                            value={chosenMember?._id}
                            onClick={unSubscribeHandler}
                            variant="contained"
                            className="other_page_article_btn"
                          >
                            Bekor Qilish
                          </Button>
                        )}
                      ></Tab>
                    ) : (
                      <Tab
                        value={"4"}
                        component={() => (
                          <Button
                            value={chosenMember?._id}
                            onClick={subscribeHandler}
                            variant="contained"
                            className="followback_btn"
                          >
                            <img
                              src="/icons/followback.svg"
                              alt="followback img"
                            />
                            <span>Follow back</span>
                          </Button>
                        )}
                      ></Tab>
                    )}
                  </Stack>
                </TabList>
              </Stack>

              <TabList>
                <Stack flexDirection={"column"}>
                  <Tab
                    value={"1"}
                    component={() => (
                      <div
                        onClick={() => setValue("1")}
                        className={`articles ${value}`}
                      >
                        <img src="/icons/article.svg" alt="following img" />
                        <span>Maqolalarim</span>
                      </div>
                    )}
                  ></Tab>
                  <Tab
                    value={"2"}
                    component={() => (
                      <div
                        onClick={() => setValue("2")}
                        className={`articles ${value}`}
                      >
                        <img src="/icons/follower.svg" alt="following img" />
                        <span>Followers</span>
                      </div>
                    )}
                  ></Tab>
                  <Tab
                    value={"3"}
                    component={() => (
                      <div
                        onClick={() => setValue("3")}
                        className={`articles ${value}`}
                      >
                        <img src="/icons/following.svg" alt="following img" />
                        <span>Following</span>
                      </div>
                    )}
                  ></Tab>
                </Stack>
              </TabList>
            </Stack>
          </Stack>
        </TabContext>
      </Container>
    </div>
  );
}
