import { createSlice } from "@reduxjs/toolkit";
import { CommunityPageState } from "../../../types/screen";

const initialState: CommunityPageState = {
    targetBoArticle: []
}

const CommunityPageSlice = createSlice({
    name: "communityPage",
    initialState,
    reducers: {
        setTargetBoArticle: (state, action) => {
            state.targetBoArticle = action.payload;
        }
    }
})

export const {setTargetBoArticle} = CommunityPageSlice.actions;
const CommunityPageReducer = CommunityPageSlice.reducer;
export default CommunityPageReducer;