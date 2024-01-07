import { createSlice } from "@reduxjs/toolkit";
import { MemberPageState } from "../../../types/screen";

const initialState: MemberPageState = {
    chosenMember:  null,
    chosenMemberBoArticle: [],
    chosenSingleBoArticle:  null,
    memberFollowers: [],
    memberFollowings: []
}

const memberPageSlice = createSlice({
    name: "memberPage",
    initialState,
    reducers: {
        setChosenMember: (state, action) => {
            state.chosenMember = action.payload; 
        },
        setChosenMemberBoArticle: (state, action) => {
            state.chosenMemberBoArticle = action.payload;
        },
        setChosenSingleBoArticle: (state, action) => {
            state.chosenSingleBoArticle = action.payload;
        },
        setMemberFollowers: (state, action) => {
            state.memberFollowers = action.payload;
        },
        SetMemberFollowings: (state, action) => {
            state.memberFollowings = action.payload;
        }
    }
})


export const {setChosenMember, setChosenMemberBoArticle, setChosenSingleBoArticle, setMemberFollowers, SetMemberFollowings} = memberPageSlice.actions;
const MemberPageReducer = memberPageSlice.reducer;
export default MemberPageReducer;