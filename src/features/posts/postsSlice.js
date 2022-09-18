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

    }
})

export const selectAllPosts = (state) => state.posts;
export default postsSlice.reducer;