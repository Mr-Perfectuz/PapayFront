import React, { useEffect, useState } from "react";
import { Box, Container, Stack } from "@mui/material";
import "../../../css/community.css";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import Marginer from "../../components/marginer";
import TargetArticles from "./targetArticles";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CommunityChats from "./communityChats";
import CommunityApiService from "../../apiServices/communityApiService";
import { BoArticles, SearchArticleObj } from "../../../types/boArticles";

//REDUX
import { createSelector } from "reselect";
import { useDispatch, useSelector } from "react-redux";
import { setTargetBoArticles } from "./slice";
import { Dispatch } from "@reduxjs/toolkit";
import { retreiveTargetBoArticles } from "./selector";

// REDUX SLICE
const actionDispatch = (dispatch: Dispatch) => ({
  setTargetBoArticles: (data: BoArticles[]) =>
    dispatch(setTargetBoArticles(data)),
});

// REDUX SELECTOR
const targetBoArticlesRetreiver = createSelector(
  retreiveTargetBoArticles,
  (targetBoArticles) => ({ targetBoArticles })
);

export default function CommunityPage(props: any) {
  //INITIALIZATIONS
  const { setTargetBoArticles } = actionDispatch(useDispatch());
  const { targetBoArticles } = useSelector(targetBoArticlesRetreiver);

  const [value, setValue] = React.useState("1");
  const [searchArticlesObj, setSearchArticlesObj] = useState<SearchArticleObj>({
    bo_id: "all",
    page: 1,
    limit: 4,
  });

  const [articlesRebuilt, setArticlesRebuilt] = useState<Date>(new Date());

  useEffect(() => {
    const communityService = new CommunityApiService();
    communityService
      .getTargetArticles(searchArticlesObj)
      .then((data) => setTargetBoArticles(data))
      .catch((err) => console.log(err));
  }, [searchArticlesObj, articlesRebuilt]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    searchArticlesObj.page = 1;
    switch (newValue) {
      case "1":
        searchArticlesObj.bo_id = "all";
        break;
      case "2":
        searchArticlesObj.bo_id = "celebrity";
        break;
      case "3":
        searchArticlesObj.bo_id = "evaluation";
        break;
      case "4":
        searchArticlesObj.bo_id = "story";
        break;
    }

    setSearchArticlesObj({ ...searchArticlesObj });
    setValue(newValue);
  };

  const handlePaginationChange = (event: any, value: number) => {
    searchArticlesObj.page = value;
    setSearchArticlesObj({ ...searchArticlesObj, limit: 4 });
  };

  return (
    <div className="community_page">
      <Stack>
        <Container>
          <Stack className="community_wrapper" flexDirection={"row"}>
            <CommunityChats />
            <Stack className="artices_page">
              <Box>
                <TabContext value={value}>
                  <Stack
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: "column",
                      borderBottom: 1,
                      borderColor: "divider",
                    }}
                  >
                    <TabList
                      className="orders_tablist"
                      onChange={handleChange}
                      aria-label="lab API tabs example"
                      style={{
                        display: "flex",
                        width: "100%",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Tab
                        label="Barcha Maqolalar"
                        value="1"
                        sx={{ flex: "1" }}
                      />
                      <Tab label="Mashhurlar" value="2" sx={{ flex: "1" }} />
                      <Tab
                        label="Oshxonaga Baho"
                        value="3"
                        sx={{ flex: "1" }}
                      />
                      <Tab label="Hikoyalar" value="4" sx={{ flex: "1" }} />
                    </TabList>
                    <Marginer
                      width="300"
                      bg="#E4E4E4D4"
                      height="1"
                      direction="horizontal"
                    />
                  </Stack>

                  <TabPanel value="1">
                    <TargetArticles
                      targetBoardArticles={targetBoArticles}
                      setArticlesRebuilt={setArticlesRebuilt}
                    />
                  </TabPanel>

                  <TabPanel value="2">
                    <TargetArticles
                      targetBoardArticles={targetBoArticles}
                      setArticlesRebuilt={setArticlesRebuilt}
                    />
                  </TabPanel>
                  <TabPanel value="3">
                    <TargetArticles
                      targetBoardArticles={targetBoArticles}
                      setArticlesRebuilt={setArticlesRebuilt}
                    />
                  </TabPanel>
                  <TabPanel value="4">
                    <TargetArticles
                      targetBoardArticles={targetBoArticles}
                      setArticlesRebuilt={setArticlesRebuilt}
                    />
                  </TabPanel>
                </TabContext>
              </Box>
              <Stack sx={{ marginTop: "auto" }}>
                <Marginer
                  width="300"
                  bg="#E4E4E4D4"
                  height="1"
                  direction="horizontal"
                />
              </Stack>
              <Stack flexDirection={"column"} alignItems={"center"}>
                <Pagination
                  count={5}
                  page={1}
                  className="community_pagination"
                  renderItem={(item) => (
                    <PaginationItem
                      components={{
                        previous: ArrowBackIcon,
                        next: ArrowForwardIcon,
                      }}
                      {...item}
                      color={"secondary"}
                    />
                  )}
                  onChange={handlePaginationChange}
                />
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </div>
  );
}
