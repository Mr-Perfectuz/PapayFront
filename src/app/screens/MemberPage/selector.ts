import { createSelector } from "reselect";
import { AppRootState } from "../../../types/screen";

const selectMemberPage = (state: AppRootState) => state.memberPage;


export const retreiveChosenMember = createSelector(
    selectMemberPage,
    (MemberPage) => MemberPage.chosenMember
)

export const retreivechosenMemberBoArticles = createSelector(
    selectMemberPage,
    (MemberPage) => MemberPage.chosenMemberBoArticles
)

export const retreiveChosenSingleBoArticle = createSelector(
    selectMemberPage,
    (MemberPage) => MemberPage.chosenSingleBoArticle
)

export const retreiveMemberFollowers = createSelector(
    selectMemberPage,
    (MemberPage) => MemberPage.memberFollowers
)

export const retreiveMemberFollowings = createSelector(
    selectMemberPage,
    (MemberPage) => MemberPage.memberFollowings
)