import React, { useEffect, useState } from "react";
import { Box, Button, Pagination, PaginationItem, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
//REDUX
import { createSelector } from "reselect";
import { useDispatch, useSelector } from "react-redux";
import { setMemberFollowers } from "./slice";
import { Dispatch } from "@reduxjs/toolkit";
import { retreiveMemberFollowers } from "./selector";
import { FollowSearchObj, Follower } from "../../../types/follow";
import FollowApiService from "../../apiServices/followApiService";
import { serviceApi } from "../../../lib/config";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import assert from "assert";
import { Definer } from "../../../lib/Definer";
import { useHistory } from "react-router-dom";

// REDUX SLICE
const actionDispatch = (dispatch: Dispatch) => ({
  setMemberFollowers: (data: Follower[]) => dispatch(setMemberFollowers(data)),
});

// REDUX SELECTOR
const memberFollowersRetreiver = createSelector(
  retreiveMemberFollowers,
  (memberFollowers) => ({ memberFollowers })
);

export default function MemberFollowers(props: any) {
  //INITIALIZATIONS
  const history = useHistory();
  const { mb_id, setFollowRebuilt, followRebuilt } = props;
  const { setMemberFollowers } = actionDispatch(useDispatch());
  const { memberFollowers } = useSelector(memberFollowersRetreiver);
  const [followersSeachObj, setFollowersSeachObj] = useState<FollowSearchObj>({
    page: 1,
    limit: 5,
    mb_id: mb_id,
  });
  useEffect(() => {
    const followService = new FollowApiService();
    followService
      .getMemberFollowers(followersSeachObj)
      .then((data) => setMemberFollowers(data))
      .catch((err) => console.log(err));
  }, [followersSeachObj, followRebuilt]);

  // HANDLERS
  const subscribeHandler = async (e: any, id: string) => {
    e.stopPropagation();
    assert.ok(localStorage.getItem("member_data"), Definer.auth_err);

    const followService = new FollowApiService();
    await followService.subscribe(id);
    await sweetTopSmallSuccessAlert("Subscriber successfully !", 700, false);
    setFollowRebuilt(!followRebuilt);
    try {
    } catch (err: any) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };

  const handlePaginationChange = (event: any, value: number) => {
    followersSeachObj.page = value;
    setFollowersSeachObj({ ...followersSeachObj });
  };

  const visitMemberHandler = (mb_id: string) => {
    history.push(`/member-page/other?mb_id=${mb_id}`);
    document.location.reload();
  };

  return (
    <Stack>
      {memberFollowers?.map((follower: Follower) => {
        const image_url = follower?.subscriber_member_data?.mb_image
          ? `${serviceApi}/${follower?.subscriber_member_data?.mb_image}`
          : "/auth/user.svg";
        return (
          <Stack>
            <Stack className="followers_target_articles" flexDirection={"row"}>
              <Box
                className="followers_img"
                onClick={() => visitMemberHandler(follower?.subscriber_id)}
              >
                <img className="foll_img" src={image_url} alt="article" />
              </Box>
              <Stack
                className="followers_target_articles_wrapper"
                flexDirection={"row"}
              >
                <Stack>
                  <Stack flexDirection={"row"} alignItems={"center"}>
                    <Box
                      className="followers_user_name"
                      onClick={() =>
                        visitMemberHandler(follower?.subscriber_id)
                      }
                    >
                      {follower?.subscriber_member_data?.mb_nick}
                    </Box>
                  </Stack>

                  <Box className="followers_target_articles_text">
                    {follower?.subscriber_member_data?.mb_type}
                  </Box>
                </Stack>

                <Stack>
                  {props.actions_enabled &&
                    (follower?.me_followed &&
                    follower?.me_followed[0]?.my_following ? (
                      <Button variant="contained" className="following_btn">
                        Following
                      </Button>
                    ) : (
                      <Button
                        onClick={(e) =>
                          subscribeHandler(e, follower?.subscriber_id)
                        }
                        variant="contained"
                        className="followback_btn"
                      >
                        <img src="/icons/followback.svg" alt="followback img" />
                        <span>Follow back</span>
                      </Button>
                    ))}
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        );
      })}

      <Stack flexDirection={"column"} alignItems={"center"}>
        <Pagination
          className="community_pagination"
          count={followersSeachObj.page >= 3 ? followersSeachObj.page + 1 : 3}
          page={followersSeachObj.page}
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
