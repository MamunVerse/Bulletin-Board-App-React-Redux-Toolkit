import { createSlice, nanoid } from "@reduxjs/toolkit";
import sub from "date-fns/sub";

const initialState = [
  {
    id: 1,
    title: "This is first title",
    content: "This is first content",
    userId : 1,
    date : sub(new Date(), {minutes : 10}).toISOString(),
    reactions : {
      thumbsUp : 0,
      wow : 0,
      heart : 0,
      rocket : 0,
      coffee : 0
    }
  },
  {
    id: 2,
    title: "This is Second title",
    content: "This is Second content",
    userId : 2,
    date : sub(new Date(), {minutes : 5}).toISOString(),
    reactions : {
      thumbsUp : 0,
      wow : 0,
      heart : 0,
      rocket : 0,
      coffee : 0
    }
  },
];

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
export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;
