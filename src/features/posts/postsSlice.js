import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id : 1,
        title : 'This is first title',
        content : 'This is first content'
    },
    {
        id : 2,
        title : 'This is Second title',
        content : 'This is Second content'
    }
]

const postsSlice = createSlice({
    name : 'posts',
    initialState,
    reducers : {
        postAdded(state, action){
            state.push(action.payload);
        }
    }
}) 

export const selectAllPosts = (state) => state.posts;
export const {postAdded} = postsSlice.actions;
export default postsSlice.reducer;