import { createSlice, nanoid } from "@reduxjs/toolkit";
import sub from "date-fns/sub";

const initialState = {
  posts: [],
  status: 'idle', // 'idle' | 'loading' | 'success' | 'failed
  error: null
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
            date : new Date().toISOString(),
            reactions : {
              thumbsUp : 0,
              wow : 0,
              heart : 0,
              rocket : 0,
              coffee : 0
            } 
          },
        };
      },
    },
    reactionAdded(state, action){
      const {postId, reaction} = action.payload;
      const existingPost = state.find(post => post.id == postId);
      if(existingPost){
        existingPost.reactions[reaction]++
      }
    }
  },
});

export const selectAllPosts = (state) => state.posts;
export const { postAdded, reactionAdded } = postsSlice.actions;
export default postsSlice.reducer;
