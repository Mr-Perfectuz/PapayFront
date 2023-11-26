import React from "react";
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
const targetBoardArticles = [1, 2, 3, 4, 5];

export default function CommunityPage(props: any) {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
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
                    <TargetArticles targetBoardArticles={targetBoardArticles} />
                  </TabPanel>

                  <TabPanel value="2">
                    <TargetArticles targetBoardArticles={[1, 2]} />
                  </TabPanel>
                  <TabPanel value="3">
                    <TargetArticles targetBoardArticles={[1, 2, 3]} />
                  </TabPanel>
                  <TabPanel value="4">
                    <TargetArticles targetBoardArticles={[1, 2, 3, 4]} />
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
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </div>
  );
}
