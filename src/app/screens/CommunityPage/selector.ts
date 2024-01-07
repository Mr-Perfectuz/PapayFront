import { createSelector } from "reselect";
import { AppRootState } from "../../../types/screen";

const selectCommunityPage = (state: AppRootState) => state.communityPage;

export const retreiveTargetBoArticle = createSelector(
    selectCommunityPage, (CommunityPage) => CommunityPage.targetBoArticle
)



