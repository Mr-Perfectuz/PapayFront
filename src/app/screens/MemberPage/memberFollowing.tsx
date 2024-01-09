import React, { useEffect, useState } from "react";
import { Box, Button, Pagination, PaginationItem, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

//REDUX
import { createSelector } from "reselect";
import { useDispatch, useSelector } from "react-redux";
import { setMemberFollowings } from "./slice";
import { Dispatch } from "@reduxjs/toolkit";
import { retreiveMemberFollowings } from "./selector";
import { FollowSearchObj, Following } from "../../../types/follow";
import FollowApiService from "../../apiServices/followApiService";
import assert from "assert";
import { Definer } from "../../../lib/Definer";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import { serviceApi } from "../../../lib/config";

// REDUX SLICE
const actionDispatch = (dispatch: Dispatch) => ({
  setMemberFollowings: (data: Following[]) =>
    dispatch(setMemberFollowings(data)),
});

// REDUX SELECTOR
const memberFollowingsRetreiver = createSelector(
  retreiveMemberFollowings,
  (memberFollowings) => ({ memberFollowings })
);

// const following = [
//   {
//     mb_nick: "@ilkhom9601",
//     name: "Temirov Ilkhom",
//     following: true,
//     img: "/images/ilkhom.svg",
//   },
//   {
//     mb_nick: "@john2909",
//     name: "Jonibek Buronov",
//     following: true,
//     img: "/images/john.svg",
//   },
//   {
//     mb_nick: "@umka",
//     name: "Umida Juraeva",
//     following: true,
//     img: "/images/umka.svg",
//   },
// ];
export default function MemberFollowing(props: any) {
  //INITIALIZATIONS
  const { mb_id, setFollowRebuilt, followRebuilt } = props;

  const { setMemberFollowings } = actionDispatch(useDispatch());
  const { memberFollowings } = useSelector(memberFollowingsRetreiver);
  const [followingsSeachObj, setFollowingsSeachObj] = useState<FollowSearchObj>(
    {
      page: 1,
      limit: 5,
      mb_id: mb_id,
    }
  );

  useEffect(() => {
    const followService = new FollowApiService();
    followService
      .getMemberFollowings(followingsSeachObj)
      .then((data) => setMemberFollowings(data))
      .catch((err) => console.log(err));
  }, [followingsSeachObj, followRebuilt]);

  const handlePaginationChange = (event: any, value: number) => {
    followingsSeachObj.page = value;
    setFollowingsSeachObj({ ...followingsSeachObj });
  };

  // HANDLERS
  const unsubscribeHandler = async (e: any, id: string) => {
    e.stopPropagation();
    assert.ok(localStorage.getItem("member_data"), Definer.auth_err);

    const followService = new FollowApiService();
    await followService.unsubscribe(id);
    await sweetTopSmallSuccessAlert("Unsubscriber successfully !", 700, false);
    setFollowRebuilt(!followRebuilt);
    try {
    } catch (err: any) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };

  return (
    <Stack>
      {memberFollowings?.map((following: Following) => {
        const image_url = following?.follow_member_data?.mb_image
          ? `${serviceApi}/${following?.follow_member_data?.mb_image}`
          : "/auth/user.svg";
        return (
          <Stack>
            <Stack className="followers_target_articles" flexDirection={"row"}>
              <Box className="followers_img">
                <img className="foll_img" src={image_url} alt="article" />
              </Box>
              <Stack
                className="followers_target_articles_wrapper"
                flexDirection={"row"}
              >
                <Stack>
                  <Stack flexDirection={"row"} alignItems={"center"}>
                    <Box className="followers_user_name">
                      {following?.follow_member_data?.mb_nick}
                    </Box>
                  </Stack>

                  <Box className="followers_target_articles_text">
                    {following?.follow_member_data?.mb_type}
                  </Box>
                </Stack>

                <Stack>
                  {props.actions_enabled && (
                    <Button
                      variant="contained"
                      className="cancel_following_btn"
                      onClick={(e) =>
                        unsubscribeHandler(e, following?.follow_id)
                      }
                    >
                      <img src="/icons/followback.svg" alt="followback img" />
                      <span>Bekor qilish</span>
                    </Button>
                  )}
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        );
      })}

      <Stack flexDirection={"column"} alignItems={"center"}>
        <Pagination
          className="community_pagination"
          count={followingsSeachObj.page >= 3 ? followingsSeachObj.page + 1 : 3}
          page={followingsSeachObj.page}
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
    </Stack>
  );
}
