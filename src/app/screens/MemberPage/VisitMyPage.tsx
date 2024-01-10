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
import SettingsIcon from "@mui/icons-material/Settings";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { TuiEditor } from "../../components/tuiEditor/TuiEditor";
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
import {
  sweetErrorHandling,
  sweetFailureProvider,
} from "../../../lib/sweetAlert";
import CommunityApiService from "../../apiServices/communityApiService";
import MemberApiService from "../../apiServices/memberApiService";
import { BoArticle, SearchMemberArticleObj } from "../../../types/boArticles";
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

export default function VisitMyPage(props: any) {
  const { chosen_mb_id } = props;

  //INITIALIZATIONS
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

  const [articlesRebuilt, setArticlesRebuilt] = useState<Date>(new Date());

  const [value, setValue] = React.useState("1");

  const [followRebuilt, setFollowRebuilt] = useState<boolean>(false);

  const [memberArticleSearchObj, setMemberArticleSearchObj] =
    useState<SearchMemberArticleObj>({ mb_id: "none", page: 1, limit: 4 });

  useEffect(() => {
    if (!localStorage.getItem("member_data")) {
      sweetFailureProvider("Please Login First ! ", true, true);
    }
    const communityService = new CommunityApiService();
    const memberService = new MemberApiService();

    // chosenArticle starting point
    communityService
      .getMemberCommunityArticles(memberArticleSearchObj)
      .then((data) => setchosenMemberBoArticles(data))
      .catch((err) => console.log(err));

    // targetLikeHandler

    //
    memberService
      .getChosenMember(verifierMemberData?._id)
      .then((data) => setChosenMember(data))
      .catch((err) => console.log(err));
  }, [memberArticleSearchObj, articlesRebuilt, followRebuilt]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const handlePaginationChange = (event: any, value: number) => {
    memberArticleSearchObj.page = value;
    setMemberArticleSearchObj({ ...memberArticleSearchObj });
  };

  // renderChosenArticleHandler
  const renderChosenArticleHandler = async (art_id: string) => {
    try {
      const communityService = new CommunityApiService();
      communityService
        .getCHosenArticle(art_id)
        .then((data) => {
          setChosenSingleBoArticle(data);
          setValue("5");
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };

  return (
    <div className="visit_my_page">
      <Container className="visit_my_page_wrapper">
        <TabContext value={value}>
          <Stack flexDirection={"row"} justifyContent={"space-between"}>
            <Stack flexDirection={"column"}>
              <TabPanel value="1">
                <Box className="my_articles_title">Mening Maqolalarim</Box>
                <Marginer
                  width="300"
                  bg="#E4E4E4D4"
                  height="1"
                  direction="horizontal"
                />
                <Stack className="visit_my_page_inner">
                  <MembersPosts
                    renderChosenArticleHandler={renderChosenArticleHandler}
                    chosenMemberBoArticles={chosenMemberBoArticles}
                    setArticlesRebuilt={setArticlesRebuilt}
                  />
                </Stack>
                <Stack flexDirection={"column"} alignItems={"center"}>
                  <Pagination
                    className="community_pagination"
                    count={
                      memberArticleSearchObj.page >= 3
                        ? memberArticleSearchObj.page + 1
                        : 3
                    }
                    page={memberArticleSearchObj.page}
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
                    onChange={handlePaginationChange}
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
                    actions_enabled={true}
                    mb_id={verifierMemberData?._id}
                    setFollowRebuilt={setFollowRebuilt}
                    followRebuilt={followRebuilt}
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
                    actions_enabled={true}
                    mb_id={verifierMemberData?._id}
                    setFollowRebuilt={setFollowRebuilt}
                    followRebuilt={followRebuilt}
                  />
                </Stack>
              </TabPanel>
              <TabPanel value="4">
                <Box className="my_articles_title_write">Maqola Yozish</Box>
                <Marginer
                  width="300"
                  bg="#E4E4E4D4"
                  height="1"
                  direction="horizontal"
                />
                <Stack className="menu_content">
                  <TuiEditor
                    setValue={setValue}
                    setArticlesRebuilt={setArticlesRebuilt}
                  />
                </Stack>
              </TabPanel>
              <TabPanel value="5">
                <Box className="my_articles_title">Tanlangan Maqola</Box>
                <Marginer
                  width="300"
                  bg="#E4E4E4D4"
                  height="1"
                  direction="horizontal"
                />

                <Stack className="menu_content">
                  <TuViewer
                    chosenSingleBoArticle={chosenSingleBoArticle}
                    // text={`<div>Tanlangan Maqolalar <div/>`}
                  />
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
                  <Stack flexDirection={"row"} sx={{ position: "relative" }}>
                    <img
                      src="/auth/user_bike.svg"
                      alt="user img"
                      className="myPage_user_img"
                    />
                    <img
                      src={
                        chosenMember?.mb_type === "RESTAURANT"
                          ? "/auth/user.svg"
                          : "/auth/user_bike.svg"
                      }
                      alt="user icon img"
                      className="user_icon_img"
                    />
                    <a onClick={() => setValue("6")} className="settings_btn">
                      <SettingsIcon />
                    </a>
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
                    {verifierMemberData?.mb_description ??
                      "Qo'shimcha ma'lumot kiritilmagan !"}
                  </Box>
                  <Button
                    onClick={() => setValue("4")}
                    variant="contained"
                    className="article_btn"
                  >
                    MAQOLA YOZISH
                  </Button>
                </Stack>
              </Stack>
              <TabList
                orientation="vertical"
                variant="scrollable"
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: "divider", width: "98%" }}
              >
                {/* <Stack flexDirection={"column"}> */}
                <Tab
                  value={"1"}
                  component={() => (
                    <div onClick={() => setValue("1")} className={`articles `}>
                      <img src="/icons/article.svg" alt="following img" />
                      <span>Maqolalarim</span>
                    </div>
                  )}
                ></Tab>
                <Tab
                  value={"2"}
                  component={() => (
                    <div onClick={() => setValue("2")} className={`articles `}>
                      <img src="/icons/follower.svg" alt="following img" />
                      <span>Followers</span>
                    </div>
                  )}
                ></Tab>
                <Tab
                  value={"3"}
                  component={() => (
                    <div onClick={() => setValue("3")} className={`articles `}>
                      <img src="/icons/following.svg" alt="following img" />
                      <span>Following</span>
                    </div>
                  )}
                ></Tab>
                {/* </Stack> */}
              </TabList>
            </Stack>
          </Stack>
        </TabContext>
      </Container>
    </div>
  );
}
